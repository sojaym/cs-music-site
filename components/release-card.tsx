import Image from "next/image";
import type { Release } from "@/types/release";
import { releaseTypeLabel } from "@/lib/utils";

type ReleaseCardProps = {
  release: Release;
  onOpen: () => void;
};

export function ReleaseCard({ release, onOpen }: ReleaseCardProps) {
  return (
    <article className="grid gap-4 max-sm:grid-cols-[112px_1fr] max-sm:items-center">
      <button
        type="button"
        className="group relative overflow-hidden rounded-lg max-sm:row-span-2"
        onClick={onOpen}
      >
        <Image
          src={release.image}
          alt={`${release.title} cover artwork`}
          width={900}
          height={900}
          className="aspect-square w-full object-cover"
        />
        <span className="absolute inset-x-4 bottom-4 rounded-lg bg-ink/75 px-4 py-3 text-center text-sm font-extrabold opacity-0 transition group-hover:opacity-100">
          More info
        </span>
      </button>

      <div>
        <p className="mb-2 text-xs font-extrabold uppercase text-signal">
          {releaseTypeLabel(release.type)} / {release.year}
        </p>
        <h3 className="mb-2 text-xl font-extrabold">{release.title}</h3>
        <p className="text-sm leading-relaxed text-muted max-sm:hidden">
          {release.lede}
        </p>
      </div>

      <div className="flex gap-2 max-sm:col-start-2 max-sm:flex-col">
        <button type="button" className="button-secondary min-h-10 px-4 py-2 text-xs" onClick={onOpen}>
          Info
        </button>
        {release.landrUrl ? (
          <a
            className="button-primary min-h-10 px-4 py-2 text-xs"
            href={release.landrUrl}
            target="_blank"
            rel="noreferrer"
          >
            Stream / Download
          </a>
        ) : (
          <button
            type="button"
            className="button-secondary min-h-10 cursor-not-allowed px-4 py-2 text-xs opacity-60"
            disabled
          >
            Link Coming Soon
          </button>
        )}
      </div>
    </article>
  );
}
