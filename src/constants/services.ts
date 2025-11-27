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
    href: "/service1",
    icon: Flame,
    description: "Professional fire damage restoration services",
  },
  {
    label: "Mold Evaluation",
    href: "/service1",
    icon: BrickWall,
    description: "Expert mold inspection and evaluation",
  },
  {
    label: "Water Damage",
    href: "/service1",
    icon: Droplets,
    description: "Complete water damage restoration",
  },
  {
    label: "Storm Damage",
    href: "/service1",
    icon: CloudLightning,
    description: "Storm and weather damage repair",
  },
];
