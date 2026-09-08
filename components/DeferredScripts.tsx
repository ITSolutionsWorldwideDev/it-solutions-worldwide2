"use client";
import { useEffect, useState } from "react";

export default function DeferredScripts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadScripts = () => {
      if (loaded) return;
      setLoaded(true);

      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("touchstart", loadScripts);

      // 1. Google Tag Manager
      const gtmScript = document.createElement("script");
      gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PH8FNRK6";
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      // 2. Meta Pixel
      const fbScript = document.createElement("script");
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=this.loadTruthy=true;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1766535074073515');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);

      // 3. Microsoft Clarity
      const clarityScript = document.createElement("script");
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wgjwbc5ugr");
      `;
      document.head.appendChild(clarityScript);
    };

    // User interaction or 4s fallback timer
    const timer = setTimeout(loadScripts, 4000);

    window.addEventListener("scroll", loadScripts, { once: true });
    window.addEventListener("mousemove", loadScripts, { once: true });
    window.addEventListener("touchstart", loadScripts, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
    };
  }, [loaded]);

  return null;
}