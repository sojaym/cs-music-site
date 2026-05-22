import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section
      className="page-shell grid items-center gap-9 py-20 sm:py-24 md:grid-cols-2 md:gap-16"
      id="about"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/images/about-reflection.jpg"
          alt="Atmospheric ClearSocial reflection image"
          width={1200}
          height={800}
          className="min-h-[360px] w-full object-cover grayscale md:min-h-[520px]"
        />
      </div>

      <div>
        <p className="eyebrow">We are</p>
        <h2 className="text-[clamp(2.4rem,6vw,5.25rem)] font-extrabold leading-none">
          ClearSocial
        </h2>
        <div className="mt-6 grid gap-4 text-lg leading-relaxed text-muted">
          <p>
            ClearSocial is a music collective exploring the space between dance,
            spoken word, poetry, and electronic soul.
          </p>
          <p>
            The sound moves through deep grooves, intimate stories, analogue
            colour, and collaboration. Every release is a doorway into the wider
            catalog.
          </p>
        </div>
        <Link href="#connect" className="button-secondary mt-7">
          Connect
        </Link>
      </div>
    </section>
  );
}
