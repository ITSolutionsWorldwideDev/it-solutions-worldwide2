// app/[locale]/blogs/[slug]/page.tsx
import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 3600; // ✅ 300 → 3600 (1 hour, better caching)

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
const blog = await getBlogBySlug(slug, locale);
  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center text-[#278083] mb-4">
        {blog.content.title}
      </h1>

      <p className="text-gray-500 text-sm text-center mb-10">
        {new Date(blog.date).toLocaleDateString(locale)}
      </p>

      {blog.content.featuredImage && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-10">
          <Image
            src={blog.content.featuredImage}
            alt={blog.content.title}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog.content.description,
        }}
      />
    </article>
  );
}
