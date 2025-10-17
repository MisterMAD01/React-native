import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#EE4D2D", // สีส้ม Shopee
        },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* เพิ่ม Product Detail Route: ใช้ title เป็น "Product" และแสดง ID ในหน้าจอ */}
      <Stack.Screen name="product/[id]" options={{ title: "Product Detail" }} />

      {/* เพิ่ม Checkout Route */}
      <Stack.Screen name="checkout/index" options={{ title: "Checkout" }} />

      {/* User Routes */}
      <Stack.Screen name="user/[id]" options={{ title: "User Details" }} />
      <Stack.Screen name="user/profile" options={{ title: "User Profile" }} />
    </Stack>
  );
}
