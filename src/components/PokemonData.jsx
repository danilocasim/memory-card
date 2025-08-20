import { useState, useEffect } from "react";

export function usePokemonData() {
  const [pokemonsArr, setPokemonsArr] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon-form/";

  useEffect(() => {
    let ignore = false;

    const names = ["charizard", "pikachu", "raichu", "dialga"];
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
            setPokemonsArr(allPokemons);
          }
        });
    });

    return () => (ignore = true);
  }, []);

  return pokemonsArr;
}
