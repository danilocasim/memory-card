import { Card } from "./Card";
import { usePokemonData } from "./PokemonData";
import { useEffect, useState } from "react";
import { Fragment } from "react";

export function DisplayCards({ isUnique }) {
  const initialPokemons = usePokemonData();

  const [pokemons, setPokemons] = useState(initialPokemons);

  useEffect(() => {
    setPokemons(initialPokemons);
  }, [initialPokemons]);

  const shufflePokemons = () => {
    const newArr = [...pokemons];
    const shuffledArray = [];

    while (newArr.length !== 0) {
      const index = Math.floor(Math.random() * newArr.length);
      shuffledArray.push(newArr[index]);
      newArr.splice(index, 1);
    }

    setPokemons(shuffledArray);
  };

  return (
    <div className='cards'>
      {pokemons
        ? pokemons.map((pokemon) => (
            <Fragment key={pokemon.id}>
              <Card
                onClick={() => {
                  shufflePokemons();
                  isUnique(pokemon.id);
                }}
                url={pokemon.url}
                name={pokemon.name}
              ></Card>
            </Fragment>
          ))
        : "LOADING..."}
    </div>
  );
}
