import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative grid min-h-[92vh] items-end overflow-hidden px-5 pb-14 pt-32 sm:min-h-screen sm:px-7 sm:pb-20 sm:pt-36">
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,5,1)_0%,rgba(5,5,5,0.25)_48%,rgba(5,5,5,0.72)_100%),url('/images/hero-logo-atmosphere.jpg')] bg-cover bg-center md:bg-[linear-gradient(90deg,rgba(5,5,5,0.95)_0%,rgba(5,5,5,0.62)_44%,rgba(5,5,5,0.9)_100%),linear-gradient(0deg,rgba(5,5,5,1)_0%,rgba(5,5,5,0.05)_45%,rgba(5,5,5,0.5)_100%),url('/images/hero-logo-atmosphere.jpg')]"
        aria-hidden="true"
      />
      <div className="page-shell relative z-10">
        <p className="eyebrow">Music collective / electronic soul</p>
        <h1 className="max-w-4xl text-[clamp(3.5rem,11vw,9rem)] font-extrabold leading-[0.9] text-soft">
          CLEARSOCIAL
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-2xl">
          Dance music, spoken word, and sensual electronic stories from the edge
          of the room.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#latest" className="button-primary">
            Listen Latest
          </Link>
          <Link href="#catalog" className="button-secondary">
            Explore Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
