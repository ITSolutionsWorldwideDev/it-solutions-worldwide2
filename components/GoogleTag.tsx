"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getClientConsent } from "@/lib/cookieConsent";

export default function GoogleTag({ tagId }: { tagId: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = getClientConsent();

      // Enable Google Analytics only if analytics consent is granted
      setEnabled(!!consent?.analytics);

      // If you ever want to use advertising consent instead:
      // setEnabled(!!consent?.advertising);
    };

    checkConsent();

    window.addEventListener("cookie-consent-changed", checkConsent);

    return () => {
      window.removeEventListener("cookie-consent-changed", checkConsent);
    };
  }, []);

  if (!enabled || !tagId) return null;

  return (
    <>
      {/* Load Google Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
        strategy="lazyOnload"
      />

      {/* Initialize Google Analytics */}
      <Script
        id="google-tag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${tagId}', {
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}