function PlayerStats({ stats }) {
  const winRate = stats.gamesPlayed > 0 
    ? ((stats.gamesWon / stats.gamesPlayed) * 100).toFixed(1)
    : 0

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>{stats.gamesPlayed}</h3>
        <p>Games Played</p>
      </div>
      <div className="stat-card">
        <h3>{stats.gamesWon}</h3>
        <p>Games Won</p>
      </div>
      <div className="stat-card">
        <h3>{winRate}%</h3>
        <p>Win Rate</p>
      </div>
      <div className="stat-card">
        <h3>{parseFloat(stats.totalEarnings).toFixed(4)}</h3>
        <p>Total Earnings (FLR)</p>
      </div>
    </div>
  )
}

export default PlayerStats
