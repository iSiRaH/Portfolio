import { useEffect, useState } from "react";
import CertificateCard from "../components/CertificateCard";
import mcpBeginners from "../assets/certificates/MCP_for_beginners_KodeCloud.png";
import dockerBeginners from "../assets/certificates/Docker-for-Beginners.jpg";
import introToC from "../assets/certificates/Introduction_to_C.jpg";
import introToJava from "../assets/certificates/Introduction_to_Java.jpg";
import seoWithAI from "../assets/certificates/SEO_with_AI_certificate.jpg";

const certificates = [
  {
    name: "MCP for Beginners",
    imageSrc: mcpBeginners,
    imageAlt: "MCP for Beginners certificate",
  },
  {
    name: "Docker for Beginners",
    imageSrc: dockerBeginners,
    imageAlt: "Docker for Beginners certificate",
  },
  {
    name: "Introduction to C",
    imageSrc: introToC,
    imageAlt: "Introduction to C certificate",
  },
  {
    name: "Introduction to Java",
    imageSrc: introToJava,
    imageAlt: "Introduction to Java certificate",
  },
  {
    name: "Seo withAI",
    imageSrc: seoWithAI,
    imageAlt: "Seo with AI certificate",
  },
];

function Certificates() {
  const certificatesPerSlide = 2;
  const totalSlides = Math.ceil(certificates.length / certificatesPerSlide);
  const [activeSlide, setActiveSlide] = useState(0);

  const slideStartIndex = activeSlide * certificatesPerSlide;
  const visibleCertificates = certificates.slice(
    slideStartIndex,
    slideStartIndex + certificatesPerSlide,
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, [totalSlides]);

  const showPrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="page-section section-inner fade-in">
      <h1 className="section-title">Certificates</h1>
      <p className="section-subtitle">
        Professional learning milestones and certifications that support my
        engineering workflow.
      </p>

      <div className="mt-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="grid grid-cols-1 gap-4 px-1 transition duration-500 md:grid-cols-2 md:px-10">
            {visibleCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.name}
                name={certificate.name}
                imageSrc={certificate.imageSrc}
                imageAlt={certificate.imageAlt}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous certificate"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-(--border) bg-(--surface-strong) px-3 py-2 text-lg font-semibold transition hover:-translate-y-1/2 hover:border-(--brand)"
          >
            &#8249;
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next certificate"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-(--border) bg-(--surface-strong) px-3 py-2 text-lg font-semibold transition hover:-translate-y-1/2 hover:border-(--brand)"
          >
            &#8250;
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to certificates slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeSlide
                  ? "bg-(--brand)"
                  : "bg-(--border) hover:bg-(--text-muted)"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
