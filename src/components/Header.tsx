import { useState } from "react";
import { NavLink } from "react-router-dom";
import siteLogo from "../assets/Favicon.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBars, FaXTwitter, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-3 z-40 mb-4 fade-in">
      <div className="page-section section-inner flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={siteLogo}
            alt="Isira Hansaja logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-semibold leading-none">
              Isira Hansaja
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end md:mt-0 md:flex-1 md:justify-end">
          <nav className="hidden items-center gap-2 text-base md:flex">
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

            <button
              type="button"
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-2 text-[var(--text)] transition hover:-translate-y-0.5 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-nav"
            className="mt-4 flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 font-medium transition ${
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
        )}
      </div>
    </header>
  );
};

export default Header;
