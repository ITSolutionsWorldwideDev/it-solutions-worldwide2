// app/[locale]/page.tsx
import dynamic from "next/dynamic";

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <AnimationArea />
      <BlogCarousel locale={locale} />
      <Certifications />
      <ContactSection />
    </main>
  );
}
