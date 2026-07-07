"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/layout/home/BlogCard";
import { BlogEntry } from "@/types/blogs";

interface ApiResponse {
  items: BlogEntry[];      // Ensure this matches your API return
  totalPages: number;
  currentPage: number;
  totalResults: number;    // Added based on your API code
}

const PAGE_SIZE = 20;

export default function BlogsClient({ locale, title }: { locale: string; title: string }) {
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const load = async () => {
    try {
      const res = await fetch(`/api/blogs?page=1&limit=${PAGE_SIZE}&locale=${locale}`);
      const data: ApiResponse = await res.json();
      setBlogs(data.items || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };
  load();
}, [locale]);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} post={blog} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="text-center">No published blogs found.</p>
      )}
    </div>
  );
}