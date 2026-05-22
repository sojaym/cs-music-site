"use client";

import Image from "next/image";
import { useState } from "react";
import type { Release } from "@/types/release";
import { ReleaseModal } from "@/components/release-modal";

type LatestReleaseProps = {
  release: Release;
};

export function LatestRelease({ release }: LatestReleaseProps) {
  const [openRelease, setOpenRelease] = useState<Release | null>(null);

  return (
    <section className="page-shell py-20 sm:py-24" id="latest">
      <div className="mb-9">
        <p className="eyebrow">Featured release</p>
        <h2 className="text-[clamp(2.4rem,6vw,5.25rem)] font-extrabold leading-none">
          {release.title}
        </h2>
      </div>

      <article className="grid items-center gap-8 border-y border-line py-8 md:grid-cols-[minmax(280px,430px)_1fr] md:gap-16">
        <button
          type="button"
          className="group relative overflow-hidden rounded-lg"
          onClick={() => setOpenRelease(release)}
        >
          <Image
            src={release.image}
            alt={`${release.title} cover artwork`}
            width={900}
            height={900}
            priority
            className="aspect-square w-full object-cover"
          />
          <span className="absolute inset-x-4 bottom-4 rounded-lg bg-ink/75 px-4 py-3 text-sm font-extrabold opacity-0 transition group-hover:opacity-100">
            More info
          </span>
        </button>

        <div>
          <p className="mb-4 text-xs font-extrabold uppercase text-signal">
            Single / {release.artist}
          </p>
          <h3 className="max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-none">
            Public confession, floor-ready pulse.
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {release.lede}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="button-primary"
              onClick={() => setOpenRelease(release)}
            >
              More Info
            </button>
            {release.landrUrl ? (
              <a
                className="button-secondary"
                href={release.landrUrl}
                target="_blank"
                rel="noreferrer"
              >
                Stream / Download
              </a>
            ) : null}
          </div>
        </div>
      </article>

      <ReleaseModal release={openRelease} onClose={() => setOpenRelease(null)} />
    </section>
  );
}
