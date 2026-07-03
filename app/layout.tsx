// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itsolutionsworldwide.com"),
  title: {
    default: "Smart IT & Business Services in Netherlands | ITWW",
    template: "%s",
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
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}