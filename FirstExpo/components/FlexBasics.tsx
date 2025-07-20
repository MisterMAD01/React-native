import { StyleSheet, View } from "react-native";
import React from "react";

const FlexBasics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flexDirection: "row",
  },
  box: {
    backgroundColor: "darkred",
    width: 100,
    height: 100,
    margin: 2,
  },
  box1: {
    backgroundColor: "yellow",
    width: 100,
    height: 100,
    margin: 2,
  },
});

export default FlexBasics;
