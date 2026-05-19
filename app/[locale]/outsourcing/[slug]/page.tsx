// app/[locale]/outsourcing/[slug]/page.tsx

import { Metadata } from "next";
import React from "react";
import initServerI18n from "@/utils/serverTranslation";
import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function cleanSlug(slug: string): string {
  return slug
    .replace(/^hire-/, "") // remove "hire-" from start
    .replace(/[^a-zA-Z0-9\s-]/g, "") // remove special characters
    .split("-") // split by dash
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const title = cleanSlug(slug);
  return {
    title: {
      absolute: title,
    },
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}/outsourcing/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;
  const title = cleanSlug(slug);

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const translationPageKey = `outsource-${slug}`;

  //   console.log('translationPageKey ==== ',translationPageKey);

  const cards2 = [
    {
      image: "/assets/images/outsource-icon-1.png",
      title: t("ecommerce.card_heading_1"),
    },
    {
      image: "/assets/images/outsource-icon-2.png",
      title: t("ecommerce.card_heading_2"),
    },
    {
      image: "/assets/images/outsource-icon-3.png",
      title: t("ecommerce.card_heading_3"),
    },
    {
      image: "/assets/images/outsource-icon-3.png",
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

  const section2Exist = `${translationPageKey}.intro_section.title`
    ? true
    : false;
  console.log("section2Exist ==== ", section2Exist);

  return (
    <div>
      <FullContentSection
        heading={t(`${translationPageKey}.hero.title`)}
        text={imagetext}
        buttonText={t(`${translationPageKey}.hero.cta_button`)}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.png"
        bgColor="#D8E9EB"
      />
      (section2Exist &&
      <Section2
        heading={t(`${translationPageKey}.intro_section.title`)}
        text={t(`${translationPageKey}.intro_section.text`)}
        buttonText={t(`${translationPageKey}.hero.cta_button`)}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        cards={cards2}
        columns={4}
      />
      )

      <FullContentSection
        heading={t("outsourcing.hero.title")}
        text={imagetext}
        buttonText={t("outsourcing.hero.cta_button")}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.png"
        bgColor="#D8E9EB"
      />

      <TrustSection />




      {/* 
      import type { NextPage } from 'next';



const Frame15: NextPage = () => {
  	return (
    		<div className="w-full h-[309px] relative bg-gainsboro flex flex-col items-start pt-[52px] pb-[35px] pl-52 pr-[211px] box-border text-center text-[51.19px] text-gray font-inter">
      			<div className="w-[1503px] h-[222px] relative">
        				<b className="absolute top-[0px] left-[calc(50%_-_522.5px)] leading-[60.15px] inline-block w-[1046px] h-[114px]">
          					<span>{`Why `}</span>
          					<span className="text-darkcyan">Businesses Keep Coming Back</span>
          					<span> to Us</span>
        				</b>
        				<div className="absolute top-[76px] left-[calc(50%_-_751.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1503px] h-[146px]">IT Solutions Worldwide has helped companies of all sizes, from fast-growing startups to established enterprises, build efficient, cost-effective remote teams. We place most clients with a shortlist of candidates within 3–5 business days, and because every professional is thoroughly pre-vetted, the working relationships we build tend to be long-term and stable. We work with both Dutch and international businesses, offer transparent pricing with no hidden fees, and give every client a single dedicated point of contact from start to finish. Simple, honest, and built around your success.</div>
      			</div>
    		</div>);
};

export default Frame15 ;

      
      */}
    </div>
  );
}
