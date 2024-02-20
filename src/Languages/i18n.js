import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import English from './English.json'
import Arabic from './Arabic.json'

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: English,
      },
      ar: {
        translation: Arabic,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;