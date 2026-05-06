// app/[locale]/blogs/page.tsx

import BlogsClient from "@/components/layout/home/BlogsClient";
import initServerI18n from "@/utils/serverTranslation";

import { Metadata } from "next";


export const metadata:Metadata={  
  title:{
    absolute:'IT & Supply Chain Insights Blog | Netherlands'
  },
  description:'Explore expert articles on IT, supply chain management, ERP, digital marketing & business automation from the specialists at IT Solutions Worldwide.'

}
export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return <BlogsClient locale={locale} title={t("latest_blogs", "Latest Blogs")} />;
}
/* 
import initServerI18n from "@/utils/serverTranslation";
import { loadBlogs } from "@/lib/loadBlogs";
import BlogCard from "@/components/layout/home/BlogCard";

type Props = {
  params: {
    locale: string;
  };
};


export default async function Blogs({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;
  // const { locale } = params;
  const blogs = await loadBlogs();
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div className="container mx-auto">
      <main className="flex-1 p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("latest_blogs", "Latest Blogs")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} post={blog} locale={locale} />
          ))}
        </div>
      </main>
    </div>
  );
} */

/* 

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i18n = await initServerI18n(params.locale);
  const t = await i18n.getFixedT(params.locale, "common");

  return {
    title: t("latest_blogs", "Latest Blogs"),
    description: t("blog_page_description", "Check out our latest blog posts."),
    openGraph: {
      title: t("latest_blogs", "Latest Blogs"),
      description: t("blog_page_description", "Check out our latest blog posts."),
      url: `https://yourdomain.com/${params.locale}/blogs`,
      images: [
        {
          url: "https://yourdomain.com/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Blog Preview",
        },
      ],
    },
    alternates: {
      canonical: `https://yourdomain.com/${params.locale}/blogs`,
    },
  };
}

 */
