import { Metadata } from "next";
import initServerI18n from "@/utils/serverTranslation";

// Layout Components
import HeroSectionAdvanced from "@/components/layout/outsourcing-v2/hero-section-advanced";
import Section2 from "@/components/layout/outsourcing-v2/section-2";
import Section3 from "@/components/layout/outsourcing-v2/section-3";
import SectionBuildManage from "@/components/layout/outsourcing-v2/section-build-manage";
import SectionTechStack from "@/components/layout/outsourcing-v2/section-tech-stack";
import SectionComparison from "@/components/layout/outsourcing-v2/section-comparison";
import SectionIndustryFocus from "@/components/layout/outsourcing-v2/section-industry-focus";
import SectionHiringProcess from "@/components/layout/outsourcing-v2/section-hiring-process";
import SectionWhyChoose from "@/components/layout/outsourcing-v2/section-why-choose";
import SectionRelatedServices from "@/components/layout/outsourcing-v2/section-related-services";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import SectionReadyCTA from "@/components/layout/outsourcing-v2/section-ready-cta";
import Faqs from "@/components/layout/outsourcing/Faqs";
import Contact from "@/components/layout/outsourcing/Contact";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function cleanSlugToTitle(slug: string): string {
  return slug
    .replace(/^(hire|outsource|staffing)-/, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
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

  if (seoTitle) {
    return { title: seoTitle, description: seoDescription };
  }
  return { title: `Hire Dedicated ${cleanSlugToTitle(slug)} | IT Solutions` };
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t: any = await i18nInstance.getFixedT(locale, "common");

  const possibleKeys = [`outsource-${slug}`, `staffing-${slug}`, slug];
  let rawContentObject: any = null;
  let activeKeyUsed = "";

  for (const key of possibleKeys) {
    const data = t(key, { returnObjects: true, defaultValue: null });
    if (data && typeof data === "object" && !Array.isArray(data) && Object.keys(data).length > 0) {
      rawContentObject = data;
      activeKeyUsed = key;
      break;
    }
  }

  console.log("--- Localization Routing Diagnostics ---");
  console.log("Current Context Slug:", slug);
  console.log("Active Key Extracted:", activeKeyUsed || "NONE");
  console.log("Available Keys in Content:", Object.keys(rawContentObject || {}));
  console.log("---------------------------------------");

  const content: any = rawContentObject ?? {};
  const humanReadableRole = cleanSlugToTitle(slug);

 // ============================================
// HERO SECTION
// ============================================
// Star symbol ko completely hata kar "Save up to 60%" text set kar diya hai
const heroBadge = content?.badge ?? "Save up to 60%";
const heroTitle = content?.h1 ?? `Hire a Dedicated ${humanReadableRole}`;
const heroDescription = content?.subtext ?? `Scale your operations with dedicated ${humanReadableRole.toLowerCase()}s.`;

  // ============================================
  // SECTION 3 (CHALLENGES)
  // ============================================
  const section3Heading = content?.challenges?.h2 ?? "Overcome operational resource bottlenecks immediately";
  const section3Subheading = content?.challenges?.intro ?? "Many organizations experience delays while sourcing talent locally.";
  const section3ChallengeTitle = content?.challenges?.h2 ?? "Key hurdles businesses routinely navigate:";
  
  // Handles .list or .items
  const section3Challenges = Array.isArray(content?.challenges?.list)
    ? content.challenges.list
    : Array.isArray(content?.challenges?.items)
    ? content.challenges.items
    : [
        "High recruitment cycles dragging team implementation velocity",
        "Onboarding challenges related to variable standard procedures",
        "High operational overhead margins impacting project cost scales"
      ];
      
  const section3Conclusion = content?.challenges?.conclusion ?? "Our custom staffing models eliminate administrative friction.";
  const section3CtaText = content?.challenges?.cta ?? "Get Started Instantly →";
  const section3ImageSrc = content?.challenges?.image ?? "/assets/images/image_3cdc1d.jpg";

  // ============================================
  // BUILD & MANAGE
  // ============================================
  const buildHeading = content?.build?.h2 ?? "Core Responsibilities Handled";
  const buildSubheading = content?.build?.subtitle ?? "Engineered to deliver high accountability standards across routine assignments.";
  const buildCards = Array.isArray(content?.build?.cards) ? content.build.cards : [];

  // ============================================
  // TECH STACK
  // ============================================
  // Handles explicit .pills array or concatenated fallback fields (.line1 / .line2)
  const techHeading = content?.techstack?.h2 ?? "Core Platform and Technical Competencies";
  const techSubheading = content?.techstack?.subtitle ?? "Experienced across major digital toolsets.";
  
  const techPills = Array.isArray(content?.techstack?.pills)
    ? content.techstack.pills
    : [...(content?.techstack?.line1 || []), ...(content?.techstack?.line2 || [])];
    
  const midPoint = Math.ceil(techPills.length / 2);
  const techLine1 = techPills.slice(0, midPoint);
  const techLine2 = techPills.slice(midPoint);

  // ============================================
  // INDUSTRY FOCUS
  // ============================================
  // Maps schema property shapes to ensure `desc` fallback works seamlessly
  const industryHeading = content?.industry?.h2 ?? "Domain Capabilities Integrated Across Key Sectors";
  const industrySubheading = content?.industry?.subtitle ?? "Adapting execution rules to conform perfectly with specific business environments.";
  
  const industryCards = Array.isArray(content?.industry?.cards)
    ? content.industry.cards.map((c: any) => ({ ...c, desc: c.desc || c.description }))
    : [];

  // ============================================
  // HIRING PROCESS
  // ============================================
  // Supports both Array<string> split schemas and direct structured Array<object> schemas
  const processHeading = content?.process?.h2 ?? "Our Seamless Deployment Timeline";
  
  const processSteps = Array.isArray(content?.process?.steps)
    ? content.process.steps.map((step: any, idx: number) => {
        if (typeof step === "string") {
          const parts = step.split(/[:—]/);
          return {
            number: idx + 1,
            title: parts[0]?.trim() || `Step ${idx + 1}`,
            description: parts.slice(1).join(" ").trim() || step
          };
        }
        return {
          number: step.number || idx + 1,
          title: step.title || `Step ${idx + 1}`,
          description: step.description || ""
        };
      })
    : [
        { number: 1, title: "Share Requirements", description: "Define your project goals." },
        { number: 2, title: "Match Talent", description: "Review vetted profiles." },
        { number: 3, title: "Launch", description: "Start production." },
        { number: 4, title: "Support", description: "Ongoing managed support." }
      ];
  const processCtaText = content?.process?.cta ?? "Book Free Consultation →";

  // ============================================
  // WHY CHOOSE
  // ============================================
  // Resolves key differences (why_choose.points vs whyChoose.cards) and types safely
  const whyHeading = content?.why_choose?.h2 ?? content?.whyChoose?.h2 ?? "Why Businesses Choose Our Resource Extensions";
  const whySubheading = content?.why_choose?.subtitle ?? content?.whyChoose?.subtitle ?? "We marry production efficiency with robust service quality validation metrics.";
  
  const rawWhyPoints = content?.why_choose?.points || content?.whyChoose?.cards;
  const whyCards = Array.isArray(rawWhyPoints)
    ? rawWhyPoints.map((item: any, idx: number) => {
        if (typeof item === "string") {
          const parts = item.split(/[:—]/);
          return {
            title: parts[0]?.trim() || `Benefit ${idx + 1}`,
            description: parts.slice(1).join(" ").trim() || item
          };
        }
        return {
          title: item.title || `Benefit ${idx + 1}`,
          description: item.description || ""
        };
      })
    : [];

  // ============================================
  // RELATED SERVICES
  // ============================================
  // Resolves schema key differences (`related_services` vs `related`)
  const relatedHeading = content?.related_services?.h2 ?? content?.related?.h2 ?? "Explore Complementary Support Verticals";
  const relatedSubheading = content?.related_services?.subtitle ?? content?.related?.subtitle ?? "Further expand efficiency loops by combining related specialized workflows.";
  
  const relatedCards = Array.isArray(content?.related_services?.cards)
    ? content.related_services.cards
    : Array.isArray(content?.related?.cards)
    ? content.related.cards
    : [];

  // ============================================
  // FAQ
  // ============================================
  const mappedFaqData = Array.isArray(content?.faq?.questions) ? content.faq.questions : [];

  // ============================================
  // REPUTATION
  // ============================================
  const reputationTitle = content?.reputation?.title ?? "Achieve High Impact Operational Velocity";
  const reputationText = content?.reputation?.text ?? "Optimize internal budget allocation metrics by up to 60%.";

  // ============================================
  // READY CTA
  // ============================================
  const readyHeading = content?.final_cta?.h2 ?? `Ready to Hire a Dedicated ${humanReadableRole} in Netherlands?`;
  const readySubheading = content?.final_cta?.subtitle ?? "Stop letting operational gaps slow your business down.";
  const readyPrimaryCta = content?.final_cta?.buttons?.primary ?? "Book Free Consultation →";
  const readySecondaryCta = content?.final_cta?.buttons?.secondary ?? `Get Matched With a ${humanReadableRole}`;
  const readyTrustPoints = Array.isArray(content?.final_cta?.trust_points) ? content.final_cta.trust_points : [
    "✓ No commitment",
    "✓ Free consultation",
    "✓ Start in 48 hours"
  ];

  const dummyStats = [
    { value: "60%", label: "Average Cost Savings" },
    { value: "48h", label: "Average Matching Time" },
    { value: "97%", label: "Client Satisfaction" },
  ];

  // Debug: Check what's being loaded
  console.log("--- Data Extraction Debug ---");
  console.log("buildCards:", buildCards.length);
  console.log("industryCards:", industryCards.length);
  console.log("relatedCards:", relatedCards.length);
  console.log("faqQuestions:", mappedFaqData.length);
  console.log("whyCards:", whyCards.length);
  console.log("techPills:", techPills.length);
  console.log("processSteps:", processSteps.length);
  console.log("-----------------------------");

  return (
    <div>
     <HeroSectionAdvanced
  badgeText={heroBadge}
  headingLine1={heroTitle}
  headingLine2="" // <--- "Ready to Deploy" ko hata kar empty kar diya
  description={heroDescription}
  primaryButtonText="Book Free Consultation →"
  secondaryButtonText="Get Pricing Today"
  stats={dummyStats}
/>

      <Section2 heading={`Hire specialized ${humanReadableRole} talents trusted by top companies.`} slug={slug} />

      <Section3
        heading={section3Heading}
        subheading={section3Subheading}
        challengeTitle={section3ChallengeTitle}
        challenges={section3Challenges}
        conclusionText={section3Conclusion}
        ctaText={section3CtaText}
        imageSrc={section3ImageSrc}
      />

      <SectionBuildManage heading={buildHeading} subheading={buildSubheading} cards={buildCards} />

      <SectionTechStack heading={techHeading} subheading={techSubheading} line1Tags={techLine1} line2Tags={techLine2} />

      <SectionComparison />

      <SectionIndustryFocus heading={industryHeading} subheading={industrySubheading} cards={industryCards} />

      <SectionHiringProcess heading={processHeading} steps={processSteps} ctaText={processCtaText} />

      <FullContentSection
        heading={reputationTitle}
        text={reputationText}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <TrustSection />

      <SectionWhyChoose heading={whyHeading} subheading={whySubheading} cards={whyCards} />

      <Faqs faqData={mappedFaqData} />

      <SectionRelatedServices heading={relatedHeading} subheading={relatedSubheading} cards={relatedCards} />

      <SectionReadyCTA
        heading={readyHeading}
        subheading={readySubheading}
        primaryButtonText={readyPrimaryCta}
        secondaryButtonText={readySecondaryCta}
        trustPoints={readyTrustPoints}
        role={humanReadableRole}
      />

      <Contact />
    </div>
  );
}