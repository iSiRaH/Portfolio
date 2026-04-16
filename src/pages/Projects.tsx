import ProjectCard from "../components/ProjectCard";
import projects from "../constants/projects";

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
