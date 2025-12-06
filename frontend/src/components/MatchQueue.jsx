import { useState, useEffect } from 'react'

function MatchQueue({ contract, onLeaveQueue }) {
  const [queueLength, setQueueLength] = useState(0)

  useEffect(() => {
    loadQueueLength()
    const interval = setInterval(loadQueueLength, 2000)
    return () => clearInterval(interval)
  }, [])

  const loadQueueLength = async () => {
    try {
      const length = await contract.getQueueLength()
      setQueueLength(Number(length))
    } catch (error) {
      console.error('Error loading queue:', error)
    }
  }

  return (
    <div className="game-container queue-status">
      <h2>🔍 Finding Your Match...</h2>
      <div className="spinner"></div>
      <p>Players in queue: {queueLength}</p>
      <p>Hang tight! We're matching you with someone special.</p>
      <button 
        className="btn"
        onClick={onLeaveQueue}
        style={{marginTop: '20px'}}
      >
        Leave Queue
      </button>
    </div>
  )
}

export default MatchQueue
