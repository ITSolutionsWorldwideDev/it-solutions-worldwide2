"use client";

import * as pdfjsLib from "pdfjs-dist";

// CDN se load karna band kiya — pdfjs-dist v5+ mein worker .mjs (ES Module) format
// mein hoti hai, jo cdnjs pe wrong path/MIME type ke sath fail ho rahi thi.
// Ab worker ko npm package se hi local bundle karte hain (Next.js/webpack isko
// static asset ke tor pe serve kar dega, koi external dependency nahi rahegi).

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;


pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export interface ParsedJobContent {
  aboutRole: string[];
  whatYoullDo: string[];
  whatYoullBring: string[];
  niceToHave: string[];
}

/**
 * PDF ko hamesha apne server-side proxy route ke through fetch karo.
 * Yeh CORS issue solve karta hai jab PDF kisi doosre domain/CDN (S3, uploads server, etc.) pe hosted ho.
 */
export async function extractPdfText(url: string): Promise<string> {
  const proxiedUrl = `/api/pdf-proxy?url=${encodeURIComponent(url)}`;

  try {
    const loadingTask = pdfjsLib.getDocument({ url: proxiedUrl });
    const pdf = await loadingTask.promise;

    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item: any) => item.str);
      fullText += strings.join(" ") + "\n";
    }

    if (!fullText.trim()) {
      console.warn(`PDF has no extractable text (likely scanned/image PDF): ${url}`);
    }

    return fullText;
  } catch (err) {
    console.error(`extractPdfText failed for url: ${url}`, err);
    throw err;
  }
}

const SECTION_ALIASES: Record<string, keyof ParsedJobContent> = {
  "position overview": "aboutRole",
  "about the role": "aboutRole",
  "job description": "aboutRole",
  "role overview": "aboutRole",
  "job overview": "aboutRole",
  "about us": "aboutRole",
  "the role": "aboutRole",
  "key responsibilities": "whatYoullDo",
  "responsibilities": "whatYoullDo",
  "what you'll do": "whatYoullDo",
  "duties": "whatYoullDo",
  "your role": "whatYoullDo",
  "core responsibilities": "whatYoullDo",
  "main responsibilities": "whatYoullDo",
  "job responsibilities": "whatYoullDo",
  "skills & requirements": "whatYoullBring",
  "skills and requirements": "whatYoullBring",
  "requirements": "whatYoullBring",
  "requirements & qualifications": "whatYoullBring",
  "requirements and qualifications": "whatYoullBring",
  "what you'll bring": "whatYoullBring",
  "qualifications": "whatYoullBring",
  "skills & qualifications": "whatYoullBring",
  "candidate profile": "whatYoullBring",
  "who you are": "whatYoullBring",
  "what we're looking for": "whatYoullBring",
  "what we offer": "niceToHave",
  "benefits": "niceToHave",
  "nice to have": "niceToHave",
  "perks": "niceToHave",
  "good to have": "niceToHave",
};

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function parseJobPdfText(rawText: string): ParsedJobContent {
  const result: ParsedJobContent = {
    aboutRole: [],
    whatYoullDo: [],
    whatYoullBring: [],
    niceToHave: [],
  };

  const text = rawText.replace(/\s+/g, " ").trim();
  if (!text) return result;

  const headerNames = Object.keys(SECTION_ALIASES).sort((a, b) => b.length - a.length);
  // Word boundary lagaya taake "requirements" jaise words kisi bade word ke andar false-match na karein
  const headerPattern = new RegExp(`\\b(${headerNames.map(escapeRegex).join("|")})\\b`, "gi");

  const matches: { key: keyof ParsedJobContent; index: number; length: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = headerPattern.exec(text)) !== null) {
    const key = SECTION_ALIASES[m[1].toLowerCase()];
    if (key) matches.push({ key, index: m.index, length: m[0].length });
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index + matches[i].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const chunk = text.slice(start, end).trim();
    if (!chunk) continue;

    const bulletItems = chunk
      .split("•")
      .map((s) => s.trim())
      .filter((s) => s.length > 3);

    if (bulletItems.length > 1) {
      result[matches[i].key].push(...bulletItems);
    } else {
      result[matches[i].key].push(chunk);
    }
  }

  return result;
}

const MARKDOWN_SECTION_ALIASES: Record<string, keyof ParsedJobContent> = {
  "about us": "aboutRole",
  "the role": "aboutRole",
  "position overview": "aboutRole",
  "about the role": "aboutRole",
  "role overview": "aboutRole",
  "job overview": "aboutRole",
  "key responsibilities": "whatYoullDo",
  "responsibilities": "whatYoullDo",
  "what you'll do": "whatYoullDo",
  "duties": "whatYoullDo",
  "requirements & qualifications": "whatYoullBring",
  "requirements and qualifications": "whatYoullBring",
  "skills & requirements": "whatYoullBring",
  "requirements": "whatYoullBring",
  "what you'll bring": "whatYoullBring",
  "qualifications": "whatYoullBring",
  "what we offer": "niceToHave",
  "benefits": "niceToHave",
  "nice to have": "niceToHave",
  "perks": "niceToHave",
};

function stripMarkdownBold(s: string): string {
  return s.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").trim();
}

export function parseMarkdownJobContent(rawContent: string): ParsedJobContent {
  const result: ParsedJobContent = {
    aboutRole: [],
    whatYoullDo: [],
    whatYoullBring: [],
    niceToHave: [],
  };

  const lines = rawContent.split(/\r?\n/).map((l) => l.trim());
  let currentKey: keyof ParsedJobContent | null = null;

  for (const line of lines) {
    if (!line || line === "---") continue;

    const headingMatch = line.match(/^#{1,6}\s*(.+)$/);
    if (headingMatch) {
      const headingText = stripMarkdownBold(headingMatch[1]).toLowerCase();
      currentKey = MARKDOWN_SECTION_ALIASES[headingText] || null;
      continue;
    }

    if (/^\*\*(job title|location|employment type)\*\*/i.test(line)) continue;

    if (!currentKey) continue;

    const bulletMatch = line.match(/^[*-]\s+(.+)$/);
    if (bulletMatch) {
      result[currentKey].push(stripMarkdownBold(bulletMatch[1]));
    } else {
      result[currentKey].push(stripMarkdownBold(line));
    }
  }

  return result;
}

export function isParsedContentEmpty(parsed: ParsedJobContent): boolean {
  return (
    parsed.aboutRole.length === 0 &&
    parsed.whatYoullDo.length === 0 &&
    parsed.whatYoullBring.length === 0 &&
    parsed.niceToHave.length === 0
  );
}