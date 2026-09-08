// utils/serverTranslation.ts
import "server-only";
import i18next, { type i18n } from "i18next";

const i18nCache = new Map<string, Promise<i18n>>();

async function loadLocaleResources(locale: string) {
  switch (locale) {
    case "nl":
      return { common: (await import("../public/locales/nl/common.json")).default };
    case "en":
    default:
      return { common: (await import("../public/locales/en/common.json")).default };
  }
}

async function createI18nInstance(locale: string): Promise<i18n> {
  const i18nInstance = i18next.createInstance();
  const commonResources = await loadLocaleResources(locale);

  const fallbackResources =
    locale !== "en"
      ? { common: (await import("../public/locales/en/common.json")).default }
      : commonResources;

  await i18nInstance.init({
    lng: locale,
    fallbackLng: "en",
    resources: {
      [locale]: commonResources,
      en: fallbackResources,
    },
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