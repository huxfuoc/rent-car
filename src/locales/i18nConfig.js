import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from './en/loginEN.json'
import global_vi from './vi/loginVI.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                global: global_en,
            },
            vi: {
                global: global_vi,
            },
        },
        lng: 'vi',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

