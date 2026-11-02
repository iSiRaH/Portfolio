import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submit) {
      return;
    }

    const timeout = setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [submit]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdEHvK3SfPEfJPcOZPdD11WYXEkXrdbxmJc6Ijy7LgFW2CfZw/formResponse";

    const data = new FormData();
    data.append("entry.366150665", formData.name);
    data.append("entry.1364492292", formData.email);
    data.append("entry.1337496583", formData.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section className="page-section section-inner fade-in">
        <p className="eyebrow">Contact</p>
        <h1 className="section-title">Let&apos;s make something useful</h1>
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
            href="https://www.linkedin.com/in/isira-hansaja-nanayakkara/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 transition hover:-translate-y-0.5 sm:col-span-2"
          >
            <p className="text-sm text-[var(--text-muted)]">LinkedIn</p>
            <p className="mt-1 font-medium">Connect professionally</p>
          </a>
        </div>
      </section>
      <section className="page-section section-inner fade-in mt-5">
        <h2 className="section-title">Send a message</h2>

        <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur sm:p-7">
          <p className="text-sm text-[var(--text-muted)]">
            Send a message and I will get back to you as soon as possible.
          </p>

          <form
            className="mt-5 grid gap-4 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <label className="grid gap-2 text-sm font-medium">Name
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            /></label>
            <label className="grid gap-2 text-sm font-medium">Email
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              autoComplete="email"
              required
              placeholder="Your Email"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            /></label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">Message
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              name="message"
              required
              rows={5}
              className="sm:col-span-2 w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            /></label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 font-medium text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-cyan-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {submit && (
        <div role="status" className="mt-5 rounded-lg bg-green-100 p-4 text-green-800">
          Your message has been sent successfully!
        </div>
      )}
    </>
  );
};

export default Contact;
