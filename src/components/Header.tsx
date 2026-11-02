import { useState } from "react";
import { NavLink } from "react-router-dom";
import siteLogo from "../assets/Favicon.png";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Certificates", to: "/certificates" },
    // { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-3 z-40 mb-2 pt-2 fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-[var(--shadow)] backdrop-blur-xl sm:px-4">
        <NavLink to="/" aria-label="Isira Hansaja, home" className="flex items-center gap-3">
          <img
            src={siteLogo}
            alt=""
            className="h-9 w-9 rounded-full object-contain"
          />
          <div>
            <p className="font-['Space_Grotesk'] text-sm font-semibold leading-none sm:text-base">Isira Hansaja</p>
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-sm md:flex">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 font-medium transition ${
                    isActive
                      ? "bg-[var(--chip)] text-[var(--brand)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--chip)] hover:text-[var(--text)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              className="hidden rounded-full border border-[var(--border)] bg-[var(--chip)] p-2.5 text-[var(--text)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] sm:block"
              href="https://github.com/iSiRaH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <NavLink to="/contact" className="btn-primary hidden text-sm sm:inline-flex">Let&apos;s talk <FaArrowRight /></NavLink>

            <button
              type="button"
              className="rounded-full border border-[var(--border)] bg-[var(--chip)] p-2.5 text-[var(--text)] md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="mt-2 flex w-full flex-col gap-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-accent)] p-2 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
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
