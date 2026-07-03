"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getClientConsent } from "@/lib/cookieConsent";

function useAnalyticsConsent() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkConsent = () => {
      const consent = getClientConsent();
      setEnabled(!!consent?.analytics);
    };

    checkConsent();

    window.addEventListener("cookie-consent-changed", checkConsent);

    return () => {
      window.removeEventListener("cookie-consent-changed", checkConsent);
    };
  }, []);

  return { mounted, enabled };
}

export function GoogleTagManagerScript({ gtmId }: { gtmId: string }) {
  const { mounted, enabled } = useAnalyticsConsent();

  if (!mounted || !enabled) return null;

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){
w[l]=w[l]||[];
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),
dl=l!='dataLayer'?'&l='+l:'';
j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
        `,
      }}
    />
  );
}

export function GoogleTagManagerNoScript({ gtmId }: { gtmId: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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