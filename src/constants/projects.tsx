import AR_app_preview from "../assets/projects/AR_app.png";
import crimelink_preview_1 from "../assets/projects/Crimelink/crimelink1.png";
import crimelink_preview_2 from "../assets/projects/Crimelink/crimelink2.png";
import crimelink_preview_3 from "../assets/projects/Crimelink/crimelink3.png";
import crimelink_preview_4 from "../assets/projects/Crimelink/crimelink4.png";
import transist_tracker_preview_1 from "../assets/projects/Transist Tracker/transist_tracker_1.png";
import transist_tracker_preview_2 from "../assets/projects/Transist Tracker/transist_tracker_2.png";
import transist_tracker_preview_3 from "../assets/projects/Transist Tracker/transist_tracker_3.png";
import transist_tracker_preview_4 from "../assets/projects/Transist Tracker/transist_tracker_4.png";
import transist_tracker_preview_5 from "../assets/projects/Transist Tracker/transist_tracker_5.png";
import transist_tracker_preview_6 from "../assets/projects/Transist Tracker/transist_tracker_6.png";
import marketplace_preview_1 from "../assets/projects/marketplace/marketplace_1.png";
import bluelanka_guide_preview_1 from "../assets/projects/Bluelanka Guide/bluelanka_1.png";
import bluelanka_guide_preview_2 from "../assets/projects/Bluelanka Guide/bluelanka_2.png";
import bluelanka_guide_preview_3 from "../assets/projects/Bluelanka Guide/bluelanka_3.png";
import bluelanka_guide_preview_4 from "../assets/projects/Bluelanka Guide/bluelanka_4.png";
import bluelanka_guide_preview_5 from "../assets/projects/Bluelanka Guide/bluelanka_5.png";
import bluelanka_guide_preview_6 from "../assets/projects/Bluelanka Guide/bluelanka_6.png";
import lams_preview_1 from "../assets/projects/lams/localhost_8000_lams_.png";
import lams_preview_2 from "../assets/projects/lams/localhost_8000_lams_dashboard.png";
import lams_preview_3 from "../assets/projects/lams/localhost_8000_lams_acquisition-workflow.png";
import lams_preview_4 from "../assets/projects/lams/localhost_8000_lams_documents.png";
import lams_preview_5 from "../assets/projects/lams/localhost_8000_lams_gis-maps.png";
import lams_preview_6 from "../assets/projects/lams/localhost_8000_lams_mark-progress.png";
import lams_preview_7 from "../assets/projects/lams/localhost_8000_lams_notifications.png";
import lams_preview_8 from "../assets/projects/lams/localhost_8000_lams_land-parcels.png";
import cpi_preview_1 from "../assets/projects/cpi/cpi-website.vercel.app_.png";
import cpi_preview_2 from "../assets/projects/cpi/cpi-website.vercel.app_shop.png";
import cpi_preview_3 from "../assets/projects/cpi/cpi-website.vercel.app_about-us.png";
import cpi_preview_4 from "../assets/projects/cpi/cpi-website.vercel.app_contact.png";
import multi_tools_preview_1 from "../assets/projects/multi-tools/www.multi-tools.app_.png";
import multi_tools_preview_2 from "../assets/projects/multi-tools/www.multi-tools.app_dark.png";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string | string[];
  imageAlt: string;
  sourceUrl?: string;
  previewUrl?: string;
};

const projects: Project[] = [
  {
    title: "Land Acquisition Management System",
    description:
      "A web-based enterprise management system developed for the Chief Ministry of the Southern Province to digitize, streamline, and track land acquisition processes, documentation, compensation, and administrative workflows.",
    techStack: [
      "React",
      "TypeScript",
      "Laravel",
      "PHP",
      "Inertia.js",
      "Tailwind",
      "MySQL",
    ],
    imageSrc: [
      lams_preview_1,
      lams_preview_2,
      lams_preview_3,
      lams_preview_4,
      lams_preview_5,
      lams_preview_6,
      lams_preview_7,
      lams_preview_8,
    ],
    imageAlt: "Land Acquisition Management System preview",
    sourceUrl:
      "https://github.com/Chief-Ministry-Southern-Province/Land-Acquisition-Management-System",
  },
  {
    title: "MultiTools",
    description:
      "An all-in-one web utility platform offering free, browser-based online tools designed to simplify everyday developer tasks, boost productivity, and streamline digital workflows.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    imageSrc: [multi_tools_preview_1, multi_tools_preview_2],
    imageAlt: "MultiTools preview",
    sourceUrl: "https://github.com/Hansaja132/all-tools-online",
    previewUrl: "https://www.multi-tools.app/",
  },
  {
    title: "Crimelink Analyzer",
    description:
      "A crime-analysis web application that helps law-enforcement teams explore data, uncover patterns, and identify trends.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Spring-boot",
      "PostgreSQL",
      "Python-fastapi",
    ],
    imageSrc: [
      crimelink_preview_1,
      crimelink_preview_2,
      crimelink_preview_3,
      crimelink_preview_4,
    ],
    imageAlt: "Crimelink Analyzer preview",
    sourceUrl: "https://github.com/iSiRaH/Crimelink_Analyzer",
  },
  {
    title: "CPI Footwear",
    description:
      "A full-stack e-commerce showcase built for CPI footwear brand, featuring a responsive product catalog, dynamic content management, and a secure administrative dashboard.",
    techStack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "Tailwind",
      "MongoDB",
    ],
    imageSrc: [cpi_preview_1, cpi_preview_2, cpi_preview_3, cpi_preview_4],
    imageAlt: "CPI Footwear preview",
    previewUrl: "https://cpi-website.vercel.app/",
  },
  {
    title: "Transit Tracker",
    description:
      "A real-time public transport application that helps passengers see vehicle locations and estimated arrival times.",
    techStack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    imageSrc: [
      transist_tracker_preview_1,
      transist_tracker_preview_2,
      transist_tracker_preview_3,
      transist_tracker_preview_4,
      transist_tracker_preview_5,
      transist_tracker_preview_6,
    ],
    imageAlt: "Transit Tracker preview",
    sourceUrl: "https://github.com/iSiRaH/Transist-Tracker-user",
  },
  {
    title: "Placeit-AR",
    description:
      "An augmented-reality application that detects flat surfaces and lets users place virtual objects in their environment.",
    techStack: ["Unity", "Ar-Core", "C#", "C++"],
    imageSrc: [AR_app_preview],
    imageAlt: "Placeit-AR preview",
    sourceUrl: "https://github.com/iSiRaH/AR_app",
  },
  {
    title: "BlueLanka Guide",
    description:
      "A desktop guide for exploring and discovering information about coastal destinations across Sri Lanka.",
    techStack: ["Java", "JavaFX", "CSS", "SQLite"],
    imageSrc: [
      bluelanka_guide_preview_1,
      bluelanka_guide_preview_2,
      bluelanka_guide_preview_3,
      bluelanka_guide_preview_4,
      bluelanka_guide_preview_5,
      bluelanka_guide_preview_6,
    ],
    imageAlt: "BlueLanka Guide preview",
    sourceUrl: "https://github.com/iSiRaH/java-project",
  },
  {
    title: "Marketplace",
    description:
      "A marketplace where people can create listings and discover products and services offered by other users.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageSrc: [marketplace_preview_1],
    imageAlt: "Marketplace preview",
    sourceUrl: "https://github.com/iSiRaH/Marketplace",
  },
];

export default projects;
