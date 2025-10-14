// app/page.tsx     Home Page
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
// import AnimationArea from "@/components/layout/home/AnimationArea";
// import BlogCarousel from "@/components/layout/home/BlogCarousel";
// import ContactSection from "@/components/layout/home/ContactSection";

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <AnimationArea />
//         <BlogCarousel />
//         <ContactSection />
//       </main>
//     </>
//   );
// }
