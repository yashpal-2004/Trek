export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight train/bus to Rishikesh/Haridwar.",
    highlight: true, note: "Book transport in advance"
  },
  {
    id: 2, name: "Rishikesh", altitude: 340, altLabel: "340m", distance: 240,
    type: "town", category: "Transit Hub",
    description: "Gateway to Garhwal Himalayas. Catch early morning direct bus or shared taxi to Ukhimath.",
    highlight: false, note: "Transit stop"
  },
  {
    id: 3, name: "Ukhimath", altitude: 1311, altLabel: "1,311m", distance: 430,
    type: "town", category: "Hill Town",
    description: "Winter seat of Lord Kedarnath. Last major hub for ATMs and supplies. Hire shared jeep to Ransi.",
    highlight: false, note: "Last reliable ATM/network"
  },
  {
    id: 4, name: "Ransi", altitude: 1900, altLabel: "1,900m", distance: 450,
    type: "trailhead", category: "Trailhead",
    description: "Base village for the Madhyamaheshwar trek. Scenic homestays and ancient Rakeshwari Temple.",
    highlight: true, note: "Trek begins here"
  },
  {
    id: 5, name: "Gaundhar", altitude: 1980, altLabel: "1,980m", distance: 456,
    type: "village", category: "Village",
    description: "Small settlement near the confluence of Madhyamaheshwar Ganga and Markanga Ganga. Tea and snacks shops.",
    highlight: false, note: "6 km from Ransi"
  },
  {
    id: 6, name: "Bantoli", altitude: 2050, altLabel: "2,050m", distance: 457,
    type: "village", category: "Confluence Village",
    description: "Picturesque spot marking the confluence of rivers. Steep climb starts immediately after Bantoli.",
    highlight: false, note: "Confluence point"
  },
  {
    id: 7, name: "Nanu", altitude: 2700, altLabel: "2,700m", distance: 461,
    type: "landmark", category: "Rest Stop",
    description: "Midpoint of the steep climb. Basic dhabas offering tea, maggie, and simple rooms.",
    highlight: false, note: "Steep climb checkpoint"
  },
  {
    id: 8, name: "Madhyamaheshwar", altitude: 3497, altLabel: "3,497m", distance: 466,
    type: "basecamp", category: "Sacred Site",
    description: "Ancient Panch Kedar Temple dedicated to Lord Shiva. Magnificent green meadows surrounded by snow peaks.",
    highlight: true, note: "16 km from Ransi · 6-8 hrs"
  },
  {
    id: 9, name: "Budha Madhyamaheshwar", altitude: 3750, altLabel: "3,750m", distance: 468,
    type: "gurudwara", category: "Sacred Peak",
    description: "A steep 2 km ridge walk from the main temple. Offers outstanding views of Chaukhamba and Kedarnath peaks.",
    highlight: true, note: "Highest point of trek"
  },
  {
    id: 10, name: "Return: Ransi", altitude: 1900, altLabel: "1,900m", distance: 484,
    type: "trailhead", category: "Trailhead",
    description: "Trek back down from the temple. Relax at a village homestay.",
    highlight: false, note: "16 km downhill descent"
  },
  {
    id: 11, name: "Return: Delhi", altitude: 215, altLabel: "215m", distance: 934,
    type: "city", category: "Start / End",
    description: "Road transit to Rishikesh followed by overnight train/bus back to Delhi.",
    highlight: false, note: "End of journey"
  }
];

export const routeStats = {
  totalDistance: "~36 km Trek",
  peakAltitude: "3,750m (12,303 ft)",
  totalWaypoints: 11,
  passes: 0,
  days: 5,
  highestLake: "Budha Madhyamaheshwar Pool (3,750m)",
  unescoSite: "Panch Kedar Region"
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
