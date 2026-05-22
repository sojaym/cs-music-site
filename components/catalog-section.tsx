"use client";

import { useMemo, useState } from "react";
import type { Release, ReleaseType } from "@/types/release";
import { ReleaseCard } from "@/components/release-card";
import { ReleaseModal } from "@/components/release-modal";
import { cn } from "@/lib/utils";

type Filter = "all" | ReleaseType;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Singles", value: "single" },
  { label: "EPs", value: "ep" },
  { label: "Albums", value: "album" },
];

type CatalogSectionProps = {
  releases: Release[];
};

export function CatalogSection({ releases }: CatalogSectionProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openRelease, setOpenRelease] = useState<Release | null>(null);

  const visibleReleases = useMemo(() => {
    if (filter === "all") return releases;
    return releases.filter((release) => release.type === filter);
  }, [filter, releases]);

  return (
    <section className="page-shell py-20 sm:py-24" id="catalog">
      <div className="mb-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Catalog</p>
          <h2 className="text-[clamp(2.4rem,6vw,5.25rem)] font-extrabold leading-none">
            Music
          </h2>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Catalog filters">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={cn(
                "min-h-10 rounded-lg border border-line bg-white/[0.03] px-4 text-sm text-muted transition hover:border-white/30 hover:text-soft",
                filter === item.value && "border-white/30 text-soft",
              )}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visibleReleases.map((release) => (
          <ReleaseCard
            key={release.id}
            release={release}
            onOpen={() => setOpenRelease(release)}
          />
        ))}
      </div>

      <ReleaseModal release={openRelease} onClose={() => setOpenRelease(null)} />
    </section>
  );
}
