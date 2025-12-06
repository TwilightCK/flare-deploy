// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IFtsoRegistry.sol";

contract GameMatch is ReentrancyGuard, Ownable {
    IFtsoRegistry public ftsoRegistry;
    
    uint256 public constant GAME_DURATION = 5 minutes;
    uint256 public constant MIN_STAKE = 0.01 ether;
    uint256 public platformFee = 5; // 5%
    
    enum Prediction { UP, DOWN }
    enum GameStatus { WAITING, ACTIVE, COMPLETED, CANCELLED }
    
    struct Game {
        address player1;
        address player2;
        uint256 stakeAmount;
        uint256 startTime;
        uint256 startPrice;
        string priceSymbol;
        Prediction player1Prediction;
        Prediction player2Prediction;
        GameStatus status;
        bool player1Claimed;
        bool player2Claimed;
        bool player1HasPredicted;
        bool player2HasPredicted;
    }
    
    struct Player {
        uint256 gamesPlayed;
        uint256 gamesWon;
        uint256 totalEarnings;
        bool inQueue;
    }
    
    mapping(uint256 => Game) public games;
    mapping(address => Player) public players;
    mapping(address => uint256) public activeGames;
    
    address[] public matchQueue;
    uint256 public gameCounter;
    
    event PlayerJoinedQueue(address indexed player);
    event GameCreated(uint256 indexed gameId, address player1, address player2, uint256 stake);
    event PredictionMade(uint256 indexed gameId, address player, Prediction prediction);
    event GameCompleted(uint256 indexed gameId, address winner1, address winner2, uint256 payout);
    event RewardsClaimed(uint256 indexed gameId, address player, uint256 amount);
    
    constructor(address _ftsoRegistry) Ownable(msg.sender) {
        ftsoRegistry = IFtsoRegistry(_ftsoRegistry);
    }
    
    function joinQueue() external payable {
        require(msg.value >= MIN_STAKE, "Stake too low");
        require(!players[msg.sender].inQueue, "Already in queue");
        require(activeGames[msg.sender] == 0, "Already in active game");
        
        players[msg.sender].inQueue = true;
        matchQueue.push(msg.sender);
        
        emit PlayerJoinedQueue(msg.sender);
        
        // Try to create a match if we have 2+ players
        if (matchQueue.length >= 2) {
            _createMatch();
        }
    }
    
    function _createMatch() private {
        require(matchQueue.length >= 2, "Not enough players");
        
        address player1 = matchQueue[matchQueue.length - 2];
        address player2 = matchQueue[matchQueue.length - 1];
        
        // Remove from queue
        matchQueue.pop();
        matchQueue.pop();
        
        players[player1].inQueue = false;
        players[player2].inQueue = false;
        
        uint256 stake = address(this).balance >= MIN_STAKE * 2 ? MIN_STAKE : msg.value;
        
        gameCounter++;
        uint256 gameId = gameCounter;
        
        games[gameId] = Game({
            player1: player1,
            player2: player2,
            stakeAmount: stake,
            startTime: block.timestamp,
            startPrice: 0,
            priceSymbol: "FLR/USD",
            player1Prediction: Prediction.UP,
            player2Prediction: Prediction.UP,
            status: GameStatus.WAITING,
            player1Claimed: false,
            player2Claimed: false,
            player1HasPredicted: false,
            player2HasPredicted: false
        });
        
        activeGames[player1] = gameId;
        activeGames[player2] = gameId;
        
        emit GameCreated(gameId, player1, player2, stake);
    }

    
    function makePrediction(uint256 _gameId, Prediction _prediction) external {
        Game storage game = games[_gameId];
        require(game.status == GameStatus.WAITING, "Game not in waiting state");
        require(msg.sender == game.player1 || msg.sender == game.player2, "Not a player");
        
        if (msg.sender == game.player1) {
            require(!game.player1HasPredicted, "Already predicted");
            game.player1Prediction = _prediction;
            game.player1HasPredicted = true;
        } else {
            require(!game.player2HasPredicted, "Already predicted");
            game.player2Prediction = _prediction;
            game.player2HasPredicted = true;
        }
        
        emit PredictionMade(_gameId, msg.sender, _prediction);
        
        // Start game if both predictions are in
        if (game.player1HasPredicted && game.player2HasPredicted && game.startPrice == 0) {
            _startGame(_gameId);
        }
    }
    
    function _startGame(uint256 _gameId) private {
        Game storage game = games[_gameId];
        
        (uint256 price, , ) = ftsoRegistry.getCurrentPriceWithDecimals(game.priceSymbol);
        game.startPrice = price;
        game.status = GameStatus.ACTIVE;
    }
    
    function completeGame(uint256 _gameId) external {
        Game storage game = games[_gameId];
        require(game.status == GameStatus.ACTIVE, "Game not active");
        require(block.timestamp >= game.startTime + GAME_DURATION, "Game still in progress");
        
        (uint256 endPrice, , ) = ftsoRegistry.getCurrentPriceWithDecimals(game.priceSymbol);
        
        bool priceWentUp = endPrice > game.startPrice;
        bool player1Correct = (priceWentUp && game.player1Prediction == Prediction.UP) || 
                             (!priceWentUp && game.player1Prediction == Prediction.DOWN);
        bool player2Correct = (priceWentUp && game.player2Prediction == Prediction.UP) || 
                             (!priceWentUp && game.player2Prediction == Prediction.DOWN);
        
        game.status = GameStatus.COMPLETED;
        
        uint256 totalPot = game.stakeAmount * 2;
        uint256 fee = (totalPot * platformFee) / 100;
        uint256 payoutPool = totalPot - fee;
        
        // Both correct - split pot + bonus
        if (player1Correct && player2Correct) {
            uint256 payout = payoutPool / 2;
            players[game.player1].gamesWon++;
            players[game.player2].gamesWon++;
            players[game.player1].totalEarnings += payout;
            players[game.player2].totalEarnings += payout;
            
            emit GameCompleted(_gameId, game.player1, game.player2, payout);
        }
        // Both wrong - refund stakes minus fee
        else if (!player1Correct && !player2Correct) {
            uint256 refund = game.stakeAmount - (fee / 2);
            players[game.player1].totalEarnings += refund;
            players[game.player2].totalEarnings += refund;
            
            emit GameCompleted(_gameId, address(0), address(0), refund);
        }
        // One correct - winner takes most
        else {
            address winner = player1Correct ? game.player1 : game.player2;
            players[winner].gamesWon++;
            players[winner].totalEarnings += payoutPool;
            
            emit GameCompleted(_gameId, winner, address(0), payoutPool);
        }
        
        players[game.player1].gamesPlayed++;
        players[game.player2].gamesPlayed++;
        
        activeGames[game.player1] = 0;
        activeGames[game.player2] = 0;
    }
    
    function claimRewards(uint256 _gameId) external nonReentrant {
        Game storage game = games[_gameId];
        require(game.status == GameStatus.COMPLETED, "Game not completed");
        require(msg.sender == game.player1 || msg.sender == game.player2, "Not a player");
        
        uint256 amount;
        if (msg.sender == game.player1 && !game.player1Claimed) {
            game.player1Claimed = true;
            amount = _calculatePayout(_gameId, game.player1);
        } else if (msg.sender == game.player2 && !game.player2Claimed) {
            game.player2Claimed = true;
            amount = _calculatePayout(_gameId, game.player2);
        } else {
            revert("Already claimed or not eligible");
        }
        
        require(amount > 0, "No rewards to claim");
        
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        
        emit RewardsClaimed(_gameId, msg.sender, amount);
    }
    
    function _calculatePayout(uint256 _gameId, address _player) private view returns (uint256) {
        Game storage game = games[_gameId];
        
        (uint256 endPrice, , ) = ftsoRegistry.getCurrentPriceWithDecimals(game.priceSymbol);
        bool priceWentUp = endPrice > game.startPrice;
        
        Prediction playerPrediction = _player == game.player1 ? game.player1Prediction : game.player2Prediction;
        Prediction otherPrediction = _player == game.player1 ? game.player2Prediction : game.player1Prediction;
        
        bool playerCorrect = (priceWentUp && playerPrediction == Prediction.UP) || 
                            (!priceWentUp && playerPrediction == Prediction.DOWN);
        bool otherCorrect = (priceWentUp && otherPrediction == Prediction.UP) || 
                           (!priceWentUp && otherPrediction == Prediction.DOWN);
        
        uint256 totalPot = game.stakeAmount * 2;
        uint256 fee = (totalPot * platformFee) / 100;
        uint256 payoutPool = totalPot - fee;
        
        if (playerCorrect && otherCorrect) {
            return payoutPool / 2;
        } else if (!playerCorrect && !otherCorrect) {
            return game.stakeAmount - (fee / 2);
        } else if (playerCorrect) {
            return payoutPool;
        }
        
        return 0;
    }
    
    function leaveQueue() external {
        require(players[msg.sender].inQueue, "Not in queue");
        
        players[msg.sender].inQueue = false;
        
        // Remove from queue array
        for (uint256 i = 0; i < matchQueue.length; i++) {
            if (matchQueue[i] == msg.sender) {
                matchQueue[i] = matchQueue[matchQueue.length - 1];
                matchQueue.pop();
                break;
            }
        }
        
        // Refund stake
        (bool success, ) = msg.sender.call{value: MIN_STAKE}("");
        require(success, "Refund failed");
    }
    
    function getQueueLength() external view returns (uint256) {
        return matchQueue.length;
    }
    
    function getPlayerStats(address _player) external view returns (
        uint256 gamesPlayed,
        uint256 gamesWon,
        uint256 totalEarnings,
        bool inQueue
    ) {
        Player memory player = players[_player];
        return (player.gamesPlayed, player.gamesWon, player.totalEarnings, player.inQueue);
    }
    
    function withdrawFees() external onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = owner().call{value: balance}("");
        require(success, "Withdrawal failed");
    }
    
    function updatePlatformFee(uint256 _newFee) external onlyOwner {
        require(_newFee <= 10, "Fee too high");
        platformFee = _newFee;
    }
}
