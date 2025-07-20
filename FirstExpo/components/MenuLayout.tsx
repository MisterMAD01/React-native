import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const MenuLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Profile</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Messages</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    width: "47%",
    height: 100,
    backgroundColor: "#4a90e2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MenuLayout;
