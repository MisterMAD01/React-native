import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PRIMARY_COLOR = "#EE4D2D";
const ACCENT_COLOR = "#FF8800"; // สีส้มสดสำหรับราคา

// <<< เพิ่ม TypeScript Interface สำหรับ Product >>>
interface Product {
  id: string;
  name: string;
  price: string;
  icon: React.ComponentProps<typeof Ionicons>["name"]; // ใช้ Type ของ Ionicons name
}

// ข้อมูลจำลอง (ใช้ Product Type)
const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "Smart Watch X", price: "2,590", icon: "watch-outline" },
  {
    id: "2",
    name: "Wireless Headphones",
    price: "1,999",
    icon: "headset-outline",
  },
  {
    id: "3",
    name: "Portable Charger",
    price: "850",
    icon: "battery-charging-outline",
  },
  {
    id: "4",
    name: "Gaming Mouse",
    price: "1,200",
    icon: "game-controller-outline",
  },
];

// <<< กำหนด Type ให้กับ props ของ ProductItem >>>
const ProductItem = ({ item }: { item: Product }) => (
  <Link
    href={{
      pathname: "/product/[id]",
      params: { id: item.id, name: item.name, price: item.price },
    }}
    asChild
  >
    <TouchableOpacity style={styles.itemCard}>
      <Ionicons
        name={item.icon}
        size={30}
        color={PRIMARY_COLOR}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>฿{item.price}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
    </TouchableOpacity>
  </Link>
);

export default function ProductsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Products</Text>
      <FlatList
        data={MOCK_PRODUCTS}
        renderItem={({ item }) => <ProductItem item={item} />} // FlatList renderItem ต้องส่ง item
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: PRIMARY_COLOR,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: ACCENT_COLOR,
    fontWeight: "bold",
    marginTop: 3,
  },
});
