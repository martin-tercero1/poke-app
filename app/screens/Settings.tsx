import { Text, Button } from "react-native";

export type Props = {};

export const Settings: React.FC<Props> = ({ navigation }) => {
  const goToPage = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Text className="text-white">We are in Settings</Text>
      <Button title="Go To Home" onPress={goToPage} />
    </>
  );
};
