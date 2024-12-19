import { Text } from "react-native";

export type Props = {
  firstName: string;
  lastName: string;
};

export const Welcome: React.FC<Props> = ({
  firstName = "User",
  lastName = "",
}) => {
  return (
    <Text className="text-white">
      Hello {firstName} {lastName}!
    </Text>
  );
};
