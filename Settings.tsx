import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./Localize";
import { ThemeContext } from "./Theme";

const Settings = ({ route, navigation }: { route: any; navigation: any }) => {
  const { t, i18n } = useTranslation();
  const { dark, theme, toggle } = React.useContext(ThemeContext);

  const [locale, setLocale] = React.useState<string>(i18n.language);

  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.row}>
        <Text style={[styles.title, { color: theme.color }]}>
          {t("selectlanguage")}
        </Text>
        <Ionicons color={theme.color} size={28} name="ios-language-outline" />
      </View>

      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === locale;

        return (
          <Pressable
            key={language.code}
            style={[
              styles.buttonContainer,
              { backgroundColor: theme.backgroundColor },
            ]}
            disabled={selectedLanguage}
            onPress={() => setLocale(language.code)}
          >
            <Text
              style={[
                selectedLanguage
                  ? [styles.selectedText, { color: theme.highligthedcolor }]
                  : [styles.text, { color: theme.color }],
              ]}
            >
              {language.label}
            </Text>
          </Pressable>
        );
      })}

      <View style={[styles.row, { marginTop: 16 }]}>
        <Text style={[styles.title, { color: theme.color }]}>
          {t("selecttheme")}
        </Text>
        <Ionicons color={theme.color} size={28} name="ios-color-wand" />
      </View>
      {["Light", "Dark"].map((selectedtheme) => {
        const selected =
          selectedtheme.toString().toLowerCase() ===
          theme.name.toString().toLowerCase();

        return (
          <Pressable
            key={selectedtheme}
            style={styles.buttonContainer}
            disabled={selected}
            onPress={() => toggle()}
          >
            <Text
              style={[
                selected
                  ? [styles.selectedText, { color: theme.highligthedcolor }]
                  : [styles.text, { color: theme.color }],
              ]}
            >
              {selectedtheme}
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
    flex: 1,
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
