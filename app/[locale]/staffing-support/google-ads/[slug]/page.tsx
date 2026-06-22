// app/[locale]/staffing-support/[slug]/page.tsx

import HiringHeader from "@/components/layout/hiring/HiringHeader";
import Header from "@/components/layout/ourservices/Header";
import Services from "@/components/layout/ourservices/Services";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function cleanSlug(slug: string): string {
  return slug
    .replace(/^hire-/, "") // remove "hire-" from start
    .replace(/[^a-zA-Z0-9\s-]/g, "") // remove special characters
    .split("-") // split by dash
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const title = cleanSlug(slug);
  // console.log(locale, slug);
  // console.log(await params);
  return {
    title: {
      absolute: title,
    },
    // console.log(title)
  };
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;

  return  <HiringHeader slug={slug} locale={locale} />;
  
  // <Services />
}
