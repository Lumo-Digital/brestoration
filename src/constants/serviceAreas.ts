export interface ServiceAreaGroup {
  state: string;
  cities: string[];
}

export const SERVICE_AREAS: ServiceAreaGroup[] = [
  {
    state: "Florida",
    cities: [
      "Doral",
      "Miami",
      "Hialeah",
      "Coral Gables",
      "Fort Lauderdale",
      "Hollywood",
      "Pembroke Pines",
      "Miramar",
      "Weston",
      "Boca Raton",
      "West Palm Beach",
      "Homestead",
    ],
  },
  {
    state: "South Carolina",
    cities: ["Columbia"],
  },
  {
    state: "North Carolina",
    cities: ["Charlotte"],
  },
];
