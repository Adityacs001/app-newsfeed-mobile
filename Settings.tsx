import * as React from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import News from "./model/news";

const Settings = ({ route, navigation }: { route: any; navigation: any }) => {
  const news = route.params as News;

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>{news?.title}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    padding: 10,
    lineHeight: 24,
    fontWeight: "bold",
  },
  newsimage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  content: {
    fontSize: 16,
    padding: 10,
    lineHeight: 24,
  },
  description: {
    fontSize: 16,
    padding: 10,
    lineHeight: 24,
    flex: 1,
  },
  credits: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  author: {
    color: "#64748B",
  },
  publishedon: {
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default Settings;
