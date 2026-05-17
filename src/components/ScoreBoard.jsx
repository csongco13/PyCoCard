function ScoreBoard({ players, currentPlayer }) {
  return (
    <section className="score-board">
      <div className="player-box">
        <h2 className="player-name">Player 1</h2>
        <p className="player-score">{players[0].score}</p>
      </div>

      <div className="turn-box">
        <p className="turn-label">Current Turn</p>
        <h2 className="turn-name">{players[currentPlayer].name}</h2>
      </div>

      <div className="player-box">
        <h2 className="player-name">Player 2</h2>
        <p className="player-score">{players[1].score}</p>
      </div>
    </section>
  );
}

export default ScoreBoard;