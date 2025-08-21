export function TryAgain({ onClick }) {
  return (
    <dialog open>
      <h1>YOU WIN!</h1>
      <button onClick={onClick}>Try Again?</button>
    </dialog>
  );
}
