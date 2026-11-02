const About = () => {
  return (
    <section className="page-section section-inner fade-in">
      <p className="eyebrow">About me</p>
      <h1 className="section-title max-w-2xl">Curious about the whole product, not just the code</h1>
      <p className="section-subtitle">
        I&apos;m Isira Hansaja, a full-stack developer who enjoys turning complex
        ideas into intuitive, dependable digital experiences.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6">
          <h2 className="font-['Space_Grotesk'] text-xl font-semibold">
            What I Do
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            I design and develop full-stack products, from reusable
            component systems to API-driven interfaces that are fast and
            accessible.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6">
          <h2 className="font-['Space_Grotesk'] text-xl font-semibold">
            My Approach
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            I prioritize thoughtful UX, readable code, and long-term
            scalability. I enjoy turning rough ideas into confident product
            experiences.
          </p>
        </article>
      </div>
      <div className="mt-6">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6">
          <h2 className="font-['Space_Grotesk'] text-xl font-semibold">
            Education
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            I&apos;m currently a Computer Science undergraduate at the University
            of Ruhuna, Sri Lanka.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
