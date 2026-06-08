import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image"; // LCP FIXED: Next.js Image component import kiya

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  // ✅ await params (Next.js requirement)
  const { locale, slug } = await params;

  const blog = await getBlogBySlug(slug);

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

      {/* LCP FIXED: Standard img tag replaced with Next.js Image component + priority attribute */}
      {blog.content.featuredImage && (
        <div className="relative w-full h-[450px] mb-10">
          <Image
            src={blog.content.featuredImage}
            alt={blog.content.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
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