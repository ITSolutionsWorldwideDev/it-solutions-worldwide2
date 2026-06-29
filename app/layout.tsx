import "./globals.css";
import { Lexend } from "next/font/google";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import GoogleTagManager from "@/components/GoogleTagManager";
import Script from "next/script";

const PageUpButton = dynamic(() => import("@/components/ui/PageUpButton"));

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itsolutionsworldwide.com"),
  title: {
    default: "Smart IT & Business Services in Netherlands | ITWW",
    template: "%s | IT Solutions Worldwide",
  },
  description:
    "IT Solutions Worldwide delivers supply chain, digital, staffing & Oracle Cloud services in the Netherlands. Get a free consultation today.",
  verification: {
    other: {
      "facebook-domain-verification": "0ryxazzsetmvipkqgt60umo33s7ti7",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/png" },
    ],
  },
  // Canonical tag ab automatically metadataBase aur route ke base par generate hoga
  alternates: {
    canonical: "./",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/backgrounds/hero-bg.webp"
          fetchPriority="high"
          type="image/webp"
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <MetaPixel pixelId="1766535074073515" />
        <GoogleTagManager gtmId="GTM-PH8FNRK6" />
      </head>
      
      <body className="mx-2 md:mx-0 lg:mx-0">
        {children}
        
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","wgjwbc5ugr");
          `}
        </Script>
        <PageUpButton />
      </body>
    </html>
  );
}