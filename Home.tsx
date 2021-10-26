import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  RefreshControl,
} from "react-native";
import "./Localize";
import { useTranslation } from "react-i18next";
import News from "./model/news";

import Footer from "./Footer";

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: {
  item: News;
  onPress: any;
  backgroundColor: any;
  textColor: any;
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.item, backgroundColor]}>
      <Image
        style={styles.newsimage}
        source={{
          uri: item.urlToImage,
        }}
      />
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export default function Home({ navigation }: { navigation: any }) {
  const { t, i18n } = useTranslation();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [newlist, setNewlist] = React.useState<Array<News>>([]);
  const [selectednews, setSelectedNews] = React.useState<News>();

  const [searchterm, setSearchTerm] = React.useState<string>("");

  async function fetchdata(q: string, locale: string) {
    if (locale === "en") locale = "us";
    await fetch(
      //`https://newsapi.org/v2/top-headlines?country=${locale}&apiKey=c3462c7d8202468e916b6e7a98f80472&q=${q}`
      `https://newsapi.org/v2/top-headlines?country=${locale}&apiKey=2582b18a4b574a8388bbd9a9078d5363&q=${q}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((news) => setNewlist(news?.articles))
      .finally(() => {
        setIsLoading(false);
        setSelectedNews(undefined);
      });
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetchdata("", i18n.language.toLowerCase());
  }, [i18n.language]);

  React.useEffect(() => {
    if (!!selectednews) navigation.navigate("Details", selectednews);
  }, [selectednews]);

  React.useEffect(() => {
    if (!!searchterm) fetchdata(searchterm, i18n.language.toLowerCase());
  }, [searchterm, i18n.language]);

  const renderItem = ({ item }: { item: News }) => {
    const backgroundColor =
      item.title === selectednews?.title ? "#C7D2FE" : "#E2E8F0";
    const color = item.title === selectednews?.title ? "#4338CA" : "#334155";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedNews(item);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.listwrapper}>
            <TextInput
              onChangeText={setSearchTerm}
              style={[styles.search, !!searchterm && styles.search_focused]}
              placeholder={t("searchnews")}
            />
            <FlatList
              style={styles.list}
              data={newlist}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
              extraData={selectednews}
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={async () =>
                    await fetchdata(searchterm, i18n.language.toLowerCase())
                  }
                />
              }
            />
          </View>
        )}
      </View>

      {/* <Footer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {},
  wrapper: {
    flex: 1,
    paddingVertical: 10,
  },
  listwrapper: { flex: 1, flexDirection: "column" },
  list: { flex: 1 },
  item: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#94A3B8",
  },
  title: {
    fontSize: 16,
    paddingHorizontal: 10,
    flex: 1,
    flexWrap: "wrap",
  },
  newsimage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  search: {
    padding: 10,
    borderColor: "#F1F5F9",
    borderWidth: 0.5,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  search_focused: {
    borderWidth: 2,
    borderColor: "#1D4ED8",
  },
});
