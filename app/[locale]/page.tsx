// app/[locale]/page.tsx
import type { Metadata } from 'next';

import AnimationArea from "@/components/layout/home/AnimationArea";
import BlogCarousel from "@/components/layout/home/BlogCarousel";
import ContactSection from "@/components/layout/home/ContactSection";

interface LocalePageProps {
  params: { locale: string };
}

// export const generateMetadata = async ({ params }: LocalePageProps): Promise<Metadata> => {
//   return {
//     title: `Home | ${params.locale.toUpperCase()} | IT Solutions`,
//     description: 'Localized home page description',
//   };
// };

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const { locale } = await params;

  return {
    title: `Home | ${locale.toUpperCase()} | IT Solutions`,
    description: 'Localized home page description',
  };
};

export default function HomePage({ params }: LocalePageProps) {
    return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AnimationArea />
        <BlogCarousel />
        <ContactSection />
      </main>
    </>
  );
  /* return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to our site ({params.locale})</h1>
      <p>This is the localized home page.</p>
    </main>

    
  ); */
}

// import { useTranslation } from 'next-i18next'; // or your i18n hook

/* export default function HomePage() {
  const { t } = useTranslation('common'); // load your common.json namespace

  return (
    <main>
      <h1>{t('home.title')}</h1>

    </main>
  );
}
 */