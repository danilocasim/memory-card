import { useState, useEffect } from "react";

export function usePokemonData(name) {
  const [pokemon, setPokemon] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon-form/";
  useEffect(() => {
    let ignore = false;
    fetch(url + name)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) setPokemon(json);
      });

    return () => (ignore = true);
  }, [name]);

  return pokemon
    ? {
        id: pokemon.id,
        name: pokemon.name,
        url: pokemon.sprites.front_default,
      }
    : {};
}
