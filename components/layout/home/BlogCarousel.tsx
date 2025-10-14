//  components/layout/home/BlogCarousel.tsx

import { loadBlogs } from '@/lib/loadBlogs';
import BlogCarouselClient from "./BlogCarouselClient";

export default async function BlogCarousel() {
  const blogPosts = await loadBlogs();

  return <BlogCarouselClient posts={blogPosts} />;
}
