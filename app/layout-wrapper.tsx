"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import HomeHeader from "@/components/layout/home-header";
import Footer from "@/components/layout/footer";
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface LayoutWrapperProps {
  children: ReactNode;
  locale: string;
}

export default function LayoutWrapper({ children, locale }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Clean path calculation to avoid layout shift recalculations
  const isHome = pathname === `/${locale}` || pathname === '/' || pathname === '';

  return (
    <>
      {/* Structural layout remains intact for fast HTML tree generation */}
      {isHome ? <HomeHeader /> : <Header />}
      
      <main className="w-full flex-grow">
        {children}
      </main>
      
      <Footer />
      <LanguageSwitcher />
    </>
  );
}
