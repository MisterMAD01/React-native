import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#960669",
        },
        headerTintColor: "#ffffff",
      }}
    >
      {/* <Stack.Screen name="(admin)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="contact" options={{ title: "Contact us" }} />
    </Stack>
  );
}
