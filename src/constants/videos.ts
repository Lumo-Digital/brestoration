export interface VideoItem {
  src: string;
  thumb: string;
  description: string;
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
      thumb: "/video-thumb1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna",
    },
    {
      src: "/bg-video.mp4",
      thumb: "/video-thumb1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna",
    },
    {
      src: "/bg-video.mp4",
      thumb: "/video-thumb1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna",
    },
  ] as VideoItem[],
} as const;
