import ProjectCard from "../components/ProjectCard";
import projectPreview from "../assets/projects/preview1600_1000.jpeg";

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

const Projects = () => {
  return (
    <section className="page-section section-inner fade-in">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">
        A selected set of products and experiments focused on quality,
        performance, and real-world use cases.
      </p>

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
  );
};

export default Projects;
