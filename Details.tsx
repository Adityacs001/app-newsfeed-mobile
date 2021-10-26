import * as React from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import News from "./model/news";
import Footer from "./Footer";
import { ThemeContext } from "./Theme";

const getFormattedDate = (input: string): string => {
  let formatteddate: string = input;
  try {
    formatteddate = input.toString().split("T")[0];
  } catch {}

  return formatteddate;
};

const Details = ({ route, navigation }: { route: any; navigation: any }) => {
  const news = route.params as News;
  const { theme } = React.useContext(ThemeContext);

  return (
    <ScrollView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.title, { color: theme.color }]}>{news?.title}</Text>
      <Text style={[styles.content, { color: theme.color }]}>
        {news?.content}
      </Text>
      <View style={styles.publishedon}>
        <Text
          style={[styles.description, styles.author, { color: theme.color }]}
        >
          <Text
            style={[styles.title, { color: theme.color, fontWeight: "normal" }]}
          >
            Published on :{" "}
          </Text>
          {getFormattedDate(news?.publishedAt)}
        </Text>
      </View>
      <Image
        style={styles.newsimage}
        source={{
          uri: news.urlToImage,
        }}
      />
      <Text style={[styles.description, { color: theme.color }]}>
        {news?.description}
      </Text>
      <View style={styles.credits}>
        <Text
          style={[styles.description, styles.author, { color: theme.color }]}
        >
          <Text style={[styles.title, { color: theme.color }]}>By</Text>{" "}
          {news?.author}
        </Text>
      </View>
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

export default Details;
