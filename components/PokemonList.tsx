import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemons }) {
  const loadMore = () => {
    loadPokemons();
  };

  // FlatList is waiting to receive data to be displayed in columns
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
