export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Why choose us", href: "#nosotros" },
  { label: "Contact", href: "#contact" },
];

export const CTA_BUTTONS = {
  freeAssessment: {
    label: "Book a free assessment",
    href: "/free-assessment",
  },
  emergency: {
    label: "24/7 Emergency: Call now!",
    href: "tel:12345",
  },
} as const;
