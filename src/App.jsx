import "./styles/App.css";
import { DisplayCards } from "./components/DisplayCards";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { TryAgain } from "./components/TryAgain";

export function App() {
  const [score, setScore] = useState(11);
  const [bestScore, setBestScore] = useState(0);
  const [cardsId, setCardsId] = useState([]);
  const isWin = score === 12;

  const resetScores = () => {
    setScore(0);
    setBestScore(0);
  };

  const incrementScore = () => {
    const newScore = score + 1;
    const isBestScore = score < newScore && newScore > bestScore;
    setScore(newScore);

    if (isBestScore) setBestScore(newScore);
    if (newScore > 12) {
      resetScores();
    }
  };

  const isUnique = (cardId) => {
    if (cardsId.includes(cardId)) {
      setScore(0);
      setCardsId([]);
    } else {
      setCardsId([...cardsId, cardId]);
      incrementScore();
    }
  };

  return (
    <div className='container'>
      {isWin ? (
        <TryAgain
          onClick={() => {
            resetScores();
          }}
        ></TryAgain>
      ) : null}
      <NavBar score={score} bestScore={bestScore}></NavBar>

      <div className='wrapper-cards'>
        <DisplayCards isUnique={isUnique}></DisplayCards>
      </div>

      <footer>© 2025 Memowy Game. All rights reserved.</footer>
    </div>
  );
}

export default App;
