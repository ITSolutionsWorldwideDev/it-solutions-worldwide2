// lib/form-security.ts
//
// Shared helpers for all form API routes (contact, career, enquiry).
// Har route mein duplicate karne ke bajaye yahan se import karo.

/**
 * HTML-escape user input before putting it into an email body.
 * Bina iske koi bhi user apne message mein <a href="..."> ya <script>
 * daal ke aapke inbox mein phishing link inject kar sakta hai.
 */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Same as escapeHtml but newlines ko <br/> bana deta hai — message /
 * textarea fields ke liye, taake formatting bachi rahe.
 */
export function escapeHtmlMultiline(value: unknown): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

/**
 * Header injection guard. Subject / from / replyTo mein CR-LF daal ke
 * attacker extra headers (Bcc:) inject kar sakta hai.
 */
export function sanitizeHeader(value: unknown, maxLength = 150): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/[\r\n\t]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** Trim + hard length cap, so ek request se 10 MB text na aa jaye. */
export function clean(value: unknown, maxLength: number): string {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, maxLength);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

export function isValidEmail(value: string): boolean {
  return value.length <= 150 && EMAIL_RE.test(value);
}

export function isValidPhone(value: string): boolean {
  return PHONE_RE.test(value);
}

/**
 * Honeypot check — form mein ek hidden field rakho (e.g. name="website").
 * Real user usse kabhi fill nahi karega, bots karenge.
 */
export function isBot(honeypotValue: unknown): boolean {
  return typeof honeypotValue === "string" && honeypotValue.trim().length > 0;
}

/** SMTP env vars maujood hain ya nahi — startup pe fail fast. */
export function assertSmtpConfig(): void {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing SMTP configuration: ${missing.join(", ")}`);
  }
}

export const isDev = process.env.NODE_ENV === "development";