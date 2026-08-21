// utils/slugify.ts

/**
 * Converts any string (e.g. a job title) into a URL-friendly slug.
 * "Oracle ERP Consultant / Specialist" -> "oracle-erp-consultant-specialist"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/[\s_]+/g, "-") // spaces/underscores -> dash
    .replace(/-+/g, "-") // collapse multiple dashes
    .replace(/^-+|-+$/g, ""); // trim leading/trailing dash
}