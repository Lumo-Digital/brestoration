export interface VideoItem {
  src: string;
  thumb: string;
  description: string;
}

export const VIDEO_FALLBACK_TEXT =
  "Your browser does not support video playback.";

const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

export const HERO_VIDEOS = {
  home: {
    src: `${MEDIA_URL}/videos/home/home-hero.mp4`,
    poster: "/images/posters/home_poster.webp",
    alt: "Professional restoration team responding to property damage emergency",
  },
  waterDamage: {
    src: `${MEDIA_URL}/videos/water-damage/water-hero.mp4`,
    poster: "/images/posters/water_poster.webp",
    alt: "Water damage restoration services and flood cleanup",
  },
  fireDamage: {
    src: `${MEDIA_URL}/videos/fire-damage/fire-hero.mp4`,
    poster: "/images/posters/fire_poster.webp",
    alt: "Fire and smoke damage restoration services",
  },
  stormDamage: {
    src: `${MEDIA_URL}/videos/storm-damage/storm-hero.mp4`,
    poster: "/images/posters/storm_poster.webp",
    alt: "Storm damage repair and emergency restoration",
  },
  moldEvaluation: {
    src: `${MEDIA_URL}/videos/mold-evaluation/mold-hero.mp4`,
    poster: "/images/posters/mold_poster.webp",
    alt: "Professional mold inspection and remediation services",
  },
  roofEvaluation: {
    src: `${MEDIA_URL}/videos/roof-evaluation/roof-hero.mp4`,
    poster: "/images/posters/roof_poster.webp",
    alt: "Professional roof evaluation and repair services",
  },
} as const;

export const VIDEO_CAROUSEL_SECTION = {
  eyebrow: "Testimonials",
  title: "Hear From Our Satisfied Customers",
  videos: [
    {
      src: `${MEDIA_URL}/videos/testimonials/reel.mp4`,
      thumb: "/images/posters/thumb-reel-natali.webp",
      description:
        "After seeing her neighbor's roof being repaired, she reached out to Blue Restoration. From the thorough inspection to the step-by-step process, she now has a brand new roof and couldn't be happier with the results.",
    },
  ] as VideoItem[],
} as const;
