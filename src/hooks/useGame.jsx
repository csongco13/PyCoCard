import { useState } from "react";
import questions from "../data/questions.js";

function useGame() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 }
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [cards, setCards] = useState(createCards());
  const [selectedCard, setSelectedCard] = useState(null);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("Choose a card.");
  const [showDarkChoice, setShowDarkChoice] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function createCardType() {
    const randomNumber = Math.random();

    if (randomNumber < 0.1) {
      return "lucky";
    }
    else if (randomNumber < 0.2667) {
      return "dark";
    }
    else {
      return "normal";
    }
  }

  function getRandomQuestion() {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
  }

  function createCards() {
    const newCards = [];

    for (let i = 0; i < 3; i++) {
      const questionData = getRandomQuestion();

      newCards.push({
        id: i,
        type: createCardType(),
        question: questionData.question,
        code: questionData.code,
        answer: questionData.answer,
        revealed: false
      });
    }

    return newCards;
  }

  function chooseCard(cardId) {
    if (selectedCard === null && gameOver === false) {
      const updatedCards = cards.map(function(card) {
        if (card.id === cardId) {
          return {
            ...card,
            revealed: true
          };
        }
        else {
          return card;
        }
      });

      const pickedCard = updatedCards.find(function(card) {
        return card.id === cardId;
      });

      setCards(updatedCards);
      setSelectedCard(pickedCard);
      setMessage("Answer the question.");
    }
    else {
      setMessage("You already chose a card.");
    }
  }

  function checkAnswer() {
    if (selectedCard === null) {
      setMessage("Choose a card first.");
    }
    else if (answer.trim().toLowerCase() === selectedCard.answer.toLowerCase()) {
      if (selectedCard.type === "normal") {
        addPoints(currentPlayer, 2);
        setMessage("Correct! Normal card: +2 points.");
        nextTurn();
      }
      else if (selectedCard.type === "lucky") {
        addPoints(currentPlayer, 3);
        setMessage("Correct! Lucky card: +3 points.");
        nextTurn();
      }
      else if (selectedCard.type === "dark") {
        setShowDarkChoice(true);
        setMessage("Correct! Dark Knight card activated.");
      }
      else {
        setMessage("Correct.");
      }
    }
    else {
      setMessage("Incorrect. Turn skipped.");
      nextTurn();
    }
  }

  function addPoints(playerIndex, amount) {
    const updatedPlayers = players.map(function(player, index) {
      if (index === playerIndex) {
        return {
          ...player,
          score: player.score + amount
        };
      }
      else {
        return player;
      }
    });

    setPlayers(updatedPlayers);
    checkWinner(updatedPlayers);
  }

  function subtractPoints(playerIndex, amount) {
    const updatedPlayers = players.map(function(player, index) {
      if (index === playerIndex) {
        let newScore = player.score - amount;

        if (newScore < 0) {
          newScore = 0;
        }
        else {
          newScore = newScore;
        }

        return {
          ...player,
          score: newScore
        };
      }
      else {
        return player;
      }
    });

    setPlayers(updatedPlayers);
    checkWinner(updatedPlayers);
  }

  function useDarkAdd() {
    addPoints(currentPlayer, 2);
    setShowDarkChoice(false);
    setMessage("Dark Knight used: +2 points.");
    nextTurn();
  }

  function useDarkSubtract() {
    let opponent = 0;

    if (currentPlayer === 0) {
      opponent = 1;
    }
    else {
      opponent = 0;
    }

    subtractPoints(opponent, 2);
    setShowDarkChoice(false);
    setMessage("Dark Knight used: opponent lost 2 points.");
    nextTurn();
  }

  function checkWinner(updatedPlayers) {
    if (updatedPlayers[0].score >= 10) {
      setGameOver(true);
      setMessage("Player 1 wins!");
    }
    else if (updatedPlayers[1].score >= 10) {
      setGameOver(true);
      setMessage("Player 2 wins!");
    }
    else {
      setGameOver(false);
    }
  }

  function nextTurn() {
    setTimeout(function() {
      let nextPlayer = 0;

      if (currentPlayer === 0) {
        nextPlayer = 1;
      }
      else {
        nextPlayer = 0;
      }

      setCurrentPlayer(nextPlayer);
      setCards(createCards());
      setSelectedCard(null);
      setAnswer("");
      setShowDarkChoice(false);
      setMessage("Choose a card.");
    }, 900);
  }

  function resetGame() {
    setPlayers([
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 }
    ]);

    setCurrentPlayer(0);
    setCards(createCards());
    setSelectedCard(null);
    setAnswer("");
    setMessage("Choose a card.");
    setShowDarkChoice(false);
    setGameOver(false);
  }

  return {
    players,
    currentPlayer,
    cards,
    answer,
    message,
    showDarkChoice,
    gameOver,
    setAnswer,
    chooseCard,
    checkAnswer,
    useDarkAdd,
    useDarkSubtract,
    resetGame
  };
}

export default useGame;