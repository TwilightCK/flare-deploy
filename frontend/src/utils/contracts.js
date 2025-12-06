export const GAME_MATCH_ABI = [
  "function joinQueue() external payable",
  "function leaveQueue() external",
  "function makePrediction(uint256 _gameId, uint8 _prediction) external",
  "function cancelGame(uint256 _gameId) external",
  "function completeGame(uint256 _gameId) external",
  "function claimRewards(uint256 _gameId) external",
  "function getPlayerStats(address _player) external view returns (uint256, uint256, uint256, bool)",
  "function activeGames(address) external view returns (uint256)",
  "function getQueueLength() external view returns (uint256)",
  "function games(uint256) external view returns (address, address, uint256, uint256, uint256, string, uint8, uint8, uint8, bool, bool, bool, bool)",
  "event GameCreated(uint256 indexed gameId, address player1, address player2, uint256 stake)",
  "event PredictionMade(uint256 indexed gameId, address player, uint8 prediction)",
  "event GameCompleted(uint256 indexed gameId, address winner1, address winner2, uint256 payout)",
  "event PlayerJoinedQueue(address indexed player)"
];

export const ACCOUNT_FACTORY_ABI = [
  "function createAccount(address _guardian) external returns (address)",
  "function getAccount(address _user) external view returns (address)",
  "function getTotalAccounts() external view returns (uint256)",
  "event AccountCreated(address indexed user, address indexed smartAccount, address guardian)"
];
