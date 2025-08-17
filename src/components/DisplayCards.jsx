import { Card } from "./Card";
import { usePokemonData } from "./PokemonData";

export function DisplayCards() {
  const pokemons = [usePokemonData("charmander"), usePokemonData("bulbasaur")];

  return (
    <div className='cards'>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          onClick={() => alert("CHARMANDER")}
          url={pokemon.url}
          name={pokemon.name}
        ></Card>
      ))}
    </div>
  );
}
