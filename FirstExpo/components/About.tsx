import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyStyle from "../constants/Style";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About This App</Text>
      <Text style={styles.text}>
        This is a simple Expo Router project demonstrating navigation, styling,
        and components.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
