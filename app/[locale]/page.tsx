// app/[locale]/page.tsx

import AnimationArea from "@/components/layout/home/AnimationArea";
import BlogCarousel from "@/components/layout/home/BlogCarousel";
import Certifications from "@/components/layout/home/Certification";
import ContactSection from "@/components/layout/home/ContactSection";
import type { Metadata } from 'next';

export const generateMetadata = async (props: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const params = await props.params;
  return {
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${params.locale}`,
    },
  };
};

export default async function HomePage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <AnimationArea />
        <BlogCarousel locale={locale} />
        <Certifications />
        
        <ContactSection />
      </main>
    </>
  );
}

// interface LocalePageProps {
//   params: Promise<{ locale: string }>;
// }
// { params }: LocalePageProps

/* export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = params;

  return (
    <>
      <BlogCarousel locale={locale} />
    </>
  );
} */
/* 

import type { Metadata } from 'next';
export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const { locale } = params;

  return {
    title: `Home | ${locale.toUpperCase()} | IT Solutions`,
    description: 'Localized home page description',
  };
}; */