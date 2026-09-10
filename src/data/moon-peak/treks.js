export const treks = [
  {
    id: 1,
    name: "Triund Ridge Hike",
    difficulty: "Easy",
    distance: "9 km (One Way)",
    duration: "4 hrs",
    elevation: "2,850m",
    waterSources: true,
    camping: true,
    foodAvailable: "Trail Dhabas",
    image: "/mountain_clay_peak.png",
    description: "Popular mountain ridge hike from Dharamkot offering sweeping views of Kangra Valley and Dhauladhar wall.",
    mapLink: "https://maps.google.com/?q=Triund+Top"
  },
  {
    id: 2,
    name: "Laka Got & Glacier Trail",
    difficulty: "Moderate",
    distance: "6 km (From Triund)",
    duration: "3–4 hrs",
    elevation: "3,300m",
    waterSources: true,
    camping: true,
    foodAvailable: "Snowline Cafe",
    image: "/mountain_clay_peak.png",
    description: "Glacial meadow base camp trail passing through Snowline Cafe to Laka Got at the foot of Indrahar Pass.",
    mapLink: "https://maps.google.com/?q=Laka+Glacier"
  },
  {
    id: 3,
    name: "Moon Peak Summit Push (via Lahesh Cave)",
    difficulty: "Hard",
    distance: "11 km (Round Trip from Laka)",
    duration: "8–9 hrs",
    elevation: "4,650m",
    waterSources: false,
    camping: false,
    image: "/mountain_clay_peak.png",
    description: "Challenging high altitude summit climb across Lahesh Cave, boulder scree fields, and narrow snow ridges to Moon Peak summit at 15,250 ft.",
    warnings: [
      "Microspikes and trekking pole mandatory for scree & snow sections",
      "Start summit push pre-dawn (4 AM) to avoid afternoon ridge clouds"
    ],
    mapLink: "https://maps.google.com/?q=Moon+Peak+Himachal"
  }
];

export const trekDifficulties = ["All", "Easy", "Moderate", "Hard"];
