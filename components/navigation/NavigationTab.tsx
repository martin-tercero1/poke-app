import { Tabs } from "expo-router";
import { AccountIcon, FavoriteIcon, PokedexIcon } from "../ui/Icons";

export default function NavigationTab() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color }) => <FavoriteIcon color={color} />,
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
        name="pokemon"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
