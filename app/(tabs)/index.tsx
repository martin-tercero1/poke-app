import { getPokemonsApi, getPokemonDetailsByURLApi } from "@/api/pokemon";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PokemonList from "@/components/PokemonList";
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

export default function TabsIndex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState(null);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByURLApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
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

  return (
    <SafeAreaView style={style.container}>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
});
