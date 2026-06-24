// lib/menu.ts
export interface MenuItem {
  label: string;
  link?: string;
  dropdown?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Business Transformation", // 👈 Link property yahan se hata di hai, ab yeh click karne par open nahi hoga
    dropdown: [
      {
        label: "SCM Services",
        link: "/scm-services",
        dropdown: [
          {
            label: "SCM Consultancy",
            link: "/scm-services/scm-consultancy",
          },
          {
            label: "Business Consultancy",
            link: "/scm-services/business-consultancy",
          },
          {
            label: "Supply Chain Performance Check",
            link: "/scm-services/supply-chain-performance-check",
          },
        ],
      },
      {
        label: "IT Support",
        link: "/it-support",
        dropdown: [
          {
            label: "Automation Services",
            link: "/it-support/automation-services",
          },
          {
            label: "ERP-Implementation",
            link: "/it-support/erp-implementation",
          },
        ],
      },
      {
        label: "Smart Warehouse Solutions",
        link: "/logistics/smart-warehouse-solutions",
      },
    ],
  },
  {
    label: "Digital Services",
    link: "/digital-services",
    dropdown: [
      {
        label: "Website Design & Development",
        link: "/digital-services/website-design-&-development",
      },
      {
        label: "Ecommerce Development",
        link: "/digital-services/ecommerce-development",
      },
      { label: "SEO Services", link: "/digital-services/seo-services" },
      { label: "PPC Advertising", link: "/digital-services/ppc-advertising" },
      {
        label: "Social Media Marketing",
        link: "/digital-services/social-media-marketing",
      },
      {
        label: "Software Development",
        link: "/it-support/software-development",
      },
    ],
  },
  {
    label: "Staffing Support",
    link: "/staffing-support",
    dropdown: [
      {
        label: "Temporary Staffing",
        link: "/staffing-support/temporary-staffing",
      },
      {
        label: "Managed Staffing Services",
        link: "/staffing-support/managed-staffing-services",
      },
      {
        label: "Remote & Virtual Staffing",
        link: "/staffing-support/remote-&-virtual-staffing",
      },
      {
        label: "Specialized Industry Staffing",
        link: "/staffing-support/specialized-industry-staffing",
      },
      {
        label: "Staffing Consulting Services",
        link: "/staffing-support/staffing-consulting-services",
      },
    ],
  },
  {
    label: "Outsourcing",
    link: "/outsourcing",
    dropdown: [
      {
        label: "Hire Roles",
        link: "/outsourcing/hire-roles",
        dropdown: [
          {
            label: "Virtual Assistant",
            link: "/outsourcing/hire-virtual-assistant",
          },
          {
            label: "Data Engineer",
            link: "/outsourcing/hire-data-engineer",
          },
          {
            label: "Full-stack Developer",
            link: "/outsourcing/hire-full-stack-developer",
          },
          {
            label: "AI/ML Engineer",
            link: "/outsourcing/hire-ai-engineer",
          },
          {
            label: "Ecommerce Assistant",
            link: "/outsourcing/hire-ecommerce-assistant",
          },
          {
            label: "Electrical Engineer",
            link: "/outsourcing/hire-electrical-engineer",
          },
          {
            label: "Administrative Support",
            link: "/outsourcing/hire-admin-accounting-assistant",
          },
          {
            label: "HR Assistant Remote",
            link: "/outsourcing/hire-hr-assistant-remote",
          },
          {
            label: "Customer Support",
            link: "/outsourcing/hire-customer-support-agent",
          },
          {
            label: "Data Entry",
            link: "/outsourcing/hire-data-entry-specialist",
          },
        ],
      },
      {
        label: "Design Services",
        link: "/outsourcing/design-services",
        dropdown: [
          {
            label: "Web Designer",
            link: "/outsourcing/hire-webdesigner-developer",
          },
          {
            label: "Graphic Designer",
            link: "/outsourcing/hire-graphic-designer",
          },
        ],
      },
      {
        label: "IT & Development",
        link: "/outsourcing/it-development",
        dropdown: [
          {
            label: "Front-end Developer",
            link: "/outsourcing/hire-front-end-developer",
          },
          {
            label: "Back-end Developer",
            link: "/outsourcing/hire-back-end-developer",
          },
          {
            label: "App Developer",
            link: "/outsourcing/hire-app-developer",
          },
          {
            label: "It Support Specialist",
            link: "/outsourcing/hire-it-support-specialist",
          },
          {
            label: "Software Tester QA",
            link: "/outsourcing/hire-software-tester-qa",
          },
        ],
      },
      {
        label: "Marketing & Analytics",
        link: "/outsourcing/marketing-analytics",
        dropdown: [
          {
            label: "Social Media Manager",
            link: "/outsourcing/hire-social-media-manager",
          },
          {
            label: "Content Creator",
            link: "/outsourcing/hire-content-creator",
          },
          {
            label: "Online Marketeer",
            link: "/outsourcing/hire-online-marketer",
          },
          {
            label: "Google Analytics Specialist",
            link: "/outsourcing/hire-google-analytics-specialist",
          },
          {
  label: "Power BI Specialist",
  link: "/outsourcing/hire-power-bi-tableau-specialist",
},
          {
            label: "Data Analyst",
            link: "/outsourcing/hire-data-analyst",
          },
        ],
      },
    ],
  },
];