import { useFetchData } from "./CustomizeHooks";

export function usePokemonData(name) {
  const pokemon = useFetchData(
    "https://pokeapi.co/api/v2/pokemon-form/" + name
  );

  if (pokemon)
    return {
      id: pokemon.id,
      name: pokemon.name,
      url: pokemon.sprites.front_default,
    };

  return "";
}
