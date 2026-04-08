const About = () => {
  return (
    <section className="page-section section-inner fade-in">
      <h1 className="section-title">About Me</h1>
      <p className="section-subtitle">
        I'm Isira Hansaja a full-stack developer with a passion for crafting
        intuitive and engaging digital experiences.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
          <h2 className="font-['Space_Grotesk'] text-xl font-semibold">
            What I Do
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            I design and develop frontend and full-stack products, from reusable
            component systems to API-driven interfaces that are fast and
            accessible.
          </p>
        </article>

        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
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
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
          <h2 className="font-['Space_Grotesk'] text-xl font-semibold">
            Education
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            I'm currently an undergraduate of Computer Science at the University
            of Ruhuna, Sri Lanka.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
