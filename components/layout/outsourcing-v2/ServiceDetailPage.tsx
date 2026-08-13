// components/layout/outsourcing-v2/ServiceDetailPage.tsx
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
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import Faqs from "@/components/layout/outsourcing/Faqs";

type Props = {
  content: any;
  slug: string;
  locale: string;
  humanReadableRole: string;
  t: (key: string, opts?: any) => any;
};

// Slug-based fallback images — used when JSON doesn't provide content.challenges.image
const SLUG_IMAGE_MAP: Record<string, string> = {
  "scm-consultancy": "/assets/images/categories/data-analyst.webp",
  "business-consultancy": "/assets/images/categories/online-marketer.webp",
  "supply-chain-performance-check": "/assets/images/categories/power-bi-specialist.webp",
  "automation-services": "/assets/images/categories/backend-developer.webp",
  "erp-implementation": "/assets/images/categories/full-stack-developer.webp",
  "seo-services": "/assets/images/categories/online-marketer.webp",
  "website-design-&-development": "/assets/images/categories/web-designer.webp",
  "ecommerce-development": "/assets/images/categories/ecommerce-assistant.webp",
  "ppc-advertising": "/assets/images/categories/social-media-manager.webp",
  "social-media-marketing": "/assets/images/categories/content-creator.webp",
  "software-development": "/assets/images/categories/app-developer.webp",
};

export default function ServiceDetailPage({ content, slug, locale, humanReadableRole, t }: Props) {
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

  // Priority: JSON-provided image > slug-based map > generic fallback
  const section3ImageSrc =
    content?.challenges?.image ??
    SLUG_IMAGE_MAP[slug] ??
    "/assets/images/staffingconsulting2.webp";

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

  const relatedCardsForRoles: Record<string, { title: string; description: string }> = {};
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

  const reputationTitle =
    content?.reputation?.title ?? t("outsourcingDefaults.reputationTitle", { role: humanReadableRole });
  const reputationText =
    content?.reputation?.text ?? t("outsourcingDefaults.reputationText", { role: humanReadableRole });

  const readyHeading = content?.final_cta?.h2 ?? `Ready to Hire a Dedicated ${humanReadableRole} in Netherlands?`;
  const readySubheading = content?.final_cta?.subtitle ?? "Stop letting operational gaps slow your business down.";
  const readyPrimaryCta = content?.final_cta?.buttons?.primary ?? "Book Free Consultation";
  const readySecondaryCta = content?.final_cta?.buttons?.secondary ?? `Get Matched With a ${humanReadableRole}`;
  const readyTrustPoints = Array.isArray(content?.final_cta?.trust_points)
    ? content.final_cta.trust_points
    : ["✓ No commitment", "✓ Free consultation", "✓ Start in 48 hours"];

  const heroStats = [
    { value: "500+", label: content?.trust_stats?.professionals?.replace(/[👥⏱💰]/g, "").trim() || "Dedicated Professionals" },
    { value: "24hrs", label: content?.trust_stats?.start_time?.replace(/[👥⏱💰]/g, "").trim() || "Start Time" },
    { value: "60%", label: content?.trust_stats?.savings?.replace(/[👥⏱💰]/g, "").trim() || "Cost Savings" },
  ];

  return (
    <div>
      <HeroSectionAdvanced
        headingLine1={heroTitle}
        headingLine2=""
        description={heroDescription}
        primaryButtonText={content?.cta?.primary ?? "Book Free Consultation"}
        primaryButtonLink={`/${locale}/contact-us`}
        secondaryButtonText={content?.cta?.secondary ?? "Get Pricing Today"}
        service={humanReadableRole}
        stats={heroStats}
      />
      <Section2V2
        heading={content?.h2_hero ?? `Hire specialized ${humanReadableRole} talents trusted by top companies.`}
        icons={content?.icons}
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
      <SectionComparison
        heading={content?.comparison?.h2}
        subheading={content?.comparison?.subtitle}
        table={content?.comparison?.table}
        summary={content?.comparison?.summary}
      />
      <SectionIndustryFocus heading={industryHeading} subheading={industrySubheading} cards={industryCards} />
      <SectionHiringProcess heading={processHeading} steps={processSteps} ctaText={processCtaText} ctaLink="/en/contact-us" />
      <FullContentSection
        heading={reputationTitle}
        text={reputationText}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />
      <TrustSection />
      <SectionWhyChoose heading={whyHeading} subheading={whySubheading} cards={whyCards} />
      <Faqs faqData={mappedFaqData} />
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