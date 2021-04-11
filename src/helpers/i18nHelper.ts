import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";

i18n.use(backend)
    .use(initReactI18next)
    .init({
        lng: "tr",
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;
