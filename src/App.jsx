import "./styles/App.css";
import { DisplayCards } from "./components/DisplayCards";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { TryAgain } from "./components/TryAgain";

export function App() {
  const [bestScore, setBestScore] = useState(0);
  const [cardsId, setCardsId] = useState([]);

  const resetScores = () => {
    setCardsId([]);
    setBestScore(0);
  };

  const bestScores = (score) => {
    const isBestScore = score >= bestScore;
    if (isBestScore) setBestScore(score);
    if (score === 12) {
      resetScores();
    }
  };

  const isUnique = (cardId) => {
    if (cardsId.includes(cardId)) {
      setCardsId([]);
    } else {
      const newCardsId = [...cardsId, cardId];
      setCardsId(newCardsId);
      bestScores(newCardsId.length);
    }
  };

  return (
    <div className='container'>
      {cardsId.length === 12 ? (
        <TryAgain
          onClick={() => {
            resetScores();
          }}
        ></TryAgain>
      ) : null}
      <NavBar score={cardsId.length} bestScore={bestScore}></NavBar>

      <div className='wrapper-cards'>
        <DisplayCards isUnique={isUnique}></DisplayCards>
      </div>

      <footer>© 2025 Memowy Game. All rights reserved.</footer>
    </div>
  );
}

export default App;
