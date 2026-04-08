import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-3 z-40 mb-4 fade-in">
      <div className="page-section section-inner flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={reactLogo} alt="Logo" className="h-9 w-9" />
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-semibold leading-none">
              Isira Hansaja
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-medium transition ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--chip)] hover:text-[var(--text)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-2 text-[var(--text)] transition hover:-translate-y-0.5"
            href="https://github.com/iSiRaH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28} className="text-current" />
          </a>

          <a
            className="cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-2 text-[var(--text)] transition hover:-translate-y-0.5"
            href="https://www.linkedin.com/in/isira-hansaja-nanayakkara/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} className="text-current" />
          </a>

          <a
            className="cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-2 text-[var(--text)] transition hover:-translate-y-0.5"
            href="https://x.com/hansaja4156"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter size={28} className="text-current" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
