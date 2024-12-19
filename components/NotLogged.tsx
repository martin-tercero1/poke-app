import { useNavigation } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function NotLogged() {
  const navigation = useNavigation();

  return (
    <View className="my-12 px-12">
      <Text className="mb-2 text-center">
        To view this screen, you must log into your account
      </Text>
      <Pressable
        className="bg-slate-400 p-3 rounded-xl m-3 h-12"
        onPress={() => navigation.navigate("account")}
      >
        <Text className="text-center">Go to the login</Text>
      </Pressable>
    </View>
  );
}
