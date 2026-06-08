// app/[locale]/supply-health-check/page.tsx
import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import SCMForm from "@/components/layout/scm/scm-form";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: {
      absolute: "Supply Chain Health Check Service | Netherlands",
    },
    description:
      "Assess the health of your supply chain with our expert health check service in the Netherlands. Uncover inefficiencies and get actionable recommendations.",
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${params.locale}/supply-health-check`,
    },
  };
}

export default async function SCMPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");
  const translations = i18nInstance.getResourceBundle(locale, 'common');

  const slides = [
    {
      backgroundImage: "/assets/images/Supply_check_background_Image.webp",
      heading:"Supply Chain Health Check",
    //   heading: t("supplyChainHealthCheckHeading") || "Supply Chain Health Check",
    },
  ];

  return (
    <div>
      <BannerSection slides={slides} />
      <SCMForm locale={locale} translations={translations} />
    </div>
  );
}
