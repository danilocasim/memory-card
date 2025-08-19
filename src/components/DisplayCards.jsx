import { Card } from "./Card";
import { usePokemonData } from "./PokemonData";

export function DisplayCards() {
  const pokemon = usePokemonData();

  console.log(pokemon);
  return (
    <div className='cards'>
      {pokemon.map((pokemon) => (
        <Card
          key={pokemon.id}
          onClick={() => alert(pokemon.name)}
          url={pokemon.url}
          name={pokemon.name}
        ></Card>
      ))}
    </div>
  );
}
