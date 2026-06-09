"use client";

import MetaPixel from "@/components/MetaPixel";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTag from "@/components/GoogleTag";

export default function AnalyticsProviders() {
  return (
    <>
      <MetaPixel pixelId="1766535074073515" />
      <GoogleTagManager gtmId="GTM-PH8FNRK6" />
      <GoogleTag tagId="GT-TQKZR4LS" />
    </>
  );
}
