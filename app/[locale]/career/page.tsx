// app/[locale]/career/page.tsx
import initServerI18n from "@/utils/serverTranslation";
import ImageSection2 from "@/components/layout/image-section-2";
import CardSection from "@/components/layout/card-section";
import { Metadata } from "next";
import CareerJobsSection from "@/components/layout/career-jobs";
import CareerHeroSection from "@/components/layout/career-hero-section";
import CtaSplitSection from "@/components/layout/cta-split-section";
import CareerGrowthSection from "@/components/layout/career-growth-section";
import CareerOpenApplication from "@/components/layout/career-open-application";
import CareerFaqSection from "@/components/layout/career-faq-section"; // ✅ FAQ Import Added
import CareerFooter from "@/components/layout/career-footer";

// ISR revalidation time
export const revalidate = 3600;
export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return {
    title: {
      absolute: "IT & Supply Chain Jobs in Netherlands | Apply Now",
    },
    description:
      "Looking for IT, supply chain or digital marketing jobs in the Netherlands? Explore career opportunities at IT Solutions Worldwide and grow with us.",
  };
}

export default async function Career(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div>
      {/* CAREER HERO */}
      <CareerHeroSection
        eyebrow="Join Our Team"
        heading="Build Your Career. Make Work Matter."
        subtext="Join a global outsourcing team helping Dutch and international businesses work smarter, move faster, and grow further — across supply chain, IT, engineering, and data roles. "
        tags={[
          "40+ Employees",
          "International Clients",
          "31 Open Roles",
          "Real Responsibility",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
        backgroundImage="/assets/images/career/c_bg.webp"
      />

      {/* CTA SPLIT SECTION */}
      <CtaSplitSection
        eyebrow="Who Is IT Solutions Worldwide?"
        heading="Rotterdam-Based Outsourcing & Staff Augmentation."
        highlightWord="Outsourcing"
        subtext="IT Solutions Worldwide is a Rotterdam-based outsourcing and staff augmentation company with 40+ employees, headquartered at Mandenmakerstraat 100C, 3194 DG Hoogvliet, Rotterdam, Netherlands. The company hires for full-time, part-time, contract, and internship roles across supply chain, IT support, software engineering, data, finance, and administrative functions throughout the Netherlands, and is rated 4.8 on Glassdoor."
        imageUrl="/assets/images/career/c-bg1.webp"
        imageAlt="Team collaborating at IT Solutions Worldwide"
        overlayText="Career Open."
        ctaLabel="Explore Careers"
        ctaHref="/careers"
      />

      <CareerGrowthSection />

      {/* JOBS SECTION */}
      <CareerJobsSection />

      {/* FAQ SECTION */}
      <CareerFaqSection />

      {/* OPEN APPLICATION SECTION */}
      <CareerOpenApplication />
    </div>
  );
}