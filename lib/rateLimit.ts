// lib/rateLimit.ts
//
// Lightweight in-memory rate limiter for Next.js Edge middleware on Vercel.
//
// NOTE: Vercel Edge runtime instances are per-region and can be recycled,
// so this Map is not perfectly global/persistent. That's fine for the goal
// here (slowing down bots / brute force / scraping) but if you need hard,
// exact-count guarantees across all regions, swap this for Upstash Redis
// (`@upstash/ratelimit` + `@upstash/redis`) later — the call site below
// (`checkRateLimit`) is written so that swap only touches this one file.

type Bucket = {
  count: number;
  resetAt: number; // epoch ms
};

// Module-level cache: survives across requests within the same isolate.
const buckets = new Map<string, Bucket>();

// Periodically purge stale buckets so memory doesn't grow unbounded.
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupIfNeeded(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number; // epoch ms
};

/**
 * Fixed-window rate limiter.
 *
 * @param key         Unique key for this limit bucket, e.g. `${ip}:${routeGroup}`
 * @param limit       Max requests allowed within the window
 * @param windowMs    Window size in ms
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  cleanupIfNeeded(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { success: true, limit, remaining: limit - 1, resetAt };
  }

  if (existing.count >= limit) {
    return { success: false, limit, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}

/**
 * Best-effort client IP extraction on Vercel/Edge.
 *
 * IMPORTANT: `x-forwarded-for` is a client-appendable chain — a request
 * can arrive with a spoofed value already in it (e.g. "1.2.3.4"), and
 * Vercel's proxy then appends the real client IP at the END of the
 * chain, not the start. Trusting the first entry lets an attacker send
 * a different fake IP on every request and bypass the limiter entirely.
 *
 * `x-real-ip` is set directly by Vercel's proxy and can't be overwritten
 * by the client, so it's checked first. The `x-forwarded-for` fallback
 * takes the LAST entry (the proxy-appended one), not the first.
 */
export function getClientIp(headers: Headers): string {
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const parts = forwardedFor.split(",").map((p) => p.trim()).filter(Boolean);
    if (parts.length > 0) return parts[parts.length - 1];
  }

  return "unknown";
}

/**
 * Route-group based limits. Add/adjust as needed.
 * Order matters: first matching prefix wins.
 */
export const RATE_LIMIT_RULES: { prefix: string; limit: number; windowMs: number }[] = [
  // Auth / login-type endpoints: tightest, brute-force sensitive
  { prefix: "/api/auth", limit: 10, windowMs: 60_000 },
  { prefix: "/api/login", limit: 10, windowMs: 60_000 },

  // Contact / form submission endpoints: prevent spam
  { prefix: "/api/contact", limit: 5, windowMs: 60_000 },
  { prefix: "/api/career", limit: 5, windowMs: 60_000 },
  { prefix: "/api/job-applications", limit: 5, windowMs: 60_000 },
  { prefix: "/api/consultation-form", limit: 5, windowMs: 60_000 },

  // Products / general read-mostly API: more generous
  { prefix: "/api/products", limit: 60, windowMs: 60_000 },

  // Catch-all for any other /api route not matched above
  { prefix: "/api", limit: 30, windowMs: 60_000 },
];

export function getRuleForPath(pathname: string) {
  return (
    RATE_LIMIT_RULES.find((rule) => pathname.startsWith(rule.prefix)) ?? {
      prefix: "/api",
      limit: 30,
      windowMs: 60_000,
    }
  );
}