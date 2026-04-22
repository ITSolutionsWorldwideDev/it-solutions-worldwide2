// app/api/sitemap-slugs/route.ts
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {

    console.log("here for slugs")
  try {
    // Fetch only published blog slugs for sitemap
    const result = await pool.query(
      `SELECT slug FROM blogs WHERE published = 1 ORDER BY created_at DESC`
    );
    console.log("fetch blogs data",result)

    const slugs = result.rows.map((row) => row.slug);
console.log("slugs",slugs)
    return NextResponse.json({ slugs });
  } catch (error) {
    console.error("Sitemap slugs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch slugs" },
      { status: 500 }
    );
  }
}