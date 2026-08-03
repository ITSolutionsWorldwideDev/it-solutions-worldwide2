import nextDynamic from "next/dynamic";
import type { Metadata } from 'next';
import { getCanonicalUrl, getLanguageAlternates } from "@/utils/seo";

export const dynamic = 'force-static';
export const revalidate = 3600;

export const generateMetadata = async (props: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const params = await props.params;
  const { locale } = params;

  return {
    title: "Smart IT & Business Services in Netherlands | ITWW",
    description: " IT Solutions Worldwide delivers supply chain Management, digital marketing, staff outsourcing services in Netherlands. Get a free consultation today.",
    alternates: {
      canonical: getCanonicalUrl(locale, ""),
      languages: getLanguageAlternates(""),
    },
  };
};

// 2. Dynamic Imports (Ab "nextDynamic" use karein, koi error nahi aayega)
const AnimationArea = nextDynamic(
  () => import("@/components/layout/home/AnimationArea"),
  { loading: () => <div className="min-h-[50vh] bg-gray-50 animate-pulse" aria-hidden /> },
);

const BlogCarousel = nextDynamic(
  () => import("@/components/layout/home/BlogCarousel"),
  {
    loading: () => (
      <div className="h-72 bg-gray-100 animate-pulse rounded-xl" />
    ),
  }
);

const Certifications = nextDynamic(
  () => import("@/components/layout/home/Certification"),
  {
    loading: () => (
      <div className="h-48 bg-gray-100 animate-pulse rounded-xl" />
    ),
  }
);

const ContactSection = nextDynamic(
  () => import("@/components/layout/home/ContactSection"),
  {
    loading: () => (
      <div className="h-80 bg-gray-100 animate-pulse rounded-xl" />
    ),
  }
);

const LogosSlider = nextDynamic(
  () => import("@/components/layout/home/LogosSlider"),
  {
    loading: () => (
      <div className="h-24 bg-gray-100 animate-pulse rounded-xl" />
    ),
  }
);

// 3. Main Page Component
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex flex-col w-full row-start-2">
<AnimationArea locale={locale} />      
      <BlogCarousel locale={locale} />
      <Certifications />
      <ContactSection />
    </main>
  );
}