import { View, Text, TextInput, Button } from "react-native";

export default function LoginForm() {
  return (
    <View className="bg-red-50">
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Button title="Send" onPress={() => console.log("Sent")}></Button>
    </View>
  );
}
