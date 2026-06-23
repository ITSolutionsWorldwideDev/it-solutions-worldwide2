"use client";

import React from "react";

const SectionComparisonTable = () => {
  const comparisonRows = [
    { feature: "Monthly cost", local: "High salary + benefits", ourEngineers: "Cost-effective flexible plans" },
    { feature: "Time to start", local: "Weeks to months", ourEngineers: "Start within days" },
    { feature: "Overhead costs", local: "Office, tools, taxes", ourEngineers: "Zero overhead" },
    { feature: "Talent availability", local: "Very limited in NL", ourEngineers: "Global vetted specialist pool" },
    { feature: "Recruitment effort", local: "Full internal process", ourEngineers: "We handle everything" },
    { feature: "Scalability", local: "Fixed headcount", ourEngineers: "Scale up or down anytime" },
    { feature: "Commitment", local: "Long-term contracts", ourEngineers: "Flexible monthly plans" },
  ];

  return (
    <section className="w-full bg-white pt-0 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Heading - single line on both heading and paragraph */}
        <div className="text-center max-w-none mx-auto mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-[34px] lg:text-[38px] font-black text-[#05262C] tracking-tight mb-4 whitespace-nowrap overflow-x-auto no-scrollbar">
            Why Hire a Data Engineer in Netherlands Through Us
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#4A5D61] font-normal leading-relaxed whitespace-nowrap overflow-x-auto no-scrollbar">
            Hiring locally often means higher costs, longer timelines, and limited specialist availability. Here is how we compare.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-[20px] border border-[#E3EDEE] shadow-[0_12px_40px_rgba(5,38,44,0.05)] overflow-hidden">
          <div className="w-full overflow-x-auto no-scrollbar">
            <table className="w-full border-collapse min-w-[760px] table-fixed">

              <thead>
                <tr>
                  <th style={{ width: "28%", textAlign: "left", padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#05262C", backgroundColor: "#FFFFFF" }}>
                    Feature
                  </th>
                  <th style={{ width: "36%", textAlign: "left", padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#05262C", backgroundColor: "#FFFFFF" }}>
                    Local Hire
                  </th>
                  <th style={{ width: "36%", textAlign: "left", padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#FFFFFF", backgroundColor: "#1A545E", borderTopRightRadius: "20px" }}>
                    Our Data Engineers
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => {
                  const isLast = index === comparisonRows.length - 1;
                  const borderStyle = !isLast ? { borderBottom: "1px solid #ECF1F1" } : {};

                  return (
                    <tr key={`comp-row-${index}`}>
                      <td style={{ padding: "20px 32px", fontSize: "15px", fontWeight: 700, color: "#05262C", whiteSpace: "nowrap", backgroundColor: "#FFFFFF", ...borderStyle }}>
                        {row.feature}
                      </td>

                      <td style={{ padding: "20px 32px", fontSize: "15px", fontWeight: 500, color: "#7A8B8E", backgroundColor: "#FFFFFF", ...borderStyle }}>
                        <span style={{ color: "#A2B3B6", marginRight: "8px", fontSize: "13px" }}>✕</span>
                        {row.local}
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
                        {row.ourEngineers}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-[15px] font-bold text-[#05262C] tracking-wide">
            Our clients typically save up to 60% compared to hiring a senior data engineer locally in the Netherlands.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SectionComparisonTable;