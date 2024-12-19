import { View, Text } from "react-native";
import getColorByPokemonType from "@/getColorByPokemonType";

export default function Type({ types }) {
  return (
    <View className="mt-12 flex flex-row items-center justify-center">
      {types.map((item, index) => (
        <View
          key={index}
          className="px-8 py-1 rounded-2xl mx-2"
          style={{ backgroundColor: getColorByPokemonType(item.type.name) }}
        >
          <Text className="" key={index}>
            {item.type.name}
          </Text>
        </View>
      ))}
    </View>
  );
}
