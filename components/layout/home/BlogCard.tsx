"use client"; // Next.js hydration standard ke liye safety check

import Link from "next/link";
import { BlogEntry } from "@/types/blogs";
import Image from 'next/image';

type Props = {
  post: BlogEntry;
  locale: string;
};

export default function BlogCard({ post, locale }: Props) {
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const getDescription = () => {
    if (post.content.description) return post.content.description;

    const section = post.content.sections?.find((s) => s.content);
    return section?.content || "No description available.";
  };

  const getFeaturedImage = () => {
    if (post.content.featuredImage) return post.content.featuredImage;
    const sectionWithImage = post.content.sections?.find((s) => s.image);
    return sectionWithImage?.image || "/assets/images/default-blog-image.webp";
  };

  return (
    <article
      className="bg-white shadow-lg rounded-lg p-6 border-gray-200 border flex flex-col lg:flex-row-reverse"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-full lg:w-2/4 mb-4 lg:mb-0">
        <Image
          src={getFeaturedImage()}
          alt={post.content.title}
          className="w-full h-[350px] object-cover object-center rounded-lg"
          itemProp="image"
          loading="lazy"
          quality={50}
          width={800}
          height={350}
          fetchPriority="low"
        />
      </div>
      <div className="w-full lg:w-2/4 p-4">
        <h2 className="text-lg font-bold mt-2" itemProp="headline">
          {post.content.title}
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          {new Date(post.date).toLocaleString()}
        </p>
        <p className="text-gray-600 mt-2" itemProp="description" dangerouslySetInnerHTML={{
          __html: truncateText(getDescription(), 30),
        }} />

        <div className="flex items-center mt-4">
          <Link
            href={`/blogs/${post.slug}`}
            className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors" 
            // 🔥 Fixed 1: Color Contrast ko pass karwane ke liye bg-teal-700 aur font-semibold kiya
            itemProp="url"
            aria-label={`Read more about ${post.content.title}`} 
            // 🔥 Fixed 2: Har link ko unique context diya taaki identical links ka accessibility issue solve ho sake!
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

/* import Link from "next/link";
import { BlogEntry } from "@/types/blogs";

type Props = {
  post: BlogEntry;
  locale: string;
};

export default function BlogCard({ post, locale }: Props) {
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const getDescription = () => {
    if (post.content.description) return post.content.description;
    if (post.content.sections?.length) {
      if (post.content.sections[0].content) return post.content.sections[0].content;
      if (post.content.sections[1]?.content) return post.content.sections[1].content;
    }
    return "No description available.";
  };

  const getFeaturedImage = () => {
    if (post.content.featuredImage) return post.content.featuredImage;
    const sectionWithImage = post.content.sections?.find((s) => s.image);
    return sectionWithImage?.image || "/assets/images/default-blog-image.webp";
  };

  return (
    <article
      className="bg-white shadow-lg rounded-lg p-6 border-gray-200 border flex flex-col lg:flex-row-reverse"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-full lg:w-2/4 mb-4 lg:mb-0">
        <img
          src={getFeaturedImage()}
          alt={post.content.title}
          className="w-full h-[350px] object-cover object-center rounded-lg"
          itemProp="image"
        />
      </div>
      <div className="w-full lg:w-2/4 p-4">
        <h2 className="text-lg font-bold mt-2" itemProp="headline">
          {post.content.title}
        </h2>
        <p className="text-gray-600 mt-2" itemProp="description">
          {truncateText(getDescription(), 30)}
        </p>
        <div className="flex items-center mt-4">
          <Link
            href={`/${locale}/blogs/${post.slug}`}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg"
            itemProp="url"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
} */

