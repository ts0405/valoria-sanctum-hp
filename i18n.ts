// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import jaCommon from './locales/ja/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en', 'ja'],
  resources: {
    en: {
      common: enCommon,
    },
    ja: {
      common: jaCommon,
    },
  },
  ns: ['common'],
  defaultNS: 'common',
});

export default i18n;
