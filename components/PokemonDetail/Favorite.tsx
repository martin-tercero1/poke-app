import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "@/api/favorite";
import { useEffect, useState } from "react";
import { FavoriteIcon } from "../ui/Icons";

export default function Favorite({ pokemonId, isFavorite, setIsFavorite }) {
  const [reloadChecker, setReloadChecker] = useState(false);
  console.log(isFavorite);

  const loadFavoritePokemon = async () => {
    try {
      const response = await isPokemonFavoriteApi(pokemonId);
      setIsFavorite(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadFavoritePokemon();
  }, [pokemonId, isFavorite, reloadChecker]);

  const onReloadCheckFavorite = () => {
    setReloadChecker((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      console.log("Add to favs");
      await addPokemonFavoriteApi(pokemonId);
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async () => {
    try {
      console.log("Eliminar de favs");
      await removePokemonFavoriteApi(pokemonId);
      setIsFavorite(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FavoriteIcon
      favorite={isFavorite}
      onPress={isFavorite ? removeFavorite : addFavorite}
      className="mr-3"
      size={30}
    />
  );
}
