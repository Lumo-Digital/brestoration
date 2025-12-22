export interface WhyChooseUsItem {
  title: string;
  description: string;
  videoSrc: string;
  videoAlt?: string;
}

export const WHY_CHOOSE_US_SECTION = {
  eyebrow: "Why Choose Us",
  title: "Your Trusted Partner in Property Restoration",
  items: [
    {
      title: "Quick Response",
      description:
        "We respond quickly, assess damage, and start restoration immediately to prevent further issues and minimize downtime",
      videoSrc:
        "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446364/blue-restoration/videos/home/quick-response.mp4",
      videoAlt:
        "Emergency response team arriving quickly to property damage scene",
    },
    {
      title: "Expertise and experience",
      description:
        "Our trained technicians use specialized equipment and follow industry best practices to ensure efficient, high-quality work.",
      videoSrc:
        "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446366/blue-restoration/videos/home/expertise-and-experience.mp4",
      videoAlt:
        "Certified technicians using professional restoration equipment",
    },
    {
      title: "Insurance Knowledge",
      description:
        "We work directly with your insurance provider to document damage and navigate the claims process smoothly.",
      videoSrc:
        "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446368/blue-restoration/videos/home/insurance-knowledge.mp4",
      videoAlt: "Professional documentation and insurance claim assistance",
    },
    {
      title: "Safety and Health",
      description:
        "We follow strict safety protocols and properly handle hazardous materials to protect our team and your property.",
      videoSrc:
        "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446371/blue-restoration/videos/home/safety-and-health.mp4",
      videoAlt: "Safety protocols and hazardous material handling procedures",
    },
    {
      title: "Peace of mind",
      description:
        "Trust Blue Restoration Services to restore your property to its pre-loss condition—correctly, efficiently, and safely.",
      videoSrc:
        "https://res.cloudinary.com/dmsciazqx/video/upload/q_auto,f_auto/v1766446374/blue-restoration/videos/home/peace-of-mind.mp4",
      videoAlt: "Complete property restoration to pre-loss condition",
    },
  ] as WhyChooseUsItem[],
} as const;
