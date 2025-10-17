import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const PRIMARY_COLOR = "#EE4D2D";
const ACCENT_COLOR = "#FF8800";

const ensureString = (
  param: string | string[] | undefined
): string | undefined => {
  if (typeof param === "string") {
    return param;
  }
  if (Array.isArray(param) && param.length > 0) {
    return param[0];
  }
  return undefined;
};

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const id = ensureString(params.id) || "000";
  const name = ensureString(params.name) || "Unknown Product";
  const priceText = ensureString(params.price) || "0.00";

  const numericPrice = parseFloat(priceText.replace(/,/g, "")) || 0;

  const handleAddToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${name} (฿${numericPrice.toLocaleString()}) has been added to your cart.`
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={80} color="#ccc" />
          <Text style={styles.imageText}>Product Image Placeholder</Text>
        </View>

        <View style={styles.detailsCard}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>
            ฿{numericPrice.toLocaleString()}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Product Description</Text>
          <Text style={styles.descriptionText}>
            This is a high-quality product with ID: {id}. It features advanced
            technology, durable materials, and a sleek design, making it the
            perfect addition to your collection. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Text>
          <Text style={styles.descriptionText}>
            (More detailed specifications and customer reviews would go here.)
          </Text>
        </View>
      </ScrollView>

      {/* Footer Bar สำหรับปุ่ม Add to Cart */}
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>
          Total: ฿{numericPrice.toLocaleString()}
        </Text>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={24} color="#fff" />
          <Text style={styles.cartButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    paddingBottom: 120,
  },
  imagePlaceholder: {
    height: 300,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    marginTop: 10,
    color: "#999",
  },
  detailsCard: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productName: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "900",
    color: PRIMARY_COLOR,
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
  },
  descriptionText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    elevation: 10,
  },
  footerPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  cartButton: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
