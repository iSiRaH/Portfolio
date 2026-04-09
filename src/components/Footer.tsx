import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import siteLogo from "../assets/Favicon.png";

const Footer = () => {
  return (
    <footer className="pb-5 pt-2 fade-in">
      <div className="page-section section-inner flex flex-col gap-7">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src={siteLogo}
              alt="Isira Hansaja logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-['Space_Grotesk'] text-base font-semibold">
                Isira Hansaja
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Full-Stack Developer
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:gap-5">
            <a
              href="mailto:isirahansaja@gmail.com"
              className="transition hover:text-[var(--brand)]"
            >
              isirahansaja@gmail.com
            </a>
            <a
              href="tel:+94765230307"
              className="transition hover:text-[var(--brand)]"
            >
              +94 76 523 0307
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/iSiRaH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-2.5 text-[var(--text)] transition hover:-translate-y-0.5 hover:text-[var(--brand)]"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/isira-hansaja-nanayakkara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-2.5 text-[var(--text)] transition hover:-translate-y-0.5 hover:text-[var(--brand)]"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://x.com/hansaja4156"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-2.5 text-[var(--text)] transition hover:-translate-y-0.5 hover:text-[var(--brand)]"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-[var(--border)]" />

        <p className="text-center text-sm text-[var(--text-muted)] md:text-left">
          &copy; {new Date().getFullYear()} Isira Hansaja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
