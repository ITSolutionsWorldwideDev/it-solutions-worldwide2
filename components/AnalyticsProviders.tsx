// components/AnalyticsProviders.tsx
"use client";

import { MetaPixelScript, MetaPixelNoScript } from "@/components/MetaPixel";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import GoogleTag from "@/components/GoogleTag";

// Scripts only — safe to render inside <head>
export function AnalyticsScripts() {
  return (
    <>
      <MetaPixelScript pixelId="1766535074073515" />
      <GoogleTagManagerScript gtmId="GTM-PH8FNRK6" />
      <GoogleTag tagId="GT-TQKZR4LS" />
    </>
  );
}

// Noscript fallbacks only — must render at top of <body>
export function AnalyticsNoScripts() {
  return (
    <>
      <MetaPixelNoScript pixelId="1766535074073515" />
      <GoogleTagManagerNoScript gtmId="GTM-PH8FNRK6" />
    </>
  );
}