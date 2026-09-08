import initServerI18n from "@/utils/serverTranslation";
import type { Metadata } from "next";

import CareerJobsSection from "@/components/layout/career-jobs";
import CareerHeroSection from "@/components/layout/career-hero-section";
import CtaSplitSection from "@/components/layout/cta-split-section";
import CareerGrowthSection from "@/components/layout/career-growth-section";
import CareerOpenApplication from "@/components/layout/career-open-application";
import CareerFaqSection from "@/components/layout/career-faq-section";

export const metadata: Metadata = {
  title: "Careers at IT Solutions Worldwide | Jobs in Supply Chain, IT & Engineering, Netherlands",
  description:
    "Explore 31+ open roles at IT Solutions Worldwide — a Rotterdam-based outsourcing company hiring across supply chain, IT support, engineering, and data roles throughout the Netherlands. Apply today.",
};

export const revalidate = 3600;
export const dynamic = "force-static";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Career({ params }: PageProps) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");

  return (
    <main>
      {/* CAREER HERO */}
      <CareerHeroSection
        eyebrow={t("career.hero.eyebrow")}
        heading={t("career.hero.heading")}
        subtext={t("career.hero.subtext")}
        tags={[
          t("career.hero.tags.0"),
          t("career.hero.tags.1"),
          t("career.hero.tags.2"),
          t("career.hero.tags.3"),
        ]}
        breadcrumbs={[
          {
            label: t("career.hero.breadcrumbs.home"),
            href: `/${locale}`,
          },
          {
            label: t("career.hero.breadcrumbs.careers"),
          },
        ]}
        backgroundImage="/assets/images/career/c_bg.webp"
      />

      {/* CTA SPLIT */}
      <CtaSplitSection
        eyebrow={t("career.cta.eyebrow")}
        heading={t("career.cta.heading")}
        highlightWord={t("career.cta.highlightWord")}
        subtext={t("career.cta.subtext")}
        imageUrl="/assets/images/career/c-bg1.webp"
        imageAlt={t("career.cta.imageAlt")}
        overlayText={t("career.cta.overlayText")}
        ctaLabel={t("career.cta.ctaLabel")}
        ctaHref={`/${locale}/careers`}
      />

      {/* CAREER GROWTH */}
      <CareerGrowthSection locale={locale} />

      {/* JOBS */}
      <CareerJobsSection locale={locale} />

      {/* FAQ */}
      <CareerFaqSection locale={locale} />

      {/* OPEN APPLICATION */}
      <CareerOpenApplication />
    </main>
  );
}