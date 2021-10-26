import * as React from "react";
import * as deeplinking from "expo-web-browser";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import News from "./model/news";
import Footer from "./Footer";
import { ThemeContext } from "./Theme";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  return (
    <ScrollView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      <Button
        title={news.title}
        onPress={() => deeplinking.openBrowserAsync(news?.url)}
      >
        <Text
          style={[
            styles.title,
            { color: theme.color, textAlign: "left", flexWrap: "nowrap" },
          ]}
        >
          {news?.title}
        </Text>
      </Button>

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
            {t("publishedon")} :{" "}
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
          <Text style={[styles.title, { color: theme.color }]}>{t("by")}</Text>{" "}
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
