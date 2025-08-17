export function Card({ key, url, name, onClick }) {
  return (
    <div key={key} onClick={onClick} className='card'>
      <img src={url} alt='card' />
      <p>{name}</p>
    </div>
  );
}
