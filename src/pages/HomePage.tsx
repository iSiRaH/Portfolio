import ProjectCard from "../components/ProjectCard";
import projectPreview from "../assets/projects/preview1600_1000.jpeg";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const myTechStack = [
  { name: "React", icon: <FaReact size={20} /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs size={20} /> },
  { name: "MongoDB", icon: <DiMongodb size={20} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio with smooth routing, reusable UI components, and clean section-based navigation.",
    techStack: ["React", "TypeScript", "Tailwind"],
    imageSrc: projectPreview,
    imageAlt: "Portfolio website preview",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for planning work with status tracking, filters, and reusable card-based layouts.",
    techStack: ["React", "Node.js", "MongoDB"],
    imageSrc: projectPreview,
    imageAlt: "Task management app preview",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "An analytics dashboard that visualizes sales trends, inventory data, and order performance in real time.",
    techStack: ["React", "Express", "PostgreSQL"],
    imageSrc: projectPreview,
    imageAlt: "E-commerce dashboard preview",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
];

const HomePage = () => {
  return (
    <div className="space-y-6 fade-in">
      <section className="page-section section-inner">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="chip mb-3">Software Developer</p>
            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight sm:text-5xl">
              Building modern, reliable web experiences
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
              Hi, I&apos;m Isira Hansaja. I design and build responsive
              applications with clean architecture, reusable components, and
              thoughtful user experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View My Projects
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
              <img
                src={profileImage}
                alt="Isira Hansaja"
                className="h-72 w-72 rounded-2xl object-cover md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-inner">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">Technologies I use most often:</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {myTechStack.map((tech) => (
            <span key={tech.name} className="chip">
              {tech.icon}
              &nbsp;&nbsp;
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section className="page-section section-inner">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work:</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
