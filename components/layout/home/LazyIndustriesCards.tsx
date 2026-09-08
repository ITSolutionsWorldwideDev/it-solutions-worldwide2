"use client";

import dynamic from "next/dynamic";
import LazyMount from "../LazyMount";

const IndustriesCards = dynamic(() => import("./IndustriesCards"), {
  loading: () => <div className="min-h-[500px]" />,
  ssr: false,
});

export default function LazyIndustriesCards({ locale }: { locale: string }) {
  return (
    <LazyMount minHeight={500}>
      <IndustriesCards locale={locale} />
    </LazyMount>
  );
}