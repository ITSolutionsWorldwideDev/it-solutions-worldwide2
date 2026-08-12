import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type RoleItem = {
  title: string;
  description: string;
  link?: string;
};

type RolesData = {
  title: string;
  intro: string;
  roles: Record<string, RoleItem>;
};

/*
|--------------------------------------------------------------------------
| EXACT LINKS
|--------------------------------------------------------------------------
| IMPORTANT:
| The key here must match the key in common.json.
| Links are NOT based on card order/index.
|--------------------------------------------------------------------------
*/

const EXACT_LINKS: Record<string, string> = {
  // =========================================================
  // SCM SERVICES
  // =========================================================

  scm_consultancy:
    "/scm-services/scm-consultancy",

  business_consultancy:
    "/scm-services/business-consultancy",

  supply_chain_performance_check:
    "/scm-services/supply-chain-performance-check",

  smart_warehouse_solutions:
    "/logistics/smart-warehouse-solutions",


  // =========================================================
  // SMART WAREHOUSING SOLUTIONS
  // =========================================================

  automated_storage:
    "/logistics/smart-warehouse-solutions/automated-storage-retrieval-systems",

  iot_tracking:
    "/logistics/smart-warehouse-solutions/iot-real-time-tracking",

  smart_order_fulfilment:
    "/logistics/smart-warehouse-solutions/smart-order-fulfilment",

  cloud_blockchain_warehousing:
    "/logistics/smart-warehouse-solutions/cloud-blockchain-warehousing",

  wms_implementation:
    "/logistics/smart-warehouse-solutions/wms-selection-implementation",

  ai_demand_forecasting:
    "/logistics/smart-warehouse-solutions/ai-demand-inventory-forecasting",


  // =========================================================
  // DIGITAL SERVICES
  // =========================================================

  website_design_development:
    "/digital-services/website-design-development",

  ecommerce_development:
    "/digital-services/ecommerce-development",

  seo_services:
    "/digital-services/seo-services",

  ppc_advertising:
    "/digital-services/ppc-advertising",

  social_media_marketing:
    "/digital-services/social-media-marketing",

  software_development:
    "/it-support/software-development",
};


export default function CategoryRoles({
  roles,
  locale,
}: {
  roles: RolesData;
  locale: string;
}) {
  /*
  |--------------------------------------------------------------------------
  | Safety check
  |--------------------------------------------------------------------------
  */

  if (
    !roles ||
    typeof roles.roles !== "object" ||
    roles.roles === null
  ) {
    return null;
  }


  /*
  |--------------------------------------------------------------------------
  | Clean locale
  |--------------------------------------------------------------------------
  | Prevent:
  | //en
  | /en/
  | en/
  |--------------------------------------------------------------------------
  */

  const cleanLocale = locale
    ? locale.replace(/^\/|\/$/g, "")
    : "";


  return (
    <section
      className="py-14 px-4 bg-white"
      id="roles"
    >

      {/* =====================================================
          SECTION TITLE
      ===================================================== */}

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        <span className="text-teal-500">
          {roles.title}
        </span>
      </h2>


      {/* =====================================================
          SECTION INTRO
      ===================================================== */}

      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12">
        {roles.intro}
      </p>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          justify-items-center
        "
      >

        {Object.entries(roles.roles).map(
          ([key, role]) => {

            const typedRole = role as RoleItem;


            /*
            |--------------------------------------------------------------------------
            | GET URL BY KEY
            |--------------------------------------------------------------------------
            |
            | Example:
            |
            | website_design_development
            |          ↓
            | /digital-services/website-design-development
            |
            | automated_storage
            |          ↓
            | /logistics/smart-warehouse-solutions/automated-storage-retrieval-systems
            |
            |--------------------------------------------------------------------------
            */

            const targetLink =
              EXACT_LINKS[key] ||
              typedRole.link ||
              "#";


            /*
            |--------------------------------------------------------------------------
            | BUILD FINAL LOCALE URL
            |--------------------------------------------------------------------------
            |
            | Example:
            |
            | locale = en
            | targetLink = /digital-services/seo-services
            |
            | Result:
            |
            | /en/digital-services/seo-services
            |--------------------------------------------------------------------------
            */

            const href =
              targetLink === "#"
                ? "#"
                : cleanLocale
                  ? `/${cleanLocale}${targetLink}`
                  : targetLink;


            /*
            |--------------------------------------------------------------------------
            | CARD LABEL
            |--------------------------------------------------------------------------
            */

            const label = `Explore ${typedRole.title}`;


            return (
              <div
                key={key}
                className="
                  border
                  border-gray-200
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  gap-4
                  hover:shadow-lg
                  transition-shadow
                  duration-300
                  w-full
                  max-w-sm
                "
              >

                {/* =================================================
                    CARD TITLE
                ================================================= */}

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                    leading-tight
                  "
                >
                  {typedRole.title}
                </h3>


                {/* =================================================
                    CARD DESCRIPTION
                ================================================= */}

                <p
                  className="
                    text-gray-500
                    leading-relaxed
                    flex-1
                  "
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {typedRole.description}
                </p>


                {/* =================================================
                    CARD LINK
                ================================================= */}

                <Link
                  href={href}
                  className="
                    inline-flex
                    items-center
                    text-sm
                    font-semibold
                    text-teal-500
                    hover:text-teal-700
                    transition-colors
                    mt-2
                  "
                >
                  {label}

                  <ChevronRight className="size-4 ml-1" />
                </Link>

              </div>
            );
          }
        )}

      </div>

    </section>
  );
}