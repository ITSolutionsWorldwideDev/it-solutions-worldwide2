import { Metadata } from "next";
import React from "react";
import initServerI18n from "@/utils/serverTranslation";

import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import Faqs from "@/components/layout/outsourcing/Faqs";
import Roles from "@/components/layout/outsourcing/Roles";
import Contact from "@/components/layout/outsourcing/Contact";

export type RolesData = {
  title: string;
  intro: string;
  roles: Record<
    string,
    {
      title: string;
      description: string;
    }
  >;
};
type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

function cleanSlug(slug: string): string {
  return slug
    .replace(/^hire-/, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const seoData = {
  "business-support": {
    en: {
      title:
        "Business Support & Operational Services | IT Solutions Worldwide",
      description:
        "Scale operations efficiently with flexible remote support solutions. Trusted experts for data entry, customer care, and admin tasks. Get started fast!",
    },
    nl: {
      title:
        "Betrouwbare Operationele Ondersteuning | IT Solutions Worldwide",
      description:
        "Voorkom operationele vertragingen. Krijg flexibele remote ondersteuning voor administratie, klantenservice en data entry op maat. Start binnen enkele dagen!",
    },
  },

  "design-services": {
    en: {
      title:
        "Hire Remote Design Talent in the Netherlands | IT Solutions Worldwide",
      description:
        "Hire pre-vetted remote web & graphic designers in the Netherlands. Save up to 60% compared to local hires. Scale your brand with dedicated creative talent.",
    },
    nl: {
      title:
        "Remote Designtalent Inhuren in Nederland | IT Solutions Worldwide",
      description:
        "Huur gescreende remote web- & grafisch ontwerpers in Nederland. Bespaar tot 60% op lokale kosten. Versterk je merk met toegewijd creatief designtalent.",
    },
  },

  "hire-roles": {
    en: {
      title:
        "Hire Pre-Vetted Remote Engineers & VAs | IT Solutions Worldwide",
      description:
        "Access skilled remote AI/ML engineers, developers, and ecommerce assistants within 3–5 days. Flexible contracts, dedicated staff, no hiring overhead.",
    },
    nl: {
      title:
        "Vind Jouw Ideale Remote Medewerker | IT Solutions Worldwide",
      description:
        "Binnen 3–5 werkdagen een shortlist van top remote talent (AI, IT, e-commerce & support). Flexibel opschalen zonder wervingsgedoe. Plan je gratis gesprek!",
    },
  },

  "marketing-analytics": {
    en: {
      title:
        "Hire Remote Marketing & Analytics Talent | IT Solutions Worldwide",
      description:
        "Hire pre-vetted remote marketing & analytics professionals in the Netherlands. Scale with GA4, Power BI, SEO and digital marketing specialists.",
    },
    nl: {
      title:
        "Remote Marketing & Analytics Talent Inhuren | IT Solutions Worldwide",
      description:
        "Huur gescreende remote marketing- en analyticsprofessionals in Nederland. Schaal op met GA4-, Power BI-, SEO- en online marketingspecialisten.",
    },
  },

  "it-development": {
    en: {
      title:
        "Hire Remote IT & Developers in the Netherlands | IT Solutions Worldwide",
      description:
        "Hire pre-vetted remote front-end, back-end, mobile developers and QA specialists in the Netherlands. React, Node, Python, .NET and more.",
    },
    nl: {
      title:
        "Remote IT- & Developers Inhuren in Nederland | IT Solutions Worldwide",
      description:
        "Huur gescreende remote front-end-, back-enddevelopers en QA-specialisten in Nederland. Ervaring met React, Node, Python, .NET en meer.",
    },
  },
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  const seo =
    seoData[slug as keyof typeof seoData]?.[
      locale === "nl" ? "nl" : "en"
    ];

  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
    };
  }

  return {
    title: cleanSlug(slug),
  };
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const translationPageKey = `outsource-${slug}`;

  const cards2 = [
    {
      image: "/assets/images/outsource-icon-1.webp",
      title: t(`${translationPageKey}.why_choose.benefits.1`),
    },
    {
      image: "/assets/images/outsource-icon-2.webp",
      title: t(`${translationPageKey}.why_choose.benefits.2`),
    },
    {
      image: "/assets/images/outsource-icon-3.webp",
      title: t(`${translationPageKey}.why_choose.benefits.3`),
    },
    {
      image: "/assets/images/outsource-icon-4.webp",
      title: t(`${translationPageKey}.why_choose.benefits.4`),
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

  const hasSection2 =
    t(`${translationPageKey}.why_choose.title`) !==
    `${translationPageKey}.why_choose.title`;

  return (
    <div>
      <FullContentSection
        heading={t(`${translationPageKey}.hero.title`)}
        text={imagetext}
        buttonText={t(`${translationPageKey}.hero.cta_button`)}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      {hasSection2 && (
        <Section2
          heading={t(`${translationPageKey}.why_choose.title`)}
          text={t(`${translationPageKey}.why_choose.intro`)}
          buttonText={t(`${translationPageKey}.why_choose.cta_call`)}
          bgButton="#ebf2f3"
          buttonLink="#ebf2f3"
          cards={cards2}
          columns={4}
        />
      )}

      <Roles
        roles={
          t(`${translationPageKey}.services_section`, {
            returnObjects: true,
          }) as RolesData
        }
      />

      <FullContentSection
        heading={t(`${translationPageKey}.reputation.title`)}
        text={t(`${translationPageKey}.reputation.text`)}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <TrustSection />

      <Faqs
  faqData={
    t(`${translationPageKey}.faq.questions`, {
      returnObjects: true,
    }) as unknown as { question: string; answer: string }[]
  }
/>
      <FullContentSection
        heading={t(`${translationPageKey}.footer_cta.title`)}
        text={t(`${translationPageKey}.footer_cta.description`)}
        instruction={t(`${translationPageKey}.footer_cta.instruction`)}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <Contact />
    </div>
  );
}