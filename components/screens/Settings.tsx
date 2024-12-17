import { View, Text, StyleSheet, Button } from "react-native";

export type Props = {};

export const Settings: React.FC<Props> = ({ navigation }) => {
  const goToPage = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Text style={styles.title}>We are in Settings</Text>
      <Button title="Go To Home" onPress={goToPage} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
