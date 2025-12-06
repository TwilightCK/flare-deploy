import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

function GameRoom({ gameId, contract, account, onGameEnd }) {
  const [game, setGame] = useState(null)
  const [timeLeft, setTimeLeft] = useState(300)
  const [prediction, setPrediction] = useState(null)
  const [currentPrice, setCurrentPrice] = useState(null)
  const [gameStatus, setGameStatus] = useState('waiting')

  useEffect(() => {
    loadGameData()
    const interval = setInterval(loadGameData, 3000)
    return () => clearInterval(interval)
  }, [gameId])

  useEffect(() => {
    if (game && game.startTime > 0) {
      const timer = setInterval(() => {
        const elapsed = Math.floor(Date.now() / 1000) - Number(game.startTime)
        const remaining = Math.max(0, 300 - elapsed)
        setTimeLeft(remaining)
        
        if (remaining === 0 && gameStatus === 'active') {
          completeGame()
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [game, gameStatus])

  const loadGameData = async () => {
    try {
      const gameData = await contract.games(gameId)
      const gameObj = {
        player1: gameData[0],
        player2: gameData[1],
        stakeAmount: gameData[2],
        startTime: gameData[3],
        startPrice: gameData[4],
        priceSymbol: gameData[5],
        player1Prediction: gameData[6],
        player2Prediction: gameData[7],
        status: gameData[8],
        player1Claimed: gameData[9],
        player2Claimed: gameData[10],
        player1HasPredicted: gameData[11],
        player2HasPredicted: gameData[12]
      }
      setGame(gameObj)
      
      // Status: 0=WAITING, 1=ACTIVE, 2=COMPLETED
      if (gameObj.status === 0) setGameStatus('waiting')
      else if (gameObj.status === 1) setGameStatus('active')
      else if (gameObj.status === 2) setGameStatus('completed')
      
    } catch (error) {
      console.error('Error loading game:', error)
    }
  }

  const makePrediction = async (pred) => {
    try {
      const tx = await contract.makePrediction(gameId, pred)
      await tx.wait()
      setPrediction(pred)
      await loadGameData()
    } catch (error) {
      console.error('Error making prediction:', error)
      let errorMessage = 'Failed to make prediction'
      
      if (error.message.includes('Already predicted')) {
        errorMessage = 'You already made your prediction!'
      } else if (error.message.includes('Game not in waiting state')) {
        errorMessage = 'Game has already started!'
      } else if (error.message.includes('Not a player')) {
        errorMessage = 'You are not in this game!'
      } else if (error.message.includes('user rejected')) {
        errorMessage = 'Transaction cancelled'
      }
      
      alert(errorMessage + '\n\nTip: Try refreshing the page (Ctrl+Shift+R)')
    }
  }

  const completeGame = async () => {
    try {
      const tx = await contract.completeGame(gameId)
      await tx.wait()
      await loadGameData()
    } catch (error) {
      console.error('Error completing game:', error)
    }
  }

  const claimRewards = async () => {
    try {
      const tx = await contract.claimRewards(gameId)
      await tx.wait()
      alert('Rewards claimed!')
      onGameEnd()
    } catch (error) {
      console.error('Error claiming rewards:', error)
      alert('Failed to claim rewards')
    }
  }

  const cancelGame = async () => {
    if (!confirm('Are you sure you want to cancel this game? Both players will be refunded.')) {
      return
    }
    
    try {
      const tx = await contract.cancelGame(gameId)
      await tx.wait()
      alert('Game cancelled! Your stake has been refunded.')
      onGameEnd()
    } catch (error) {
      console.error('Error cancelling game:', error)
      alert('Failed to cancel game: ' + error.message)
    }
  }

  if (!game) {
    return <div className="loading">Loading game...</div>
  }

  const isPlayer1 = account.toLowerCase() === game.player1.toLowerCase()
  const opponent = isPlayer1 ? game.player2 : game.player1
  const hasPredicted = isPlayer1 ? game.player1HasPredicted : game.player2HasPredicted
  const opponentHasPredicted = isPlayer1 ? game.player2HasPredicted : game.player1HasPredicted

  return (
    <div className="game-container">
      <h2>🎮 Game Room #{gameId}</h2>
      
      <div className="player-info">
        <div className="player-card">
          <h3>You</h3>
          <p>{account.slice(0, 6)}...{account.slice(-4)}</p>
          {hasPredicted && (
            <p>✅ Prediction made</p>
          )}
        </div>
        <div className="player-card">
          <h3>Opponent</h3>
          <p>{opponent.slice(0, 6)}...{opponent.slice(-4)}</p>
          {opponentHasPredicted && (
            <p>✅ Prediction made</p>
          )}
        </div>
      </div>

      {gameStatus === 'waiting' && (
        <div className="game-room">
          <h3>Make your prediction!</h3>
          <p>Will FLR/USD go UP or DOWN in the next 5 minutes?</p>
          
          {!hasPredicted ? (
            <>
              <div className="prediction-buttons">
                <button 
                  className="btn btn-up"
                  onClick={() => makePrediction(0)}
                >
                  📈 UP
                </button>
                <button 
                  className="btn btn-down"
                  onClick={() => makePrediction(1)}
                >
                  📉 DOWN
                </button>
              </div>
              <button 
                className="btn"
                onClick={cancelGame}
                style={{marginTop: '20px', background: 'rgba(255, 71, 87, 0.3)', border: '2px solid #ff4757'}}
              >
                ❌ Cancel Game
              </button>
            </>
          ) : (
            <>
              <div className="success">
                <p>Waiting for opponent to predict...</p>
                <p style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '10px'}}>
                  {opponentHasPredicted ? 'Opponent has predicted! Starting game...' : 'Waiting for opponent...'}
                </p>
              </div>
              <button 
                className="btn"
                onClick={cancelGame}
                style={{marginTop: '20px', background: 'rgba(255, 71, 87, 0.3)', border: '2px solid #ff4757'}}
              >
                ❌ Cancel Game & Get Refund
              </button>
            </>
          )}
        </div>
      )}

      {gameStatus === 'active' && (
        <div className="game-room">
          <h3>Game in Progress!</h3>
          <div className="timer">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <div className="price-display">
            <p>Starting Price: ${ethers.formatUnits(game.startPrice, 5)}</p>
            <p>Symbol: {game.priceSymbol}</p>
          </div>
          <p>Both predictions are in. May the best prediction win! 🎯</p>
        </div>
      )}

      {gameStatus === 'completed' && (
        <div className="game-room">
          <h3>Game Complete! 🎉</h3>
          <button 
            className="btn btn-primary"
            onClick={claimRewards}
          >
            Claim Rewards
          </button>
          <p style={{marginTop: '20px'}}>
            Check your stats to see if you won!
          </p>
        </div>
      )}

      <div style={{marginTop: '30px', textAlign: 'center'}}>
        <p>Stake: {ethers.formatEther(game.stakeAmount)} FLR each</p>
      </div>
    </div>
  )
}

export default GameRoom
