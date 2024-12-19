import { Button, SafeAreaView } from "react-native";
import { Welcome } from "@/components/Welcome";
import LoginForm from "@/components/LoginForm";

export default function Home(props: any) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Welcome firstName="Martin" lastName="Tercero"></Welcome>
      <LoginForm />
      <Button title="Go To Settings" onPress={goToPage} />
    </SafeAreaView>
  );
}
