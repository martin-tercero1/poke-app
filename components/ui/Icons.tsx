import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const PokedexIcon = (props: object) => (
  <MaterialIcons name="catching-pokemon" size={24} color="black" {...props} />
);

export const AccountIcon = (props: object) => (
  <MaterialIcons name="account-circle" size={24} color="black" {...props} />
);

export const FavoriteIcon = (props: any) =>
  props.focused || props.favorite ? (
    <MaterialIcons name="favorite" size={24} color="black" {...props} />
  ) : (
    <MaterialIcons name="favorite-outline" size={24} color="black" {...props} />
  );
