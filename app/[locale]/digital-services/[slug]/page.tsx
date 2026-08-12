// app/[locale]/digital-services/[slug]/page.tsx
import { notFound } from "next/navigation";
import initServerI18n from "@/utils/serverTranslation";
import { getCanonicalUrl, getLanguageAlternates } from "@/utils/seo";
import ServiceDetailPage from "@/components/layout/outsourcing-v2/ServiceDetailPage";

const KNOWN_SLUGS = [
  "website-design-development",
  "ecommerce-development",
  "seo-services",
  "ppc-advertising",
  "social-media-marketing",
  "software-development",
];
function cleanSlugToTitle(slug: string) {
  return slug
    .replace(/^(hire|outsource|staffing)-/, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// slug ko safe translation-key me convert karne ke liye (& jaise chars hata do)
function slugToKey(slug: string) {
  return slug.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateStaticParams() {
  const locales = ["en", "nl"];
  return locales.flatMap((locale) => KNOWN_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: any) {
  const { slug, locale } = await params;
  if (!KNOWN_SLUGS.includes(slug)) return {};

  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  const canonical = getCanonicalUrl(locale, `/digital-services/${slug}`);
  const languages = getLanguageAlternates(`/digital-services/${slug}`);

  const key = `digital-${slugToKey(slug)}`;
  const title = t(`${key}.meta.title`);
  const description = t(`${key}.meta.description`);

  return {
    title: title && !title.includes(key) ? title : `Hire Dedicated ${cleanSlugToTitle(slug)} | IT Solutions`,
    description,
    alternates: { canonical, languages },
  };
}

export default async function Page({ params }: any) {
  const { slug, locale } = await params;
  if (!KNOWN_SLUGS.includes(slug)) notFound();

  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  const key = `digital-${slugToKey(slug)}`;
  const content = t(key, { returnObjects: true, defaultValue: {} });
  const humanReadableRole = cleanSlugToTitle(slug);

  return (
    <ServiceDetailPage
      content={content}
      slug={slug}
      locale={locale}
      humanReadableRole={humanReadableRole}
      t={t}
    />
  );
}