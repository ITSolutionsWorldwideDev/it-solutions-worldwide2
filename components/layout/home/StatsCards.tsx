import initServerI18n from "@/utils/serverTranslation";

export default async function StatsCards({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");

  const stats = [
    { value: "8+", label: t("stats.years") },
    { value: "98%", label: t("stats.satisfaction") },
    { value: "90+", label: t("stats.projects") },
    { value: "20+", label: t("stats.countries") },
  ];

  return (
    <div className="w-full my-10 flex justify-center">
      <div className="container xl:max-w-[1200px] bg-[#0F5A63] rounded-3xl px-6 py-10 shadow-lg">
        <h2 className="text-white text-center text-[28px] md:text-[34px] font-bold mb-8 tracking-wide">
          {t("stats.heading")}
        </h2>

        <div className="flex flex-col sm:flex-row w-full justify-between text-white">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex-1 text-center p-4 flex flex-col items-center justify-center ${
                index > 0
                  ? "border-t sm:border-t-0 sm:border-l border-white/20"
                  : ""
              }`}
            >
              <p className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm md:text-base text-neutral-100 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}