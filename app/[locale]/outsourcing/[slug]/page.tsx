// // app/[locale]/outsourcing/[slug]/page.tsx

// import { Metadata } from "next";
// import React from "react";
// import initServerI18n from "@/utils/serverTranslation";
// import Section2 from "@/components/layout/outsourcing/section-2";
// import FullContentSection from "@/components/layout/outsourcing/hero-section";
// import TrustSection from "@/components/layout/outsourcing/section-trust";
// import Faqs from "@/components/layout/outsourcing/Faqs";
// // import Roles from "@/components/layout/outsourcing/Roles";
// type FAQItem = {
//   q: string;
//   a: string;
// };
// type Props = {
//   params: Promise<{ slug: string; locale: string }>;
// };

// function cleanSlug(slug: string): string {
//   return slug
//     .replace(/^hire-/, "") // remove "hire-" from start
//     .replace(/[^a-zA-Z0-9\s-]/g, "") // remove special characters
//     .split("-") // split by dash
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug, locale } = await params;
//   const title = cleanSlug(slug);
//   return {
//     title: {
//       absolute: title,
//     },
//     alternates: {
//       canonical: `https://www.itsolutionsworldwide.com/${locale}/outsourcing/${slug}`,
//     },
//   };
// }

// export default async function Page({ params }: Props) {
//   const { slug, locale } = await params;
//   const title = cleanSlug(slug);

//   const i18nInstance = await initServerI18n(locale);
//   const t = await i18nInstance.getFixedT(locale, "common");
// console.log(t)
//   const translationPageKey = `outsource-${slug}`;

//   //   console.log('translationPageKey ==== ',translationPageKey);

//   const cards2 = [
//     {
//       image: "/assets/images/outsource-icon-1.png",
//       title: t(`${translationPageKey}.why_choose.benefits.1`),
//     },
//     {
//       image: "/assets/images/outsource-icon-2.png",
//       title: t(`${translationPageKey}.why_choose.benefits.2`),
//     },
//     {
//       image: "/assets/images/outsource-icon-3.png",
//       title: t(`${translationPageKey}.why_choose.benefits.2`),
//     },
//     {
//       image: "/assets/images/outsource-icon-3.png",
//       title: t(`${translationPageKey}.why_choose.benefits.3`),
//     },
//   ];
// // const data={quesions:{t(`${translationPageKey}.faq`)}}
// // console.log(data)

//   const roles = [
//     {
//       id: 1,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//           />
//         </svg>
//       ),
//       title: t(`${translationPageKey}.why_choose.benefits.1`),
//       description:
//         "Keep your business running smoothly with a dedicated remote administrative assistant. Our admin support....",
//       linkText: "Hire an Administrative Support Specialist",
//       href: "#",
//     },
//     {
//       id: 2,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//           />
//         </svg>
//       ),
//       title: "HR Administrative (Remote)",
//       description:
//         "Streamline your HR operations with a remote HR administrative professional. From managing employee...",
//       linkText: "Hire an HR Administrative Specialist",
//       href: "#",
//     },
//     {
//       id: 3,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//         </svg>
//       ),
//       title: "Customer Support",
//       description:
//         "Deliver exceptional customer experiences with a dedicated remote support specialist. Our customer....",
//       linkText: "Hire a Customer Support Specialist",
//       href: "#",
//     },
//     {
//       id: 4,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//         </svg>
//       ),
//       title: "Customer Support",
//       description:
//         "Deliver exceptional customer experiences with a dedicated remote support specialist. Our customer....",
//       linkText: "Hire a Customer Support Specialist",
//       href: "#",
//     },
//   ];

//   const imagetext = (
//     <>
//       {t("outsourcing.hero.description")}
//       <br />
//       <br />
//       {t("outsourcing.hero.sub_description")}
//     </>
//   );

//   const section2Exist = `${translationPageKey}.intro_section.title`
//     ? true
//     : false;
//   console.log("section2Exist ==== ", section2Exist);

//   return (
//     <div>
//       <FullContentSection
//         heading={t(`${translationPageKey}.hero.title`)}
//         text={imagetext}
//         buttonText={t(`${translationPageKey}.hero.cta_button`)}
//         bgButton="#ebf2f3"
//         buttonLink="#ebf2f3"
//         imageUrl="/assets/images/staffingconsulting2.png"
//         bgColor="#D8E9EB"
//       />
//       {section2Exist && (
//         <Section2
//           heading={t(`${translationPageKey}.why_choose.title`)}
//           text={t(`${translationPageKey}.why_choose.intro`)}
//           buttonText={t(`${translationPageKey}.why_choose.cta_call`)}
//           bgButton="#ebf2f3"
//           buttonLink="#ebf2f3"
//           cards={cards2}
//           columns={4}
//         />
//       )}

//       {/* <Roles roles={roles}/> */}

//       <FullContentSection
//         heading={t(`${translationPageKey}.reputation.title`)}
//         text={t(`${translationPageKey}.reputation.text`)}
//         // buttonText={t("outsourcing.hero.cta_button")}
//         // bgButton="#ebf2f3"
//         // buttonLink="#ebf2f3"
//         imageUrl="/assets/images/staffingconsulting2.png"
//         bgColor="#D8E9EB"
//       />

//       <TrustSection />
//       {/* <Faqs
//         data={t(`${translationPageKey}.faq.questions`,{returnObjects:true})}
//       />as FAQItem[]; */}
// <FullContentSection
//         heading={t(`${translationPageKey}.footer_cta.title`)}
//         text={t(`${translationPageKey}.footer_cta.description`)}
//         instruction={t(`${translationPageKey}.footer_cta.instruction`)}
//         // buttonText={t("outsourcing.hero.cta_button")}
//         // bgButton="#ebf2f3"
//         // buttonLink="#ebf2f3"
//         imageUrl="/assets/images/staffingconsulting2.png"
//         bgColor="#D8E9EB"
//       />
//       {/* 
//       import type { NextPage } from 'next';



// const Frame15: NextPage = () => {
//   	return (
//     		<div className="w-full h-[309px] relative bg-gainsboro flex flex-col items-start pt-[52px] pb-[35px] pl-52 pr-[211px] box-border text-center text-[51.19px] text-gray font-inter">
//       			<div className="w-[1503px] h-[222px] relative">
//         				<b className="absolute top-[0px] left-[calc(50%_-_522.5px)] leading-[60.15px] inline-block w-[1046px] h-[114px]">
//           					<span>{`Why `}</span>
//           					<span className="text-darkcyan">Businesses Keep Coming Back</span>
//           					<span> to Us</span>
//         				</b>
//         				<div className="absolute top-[76px] left-[calc(50%_-_751.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1503px] h-[146px]">IT Solutions Worldwide has helped companies of all sizes, from fast-growing startups to established enterprises, build efficient, cost-effective remote teams. We place most clients with a shortlist of candidates within 3–5 business days, and because every professional is thoroughly pre-vetted, the working relationships we build tend to be long-term and stable. We work with both Dutch and international businesses, offer transparent pricing with no hidden fees, and give every client a single dedicated point of contact from start to finish. Simple, honest, and built around your success.</div>
//       			</div>
//     		</div>);
// };

// export default Frame15 ;

      
//       */}
//     </div>
//   );
// }




// app/[locale]/outsourcing/[slug]/page.tsx

import { Metadata } from "next";
import React from "react";
import initServerI18n from "@/utils/serverTranslation";
import Section2 from "@/components/layout/outsourcing/section-2";
import FullContentSection from "@/components/layout/outsourcing/hero-section";
import TrustSection from "@/components/layout/outsourcing/section-trust";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function cleanSlug(slug: string): string {
  return slug
    .replace(/^hire-/, "") // remove "hire-" from start
    .replace(/[^a-zA-Z0-9\s-]/g, "") // remove special characters
    .split("-") // split by dash
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const title = cleanSlug(slug);
  return {
    title: {
      absolute: title,
    },
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}/outsourcing/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;
  const title = cleanSlug(slug);

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const translationPageKey = `outsource-${slug}`;

  //   console.log('translationPageKey ==== ',translationPageKey);

  const cards2 = [
    {
      image: "/assets/images/outsource-icon-1.png",
      title: t("ecommerce.card_heading_1"),
    },
    {
      image: "/assets/images/outsource-icon-2.png",
      title: t("ecommerce.card_heading_2"),
    },
    {
      image: "/assets/images/outsource-icon-3.png",
      title: t("ecommerce.card_heading_3"),
    },
    {
      image: "/assets/images/outsource-icon-3.png",
      title: t("ecommerce.card_heading_4"),
    },
  ];

  const imagetext = (
    <>
      {t("outsourcing.hero.description")}
      <br />
      <br />
      {t("outsourcing.hero.sub_description")}
    </>
  );

  const section2Exist = `${translationPageKey}.intro_section.title`
    ? true
    : false;
  console.log("section2Exist ==== ", section2Exist);

  return (
    <div>
      <FullContentSection
      heading={t(`${translationPageKey}.hero.title`)}
        text={imagetext}
        buttonText={t(`${translationPageKey}.hero.cta_button`)}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.png"
        bgColor="#D8E9EB"
    />
      (section2Exist &&
      <Section2
        heading={t(`${translationPageKey}.intro_section.title`)}
        text={t(`${translationPageKey}.intro_section.text`)}
        buttonText={t(`${translationPageKey}.hero.cta_button`)}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        cards={cards2}
        columns={4}
      />
      )

      <FullContentSection
        heading={t("outsourcing.hero.title")}
        text={imagetext}
        buttonText={t("outsourcing.hero.cta_button")}
        bgButton="#ebf2f3"
        buttonLink="#ebf2f3"
        imageUrl="/assets/images/staffingconsulting2.png"
        bgColor="#D8E9EB"
      />

      <TrustSection />




      {/* 
      import type { NextPage } from 'next';



const Frame15: NextPage = () => {
  	return (
    		<div className="w-full h-[309px] relative bg-gainsboro flex flex-col items-start pt-[52px] pb-[35px] pl-52 pr-[211px] box-border text-center text-[51.19px] text-gray font-inter">
      			<div className="w-[1503px] h-[222px] relative">
        				<b className="absolute top-[0px] left-[calc(50%_-_522.5px)] leading-[60.15px] inline-block w-[1046px] h-[114px]">
          					<span>{`Why `}</span>
          					<span className="text-darkcyan">Businesses Keep Coming Back</span>
          					<span> to Us</span>
        				</b>
        				<div className="absolute top-[76px] left-[calc(50%_-_751.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1503px] h-[146px]">IT Solutions Worldwide has helped companies of all sizes, from fast-growing startups to established enterprises, build efficient, cost-effective remote teams. We place most clients with a shortlist of candidates within 3–5 business days, and because every professional is thoroughly pre-vetted, the working relationships we build tend to be long-term and stable. We work with both Dutch and international businesses, offer transparent pricing with no hidden fees, and give every client a single dedicated point of contact from start to finish. Simple, honest, and built around your success.</div>
      			</div>
    		</div>);
};

export default Frame15 ;

      
      */}
    </div>
  );
}