import { Metadata } from "next";
import initServerI18n from "@/utils/serverTranslation";
import PortfolioHero from "@/components/layout/portfolio/portfolio-hero";
import PortfolioClientsSection, {
  ClientItem,
} from "@/components/layout/portfolio/portfolio-clients-section";
import PortfolioSection3 from "@/components/layout/portfolio/portfolio-section3";
import PortfolioContactSection from "@/components/layout/portfolio/portfolio-contact-section";
import { PORTFOLIO_CLIENTS } from "@/lib/portfolioData";

export const revalidate = 3600;
export const dynamic = "force-static";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");

  return {
    title: t("portfolio.meta.title"),
    description: t("portfolio.meta.description"),
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}/portfolio`,
    },
  };
}

export default async function PortfolioPage({ params }: PageProps) {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");

  const clients: ClientItem[] = PORTFOLIO_CLIENTS.map((c) => {
    const nameKey = `portfolio.clientsSection.clients.${c.translationKey}.name`;
    const descKey = `portfolio.clientsSection.clients.${c.translationKey}.description`;

    const nameVal = t(nameKey);
    const descVal = t(descKey);

    const name = nameVal && nameVal !== nameKey ? nameVal : c.defaultName;
    const description =
      descVal && descVal !== descKey ? descVal : c.defaultDescription;

    return {
      id: c.id,
      slug: c.slug,
      name,
      description,
      image: c.image,
      logo: c.logo,
    };
  });

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <PortfolioHero
        locale={locale}
        eyebrow={t("portfolio.hero.eyebrow")}
        headingPrefix={t("portfolio.hero.headingPrefix")}
        headingHighlight={t("portfolio.hero.headingHighlight")}
        headingSuffix={t("portfolio.hero.headingSuffix")}
        subtext={t("portfolio.hero.subtext")}
        breadcrumbs={[
          {
            label: t("portfolio.hero.breadcrumbs.home"),
            href: `/${locale}`,
          },
          {
            label: t("portfolio.hero.breadcrumbs.portfolio"),
          },
        ]}
        backgroundImage="/assets/images/career/c_bg.webp"
      />

      {/* SECTION 2: CLIENTS CARDS GRID */}
      <PortfolioClientsSection
        locale={locale}
        eyebrow={t("portfolio.clientsSection.eyebrow")}
        headingPrefix={t("portfolio.clientsSection.headingPrefix")}
        headingMiddle={t("portfolio.clientsSection.headingMiddle")}
        headingSuffix={t("portfolio.clientsSection.headingSuffix")}
        clients={clients}
      />

      {/* SECTION 3: LET'S BUILD SOMETHING EXCEPTIONAL TOGETHER */}
      <PortfolioSection3
        eyebrow={t("portfolio.section3.eyebrow")}
        headingPrefix={t("portfolio.section3.headingPrefix")}
        headingHighlight={t("portfolio.section3.headingHighlight")}
        headingSuffix={t("portfolio.section3.headingSuffix")}
        subtext={t("portfolio.section3.subtext")}
        backgroundImage="/assets/images/portfolio/section3.webp"
      />

      {/* SECTION 4: LET'S CONNECT CONTACT SECTION */}
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
