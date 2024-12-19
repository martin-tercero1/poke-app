import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITE_STORAGE = "favorites";

export async function getPokemonsFavoriteApi() {
  const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE);
  return favorites ? [...new Set(JSON.parse(favorites))] : [];
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    console.error(error);
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    console.log(favorites);
    return favorites.includes(id);
  } catch (error) {
    console.error(error);
  }
}

export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    const toRemoveIndex = favorites.indexOf(id);
    favorites.splice(toRemoveIndex, 1);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    console.error(error);
  }
}
