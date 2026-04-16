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

const projects = [
  {
    title: "Crimelink Analyzer",
    description:
      "An intelligent crime analyzing web application that helps law enforcement agencies to analyze crime data and identify patterns and trends.",
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
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/iSiRaH/Crimelink_Analyzer",
  },
  {
    title: "Transist Tracker",
    description:
      "A real-time public transportation tracking application that lets users to get location and eta of services.",
    techStack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    imageSrc: [
      transist_tracker_preview_1,
      transist_tracker_preview_2,
      transist_tracker_preview_3,
      transist_tracker_preview_4,
      transist_tracker_preview_5,
      transist_tracker_preview_6,
    ],
    imageAlt: "Transist Tracker preview",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/iSiRaH/Transist-Tracker-user",
  },
  {
    title: "Placeit-AR",
    description:
      "An AR application that detects flat surfaces and lets users to place objects on augmented reality.",
    techStack: ["Unity", "Ar-Core", "C#", "C++"],
    imageSrc: [AR_app_preview],
    imageAlt: "Placeit-AR preview",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/iSiRaH/AR_app",
  },
  {
    title: "BlueLanka Guide",
    description:
      "A desktop application that lets users to explore and discover information about various costal places in Sri Lanka.",
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
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/iSiRaH/java-project",
  },
  {
    title: "Marketplace",
    description:
      "A web application that lets users create posts to sell their products and services, and also lets users to buy products and services from other users.",
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
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/iSiRaH/Marketplace",
  },
];

export default projects;
