// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en.json";
import translationRU from "../locales/ru.json";
import translationKZ from "../locales/kz.json";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  kz: { translation: translationKZ },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", // язык по умолчанию
    fallbackLng: "en", // если ключа нет — fallback

    interpolation: {
      escapeValue: false, // React уже экранирует
    },
  });

export default i18n;
