import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import GameRoom from './components/GameRoom'
import MatchQueue from './components/MatchQueue'
import PlayerStats from './components/PlayerStats'
import { GAME_MATCH_ADDRESS, ACCOUNT_FACTORY_ADDRESS, COSTON2_CONFIG, MIN_STAKE } from './config'
import { GAME_MATCH_ABI } from './utils/contracts'
import { switchToCoston2, checkNetwork } from './utils/network'

function App() {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [account, setAccount] = useState(null)
  const [gameContract, setGameContract] = useState(null)
  const [inQueue, setInQueue] = useState(false)
  const [activeGameId, setActiveGameId] = useState(0)
  const [playerStats, setPlayerStats] = useState(null)

  useEffect(() => {
    checkWalletConnection()
  }, [])

  const checkWalletConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_accounts' 
        })
        if (accounts.length > 0) {
          await connectWallet()
        }
      } catch (error) {
        console.error('Error checking wallet:', error)
      }
    }
  }

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        alert('Please install MetaMask!')
        return
      }

      // Check and switch to Coston2 if needed
      const isCorrectNetwork = await checkNetwork()
      if (!isCorrectNetwork) {
        try {
          await switchToCoston2()
        } catch (error) {
          alert('Please switch to Flare Coston2 Testnet in MetaMask')
          return
        }
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send("eth_requestAccounts", [])
      const signer = await provider.getSigner()
      
      setProvider(provider)
      setSigner(signer)
      setAccount(accounts[0])

      // Check if contract address is set
      if (GAME_MATCH_ADDRESS === "0x0000000000000000000000000000000000000000") {
        alert('⚠️ Please deploy contracts first and update the addresses in frontend/.env')
        return
      }

      // Initialize contract
      const contract = new ethers.Contract(GAME_MATCH_ADDRESS, GAME_MATCH_ABI, signer)
      setGameContract(contract)

      // Load player stats
      await loadPlayerStats(contract, accounts[0])
      
    } catch (error) {
      console.error('Error connecting wallet:', error)
      alert('Failed to connect wallet: ' + error.message)
    }
  }

  const loadPlayerStats = async (contract, address) => {
    try {
      const stats = await contract.getPlayerStats(address)
      setPlayerStats({
        gamesPlayed: Number(stats[0]),
        gamesWon: Number(stats[1]),
        totalEarnings: ethers.formatEther(stats[2]),
        inQueue: stats[3]
      })
      setInQueue(stats[3])

      const gameId = await contract.activeGames(address)
      setActiveGameId(Number(gameId))
    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>💘 Stake & Date</h1>
        <p>Find your match through crypto gaming</p>
      </header>

      <div className="wallet-section">
        {!account ? (
          <button className="btn btn-primary" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div>
            <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
          </div>
        )}
      </div>

      {account && playerStats && (
        <PlayerStats stats={playerStats} />
      )}

      {account && gameContract && (
        <>
          {activeGameId > 0 ? (
            <GameRoom 
              gameId={activeGameId}
              contract={gameContract}
              account={account}
              onGameEnd={() => {
                setActiveGameId(0)
                loadPlayerStats(gameContract, account)
              }}
            />
          ) : inQueue ? (
            <MatchQueue 
              contract={gameContract}
              onLeaveQueue={async () => {
                try {
                  const tx = await gameContract.leaveQueue()
                  await tx.wait()
                  setInQueue(false)
                  await loadPlayerStats(gameContract, account)
                } catch (error) {
                  console.error('Error leaving queue:', error)
                }
              }}
            />
          ) : (
            <div className="game-container">
              <h2>Ready to find your match?</h2>
              <p>Join the queue and get matched with another player!</p>
              <p>Stake: {MIN_STAKE} FLR</p>
              <button 
                className="btn btn-primary"
                onClick={async () => {
                  try {
                    const tx = await gameContract.joinQueue({ 
                      value: ethers.parseEther(MIN_STAKE) 
                    })
                    await tx.wait()
                    setInQueue(true)
                    await loadPlayerStats(gameContract, account)
                  } catch (error) {
                    console.error('Error joining queue:', error)
                    alert('Failed to join queue: ' + error.message)
                  }
                }}
              >
                Join Queue
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
