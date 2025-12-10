import {
  Flame,
  BrickWall,
  Droplets,
  CloudLightning,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export const SERVICES: Service[] = [
  {
    label: "Fire Damage",
    href: "/fire-damage",
    icon: Flame,
    description: "Professional fire damage restoration services",
  },
  {
    label: "Mold Evaluation",
    href: "/mold-evaluation",
    icon: BrickWall,
    description: "Expert mold inspection and evaluation",
  },
  {
    label: "Water Damage",
    href: "/water-damage",
    icon: Droplets,
    description: "Complete water damage restoration",
  },
  {
    label: "Storm Damage",
    href: "/storm-damage",
    icon: CloudLightning,
    description: "Storm and weather damage repair",
  },
];
