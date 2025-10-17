import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PRIMARY_COLOR = "#EE4D2D";
const ACCENT_COLOR = "#FF8800";

export default function CartPage() {
  // จำลองสินค้าในตะกร้า
  const cartItems = [
    { id: "1", name: "Smart Watch X", price: 2590, qty: 1 },
    { id: "2", name: "Wireless Headphones", price: 1999, qty: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      <ScrollView style={styles.cartList}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <View style={styles.itemDetail}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>
                ฿{item.price.toLocaleString()} x {item.qty}
              </Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Ionicons name="trash-outline" size={20} color={PRIMARY_COLOR} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* สรุปยอดเงิน */}
      <View style={styles.summaryBox}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>฿{total.toLocaleString()}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping:</Text>
          <Text style={styles.summaryValue}>฿50</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Grand Total:</Text>
          <Text style={styles.totalValue}>
            ฿{(total + 50).toLocaleString()}
          </Text>
        </View>

        {/* ปุ่ม Checkout */}
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => alert("Navigate to Checkout Page")}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: PRIMARY_COLOR,
  },
  cartList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1,
  },
  itemDetail: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  cartItemPrice: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  removeButton: {
    // แก้ไข: เพิ่มสไตล์นี้
    padding: 8,
  },
  summaryBox: {
    // แก้ไข: เพิ่มสไตล์นี้
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  summaryRow: {
    // แก้ไข: เพิ่มสไตล์นี้
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    // แก้ไข: เพิ่มสไตล์นี้
    fontSize: 16,
    color: "#555",
  },
  summaryValue: {
    // แก้ไข: เพิ่มสไตล์นี้
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalRow: {
    // แก้ไข: เพิ่มสไตล์นี้
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    marginTop: 5,
  },
  totalLabel: {
    // แก้ไข: เพิ่มสไตล์นี้
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalValue: {
    // แก้ไข: เพิ่มสไตล์นี้
    fontSize: 18,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
  checkoutButton: {
    // แก้ไข: เพิ่มสไตล์นี้
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  checkoutText: {
    // แก้ไข: เพิ่มสไตล์นี้
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
