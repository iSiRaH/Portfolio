import { useEffect, useMemo, useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string | string[];
  imageAlt?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const ProjectCard = ({
  title,
  description,
  techStack,
  imageSrc,
  imageAlt = "Project preview",
  liveUrl,
  sourceUrl,
}: ProjectCardProps) => {
  const images = useMemo(
    () => (Array.isArray(imageSrc) ? imageSrc : [imageSrc]),
    [imageSrc],
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImageSrc = images[activeImageIndex % images.length];

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [images]);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden">
        <img
          src={currentImageSrc}
          alt={imageAlt}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-['Space_Grotesk'] text-xl font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm"
            >
              <FaLink className="w-4 h-4" />
              &nbsp;Live Preview
            </a>
          )}

          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm"
            >
              <FaGithub className="w-5 h-5" />
              &nbsp;Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
