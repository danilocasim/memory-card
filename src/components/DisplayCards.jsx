import { Card } from "./Card";
import { usePokemonData } from "./PokemonData";

export function DisplayCards() {
  const pokemon = usePokemonData("charizard");

  return (
    <div className='cards'>
      <Card
        key={pokemon.id}
        onClick={() => alert("CHARMANDER")}
        url={pokemon.url}
        name={pokemon.name}
      ></Card>
    </div>
  );
}
