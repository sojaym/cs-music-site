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
  tracks?: {
    title: string;
    version?: string;
    duration?: string;
  }[];
  details: {
    label: string;
    value: string;
  }[];
};
