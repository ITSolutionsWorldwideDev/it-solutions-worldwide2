// lib/blogs.ts
import { blogModules } from "./blogIndex";

interface BlogSection {
  title?: string;
  subtitle?: string;
  content: string;
  image?: string;
}

interface BlogModule {
  title: string;
  date: string;
  sections: BlogSection[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['"’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

function getFeaturedImage(mod: BlogModule): string {
  const withImage = mod.sections.find((s) => s.image);
  return withImage?.image || "/assets/images/blogs/biggest1.webp";
}

function getExcerpt(mod: BlogModule): string {
  const first = mod.sections.find((s) => s.content);
  const text = (first?.content || "").trim();
  return text.length > 220 ? text.slice(0, 220).trim() + "..." : text;
}

function renderHTML(mod: BlogModule): string {
  return mod.sections
    .map((s) => {
      const heading = s.title
        ? `<h2>${s.title}</h2>`
        : s.subtitle
        ? `<h3>${s.subtitle}</h3>`
        : "";
      const image = s.image
        ? `<img src="${s.image}" alt="${s.title || s.subtitle || mod.title}" />`
        : "";
      const paragraphs = (s.content || "")
        .split("\n\n")
        .filter(Boolean)
        .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
        .join("");
      return `${heading}${image}${paragraphs}`;
    })
    .join("\n");
}

export interface BlogEntry {
  slug: string;
  date: string;
  content: {
    title: string;
    description: string;
    featuredImage: string;
  };
}

function toBlogEntry(mod: BlogModule): BlogEntry {
  return {
    slug: slugify(mod.title),
    date: mod.date,
    content: {
      title: mod.title,
      description: getExcerpt(mod),
      featuredImage: getFeaturedImage(mod),
    },
  };
}

export async function getAllBlogs(): Promise<BlogEntry[]> {
  return (blogModules as BlogModule[])
    .map(toBlogEntry)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogBySlug(slug: string) {
  const mod = (blogModules as BlogModule[]).find(
    (m) => slugify(m.title) === slug
  );

  if (!mod) return null;

  return {
    slug,
    date: mod.date,
    content: {
      title: mod.title,
      description: renderHTML(mod),
      featuredImage: getFeaturedImage(mod),
    },
  };
}