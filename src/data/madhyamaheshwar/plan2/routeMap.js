export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight train/bus to Rishikesh.",
    highlight: true, note: "Book transport in advance"
  },
  {
    id: 2, name: "Rishikesh", altitude: 340, altLabel: "340m", distance: 240,
    type: "town", category: "Transit Hub",
    description: "Gateway to Himalayas. Board shared taxi to Gaurikund.",
    highlight: false, note: "Transit stop"
  },
  {
    id: 3, name: "Gaurikund", altitude: 1982, altLabel: "1,982m", distance: 450,
    type: "trailhead", category: "Kedarnath Base",
    description: "Trailhead for Kedarnath trek. Hot springs and starting point of yatra climb.",
    highlight: true, note: "Kedarnath Trek begins"
  },
  {
    id: 4, name: "Kedarnath Temple", altitude: 3583, altLabel: "3,583m", distance: 466,
    type: "basecamp", category: "Sacred Shrine",
    description: "Ancient Shiva temple. High-altitude mountain peak views. Extreme night cold.",
    highlight: true, note: "16 km trek from Gaurikund"
  },
  {
    id: 5, name: "Guptkashi / Ukhimath", altitude: 1311, altLabel: "1,311m", distance: 482,
    type: "town", category: "Transit Town",
    description: "Comfortable resting town after Kedarnath descent. Winter seat of Lord Kedarnath.",
    highlight: false, note: "Rest and recharge"
  },
  {
    id: 6, name: "Ransi", altitude: 1900, altLabel: "1,900m", distance: 512,
    type: "trailhead", category: "Madmaheshwar Base",
    description: "Base village starting point for Madhyamaheshwar trek. Quiet homestays.",
    highlight: true, note: "Madmaheshwar Trek begins"
  },
  {
    id: 7, name: "Bantoli", altitude: 2050, altLabel: "2,050m", distance: 519,
    type: "village", category: "Confluence Village",
    description: "River confluence point. Steep trail climb starts immediately after this stop.",
    highlight: false, note: "Confluence checkpoint"
  },
  {
    id: 8, name: "Madhyamaheshwar", altitude: 3497, altLabel: "3,497m", distance: 528,
    type: "basecamp", category: "Sacred Shrine",
    description: "Panch Kedar temple in a beautiful alpine meadow valley. Calm and spiritual.",
    highlight: true, note: "16 km trek from Ransi"
  },
  {
    id: 9, name: "Budha Madhyamaheshwar", altitude: 3750, altLabel: "3,750m", distance: 530,
    type: "gurudwara", category: "Peak Ridge",
    description: "High ridge offering panoramic Chaukhamba reflections in a small tarn.",
    highlight: true, note: "Highest point of trek"
  },
  {
    id: 10, name: "Return: Ransi", altitude: 1900, altLabel: "1,900m", distance: 546,
    type: "trailhead", category: "Trailhead",
    description: "Trek back down from the temple and rest at Ransi homestays.",
    highlight: false, note: "16 km downhill descent"
  },
  {
    id: 11, name: "Return: Rishikesh", altitude: 340, altLabel: "340m", distance: 756,
    type: "town", category: "Transit Hub",
    description: "Relax, rafting, ashrams, and board overnight bus back to Delhi.",
    highlight: false, note: "Rishikesh rest stop"
  },
  {
    id: 12, name: "Return: Delhi", altitude: 215, altLabel: "215m", distance: 996,
    type: "city", category: "Start / End",
    description: "Overnight journey return to Delhi.",
    highlight: false, note: "End of journey"
  }
];

export const routeStats = {
  totalDistance: "~68 km Trek",
  peakAltitude: "3,750m (12,303 ft)",
  totalWaypoints: 12,
  passes: 0,
  days: 8,
  highestLake: "Budha Madmaheshwar Pool (3,750m)",
  unescoSite: "Panch Kedar & Kedarnath Region"
};

export const typeConfig = {
  city:       { color: "#6B7280", bg: "#F3F4F6",  label: "City"         },
  pilgrim:    { color: "#0EA5E9", bg: "#E0F2FE",  label: "Pilgrim City" },
  town:       { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"   },
  trailhead:  { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"    },
  village:    { color: "#10B981", bg: "#D1FAE5",  label: "Village"      },
  basecamp:   { color: "#059669", bg: "#D1FAE5",  label: "Base Camp"    },
  gate:       { color: "#F59E0B", bg: "#FEF9C3",  label: "Entry Gate"   },
  valley:     { color: "#84CC16", bg: "#ECFCCB",  label: "Valley"       },
  landmark:   { color: "#EF4444", bg: "#FEE2E2",  label: "Landmark"     },
  trailstart: { color: "#64748B", bg: "#F1F5F9",  label: "Junction"     },
  gurudwara:  { color: "#8B5CF6", bg: "#EDE9FE",  label: "Sacred Peak"  },
  lake:       { color: "#0EA5E9", bg: "#E0F2FE",  label: "Lake"         }
};
