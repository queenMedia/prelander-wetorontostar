import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.DEBUG_I18NEXT === "true",
    fallbackLng: "es",
    supportedLngs: ["es", "en-US"],
    ns: [
      "errors",
      "footer",
      "formik",
      "header",
      "modal",
      "swal",
      "terms",
      "translation"
    ],
    nsSeparator: false,
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/musk-special-report/locales/{{lng}}/{{ns}}.json"
    }
  });

export default i18n;
