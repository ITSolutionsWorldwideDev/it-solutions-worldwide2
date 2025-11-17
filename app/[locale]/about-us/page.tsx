// app/[locale]/about-us/page.tsx

import initServerI18n from "@/utils/serverTranslation";
// import BannerSection from "@/components/layout/banner-section";
// import { type LocalePageProps } from "@/types/next";
// import ImageSection from "@/components/layout/image-section";
// import ImageSectionBgBlue from "@/components/layout/image-section-bg-blue";
// import FAQSection from "@/components/layout/FAQ-section";
// import GetInTouchSection from "@/components/layout/get-in-touch-section";
// import MissionVisionSection from "@/components/layout/our-mission-section";
// import Image from "next/image";
import Group9295 from "@/components/layout/about/group-9295";
import Group9251 from "@/components/layout/about/group-9251";
import Stat from "@/components/layout/about/stat";
import Group9268 from "@/components/layout/about/group-9268";
import Group9297 from "@/components/layout/about/group-9297";
import Group9309 from "@/components/layout/about/group-9309";
import Group9252 from "@/components/layout/about/group-9252";
import Group9304 from "@/components/layout/about/group-9304";
import GetInTouchSection from "@/components/layout/about/get-in-touch-section";
import Frame1000004442 from "@/components/layout/about/frame-1000";
import MaskGroup from "@/components/layout/about/mask-group";
import Group9318 from "@/components/layout/about/group-9318";
import Group9319 from "@/components/layout/about/group-9319";
import VisionSection from "@/components/layout/vision-section";
import FAQSection from "@/components/layout/FAQ-section";
import AboutUsProcessFlow from "@/components/layout/aboutus-process-flow";

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  /*  const slides = [
    {
      backgroundImage: "/assets/images/aboutus.png",
      heading: t("aboutus.heading_1"),
      text: t("aboutus.text_1"),
    },
  ];

  const imagetext = t("aboutus.text_2");

  const imagetext2 = (
    <>
      <h3 className="font-bold">What Drives Us</h3>
      Our core values reflect everything that is important to us; committing to
      our clients with the best of our IT solution services, enhancing work
      operations to increase efficiency, and developing good relationships with
      the clients, partners, and stakeholders. We are dedicated to embracing
      innovation by adapting to modern technology, developing efficient
      solutions, and delivering effective results. We believe in collaboration
      with our team and clients by developing strong partnerships and customized
      solution services. We uphold our standard of integrity by providing
      excellence in the services we provide to produce effective and the best
      results. We believe in establishing a transparent communication channel
      with our clients to
    </>
  );

  const points = [
    {
      title: "Supply Chain Services",
      icon: "/assets/images/aboutus4.png",
    },
    { title: "IT and Cloud Solutions", icon: "/assets/images/aboutus5.png" },
    {
      title: "Digital Marketing & E-commerce",
      icon: "/assets/images/aboutus6.png",
    },
    { title: "Staffing and Support", icon: "/assets/images/aboutus7.png" },
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
      // Add more FAQs as needed
    ],
    helpCenterLink: "/Contact-Us",
    privacyPolicyLink: "",
  }; */

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
      // Add more FAQs as needed
    ],
    helpCenterLink: "/Contact-Us",
    privacyPolicyLink: "",
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Group9252 />
        {/* <Group9251 /> <Stat /> */}
        <Group9319 />
        <Group9268 />
        <Group9295 />
        {/* <Group9297 /> */}

        <VisionSection
          heading="Our Vision"
          text="Our vision is to emerge as one of the leading IT companies known and
          recognized for our IT solution services, innovation, and integrity. We
          look forward to building a strong committed bond with our clients to
          optimise their business operations and be recognized for their work
          and services. We believe in automating your business with the help of
          cutting-edge technology services, and we aim to build a platform where
          businesses can integrate advanced technology and grow to their full
          potential."
          imageUrl="/assets/images/aboutus/d-0035-a-757-d-44406901-c-3-a-6-f-1-c-10-c-1-f-1-copy-1.png"
          leftColor="#278083"
          rightColor="#000"
        />

        <Group9309 />
        <Group9304 />
        {/* <Group9318 /> */}
        <AboutUsProcessFlow
          heading="Our Expertise"
          steps={expertise}
          circleColor="#467a7e"
          lineColor="#467a7e"
          textColor="#000"
        />

        <MaskGroup />
        <FAQSection {...faqData} />
        {/* <Frame1000004442 /> */}
        <GetInTouchSection />
      </div>
    </>
  );
}
