// utils/seo.ts
export const SITE_URL = "https://www.itsolutionsworldwide.com";
export const LOCALES = ["en", "nl"] as const;

export function getCanonicalUrl(locale: string, path: string = "") {
  const cleanPath = path && !path.startsWith("/") ? `/${path}` : path;
  const fullPath = `/${locale}${cleanPath || ""}`;
  return `${SITE_URL}${fullPath}`.replace(/\/$/, "") || SITE_URL;
}

export function getLanguageAlternates(path: string = "") {
  const languages: Record<string, string> = {};
  LOCALES.forEach((loc) => {
    languages[loc] = getCanonicalUrl(loc, path);
  });
  return languages;
}