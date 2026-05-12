"use client";

export default function ScrollPricingButton({ btntext }: { btntext: string }) {
  const handleScroll = () => {
    const element = document.getElementById("pricing");

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScroll}
      className="w-full sm:w-auto border-2 border-teal-800 text-teal-800 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
    >
      {btntext}
    </button>
  );
}
