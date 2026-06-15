import { unstable_cache } from "next/cache";
import pool from "@/lib/db";

// ✅ Yeh function add karo (same as route.ts wala)
function getLocalImage(slug: string): string {
  const map: Record<string, string> = {
    "why-linkedin-is-critical-for-b2b-industries": "/assets/images/blogs/linkedin.webp",
    "what-supply-chains-looked-like-before-digital-transformation": "/assets/images/blogs/supply1.webp",
    "the-future-of-supply-chains-resilience-technology-and-global-impact": "/assets/images/blogs/supply2.webp",
    "why-workflow-automation-matters-for-hr": "/assets/images/blogs/work1.webp",
    "top-10-strategies-to-optimize-your-supply-chain-in-2025": "/assets/images/blogs/supply3.webp",
    "it-procurement-guide-process-types-best-practices-for-tech-teams": "/assets/images/blogs/procurement-blog-1.webp",
    "omnichannel-strategies-that-drive-engagement-and-growth-in-2025": "/assets/images/blogs/omnichannel.webp",
    "last-mile-delivery-challenges-and-how-to-overcome-them": "/assets/images/blogs/lastmiled.webp",
  };
  return map[slug] || "/assets/images/blogs/biggest1.webp";
}

async function fetchBlogBySlug(slug: string) {
  const query = `
    SELECT
      slug,
      title,
      content,
      imageurl,
      created_at
    FROM blogs
    WHERE slug = $1
    LIMIT 1
  `;

  const result = await pool.query(query, [slug]);

  if (!result.rows.length) {
    return null;
  }

  const blog = result.rows[0];

  return {
    slug: blog.slug,
    date: blog.created_at,
    content: {
      title: blog.title,
      description: blog.content,
      featuredImage: getLocalImage(blog.slug), // ✅ Fix: slug se image lo
    },
  };
}

export async function getBlogBySlug(slug: string) {
  const cached = unstable_cache(
    () => fetchBlogBySlug(slug),
    [`blog-${slug}`],
    { revalidate: 300, tags: [`blog-${slug}`] },
  );

  return cached();
}