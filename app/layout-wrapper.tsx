"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/layout/header";
import HomeHeader from "@/components/layout/home-header";
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Footer = dynamic(() => import("@/components/layout/footer"));

interface LayoutWrapperProps {
  children: ReactNode;
  locale: string;
}

export default function LayoutWrapper({ children, locale }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === '/' || pathname === '';

  return (
    <>
      {isHome ? <HomeHeader /> : <Header />}
      <main className="w-full flex-grow">
        {children}
      </main>
      <Footer />
      <LanguageSwitcher />
    </>
  );
}