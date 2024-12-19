import { ActivityIndicator, ScrollView } from "react-native";
import { getPokemonDetailsApi } from "@/api/pokemon";
import { useState, useEffect } from "react";
import { useLocalSearchParams, Stack, useNavigation } from "expo-router";

import Header from "@/components/PokemonDetail/Header";
import Type from "@/components/PokemonDetail/Type";
import Stats from "@/components/PokemonDetail/Stats";
import Favorite from "@/components/PokemonDetail/Favorite";

import useAuth from "@/hooks/useAuth";

export default function Pokemon() {
  const { auth } = useAuth();
  const { pokemonId } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const loadPokemon = async () => {
    try {
      const response = await getPokemonDetailsApi(pokemonId);
      setPokemon(response);
    } catch (error) {
      console.error(error);
      navigation.goBack();
    }
  };

  useEffect(() => {
    loadPokemon();
  }, [pokemonId, isFavorite]);
  // In case we did not get back a pokemon
  if (!pokemon) return null;

  return (
    <>
      {pokemon === null ? (
        <ActivityIndicator size="large" color="#AEAEAE" />
      ) : (
        <>
          <Stack.Screen
            options={{
              title: "",
              headerShown: true,
              headerTransparent: true,
              headerShadowVisible: false,
              headerRight: () =>
                auth && (
                  <Favorite
                    isFavorite={isFavorite}
                    setIsFavorite={setIsFavorite}
                    pokemonId={pokemonId}
                  />
                ),
            }}
          />
          <ScrollView>
            <Header
              name={pokemon.name}
              order={pokemon.order}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
            <Type types={pokemon.types} />
            <Stats stats={pokemon.stats} />
          </ScrollView>
        </>
      )}
    </>
  );
}
