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
  title_nl?: string;
  sections_nl?: BlogSection[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['"’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

function getLocalizedContent(mod: BlogModule, locale: string) {
  const useDutch = locale === "nl" && mod.title_nl && mod.sections_nl;
  return {
    title: useDutch ? mod.title_nl! : mod.title,
    sections: useDutch ? mod.sections_nl! : mod.sections,
  };
}

function getFeaturedImage(sections: BlogSection[]): string {
  const withImage = sections.find((s) => s.image);
  return withImage?.image || "/assets/images/blogs/biggest1.webp";
}

function getExcerpt(sections: BlogSection[]): string {
  const first = sections.find((s) => s.content);
  const text = (first?.content || "").trim();
  return text.length > 220 ? text.slice(0, 220).trim() + "..." : text;
}

function renderHTML(sections: BlogSection[], title: string, featuredImage: string): string {
  let usedFeaturedImage = false;

  return sections
    .map((s) => {
      const heading = s.title
        ? `<h2>${s.title}</h2>`
        : s.subtitle
        ? `<h3>${s.subtitle}</h3>`
        : "";

      let image = "";
      if (s.image) {
        if (s.image === featuredImage && !usedFeaturedImage) {
          usedFeaturedImage = true;
        } else {
          image = `<img src="${s.image}" alt="${s.title || s.subtitle || title}" />`;
        }
      }

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

function toBlogEntry(mod: BlogModule, locale: string): BlogEntry {
  const { title, sections } = getLocalizedContent(mod, locale);
  return {
    slug: slugify(mod.title), // slug hamesha English title se banta hai, URL consistent rahe
    date: mod.date,
    content: {
      title,
      description: getExcerpt(sections),
      featuredImage: getFeaturedImage(sections),
    },
  };
}

export async function getAllBlogs(locale: string = "en"): Promise<BlogEntry[]> {
  return (blogModules as BlogModule[])
    .map((mod) => toBlogEntry(mod, locale))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogBySlug(slug: string, locale: string = "en") {
  const mod = (blogModules as BlogModule[]).find(
    (m) => slugify(m.title) === slug
  );

  if (!mod) return null;

  const { title, sections } = getLocalizedContent(mod, locale);
  const featuredImage = getFeaturedImage(sections);

  return {
    slug,
    date: mod.date,
    content: {
      title,
      description: renderHTML(sections, title, featuredImage),
      featuredImage,
    },
  };
}