import { useState, useEffect } from "react";

export function usePokemonData() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const pokemonNames = [
      "charizard",
      "pikachu",
      "raichu",
      "dialga",
      "bulbasaur",
      "ditto",
      "infernape",
      "garchomp",
      "rayquaza",
      "groudon",
      "latias",
      "aggron",
    ];

    const controller = new AbortController();
    const promises = pokemonNames.map((name) =>
      fetch(`https://pokeapi.co/api/v2/pokemon-form/${name}`, {
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then((json) => ({
          name: json.name,
          url: json.sprites.front_default,
          id: json.id,
        }))
    );

    Promise.all(promises).then(setPokemons);

    return () => {
      controller.abort();
    };
  }, []);

  return [pokemons, setPokemons];
}
