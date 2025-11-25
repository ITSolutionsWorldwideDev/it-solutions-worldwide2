// app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import PageUpButton from "@/components/ui/PageUpButton";
import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Empowering Businesses with Smart IT Solutions | IT Solutions Worldwide",
    template: "%s | IT Solutions Worldwide",
  },
  description: "Get expert marketing automation & professional services automation software in the Netherlands. Scalable solutions tailored to your business needs.",
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
      <body>
        <MetaPixel pixelId="1766535074073515" />
        {children}
        <PageUpButton />
      </body>
    </html>
  );
}
