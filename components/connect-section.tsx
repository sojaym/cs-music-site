export function ConnectSection() {
  return (
    <section
      className="page-shell grid gap-9 border-t border-line py-20 sm:py-24 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
      id="connect"
    >
      <div>
        <p className="eyebrow">Updates / collaboration</p>
        <h2 className="text-[clamp(2.4rem,6vw,5.25rem)] font-extrabold leading-none">
          Connect With ClearSocial
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Follow new releases, catalog updates, and future collaborative projects.
        </p>
      </div>

      <form className="grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-muted">
          Name
          <input
            className="rounded-lg border border-line bg-panel p-4 text-soft outline-none focus:border-violet"
            type="text"
            name="name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted">
          Email
          <input
            className="rounded-lg border border-line bg-panel p-4 text-soft outline-none focus:border-violet"
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted">
          Message
          <textarea
            className="rounded-lg border border-line bg-panel p-4 text-soft outline-none focus:border-violet"
            name="message"
            rows={4}
          />
        </label>
        <button className="button-primary" type="button">
          Send Message
        </button>
      </form>
    </section>
  );
}
