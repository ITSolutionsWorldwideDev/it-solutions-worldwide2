// app/[locale]/about-us/page.tsx
import initServerI18n from "@/utils/serverTranslation";
import Group9295 from "@/components/layout/about/group-9295";
import Group9268 from "@/components/layout/about/group-9268";
import Group9309 from "@/components/layout/about/group-9309";
import Group9304 from "@/components/layout/about/group-9304";
import GetInTouchSection from "@/components/layout/about/get-in-touch-section";
import MaskGroup from "@/components/layout/about/mask-group";
import Group9319 from "@/components/layout/about/group-9319";
import VisionSection from "@/components/layout/vision-section";
import FAQSection from "@/components/layout/FAQ-section";
import AboutUsProcessFlow from "@/components/layout/aboutus-process-flow";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const expertise = [
    {
      icon: "/assets/images/aboutus4.png",
      title: t("aboutus.expertise_heading_1"),
      description: t("aboutus.expertise_text_1"),
    },
    {
      icon: "/assets/images/aboutus5.png",
      title: t("aboutus.expertise_heading_2"),
      description: t("aboutus.expertise_text_2"),
    },
    {
      icon: "/assets/images/aboutus6.png",
      title: t("aboutus.expertise_heading_3"),
      description: t("aboutus.expertise_text_3"),
    },
    {
      icon: "/assets/images/aboutus7.png",
      title: t("aboutus.expertise_heading_4"),
      description: t("aboutus.expertise_text_4"),
    },
  ];

  const faqData = {
    title: t("aboutus.faq_title"),
    description: t("aboutus.faq_desc"),
    faqs: [
      {
        question: t("aboutus.question1"),
        answer: t("aboutus.answer1"),
      },
      {
        question: t("aboutus.question2"),
        answer: t("aboutus.answer2"),
      },
      {
        question: t("aboutus.question3"),
        answer: t("aboutus.answer3"),
      },
      {
        question: t("aboutus.question4"),
        answer: t("aboutus.answer4"),
      },
      {
        question: t("aboutus.question5"),
        answer: t("aboutus.answer5"),
      },
      {
        question: t("aboutus.question6"),
        answer: t("aboutus.answer6"),
      },
    ],
    helpCenterLink: "/Contact-Us",
    privacyPolicyLink: "",
  };

  const slides = [
    {
      backgroundImage: "/assets/images/aboutus/about-us-banner.png",
      // backgroundMainImage: "/assets/images/profile/banner_rightside_bg.png",
      heading: t("aboutus.banner_heading"),
      text: t("aboutus.banner_text"),
      button: t("aboutus.contactheading"),
      button2: "",
      textcolor: "#0000",
    },
  ];

  const vision = {
    heading: t("aboutus.our_vision_heading"),
    text: t("aboutus.our_vision_text"),
    imageUrl:
      "/assets/images/aboutus/d-0035-a-757-d-44406901-c-3-a-6-f-1-c-10-c-1-f-1-copy-1.png",
    leftColor: "#278083",
    rightColor: "#000",
  };

  const processFlow = {
    steps: expertise,
    circleColor: "#467a7e",
    lineColor: "#467a7e",
    textColor: "#000",
    heading: t("aboutus.process_flow_heading"),
    subheading: "",
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <BannerSection2 slides={slides} />
        <Group9319 />
        <Group9268 />
        <Group9295 />
        <VisionSection {...vision} />
        <Group9309 />
        <Group9304 />
        <AboutUsProcessFlow {...processFlow} />
        <MaskGroup />
        <FAQSection {...faqData} />
        <GetInTouchSection />
      </div>
    </>
  );
}
/* Our vision is to emerge as one of the leading IT companies known and
          recognized for our IT solution services, innovation, and integrity. We
          look forward to building a strong committed bond with our clients to
          optimise their business operations and be recognized for their work
          and services. We believe in automating your business with the help of
          cutting-edge technology services, and we aim to build a platform where
          businesses can integrate advanced technology and grow to their full
          potential. */
