import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sampleen: "Sample English Text",
        recentnewz: "Recent News",
        refresh: "Refresh",
        searchnews: "Search news by title ...",
        selectlanguage: "Select Language",
        selecttheme: "Select Theme",
      },
    },
    bg: {
      translation: {
        sampleen: "Sample Bulgarian Text",
        recentnewz: "Последните новини",
        refresh: "Опресняване",
        searchnews: "Търсене на новини по заглавие ...",
        selectlanguage: "Избери език",
        selecttheme: "Изберете тема",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "bg", label: "Bulgaria" },
];

export default i18n;
