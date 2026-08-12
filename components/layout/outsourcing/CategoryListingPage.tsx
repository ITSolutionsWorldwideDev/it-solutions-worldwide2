import React from "react";
import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import Faqs from "@/components/layout/outsourcing/Faqs";
import Roles from "@/components/layout/outsourcing/Roles";
import Contact from "@/components/layout/outsourcing/Contact";

type Props = {
  translationKey: string;
  locale: string;
  t: (key: string, opts?: any) => any;
};

export default function CategoryListingPage({ translationKey, locale, t }: Props) {
  const cards2 = [
    { image: "/assets/images/outsource-icon-1.webp", title: t(`${translationKey}.why_choose.benefits.1`) },
    { image: "/assets/images/outsource-icon-2.webp", title: t(`${translationKey}.why_choose.benefits.2`) },
    { image: "/assets/images/outsource-icon-3.webp", title: t(`${translationKey}.why_choose.benefits.3`) },
    { image: "/assets/images/outsource-icon-4.webp", title: t(`${translationKey}.why_choose.benefits.4`) },
  ];

  const imagetext = (
    <>
      {t(`${translationKey}.hero.description`)}
      <br />
      <br />
      {t(`${translationKey}.hero.sub_description`)}
    </>
  );

  const hasSection2 =
    t(`${translationKey}.why_choose.title`) !== `${translationKey}.why_choose.title`;

  return (
    <div>
      <FullContentSection
        heading={t(`${translationKey}.hero.title`)}
        text={imagetext}
        buttonText={t(`${translationKey}.hero.cta_button`)}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      {hasSection2 && (
        <Section2
          heading={t(`${translationKey}.why_choose.title`)}
          text={t(`${translationKey}.why_choose.intro`)}
          buttonText={t(`${translationKey}.why_choose.cta_call`)}
          bgButton="#ebf2f3"
          buttonLink="#ebf2f3"
          cards={cards2}
          columns={4}
        />
      )}

      <Roles
        roles={t(`${translationKey}.services_section`, { returnObjects: true })}
        isCategory={true}
        locale={locale}
      />

      <FullContentSection
        heading={t(`${translationKey}.reputation.title`)}
        text={t(`${translationKey}.reputation.text`)}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <TrustSection />

      <Faqs faqData={t(`${translationKey}.faq.questions`, { returnObjects: true })} />

      <FullContentSection
        heading={t(`${translationKey}.footer_cta.title`)}
        text={t(`${translationKey}.footer_cta.description`)}
        instruction={t(`${translationKey}.footer_cta.instruction`)}
        imageUrl="/assets/images/staffingconsulting2.webp"
        bgColor="#D8E9EB"
      />

      <Contact />
    </div>
  );
}