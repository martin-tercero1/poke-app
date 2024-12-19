import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../app/screens/Home";
import { Settings } from "../../app/screens/Settings";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
