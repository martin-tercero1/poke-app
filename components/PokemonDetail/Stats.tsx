import { View, Text } from "react-native";

export default function Stats({ stats }) {
  const barStyles = (num) => {
    const color = num > 49 ? "#00AC17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View className="px-5 mt-10 mb-12">
      <Text className="font-bold text-xl pb-1">Base Stats</Text>
      {stats.map((item, index) => (
        <View className="flex flex-row py-1" key={index}>
          <View className="w-1/3">
            <Text className="capitalize text-sm text-stone-700">
              {item.stat.name}
            </Text>
          </View>
          <View className="w-2/3 flex flex-row items-center">
            <Text className="w-1/6 text-sm">{item.base_stat}</Text>
            <View className="bg-slate-400 w-5/6 h-1 rounded-3xl overflow-hidden">
              <View
                className="h-1 rounded-3-xl"
                style={[barStyles(item.base_stat)]}
              ></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
