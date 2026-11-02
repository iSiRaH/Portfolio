import ProjectCard from "../components/ProjectCard";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLayerGroup } from "react-icons/fa6";
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
      <section className="relative py-8 sm:py-14 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_.7fr]">
          <div className="relative z-10">
            <p className="eyebrow">Full-stack developer · Sri Lanka</p>
            <h1 className="display-title">
              I turn ideas into <span className="gradient-text">useful software.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              I&apos;m Isira Hansaja. I build thoughtful web, mobile, and API-driven
              products with clean architecture, accessible interfaces, and a
              sharp eye for the details that make software feel effortless.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                Explore my work <FaArrowRight />
              </Link>
              <Link to="/about" className="btn-secondary">More about me</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-[var(--brand)]/25 bg-[var(--brand)]/5" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow)]">
              <img
                src={profileImage}
                alt="Portrait of Isira Hansaja"
                width="640"
                height="640"
                fetchPriority="high"
                className="aspect-square w-full rounded-[1.45rem] object-cover grayscale-[20%]"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/85 px-4 py-3 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
                <span className="text-sm font-medium">Open to meaningful collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="page-section section-inner">
          <FaCode className="text-3xl text-[var(--brand)]" />
          <h2 className="mt-8 font-['Space_Grotesk'] text-2xl font-semibold tracking-tight">From interface to infrastructure</h2>
          <p className="mt-3 text-[var(--text-muted)]">I work across responsive frontends, backend services, databases, and mobile experiences—keeping every layer focused on the user.</p>
        </article>
        <article className="page-section section-inner">
          <FaLayerGroup className="text-3xl text-[var(--accent)]" />
          <h2 className="mt-8 font-['Space_Grotesk'] text-2xl font-semibold tracking-tight">Built to be understood</h2>
          <p className="mt-3 text-[var(--text-muted)]">Clear systems, reusable components, and maintainable code make products easier to evolve long after the first release.</p>
        </article>
      </section>

      <section className="page-section section-inner">
        <p className="eyebrow">Tools of the trade</p>
        <h2 className="section-title">A practical, full-stack toolkit</h2>
        <p className="section-subtitle">Languages and technologies I use to move from an early idea to a working product.</p>
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
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Projects with a real purpose</h2>
            <p className="section-subtitle">A selection spanning public safety, transport, augmented reality, travel, and commerce.</p>
          </div>
          <Link to="/projects" className="btn-secondary">View all projects <FaArrowRight /></Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
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

      <section className="page-section section-inner overflow-hidden">
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Have an idea?</p>
            <h2 className="section-title max-w-xl">Let&apos;s build something that works beautifully.</h2>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">Start a conversation <FaArrowRight /></Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
