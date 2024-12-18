import { View, Text } from "react-native";
import { getPokemonDetailsApi } from "@/api/pokemon";
import { useState, useEffect } from "react";

export default function Pokemon({ route, navigation }) {
  const [pokemon, setPokemon] = useState(null);

  const { id } = route.params;
  console.log(id);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonDetailsApi(id);
      setPokemon(response);
    } catch (error) {
      console.error(error);
      navigation.goBack();
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);
// In case we did not get back a pokemon
  if (!pokemon) return null;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
