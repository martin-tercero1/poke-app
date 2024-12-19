import { Tabs } from "expo-router";
import { AccountIcon, FavoriteIcon, PokedexIcon } from "../ui/Icons";
import { Image } from "react-native";

export default function NavigationTab() {
  return (
    // Safe Area Provider
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerTitleAlign: "center",
        tabBarStyle: { backgroundColor: "#fefefe" },
        headerLeft: () => (
          <Image
            source={require("../../assets/images/pokemon-logo.png")}
            style={{ width: 100, height: 35, marginLeft: 15 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ focused, color }) => (
            <FavoriteIcon focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokedex",
          tabBarIcon: ({ color }) => <PokedexIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <AccountIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="[pokemonId]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
