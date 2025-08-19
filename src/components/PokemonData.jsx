import { useState, useEffect } from "react";

export function usePokemonData() {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon-form/";

  useEffect(() => {
    let ignore = false;

    const names = ["charizard", "pikachu", "raichu"];
    const pokemons = [];
    names.forEach(async (name) => {
      fetch(url + name)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore)
            pokemons.push({
              name: json.name,
              url: json.sprites.front_default,
              id: json.id,
            });
        });
    });

    setPokemon(pokemons);
    return () => (ignore = true);
  }, []);

  return pokemon;
}
