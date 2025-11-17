// app/[locale]/profile/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import FAQSection from "@/components/layout/FAQ-section";
import Group9252 from "@/components/layout/about/group-9252";
import ProjectSection from "@/components/layout/about/project-section";
import ProfileInfoSection from "@/components/layout/profile-info-section";
import TechStackSection from "@/components/layout/about/tech-stack-section";
import GetInTouchSection from "@/components/layout/about/get-in-touch-section";
import TeamMembersTabsSection from "@/components/layout/about/team-members-tabs-section";
import BannerSection3 from "@/components/layout/banner-section-3";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const cards2 = [
    {
      image: "/assets/images/profile/el_idea.svg",
      title: t("profile.card_heading_1"),
      description: t("profile.card_text_1"),
    },
    {
      image: "/assets/images/profile/streamline_decent-work-and-economic-growth-solid.svg",
      title: t("profile.card_heading_2"),
      description: t("profile.card_text_2"),
    },
    {
      image: "/assets/images/profile/fluent_person-support-16-filled.svg",
      title: t("profile.card_heading_3"),
      description: t("profile.card_text_3"),
    },
  ];

  const slides = [
    {
      backgroundImage: "/assets/images/profile/banner_bg.png",
      backgroundMainImage: "/assets/images/profile/banner_rightside_bg.png",
      heading: "From idea to impact",// t("ecommerce.heading_1"),
      text: "we handle it all.",//t("ecommerce.text_1"),
      button: "Discover Now",//t("ecommerce.button_1"),
      button2: "Our Services",// t("ecommerce.button_1"),
      textcolor: "#0000",
    },
  ];

  const faqData = {
    title: "Frequently asked questions",
    description: "Feel free to make a call to our customer support helpline.",
    faqs: [
      {
        question: " What does your company do?",
        answer:
          "We provide various services, including Supply Chain Management, CRM, ERP, Logistics, IT Support, and Cloud Services. We aim to help businesses improve efficiency, increase growth, and achieve long-term success with customized solutions and expert guidance.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We work with businesses in various industries, including healthcare, manufacturing, supply chain management, technology, logistics, and finance.",
      },
      {
        question: "How can I get in touch with you?",
        answer:
          "You can email us at  info@itsolutionsworldwide.com or call us at +31 10 766 0786. We are always ready to assist you!",
      },
      {
        question: "Do you offer ongoing support after service delivery?",
        answer:
          "Yes, we offer regular, ongoing support after a project's completion and delivery to ensure seamless work operations and long-term success.",
      },
      {
        question: "Do you provide consultations before starting a project?",
        answer:
          "Absolutely! We offer consultations to analyze and understand your requirements, goals, and challenges so we can provide you with the best solutions.",
      },
      {
        question: "How can I learn more about your services?",
        answer:
          "To explore more about our services, please visit our website https://itsolutionsworldwide.com or feel free to contact us directly for more detailed information.",
      },
    ],
    helpCenterLink: "/Contact-Us",
    privacyPolicyLink: "",
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <BannerSection3 slides={slides} />
        {/* <Group9252 /> */}
        <ProfileInfoSection
          heading={t("profile.cards_main_heading")}
          cards={cards2}
          columns={3}
        />
        <TeamMembersTabsSection />
        <ProjectSection />
        <TechStackSection />
        <FAQSection {...faqData} />
        <GetInTouchSection />
      </div>
    </>
  );
}
