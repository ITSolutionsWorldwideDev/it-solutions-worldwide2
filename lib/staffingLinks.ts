import { menuItems, MenuItem } from "./menu";

// menu.ts se saare "hire-*" links flatten karke ek label->link map banao
function flattenMenu(items: MenuItem[]): { label: string; link: string }[] {
  const result: { label: string; link: string }[] = [];
  for (const item of items) {
    if (item.link && item.link.includes("/outsourcing/hire-")) {
      result.push({ label: item.label, link: item.link });
    }
    if (item.dropdown) {
      result.push(...flattenMenu(item.dropdown));
    }
  }
  return result;
}

const FLAT_HIRE_LINKS = flattenMenu(menuItems);

// Normalize: lowercase, punctuation hatao, common filler words hatao, plural 's' hatao
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\b(hire|a|an|the|specialist|manager|remote|engineer|developer)\b/g, (match) => {
      // "engineer/developer/specialist/manager" ko rakhna hai role-distinguishing ke liye,
      // sirf "hire/a/an/the" hatao
      if (["hire", "a", "an", "the"].includes(match)) return "";
      return match;
    })
    .trim()
    .replace(/\s+/g, " ")
    .replace(/s\b/g, ""); // trailing plural 's' hatao har word se
}

// Har flattened link ka normalized label pre-compute karo
const NORMALIZED_ENTRIES = FLAT_HIRE_LINKS.map((entry) => ({
  normLabel: normalize(entry.label),
  link: entry.link,
  originalLabel: entry.label,
}));

// Word-overlap score se best match dhoondo (substring-contains se zyada reliable)
function similarityScore(a: string, b: string): number {
  const wordsA = new Set(a.split(" ").filter(Boolean));
  const wordsB = new Set(b.split(" ").filter(Boolean));
  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  let overlap = 0;
  for (const w of wordsA) {
    if (wordsB.has(w)) overlap++;
  }
  // Jaccard-style score: overlap / union
  const union = new Set([...wordsA, ...wordsB]).size;
  return overlap / union;
}

export function findStaffingPathByTitle(title: string): string | null {
  const normTitle = normalize(title);

  // 1. Exact normalized match
  const exact = NORMALIZED_ENTRIES.find((e) => e.normLabel === normTitle);
  if (exact) return exact.link;

  // 2. Best word-overlap match (threshold ke saath, galat match avoid karne ke liye)
  let bestMatch: { link: string; score: number } | null = null;
  for (const entry of NORMALIZED_ENTRIES) {
    const score = similarityScore(normTitle, entry.normLabel);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { link: entry.link, score };
    }
  }

  // Sirf tab return karo jab score kaafi confident ho (50%+ words match)
  if (bestMatch && bestMatch.score >= 0.5) {
    return bestMatch.link;
  }

  return null;
}