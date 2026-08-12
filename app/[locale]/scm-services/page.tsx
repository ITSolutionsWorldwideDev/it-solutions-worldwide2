import { Metadata } from "next";
import initServerI18n from "@/utils/serverTranslation";
import { getCanonicalUrl, getLanguageAlternates } from "@/utils/seo";
import CategoryListingPage from "@/components/layout/outsourcing/CategoryListingPage";

export const dynamic = "force-static";
export const revalidate = 3600;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");
  const canonical = getCanonicalUrl(locale, `/scm-services`);
  const languages = getLanguageAlternates(`/scm-services`);
  return {
    title: t("category-scm-services.meta.title"),
    description: t("category-scm-services.meta.description"),
    alternates: { canonical, languages },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  return <CategoryListingPage translationKey="category-scm-services" locale={locale} t={t} />;
}