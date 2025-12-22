export interface WhyChooseUsItem {
  title: string;
  description: string;
  videoSrc: string;
}

export const WHY_CHOOSE_US_SECTION = {
  eyebrow: "Why Choose Us",
  title: "Your Trusted Partner in Property Restoration",
  items: [
    {
      title: "Quick Response",
      description:
        "We respond quickly, assess damage, and start restoration immediately to prevent further issues and minimize downtime",
      videoSrc: "/videos/home/quick-response.mp4",
    },
    {
      title: "Expertise and experience",
      description:
        "Our trained technicians use specialized equipment and follow industry best practices to ensure efficient, high-quality work.",
      videoSrc: "/videos/home/expertise-and-experience.mp4",
    },
    {
      title: "Insurance Knowledge",
      description:
        "We work directly with your insurance provider to document damage and navigate the claims process smoothly.",
      videoSrc: "/videos/home/insurance-knowledge.mp4",
    },
    {
      title: "Safety and Health",
      description:
        "We follow strict safety protocols and properly handle hazardous materials to protect our team and your property.",
      videoSrc: "/videos/home/safety-and-health.mp4",
    },
    {
      title: "Peace of mind",
      description:
        "Trust Blue Restoration Services to restore your property to its pre-loss condition—correctly, efficiently, and safely.",
      videoSrc: "/videos/home/peace-of-mind.mp4",
    },
  ] as WhyChooseUsItem[],
} as const;
