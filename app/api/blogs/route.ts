// app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getAllBlogs } from "@/lib/blogs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);

  try {
    const allBlogs = await getAllBlogs();
    const totalResults = allBlogs.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = allBlogs.slice(start, end);

    return NextResponse.json({
      items,
      totalResults,
      currentPage: page,
      totalPages: Math.ceil(totalResults / limit),
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}