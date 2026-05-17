function Card({ card, chooseCard }) {
  let cardClassName = "game-card " + card.type;

  if (card.revealed === true) {
    cardClassName = cardClassName + " revealed";
  }
  else {
    cardClassName = cardClassName + " hidden";
  }

  return (
    <button
      className={cardClassName}
      onClick={function() {
        chooseCard(card.id);
      }}
    >
      <div className="card-inner">
        <div className="card-back">
          <p className="card-question-mark">?</p>
        </div>

        <div className="card-front">
          <h2 className="card-type">{card.type}</h2>
          <p className="card-question">{card.question}</p>
          <pre className="code-box">{card.code}</pre>
        </div>
      </div>
    </button>
  );
}

export default Card;