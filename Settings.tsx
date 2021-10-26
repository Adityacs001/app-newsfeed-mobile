import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./Localize";

const Settings = ({ route, navigation }: { route: any; navigation: any }) => {
  const { t, i18n } = useTranslation();

  const [locale, setLocale] = React.useState<string>(i18n.language);

  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{t("selectlanguage")}</Text>
        <Ionicons color="#444" size={28} name="ios-language-outline" />
      </View>

      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === locale;

        return (
          <Pressable
            key={language.code}
            style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => setLocale(language.code)}
          >
            <Text
              style={[selectedLanguage ? styles.selectedText : styles.text]}
            >
              {language.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#444",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#000",
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1D4ED8",
    paddingVertical: 4,
  },
});

export default Settings;
