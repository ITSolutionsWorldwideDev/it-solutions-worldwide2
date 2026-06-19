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
<div className="min-h-[100px] container xl:max-w-[1200px] flex items-center justify-center py-6">
        <div className="flex flex-col sm:flex-row w-full justify-between text-white">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex-1 text-center p-4 ${
              index > 0 ? "border-t sm:border-t-0 sm:border-l border-gray-300" : ""
            }`}
          >
           <p className="md:text-3xl text-xl mb-2 font-bold">
  {stat.value}
</p>
            <p className="text-lg md:text-base sm:text-sm mb-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}