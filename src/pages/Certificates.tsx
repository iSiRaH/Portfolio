import { useEffect, useState } from "react";
import CertificateCard from "../components/CertificateCard";

const certificates = [
  {
    name: "MCP for Beginners",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022047/MCP_for_Beginners_KodeKloud_jntkxl.png",
    imageAlt: "MCP for Beginners certificate",
  },
  {
    name: "Docker for Beginners",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022083/Docker-for-Beginners_s531iz.jpg",
    imageAlt: "Docker for Beginners certificate",
  },
  {
    name: "Introduction to C",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022026/Intro_to_C_ujvvwx.jpg",
    imageAlt: "Introduction to C certificate",
  },
  {
    name: "Introduction to Java",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022025/Intro_to_Java_kwnzyn.jpg",
    imageAlt: "Introduction to Java certificate",
  },
  {
    name: "Web Development",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022061/Web_Development_Sololearn_ruo2qo.png",
    imageAlt: "Web Development Sololearn certificate",
  },
  {
    name: "Seo withAI",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022054/SEO_with_AI_certificate_xljpy0.jpg",
    imageAlt: "Seo with AI certificate",
  },
  {
    name: "Python for Beginners",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022054/Python_for_Beginners_E-Certificate_msxqqr.png",
    imageAlt: "Python for Beginners certificate",
  },
  {
    name: "Prompt Engineering",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022034/Prompt_Engineering_Sololearn_d24xxp.png",
    imageAlt: "Prompt Engineering certificate",
  },
  {
    name: "Vibe Coding",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022062/Vibe_Coding_sololearn_aeoseq.png",
    imageAlt: "Vibe Coding certificate",
  },
  {
    name: "Road to Insurgex",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022095/hackothon_certificate_oodq62.png",
    imageAlt: "Road to Insurgex certificate",
  },
  {
    name: "Insurgex 1.0 hackathon",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022040/Insurgex_pzojd4.png",
    imageAlt: "Insurgex 1.0 hackathon certificate",
  },
  {
    name: "Road to Rush Coder Hackathon",
    imageSrc:
      "https://res.cloudinary.com/de8t0e5q5/image/upload/v1777022076/N.W.J_Isira_Hansaja_s9vb8k.jpg",
    imageAlt: "Road to Rush Coder Hackathon certificate",
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
