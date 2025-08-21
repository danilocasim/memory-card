export function DisplayScores({ score, bestScore }) {
  return (
    <div className='scores'>
      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  );
}
