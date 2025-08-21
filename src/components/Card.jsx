export function Card({ url, name, onClick }) {
  return (
    <div onClick={onClick} className='card'>
      <img src={url} alt='card' />
      <p>{name[0].toUpperCase() + name.slice(1)}</p>
    </div>
  );
}
