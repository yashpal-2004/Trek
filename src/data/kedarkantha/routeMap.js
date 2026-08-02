export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight train/bus to Dehradun.",
    highlight: true, note: "Book overnight transit"
  },
  {
    id: 2, name: "Dehradun", altitude: 450, altLabel: "450m", distance: 240,
    type: "town", category: "Transit Hub",
    description: "Capital of Uttarakhand. Shared jeeps leave morning to Sankri.",
    highlight: false, note: "Transit stop"
  },
  {
    id: 3, name: "Sankri", altitude: 1950, altLabel: "1,950m", distance: 430,
    type: "trailhead", category: "Base Village",
    description: "Starting point of the trek. Homestays and gear rental available.",
    highlight: true, note: "Trek starting gate"
  },
  {
    id: 4, name: "Juda Ka Talab", altitude: 2700, altLabel: "2,700m", distance: 434,
    type: "lake", category: "Campsite",
    description: "Iconic mountain pond, completely frozen in January. Pine forest canopy.",
    highlight: true, note: "4 km trek from Sankri"
  },
  {
    id: 5, name: "Kedarkantha Summit", altitude: 3810, altLabel: "3,810m", distance: 438,
    type: "gurudwara", category: "Summit Peak",
    description: "Highest summit point. Features a stone shrine of Lord Shiva and 360-degree peak panorama.",
    highlight: true, note: "Summit Peak (12,500 ft)"
  },
  {
    id: 6, name: "Hargaon", altitude: 2600, altLabel: "2,600m", distance: 442,
    type: "basecamp", category: "Campsite",
    description: "Lush open clearing campsite for descent. Great sunset views.",
    highlight: false, note: "Descent campsite"
  },
  {
    id: 7, name: "Return: Sankri", altitude: 1950, altLabel: "1,950m", distance: 448,
    type: "trailhead", category: "Base Village",
    description: "Return to base village, return rented spikes, and board jeep to Dehradun.",
    highlight: false, note: "6 km downhill walk"
  },
  {
    id: 8, name: "Return: Delhi", altitude: 215, altLabel: "215m", distance: 878,
    type: "city", category: "Start / End",
    description: "Overnight journey return to Delhi.",
    highlight: false, note: "End of yatra"
  }
];

export const routeStats = {
  totalDistance: "~18 km Trek",
  peakAltitude: "3,810m (12,500 ft)",
  totalWaypoints: 8,
  passes: 0,
  days: 5,
  highestLake: "Juda Ka Talab (2,700m)",
  unescoSite: "Govind Wildlife Sanctuary"
};

export const typeConfig = {
  city:       { color: "#6B7280", bg: "#F3F4F6",  label: "City"         },
  town:       { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"   },
  trailhead:  { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"    },
  village:    { color: "#10B981", bg: "#D1FAE5",  label: "Village"      },
  basecamp:   { color: "#059669", bg: "#D1FAE5",  label: "Base Camp"    },
  valley:     { color: "#84CC16", bg: "#ECFCCB",  label: "Valley"       },
  landmark:   { color: "#EF4444", bg: "#FEE2E2",  label: "Landmark"     },
  gurudwara:  { color: "#8B5CF6", bg: "#EDE9FE",  label: "Summit Peak"  },
  lake:       { color: "#0EA5E9", bg: "#E0F2FE",  label: "Frozen Lake"  }
};
