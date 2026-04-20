import HiringHeader from "@/components/layout/hiring/HiringHeader";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string;locale:string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug,locale } = await params;
  console.log(locale,slug)
  console.log(await params);
  return {
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}/hiring/${slug}`,
      // languages: {
      //   en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/hiring/${slug}`,
      //   nl: `${process.env.NEXT_PUBLIC_BASE_URL}/nl/hiring/${slug}`,
      // },
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
