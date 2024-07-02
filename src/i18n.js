import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "../public/Locale/en.json";
import translationAr from "../public/Locale/ar.json";
import languagedetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

const selectedLanguage = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: selectedLanguage,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
