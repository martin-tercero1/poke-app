import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { Settings } from "../screens/Settings";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
