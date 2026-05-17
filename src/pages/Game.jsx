import useGame from "../hooks/useGame.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";
import Card from "../components/Card.jsx";
import DarkChoice from "../components/DarkChoice.jsx";

function Game() {
  const game = useGame();

  return (
    <main className="game-page chat-game-page">
      <section className="chat-game-shell">
        <aside className="chat-side-panel">
          <h1 className="side-title">PICK A CARD</h1>
          <h2 className="side-subtitle">Any Card!</h2>
          <p className="side-label">Python Card Battle</p>
          <div className="side-pill">2 Players</div>
          <div className="side-pill">Race to 10</div>
          <div className="side-pill">Lucky +3</div>
          <div className="side-pill">Dark Knight</div>
          <div className="side-star">✦</div>
        </aside>

        <section className="chat-main-panel">
          <div className="chat-bubble top-bubble">
            <span className="chat-tag">Moderator</span>
            Choose a card. Everything looks magical.
          </div>

          <section className="game-header">
            <h1 className="game-title">PyCoCard</h1>
            <p className="game-subtitle">Choose a card. Solve the Python code. Race to 10 points.</p>
          </section>

          <ScoreBoard players={game.players} currentPlayer={game.currentPlayer} />

          <p className="message-text">{game.message}</p>

          <section className="card-row">
            {game.cards.map(function(card) {
              return (
                <Card
                  key={card.id}
                  card={card}
                  chooseCard={game.chooseCard}
                />
              );
            })}
          </section>

          <section className="answer-area">
            <input
              className="answer-input"
              type="text"
              placeholder="Type your answer"
              value={game.answer}
              onChange={function(event) {
                game.setAnswer(event.target.value);
              }}
            />
            <button className="answer-button" onClick={game.checkAnswer}>
              Submit Answer
            </button>
          </section>

          <DarkChoice
            showDarkChoice={game.showDarkChoice}
            useDarkAdd={game.useDarkAdd}
            useDarkSubtract={game.useDarkSubtract}
          />

          <section className="reset-area">
            <button className="reset-button" onClick={game.resetGame}>
              Reset Game
            </button>
          </section>

          <div className="chat-bubble bottom-bubble">
            <span className="chat-tag">VIP User</span>
            Trace carefully before submitting!
          </div>
        </section>
      </section>
    </main>
  );
}

export default Game;