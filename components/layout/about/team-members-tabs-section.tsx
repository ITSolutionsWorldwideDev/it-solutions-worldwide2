// components/layout/about/team-members-tabs-section.tsx
"use client";
import type { NextPage } from "next";
import { useState } from "react";
import ProfilePgTeamMember from "./profile-page-team-members";

const TeamMembersTabsSection: NextPage = () => {
  const team = [
    {
      name: "Daniel Smith",
      role: "Digital Marketer",
      bg_image: "/assets/images/profile/member_bg_red.png",
      image: "/assets/images/profile/team_member_3.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Steve Wayn",
      role: "Digital Marketer",
      bg_image: "/assets/images/profile/member_bg_blue.png",
      image: "/assets/images/profile/team_member_6.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "James Bob",
      role: "Digital Marketer",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      image: "/assets/images/profile/team_member_2.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Ambert Daniel",
      role: "Designer",
      bg_image: "/assets/images/profile/member_bg_yellow.png",
      image: "/assets/images/profile/team_member_7.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Milano Bruce",
      role: "Developer",
      bg_image: "/assets/images/profile/member_bg_green.png",
      image: "/assets/images/profile/team_member_8.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Latina Amber",
      role: "Designer",
      bg_image: "/assets/images/profile/member_bg_red.png",
      image: "/assets/images/profile/team_member_1.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Latina Lucas",
      role: "Developer",
      bg_image: "/assets/images/profile/member_bg_yellow.png",
      image: "/assets/images/profile/team_member_5.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Milano Digits",
      role: "Designer",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      image: "/assets/images/profile/team_member_4.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
  ];

  const tabs = ["All", "Digital Marketer", "Designer", "Developer"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredTeam =
    activeTab === "All"
      ? team
      : team.filter((member) => member.role === activeTab);

  return (
    <div className="w-full relative text-[84px] text-black font-lexend">
      <div className="">
        {/* <div className="text-xl opacity-[0.6] pb-4"> */}
        <div className="text-black text-center font-lexend text-[70.918px] font-normal leading-normal">
          Meet the Minds Behind the Momentum
        </div>
        {/* <div className="leading-[86px] font-semibold inline-block">
          <span>The Creative team <br />behind </span>
          <span className="text-[#467a7e]">the door</span>
        </div> */}
      </div>

      {/* ------------------ TABS ------------------ */}
      {/* <div className="flex gap-6 mt-10 border-b pb-2 mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-3 text-lg font-semibold transition-all
              ${
                activeTab === tab
                  ? "text-[#467a7e] border-b-2 border-[#467a7e]"
                  : "text-gray-500 hover:text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div> */}

      <div className="mt-10 flex justify-center">
        <div className="flex gap-6 pb-2 border rounded-full px-6 py-3 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 px-4 text-lg font-semibold transition-all
          ${
            activeTab === tab
              ? "text-[#467a7e] border-b-2 border-[#467a7e]"
              : "text-gray-500 hover:text-black"
          }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ------------------ TEAM LIST ------------------ */}
      <section className="flex flex-wrap gap-6 justify-center py-12">
        {filteredTeam.length > 0 ? (
          filteredTeam.map((member) => (
            <ProfilePgTeamMember key={member.name} {...member} />
          ))
        ) : (
          <p className="text-center text-gray-500">No team members found.</p>
        )}
      </section>

      {/* <section className="flex flex-wrap gap-6 justify-center py-12">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </section> */}
    </div>
  );
};

export default TeamMembersTabsSection;
