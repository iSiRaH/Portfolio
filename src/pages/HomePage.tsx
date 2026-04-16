import ProjectCard from "../components/ProjectCard";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaC, FaDartLang, FaFlutter } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import projects from "../constants/projects";

const myLanguages = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "C", icon: <FaC /> },
  { name: "Java", icon: <FaJava /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Dart", icon: <FaDartLang /> },
  { name: "C#", icon: <TbBrandCSharp /> },
];

const myFrameworks = [
  { name: "React", icon: <FaReact size={20} /> },
  { name: "React Native", icon: <FaReact size={20} /> },
  { name: "Node.js", icon: <FaNodeJs size={20} /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Spring Boot", icon: <SiSpring /> },
  { name: "Flutter", icon: <FaFlutter /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

const myDatabases = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
  { name: "MongoDB", icon: <DiMongodb size={20} /> },
];

const myTools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Postman", icon: <SiPostman /> },
];

const techGroups = [
  { title: "Languages", items: myLanguages },
  { title: "Frameworks", items: myFrameworks },
  { title: "Databases", items: myDatabases },
  { title: "Tools", items: myTools },
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
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4"
            >
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <span key={tech.name} className="chip">
                    {tech.icon}
                    &nbsp;&nbsp;
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
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
