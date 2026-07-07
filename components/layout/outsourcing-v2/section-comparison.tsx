"use client";

import React from "react";

interface ComparisonTable {
  headers?: string[];
  rows?: string[][];
}

interface SectionComparisonTableProps {
  heading?: string;
  subheading?: string;
  table?: ComparisonTable;
  summary?: string;
}

// Row text mein agar "✗ " ya "✓ " prefix pehle se aaya ho (JSON ki tarah),
// to usay strip karke clean text nikal lo — icon hum khud render karenge.
const stripIconPrefix = (text: string = "") =>
  text.replace(/^[✗✓]\s*/, "").trim();

const hasNegativeIcon = (text: string = "") => text.trim().startsWith("✗");

const SectionComparisonTable = ({
  heading = "Why Hire Through Us",
  subheading = "Hiring locally often means higher costs, longer timelines, and limited specialist availability. Here is how we compare.",
  table,
  summary = "Our clients typically save up to 60% compared to hiring locally in the Netherlands.",
}: SectionComparisonTableProps) => {
  const headers = table?.headers?.length === 3 ? table.headers : ["Feature", "Local Hire", "Our Talent"];
  const rows = table?.rows?.length ? table.rows : [];

  return (
    <section className="w-full bg-white pt-0 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Heading - single line on both heading and paragraph (original design) */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-[34px] lg:text-[38px] font-black text-[#05262C] tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#4A5D61] font-normal leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Comparison Table (original design) */}
        {rows.length > 0 && (
          <div className="max-w-5xl mx-auto bg-white rounded-[20px] border border-[#E3EDEE] shadow-[0_12px_40px_rgba(5,38,44,0.05)] overflow-hidden">
            <div className="w-full overflow-x-auto no-scrollbar">
              <table className="w-full border-collapse min-w-[760px] table-fixed">

                <thead>
                  <tr>
                    <th style={{ width: "28%", textAlign: "left", padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#05262C", backgroundColor: "#FFFFFF" }}>
                      {headers[0]}
                    </th>
                    <th style={{ width: "36%", textAlign: "left", padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#05262C", backgroundColor: "#FFFFFF" }}>
                      {headers[1]}
                    </th>
                    <th style={{ width: "36%", textAlign: "left", padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#FFFFFF", backgroundColor: "#1A545E", borderTopRightRadius: "20px" }}>
                      {headers[2]}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, index) => {
                    const isLast = index === rows.length - 1;
                    const borderStyle = !isLast ? { borderBottom: "1px solid #ECF1F1" } : {};
                    const feature = row[0];
                    const localCell = row[1];
                    const oursCell = row[2];

                    return (
                      <tr key={`comp-row-${index}`}>
                        <td style={{ padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#05262C", whiteSpace: "nowrap", backgroundColor: "#FFFFFF", ...borderStyle }}>
                          {feature}
                        </td>

                        <td style={{ padding: "20px 32px", fontSize: "15px", fontWeight: 500, color: "#7A8B8E", backgroundColor: "#FFFFFF", ...borderStyle }}>
                          <span style={{ color: "#A2B3B6", marginRight: "8px", fontSize: "13px" }}>
                            {hasNegativeIcon(localCell) ? "✕" : "✓"}
                          </span>
                          {stripIconPrefix(localCell)}
                        </td>

                        <td
                          style={{
                            padding: "20px 32px",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#123E45",
                            backgroundColor: "#EFF6F5",
                            ...borderStyle,
                            ...(isLast ? { borderBottomRightRadius: "20px" } : {}),
                          }}
                        >
                          <span style={{ color: "#14A38B", marginRight: "8px", fontWeight: 700 }}>✓</span>
                          {stripIconPrefix(oursCell)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-[15px] font-bold text-[#05262C] tracking-wide">
            {summary}
          </p>
        </div>

      </div>
    </section>
  );
};

export default SectionComparisonTable;