import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PRIMARY_COLOR = "#EE4D2D";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Profile</Text>
        <Text style={styles.description}>
          This page shows the profile information for the currently logged-in
          user.
        </Text>
        <Text style={styles.profileData}>Status: Active</Text>
        <Text style={styles.profileData}>Role: Administrator</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
    textAlign: "center",
  },
  profileData: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 5,
    color: "#333",
    textAlign: "center",
  },
});
