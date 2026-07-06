import { getMenuItems, MenuItem } from "./menu";

// 1. Updated: accept 't' as an argument to support localization
function flattenMenu(t: (key: string) => string, items: MenuItem[]): { label: string; link: string }[] {
  const result: { label: string; link: string }[] = [];
  for (const item of items) {
    if (item.link && item.link.includes("/outsourcing/hire-")) {
      result.push({ label: item.label, link: item.link });
    }
    if (item.dropdown) {
      result.push(...flattenMenu(t, item.dropdown));
    }
  }
  return result;
}

// 2. Updated: Normalized logic now lives inside the function 
// to ensure it always uses the current language context.
function getNormalizedEntries(t: (key: string) => string) {
  const flatLinks = flattenMenu(t, getMenuItems(t));
  
  return flatLinks.map((entry) => ({
    normLabel: normalize(entry.label),
    link: entry.link,
    originalLabel: entry.label,
  }));
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\b(hire|a|an|the|specialist|manager|remote|engineer|developer)\b/g, (match) => {
      if (["hire", "a", "an", "the"].includes(match)) return "";
      return match;
    })
    .trim()
    .replace(/\s+/g, " ")
    .replace(/s\b/g, "");
}

function similarityScore(a: string, b: string): number {
  const wordsA = new Set(a.split(" ").filter(Boolean));
  const wordsB = new Set(b.split(" ").filter(Boolean));
  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  let overlap = 0;
  for (const w of wordsA) {
    if (wordsB.has(w)) overlap++;
  }
  const union = new Set([...wordsA, ...wordsB]).size;
  return overlap / union;
}

// 3. Updated: Now expects 't' to be passed from the component
export function findStaffingPathByTitle(t: (key: string) => string, title: string): string | null {
  const normTitle = normalize(title);
  const entries = getNormalizedEntries(t);

  const exact = entries.find((e) => e.normLabel === normTitle);
  if (exact) return exact.link;

  let bestMatch: { link: string; score: number } | null = null;
  for (const entry of entries) {
    const score = similarityScore(normTitle, entry.normLabel);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { link: entry.link, score };
    }
  }

  if (bestMatch && bestMatch.score >= 0.5) {
    return bestMatch.link;
  }

  return null;
}