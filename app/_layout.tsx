import { Stack } from "expo-router";
// import NavigationTab from "@/components/navigation/NavigationTab";

// Import the global CSS file - Tailwind directives
import "../global.css";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
