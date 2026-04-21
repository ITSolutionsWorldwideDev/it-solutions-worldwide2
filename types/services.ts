import { ReactElement } from "react";

// ─── Atomic types ────────────────────────────────────────────────────────────

export interface FeatureBadge {
  /** Lucide (or any) icon element */
  icon: ReactElement;
  label: string;
  /** Tailwind background colour class, e.g. "bg-blue-500" */
  bg: string;
}

export interface ServiceCard {
  /** Lucide (or any) icon element */
  icon: ReactElement;
  title: string;
  /** Tailwind background colour class, e.g. "bg-blue-500" */
  bg: string;
  items: string[];
}

export interface PricingPlan {
  name: string;
  description: string;
  /** Formatted price string, e.g. "€29.95" */
  price: string;
  /** Period label shown after price, e.g. "/hour" or "/40 hours/week" */
  period: string;
  /** Optional promotional note; null when not applicable */
  note?: string | null;
  features: string[];
  /** CTA button label */
  cta: string;
  /** Whether this plan should be visually highlighted (recommended / most popular) */
  highlighted: boolean;
}

// ─── Page config ─────────────────────────────────────────────────────────────

export interface ServicePageEntry {
  /** Main H1 / hero heading */
  heading: string;
  /** Supporting paragraph shown beneath the heading */
  subText: string;
  /**
   * Slug that identifies the service used internally / for routing,
   * e.g. "virtual-assistant", "full-stack-developer".
   */
  service: string;

  /** Icon + label badges rendered in the hero or feature strip */
  features: FeatureBadge[];

  /** Cards listing the specific capabilities offered */
  services: ServiceCard[];

  /** Pricing tier cards */
  plans: PricingPlan[];

  // ── Optional legacy / commented-out fields kept for future use ──
  trust?: string;
  help?: string;
  dedication?: string;
}

// ─── Top-level map ────────────────────────────────────────────────────────────

/**
 * Keys are the URL slugs used in the router, e.g. "hire-virtual-assistant".
 */
export type ServicePageConfig = Record<string, ServicePageEntry>;