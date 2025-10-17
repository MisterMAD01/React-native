import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PRIMARY_COLOR = "#EE4D2D";

export default function AdminPage() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="lock-closed-outline" size={50} color={PRIMARY_COLOR} />
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={styles.description}>
          This area is reserved for administrative tasks. You can implement
          product management, order tracking, and user management here.
        </Text>
        <Text style={styles.status}>Status: Ready for Development</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 30,
    marginTop: 50,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
    textAlign: "center",
    lineHeight: 24,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00cc66", // ใช้สีเขียวสดใสสำหรับสถานะ
  },
});
