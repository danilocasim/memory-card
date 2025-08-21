import { useState, useEffect } from "react";

export function usePokemonData() {
  const [pokemonsArr, setPokemonsArr] = useState([]);

  useEffect(() => {
    let ignore = false;
    const url = "https://pokeapi.co/api/v2/pokemon-form/";
    const names = [
      "charizard",
      "pikachu",
      "raichu",
      "dialga",
      "bulbasaur",
      "ditto",
      "infernape",
      "giratina",
      "garchomp",
      "rayquaza",
      "groudon",
      "latias",
      "aggron",
    ];
    const allPokemons = [];
    names.forEach(async (name) => {
      fetch(url + name)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            allPokemons.push({
              name: json.name,
              url: json.sprites.front_default,
              id: json.id,
            });
          }
          if (allPokemons.length === names.length - 1)
            setPokemonsArr(allPokemons);
        });
    });

    return () => {
      ignore = true;
    };
  }, []);

  return pokemonsArr;
}
