import { getPokemonsFavoriteApi } from "@/api/favorite";
import { getPokemonDetailsApi } from "@/api/pokemon";
import NotLogged from "@/components/NotLogged";
import PokemonList from "@/components/PokemonList";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Tab() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  const loadFavoritePokemon = async () => {
    const favorites = await getPokemonsFavoriteApi();

    const pokemonsArray = [];
    for await (const id of favorites) {
      const pokemonDetails = await getPokemonDetailsApi(id);
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.front_default,
      });
    }
    setPokemons(pokemonsArray);
  };

  useEffect(() => {
    if (auth) {
      loadFavoritePokemon();
    }
  }, [auth, pokemons]);

  return !auth ? (
    <NotLogged />
  ) : pokemons.length > 0 ? (
    <PokemonList pokemons={pokemons} loadPokemons={loadFavoritePokemon} />
  ) : (
    <View className="my-12 px-12">
      <Text className="mb-2 text-center">
        You have not added a Pokemon to your favorites
      </Text>
    </View>
  );
}
