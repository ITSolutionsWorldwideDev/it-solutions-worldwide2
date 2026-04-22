import { ServicePageConfig } from "@/types/services";
import {
  Users,
  Clock,
  DollarSign,
  Bookmark,
  TrendingUp,
  Mail,
  Calendar,
  ChartColumnDecreasing,
  MessageSquare,
  ShoppingCart,
  User,
  PanelsTopLeft,
  Dock,
  QrCode,
  BetweenHorizontalStart,
  Warehouse,
  ChartNoAxesCombined,
  Database,
  CloudCog,
  PackageSearch,
  FileSliders,
} from "lucide-react";
import { MdOutlineSupportAgent, MdSupportAgent } from "react-icons/md";

export const contentMap: ServicePageConfig =
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
     
      services: [
        {
          icon: <MdOutlineSupportAgent />,
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
          name: "Starter Plan",
          description: "Part-time support for light admin tasks.",
          price: "€29.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€31.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "€35.95",
          period: "/40 hours/week",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
      ],
    },
    "hire-full-stack-developer": {
      heading: "Hire a Full Stack Developer",
      subText:
        "Stop delaying your project because of slow hiring, unreliable freelancers, or lack of technical expertise.",
      service: "full-stack-developer",

     
      services: [
        {
          icon: <Dock />,
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
          icon: <QrCode />,
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
          icon: <ShoppingCart />,
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
          icon: <MdSupportAgent />,
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
          name: "Starter Plan",
          description: "Part-time support for light admin tasks.",
          price: "€49.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
          features: [
            // "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        {
          name: "Growth Plan",
          description: "Part-time support for light admin tasks.",
          price: "€52.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
          features: [
            // "20 hours/month",
            "Email & calendar support",
            "Basic admin tasks",
            "Weekly reports",
            "Email support",
          ],
          cta: "Get Started",
          highlighted: false,
        },
        {
          name: "Scale Plan",
          description: "Part-time support for light admin tasks.",
          price: "€55.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
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

      
      services: [
        {
          icon: <BetweenHorizontalStart />,
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
          icon: <Warehouse />,
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
          icon: <ChartNoAxesCombined />,
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
          icon: <Database />,
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
          icon: <CloudCog />,
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
          name: "Starter Plan",
          description: "Part-time support for light admin tasks.",
          price: "€42.95",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€59.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "€95.95",
          period: "/hour",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
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

      
      services: [
        {
          icon: <PackageSearch />,
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
          icon: <MdSupportAgent />,
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
          icon: <FileSliders />,
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
          price: "€17.95",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€27.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "55.95",
          period: "/hour",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
      ],
    },
    "hire-electrical-engineer": {
      heading: "Hire Electrical Engineer",
      subText:
        "Engineering projects can't afford gaps in technical knowledge, delayed deliverables, or expensive local hiring processes.",
      service: "Electrical-engineer",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",
      
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
          name: "Starter Plan",
          description: "Part-time support for light admin tasks.",
          price: "€35.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€43.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "52.95",
          period: "/hour",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
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
          price: "€49.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€59.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "69.95",
          period: "/hour",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
      ],
    },

     "hire-social-media-manager": {
      heading: "Hire Social Media Manager",
      subText:
        "Your brand is being judged on social media every day — businesses that show up consistently build trust faster and convert more customers.",
      service: "Social-media-manager",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",
     
      services: [
        {
          icon: <Mail />,
          title: "Content Creation",
          bg: "bg-blue-500",
          items: [
            "Social media post creation",
            "Caption writing and copywriting",
            "Graphic design coordination",
            "Reel and short video scripting",
            "Content calendar planning",
          ],
        },
        {
          icon: <Calendar />,
          title: "Platform Management",
          bg: "bg-purple-500",
          items: [
            "Instagram management",
            "LinkedIn management",
            "Facebook page management",
            "TikTok account management",
            "Pinterest and Twitter/X management",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Community Management",
          bg: "bg-green-500",
          items: [
            "Comment moderation and replies",
            "DM handling and lead responses",
            "Audience engagement strategies",
            "Review monitoring and response",
            "Community growth tactics",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Strategy & Planning",
          bg: "bg-orange-500",
          items: [
            "Social media strategy development",
            "Competitor analysis",
            "Hashtag research",
            "Trend monitoring",
            "Monthly performance planning",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Analytics & Reporting",
          bg: "bg-pink-500",
          items: [
            "Weekly and monthly performance reports",
            "Engagement rate tracking",
            "Follower growth analysis",
            "Content performance review",
            "Data-driven optimisation recommendations",
          ],
        },
        {
          icon: <User />,
          title: "Paid Social Support",
          bg: "bg-violet-500",
          items: [
            "Meta Ads basic setup support",
            "Boosted post management",
            "Audience targeting assistance",
            "Ad performance monitoring",
            "Coordination with your ads team",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€49.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€59.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "69.95",
          period: "/hour",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
      ],
    },


     "hire-content-creator-copywriter": {
      heading: "Hire Content Creator Copywriter",
      subText:
        "Businesses that publish consistent, high-quality content attract more traffic, build stronger brands, and convert more customers — without spending a fortune on agencies.",
      service: "Content-creator-copywriter",
      // trust:
      //   "Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster",
      // help: "What Your Virtual Assistant Can Help With",
      // dedication:
      //   "Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.",
     
      services: [
        {
          icon: <Mail />,
          title: "Content Creation",
          bg: "bg-blue-500",
          items: [
            "Social media post creation",
            "Caption writing and copywriting",
            "Graphic design coordination",
            "Reel and short video scripting",
            "Content calendar planning",
          ],
        },
        {
          icon: <Calendar />,
          title: "Platform Management",
          bg: "bg-purple-500",
          items: [
            "Instagram management",
            "LinkedIn management",
            "Facebook page management",
            "TikTok account management",
            "Pinterest and Twitter/X management",
          ],
        },
        {
          icon: <MessageSquare />,
          title: "Community Management",
          bg: "bg-green-500",
          items: [
            "Comment moderation and replies",
            "DM handling and lead responses",
            "Audience engagement strategies",
            "Review monitoring and response",
            "Community growth tactics",
          ],
        },
        {
          icon: <ChartColumnDecreasing />,
          title: "Strategy & Planning",
          bg: "bg-orange-500",
          items: [
            "Social media strategy development",
            "Competitor analysis",
            "Hashtag research",
            "Trend monitoring",
            "Monthly performance planning",
          ],
        },
        {
          icon: <ShoppingCart />,
          title: "Analytics & Reporting",
          bg: "bg-pink-500",
          items: [
            "Weekly and monthly performance reports",
            "Engagement rate tracking",
            "Follower growth analysis",
            "Content performance review",
            "Data-driven optimisation recommendations",
          ],
        },
        {
          icon: <User />,
          title: "Paid Social Support",
          bg: "bg-violet-500",
          items: [
            "Meta Ads basic setup support",
            "Boosted post management",
            "Audience targeting assistance",
            "Ad performance monitoring",
            "Coordination with your ads team",
          ],
        },
      ],

      plans: [
        {
          name: "Dedicated Assistant for Daily Operations",
          description: "Part-time support for light admin tasks.",
          price: "€49.95",
          period: "/hour",
          // note: "Save €2,000+ vs local hiring",
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
        {
          name: "Growth Plan",
          description: "Dedicated assistant for daily operations.",
          price: "€59.95",
          period: "/hour",
          note: null,
          features: [
            "Full-time support (160hrs)",
            "All Starter features",
            "Customer support",
            "Social media management",
            "Priority support",
            "Dedicated account manager",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Scale Plan",
          description: "Multiple assistants or specialized support.",
          price: "69.95",
          period: "/hour",
          note: null,
          features: [
            "Multiple VAs",
            "All Growth features",
            "Specialized skills",
            "Custom workflows",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          cta: "Contact us",
          highlighted: false,
        },
      ],
    },
  };
