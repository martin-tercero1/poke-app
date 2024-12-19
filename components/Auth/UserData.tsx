import { View, Text, Pressable } from "react-native";
import useAuth from "@/hooks/useAuth";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { getPokemonsFavoriteApi } from "@/api/favorite";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const favorites = await getPokemonsFavoriteApi();
          setTotal(favorites.length);
        } catch (error) {
          console.error(error);
        }
      })();
    }, []),
  );

  return (
    <View className="mx-5 mt-5">
      <View className="mb-8">
        <Text className="font-bold text-2xl">Welcome, </Text>
        <Text className="font-bold text-2xl">{`${auth.firstName}`}</Text>
      </View>
      <View className="mb-5">
        <ItemMenu title="Firstname" text={`${auth.firstName}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="Total Favorites" text={`${total} Pokemon`} />
      </View>
      <Pressable
        onPress={logout}
        className="bg-slate-400 p-3 rounded-xl m-3 h-12"
      >
        <Text className="text-center">Log out</Text>
      </Pressable>
    </View>
  );
}

function ItemMenu({ title, text }) {
  return (
    <View className="flex flex-row p-5 border-[#CFCFCF] border-b-2">
      <Text className="font-bold pr-3 w-[110px]">{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}
