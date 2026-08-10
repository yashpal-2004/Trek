export const routeWaypoints = [
  {
    id: 1, name: "Sonipat", altitude: 220, altLabel: "220m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight bus straight to Dharamshala on 26 Aug evening.",
    highlight: true, note: "Boarding bypass"
  },
  {
    id: 2, name: "Dharamshala (Arrival)", altitude: 1457, altLabel: "1,457m", distance: 475,
    type: "town", category: "Bus Dropoff & Scooty Rent",
    description: "De-board Volvo bus and rent scooties near stand on 27 Aug morning.",
    highlight: true, note: "Scooty pickup"
  },
  {
    id: 3, name: "Bir Tibetan Colony", altitude: 1525, altLabel: "1,525m", distance: 540,
    type: "village", category: "Trip Base",
    description: "Backpacker hub. Base hotel for both nights (MMT stay). Explore cafes, monasteries, and landing site.",
    highlight: true, note: "Hotel base (2 Nights)"
  },
  {
    id: 4, name: "McLeod Ganj / Dharamshala", altitude: 2082, altLabel: "2,082m", distance: 605,
    type: "town", category: "Sightseeing Day Ride",
    description: "Dalai Lama Temple, Bhagsu waterfall, and local Tibetan markets. Day ride from Bir base on 28 Aug.",
    highlight: true, note: "Day trip (130 km RT)"
  },
  {
    id: 5, name: "Billing Take-off Point", altitude: 2400, altLabel: "2,400m", distance: 619,
    type: "basecamp", category: "Launch Pad",
    description: "Asia's highest paragliding takeoff site. Morning ride up on 29 Aug.",
    highlight: true, note: "Launch pad (7,874 ft)"
  },
  {
    id: 6, name: "Dharamshala (Return)", altitude: 1457, altLabel: "1,457m", distance: 698,
    type: "town", category: "Transit Hub",
    description: "Ride back from Bir on 29 Aug evening. Return scooties and board overnight return Volvo bus.",
    highlight: false, note: "Scooty return"
  },
  {
    id: 7, name: "Sonipat (Arrival)", altitude: 220, altLabel: "220m", distance: 1173,
    type: "city", category: "Start / End",
    description: "Arrive back at Sonipat by morning of 30 Aug.",
    highlight: false, note: "Arrive 30 Aug morning"
  }
];

export const routeStats = {
  totalDistance: "~1,173 km (Bus + Scooty)",
  peakAltitude: "2,400m (7,874 ft)",
  totalWaypoints: 7,
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
