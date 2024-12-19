import { Stack } from "expo-router";
// import NavigationTab from "@/components/navigation/NavigationTab";

// Import the global CSS file - Tailwind directives
import "../global.css";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </AuthProvider>
  );
}
