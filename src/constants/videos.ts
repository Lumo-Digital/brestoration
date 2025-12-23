export interface VideoItem {
  src: string;
  thumb: string;
  description: string;
}

export const VIDEO_FALLBACK_TEXT =
  "Your browser does not support video playback.";

export const HERO_VIDEOS = {
  home: {
    src: "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446324/blue-restoration/videos/home/home-hero.mp4",
    poster: "/images/posters/home_poster.webp",
    alt: "Professional restoration team responding to property damage emergency",
  },
  waterDamage: {
    src: "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766448618/blue-restoration/videos/water-damage/water-hero.mp4",
    poster: "/images/posters/water_poster.webp",
    alt: "Water damage restoration services and flood cleanup",
  },
  fireDamage: {
    src: "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446329/blue-restoration/videos/fire-damage/fire-hero.mp4",
    poster: "/images/posters/fire_poster.webp",
    alt: "Fire and smoke damage restoration services",
  },
  stormDamage: {
    src: "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766448622/blue-restoration/videos/storm-damage/storm-hero.mp4",
    poster: "/images/posters/storm_poster.webp",
    alt: "Storm damage repair and emergency restoration",
  },
  moldEvaluation: {
    src: "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766448627/blue-restoration/videos/mold-evaluation/mold-hero.mp4",
    poster: "/images/posters/mold_poster.webp",
    alt: "Professional mold inspection and remediation services",
  },
} as const;

export const VIDEO_CAROUSEL_SECTION = {
  eyebrow: "Testimonials",
  title: "Hear From Our Satisfied Customers",
  videos: [
    {
      src: "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766444065/reel_natali_jhgfad.mp4",
      thumb: "/images/posters/thumb-reel-natali.webp",
      description:
        "After seeing her neighbor's roof being repaired, she reached out to Blue Restoration. From the thorough inspection to the step-by-step process, she now has a brand new roof and couldn't be happier with the results.",
    },
  ] as VideoItem[],
} as const;
