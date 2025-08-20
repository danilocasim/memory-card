import { Card } from "./Card";
import { useState } from "react";
import { usePokemonData } from "./PokemonData";

export function DisplayCards() {
  const [pokemons, setPokemons] = useState(usePokemonData());

  return (
    <div className='cards'>
      {pokemons.map((pokemon) => (
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
