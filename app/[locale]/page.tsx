// app/[locale]/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const generateMetadata = async (props: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const params = await props.params;
  return {
  };
};

// ERROR FIXED: Dynamic imports aur revalidate ko function ke bahar top-level par kar diya hai
const AnimationArea = dynamic(
  () => import("@/components/layout/home/AnimationArea"),
  { loading: () => <div className="min-h-[50vh]" aria-hidden /> },
);
const BlogCarousel = dynamic(
  () => import("@/components/layout/home/BlogCarousel"),
);

const Certifications = dynamic(
  () => import("@/components/layout/home/Certification"),
);

const ContactSection = dynamic(
  () => import("@/components/layout/home/ContactSection"),
);

export const revalidate = 3600;

// ERROR FIXED: Pehla adhoora duplicate HomePage function hata diya hai
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    /* Yahan se gap-8 aur items-center/sm:items-start ko hata diya hai taake sections poore stretch hon aur khali jagah khatam ho */
    <main className="flex flex-col w-full row-start-2">
      <AnimationArea />
      <BlogCarousel locale={locale} />
      <Certifications />
      <ContactSection />
    </main>
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
/* import type { Metadata } from 'next';
export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const { locale } = params;

  return {
    title: `Home | ${locale.toUpperCase()} | IT Solutions`,
    description: 'Localized home page description',
  };
}; */
