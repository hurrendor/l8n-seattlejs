import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next.init()
  // .use(initReactI18next)
  // .use(resourcesToBackend((language: string, namespace: string) => import(`./../locales/${language}/${namespace}.json`)))
  // .init({
    // fallbackLng: 'en-US',
    // debug: true,
  // })

export default i18next;