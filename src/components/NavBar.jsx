import { DisplayScores } from "./DisplayScores.jsx";

export function NavBar({ score, bestScore }) {
  return (
    <nav>
      <h1 className='game-name'>Memowy Game</h1>
      <DisplayScores score={score} bestScore={bestScore}></DisplayScores>
    </nav>
  );
}
