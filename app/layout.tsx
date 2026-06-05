// app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTag from "@/components/GoogleTag";
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
  title: {
    default: "Smart IT & Business Services in Netherlands | ITWW",
    template: "%s | IT Solutions Worldwide",
  },
  description:
    "IT Solutions Worldwide delivers supply chain, digital, staffing & Oracle Cloud services in the Netherlands. Get a free consultation today.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <head>
        <meta
          name="facebook-domain-verification"
          content="0ryxazzsetmvipkqgt60umo33s7ti7"
        />
      </head>
      <body className="mx-2 md:mx-0 lg:mx-0">
        <MetaPixel pixelId="1766535074073515" />
        <GoogleTagManager gtmId="GTM-PH8FNRK6" />
        <GoogleTag tagId="GT-TQKZR4LS" />
        {children}

        <Script id="clarity-script" strategy="lazyOnload">
          {`
          (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wgjwbc5ugr");
          `}
        </Script>
        <PageUpButton />
      </body>
    </html>
  );
}
