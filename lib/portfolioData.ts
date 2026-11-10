export interface CaseStudyPart {
  text: string;
  highlight?: boolean;
}

export interface ClientCaseStudyStory {
  accentColor: string;
  eyebrow?: string;
  title1Parts: CaseStudyPart[];
  paragraph1: string;
  paragraph2Lead?: string;
  paragraph2Rest?: string;
  title2Parts: CaseStudyPart[];
  paragraph3: string;
  paragraph4: string;
}

export interface PortfolioClientConfig {
  id: string;
  slug: string;
  image: string;
  logo: string;
  image1?: string;
  image2?: string;
  image3?: string;
  showcaseImage?: string;
  bannerImage?: string;
  translationKey: string;
  defaultName: string;
  defaultDescription: string;
  accentColor?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  pageTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  imageAlt?: string;
  caseStudy?: ClientCaseStudyStory;
}

export const PORTFOLIO_CLIENTS: PortfolioClientConfig[] = [
  {
    id: "taxinet",
    slug: "taxinet",
    image: "/assets/images/portfolio/cards/Taxinet_card.png",
    logo: "/assets/images/clients2/taxinet.png",
    image1: "/assets/images/portfolio/clients/taxinet1.webp",
    image2: "/assets/images/portfolio/clients/taxinet2.webp",
    image3: "/assets/images/portfolio/clients/taxinet3.webp",
    showcaseImage: "/assets/images/portfolio/clients/taxinet1.webp",
    bannerImage: "/assets/images/portfolio/clients/taxinet3.webp",
    translationKey: "taxinet",
    defaultName: "Taxinet",
    defaultDescription:
      "Established in 1999, Taxinet Haaglanden provides 24/7 taxi service across The Hague region.",
    accentColor: "#FF8A00",
    heroHeadline: "Taxinet: Smarter Rides, Smarter Operations",
    heroSubtext:
      "How we built the booking, routing, tracking and fleet tools behind a Haaglanden taxi service that runs 24/7.",
    pageTitle: "Taxinet Case Study: Taxi Operations Platform | ITWW",
    metaDescription:
      "How IT Solutions Worldwide built a ride agenda, booking form, route planner, live tracking and fleet tools for Taxinet Haaglanden in The Hague.",
    primaryKeyword: "taxi software development Netherlands",
    secondaryKeywords: [
      "taxi fleet management tool",
      "live track and trace for taxis",
      "taxi call center outsourcing",
    ],
    imageAlt:
      "Taxinet Haaglanden taxi booking website built by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#FF8A00",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Taxinet", highlight: true },
        { text: " Needed " },
        { text: "Digital Tools", highlight: true },
        { text: " Built Around Its Daily Operations" },
      ],
      paragraph1:
        "Established in 1999, Taxinet Haaglanden provides 24/7 taxi service across The Hague region: airport transfers, school transport, business travel, wedding transport, wheelchair-accessible taxis and group transport. Running that operation means coordinating rides, vehicles and a busy call center at once, and Taxinet came to us wanting to optimize how it works.",
      paragraph2Lead: "We Built the Tools Their Operation Runs On,",
      paragraph2Rest:
        "from ride scheduling to fleet oversight. We created a ride agenda (ritagenda), a reservation form, a route planner, a live track-and-trace tool and a fleet management tool, using n8n workflow automation and a custom-coded website. We also supplied remote resources to help manage the call center.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "Taxinet received scheduling, booking, routing, live tracking and fleet management tools made for its own operation, plus skilled remote team members supporting the call center.",
      paragraph4:
        "Our automation knowledge meant these tools could be designed to work together rather than as separate add-ons, and our ability to provide skilled resources at a lower budget let us support both the software and the people side of the business.",
    },
  },
  {
    id: "rifas",
    slug: "rifas-opleidingsinstituut",
    image: "/assets/images/portfolio/cards/rifas_card.png",
    logo: "/assets/images/clients2/rifas.png",
    image1: "/assets/images/portfolio/clients/rifas1.webp",
    image2: "/assets/images/portfolio/clients/rifas2.webp",
    image3: "/assets/images/portfolio/clients/rifas3.webp",
    showcaseImage: "/assets/images/portfolio/clients/rifas1.webp",
    bannerImage: "/assets/images/portfolio/clients/rifas3.webp",
    translationKey: "rifas",
    defaultName: "Rifas Opleidingsinstituut",
    defaultDescription:
      "A stronger website and an online marketing package for a training institute working in eight Dutch cities.",
    accentColor: "#00A896",
    heroHeadline:
      "Rifas Opleidingsinstituut: Building an Online Presence for Career Training",
    heroSubtext:
      "A stronger website and an online marketing package for a training institute working in eight Dutch cities.",
    pageTitle: "Rifas Opleidingsinstituut Case Study | Web & Marketing",
    metaDescription:
      "See how IT Solutions Worldwide improved the Rifas Opleidingsinstituut website and delivered an online marketing package to grow its client base.",
    primaryKeyword: "training institute website improvement Netherlands",
    secondaryKeywords: [
      "online marketing for training providers",
      "grow client database",
    ],
    imageAlt:
      "Rifas Opleidingsinstituut training website improved by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#00A896",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Rifas", highlight: true },
        { text: " Needed a " },
        { text: "Bigger Client Base", highlight: true },
        { text: " and a Stronger Online Presence" },
      ],
      paragraph1:
        "Founded in 2013, Rifas Opleidingsinstituut runs evening training courses for businesses and managers (NIS2 cybersecurity, AI for SMEs, sales and HR process optimization), coaching for individuals in job interviews and financial planning, and a free supply chain quickscan, across eight Dutch cities. To keep growing, Rifas wanted to build its client database and improve its online presence.",
      paragraph2Lead:
        "We Improved the Website and Added a Marketing Package,",
      paragraph2Rest:
        "building on what Rifas already had instead of starting over. We made improvements to the existing website and provided an online marketing package to help reach more potential clients.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "The work stayed centered on the two goals Rifas set: more clients in its database and a clearer presence online. Pairing website improvements with marketing meant visitors had a stronger site to land on.",
      paragraph4:
        "For a training provider with courses for both companies and individuals, a website that explains each offer clearly is the base that marketing builds on.",
    },
  },
  {
    id: "hassaan-travel",
    slug: "hassaan-travel",
    image: "/assets/images/portfolio/cards/hassan_card.png",
    logo: "/assets/images/clients2/hasaan.webp",
    image1: "/assets/images/portfolio/clients/hassaan1.webp",
    image2: "/assets/images/portfolio/clients/hassaan2.webp",
    image3: "/assets/images/portfolio/clients/hassaan3.webp",
    showcaseImage: "/assets/images/portfolio/clients/hassaan1.webp",
    bannerImage: "/assets/images/portfolio/clients/hassaan3.webp",
    translationKey: "hassaanTravel",
    defaultName: "Hassaan Travel",
    defaultDescription:
      "Remote call center resources and a renewed website for a Rotterdam travel agency serving travelers since 2006.",
    accentColor: "#0284C7",
    heroHeadline:
      "Hassaan Travel: More Capacity Behind the Phones, a Fresh Look Online",
    heroSubtext:
      "Remote call center resources and a renewed website for a Rotterdam travel agency serving travelers since 2006.",
    pageTitle: "Hassaan Travel Case Study: Website & Call Center | ITWW",
    metaDescription:
      "IT Solutions Worldwide renewed the Hassaan Travel website and supplied remote call center resources for a Rotterdam travel agency at a lower budget.",
    primaryKeyword: "call center outsourcing for travel agencies",
    secondaryKeywords: [
      "travel agency website redesign Netherlands",
      "remote call center resources",
    ],
    imageAlt: "Hassaan Travel website renewed by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#0284C7",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Hassaan Travel", highlight: true },
        { text: " Needed " },
        { text: "More Capacity", highlight: true },
        { text: " and a Better Website" },
      ],
      paragraph1:
        "Established in 2006, Hassaan Travel is a Rotterdam travel agency offering flight tickets, visa processing (Pakistan, Saudi/Umrah and other destinations), hotel bookings and Umrah packages. The agency was short on resources and wanted to improve its website.",
      paragraph2Lead:
        "We Added Call Center Capacity and Renewed the Website.",
      paragraph2Rest:
        "We provided remote resources for the agency's call center and renewed its website, giving the team more capacity behind the phones and a refreshed online presence.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "Hassaan Travel received skilled call center resources at a lower budget, along with a renewed website, from a single partner.",
      paragraph4:
        "Handling both the staffing and the website with one partner kept the project simple to manage.",
    },
  },
  {
    id: "babylon-logistics",
    slug: "babylon-logistics",
    image: "/assets/images/portfolio/cards/babylon_card.png",
    logo: "/assets/images/babylon.svg",
    image1: "/assets/images/portfolio/clients/babylon1.webp",
    image2: "/assets/images/portfolio/clients/babylon2.webp",
    image3: "/assets/images/portfolio/clients/babylon3.webp",
    showcaseImage: "/assets/images/portfolio/clients/babylon1.webp",
    bannerImage: "/assets/images/portfolio/clients/babylon3.webp",
    translationKey: "babylonLogistics",
    defaultName: "Babylon Logistics",
    defaultDescription:
      "A same-day Benelux transport company gets its online home, built in just five days.",
    accentColor: "#D97706",
    heroHeadline: "Babylon Logistics: From No Website to Live in 5 Days",
    heroSubtext:
      "A same-day Benelux transport company gets its online home, built in just five days.",
    pageTitle: "Babylon Logistics Case Study: Website in 5 Days | ITWW",
    metaDescription:
      "Babylon Logistics had no website. IT Solutions Worldwide delivered one within five days for this Benelux same-day transport company.",
    primaryKeyword: "logistics company website development",
    secondaryKeywords: [
      "transport company website Netherlands",
      "website built in 5 days",
    ],
    imageAlt:
      "Babylon Logistics transport website built in five days by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#D97706",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Babylon Logistics", highlight: true },
        { text: " Started With " },
        { text: "No Website", highlight: true },
        { text: " at All" },
      ],
      paragraph1:
        "Established in 2021, Babylon Logistics offers same-day pickup and delivery across the Benelux for dry, chilled (2-4°C) and frozen (-22°C) goods, from single boxes to multiple pallets. The company had no website to present those services.",
      paragraph2Lead: "We Took It From Nothing to Live in Five Days.",
      paragraph2Rest:
        "We designed and built the Babylon Logistics website within five days, giving the company an online home for its services.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "Babylon Logistics received a website that presents its transport, temperature-controlled and pallet services in one place, delivered quickly for a business whose own service is built on speed.",
      paragraph4:
        "A fast, focused build suited a young company that needed to get online and start showing what it offers.",
    },
  },
  {
    id: "dinel",
    slug: "dinel",
    image: "/assets/images/portfolio/cards/dinel_card.png",
    logo: "/assets/images/dinel.webp",
    image1: "/assets/images/portfolio/clients/dinel1.png",
    image2: "/assets/images/portfolio/clients/dinel2.png",
    image3: "/assets/images/portfolio/clients/dinel3.png",
    showcaseImage: "/assets/images/portfolio/clients/dinel1.png",
    bannerImage: "/assets/images/portfolio/clients/dinel3.png",
    translationKey: "dinel",
    defaultName: "Dinel",
    defaultDescription:
      "A new website, online marketing support and remote admin resources for a technical secondment firm.",
    accentColor: "#2563EB",
    heroHeadline: "Dinel: A New Website for a Technical Talent Specialist",
    heroSubtext:
      "A new website, online marketing support and remote admin resources for a technical secondment firm.",
    pageTitle: "Dinel Case Study: New Website & Remote Resources | ITWW",
    metaDescription:
      "IT Solutions Worldwide built a new website, supported online marketing and provided remote admin resources for technical staffing firm Dinel.",
    primaryKeyword: "technical staffing website development",
    secondaryKeywords: [
      "secondment agency online marketing",
      "remote admin resources",
    ],
    imageAlt: "Dinel technical staffing website built by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#2563EB",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Dinel", highlight: true },
        { text: " Needed More " },
        { text: "Resources", highlight: true },
        { text: " and More " },
        { text: "Online Visibility", highlight: true },
      ],
      paragraph1:
        "Founded more than 20 years ago by Paul Mathey, Dinel seconds technical professionals (MBO, HBO and WO level) to projects in instrumentation, electrical and mechanical engineering, industrial automation and infrastructure, and runs a Young Engineering Professionals program for early-career engineers. It lacked resources and wanted to increase its online marketing.",
      paragraph2Lead:
        "We Launched a New Website and Added Remote Support.",
      paragraph2Rest:
        "We built a new website, supported online marketing and provided remote resources, including skilled admin support at a lower budget.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "Dinel received three things from one partner: a new website, online marketing support and remote admin capacity.",
      paragraph4:
        "The remote admin resources gave the team extra hands for administrative work while the website and marketing work moved forward.",
    },
  },
  {
    id: "hbc",
    slug: "hbc",
    image: "/assets/images/portfolio/cards/hbc_card.png",
    logo: "/assets/images/clients2/hbc.png",
    image1: "/assets/images/portfolio/clients/hbc1.webp",
    image2: "/assets/images/portfolio/clients/hbc2.webp",
    image3: "/assets/images/portfolio/clients/hbc3.webp",
    showcaseImage: "/assets/images/portfolio/clients/hbc1.webp",
    bannerImage: "/assets/images/portfolio/clients/hbc3.webp",
    translationKey: "hbc",
    defaultName: "HBC",
    defaultDescription:
      "Online marketing for a halal burger and chicken franchise with branches across the Netherlands.",
    accentColor: "#C52127",
    heroHeadline:
      "HBC: Social Media Campaigns for a Halal Burger Franchise",
    heroSubtext:
      "Online marketing for a halal burger and chicken franchise with branches across the Netherlands.",
    pageTitle: "HBC Case Study: Social Media Marketing Campaigns | ITWW",
    metaDescription:
      "IT Solutions Worldwide ran social media marketing campaigns for HBC, a halal burger and chicken franchise with branches across the Netherlands.",
    primaryKeyword: "restaurant social media marketing Netherlands",
    secondaryKeywords: [
      "franchise social media campaigns",
      "halal restaurant marketing",
    ],
    imageAlt:
      "HBC halal burgers and chicken franchise supported by IT Solutions Worldwide social media campaigns",
    caseStudy: {
      accentColor: "#C52127",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "HBC", highlight: true },
        { text: " Needed " },
        { text: "Online Marketing", highlight: true },
        { text: " Support" },
      ],
      paragraph1:
        "HBC (Halal Burgers & Chicken) serves halal burgers, chicken, wraps and kids' menus from branches in Amsterdam, Utrecht, The Hague, Beverwijk and Arnhem, run from Amstelveen, and also offers a franchise program. Established in April 2026, the brand needed online marketing.",
      paragraph2Lead: "We Ran Its Social Media Campaigns.",
      paragraph2Rest:
        "We delivered social media marketing campaigns for HBC.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "HBC received social media marketing campaigns to support its online presence across its branches.",
      paragraph4:
        "Consistent campaigns and audience engagement helped highlight new branch openings and connect with customers across Dutch cities.",
    },
  },
  {
    id: "xtreme-tuning",
    slug: "x-tremetunings",
    image: "/assets/images/portfolio/cards/xtreme_card.png",
    logo: "/assets/images/logos/xtremetuning.webp",
    image1: "/assets/images/portfolio/clients/xtreme1.webp",
    image2: "/assets/images/portfolio/clients/xtreme2.webp",
    image3: "/assets/images/portfolio/clients/xtreme3.webp",
    showcaseImage: "/assets/images/portfolio/clients/xtreme1.webp",
    bannerImage: "/assets/images/portfolio/clients/xtreme3.webp",
    translationKey: "xtremeTuning",
    defaultName: "X-tremetunings",
    defaultDescription:
      "A new responsive website for a Dutch chiptuning and performance tuning specialist.",
    accentColor: "#DC2626",
    heroHeadline:
      "X-tremetunings: A Website That Finally Fits Every Screen",
    heroSubtext:
      "A new responsive website for a Dutch chiptuning and performance tuning specialist.",
    pageTitle: "X-tremetunings Case Study: New Responsive Website | ITWW",
    metaDescription:
      "IT Solutions Worldwide replaced a non-responsive website with a new site for X-tremetunings, a Dutch chiptuning and performance tuning company.",
    primaryKeyword: "responsive website for tuning company",
    secondaryKeywords: [
      "car tuning website development Netherlands",
      "chiptuning website",
    ],
    imageAlt:
      "X-tremetunings chiptuning website rebuilt by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#DC2626",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "X-tremetunings", highlight: true },
        { text: " Needed a Website That Works on " },
        { text: "Every Screen", highlight: true },
      ],
      paragraph1:
        "Established on 1 June 2021, X-tremetunings offers ECU chiptuning (Stage 1 and 2), DSG gearbox tuning, Eco tuning and AdBlue solutions for diesel engines. Its website was not responsive, so it did not adapt properly to different devices.",
      paragraph2Lead: "We Replaced It With a New Website.",
      paragraph2Rest:
        "We built a new website to replace the non-responsive version, giving the company a modern, device-friendly online presence.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "X-tremetunings received a new website that replaces the old one and fixes the core problem it came to us with.",
      paragraph4:
        "For a company whose customers compare tuning options online, a site that works on a phone as well as a desktop matters.",
    },
  },
  {
    id: "g-rollz",
    slug: "g-rollz",
    image: "/assets/images/portfolio/cards/grollz_card.png",
    logo: "/assets/images/g-rollz.webp",
    image1: "/assets/images/portfolio/clients/grollz1.png",
    image2: "/assets/images/portfolio/clients/grollz2.png",
    image3: "/assets/images/portfolio/clients/grollz3.png",
    showcaseImage: "/assets/images/portfolio/clients/grollz1.png",
    bannerImage: "/assets/images/portfolio/clients/grollz3.png",
    translationKey: "gRollz",
    defaultName: "G-Rollz (Grollz)",
    defaultDescription:
      "A new website, NetSuite go-live support and a sales strategy for an Amsterdam rolling paper brand.",
    accentColor: "#7C3AED",
    heroHeadline:
      "G-Rollz: One Website for B2B and B2C, Backed by NetSuite and a Sales Plan",
    heroSubtext:
      "A new website, NetSuite go-live support and a sales strategy for an Amsterdam rolling paper brand.",
    pageTitle: "G-Rollz Case Study: B2B/B2C Website & NetSuite | ITWW",
    metaDescription:
      "IT Solutions Worldwide built a combined B2B and B2C website for G-Rollz, supported its NetSuite go-live and ran a sales project to boost sales.",
    primaryKeyword: "B2B and B2C ecommerce website development",
    secondaryKeywords: [
      "NetSuite implementation support Netherlands",
      "ecommerce sales strategy Europe",
    ],
    imageAlt: "G-Rollz B2B and B2C website built by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#7C3AED",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "G-Rollz", highlight: true },
        { text: " Needed a " },
        { text: "New Website", highlight: true },
        { text: ", NetSuite Support and a Sales Push" },
      ],
      paragraph1:
        "Established on 12 October 2005, G-Rollz is an Amsterdam brand of rolling papers and cones made from unbleached, hemp and rice materials, known for pop-culture designs including a licensed Banksy collaboration. It sells to consumers and, through its B2B platform grollz.biz, to retailers and distributors. G-Rollz needed a new website, support with its NetSuite implementation and help increasing sales.",
      paragraph2Lead:
        "We Delivered the Website, the System Support and the Sales Plan.",
      paragraph2Rest:
        "We created a new website that supports both B2B and B2C. Our NetSuite functional support team supported the implementation through go-live, and we delivered a sales strategy plan with a sales project team to boost sales.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "G-Rollz received a website built for both B2B and B2C, NetSuite support from implementation to go-live, and a sales plan with a project team behind it.",
      paragraph4:
        "Our broad NetSuite knowledge and understanding of the European market shaped both the system support and the sales approach.",
    },
  },
  {
    id: "hitachi-cm",
    slug: "hitachi-construction-machinery-europe",
    image: "/assets/images/portfolio/cards/hitech_card.png",
    logo: "/assets/images/hitachikenki.webp",
    image1: "/assets/images/portfolio/clients/hitech1.png",
    image2: "/assets/images/portfolio/clients/hitech2.jpg",
    image3: "/assets/images/portfolio/clients/hitech3.png",
    showcaseImage: "/assets/images/portfolio/clients/hitech1.png",
    bannerImage: "/assets/images/portfolio/clients/hitech3.png",
    translationKey: "hitachiCm",
    defaultName: "Hitachi Construction Machinery (Europe) NV",
    defaultDescription:
      "AI safety stock and dock planning, clean master data and a redesigned yard cut annual inventory losses by 4 million EUR.",
    accentColor: "#EA580C",
    heroHeadline:
      "Hitachi Construction Machinery Europe: AI Planning That Cut Inventory Losses by €4M",
    heroSubtext:
      "AI safety stock and dock planning, clean master data and a redesigned yard cut annual inventory losses by 4 million EUR.",
    pageTitle: "Hitachi CM Europe Case Study: AI Supply Chain | ITWW",
    metaDescription:
      "AI safety stock and dock planning, master data cleanup and yard redesign helped Hitachi Construction Machinery Europe cut inventory losses by €4M a year.",
    primaryKeyword: "AI safety stock model",
    secondaryKeywords: [
      "AI dock planning tool",
      "MRP parameter cleanup",
      "supply chain optimization manufacturing",
    ],
    imageAlt:
      "Hitachi Construction Machinery Europe supply chain optimization project by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#EA580C",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Hitachi", highlight: true },
        { text: " Needed " },
        { text: "Reliable Planning", highlight: true },
        { text: " Behind Its Component Supply" },
      ],
      paragraph1:
        "Hitachi Construction Machinery (Europe) NV, established in 2004, manufactures, sells and markets excavators, wheel loaders and rigid dump trucks, plus LANDCROS fleet management software, across Europe, Africa and the Middle East. Its MRP parameters were messy, and improper planning of components was causing losses.",
      paragraph2Lead:
        "We Combined Clean Data, AI Tools and a Smarter Warehouse Strategy.",
      paragraph2Rest:
        "We cleaned up the master data and built a supply chain strategy to optimize warehouse, purchasing and planning procedures. We developed an AI-based safety stock model and an AI dock planning tool, redesigned the yard, and created Power BI dashboards to control operational KPIs, working in SAP ECC with n8n automation.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "The optimization decreased Hitachi's annual inventory losses by 4 million EUR.",
      paragraph4:
        "Combining master data, warehouse design and AI in one project meant the fixes worked together, and the Power BI dashboards gave the team control over operational KPIs.",
    },
  },
  {
    id: "allseas",
    slug: "allseas",
    image: "/assets/images/portfolio/cards/alseas_card.png",
    logo: "/assets/images/logos/allseas-lg.webp",
    image1: "/assets/images/portfolio/clients/alseas1.png",
    image2: "/assets/images/portfolio/clients/alseas2.png",
    image3: "/assets/images/portfolio/clients/alseas3.png",
    showcaseImage: "/assets/images/portfolio/clients/alseas1.png",
    bannerImage: "/assets/images/portfolio/clients/alseas3.png",
    translationKey: "allseas",
    defaultName: "Allseas",
    defaultDescription:
      "Master data cleanup and a supply chain strategy for a major offshore contractor.",
    accentColor: "#0284C7",
    heroHeadline:
      "Allseas: Clean Data for a Smoother ERP Move From Oracle to SAP",
    heroSubtext:
      "Master data cleanup and a supply chain strategy for a major offshore contractor.",
    pageTitle: "Allseas Case Study: SAP Master Data & Supply Chain | ITWW",
    metaDescription:
      "How IT Solutions Worldwide cleaned up master data after an Oracle-to-SAP move and set a supply chain strategy for offshore contractor Allseas.",
    primaryKeyword: "SAP master data migration",
    secondaryKeywords: [
      "Oracle to SAP data migration",
      "supply chain optimization strategy",
    ],
    imageAlt:
      "Allseas offshore project supported by IT Solutions Worldwide with SAP master data cleanup",
    caseStudy: {
      accentColor: "#0284C7",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Allseas", highlight: true },
        { text: " Needed Clean Data to Make Its " },
        { text: "New ERP Work", highlight: true },
      ],
      paragraph1:
        "Established in 1985, Allseas is a major offshore contractor working in subsea pipelay, platform transport and decommissioning, and heavy lift construction. When its ERP moved from Oracle to SAP, outdated data was imported into the new system, and messy supply chain operations made it hard to deliver project components on time.",
      paragraph2Lead:
        "We Cleaned the Data and Reset the Supply Chain Approach.",
      paragraph2Rest:
        "We ran a master data migration project to clean up and optimize the data, provided a supply chain management optimization strategy, and supplied resources in the Netherlands to strengthen the team. The work spanned SAP S/4HANA, Power BI and Oracle Fusion.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "Allseas's new ERP gained a cleaner data foundation through the master data migration project, along with a supply chain optimization strategy to guide operations.",
      paragraph4:
        "The additional resources in the Netherlands strengthened Allseas's team with supply chain and master data expertise.",
    },
  },
  {
    id: "jumbo-sports",
    slug: "jumbo-sports",
    image: "/assets/images/portfolio/cards/jumbo_card.png",
    logo: "/assets/images/logos/jumbo-sports.webp",
    image1: "/assets/images/portfolio/clients/jumbo1.png",
    image2: "/assets/images/portfolio/clients/jumbo2.png",
    image3: "/assets/images/portfolio/clients/jumbo3.png",
    showcaseImage: "/assets/images/portfolio/clients/jumbo1.png",
    bannerImage: "/assets/images/portfolio/clients/jumbo3.png",
    translationKey: "jumboSports",
    defaultName: "Jumbo Sports",
    defaultDescription:
      "A warehouse redesign, mezzanine and smarter transport routes for a golf and hockey specialist with 12 stores.",
    accentColor: "#EAB308",
    heroHeadline: "Jumbo Sports: B2B and B2C Under One Warehouse Roof",
    heroSubtext:
      "A warehouse redesign, mezzanine and smarter transport routes for a golf and hockey specialist with 12 stores.",
    pageTitle: "Jumbo Sports Case Study: Warehouse Consolidation | ITWW",
    metaDescription:
      "IT Solutions Worldwide merged B2B and B2C flows into one distribution center for Jumbo Sports with a warehouse redesign, mezzanine and Storeganizers.",
    primaryKeyword: "warehouse optimization B2B B2C",
    secondaryKeywords: [
      "warehouse redesign mezzanine",
      "distribution center consolidation",
    ],
    imageAlt:
      "Jumbo Sports distribution center redesigned by IT Solutions Worldwide",
    caseStudy: {
      accentColor: "#EAB308",
      eyebrow: "OUR WORK · PORTFOLIO",
      title1Parts: [
        { text: "Jumbo Sports", highlight: true },
        { text: " Needed to Move Out of Its " },
        { text: "External Warehouse", highlight: true },
      ],
      paragraph1:
        "Established in September 2022, Jumbo Sports is a golf and hockey specialist selling clubs, apparel, shoes, bags and accessories, plus hockey sticks, protection, apparel and footwear, online and through 12 stores in the Netherlands and Belgium. It needed to get rid of its external warehouse, which meant fitting both B2B and B2C flows into one distribution center.",
      paragraph2Lead:
        "We Redesigned the Warehouse to Do More With the Same Space.",
      paragraph2Rest:
        "We integrated B2B and B2C into one warehouse, optimized storage to use the same square meters more efficiently, and optimized warehouse operations and transport routes to support both flows from the same distribution center. The redesign included Storeganizers and a mezzanine that uses the air space.",
      title2Parts: [
        { text: "A " },
        { text: "Partnership", highlight: true },
        { text: " That " },
        { text: "Delivered", highlight: true },
      ],
      paragraph3:
        "The result is one distribution center serving both B2B and B2C flows, with storage reorganized to use the same floor area more efficiently.",
      paragraph4:
        "Our supply chain, transport planning and warehouse design experience covered the whole flow, from storage solutions to transport routes.",
    },
  },
];

export function getClientBySlug(slug: string): PortfolioClientConfig | undefined {
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  return PORTFOLIO_CLIENTS.find((c) => {
    const cSlugNorm = c.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cIdNorm = c.id.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      c.slug.toLowerCase() === slug.toLowerCase() ||
      c.id.toLowerCase() === slug.toLowerCase() ||
      cSlugNorm === normalized ||
      cIdNorm === normalized ||
      (c.id === "hitachi-cm" && (slug.includes("hitachi") || normalized.includes("hitachi")))
    );
  });
}
