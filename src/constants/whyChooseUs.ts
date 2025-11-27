export interface WhyChooseUsItem {
  title: string;
  description: string;
  videoSrc: string;
}

export const WHY_CHOOSE_US_SECTION = {
  eyebrow: "Lorem ipsum",
  title: "Lorem ipsum dolor sit amet consectetur adipisicing",
  items: [
    {
      title: "Quick Response",
      description:
        "We respond quickly, assess damage, and start restoration immediately to prevent further issues and minimize downtime",
      videoSrc: "/bg-video.mp4",
    },
    {
      title: "Expertise and experience",
      description:
        "Our trained technicians use specialized equipment and follow industry best practices to ensure efficient, high-quality work.",
      videoSrc: "/bg-video.mp4",
    },
    {
      title: "Insurance Knowledge",
      description:
        "We work directly with your insurance provider to document damage and navigate the claims process smoothly.",
      videoSrc: "/bg-video.mp4",
    },
    {
      title: "Safety and Health",
      description:
        "We follow strict safety protocols and properly handle hazardous materials to protect our team and your property.",
      videoSrc: "/bg-video.mp4",
    },
    {
      title: "Peace of mind",
      description:
        "Trust Blue Restoration Services to restore your property to its pre-loss condition—correctly, efficiently, and safely.",
      videoSrc: "/bg-video.mp4",
    },
  ] as WhyChooseUsItem[],
} as const;
