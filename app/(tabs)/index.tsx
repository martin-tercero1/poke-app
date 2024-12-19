import { getPokemonsApi, getPokemonDetailsByURLApi } from "@/api/pokemon";
import { useEffect, useState } from "react";
import PokemonList from "@/components/PokemonList";
import { SafeAreaProvider } from "react-native-safe-area-context";
interface Pokemon {
  id: number;
  name: string;
  type: string;
  order: number;
  image: string;
}
export type Props = {
  pokemons?: Pokemon[];
  pokemonsArray?: Pokemon[];
};

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [currentOffset, setCurrentOffset] = useState(0);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      setCurrentOffset(currentOffset + response.results.length);
      const pokemonsArray = [];
      for await (const [index, pokemon] of response.results.entries()) {
        const pokemonDetails = await getPokemonDetailsByURLApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: currentOffset + index + 1,
          image: pokemonDetails.sprites.front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };
  // Executed only when the component is mounted, due to empty array of dependencies []
  useEffect(() => {
    loadPokemons();
  }, []);

  // useSafeAreaInsets

  return (
    <SafeAreaProvider className="pt-1">
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
    </SafeAreaProvider>
  );
}
