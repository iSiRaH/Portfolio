import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://isirahansaja.xyz";

const seoByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Isira Hansaja — Full-Stack Developer",
    description:
      "Portfolio of Isira Hansaja, a full-stack developer building accessible web, mobile, and API-driven products with React, Node.js, Spring Boot, and Flutter.",
  },
  "/about": {
    title: "About Isira Hansaja — Full-Stack Developer",
    description:
      "Learn about Isira Hansaja's approach to full-stack development, product design, clean code, and computer science education.",
  },
  "/projects": {
    title: "Projects — Isira Hansaja",
    description:
      "Explore full-stack, mobile, augmented reality, and desktop projects built by Isira Hansaja.",
  },
  "/certificates": {
    title: "Certificates — Isira Hansaja",
    description:
      "Professional certificates and learning milestones completed by full-stack developer Isira Hansaja.",
  },
  "/contact": {
    title: "Contact Isira Hansaja",
    description:
      "Contact full-stack developer Isira Hansaja to discuss software projects, collaboration, and development opportunities.",
  },
};

const setMeta = (selector: string, attribute: string, value: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute(attribute, value);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoByPath[pathname] ?? seoByPath["/"];
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
};

export default Seo;
