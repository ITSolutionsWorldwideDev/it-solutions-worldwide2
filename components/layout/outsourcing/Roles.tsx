// // components/HireRoles.jsx
// // Next.js component with Tailwind CSS

// import Link from "next/link";


// export default function Roles({roles}:any) {
//   return (
//     <section className="py-14 px-4 bg-white">
//       {/* Section Heading */}
//       <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
//         Explore Our{" "}
//         <span className="text-teal-500">Hire Roles</span>
//       </h2>

//       {/* Cards Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {roles.map((role) => (
//           <div
//             key={role.id}
//             className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
//           >
//             {/* Icon */}
//             <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center shrink-0">
//               {role.icon}
//             </div>

//             {/* Title */}
//             <h3 className="text-base font-semibold text-gray-900 leading-snug">
//               {role.title}
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-500 leading-relaxed flex-1">
//               {role.description}
//             </p>

//             {/* Link */}
//             <Link
//               href={role.href}
//               className="text-sm text-teal-500 font-medium hover:text-teal-600 flex items-center gap-1 group"
//             >
//               {role.linkText}
//               <span className="transition-transform group-hover:translate-x-0.5">›</span>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }