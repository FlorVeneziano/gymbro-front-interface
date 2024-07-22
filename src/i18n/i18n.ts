import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENCommon from "./en/common.en.json";
import ESCommon from "./es/common.es.json";

const resources = {
  en: {
    common: ENCommon,
  },
  es: {
    common: ESCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;