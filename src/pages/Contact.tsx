const Contact = () => {
  return (
    <section className="page-section section-inner fade-in">
      <h1 className="section-title">Contact</h1>
      <p className="section-subtitle">
        Want to discuss a project or collaborate? Reach out through email,
        phone, or LinkedIn.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:isirahansaja@gmail.com"
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 transition hover:-translate-y-0.5"
        >
          <p className="text-sm text-[var(--text-muted)]">Email</p>
          <p className="mt-1 font-medium">isirahansaja@gmail.com</p>
        </a>

        <a
          href="tel:+94765230307"
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 transition hover:-translate-y-0.5"
        >
          <p className="text-sm text-[var(--text-muted)]">Phone</p>
          <p className="mt-1 font-medium">+94 76 523 0307</p>
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 transition hover:-translate-y-0.5 sm:col-span-2"
        >
          <p className="text-sm text-[var(--text-muted)]">LinkedIn</p>
          <p className="mt-1 font-medium">Connect professionally</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
