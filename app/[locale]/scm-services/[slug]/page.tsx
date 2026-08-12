// app/[locale]/scm-services/[slug]/page.tsx
import { notFound } from "next/navigation";
import initServerI18n from "@/utils/serverTranslation";
import { getCanonicalUrl, getLanguageAlternates } from "@/utils/seo";
import ServiceDetailPage from "@/components/layout/outsourcing-v2/ServiceDetailPage";

const KNOWN_SLUGS = ["scm-consultancy", "business-consultancy", "supply-chain-performance-check"];

function cleanSlugToTitle(slug: string) {
  return slug
    .replace(/^(hire|outsource|staffing)-/, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
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
  const canonical = getCanonicalUrl(locale, `/scm-services/${slug}`);
  const languages = getLanguageAlternates(`/scm-services/${slug}`);
  const title = t(`scm-${slug}.meta.title`);
  const description = t(`scm-${slug}.meta.description`);
  return {
    title: title && !title.includes(slug) ? title : `Hire Dedicated ${cleanSlugToTitle(slug)} | IT Solutions`,
    description,
    alternates: { canonical, languages },
  };
}

export default async function Page({ params }: any) {
  const { slug, locale } = await params;
  if (!KNOWN_SLUGS.includes(slug)) notFound();

  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  const content = t(`scm-${slug}`, { returnObjects: true, defaultValue: {} });
  const humanReadableRole = cleanSlugToTitle(slug);

  return <ServiceDetailPage content={content} slug={slug} locale={locale} humanReadableRole={humanReadableRole} t={t} />;
}