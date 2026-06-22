// components/layout/home/BlogCarousel.tsx
import BlogCarouselClient from './BlogCarouselClient';

export default async function BlogCarousel({ locale }: { locale: string }) {
  // const blogPosts = await loadBlogs();

  return <BlogCarouselClient locale={locale} />;
}