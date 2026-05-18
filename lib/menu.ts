// lib/menu.ts
export interface MenuItem {
  label: string;
  link?: string;
  dropdown?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Business Transformation",
    link: "/scm-services",
    dropdown: [
      { label: "SCM Consultancy", link: "/scm-services/scm-consultancy" },
      {
        label: "Business Consultancy",
        link: "/scm-services/business-consultancy",
      },
      {
        label: "Supply Chain Performance Check",
        link: "/scm-services/supply-chain-performance-check",
      },
      { label: "Automation Services", link: "/it-support/automation-services" },
      { label: "ERP-Implementation", link: "/it-support/erp-implementation" },
      {
        label: "Smart Warehouse Solutions",
        link: "/logistics/smart-warehouse-solutions",
      },
    ],
  },
  // {
  //   label: "Oracle Cloud",
  //   link: "/oracle-cloud",
  // },
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
      { label: "IT Support", link: "/it-support" },
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
  // {
  //   label: "Hiring",
  //   link: "/staff-hiring",
  //   dropdown: [
  //     {
  //       label: "Hire Virtual Assistant",
  //       link: "/staffing-support/hire-virtual-assistant",
  //     },
  //     {
  //       label: "Hire Full Stack Developer",
  //       link: "/staffing-support/hire-full-stack-developer",
  //     },

  //     {
  //       label: "Hire a Data Engineer",
  //       link: "/staffing-support/hire-data-engineer",
  //     },

  //     {
  //       label: "Hire an Ecommerce Assistant",
  //       link: "/staffing-support/hire-ecommerce-assistant",
  //     },

  //     {
  //       label: "Hire an Electrical Engineer",
  //       link: "/staffing-support/hire-electrical-engineer",
  //     },

  //     {
  //       label: " Hire an AI Engineer",
  //       link: "/staffing-support/hire-ai-engineer",
  //     },
  //   ],
  // },

  {
    label: "Outsourcing",
    link: "/outsourcing",
    dropdown: [
      // {
      //   label: "Staffing Services",
      //   dropdown: [
      //     {
      //       label: "Temporary Staffing",
      //       link: "/staffing-support/hire-temporary-staffing",
      //     },
      //     {
      //       label: "Managed Staffing",
      //       link: "/staffing-support/hire-managed-staffing",
      //     },

      //     {
      //       label: "Remote & Virtual Staffing",
      //       link: "/staffing-support/hire-remote-virtual-staffing",
      //     },

      //     {
      //       label: "Staffing Consulting",
      //       link: "/staffing-support/hire-staffing-consulting",
      //     },
      //   ],
      // },
      {
        label: "Hire Roles",
        link: "/outsourcing/hire-roles",

        dropdown: [
          {
            label: "Virtual Assistant",
            link: "/staffing-support/hire-virtual-assistant",
          },
          {
            label: "Data Engineer",
            link: "/staffing-support/hire-data-engineer",
          },

          {
            label: "Full-stack Developer",
            link: "/staffing-support/hire-full-stack-developer",
          },

          {
            label: "AI/ML Engineer",
            link: "/staffing-support/hire-ai-engineer",
          },

          {
            label: "Ecommerce Assistant",
            link: "/staffing-support/hire-ecommerce-assistant",
          },

          {
            label: "Electrical Engineer",
            link: "/staffing-support/hire-electrical-engineer",
          },
        ],
      },

      {
        label: "Business Support",
        link: "/outsourcing/business-support",

        dropdown: [
          {
            label: "Administrative Support",
            link: "/staffing-support/hire-admin-accounting-assistant",
          },

          {
            label: "HR Assistant Remote",
            link: "/staffing-support/hire-hr-assistant-remote",
          },
          {
            label: "Customer Support",
            link: "/staffing-support/hire-customer-support-agent",
          },

          {
            label: "Data Entry",
            link: "/staffing-support/hire-data-entry-specialist",
          },
        ],
      },

      {
        label: "Design Services",
        link: "/outsourcing/design-services",

        dropdown: [
          {
            label: "Web Designer",
            link: "/staffing-support/hire-webdesigner-developer",
          },
          {
            label: "Graphic Designer",
            link: "/staffing-support/hire-graphic-designer",
          },
        ],
      },

      {
        label: "IT & Development",
        link: "/outsourcing/it-development",
        dropdown: [
          {
            label: "Front-end Developer",
            link: "/staffing-support/hire-front-end-developer",
          },
          {
            label: "Back-end Developer",
            link: "/staffing-support/hire-back-end-developer",
          },

          {
            label: "App Developer",
            link: "/staffing-support/hire-app-developer",
          },

          {
            label: "It Support Specialist",
            link: "/staffing-support/hire-it-support-specialist",
          },

          {
            label: "Software Tester QA",
            link: "/staffing-support/hire-software-tester-qa",
          },
        ],
      },

      {
        label: "Marketing & Analytics",
        link: "/outsourcing/marketing-analytics",
        dropdown: [
          {
            label: "Social Media Manager",
            link: "/staffing-support/hire-social-media-manager",
          },
          {
            label: "Content Creator",
            link: "/staffing-support/hire-content-creator",
          },

          {
            label: "Online Marketeer",
            link: "/staffing-support/hire-online-marketer",
          },

          {
            label: "Google Analytics Specialist",
            link: "/staffing-support/hire-google-analytics-specialist",
          },

          {
            label: "Power BI Specialist",
            link: "/staffing-support/hire-power-bi-tableau-specialist",
          },

          {
            label: "Data Analyst", //  / BI Specialist
            link: "/staffing-support/hire-data-analyst",
          },
        ],
      },
    ],
  },
];
