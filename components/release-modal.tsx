"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Release } from "@/types/release";
import { releaseTypeLabel } from "@/lib/utils";

type ReleaseModalProps = {
  release: Release | null;
  onClose: () => void;
};

export function ReleaseModal({ release, onClose }: ReleaseModalProps) {
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(release));

    if (release) {
      panelRef.current?.focus();
      window.history.replaceState(null, "", `#${release.slug}`);
    }

    return () => document.body.classList.remove("modal-open");
  }, [release]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (release) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, release]);

  if (!release) return null;

  const trackListHeading =
    release.type === "single" && release.tracks && release.tracks.length > 1
      ? "Versions"
      : "Track List";

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-0 sm:p-7"
      role="dialog"
      aria-modal="true"
      aria-labelledby="release-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-xl"
        aria-label="Close release details"
        onClick={onClose}
      />
      <article
        ref={panelRef}
        tabIndex={-1}
        className="relative grid max-h-[94vh] w-full overflow-auto rounded-t-lg border border-line bg-panel2 p-5 shadow-modal outline-none sm:max-h-[calc(100vh-56px)] sm:w-[min(100%,1040px)] sm:rounded-lg sm:p-6 md:grid-cols-[minmax(280px,420px)_1fr] md:gap-8"
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-black/45 text-soft"
          aria-label="Close release details"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="mx-auto w-full max-w-[420px]">
          <Image
            src={release.image}
            alt={`${release.title} cover artwork`}
            width={900}
            height={900}
            className="aspect-square w-full rounded-lg object-cover"
            priority
          />

          {release.tracks && release.tracks.length > 0 ? (
            <section className="mt-5 rounded-lg border border-line bg-black/25 p-4">
              <h3 className="mb-3 text-xs font-extrabold uppercase text-magenta">
                {trackListHeading}
              </h3>
              <ol className="grid gap-3">
                {release.tracks.map((track, index) => (
                  <li
                    key={`${track.title}-${track.version ?? index}`}
                    className="grid grid-cols-[1.5rem_1fr_auto] gap-3 text-sm"
                  >
                    <span className="font-extrabold text-quiet">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-extrabold text-soft">
                        {track.title}
                      </span>
                      {track.version ? (
                        <span className="block truncate text-muted">
                          {track.version}
                        </span>
                      ) : null}
                    </span>
                    {track.duration ? (
                      <span className="text-quiet">{track.duration}</span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>

        <div className="pt-6 md:pr-12 md:pt-0">
          <p className="eyebrow">
            {releaseTypeLabel(release.type)} / {release.artist}
          </p>
          <h2
            id="release-modal-title"
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-none"
          >
            {release.title}
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-soft">{release.lede}</p>

          <div className="my-6 flex items-center gap-3 rounded-lg border border-line bg-black/30 p-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-soft text-ink"
              aria-label={`Play ${release.title} preview`}
            >
              <Play size={18} fill="currentColor" />
            </button>
            <div>
              <span className="block text-sm font-extrabold">{release.title}</span>
              <small className="text-quiet">Preview 00:00 / 00:45</small>
            </div>
          </div>

          <p className="leading-relaxed text-muted">{release.story}</p>

          <dl className="my-6 grid grid-cols-[120px_1fr] gap-x-3 gap-y-2 border-y border-line py-5 max-sm:grid-cols-1">
            {release.details.map((item) => (
              <div key={item.label} className="contents">
                <dt className="text-xs font-extrabold text-quiet">{item.label}</dt>
                <dd className="m-0 text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row">
            {release.landrUrl ? (
              <a
                className="button-primary"
                href={release.landrUrl}
                target="_blank"
                rel="noreferrer"
              >
                Stream / Download
              </a>
            ) : (
              <button
                type="button"
                className="button-secondary cursor-not-allowed opacity-60"
                disabled
              >
                Link Coming Soon
              </button>
            )}
            <button type="button" className="button-secondary" onClick={onClose}>
              Back to Catalog
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
