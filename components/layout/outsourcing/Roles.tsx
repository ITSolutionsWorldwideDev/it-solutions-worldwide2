import {
  TrendingUp,
  Code,
  Briefcase,
  BarChart3,
  Zap,
  Users,
} from "lucide-react";
import Link from "next/link";

import { ChevronRight } from "lucide-react";
type RoleItem = {
  title: string;
  description: string;
  // add more fields if needed
};

type RolesData = {
  title: string;
  intro: string;
  roles: Record<string, RoleItem>;
};

// Icon mapping for different role keys

export default function Roles({ roles }: { roles: RolesData }) {
  const ROLE_ICONS = [
    <Code className="w-6 h-6" />,
    <Briefcase className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <BarChart3 className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
  ];

  return (
    <section className="py-14 px-4 bg-white" id="roles">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Explore Our <span className="text-teal-500">{roles.title}</span>
      </h2>

      <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">
        {roles.intro}
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(roles.roles).map(([key, role], index) => {
          const icon = ROLE_ICONS[index % ROLE_ICONS.length];

          const typedRole = role as RoleItem;

          return (
            <div
              key={key}
              className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-base font-semibold text-gray-900 leading-snug">
                <div className="flex space-x-3 items-center">
                  <div className="text-white p-3 bg-black rounded-xl">
                    {icon}
                  </div>
                  <span>{typedRole.title}</span>
                </div>
              </h3>

              <p
                className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {typedRole.description}
              </p>

              {/* <p className="text-sm text-[#22A3AD] leading-relaxed">
                <Link
                  href={`outsourcing/${typedRole.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center "
                >
                  Hire an {typedRole.title} Specialists
                  <ChevronRight className="size-4" />
                </Link>
              </p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
