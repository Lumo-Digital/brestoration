export interface VideoItem {
  src: string;
  thumb: string;
  description: string;
}

export const VIDEO_FALLBACK_TEXT =
  "Your browser does not support video playback.";

export const HERO_VIDEOS = {
  home: {
    src: "/videos/home/hero.mp4",
    poster: "/images/posters/home-hero.jpg",
  },
  waterDamage: {
    src: "/videos/water-damage/hero.mp4",
    poster: "/images/posters/water-damage-hero.jpg",
  },
  fireDamage: {
    src: "/videos/fire-damage/hero.mp4",
    poster: "/images/posters/fire-damage-hero.jpg",
  },
  stormDamage: {
    src: "/videos/storm-damage/hero.mp4",
    poster: "/images/posters/storm-damage-hero.jpg",
  },
  moldEvaluation: {
    src: "/videos/mold-evaluation/hero.mp4",
    poster: "/images/posters/mold-evaluation-hero.jpg",
  },
} as const;

export const VIDEO_CAROUSEL_SECTION = {
  eyebrow: "Testimonials",
  title: "Hear From Our Satisfied Customers",
  videos: [
    {
      src: "/videos/shared/reel-natali.mp4",
      thumb: "/thumbs/shared/thumb-reel-natali.jpg",
      description:
        "After seeing her neighbor's roof being repaired, she reached out to Blue Restoration. From the thorough inspection to the step-by-step process, she now has a brand new roof and couldn't be happier with the results.",
    },
  ] as VideoItem[],
} as const;
