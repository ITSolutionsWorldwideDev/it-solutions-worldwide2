// utils/serverTranslation.ts
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

const initServerI18n = async (locale: string, namespaces: string[] = ['common']) => {
  const i18nInstance = i18next.createInstance();

  await i18nInstance
    .use(Backend)
    .init({
      lng: locale,
      fallbackLng: 'en',
      ns: namespaces,
      defaultNS: 'common',
      backend: {
        loadPath: path.resolve('./i18n/locales/{{lng}}/{{ns}}.json'),
      },
      interpolation: {
        escapeValue: false,
      },
    });

  return i18nInstance;
};

export default initServerI18n;

/* // utils/serverTranslation.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

let initialized = false;

export async function serverTranslation(locale: string, ns: string | string[] = 'common') {
  if (!initialized) {
    await i18next
      .use(Backend)
      .use(initReactI18next)
      .init({
        lng: locale,
        fallbackLng: 'en',
        ns: Array.isArray(ns) ? ns : [ns],
        backend: {
          loadPath: path.resolve(process.cwd(), 'i18n/locales/{{lng}}/{{ns}}.json'),
        },
        interpolation: {
          escapeValue: false,
        },
      });
    initialized = true;
  }

  return {
    t: i18next.getFixedT(locale),
  };
}
 */