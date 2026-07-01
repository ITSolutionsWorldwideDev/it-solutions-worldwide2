// components/GoogleTagManager.tsx
"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "@/lib/cookieConsent";

function useAnalyticsConsent() {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = getConsent();
      setEnabled(!!consent?.analytics);
    };

    checkConsent();
    window.addEventListener("cookie-consent-changed", checkConsent);

    return () =>
      window.removeEventListener("cookie-consent-changed", checkConsent);
  }, []);

  return enabled;
}

export function GoogleTagManagerScript({ gtmId }: { gtmId: string }) {
  const enabled = useAnalyticsConsent();
  if (!enabled) return null;

  return (
    <Script
      id="gtm-base"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `,
      }}
    />
  );
}

export function GoogleTagManagerNoScript({ gtmId }: { gtmId: string }) {
  const enabled = useAnalyticsConsent();
  if (!enabled) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}