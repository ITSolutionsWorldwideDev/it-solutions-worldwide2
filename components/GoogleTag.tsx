// components/GoogleTag.tsx

"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "@/lib/cookieConsent";

export default function GoogleTag({ tagId }: { tagId: string }) {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = getConsent();
      // Enable based on analytics (or advertising if needed)
      setEnabled(!!consent?.analytics);
      // setEnabled(!!consent?.advertising);
    };

    checkConsent();
    window.addEventListener("cookie-consent-changed", checkConsent);

    return () =>
      window.removeEventListener("cookie-consent-changed", checkConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Load gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
        strategy="lazyOnload"
      />

      {/* Initialize gtag */}
      <Script
        id="google-tag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${tagId}');
          `,
        }}
      />
    </>
  );
}