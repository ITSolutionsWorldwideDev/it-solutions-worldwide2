// app/[locale]/outsourcing/page.tsx

import { Metadata } from "next";
import React from "react";
import initServerI18n from "@/utils/serverTranslation";
import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import Section3 from "@/components/layout/outsourcing/section-3";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import Contact from "@/components/layout/outsourcing/Contact";
import Faqs from "@/components/layout/outsourcing/Faqs";
import Roles from "@/components/layout/outsourcing/Roles";
import { RolesData } from "./[slug]/page";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  if (locale === "nl") {
    return {
      title: { absolute: "Remote Outsourcing Services for Every Role | IT Solutions Worldwide" },
      description: "Krijg binnen 3-5 werkdagen een shortlist van gekwalificeerde remote kandidaten. Schaal je team betaalbaar op met vertrouwde experts in IT, marketing, administratie en meer.",
    };
  }
  return {
    title: { absolute: "Remote Outsourcing Services for Every Role | IT Solutions Worldwide" },
    description: "Get a shortlist of qualified remote candidates in 3-5 business days. Scale your team affordably with trusted experts in IT, marketing, administration, and more.",
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { locale } = params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const cards2 = [
    {
      image: "/assets/images/outsource-icon-1.webp",
      title: t("ecommerce.card_heading_1"),
    },
    {
      image: "/assets/images/outsource-icon-2.webp",
      title: t("ecommerce.card_heading_2"),
    },
    {
      image: "/assets/images/outsource-icon-3.webp",
      title: t("ecommerce.card_heading_3"),
    },
    {
      image: "/assets/images/outsource-icon-3.webp",
      title: t("ecommerce.card_heading_4"),
    },
  ];

  const imagetext = (
    <>
      {t("outsourcing.hero.description")}
      <br />
      <br />
      {t("outsourcing.hero.sub_description")}
    </>
  );

  const footerSectionText = (
    <>
      {t("outsourcing.footer_cta.description")}
      <br />
      <br />
      {t("outsourcing.footer_cta.instruction")}
    </>
  );

  type FAQItem = {
    q: string;
    a: string;
  };

const rawFaqData = t("outsourcing.faq.questions", {
  returnObjects: true,
});

const faqData: FAQItem[] = Array.isArray(rawFaqData) ? rawFaqData : [];
  // console.log(faqData);

  // const questions = faqData.map((item: FAQItem) => ({
  //   question: item.q,
  //   answer: item.a,
  // }));

  const outsourcingCategories =
    (t("outsourcing.categories", {
      returnObjects: true,
    }) as RolesData["roles"]) || {};

  const outsourcingRolesData: RolesData = {
    title: t("outsourcing.intro_section.title"),
    intro: t("outsourcing.intro_section.text"),
    roles: outsourcingCategories,
  };

  const gradientColors = ["#ffffff", "#f3f4f6", "#f7f2fd"];

  return (
    <div>
      <FullContentSection
        heading={t("outsourcing.hero.title")}
        text={imagetext}
        buttonText={t("outsourcing.hero.cta_button")}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />
      {/* {outsourcing.intro_section.title && ( */}
      <Section2
        heading={t("outsourcing.intro_section.title")}
        text={t("outsourcing.intro_section.text")}
        buttonText={t("outsourcing.intro_section.cta_call")}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        cards={cards2}
        columns={4}
      />
      {/* )} */}

      <Roles roles={outsourcingRolesData} isCategory={true} />

      <FullContentSection
        heading={t("outsourcing.why_us.title")}
        text={imagetext}
        buttonText={t("outsourcing.why_us.cta_btn")}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <TrustSection />
      {/* <FAQSection2 questions={questions} gradientColors={gradientColors} /> */}

      <Faqs faqData={faqData} />

      <FullContentSection
        heading={t("outsourcing.footer_cta.title")}
        text={footerSectionText}
        bgColor="#fff"
      />

      <Contact />

      {/* <Section3
        heading={t("outsourcing.intro_section.title")}
        text={t("outsourcing.intro_section.text")}
        buttonText={t("outsourcing.hero.cta_button")}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        cards={cards2}
        columns={4}
      /> */}
    </div>
  );
}
