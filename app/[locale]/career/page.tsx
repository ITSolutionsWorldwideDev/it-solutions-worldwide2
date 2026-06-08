// app/[locale]/logistics/career/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import ImageSection2 from "@/components/layout/image-section-2";
import BannerSection from "@/components/layout/banner-section";
import CardSection from "@/components/layout/card-section";
import { Metadata } from "next";
import CareerJobsSection from "@/components/layout/career-jobs";

// ISR revalidation time
export const revalidate = 3600;

// Dynamic Metadata (Isme canonical link locale ke sath automatic banega)
export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: {
      absolute: "IT & Supply Chain Jobs in Netherlands | Apply Now",
    },
    description:
      "Looking for IT, supply chain or digital marketing jobs in the Netherlands? Explore career opportunities at IT Solutions Worldwide and grow with us.",
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${params.locale}/career`,
    },
  };
}

// Single and Cleaned Career Page Component
export default async function Career({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/career1.webp",
      heading: t("career.heading_1"),
    },
  ];

  return (
    <div>
      <BannerSection slides={slides} />
      <ImageSection
        heading={t("career.heading_2")}
        text={t("career.text_2")}
        imageUrl="/assets/images/career2.webp"
      />
      <ImageSection2
        heading={t("career.heading_3")}
        text={t("career.text_3")}
        imageUrl="/assets/images/career3.webp"
      />
      <CardSection heading={t("career.heading_4")} text={t("career.text_4")} />
      <CareerJobsSection />
    </div>
  );
}