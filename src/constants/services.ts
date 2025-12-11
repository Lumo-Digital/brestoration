import {
  Flame,
  BrickWall,
  Droplets,
  CloudLightning,
  type LucideIcon,
} from "lucide-react";

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceTimeline {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps: ServiceStep[];
}

export interface Service {
  label: string;
  href: string;
  icon: LucideIcon;
  title?: string;
  description?: string;
  timelines?: ServiceTimeline[];
}

export const SERVICES: Service[] = [
  {
    label: "Fire Damage",
    href: "/fire-damage",
    icon: Flame,
    title: "Professional Fire Damage Restoration Services",
    description:
      "Fire damage can be one of the most devastating events that can happen to a home or business. It not only damages property, but it can also have long-lasting effects on the health and well-being of those who have been affected. In this article. Below are the steps involved in fire damage restoration to bring your property back to pre-fire condition.",
    timelines: [
      {
        steps: [
          {
            title: "Safety Inspection",
            description:
              "The first step in fire damage restoration is to perform a safety inspection. This includes assessing the structural integrity of the building and identifying any potential hazards, such as weakened walls or unstable floors.",
          },
          {
            title: "Board Up and Tarping",
            description:
              "The next step is to secure the property by boarding up windows and doors and tarping the roof. This helps to prevent further damage from weather, animals, or unauthorized entry.",
          },
          {
            title: "Water and Smoke Damage Cleanup",
            description:
              "Fires are typically extinguished with water, which can cause additional damage to the property. The next step in fire damage restoration is to remove any standing water and begin the process of cleaning up smoke and soot damage.",
          },
          {
            title: "Structural Drying and Dehumidification",
            description:
              "After the water and smoke damage cleanup is complete, the property must be thoroughly dried to prevent mold growth. A professional fire damage restoration company will use specialized equipment, such as dehumidifiers and air movers, to dry the property and restore proper humidity levels.",
          },
          {
            title: "Odor Removal",
            description:
              "The smell of smoke can linger long after a fire has been extinguished. A professional fire damage restoration company will use specialized equipment, such as ozone generators and thermal foggers, to remove smoke odor from the property.",
          },
          {
            title: "Structural Repairs and Reconstruction",
            description:
              "After the property has been cleaned and dried, any structural damage must be repaired. This may include replacing damaged walls, floors, or roofing materials. A professional fire damage restoration company will work with the property owner to determine the extent of the damage and develop a plan for reconstruction.",
          },
          {
            title: "Final Inspection and Certification",
            description:
              "After all repairs have been made, a final inspection is conducted to ensure that the property has been fully restored to its pre-fire condition. A professional fire damage restoration company will also provide a certificate of completion, which can be used for insurance purposes.",
          },
        ],
      },
    ],
  },
  {
    label: "Mold Evaluation",
    href: "/mold-evaluation",
    icon: BrickWall,
    title: "Expert Mold Evaluation & Remediation",
    description:
      "Mold is a common problem in homes and buildings, especially in areas with high humidity or moisture. It can cause a variety of health problems, as well as damage to property. In this article, we will discuss the difference between mold removal and mold remediation, as well as the steps involved in each process.",
    timelines: [
      {
        title: "Mold Removal",
        description:
          "Physical removal of mold from surfaces using specialized equipment and cleaning solutions for small, localized areas.",
        steps: [
          {
            title: "Identify and Address Source",
            description:
              "Identify the source of the mold growth and address any underlying moisture problems.",
          },
          {
            title: "Isolate Affected Area",
            description:
              "Isolate the affected area to prevent the spread of mold spores.",
          },
          {
            title: "Remove Airborne Spores",
            description:
              "Use specialized equipment, such as air scrubbers and HEPA vacuums, to remove mold spores from the air.",
          },
          {
            title: "Clean Surfaces",
            description:
              "Use specialized cleaning solutions to remove mold from surfaces.",
          },
          {
            title: "Dispose Contaminated Materials",
            description:
              "Dispose of any contaminated materials, such as drywall or insulation, that cannot be salvaged.",
          },
          {
            title: "Verify Complete Removal",
            description:
              "Verify that the mold has been completely removed using specialized testing equipment.",
          },
        ],
      },
      {
        title: "Mold Remediation",
        description:
          "Comprehensive approach that removes mold and addresses underlying moisture problems for widespread or severe mold growth.",
        steps: [
          {
            title: "Identify and Fix Moisture Source",
            description:
              "Identify the source of the moisture problem and address it to prevent future mold growth.",
          },
          {
            title: "Isolate Affected Area",
            description:
              "Isolate the affected area to prevent the spread of mold spores.",
          },
          {
            title: "Remove Airborne Spores",
            description:
              "Use specialized equipment, such as air scrubbers and HEPA vacuums, to remove mold spores from the air.",
          },
          {
            title: "Clean Surfaces",
            description:
              "Use specialized cleaning solutions to remove mold from surfaces.",
          },
          {
            title: "Repair Damaged Materials",
            description:
              "Repair any damaged surfaces or materials, such as drywall or insulation, that were affected by the mold growth.",
          },
          {
            title: "Verify Complete Removal",
            description:
              "Verify that the mold has been completely removed using specialized testing equipment.",
          },
          {
            title: "Prevent Future Growth",
            description:
              "Take steps to prevent future mold growth, such as improving ventilation or installing a dehumidifier.",
          },
        ],
      },
    ],
  },
  {
    label: "Water Damage",
    href: "/water-damage",
    icon: Droplets,
    title: "Fast Water Damage Restoration Services",
    description:
      "Water damage is a common problem that many homeowners face. It can be caused by a variety of factors, such as flooding, leaking pipes, or natural disasters. When water damage occurs, it is important to act quickly to prevent further damage and to begin the restoration process. Below are the steps involved in water damage restoration:",
    timelines: [
      {
        title: "Professional Restoration Process",
        steps: [
          {
            title: "Assess the Damage",
            description:
              "This involves identifying the source of the water, determining the amount of water that has entered the property, and identifying any areas of the property that have been affected. This information will help to determine the appropriate restoration techniques and equipment that will be needed.",
          },
          {
            title: "Extract the Water",
            description:
              "The next step is to remove any standing water from the property. This can be done using pumps or wet vacuums. The goal is to remove as much water as possible to prevent further damage and to speed up the drying process.",
          },
          {
            title: "Dry the Area",
            description:
              "Once the water has been removed, the next step is to dry the affected area. This can be done using dehumidifiers, fans, and other specialized equipment. The goal is to reduce the humidity levels in the affected area to prevent mold growth and to promote faster drying.",
          },
          {
            title: "Clean and Sanitize",
            description:
              "After the area has been dried, the next step is to clean and sanitize the affected surfaces. This involves removing any remaining water stains, dirt, and debris. It is also important to disinfect the affected surfaces to prevent the growth of bacteria and other microorganisms.",
          },
          {
            title: "Repair and Restore",
            description:
              "The final step in the water damage restoration process is to repair and restore any damaged areas. This may involve replacing drywall, repairing flooring, and restoring any other areas of the property that have been affected by the water damage.",
          },
          {
            title: "Prevent Future Damage",
            description:
              "Once the restoration process is complete, it is important to take steps to prevent future water damage. This may involve regular maintenance of the property's plumbing system, installing flood barriers or other protective measures, and keeping an eye out for any signs of water damage.",
          },
        ],
      },
      {
        title: "Water Damage in your Home?",
        description: "Step by step what to do first.",
        steps: [
          {
            title: "Ensure your safety",
            description:
              "The first and most important step is to ensure your safety and the safety of anyone else in your home. If the water is coming from an electrical source, such as a broken appliance or outlet, turn off the power to that area of your home. If the water is contaminated with sewage or other hazardous materials, avoid contact with the water and call a professional restoration company.",
          },
          {
            title: "Stop the source of water",
            description:
              "If the source of the water damage is a leak or burst pipe, shut off the main water supply to your home to prevent further water from entering. If the water is coming from a natural disaster, such as a flood, do what you can to block entry points and minimize the amount of water entering your home.",
          },
          {
            title: "Remove excess water",
            description:
              "Use a wet/dry vacuum or mop to remove any standing water from your home. The longer water sits, the more damage it can cause, so it's important to start this process as soon as possible.",
          },
          {
            title: "Move furniture and belongings",
            description:
              "Move any furniture, electronics, or personal belongings away from the affected area to prevent further damage. If items are too heavy or difficult to move, cover them with plastic to protect them from water damage.",
          },
          {
            title: "Call a professional restoration company",
            description:
              "Water damage restoration is a complex process that requires specialized equipment and expertise. A professional restoration company will assess the extent of the damage, extract any remaining water, dry, and dehumidify the affected area, and take steps to prevent mold growth.",
          },
          {
            title: "Document the damage",
            description:
              "Take photos or videos of the damage to your home and any affected belongings for insurance purposes. Keep any receipts or invoices for services rendered or items replaced. Water damage can be a stressful and overwhelming situation but taking these steps as soon as possible can help minimize the damage and ensure a successful restoration process.",
          },
        ],
      },
    ],
  },
  {
    label: "Storm Damage",
    href: "/storm-damage",
    icon: CloudLightning,
    title: "Storm and Weather Damage Restoration",
    description:
      "Storm damage restoration is a crucial service that helps homeowners and businesses recover from the damage caused by severe weather conditions such as hurricanes, tornadoes, and thunderstorms. These types of natural disasters can cause significant damage to a property's structure, contents, and surrounding landscape, making it important to seek immediate assistance from Blue Restoration Services. We'll take a closer look at the process of storm damage restoration and what you can expect during each step of the process.",
    timelines: [
      {
        steps: [
          {
            title: "Safety Inspection",
            description:
              "The first step in storm damage restoration is to conduct a safety inspection. This involves identifying any potential hazards, such as downed power lines, gas leaks, or unstable structures. The safety inspection ensures that the property is safe for restoration professionals to enter and work on.",
          },
          {
            title: "Damage Assessment",
            description:
              "After the safety inspection is complete, the restoration team will perform a thorough damage assessment. This involves documenting all the damage to the property, including the structure, contents, and landscape. This information is used to develop a restoration plan that outlines the steps necessary to restore the property to its pre-storm condition.",
          },
          {
            title: "Temporary Repairs",
            description:
              "Once the damage assessment is complete, the restoration team will make any necessary temporary repairs to prevent further damage. This may include tarping a damaged roof or boarding up broken windows and doors. Temporary repairs are essential to protect the property from further damage while the restoration process is underway.",
          },
          {
            title: "Water Removal and Drying",
            description:
              "If the storm caused flooding or water damage, the restoration team will begin the process of water removal and drying. This involves using specialized equipment to extract water and moisture from the property and restore normal humidity levels. This is critical to prevent mold growth and other secondary damage.",
          },
          {
            title: "Debris Removal and Cleanup",
            description:
              "The restoration team will then remove any debris and begin the cleanup process. This involves removing fallen trees, broken branches, and other storm-related debris from the property. The team will also clean and disinfect the property to eliminate any potential health hazards, such as mold or bacteria.",
          },
          {
            title: "Structural Repairs and Reconstruction",
            description:
              "Once the property is cleaned up and dried out, the restoration team will begin the process of structural repairs and reconstruction. This may include replacing damaged roofing, siding, windows, and doors. The team will work with the property owner to ensure that all repairs are completed to their satisfaction.",
          },
          {
            title: "Final Inspection and Certification",
            description:
              "The final step in storm damage restoration is a final inspection and certification. The restoration team will conduct a thorough inspection to ensure that all repairs have been completed, and the property has been fully restored to its pre-storm condition. The team will also provide a certificate of completion, which can be used for insurance purposes.",
          },
        ],
      },
    ],
  },
];
