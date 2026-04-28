import HiringHeader from "@/components/layout/hiring/HiringHeader";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

function cleanSlug(slug:string):string {
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
  console.log(await params);
  return {
    title: `${title} | IT Solutions Worldwide`,
    // console.log(title)
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}/staffing-support/${slug}`,
    },
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  console.log(slug);
  return (
    <div>
      <HiringHeader slug={slug} />
    </div>
  );
};

export default page;
