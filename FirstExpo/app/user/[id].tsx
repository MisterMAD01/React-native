import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const PRIMARY_COLOR = "#EE4D2D";

export default function UserByID() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Details</Text>
        <Text style={styles.detailText}>
          User ID: <Text style={styles.detailValue}>{id}</Text>
        </Text>
        <Text style={styles.infoText}>
          (This ID was passed dynamically via the URL path.)
        </Text>
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
    padding: 20,
    marginTop: 50,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: PRIMARY_COLOR,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  detailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  detailValue: {
    fontWeight: "bold",
    color: "#333",
  },
  infoText: {
    fontSize: 14,
    color: "#777",
    marginTop: 15,
    textAlign: "center",
  },
});
