import { POKEMON_TYPE_COLORS } from "./constants/Colors";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
