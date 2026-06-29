// Lightweight static replacement for FunFacts.
// No slot-machine digit animation — just plain numbers.
const stats = [
  { value: "8+", label: "Years Serving Globally" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "90+", label: "Projects Completed" },
  { value: "20+", label: "Countries We Serve" },
];

export default function StatsCards() {
  return (
    <div className="container xl:max-w-[1200px] my-10">
<div className="bg-[#0F5A63] rounded-3xl px-6">        {/* Heading */}
        <h2 className="text-white text-center text-[28px] md:text-[34px] font-bold mb-6 tracking-wide">
  Global Reach, Local Expertise
</h2>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row w-full justify-between text-white">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex-1 text-center p-4 ${
                index > 0
                  ? "border-t sm:border-t-0 sm:border-l border-white/30"
                  : ""
              }`}
            >
              <p className="text-3xl md:text-5xl font-bold">
                {stat.value}
              </p>

              <p className="mt-2 text-base md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}