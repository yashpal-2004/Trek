export const routeWaypoints = [
  {
    id: 1, name: "Sonipat", altitude: 220, altLabel: "220m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight semi-sleeper Volvo bus from Sonipat bypass / Murthal on 27 Aug evening.",
    highlight: true, note: "Boarding Murthal bypass"
  },
  {
    id: 2, name: "Mandi", altitude: 760, altLabel: "760m", distance: 370,
    type: "town", category: "Transit Hub",
    description: "Major highway town. Short rest stop for tea and freshening up.",
    highlight: false, note: "Highway stop"
  },
  {
    id: 3, name: "Bir Tibetan Colony", altitude: 1525, altLabel: "1,525m", distance: 450,
    type: "village", category: "Landing Site",
    description: "Backpacker hub. Home to beautiful monasteries, cafes, and paragliding landing field. Arrive 28 Aug.",
    highlight: true, note: "Colony stay"
  },
  {
    id: 4, name: "Billing Take-off Point", altitude: 2400, altLabel: "2,400m", distance: 457,
    type: "basecamp", category: "Launch Pad",
    description: "Asia's highest paragliding takeoff site. Ridge camping on 29 Aug.",
    highlight: true, note: "Launch pad (7,874 ft)"
  },
  {
    id: 5, name: "Return: Sonipat", altitude: 220, altLabel: "220m", distance: 907,
    type: "city", category: "Start / End",
    description: "Board evening bus at Bir on 30 Aug, arrive back at Sonipat by morning of 31 Aug.",
    highlight: false, note: "Arrive 31 Aug morning"
  }
];

export const routeStats = {
  totalDistance: "~7 km Trek / 14 km Cab",
  peakAltitude: "2,400m (7,874 ft)",
  totalWaypoints: 5,
  passes: 0,
  days: 4,
  highestLake: "N/A",
  unescoSite: "Kangra Valley Foothills"
};

export const typeConfig = {
  city:       { color: "#6B7280", bg: "#F3F4F6",  label: "City"         },
  town:       { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"   },
  trailhead:  { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"    },
  village:    { color: "#10B981", bg: "#D1FAE5",  label: "Village"      },
  basecamp:   { color: "#E11D48", bg: "#FFE4E6",  label: "Launch Pad"   },
  valley:     { color: "#84CC16", bg: "#ECFCCB",  label: "Valley"       },
  landmark:   { color: "#EF4444", bg: "#FEE2E2",  label: "Landmark"     },
  gurudwara:  { color: "#8B5CF6", bg: "#EDE9FE",  label: "Summit Peak"  },
  lake:       { color: "#0EA5E9", bg: "#E0F2FE",  label: "Frozen Lake"  }
};
