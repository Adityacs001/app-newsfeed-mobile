import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>News List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4338CA",
  },
  title: { color: "#fff", fontWeight: "bold", fontSize: 24 },
});
