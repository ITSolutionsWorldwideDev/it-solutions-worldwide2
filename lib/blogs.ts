import { unstable_cache } from "next/cache";
import pool from "@/lib/db";

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
      // Yahan path add karein agar DB mein sirf filename hai
      featuredImage: `/assets/images/blogs/${blog.imageurl}`, 
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
