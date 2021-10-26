import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>
        {" "}
        &copy; 2021 Musala, Inc. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4338CA",
  },
  title: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
