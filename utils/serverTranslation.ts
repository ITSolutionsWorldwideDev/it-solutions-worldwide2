// utils/serverTranslation.ts
import enCommon from "../public/locales/en/common.json";
import nlCommon from "../public/locales/nl/common.json";
import i18next, { type i18n } from "i18next";

const resources = {
  en: { common: enCommon },
  nl: { common: nlCommon },
};

const i18nCache = new Map<string, Promise<i18n>>();

async function createI18nInstance(locale: string): Promise<i18n> {
  const i18nInstance = i18next.createInstance();
  await i18nInstance.init({
    lng: locale,
    fallbackLng: "en",
    resources,
    initAsync: true,
  });
  return i18nInstance;
}

export default async function initServerI18n(locale: string): Promise<i18n> {
  const cached = i18nCache.get(locale);
  if (cached) return cached;

  const instancePromise = createI18nInstance(locale);
  i18nCache.set(locale, instancePromise);
  return instancePromise;
}
