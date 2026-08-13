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
    href: "/#form",
  },
  emergency: {
    label: "(561) 317-5125",
    href: "tel:+15613175125",
  },
} as const;
