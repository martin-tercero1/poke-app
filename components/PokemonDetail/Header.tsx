import { View, Text, Image, SafeAreaView } from "react-native";
import getColorByPokemonType from "@/getColorByPokemonType";

export default function Header({ name, order, image, type }) {
  const pokemonColor = getColorByPokemonType(type);

  return (
    <>
      <View
        className="w-full h-[300px] absolute"
        style={{
          backgroundColor: pokemonColor,
          borderBottomEndRadius: 300,
          borderBottomLeftRadius: 300,
          transform: [{ scaleX: 2 }],
        }}
      />
      <SafeAreaView className="mx-5 mt-8">
        <View className="flex-row justify-between items-center pt-9">
          <Text className="capitalize text-white font-bold text-2xl">
            {name}
          </Text>
          <Text className="text-white font-bold">
            #{`${order}`.padStart(3, "0")}
          </Text>
        </View>
        <View className="flex items-center justify-center top-8">
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            className="w-60 h-64"
          />
        </View>
      </SafeAreaView>
    </>
  );
}
