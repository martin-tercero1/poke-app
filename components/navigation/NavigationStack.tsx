import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../app/screens/Home";
import { Settings } from "../../app/screens/Settings";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
