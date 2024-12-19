import { View, Text, Image, Pressable, Animated } from "react-native";
import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import getColorByPokemonType from "@/getColorByPokemonType";

export function PokemonCard({ pokemon }) {
  const pokemonColor = getColorByPokemonType(pokemon.type);
  return (
    <Link href={`/${pokemon.id}`} asChild>
      <Pressable className="h-[130px] w-full p-1">
        <View
          className="flex h-full w-full rounded-2xl p-5"
          style={{ backgroundColor: pokemonColor }}
        >
          <Text className="text-sm text-white absolute right-3 top-1">
            #{`${pokemon.order}`.padStart(3, "0")}
          </Text>
          <Text className="text-white font-bold text-md pt-2 capitalize">
            {pokemon.name}
          </Text>
          <Image
            className="absolute bottom-2 right-2 w-[90px] h-[90px]"
            source={{ uri: pokemon.image }}
          />
        </View>
      </Pressable>
    </Link>
  );
}

export default function AnimatedPokemonCard({ pokemon, index }) {
  const opacity = useRef(new Animated.Value(0)).current; // Initial opacity is 0

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 175,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View className="mt-1 flex flex-col w-1/2" style={{ opacity }}>
      <PokemonCard pokemon={pokemon}></PokemonCard>
    </Animated.View>
  );
}
