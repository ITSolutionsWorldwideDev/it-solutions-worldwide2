// app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// Slug se local image mapping
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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const id = searchParams.get("id");

  try {
    if (slug || id) {
      const query = `
        SELECT slug, title, content, imageurl, created_at
        FROM blogs
        WHERE ${slug ? "slug = $1" : "blog_id = $1"}
        LIMIT 1
      `;
      const result = await pool.query(query, [slug ?? id]);

      if (!result.rows.length) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      const blog = result.rows[0];
      return NextResponse.json({
        slug: blog.slug,
        date: blog.created_at,
        content: {
          title: blog.title,
          description: blog.content,
          featuredImage: getLocalImage(blog.slug), // ← local image
        },
      });
    }

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 20);
    const offset = (page - 1) * limit;

    const [blogs, count] = await Promise.all([
      pool.query(
        `SELECT blog_id, slug, title, content, imageurl, created_at
         FROM blogs WHERE published = 1
         ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
        [limit, offset]
      ),
      pool.query(`SELECT COUNT(*) FROM blogs WHERE published = 1`),
    ]);

    return NextResponse.json({
      items: blogs.rows.map((row) => ({
        slug: row.slug,
        date: row.created_at,
        content: {
          title: row.title,
          description: row.content,
          featuredImage: getLocalImage(row.slug), // ← local image
        },
      })),
      totalResults: Number(count.rows[0].count),
      pageSize: limit,
      currentPage: page,
      totalPages: Math.ceil(Number(count.rows[0].count) / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}