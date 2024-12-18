import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import getColorByPokemonType from "@/getColorByPokemonType";

export default function PokemonCard({ pokemon }) {
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const navigation = useNavigation();

  const goToPokemon = () => {
    console.log(pokemon.id);
    navigation.navigate("pokemon", { pokemon });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Pressable must be inside of a container */}
      <Pressable onPress={goToPokemon}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyles}>
              <Text style={styles.number}>
                #{`${pokemon.order}`.padStart(3, "0")}
              </Text>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#ffffff",
    fontSize: 11,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
