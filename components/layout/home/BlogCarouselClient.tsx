// components/layout/home/BlogCarouselClient.tsx
"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "./BlogCard";
import type { BlogEntry } from "@/types/blogs";
import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";
interface ApiResponse {
  items: BlogEntry[];
  totalPages: number;
  currentPage: number;
}

const PAGE_SIZE = 5;

export default function BlogCarouselClient({ locale }: { locale: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  
  // Track mounting state to handle safe hydration transitions
  const [isMounted, setIsMounted] = useState(false);
  const t = locale === "nl" ? nlCommon.blog : enCommon.blog;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const load = async () => {
      try {
        setLoading(true);

      const res = await fetch(
  `/api/blogs?page=${page}&limit=${PAGE_SIZE}&locale=${locale}`,
  { cache: "no-store" }
);

        if (!res.ok) {
          setBlogs([]);
          return;
        }

        const data: ApiResponse = await res.json();
        setBlogs(Array.isArray(data?.items) ? data.items : []);
      } catch (error) {
        console.error("Failed to load blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, isMounted]);

  // CRITICAL FIX: Match the server's streaming text block perfectly to clear hydration checks
 if (!isMounted) {
    return <p>{t.loading}</p>;
}

  return (
    <div className="container xl:max-w-[1200px] md:px-5 mx-auto py-10 relative">
      <div className="flex justify-between items-center mb-6 px-4 pr-5 md:pr-0 md:px-0 relative">
        <div>
          <p className="text-sm uppercase tracking-wider mb-2 text-gray-500">
  {t.label}
</p>
<p className="text-teal-700 text-3xl font-bold">
  {t.heading}
</p>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".blog-prev-btn",
          nextEl: ".blog-next-btn",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="relative"
      >
        {blogs.map((post, index) => (
          <SwiperSlide key={`blog-slide-${index}`}>
            <BlogCard post={post} locale={locale} />
          </SwiperSlide>
        ))}
      </Swiper>
<div className="absolute top-16 right-4 flex gap-2 z-40">
  {/* Previous Slide Button */}
  <button
    className={`blog-prev-btn w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
    ${
      activeIndex === 0
        ? "bg-gray-300 text-white cursor-not-allowed"
        : "bg-teal-500 text-white"
    }`}
    disabled={activeIndex === 0}
    aria-label="Previous slide" 
  >
    ←
  </button>

  {/* Next Slide Button */}
  <button
    className={`blog-next-btn w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
    ${
      blogs.length === 0 || activeIndex === blogs.length - 1
        ? "bg-gray-300 text-white cursor-not-allowed"
        : "bg-teal-500 text-white"
    }`}
    disabled={blogs.length === 0 || activeIndex === blogs.length - 1}
    aria-label="Next slide" 
  >
    →
  </button>
</div>
    </div>
  );
}