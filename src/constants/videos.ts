export interface VideoItem {
  src: string;
  caption: string;
}

export const HERO_VIDEO = {
  src: "/bg-video.mp4",
  fallbackText: "Tu navegador no soporta el elemento video.",
} as const;

export const VIDEO_CAROUSEL_SECTION = {
  eyebrow: "Lorem ipsum",
  title: "Lorem ipsum dolor sit amet consectetur adipisicing",
  videos: [
    {
      src: "/bg-video.mp4",
      caption: "Ad lorem ipsum dolor sit amet",
    },
    {
      src: "/bg-video.mp4",
      caption: "Segundo video del carrusel",
    },
    {
      src: "/bg-video.mp4",
      caption: "Tercer video del carrusel",
    },
  ] as VideoItem[],
} as const;
