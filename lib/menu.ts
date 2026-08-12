// lib/menu.ts
export interface MenuItem {
  label: string;
  link?: string;
  dropdown?: MenuItem[];
}

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  {
    label: t("menu.aboutUs"),
    link: "/about-us",
  },
  {
    label: t("menu.businessTransformation"),
    dropdown: [
      {
        label: t("menu.scmServices"),
        link: "/scm-services",
        dropdown: [
          {
            label: t("menu.scmConsultancy"),
            link: "/scm-services/scm-consultancy",
          },
          {
            label: t("menu.businessConsultancy"),
            link: "/scm-services/business-consultancy",
          },
          {
            label: t("menu.supplyChainPerformanceCheck"),
            link: "/scm-services/supply-chain-performance-check",
          },
        ],
      },
      {
        label: t("menu.itSupport"),
        link: "/it-support",
        dropdown: [
          {
            label: t("menu.automationServices"),
            link: "/it-support/automation-services",
          },
          {
            label: t("menu.erpImplementation"),
            link: "/it-support/erp-implementation",
          },
        ],
      },
      {
        label: t("menu.smartWarehouseSolutions"),
        link: "/logistics/smart-warehouse-solutions",
      },
    ],
  },
  {
    label: t("menu.digitalServices"),
    link: "/digital-services",
    dropdown: [
      {
        label: t("menu.websiteDesignDevelopment"),
        link: "/digital-services/website-design-development",
      },
      {
        label: t("menu.ecommerceDevelopment"),
        link: "/digital-services/ecommerce-development",
      },
      { label: t("menu.seoServices"), link: "/digital-services/seo-services" },
      { label: t("menu.ppcAdvertising"), link: "/digital-services/ppc-advertising" },
      {
        label: t("menu.socialMediaMarketing"),
        link: "/digital-services/social-media-marketing",
      },
      {
        label: t("menu.softwareDevelopment"),
        link: "/it-support/software-development",
      },
    ],
  },
  {
    label: t("menu.staffingSupport"),
    link: "/staffing-support",
    dropdown: [
      {
        label: t("menu.temporaryStaffing"),
        link: "/staffing-support/temporary-staffing",
      },
      {
        label: t("menu.managedStaffingServices"),
        link: "/staffing-support/managed-staffing-services",
      },
      {
        label: t("menu.remoteVirtualStaffing"),
        link: "/staffing-support/remote-&-virtual-staffing",
      },
      {
        label: t("menu.specializedIndustryStaffing"),
        link: "/staffing-support/specialized-industry-staffing",
      },
      {
        label: t("menu.staffingConsultingServices"),
        link: "/staffing-support/staffing-consulting-services",
      },
    ],
  },
  {
    label: t("menu.outsourcing"),
    link: "/outsourcing",
    dropdown: [
      {
        label: t("menu.hireRoles"),
        link: "/outsourcing/hire-roles",
        dropdown: [
          { label: t("menu.virtualAssistant"), link: "/outsourcing/hire-virtual-assistant" },
          { label: t("menu.dataEngineer"), link: "/outsourcing/hire-data-engineer" },
          { label: t("menu.fullStackDeveloper"), link: "/outsourcing/hire-full-stack-developer" },
          { label: t("menu.aiMlEngineer"), link: "/outsourcing/hire-ai-engineer" },
          { label: t("menu.ecommerceAssistant"), link: "/outsourcing/hire-ecommerce-assistant" },
          { label: t("menu.electricalEngineer"), link: "/outsourcing/hire-electrical-engineer" },
{ label: t("menu.administrativeSupport"), link: "/outsourcing/hire-administrative-accounting-assistant" },
          { label: t("menu.hrAssistantRemote"), link: "/outsourcing/hire-hr-assistant" },
          { label: t("menu.customerSupport"), link: "/outsourcing/hire-customer-support-agent" },
          { label: t("menu.dataEntry"), link: "/outsourcing/hire-data-entry-specialist" },
        ],
      },
      {
        label: t("menu.designServices"),
        link: "/outsourcing/design-services",
        dropdown: [
          { label: t("menu.webDesigner"), link: "/outsourcing/hire-web-designer" },

          { label: t("menu.graphicDesigner"), link: "/outsourcing/hire-graphics-designer" },        ],
      },
      {
        label: t("menu.itDevelopment"),
        link: "/outsourcing/it-development",
        dropdown: [
          { label: t("menu.frontEndDeveloper"), link: "/outsourcing/hire-frontend-developer" },
          { label: t("menu.backEndDeveloper"), link: "/outsourcing/hire-backend-developer" },          { label: t("menu.appDeveloper"), link: "/outsourcing/hire-app-developer" },
          { label: t("menu.itSupportSpecialist"), link: "/outsourcing/hire-it-support-specialist" },
          { label: t("menu.softwareTesterQa"), link: "/outsourcing/hire-software-tester" },        ],
      },
      {
        label: t("menu.marketingAnalytics"),
        link: "/outsourcing/marketing-analytics",
        dropdown: [
          { label: t("menu.socialMediaManager"), link: "/outsourcing/hire-social-media-manager" },
          { label: t("menu.contentCreator"), link: "/outsourcing/hire-content-creator" },
          { label: t("menu.onlineMarketeer"), link: "/outsourcing/hire-online-marketer" },
          { label: t("menu.googleAnalyticsSpecialist"), link: "/outsourcing/hire-google-analytics-specialist" },
          { label: t("menu.powerBiSpecialist"), link: "/outsourcing/hire-power-bi-specialist" },          { label: t("menu.dataAnalyst"), link: "/outsourcing/hire-data-analyst" },
        ],
      },
    ],
  },
];