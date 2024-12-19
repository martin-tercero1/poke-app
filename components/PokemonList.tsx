import {
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from "react-native";
import AnimatedPokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemons }) {
  const loadMore = () => {
    loadPokemons();
  };

  // FlatList is waiting to receive data to be displayed in columns
  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item, index }) => (
          <AnimatedPokemonCard pokemon={item} index={index} />
        )}
        className={`px-1 ${Platform.OS === "android" ? "mt-1" : "mt-0"} w-screen flex`}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <ActivityIndicator
            size="large"
            className={`mt-4 ${Platform.OS === "android" ? "mb-10" : "mb-0"}`}
            color="#AEAEAE"
          />
        }
      />
    </SafeAreaView>
  );
}
