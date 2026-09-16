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

// ---------------------------------------------------------------------------
// Generic field validator — ek hi schema se saare routes (contact, enquiry,
// career) apni fields clean + validate kar sakte hain. Isse har route mein
// alag-alag "message.length < 10" jaisi hardcoded checks nahi likhni padtin,
// aur ek form mein field required hai dusre mein nahi — is tarah ki
// inconsistency (jo pehle About Us form mein bug ban gayi thi) nahi hogi.
//
// Usage:
//   const { values, errors } = validateFields(data, {
//     name:    { type: "text",  required: true, minLength: 2, maxLength: 100 },
//     email:   { type: "email", required: true, maxLength: 150 },
//     phone:   { type: "phone", required: false, maxLength: 20 },
//     message: { type: "text",  required: false, minLength: 10, maxLength: 2000 },
//   });
//   if (errors.length > 0) return NextResponse.json({ error: "..." }, { status: 400 });
// ---------------------------------------------------------------------------

export type FieldType = "text" | "email" | "phone";

export type FieldRule = {
  type: FieldType;
  required?: boolean;
  minLength?: number;
  maxLength: number;
};

export type FieldSchema = Record<string, FieldRule>;

export function validateFields(
  data: Record<string, unknown>,
  schema: FieldSchema
): { values: Record<string, string>; errors: string[] } {
  const values: Record<string, string> = {};
  const errors: string[] = [];

  for (const [key, rule] of Object.entries(schema)) {
    const value = clean(data[key], rule.maxLength);
    values[key] = value;

    // Empty + not required = valid, skip further checks (e.g. optional phone).
    if (!value) {
      if (rule.required) errors.push(key);
      continue;
    }

    if (rule.minLength && value.length < rule.minLength) {
      errors.push(key);
      continue;
    }

    if (rule.type === "email" && !isValidEmail(value)) {
      errors.push(key);
    }

    if (rule.type === "phone" && !isValidPhone(value)) {
      errors.push(key);
    }
  }

  return { values, errors };
}