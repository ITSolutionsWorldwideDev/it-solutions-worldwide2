import { industriesData } from "@/lib/commonData";

// Perfectly aligned and uniform-sized card grid.
export default function IndustriesCards() {
  return (
    <section className="w-full container xl:max-w-[1200px] mx-auto py-16 px-4">
      {/* grid-rows-fr ensures all items in a row take the exact same height as the tallest item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {industriesData.map((slide) => (
          <div
            key={slide.id}
            className="group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(23,88,100,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* 1. Fixed Image Height - Matches perfectly across all cards */}
            <div className="w-full h-64 overflow-hidden bg-gray-50 relative shrink-0">
              <img
                src={slide.image}
                alt={slide.industry}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#175864] font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                {slide.number}
              </div>
            </div>

            {/* 2. Content Container - flex-1 and justify-between forces the layout to stretch equally */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
              <div className="w-full flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300 group-hover:text-[#175864]">
                  {slide.industry}
                </h3>
                
                {/* min-h and line-clamp keep the paragraph boundaries identical */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-5 flex-1">
                  {slide.content}
                </p>
              </div>

              {/* 3. Bottom Action - Always pinned at the exact same bottom edge on all cards */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#175864] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                <span>Learn more</span>
                <svg className="w-3 h-3 ml-1.5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}