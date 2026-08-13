import React from "react";

import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";
import Faqs from "@/components/layout/outsourcing/Faqs";
import CategoryRoles from "@/components/layout/outsourcing/CategoryRoles";
import Contact from "@/components/layout/outsourcing/Contact";
import Script from "next/script";


type Props = {
  translationKey: string;
  locale: string;
  t: (key: string, opts?: any) => any;
};


export default function CategoryListingPage({
  translationKey,
  locale,
  t,
}: Props) {


  // =========================================================
  // WHY CHOOSE CARDS
  // =========================================================

  const cards2 = [
    {
      image: "/assets/images/outsource-icon-1.webp",
      title: t(
        `${translationKey}.why_choose.benefits.1`
      ),
    },

    {
      image: "/assets/images/outsource-icon-2.webp",
      title: t(
        `${translationKey}.why_choose.benefits.2`
      ),
    },

    {
      image: "/assets/images/outsource-icon-3.webp",
      title: t(
        `${translationKey}.why_choose.benefits.3`
      ),
    },

    {
      image: "/assets/images/outsource-icon-4.webp",
      title: t(
        `${translationKey}.why_choose.benefits.4`
      ),
    },
  ];


  // =========================================================
  // HERO TEXT
  // =========================================================

  const imagetext = (
    <>
      {t(
        `${translationKey}.hero.description`
      )}

      <br />
      <br />

      {t(
        `${translationKey}.hero.sub_description`
      )}
    </>
  );


  // =========================================================
  // CHECK WHETHER WHY CHOOSE SECTION EXISTS
  // =========================================================

  const hasSection2 =
    t(
      `${translationKey}.why_choose.title`
    ) !==
    `${translationKey}.why_choose.title`;


  // =========================================================
  // SERVICES DATA
  // =========================================================
  //
  // IMPORTANT:
  // We DO NOT inject links here.
  //
  // CategoryRoles.tsx handles links using the
  // actual role key from common.json.
  //
  // Example:
  //
  // website_design_development
  //        ↓
  // /digital-services/website-design-development
  //
  // =========================================================

const servicesData = t(
  `${translationKey}.services_section`,
  {
    returnObjects: true,
  }
) as any;

// =========================================================
// FAQ DATA + SCHEMA
// =========================================================
const rawFaqData = t(
  `${translationKey}.faq.questions`,
  {
    returnObjects: true,
  }
) as any;

const mappedFaqData = Array.isArray(rawFaqData) ? rawFaqData : [];

// FAQ Schema (JSON-LD) — Google rich snippets ke liye
const faqSchema =
  mappedFaqData.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: mappedFaqData.map((faq: any) => ({
          "@type": "Question",
          name: faq.q || "",
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a || "",
          },
        })),
      }
    : null;
  // PAGE
  // =========================================================

  return (
    <div>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <FullContentSection
        heading={t(
          `${translationKey}.hero.title`
        )}

        text={imagetext}

        buttonText={t(
          `${translationKey}.hero.cta_button`
        )}

        bgButton="#ebf2f3"

        buttonLink="#ebf2f3"

        imageUrl="/assets/images/staffingconsulting2.webp"

        bgColor="#D8E9EB"
      />


      {/* =====================================================
          WHY CHOOSE SECTION
      ===================================================== */}

      {hasSection2 && (
        <Section2
          heading={t(
            `${translationKey}.why_choose.title`
          )}

          text={t(
            `${translationKey}.why_choose.intro`
          )}

          buttonText={t(
            `${translationKey}.why_choose.cta_call`
          )}

          bgButton="#ebf2f3"

          buttonLink="#ebf2f3"

          cards={cards2}

          columns={4}
        />
      )}


      {/* =====================================================
          SERVICES / CATEGORY CARDS
      ===================================================== */}

      <CategoryRoles
        roles={servicesData}
        locale={locale}
      />


      {/* =====================================================
          REPUTATION SECTION
      ===================================================== */}

      <FullContentSection
        heading={t(
          `${translationKey}.reputation.title`
        )}

        text={t(
          `${translationKey}.reputation.text`
        )}

        imageUrl="/assets/images/staffingconsulting2.webp"

        bgColor="#D8E9EB"
      />


      {/* =====================================================
          TRUST SECTION
      ===================================================== */}

      <TrustSection />


      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

     {faqSchema && (
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
    )}

     <Faqs faqData={mappedFaqData} />


      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <FullContentSection
        heading={t(
          `${translationKey}.footer_cta.title`
        )}

        text={t(
          `${translationKey}.footer_cta.description`
        )}

        instruction={t(
          `${translationKey}.footer_cta.instruction`
        )}

        imageUrl="/assets/images/staffingconsulting2.webp"

        bgColor="#D8E9EB"
      />


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Contact />

    </div>
  );
}