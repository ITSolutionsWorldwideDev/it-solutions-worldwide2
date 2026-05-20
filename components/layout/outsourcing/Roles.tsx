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

export default function Roles({ roles }: { roles: RolesData }) {
  return (
    <section className="py-14 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Explore Our{" "}
        <span className="text-teal-500">{roles.title}</span>
      </h2>

      <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">
        {roles.intro}
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(roles.roles).map(([key, role]) => {
          const typedRole = role as RoleItem;

          return (
            <div
              key={key}
              className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-base font-semibold text-gray-900 leading-snug">
                {typedRole.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {typedRole.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}