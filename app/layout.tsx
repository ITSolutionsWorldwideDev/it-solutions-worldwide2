// app/layout.tsx

import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

/* export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // just passes through
} */

/* import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "./layout-wrapper";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={lexend.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
} */


/* import "./globals.css";
import { ReactNode } from "react";
// import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "./layout-wrapper";
import TranslationProvider from "@/components/TranslationProvider";

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={lexend.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          // enableSystem
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper>
            <TranslationProvider>{children}</TranslationProvider>
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
} */
