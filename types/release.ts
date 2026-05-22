export type ReleaseType = "single" | "ep" | "album";

export type Release = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  type: ReleaseType;
  year: string;
  image: string;
  lede: string;
  story: string;
  landrUrl?: string;
  details: {
    label: string;
    value: string;
  }[];
};
