// app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import PageUpButton from "@/components/ui/PageUpButton";
import type { Metadata } from "next";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s | My Next.js App",
  },
  description: "A modern Next.js application with dynamic titles and favicons.",
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
        {children}
        <PageUpButton />
      </body>
    </html>
  );
}
