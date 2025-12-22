export interface VideoItem {
  src: string;
  thumb: string;
  description: string;
}

export const VIDEO_FALLBACK_TEXT =
  "Your browser does not support video playback.";

export const HERO_VIDEOS = {
  home: {
    src: "/videos/home/home-hero.mp4",
    poster: "/images/posters/home_poster.png",
    alt: "Professional restoration team responding to property damage emergency",
  },
  waterDamage: {
    src: "/videos/water-damage/water-hero.mp4",
    poster: "/images/posters/water_poster.png",
    alt: "Water damage restoration services and flood cleanup",
  },
  fireDamage: {
    src: "/videos/fire-damage/fire-hero.mp4",
    poster: "/images/posters/fire_poster.png",
    alt: "Fire and smoke damage restoration services",
  },
  stormDamage: {
    src: "/videos/storm-damage/storm-hero.mp4",
    poster: "/images/posters/storm_poster.png",
    alt: "Storm damage repair and emergency restoration",
  },
  moldEvaluation: {
    src: "/videos/mold-evaluation/mold-hero.mp4",
    poster: "/images/posters/mold_poster.png",
    alt: "Professional mold inspection and remediation services",
  },
} as const;

export const VIDEO_CAROUSEL_SECTION = {
  eyebrow: "Testimonials",
  title: "Hear From Our Satisfied Customers",
  videos: [
    {
      src: "https://res.cloudinary.com/dmsciazqx/video/upload/v1766444065/reel_natali_jhgfad.mp4",
      thumb: "/images/posters/thumb-reel-natali.jpg",
      description:
        "After seeing her neighbor's roof being repaired, she reached out to Blue Restoration. From the thorough inspection to the step-by-step process, she now has a brand new roof and couldn't be happier with the results.",
    },
  ] as VideoItem[],
} as const;
