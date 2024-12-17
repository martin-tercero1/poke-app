import { View, Text, StyleSheet } from "react-native";

export type Props = {
  firstName: string;
  lastName: string;
};

export const Welcome: React.FC<Props> = ({
  firstName = "User",
  lastName = "",
}) => {
  return (
    <Text style={styles.title}>
      Hello {firstName} {lastName}!
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
