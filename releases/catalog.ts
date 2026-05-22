import type { Release } from "@/types/release";

export const releases: Release[] = [
  {
    id: "dance-with-you",
    slug: "dance-with-you",
    title: "Dance With You",
    artist: "ClearSocial, Jay & Mimi",
    type: "single",
    year: "2026",
    image: "/images/dance-with-you.jpg",
    lede:
      "A classic dance confession with deep grooves, funk bass, and a floor-ready pulse.",
    story:
      "Built as a public confession shared through movement, Dance With You brings together soulful rhythm, club energy, and a direct emotional hook.",
    landrUrl: "https://artists.landr.com/055120728266",
    details: [
      { label: "Format", value: "Single" },
      { label: "Mood", value: "Dance, sensual, uplifting" },
      { label: "Credits", value: "Produced and arranged by ClearSocial" },
    ],
  },
  {
    id: "born-to-feel-loved",
    slug: "born-to-feel-loved",
    title: "Born To Feel Loved",
    artist: "ClearSocial",
    type: "single",
    year: "2026",
    image: "/images/born-to-feel-loved.jpg",
    lede: "Warm electronic soul with a reflective vocal mood and late-night colour.",
    story:
      "A softer side of the catalog, shaped around intimacy, longing, and a slow-burn sense of release.",
    details: [
      { label: "Format", value: "Single" },
      { label: "Mood", value: "Reflective, warm, emotional" },
      { label: "Credits", value: "ClearSocial production" },
    ],
  },
  {
    id: "your-touch",
    slug: "your-touch",
    title: "Your Touch",
    artist: "ClearSocial",
    type: "single",
    year: "2026",
    image: "/images/your-touch.jpg",
    lede: "A dancefloor confession with alternate mixes and raw session energy.",
    story:
      "Your Touch moves through analogue synth lines, deep electronic dance grooves, and a story written for dancers and late-night listeners.",
    details: [
      { label: "Format", value: "Single" },
      { label: "Mood", value: "Deep, intimate, electronic" },
      { label: "Credits", value: "Produced, arranged, and written by ClearSocial" },
    ],
  },
  {
    id: "moment-in-time",
    slug: "moment-in-time",
    title: "Moment In Time",
    artist: "ClearSocial",
    type: "single",
    year: "2026",
    image: "/images/moment-in-time.jpg",
    lede: "A personal snapshot wrapped in rhythm, memory, and electronic texture.",
    story:
      "A catalog piece built around reflection and motion: part diary, part dance-floor memory.",
    details: [
      { label: "Format", value: "Single" },
      { label: "Mood", value: "Personal, reflective, rhythmic" },
      { label: "Credits", value: "ClearSocial collective" },
    ],
  },
  {
    id: "o-yeah",
    slug: "o-yeah",
    title: "O Yeah",
    artist: "ClearSocial",
    type: "single",
    year: "2026",
    image: "/images/o-yeah.jpg",
    lede: "Bright, direct, and playful energy with a vivid visual identity.",
    story:
      "O Yeah brings the catalog into a bolder pop-colour space while keeping the ClearSocial sense of movement and invitation.",
    details: [
      { label: "Format", value: "Single" },
      { label: "Mood", value: "Bright, playful, direct" },
      { label: "Credits", value: "ClearSocial production" },
    ],
  },
  {
    id: "clearsocial-one",
    slug: "clearsocial-one",
    title: "ClearSocial One",
    artist: "ClearSocial",
    type: "ep",
    year: "2026",
    image: "/images/hero-logo-atmosphere.jpg",
    lede: "A collected first chapter for the ClearSocial sound and visual language.",
    story:
      "A compact release that gathers the early identity: spoken feeling, club atmosphere, and collaborative electronic production.",
    details: [
      { label: "Format", value: "EP" },
      { label: "Mood", value: "Atmospheric, collective, electronic" },
      { label: "Credits", value: "ClearSocial" },
    ],
  },
];

export const featuredRelease = releases[0];
