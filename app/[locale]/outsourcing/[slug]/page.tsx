import { Metadata } from "next";
import React from "react";
import initServerI18n from "@/utils/serverTranslation";
import { getCanonicalUrl, getLanguageAlternates } from "@/utils/seo";

// ===== Category page components =====
import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import Faqs from "@/components/layout/outsourcing/Faqs";
import Roles from "@/components/layout/outsourcing/Roles";
import Contact from "@/components/layout/outsourcing/Contact";

// ===== Detail page components =====
import HeroSectionAdvanced from "@/components/layout/outsourcing-v2/hero-section-advanced";
import Section2V2 from "@/components/layout/outsourcing-v2/section-2";
import Section3 from "@/components/layout/outsourcing-v2/section-3";
import SectionBuildManage from "@/components/layout/outsourcing-v2/section-build-manage";
import SectionTechStack from "@/components/layout/outsourcing-v2/section-tech-stack";
import SectionComparison from "@/components/layout/outsourcing-v2/section-comparison";
import SectionIndustryFocus from "@/components/layout/outsourcing-v2/section-industry-focus";
import SectionHiringProcess from "@/components/layout/outsourcing-v2/section-hiring-process";
import SectionWhyChoose from "@/components/layout/outsourcing-v2/section-why-choose";

import SectionRelatedServices from "@/components/layout/outsourcing-v2/section-related-services";
import SectionReadyCTA from "@/components/layout/outsourcing-v2/section-ready-cta";
import { notFound } from "next/navigation";
// ============================================
// TYPES
// ============================================
export type FaqItem = {
  question: string;
  answer: string;
};

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

// ============================================
// KNOWN CATEGORIES — agar slug isme match kare to category-listing page dikhega
// ============================================
const seoData = {
  "business-support": {
    en: {
      title: "Business Support & Operational Services | IT Solutions Worldwide",
      description:
        "Scale operations efficiently with flexible remote support solutions. Trusted experts for data entry, customer care, and admin tasks. Get started fast!",
    },
    nl: {
      title: "Betrouwbare Operationele Ondersteuning | IT Solutions Worldwide",
      description:
        "Voorkom operationele vertragingen. Krijg flexibele remote ondersteuning voor administratie, klantenservice en data entry op maat. Start binnen enkele dagen!",
    },
  },
  "design-services": {
    en: {
      title: "Hire Remote Design Talent in the Netherlands | IT Solutions Worldwide",
      description:
        "Hire pre-vetted remote web & graphic designers in the Netherlands. Save up to 60% compared to local hires. Scale your brand with dedicated creative talent.",
    },
    nl: {
      title: "Remote Designtalent Inhuren in Nederland | IT Solutions Worldwide",
      description:
        "Huur gescreende remote web- & grafisch ontwerpers in Nederland. Bespaar tot 60% op lokale kosten. Versterk je merk met toegewijd creatief designtalent.",
    },
  },
  "hire-roles": {
    en: {
      title: "Hire Pre-Vetted Remote Engineers & VAs | IT Solutions Worldwide",
      description:
        "Access skilled remote AI/ML engineers, developers, and ecommerce assistants within 3–5 days. Flexible contracts, dedicated staff, no hiring overhead.",
    },
    nl: {
      title: "Vind Jouw Ideale Remote Medewerker | IT Solutions Worldwide",
      description:
        "Binnen 3–5 werkdagen een shortlist van top remote talent (AI, IT, e-commerce & support). Flexibel opschalen zonder wervingsgedoe. Plan je gratis gesprek!",
    },
  },
  "marketing-analytics": {
    en: {
      title: "Hire Remote Marketing & Analytics Talent | IT Solutions Worldwide",
      description:
        "Hire pre-vetted remote marketing & analytics professionals in the Netherlands. Scale with GA4, Power BI, SEO and digital marketing specialists.",
    },
    nl: {
      title: "Remote Marketing & Analytics Talent Inhuren | IT Solutions Worldwide",
      description:
        "Huur gescreende remote marketing- en analyticsprofessionals in Nederland. Schaal op met GA4-, Power BI-, SEO- en online marketingspecialisten.",
    },
  },
  "it-development": {
    en: {
      title: "Hire Remote IT & Developers in the Netherlands | IT Solutions Worldwide",
      description:
        "Hire pre-vetted remote front-end, back-end, mobile developers and QA specialists in the Netherlands. React, Node, Python, .NET and more.",
    },
    nl: {
      title: "Remote IT- & Developers Inhuren in Nederland | IT Solutions Worldwide",
      description:
        "Huur gescreende remote front-end-, back-enddevelopers en QA-specialisten in Nederland. Ervaring met React, Node, Python, .NET en meer.",
    },
  },
};

const KNOWN_CATEGORIES = Object.keys(seoData);

function isCategorySlug(slug: string): slug is keyof typeof seoData {
  return KNOWN_CATEGORIES.includes(slug);
}

function cleanSlug(slug: string): string {
  return slug
    .replace(/^hire-/, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function cleanSlugToTitle(slug: string): string {
  return slug
    .replace(/^(hire|outsource|staffing)-/, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}



export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const locales = ["en", "nl"];
  const categorySlugs = Object.keys(seoData);

  return locales.flatMap((locale) =>
    categorySlugs.map((slug) => ({ locale, slug }))
  );
}


// ============================================
// METADATA
// ============================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  // Category page metadata
  if (isCategorySlug(slug)) {
    const seo = seoData[slug][locale === "nl" ? "nl" : "en"];
    const canonical = getCanonicalUrl(locale, `/outsourcing/${slug}`);   // 👈 fix
    const languages = getLanguageAlternates(`/outsourcing/${slug}`);     // 👈 fix

    if (seo) {
      return {
        title: seo.title,
        description: seo.description,
        alternates: { canonical, languages },
      };
    }
    return { 
      title: cleanSlug(slug), 
      alternates: { canonical, languages } 
    };
  }

  // Detail page metadata
  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  const keysToTry = [`outsource-${slug}`, `staffing-${slug}`, slug];
  let seoTitle = "";
  let seoDescription = "";

  for (const key of keysToTry) {
    const title = t(`${key}.meta.title`);
    if (title && !title.includes(key)) {
      seoTitle = title;
      seoDescription = t(`${key}.meta.description`) ?? "";
      break;
    }
  }

  const canonical = getCanonicalUrl(locale, `/outsourcing/${slug}`);   
  const languages = getLanguageAlternates(`/outsourcing/${slug}`);     

  if (seoTitle) {
    return {
      title: seoTitle,
      description: seoDescription,
      alternates: { canonical, languages },
    };
  }
  return {
    title: `Hire Dedicated ${cleanSlugToTitle(slug)} | IT Solutions`,
    alternates: { canonical, languages },
  };
}

// ============================================
// PAGE
// ============================================
export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  // ============================================
  // BRANCH 1: CATEGORY LISTING PAGE
  // ============================================
  if (isCategorySlug(slug)) {
    const translationPageKey = `outsource-${slug}`;

    const cards2 = [
      { image: "/assets/images/outsource-icon-1.webp", title: t(`${translationPageKey}.why_choose.benefits.1`) },
      { image: "/assets/images/outsource-icon-2.webp", title: t(`${translationPageKey}.why_choose.benefits.2`) },
      { image: "/assets/images/outsource-icon-3.webp", title: t(`${translationPageKey}.why_choose.benefits.3`) },
      { image: "/assets/images/outsource-icon-4.webp", title: t(`${translationPageKey}.why_choose.benefits.4`) },
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
      t(`${translationPageKey}.why_choose.title`) !== `${translationPageKey}.why_choose.title`;

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
  roles={t(`${translationPageKey}.services_section`, { returnObjects: true }) as RolesData}
  isCategory={true}
  locale={locale}
/>

        <FullContentSection
          heading={t(`${translationPageKey}.reputation.title`)}
          text={t(`${translationPageKey}.reputation.text`)}
          imageUrl="/assets/images/staffingconsulting2.webp"
          bgColor="#D8E9EB"
        />

        <TrustSection />

        <Faqs
          faqData={t(`${translationPageKey}.faq.questions`, {
            returnObjects: true,
          }) as FaqItem[]}
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

  // ============================================
  // BRANCH 2: DETAIL / HIRE PAGE (e.g. hire-data-engineer)
  // ============================================
  const possibleKeys = [`outsource-${slug}`, `staffing-${slug}`, slug];
  let rawContentObject: any = null;

  for (const key of possibleKeys) {
    const data = t(key, { returnObjects: true, defaultValue: null });
    if (data && typeof data === "object" && !Array.isArray(data) && Object.keys(data).length > 0) {
      rawContentObject = data;
      break;
    }
  }
if (slug === "hire-hr-assistant-remote") {
  notFound();
}
  const content: any = rawContentObject ?? {};
  const humanReadableRole = cleanSlugToTitle(slug);

  const heroBadge = content?.badge ?? "Save up to 60%";
  const heroTitle = content?.h1 ?? `Hire a Dedicated ${humanReadableRole}`;
  const heroDescription =
    content?.subtext ?? `Scale your operations with dedicated ${humanReadableRole.toLowerCase()}s.`;

  const section3Heading = content?.challenges?.h2 ?? "Overcome operational resource bottlenecks immediately";
  const section3Subheading =
    content?.challenges?.intro ?? "Many organizations experience delays while sourcing talent locally.";
  const section3ChallengeTitle = content?.challenges?.h2 ?? "Key hurdles businesses routinely navigate:";

  const section3Challenges = Array.isArray(content?.challenges?.list)
    ? content.challenges.list
    : Array.isArray(content?.challenges?.items)
    ? content.challenges.items
    : [
        "High recruitment cycles dragging team implementation velocity",
        "Onboarding challenges related to variable standard procedures",
        "High operational overhead margins impacting project cost scales",
      ];

  const section3Conclusion = content?.challenges?.conclusion ?? "Our custom staffing models eliminate administrative friction.";
  const section3CtaText = content?.challenges?.cta ?? "Get Started Instantly →";

  const cleanImageSlug = slug.replace(/^(hire|outsource|staffing)-/, "").toLowerCase();
  const section3ImageSrc = content?.challenges?.image ?? `/assets/images/categories/${cleanImageSlug}.webp`;

  const buildHeading = content?.build?.h2 ?? "Core Responsibilities Handled";
  const buildSubheading =
    content?.build?.subtitle ?? "Engineered to deliver high accountability standards across routine assignments.";
  const buildCards = Array.isArray(content?.build?.cards) ? content.build.cards : [];

  const techHeading = content?.techstack?.h2 ?? "Core Platform and Technical Competencies";
  const techSubheading = content?.techstack?.subtitle ?? "Experienced across major digital toolsets.";

  const techPills = Array.isArray(content?.techstack?.pills)
    ? content.techstack.pills
    : [...(content?.techstack?.line1 || []), ...(content?.techstack?.line2 || [])];

  const midPoint = Math.ceil(techPills.length / 2);
  const techLine1 = techPills.slice(0, midPoint);
  const techLine2 = techPills.slice(midPoint);

  const industryHeading = content?.industry?.h2 ?? "Domain Capabilities Integrated Across Key Sectors";
  const industrySubheading =
    content?.industry?.subtitle ?? "Adapting execution rules to conform perfectly with specific business environments.";

  const industryCards = Array.isArray(content?.industry?.cards)
    ? content.industry.cards.map((c: any) => ({ ...c, desc: c.desc || c.description }))
    : [];

  const processHeading = content?.process?.h2 ?? "Our Seamless Deployment Timeline";

  const processSteps = Array.isArray(content?.process?.steps)
    ? content.process.steps.map((step: any, idx: number) => {
        if (typeof step === "string") {
          const parts = step.split(/[:—]/);
          return {
            number: idx + 1,
            title: parts[0]?.trim() || `Step ${idx + 1}`,
            description: parts.slice(1).join(" ").trim() || step,
          };
        }
        return {
          number: step.number || idx + 1,
          title: step.title || `Step ${idx + 1}`,
          description: step.description || "",
        };
      })
    : [
        { number: 1, title: "Share Requirements", description: "Define your project goals." },
        { number: 2, title: "Match Talent", description: "Review vetted profiles." },
        { number: 3, title: "Launch", description: "Start production." },
        { number: 4, title: "Support", description: "Ongoing managed support." },
      ];
  const processCtaText = content?.process?.cta ?? "Book Free Consultation";

  const whyHeading = content?.why_choose?.h2 ?? content?.whyChoose?.h2 ?? "Why Businesses Choose Our Resource Extensions";
  const whySubheading =
    content?.why_choose?.subtitle ??
    content?.whyChoose?.subtitle ??
    "We marry production efficiency with robust service quality validation metrics.";

  const rawWhyPoints = content?.why_choose?.points || content?.whyChoose?.cards;
  const whyCards = Array.isArray(rawWhyPoints)
    ? rawWhyPoints.map((item: any, idx: number) => {
        if (typeof item === "string") {
          const parts = item.split(/[:—]/);
          return {
            title: parts[0]?.trim() || `Benefit ${idx + 1}`,
            description: parts.slice(1).join(" ").trim() || item,
          };
        }
        return {
          title: item.title || `Benefit ${idx + 1}`,
          description: item.description || "",
        };
      })
    : [];

  const relatedHeading = content?.related_services?.h2 ?? content?.related?.h2 ?? "Explore Complementary Support Verticals";
  const relatedSubheading =
    content?.related_services?.subtitle ??
    content?.related?.subtitle ??
    "Further expand efficiency loops by combining related specialized workflows.";

  const relatedCards = Array.isArray(content?.related_services?.cards)
    ? content.related_services.cards
    : Array.isArray(content?.related?.cards)
    ? content.related.cards
    : [];


const relatedCardsForRoles: Record<
  string,
  { title: string; description: string }
> = {};

relatedCards.forEach((card: any) => {
  const title = (card.title || "").toLowerCase();

  let key = "";

  if (title.includes("virtual assistant")) key = "virtual_assistant";
  else if (title.includes("full stack")) key = "full_stack_developer";
  else if (title.includes("data engineer")) key = "data_engineer";
  else if (title.includes("ai engineer")) key = "ai_ml_engineer";
  else if (title.includes("electrical engineer")) key = "electrical_engineer";
  else if (title.includes("admin")) key = "admin";
  else if (title.includes("hr")) key = "hr";
  else if (title.includes("customer support")) key = "customer_support";
  else if (title.includes("data entry")) key = "data_entry";
  else if (title.includes("web designer")) key = "web_designer";
  else if (title.includes("graphic designer")) key = "graphic_designer";
  else if (title.includes("front end")) key = "front_end";
  else if (title.includes("back end")) key = "back_end";
  else if (title.includes("app developer")) key = "app_dev";
  else if (title.includes("it support")) key = "it_support";
  else if (title.includes("software tester")) key = "qa_tester";
  else if (title.includes("social media")) key = "social_media";
  else if (title.includes("content creator")) key = "content_creator";
  else if (title.includes("online marketer")) key = "online_marketer";
  else if (title.includes("google analytics")) key = "ga_specialist";
  else if (title.includes("power bi")) key = "power_bi";
  else if (title.includes("data analyst")) key = "data_analyst";

  if (key) {
    relatedCardsForRoles[key] = {
      title: card.title,
      description: card.desc || card.description || "",
    };
  }
});

  const mappedFaqData = Array.isArray(content?.faq?.questions) ? content.faq.questions : [];

  const reputationTitle = content?.reputation?.title ?? "Achieve High Impact Operational Velocity";
  const reputationText = content?.reputation?.text ?? "Optimize internal budget allocation metrics by up to 60%.";

  const readyHeading = content?.final_cta?.h2 ?? `Ready to Hire a Dedicated ${humanReadableRole} in Netherlands?`;
  const readySubheading = content?.final_cta?.subtitle ?? "Stop letting operational gaps slow your business down.";
  const readyPrimaryCta = content?.final_cta?.buttons?.primary ?? "Book Free Consultation";
  const readySecondaryCta = content?.final_cta?.buttons?.secondary ?? `Get Matched With a ${humanReadableRole}`;
  const readyTrustPoints = Array.isArray(content?.final_cta?.trust_points)
    ? content.final_cta.trust_points
    : ["✓ No commitment", "✓ Free consultation", "✓ Start in 48 hours"];

  const dummyStats = [
    { value: "60%", label: "Average Cost Savings" },
    { value: "48h", label: "Average Matching Time" },
    { value: "97%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      <HeroSectionAdvanced
        badgeText={heroBadge}
        headingLine1={heroTitle}
        headingLine2=""
        description={heroDescription}
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/en/contact-us"
        secondaryButtonText="Get Pricing Today"
        service={humanReadableRole}
        stats={dummyStats}
      />

      <Section2V2
        heading={`Hire specialized ${humanReadableRole} talents trusted by top companies.`}
        slug={slug}
      />

      <Section3
        heading={section3Heading}
        subheading={section3Subheading}
        challengeTitle={section3ChallengeTitle}
        challenges={section3Challenges}
        conclusionText={section3Conclusion}
        ctaText={section3CtaText}
        imageSrc={section3ImageSrc}
        service={humanReadableRole}
      />

      <SectionBuildManage heading={buildHeading} subheading={buildSubheading} cards={buildCards} />

      <SectionTechStack heading={techHeading} subheading={techSubheading} line1Tags={techLine1} line2Tags={techLine2} />

      <SectionComparison />

      <SectionIndustryFocus heading={industryHeading} subheading={industrySubheading} cards={industryCards} />

      <SectionHiringProcess
        heading={processHeading}
        steps={processSteps}
        ctaText={processCtaText}
        ctaLink="/en/contact-us"
      />

      <FullContentSection
        heading={reputationTitle}
        text={reputationText}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <TrustSection />

      <SectionWhyChoose heading={whyHeading} subheading={whySubheading} cards={whyCards} />

      <Faqs faqData={mappedFaqData} />

<Roles
  roles={{
    title: relatedHeading,
    intro: relatedSubheading,
    roles: relatedCardsForRoles,
  }}
  locale={locale}
/>
      <SectionReadyCTA
        heading={readyHeading}
        subheading={readySubheading}
        primaryButtonText={readyPrimaryCta}
        primaryButtonLink="/en/contact-us"
        secondaryButtonText={readySecondaryCta}
        trustPoints={readyTrustPoints}
        role={humanReadableRole}
      />
    </div>
  );
}