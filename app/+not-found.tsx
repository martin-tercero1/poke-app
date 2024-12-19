import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="flex items-center justify-center p-10">
      <Stack.Screen
        options={{
          title: "Oops! Not Found",
        }}
      ></Stack.Screen>
      <Link className="mt-10 py-10 underline text-xl" href="/">
        Go back to the Pokedex
      </Link>
      <Text>This screen does not exists</Text>
    </View>
  );
}
