"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ClientItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  logo: string;
}

export interface PortfolioClientsSectionProps {
  locale: string;
  eyebrow?: string;
  headingPrefix?: string;
  headingMiddle?: string;
  headingSuffix?: string;
  clients: ClientItem[];
}

export default function PortfolioClientsSection({
  locale,
  eyebrow = "OUR WORK · PORTFOLIO",
  headingPrefix = "Our",
  headingMiddle = "Proven",
  headingSuffix = "Digital Engineering",
  clients,
}: PortfolioClientsSectionProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentClients = clients.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const gridElem = document.getElementById("portfolio-grid");
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="portfolio-grid" className="relative bg-white pt-14 sm:pt-18 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-3.5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#00A896]">
              <span className="h-px w-8 bg-[#00A896]" />
              <span>{eyebrow}</span>
              <span className="h-px w-8 bg-[#00A896]" />
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#06282C]">
            <span className="text-[#00A896]">{headingPrefix}</span>{" "}
            <span className="text-black font-extrabold">{headingMiddle}</span>{" "}
            <span className="text-[#00A896]">{headingSuffix}</span>
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-7 sm:gap-y-12 lg:gap-x-8"
            >
              {currentClients.map((client) => {
                const clientHref = `/${locale}/portfolio/${client.slug}`;

                return (
                  <Link
                    key={client.id}
                    href={clientHref}
                    className="group flex flex-col focus:outline-none"
                  >
                    {/* 
                      Card Image Container:
                      - Top-Left: Curved
                      - Top-Right: Curved
                      - Bottom-Right: Curved
                      - Bottom-Left: Straight (90-degree square corner)
                    */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-none sm:rounded-tl-[36px] sm:rounded-tr-[36px] sm:rounded-br-[36px] sm:rounded-bl-none lg:rounded-tl-[42px] lg:rounded-tr-[42px] lg:rounded-br-[42px] lg:rounded-bl-none bg-gray-100 transition-all duration-300 group-hover:shadow-md">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Card Content Below Image: Left-aligned with image edge, exact spacing & typography */}
                    <div className="mt-3.5 flex flex-1 flex-col text-left">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#06282C] transition-colors duration-200 group-hover:text-[#00A896]">
                        {client.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-2 font-normal">
                        {client.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-12 sm:mt-14 flex items-center justify-center gap-2">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 transition-all hover:border-[#00A896] hover:text-[#00A896] disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = pageNum === currentPage;

              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#06282C] text-white shadow-xs"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-[#00A896] hover:text-[#00A896]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 transition-all hover:border-[#00A896] hover:text-[#00A896] disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
