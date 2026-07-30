export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight train/bus to Haridwar. Pre-book Haridwar–Govindghat shared taxi.",
    highlight: true, note: "Book train/bus in advance"
  },
  {
    id: 2, name: "Haridwar / Rishikesh", altitude: 314, altLabel: "314m", distance: 230,
    type: "pilgrim", category: "Town",
    description: "Holy Ganga ghats. Quick transfer to shared taxi for Joshimath. Optional Ganga Aarti if schedule permits.",
    highlight: false, note: "Transit stop — 30 min layover"
  },
  {
    id: 3, name: "Joshimath", altitude: 1890, altLabel: "1,890m", distance: 490,
    type: "town", category: "Town / Hub",
    description: "Gateway town to Nanda Devi Biosphere. Last major market for supplies. Overnight stay option.",
    highlight: false, note: "Last ATM & pharmacy"
  },
  {
    id: 4, name: "Govindghat", altitude: 1828, altLabel: "1,828m", distance: 275,
    type: "trailhead", category: "Trailhead",
    description: "Official trailhead for both Valley of Flowers and Hemkund Sahib. Gurudwara provides free langar & accommodation.",
    highlight: true, note: "Trek begins here"
  },
  {
    id: 5, name: "Pulna / Bhyundar", altitude: 2150, altLabel: "2,150m", distance: 283,
    type: "village", category: "Village",
    description: "Small village with chai stalls and basic dhabas. Jeep drop possible from Govindghat to Pulna (3 km).",
    highlight: false, note: "Jeep available to here (₹50–80)"
  },
  {
    id: 6, name: "Ghangaria", altitude: 3048, altLabel: "3,048m", distance: 289,
    type: "basecamp", category: "Base Camp",
    description: "Central base for both treks. Wooden lodges, GMVN guesthouses, and Gurudwara serai available. Phone signal weak.",
    highlight: true, note: "14 km from Govindghat · 5-6 hrs"
  },
  {
    id: 7, name: "Valley of Flowers Entry", altitude: 3352, altLabel: "3,352m", distance: 294,
    type: "gate", category: "Entry Gate",
    description: "Forest Department checkpoint. Entry ticket ₹200/person. Photography allowed. No camping permitted inside.",
    highlight: false, note: "Entry ticket ₹200 (Indian) / ₹800 (Foreigner)"
  },
  {
    id: 8, name: "Valley of Flowers", altitude: 3658, altLabel: "3,658m", distance: 299,
    type: "valley", category: "Valley",
    description: "UNESCO World Heritage Site. 87 sq km of alpine valley blooming with 500+ species of wildflowers, waterfalls, and glaciers.",
    highlight: true, note: "Best bloom: late July–mid August"
  },
  {
    id: 9, name: "Pushpawati River", altitude: 3700, altLabel: "3,700m", distance: 301,
    type: "landmark", category: "Landmark",
    description: "Crystal clear glacial river flowing through the heart of the Valley of Flowers. Rest point with panoramic views.",
    highlight: false, note: "River crossing point on the trail"
  },
  {
    id: 10, name: "Hemkund Sahib Trail Start", altitude: 3150, altLabel: "3,150m", distance: 290,
    type: "trailstart", category: "Trail Junction",
    description: "Trail junction from Ghangaria toward Hemkund Sahib. Steep 6 km ascent gaining 1,400m altitude.",
    highlight: false, note: "Start early (5 AM) to avoid crowds"
  },
  {
    id: 11, name: "Laxman Lok", altitude: 3900, altLabel: "3,900m", distance: 293,
    type: "landmark", category: "Landmark",
    description: "Sacred midpoint with a small temple dedicated to Laxman (believed to have meditated here). Rest point.",
    highlight: false, note: "~3 km from Ghangaria"
  },
  {
    id: 12, name: "Shree Hemkund Sahib", altitude: 4632, altLabel: "4,632m (15,200 ft)", distance: 296,
    type: "gurudwara", category: "Sacred Site",
    description: "Holiest Sikh Gurudwara at the highest altitude in the world. Set beside the star-shaped Hemkund glacial lake. Profoundly sacred.",
    highlight: true, note: "Highest point of the trek"
  },
  {
    id: 13, name: "Hemkund Lake", altitude: 4580, altLabel: "4,580m", distance: 296,
    type: "lake", category: "Lake",
    description: "Star-shaped glacial lake encircled by seven snow peaks. The Gurudwara is reflected in its still waters. Surreal beauty.",
    highlight: true, note: "Glacially cold — do not wade in"
  },
  {
    id: 14, name: "Return: Govindghat", altitude: 1828, altLabel: "1,828m", distance: 289,
    type: "trailhead", category: "Trailhead",
    description: "Descend from Ghangaria to Govindghat (14 km). Shared taxi or bus back toward Rishikesh.",
    highlight: false, note: "Descend takes 4–5 hours"
  },
  {
    id: 15, name: "Return: Delhi", altitude: 215, altLabel: "215m", distance: 505,
    type: "city", category: "Start / End",
    description: "Board overnight bus or train from Rishikesh/Haridwar back to Delhi.",
    highlight: false, note: "Overnight return journey"
  }
];

export const routeStats = {
  totalDistance: "~38 km Trek",
  peakAltitude: "4,632m (15,200 ft)",
  totalWaypoints: 13,
  passes: 0,
  days: 6,
  highestLake: "Hemkund (4,580m)",
  unescoSite: "Valley of Flowers"
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
  gurudwara:  { color: "#8B5CF6", bg: "#EDE9FE",  label: "Sacred Site"  },
  lake:       { color: "#0EA5E9", bg: "#E0F2FE",  label: "Lake"         }
};
