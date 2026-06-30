
const BLOG_SLUG =
  "it-procurement-guide-process-types-and-best-practices-for-tech-teams";

/** Decode over-encoded paths (e.g. %2520 → space). */
export function normalizeLegacyPathname(pathname: string): string {
  let path = pathname;

  try {
    for (let i = 0; i < 3 && path.includes("%"); i++) {
      const decoded = decodeURIComponent(path);

      if (decoded === path) {
        break;
      }

      path = decoded;
    }
  } catch {
    // Keep original path if decoding fails
  }

  return path;
}

/** Exact legacy paths (lowercase keys). Values are full redirect paths. */
const EXACT_REDIRECTS: Record<string, string> = {
  "/index": "/",
  "/index/": "/",
  "/index.html": "/",
  "/index.htm": "/",
  "/$": "/",
  "/en/$": "/en",
  "/nl/$": "/nl",

  "/contact": "/en/contact-us",
  "/contact/": "/en/contact-us",
  "/contacts": "/en/contact-us",
  "/contacts/": "/en/contact-us",

  "/en/contact": "/en/contact-us",
  "/en/contact/": "/en/contact-us",
  "/nl/contact": "/nl/contact-us",
  "/nl/contact/": "/nl/contact-us",
  "/en/consultation": "/en/contact-us",
  "/en/consultation/": "/en/contact-us",
  "/consultation": "/en/contact-us",
  "/consultation/": "/en/contact-us",
  "/terms-and-conditions": "/en/privacy-policy",
  "/terms-and-conditions/": "/en/privacy-policy",
  "/en/terms-and-conditions": "/en/privacy-policy",
  "/en/terms-and-conditions/": "/en/privacy-policy",
  "/apple-app-site-association": "/en",
  "/apple-app-site-association/": "/en",
  "/en/apple-app-site-association": "/en",
  "/en/apple-app-site-association/": "/en",
  "/en/erp-implementation": "/en/it-support/erp-implementation",
  "/en/erp-solutions": "/en/it-support/erp-implementation",
  "/en/it-support/automation": "/en/it-support/automation-services",
  "/en/scm-services/wms-implementation": "/en/logistics/smart-warehouse-solutions",
  "/en/Backoffice-Assistant": "/en/career",
  "/en/Oracle-Fusion-TMS-Implementation-Project-Manager": "/en/career",
  "/en/Desinging": "/en/digital-services/website-design-&-development",

  [`/blogs/${BLOG_SLUG}`]: `/en/blogs/${BLOG_SLUG}`,
  [`/blogs/${BLOG_SLUG}/`]: `/en/blogs/${BLOG_SLUG}`,

  "/erp-solutions": "/en/it-support/erp-implementation",

  "/automation-services": "/en/it-support/automation-services",
  "/automation": "/en/it-support/automation-services",

  "/software-development": "/en/it-support/software-development",

  "/seo-services": "/en/digital-services/seo-services",
  "/social-media-marketing": "/en/digital-services/social-media-marketing",

  "/website-design-&-development":
    "/en/digital-services/website-design-&-development",

  "/remote-&-virtual-staffing":
    "/en/staffing-support/remote-&-virtual-staffing",

  "/temporary-staffing": "/en/staffing-support/temporary-staffing",

  "/specialized-industry-staffing":
    "/en/staffing-support/specialized-industry-staffing",

  "/smart-warehouse-solutions": "/en/logistics/smart-warehouse-solutions",

  "/warehouse-design-&-layouts":
    "/en/logistics/smart-warehouse-solutions",

  "/scm-execution": "/en/scm-services/scm-execution",

  "/supply-chain-performance-check":
    "/en/scm-services/supply-chain-performance-check",

  "/supply-chain-optimization-study":
    "/en/scm-services/supply-chain-optimization-study",

  "/lean-&-six-sigma-implementation": "/en/logistics",

  "/change-management": "/en/scm-services/business-consultancy",

  "/big-data-management": "/en/oracle-cloud",

  "/cloud transformation": "/en/oracle-cloud",
  "/cloud%20transformation": "/en/oracle-cloud",

  "/six sigma implementation": "/en/logistics",
  "/six%20sigma%20implementation": "/en/logistics",

  "/operational excellence": "/en/scm-services/business-consultancy",
  "/operational%20excellence":
    "/en/scm-services/business-consultancy",

  "/wms_implementation.html":
    "/en/logistics/smart-warehouse-solutions",

  "/career.html": "/en/career",

  "/supply_chain_optimization.html":
    "/en/scm-services/supply-chain-optimization-study",

  "/warehouse_design":
    "/en/logistics/smart-warehouse-solutions",

  "/supply-chain-optimization-study.html":
    "/en/scm-services/supply-chain-optimization-study",
};

const LOCALE_LANDING_PAGE =
  /^\/(en|nl)\/(travel-website-design-netherlands|clothing-store-website-design-netherlands|auto-parts-website-development|motorcycle-website-development|beauty-salon-website-netherlands|custom-dental-website-netherlands)\/?$/i;

const BLOG_WITHOUT_LOCALE = /^\/blogs\/([^/]+)\/?$/i;

export function getLegacyRedirect(pathname: string): string | null {
  const normalized = normalizeLegacyPathname(pathname);
  const key = normalized.toLowerCase();

  const exactRedirect = EXACT_REDIRECTS[key];

  if (exactRedirect) {
    return exactRedirect;
  }

  const localeIndex = normalized.match(
    /^\/(en|nl)\/index(?:\.html?)?\/?$/i
  );

  if (localeIndex) {
    return `/${localeIndex[1].toLowerCase()}`;
  }

  const landing = normalized.match(LOCALE_LANDING_PAGE);

  if (landing) {
    return `/${landing[1].toLowerCase()}/digital-services/website-design-&-development`;
  }

  const blog = normalized.match(BLOG_WITHOUT_LOCALE);

  if (blog) {
    return `/en/blogs/${blog[1]}`;
  }

  return null;
}

/** Paths that should return 410 Gone (removed content). */
export function isGonePath(pathname: string): boolean {
  const lower = pathname.toLowerCase();

  if (lower.startsWith("/.well-known")) {
    return true;
  }

  if (/^\/job\/.*\.pdf$/i.test(lower)) {
    return true;
  }

  return false;
}