import nextDynamic from "next/dynamic"; // 👈 IMPORT KO RENAMED RAKHEIN
import type { Metadata } from 'next';

// Page Configuration
export const dynamic = 'force-static';
export const revalidate = 3600;

export const generateMetadata = async (props: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const params = await props.params;
  return {
    title: "Home | IT Solutions Worldwide",
    description: "Empowering businesses with smart IT solutions.",
  };
};

// 2. Dynamic Imports (Ab "nextDynamic" use karein, koi error nahi aayega)
const AnimationArea = nextDynamic(
  () => import("@/components/layout/home/AnimationArea"),
  { loading: () => <div className="min-h-[50vh] bg-gray-50 animate-pulse" aria-hidden /> },
);

const BlogCarousel = nextDynamic(
  () => import("@/components/layout/home/BlogCarousel"),
);

const Certifications = nextDynamic(
  () => import("@/components/layout/home/Certification"),
);

const ContactSection = nextDynamic(
  () => import("@/components/layout/home/ContactSection"),
);

const LogosSlider = nextDynamic(
  () => import("@/components/layout/home/LogosSlider"),
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
      <AnimationArea />
      <LogosSlider />
      <BlogCarousel locale={locale} />
      <Certifications />
      <ContactSection />
    </main>
  );
}