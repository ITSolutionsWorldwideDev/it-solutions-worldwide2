"use client";
import Link from "next/link";
import { HiBolt } from "react-icons/hi2";
import { notFound } from "next/navigation";

import {
  ArrowRight,
  Users,
  Clock,
  Award,
  DollarSign,
  Bookmark,
  TrendingUp,
  Mail,
  Calendar,
  ChartColumnDecreasing,
  MessageSquare,
  ShoppingCart,
  User,
} from "lucide-react";
import ConsultationForm from "./ConsultationForm";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import HiringHeroSection from "./HiringHeroSection";
import HiringPricing from "./HiringPricing";
import HiringCTA from "./HiringCTA";

type Props = {
  slug: string;
};

// 🔥 Dynamic content config
const contentMap =
  // : Record<
  //   string,
  //   {
  //     heading: string;
  //     subText: string;
  //     service:string;
  //     trust?: string;
  //     help?: string;
  //     dedication?: string;
  //   }
  // >
  {
    "hire-virtual-assistant": {
      heading: "Hire a Dedicated Virtual Assistant ",
      subText:
        "Stop spending valuable time on repetitive tasks. Get a professional virtual assistant and focus on what truly matters — growing your business.",
      service: "virtual-assistant",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",
      features: [
        {
          icon: <Users />,
          label: "Dedicated Virtual Assistants",
          bg: "bg-blue-500",
        },
        { icon: <Clock />, label: "Start in 48 Hours", bg: "bg-green-500" },
        { icon: <DollarSign />, label: "Save up to 60%", bg: "bg-emerald-500" },
        {
          icon: <Bookmark />,
          label: "Fully Managed Support",
          bg: "bg-purple-500",
        },
        {
          icon: <TrendingUp />,
          label: "Flexible Monthly Plans",
          bg: "bg-orange-500",
        },
      ],
      services: [
        {
          icon: <Mail />,
          title: "Administrative Support",
          bg: "bg-blue-500",
          items: [
            "Inbox management",
            "Data entry",
            "File organization",
            "Document formatting",
          ],
        },
        {
          icon: <Calendar />,
          title: "Calendar & Scheduling",
          bg: "bg-purple-500",
          items: [
            "Appointment booking",
            "Meeting coordination",
            "Reminders and follow-ups",
            "Calendar management",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Customer Support",
          bg: "bg-green-500",
          items: [
            "Live chat support",
            "Email support",
            "CRM updates",
            "Client communication",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Marketing Support",
          bg: "bg-orange-500",
          items: [
            "Social media scheduling",
            "Lead research",
            "Competitor research",
            "Basic reporting",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Ecommerce Support",
          bg: "bg-pink-500",
          items: [
            "Product uploads",
            "Order processing",
            "Inventory updates",
            "Customer replies",
          ],
        },
        {
          icon: <User />,
          title: "Personal Assistance",
          bg: "bg-violet-500",
          items: [
            "Travel booking",
            "Personal scheduling",
            "Online research",
            "Lifestyle admin tasks",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€16",
          period: "/hour",
          note: "Save €2,000+ vs local hiring",
          features: [
            "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        // {
        //   name: "Growth Plan",
        //   description: "Dedicated assistant for daily operations.",
        //   price: "€1,600",
        //   period: "/month",
        //   note: null,
        //   features: [
        //     "Full-time support (160hrs)",
        //     "All Starter features",
        //     "Customer support",
        //     "Social media management",
        //     "Priority support",
        //     "Dedicated account manager",
        //   ],
        //   cta: "Get Started",
        //   highlighted: true,
        // },
        // {
        //   name: "Scale Plan",
        //   description: "Multiple assistants or specialized support.",
        //   price: "Custom",
        //   period: null,
        //   note: null,
        //   features: [
        //     "Multiple VAs",
        //     "All Growth features",
        //     "Specialized skills",
        //     "Custom workflows",
        //     "Dedicated account manager",
        //     "SLA guarantee",
        //   ],
        //   cta: "Contact us",
        //   highlighted: false,
        // },
      ],
    },
    "hire-full-stack-developer": {
      heading: "Hire a Full Stack Developer",
      subText:
        "Stop delaying your project because of slow hiring, unreliable freelancers, or lack of technical expertise.",
      service: "full-stack-developer",

      features: [
        {
          icon: <Users />,
          label: "      Dedicated Full Stack Developers",
          bg: "bg-blue-500",
        },
        {
          icon: <Clock />,
          label: "Start in Days, Not Months",
          bg: "bg-green-500",
        },
        {
          icon: <DollarSign />,
          label: "Save up to 60% on Hiring Costs",
          bg: "bg-emerald-500",
        },
        {
          icon: <Bookmark />,
          label: "Fully Managed Support",
          bg: "bg-purple-500",
        },
        {
          icon: <TrendingUp />,
          label: "Flexible Monthly Plans",
          bg: "bg-orange-500",
        },
      ],
      services: [
        {
          icon: <Mail />,
          title: "Web Applications",
          bg: "bg-blue-500",
          items: [
            "SaaS platforms",
            "Dashboards",
            "Booking systems",
            "Internal tools",
            // "Freelancers missing deadlines",
            // "Poor communication",
          ],
        },
        {
          icon: <Calendar />,
          title: "Web Development",
          bg: "bg-purple-500",
          items: [
            "Business websites",
            "Custom company portals",
            "Landing pages",
            "CMS websites",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Ecommerce Development",
          bg: "bg-green-500",
          items: [
            "Shopify customization",
            "WooCommerce stores",
            "Payment integrations",
            "Product management systems",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Front-End Development",
          bg: "bg-orange-500",
          items: ["React.js", "Vue.js", "Angular", "Responsive UI development"],
        },
        {
          icon: <ShoppingCart />,
          title: "Back-End Development",
          bg: "bg-pink-500",
          items: ["Node.js", "PHP", "Python", "API development"],
        },
        {
          icon: <User />,
          title: "Support & Maintenance",
          bg: "bg-violet-500",
          items: [
            "Bug fixing",
            "Speed optimization",
            "Security updates",
            "Ongoing development support",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€16",
          period: "/hour",
          note: "Save €2,000+ vs local hiring",
          features: [
            "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
      ],

      // trust:
      //   "Hire Full Stack Developers in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Full Stack Developer Can Help With",
      // dedication:
      //   "Our dedicated Full Stack DEveloper are trained professionals who can support your business or personal workload immediately.",
    },
    "hire-data-engineer": {
      heading: "Hire Data Engineer",
      subText:
        "Your business is generating data. The question is whether you're using it — or losing value because the infrastructure isn't there.",
      service: "data-engineer",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",

      features: [
        {
          icon: <Users />,
          label: "Dedicated Data Engineers",
          bg: "bg-blue-500",
        },
        {
          icon: <Clock />,
          label: "Start in Days, Not Months",
          bg: "bg-green-500",
        },
        {
          icon: <DollarSign />,
          label: "Save up to 60% on Hiring Costs",
          bg: "bg-emerald-500",
        },
        {
          icon: <Bookmark />,
          label: "Flexible Monthly Plans",
          bg: "bg-purple-500",
        },
        {
          icon: <TrendingUp />,
          label: "Fully Managed Support",
          bg: "bg-orange-500",
        },
      ],
      services: [
        {
          icon: <Mail />,
          title: "Data Pipelines",
          bg: "bg-blue-500",
          items: [
            "ETL and ELT pipeline development",
            "Real-time and batch processing",
            "API and third-party data ingestion",
            "Automated data workflows",
          ],
        },
        {
          icon: <Calendar />,
          title: "Data Warehousing",
          bg: "bg-purple-500",
          items: [
            "Cloud data warehouse setup (BigQuery, Snowflake, Redshift)",
            "Data modelling and schema design",
            "Historical data migration",
            "Data lake architecture",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Analytics & Reporting Infrastructure",
          bg: "bg-green-500",
          items: [
            "BI tool integration (Looker, Power BI, Tableau, Metabase)",
            "Dashboard and KPI reporting systems",
            "Self-service analytics setup",
            "Data quality monitoring",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Database Management",
          bg: "bg-orange-500",
          items: [
            "PostgreSQL, MySQL, MongoDB",
            "Query optimisation",
            "Database maintenance and scaling",
            "Backup and recovery systems",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Cloud Data Infrastructure",
          bg: "bg-pink-500",
          items: [
            "AWS, Google Cloud, Azure data services",
            "Infrastructure as Code (Terraform)",
            "Cost optimisation",
            "Security and compliance setup",
          ],
        },
        // {
        //   icon: <User />,
        //   title: "Personal Assistance",
        //   bg: "bg-violet-500",
        //   items: [
        //     "Travel booking",
        //     "Personal scheduling",
        //     "Online research",
        //     "Lifestyle admin tasks",
        //   ],
        // },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€16",
          period: "/hour",
          note: "Save €2,000+ vs local hiring",
          features: [
            "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        // {
        //   name: "Growth Plan",
        //   description: "Dedicated assistant for daily operations.",
        //   price: "€1,600",
        //   period: "/month",
        //   note: null,
        //   features: [
        //     "Full-time support (160hrs)",
        //     "All Starter features",
        //     "Customer support",
        //     "Social media management",
        //     "Priority support",
        //     "Dedicated account manager",
        //   ],
        //   cta: "Get Started",
        //   highlighted: true,
        // },
        // {
        //   name: "Scale Plan",
        //   description: "Multiple assistants or specialized support.",
        //   price: "Custom",
        //   period: null,
        //   note: null,
        //   features: [
        //     "Multiple VAs",
        //     "All Growth features",
        //     "Specialized skills",
        //     "Custom workflows",
        //     "Dedicated account manager",
        //     "SLA guarantee",
        //   ],
        //   cta: "Contact us",
        //   highlighted: false,
        // },
      ],
    },
    "hire-ecommerce-assistant": {
      heading: "Hire Ecommerce Assistant",
      subText:
        "Running a webshop takes more than just having the right products. The daily operations — product listings, order management, customer queries, inventory, and store updates — can overwhelm a small team fast.",
      service: "ecommerce-assistant",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",

      features: [
        {
          icon: <Users />,
          label: "Dedicated Ecommerce Support",
          bg: "bg-blue-500",
        },
        {
          icon: <Clock />,
          label: "Start in Days, Not Months",
          bg: "bg-green-500",
        },
        {
          icon: <DollarSign />,
          label: "Save up to 60% on Staffing Costs",
          bg: "bg-emerald-500",
        },
        {
          icon: <Bookmark />,
          label: "Fully Managed and Reliable",
          bg: "bg-purple-500",
        },
        {
          icon: <TrendingUp />,
          label: "Flexible Monthly Plans",
          bg: "bg-orange-500",
        },
      ],
      services: [
        {
          icon: <Mail />,
          title: "Product Management",
          bg: "bg-blue-500",
          items: [
            "Adding and updating product listings",
            "Writing product descriptions",
            "Image uploading and formatting",
            "Category and tag organisation",
            "Variant and attribute management",
          ],
        },
        {
          icon: <Calendar />,
          title: "Order & Inventory Management",
          bg: "bg-purple-500",
          items: [
            "Order processing and tracking",
            "Inventory level monitoring",
            "Supplier communication",
            "Stock updates and alerts",
            "Return and refund coordination",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Customer Support",
          bg: "bg-green-500",
          items: [
            "Email and chat support",
            "Complaint handling",
            "Order status updates",
            "Review management",
            "FAQ responses",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Store Optimisation",
          bg: "bg-orange-500",
          items: [
            "On-page SEO for product pages",
            "Speed and usability improvements",
            "Discount and promotion setup",
            "A/B testing support",
            "Conversion improvement tasks",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Platform Support",
          bg: "bg-pink-500",
          items: [
            "Shopify",
            "WooCommerce",
            "Magento",
            "Bol.com seller management",
            "Amazon seller support",
          ],
        },
        {
          icon: <User />,
          title: "Reporting & Admin",
          bg: "bg-violet-500",
          items: [
            "Weekly sales reporting",
            "Inventory reports",
            "Performance tracking",
            "Spreadsheet and data management",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€16",
          period: "/hour",
          note: "Save €2,000+ vs local hiring",
          features: [
            "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        // {
        //   name: "Growth Plan",
        //   description: "Dedicated assistant for daily operations.",
        //   price: "€1,600",
        //   period: "/month",
        //   note: null,
        //   features: [
        //     "Full-time support (160hrs)",
        //     "All Starter features",
        //     "Customer support",
        //     "Social media management",
        //     "Priority support",
        //     "Dedicated account manager",
        //   ],
        //   cta: "Get Started",
        //   highlighted: true,
        // },
        // {
        //   name: "Scale Plan",
        //   description: "Multiple assistants or specialized support.",
        //   price: "Custom",
        //   period: null,
        //   note: null,
        //   features: [
        //     "Multiple VAs",
        //     "All Growth features",
        //     "Specialized skills",
        //     "Custom workflows",
        //     "Dedicated account manager",
        //     "SLA guarantee",
        //   ],
        //   cta: "Contact us",
        //   highlighted: false,
        // },
      ],
    },
    "hire-electrical-engineer": {
      heading: "Hire Electrical Engineer",
      subText:
        "Engineering projects can't afford gaps in technical knowledge, delayed deliverables, or expensive local hiring processes.",
      service: "Electric-engineer",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",
      features: [
        {
          icon: <Users />,
          label: "Dedicated Electrical Engineers",
          bg: "bg-blue-500",
        },
        {
          icon: <Clock />,
          label: "Start in Days, Not Months",
          bg: "bg-green-500",
        },
        {
          icon: <DollarSign />,
          label: "Save up to 60% on Engineering Costs",
          bg: "bg-emerald-500",
        },
        {
          icon: <Bookmark />,
          label: "Fully Managed Support",
          bg: "bg-purple-500",
        },
        {
          icon: <TrendingUp />,
          label: "Flexible Monthly Plans",
          bg: "bg-orange-500",
        },
      ],
      services: [
        {
          icon: <Mail />,
          title: "Circuit Design & Analysis",
          bg: "bg-blue-500",
          items: [
            "Schematic design and review",
            "Power electronics design",
            "Signal processing circuits",
            "Analog and digital circuit design",
            "Circuit simulation and testing",
          ],
        },
        {
          icon: <Calendar />,
          title: "PCB Design",
          bg: "bg-purple-500",
          items: [
            "PCB layout and routing",
            "Multi-layer board design",
            "Design for manufacture (DFM)",
            "Gerber file preparation",
            "Component selection and BOM management",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Embedded Systems",
          bg: "bg-green-500",
          items: [
            "Microcontroller programming (Arduino, STM32, ESP32)",
            "Firmware development",
            "Real-time operating systems (RTOS)",
            "Hardware-software integration",
            "IoT device development",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Electrical Systems Engineering",
          bg: "bg-orange-500",
          items: [
            "Power system design",
            "Electrical load calculations",
            "Industrial automation support",
            "Control panel design",
            "Compliance with IEC and EN standards",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Technical Documentation",
          bg: "bg-pink-500",
          items: [
            "Electrical drawings and schematics",
            "Technical specifications",
            "Test reports and validation documents",
            "User manuals and datasheets",
            "CE marking documentation support",
          ],
        },
        {
          icon: <User />,
          title: "Engineering Support",
          bg: "bg-violet-500",
          items: [
            "Design reviews",
            "Troubleshooting and failure analysis",
            "Prototype support",
            "Supplier and vendor technical communication",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€16",
          period: "/hour",
          note: "Save €2,000+ vs local hiring",
          features: [
            "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        // {
        //   name: "Growth Plan",
        //   description: "Dedicated assistant for daily operations.",
        //   price: "€1,600",
        //   period: "/month",
        //   note: null,
        //   features: [
        //     "Full-time support (160hrs)",
        //     "All Starter features",
        //     "Customer support",
        //     "Social media management",
        //     "Priority support",
        //     "Dedicated account manager",
        //   ],
        //   cta: "Get Started",
        //   highlighted: true,
        // },
        // {
        //   name: "Scale Plan",
        //   description: "Multiple assistants or specialized support.",
        //   price: "Custom",
        //   period: null,
        //   note: null,
        //   features: [
        //     "Multiple VAs",
        //     "All Growth features",
        //     "Specialized skills",
        //     "Custom workflows",
        //     "Dedicated account manager",
        //     "SLA guarantee",
        //   ],
        //   cta: "Contact us",
        //   highlighted: false,
        // },
      ],
    },

    "hire-ai-engineer": {
      heading: "Hire Ai Engineer",
      subText:
        "AI is no longer a future investment — businesses that deploy it now are outpacing competitors who are still planning.",
      service: "Ai-engineer",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",
      features: [
        {
          icon: <Users />,
          label: "Dedicated AI Engineers",
          bg: "bg-blue-500",
        },
        {
          icon: <Clock />,
          label: "Start in Days, Not Months",
          bg: "bg-green-500",
        },
        {
          icon: <DollarSign />,
          label: "Save up to 60% on Hiring Costs",
          bg: "bg-emerald-500",
        },
        {
          icon: <Bookmark />,
          label: "Fully Managed Support",
          bg: "bg-purple-500",
        },
        {
          icon: <TrendingUp />,
          label: "Flexible Monthly Plans",
          bg: "bg-orange-500",
        },
      ],
      services: [
        {
          icon: <Mail />,
          title: "Machine Learning Development",
          bg: "bg-blue-500",
          items: [
            "Custom ML model development",
            "Classification, regression, and clustering models",
            "Model training, evaluation, and fine-tuning",
            "Predictive analytics systems",
            "Recommendation engines",
          ],
        },
        {
          icon: <Calendar />,
          title: "Large Language Model (LLM) Integration",
          bg: "bg-purple-500",
          items: [
            "ChatGPT, Claude, and Gemini API integration",
            "Custom AI chatbot development",
            "RAG (Retrieval Augmented Generation) systems",
            "Document analysis and summarisation tools",
            "AI-powered search and Q&A systems",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "AI Automation",
          bg: "bg-green-500",
          items: [
            "Business process automation with AI",
            "Intelligent document processing",
            "Email and workflow automation",
            "Data extraction and transformation pipelines",
            "AI agents and multi-step automations",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Computer Vision",
          bg: "bg-orange-500",
          items: [
            "Image classification and object detection",
            "OCR and document scanning solutions",
            "Quality control and inspection systems",
            "Video analysis pipelines",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Natural Language Processing",
          bg: "bg-pink-500",
          items: [
            "Text classification and sentiment analysis",
            "Entity extraction",
            "Language detection and translation pipelines",
            "Content moderation systems",
          ],
        },
        {
          icon: <User />,
          title: "AI Integration & Deployment",
          bg: "bg-violet-500",
          items: [
            "API-based AI feature integration",
            "Model deployment on cloud platforms",
            "Monitoring and performance tracking",
            "Scalable AI infrastructure setup",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€16",
          period: "/hour",
          note: "Save €2,000+ vs local hiring",
          features: [
            "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        // {
        //   name: "Growth Plan",
        //   description: "Dedicated assistant for daily operations.",
        //   price: "€1,600",
        //   period: "/month",
        //   note: null,
        //   features: [
        //     "Full-time support (160hrs)",
        //     "All Starter features",
        //     "Customer support",
        //     "Social media management",
        //     "Priority support",
        //     "Dedicated account manager",
        //   ],
        //   cta: "Get Started",
        //   highlighted: true,
        // },
        // {
        //   name: "Scale Plan",
        //   description: "Multiple assistants or specialized support.",
        //   price: "Custom",
        //   period: null,
        //   note: null,
        //   features: [
        //     "Multiple VAs",
        //     "All Growth features",
        //     "Specialized skills",
        //     "Custom workflows",
        //     "Dedicated account manager",
        //     "SLA guarantee",
        //   ],
        //   cta: "Contact us",
        //   highlighted: false,
        // },
      ],
    },
  };

export default function HiringHeader({ slug }: Props) {
  // 🔥 fallback if slug not found
  const data = contentMap[slug as keyof typeof contentMap];

  if (!data) {
    return notFound();
  }
  const { heading, subText, service, services, plans, features } =
    contentMap[slug as keyof typeof contentMap] ||
    contentMap["hire-virtual-assistant"];

  return (
    <div>
      <div className="bg-linear-to-br from-[#FFFFFF] via-[#F9FAFB] to-[#156F76]">
        <div className="container mx-auto font-sans">
          <main className="px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#156F761A] border text-teal-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <HiBolt />
                Start in 48 Hours • Save up to 60%
              </div>

              <h1 className="max-w-xl mx-auto lg:mx-0 text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Hire a Dedicated {service}
                <span className="text-[#156F76]"> in Netherlands</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-md sm:max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {subText}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link href="https://wa.me/31107660786">
                  <button className="w-full sm:w-auto bg-teal-800 hover:bg-teal-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md">
                    Book Free Consultation
                    <ArrowRight />
                  </button>
                </Link>

                <button
                  className="w-full sm:w-auto border-2 border-teal-800 text-teal-800 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Pricing Today
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-4">
                <div className="flex flex-col items-center gap-1">
                  <Users className="text-teal-700" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    500+
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    Dedicated VAs
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Clock className="text-teal-700" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    48hrs
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    Start Time
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Award className="text-teal-700" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    60%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    Cost Savings
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-auto flex-1 ">
              <ConsultationForm />
            </div>
          </main>

          <WhatsAppBtn />

          <div className="bg-teal-800 text-white text-xs sm:text-sm text-center py-4 sm:py-5 px-4">
            ✓ Trusted by 500+ Businesses Looking to Scale Faster Across
            Netherlands &nbsp;
            <span className="text-yellow-400">★ 5.0</span>{" "}
            {/* <span className="text-teal-300">(709 Reviews)</span> */}
          </div>
        </div>
      </div>
      <HiringHeroSection
        slug={slug}
        service={service}
        features={features}
        services={services}
      />
      <HiringPricing slug={slug} plans={plans} service={service} />
      <HiringCTA slug={slug} service={service} />
    </div>
  );
}
