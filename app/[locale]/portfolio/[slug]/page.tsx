import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import initServerI18n from "@/utils/serverTranslation";
import {
  PORTFOLIO_CLIENTS,
  getClientBySlug,
  CaseStudyPart,
} from "@/lib/portfolioData";
import ClientDetailHero from "@/components/layout/portfolio/client-detail-hero";
import ClientDetailStory from "@/components/layout/portfolio/client-detail-story";
import ClientDetailMidBanner from "@/components/layout/portfolio/client-detail-mid-banner";
import PortfolioSection3 from "@/components/layout/portfolio/portfolio-section3";
import PortfolioContactSection from "@/components/layout/portfolio/portfolio-contact-section";

export const revalidate = 3600;
export const dynamic = "force-static";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function resolveClientImage(
  slug: string,
  index: 1 | 2 | 3,
  configured?: string,
  fallback?: string
): string {
  if (configured) {
    const fullPath = path.join(
      process.cwd(),
      "public",
      configured.replace(/^\//, "")
    );
    if (fs.existsSync(fullPath)) return configured;
  }

  const prefix = slug.split("-")[0];
  const clean = slug.replace(/[^a-zA-Z0-9]/g, "");

  const candidates = [
    `/assets/images/portfolio/clients/${slug}${index}.webp`,
    `/assets/images/portfolio/clients/${slug}-${index}.webp`,
    `/assets/images/portfolio/clients/${prefix}${index}.webp`,
    `/assets/images/portfolio/clients/${prefix}-${index}.webp`,
    `/assets/images/portfolio/clients/${clean}${index}.webp`,
    `/assets/images/portfolio/clients/${clean}${index}.png`,
    `/assets/images/portfolio/clients/xtreme${index}.webp`,
    `/assets/images/portfolio/clients/babylon${index}.webp`,
    `/assets/images/portfolio/clients/alseas${index}.png`,
    `/assets/images/portfolio/clients/alseas${index}.webp`,
    `/assets/images/portfolio/clients/hitech${index}.png`,
    `/assets/images/portfolio/clients/hitech${index}.jpg`,
    `/assets/images/portfolio/clients/hitech${index}.webp`,
    `/assets/images/portfolio/clients/jumbo${index}.png`,
    `/assets/images/portfolio/clients/jumbo${index}.webp`,
    `/assets/images/portfolio/${slug}${index}.webp`,
    `/assets/images/portfolio/${slug}-${index}.webp`,
    `/assets/images/portfolio/${prefix}${index}.webp`,
    `/assets/images/portfolio/${prefix}-${index}.webp`,
    `/assets/images/portfolio/clients/${slug}${index}.png`,
    `/assets/images/portfolio/clients/${prefix}${index}.png`,
    `/assets/images/portfolio/${slug}${index}.png`,
    `/assets/images/portfolio/${prefix}${index}.png`,
  ];

  for (const c of candidates) {
    const fullPath = path.join(process.cwd(), "public", c.replace(/^\//, ""));
    if (fs.existsSync(fullPath)) return c;
  }

  return fallback || "";
}

export async function generateStaticParams() {
  const locales = ["en", "nl"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const client of PORTFOLIO_CLIENTS) {
      params.push({
        locale,
        slug: client.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    return {
      title: "Client Case Study | IT Solutions Worldwide",
    };
  }

  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");

  const nameKey = `portfolio.clientsSection.clients.${client.translationKey}.name`;
  const tName = t(nameKey);
  const localizedName = tName && tName !== nameKey ? tName : client.defaultName;

  const descKey = `portfolio.clientsSection.clients.${client.translationKey}.description`;
  const tDesc = t(descKey);
  const localizedDescription =
    tDesc && tDesc !== descKey ? tDesc : client.defaultDescription;

  const pageTitleKey = `portfolio.clientsSection.clients.${client.translationKey}.pageTitle`;
  const metaDescKey = `portfolio.clientsSection.clients.${client.translationKey}.metaDescription`;
  const tPageTitle = t(pageTitleKey);
  const tMetaDesc = t(metaDescKey);

  const pageTitle =
    tPageTitle && tPageTitle !== pageTitleKey
      ? tPageTitle
      : client.pageTitle ||
        `${localizedName} — Case Study & Project Showcase | IT Solutions Worldwide`;
  const metaDescription =
    tMetaDesc && tMetaDesc !== metaDescKey
      ? tMetaDesc
      : client.metaDescription || localizedDescription;
  const keywords = [
    client.primaryKeyword,
    ...(client.secondaryKeywords || []),
  ].filter(Boolean) as string[];

  return {
    title: pageTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}/portfolio/${client.slug}`,
    },
  };
}

export default async function ClientDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    notFound();
  }

  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");

  const clientNameKey = `portfolio.clientsSection.clients.${client.translationKey}.name`;
  const nameVal = t(clientNameKey);
  const localizedName = nameVal && nameVal !== clientNameKey ? nameVal : client.defaultName;

  const clientDescKey = `portfolio.clientsSection.clients.${client.translationKey}.description`;
  const descVal = t(clientDescKey);
  const localizedDescription =
    descVal && descVal !== clientDescKey ? descVal : client.defaultDescription;

  // Fallback default case study data if not customized yet
  const defaultStory = {
    accentColor: client.accentColor || "#00A896",
    eyebrow: "OUR WORK · PORTFOLIO",
    title1Parts: [
      { text: localizedName, highlight: true },
      { text: " Partnered with Us to Build Scalable Digital Solutions" },
    ],
    paragraph1: localizedDescription,
    paragraph2Lead: "Transforming Operations with Technology,",
    paragraph2Rest:
      "we developed robust digital infrastructure, streamlined workflows, and tailored team resources to help accelerate growth and operational agility.",
    title2Parts: [
      { text: "A " },
      { text: "Partnership", highlight: true },
      { text: " That " },
      { text: "Delivered", highlight: true },
    ],
    paragraph3:
      "With bespoke software tools, modern cloud integrations, and dedicated talent, the collaboration delivered measurable efficiency and long-term capability.",
    paragraph4:
      "Our deep engineering knowledge combined with cost-effective resourcing ensured that every tool functioned seamlessly within the client's business ecosystem.",
  };

  const story = client.caseStudy || defaultStory;

  const getTranslatedText = (key: string, fallback: string): string => {
    if (locale === "nl") {
      const val = t(key);
      if (val && val !== key) return val;
    }
    return fallback;
  };

  const rawTitle1 =
    locale === "nl"
      ? i18nInstance.t(
          `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.title1Parts`,
          { returnObjects: true }
        )
      : null;
  const rawTitle2 =
    locale === "nl"
      ? i18nInstance.t(
          `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.title2Parts`,
          { returnObjects: true }
        )
      : null;

  const title1Parts: CaseStudyPart[] =
    Array.isArray(rawTitle1) && rawTitle1.length > 0
      ? (rawTitle1 as CaseStudyPart[])
      : story.title1Parts;

  const title2Parts: CaseStudyPart[] =
    Array.isArray(rawTitle2) && rawTitle2.length > 0
      ? (rawTitle2 as CaseStudyPart[])
      : story.title2Parts;

  const storyEyebrow = getTranslatedText(
    `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.eyebrow`,
    story.eyebrow || "OUR WORK · PORTFOLIO"
  );

  const paragraph1 = getTranslatedText(
    `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.paragraph1`,
    story.paragraph1
  );

  const paragraph2Lead = getTranslatedText(
    `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.paragraph2Lead`,
    story.paragraph2Lead || ""
  );

  const paragraph2Rest = getTranslatedText(
    `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.paragraph2Rest`,
    story.paragraph2Rest || ""
  );

  const paragraph3 = getTranslatedText(
    `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.paragraph3`,
    story.paragraph3
  );

  const paragraph4 = getTranslatedText(
    `portfolio.clientsSection.clients.${client.translationKey}.caseStudy.paragraph4`,
    story.paragraph4
  );

  // Resolve the 3 dynamic client images (taxinet1, taxinet2, taxinet3, etc.)
  const heroImage = resolveClientImage(
    client.slug,
    1,
    client.image1 || client.showcaseImage,
    "/assets/images/portfolio/showcase/taxinet.webp"
  );

  const midBannerImage = resolveClientImage(
    client.slug,
    2,
    client.image2
  );

  const bottomBannerImage = resolveClientImage(
    client.slug,
    3,
    client.image3 || client.bannerImage,
    "/assets/images/portfolio/section3.webp"
  );

  const heroHeadlineKey = `portfolio.clientsSection.clients.${client.translationKey}.heroHeadline`;
  const heroSubtextKey = `portfolio.clientsSection.clients.${client.translationKey}.heroSubtext`;
  const imageAltKey = `portfolio.clientsSection.clients.${client.translationKey}.imageAlt`;

  const tHeroHeadline = t(heroHeadlineKey);
  const heroHeadline =
    tHeroHeadline && tHeroHeadline !== heroHeadlineKey
      ? tHeroHeadline
      : client.heroHeadline;

  const tHeroSubtext = t(heroSubtextKey);
  const heroSubtext =
    tHeroSubtext && tHeroSubtext !== heroSubtextKey
      ? tHeroSubtext
      : client.heroSubtext || localizedDescription;

  const tImageAlt = t(imageAltKey);
  const imageAlt =
    tImageAlt && tImageAlt !== imageAltKey
      ? tImageAlt
      : client.imageAlt;

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO & WEBSITE SHOWCASE (Image 1: [slug]1.webp) */}
      <ClientDetailHero
        clientName={localizedName}
        heroHeadline={heroHeadline}
        clientLogo={client.logo}
        showcaseImage={heroImage}
        imageAlt={imageAlt}
        eyebrow={t("portfolio.hero.eyebrow")}
        subtext={heroSubtext}
        backgroundImage="/assets/images/career/c_bg.webp"
      />

      {/* SECTION 2: CASE STUDY STORY & IMPACT */}
      <ClientDetailStory
        accentColor={client.accentColor || "#FF8A00"}
        eyebrow={storyEyebrow}
        title1Parts={title1Parts}
        paragraph1={paragraph1}
        paragraph2Lead={paragraph2Lead}
        paragraph2Rest={paragraph2Rest}
        title2Parts={title2Parts}
        paragraph3={paragraph3}
        paragraph4={paragraph4}
      />

      {/* SECTION 3: MID FEATURE BANNER CARD (Image 2: [slug]2.webp) */}
      {midBannerImage && (
        <ClientDetailMidBanner
          imageSrc={midBannerImage}
          clientName={localizedName}
        />
      )}

      {/* SECTION 4: FROM CHALLENGE TO SOLUTION BANNER (Image 3: [slug]3.webp) */}
      <PortfolioSection3
        eyebrow={
          locale === "nl"
            ? "ONS WERK · PORTFOLIO"
            : t("portfolio.section3.eyebrow") || "OUR WORK · PORTFOLIO"
        }
        headingPrefix={
          locale === "nl" ? "Van Uitdaging naar een" : "From Challenge to a"
        }
        headingHighlight={
          locale === "nl" ? "Oplossing Gebouwd" : "Solution Built"
        }
        headingSuffix={locale === "nl" ? "om te Schalen" : "to Scale"}
        highlightSuffix={true}
        subtext={
          locale === "nl"
            ? "Vertel ons over uw project. We reageren binnen één werkdag met een op maat gemaakt voorstel."
            : "Tell us about your project. We'll respond within one business day with a tailored proposal."
        }
        backgroundImage={bottomBannerImage}
        accentColor={client.accentColor || "#FF8A00"}
      />

      {/* SECTION 5: CONTACT / CTA SECTION AT BOTTOM */}
      <PortfolioContactSection
        locale={locale}
        headerTitle={t("portfolio.contactSection.headerTitle")}
        headerSubtitle={t("portfolio.contactSection.headerSubtitle")}
        getInTouch={t("portfolio.contactSection.getInTouch")}
        getInTouchSubtext={t("portfolio.contactSection.getInTouchSubtext")}
        emailUs={t("portfolio.contactSection.emailUs")}
        callUs={t("portfolio.contactSection.callUs")}
        visitUs={t("portfolio.contactSection.visitUs")}
        followUs={t("portfolio.contactSection.followUs")}
        yourName={t("portfolio.contactSection.yourName")}
        emailAddress={t("portfolio.contactSection.emailAddress")}
        phoneNumber={t("portfolio.contactSection.phoneNumber")}
        company={t("portfolio.contactSection.company")}
        serviceInterested={t("portfolio.contactSection.serviceInterested")}
        yourMessage={t("portfolio.contactSection.yourMessage")}
        namePlaceholder={t("portfolio.contactSection.namePlaceholder")}
        emailPlaceholder={t("portfolio.contactSection.emailPlaceholder")}
        phonePlaceholder={t("portfolio.contactSection.phonePlaceholder")}
        companyPlaceholder={t("portfolio.contactSection.companyPlaceholder")}
        servicePlaceholder={t("portfolio.contactSection.servicePlaceholder")}
        messagePlaceholder={t("portfolio.contactSection.messagePlaceholder")}
        sendMessage={t("portfolio.contactSection.sendMessage")}
        sending={t("portfolio.contactSection.sending")}
        successMsg={t("portfolio.contactSection.successMsg")}
        errorMsg={t("portfolio.contactSection.errorMsg")}
      />
    </main>
  );
}
