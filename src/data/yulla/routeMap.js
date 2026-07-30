// Shared route map data for Yulla Kanda Trek & Shimla plans
// Route: Delhi → Shimla → Tapri / Yulla Khas → Yulla Kanda Lake → Shimla Sightseeing → Delhi

export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight HRTC or Volvo bus from ISBT Kashmiri Gate to Shimla.",
    highlight: true, note: "Overnight journey"
  },
  {
    id: 2, name: "Shimla", altitude: 2276, altLabel: "2,276m", distance: 340,
    type: "town", category: "Town / Hub",
    description: "Capital of Himachal Pradesh. Transfer to another HRTC bus or local taxi heading towards Kinnaur (Tapri/Urni).",
    highlight: true, note: "340 km · ~8 hrs bus journey"
  },
  {
    id: 3, name: "Tapri Junction", altitude: 2100, altLabel: "2,100m", distance: 530,
    type: "junction", category: "Junction",
    description: "Main junction in Kinnaur along the Sutlej river. Hire a local Bolero or taxi up to Yulla Khas village.",
    highlight: false, note: "Leave national highway here"
  },
  {
    id: 4, name: "Yulla Khas", altitude: 2195, altLabel: "2,195m", distance: 550,
    type: "trailhead", category: "Village / Trailhead",
    description: "A traditional Kinnauri village famous for its apricot orchards. Trailhead for the Yulla Kanda lake trek. Homestays available.",
    highlight: true, note: "Start of Yulla Kanda trek"
  },
  {
    id: 5, name: "Forest Camp / Meadows", altitude: 3100, altLabel: "3,100m", distance: 556,
    type: "camp", category: "Camp",
    description: "Beautiful clearing surrounded by Oak and Pine forests. Rest stop before entering the alpine zone.",
    highlight: false, note: "Water source available"
  },
  {
    id: 6, name: "Yulla Kanda Lake", altitude: 3895, altLabel: "3,895m (12,779 ft)", distance: 562,
    type: "lake", category: "Sacred Lake",
    description: "A sacred high-altitude lake featuring the world's highest Krishna Temple. Famous for the custom of floating traditional caps to check fortune.",
    highlight: true, note: "Highest point of the trek"
  },
  {
    id: 7, name: "Return Yulla Khas", altitude: 2195, altLabel: "2,195m", distance: 574,
    type: "trailhead", category: "Village / Trailhead",
    description: "Descend back from the lake. Enjoy warm hospitality and local Kinnauri food at your homestay.",
    highlight: false, note: "Trek ends here"
  },
  {
    id: 8, name: "Shimla Return", altitude: 2276, altLabel: "2,276m", distance: 784,
    type: "town", category: "Town / Hub",
    description: "Travel back to Shimla. Rent a scooty to explore the Mall Road, Ridge, Kufri, and Jakhoo Temple.",
    highlight: true, note: "Shimla scooty exploration"
  },
  {
    id: 9, name: "Return Delhi", altitude: 215, altLabel: "215m", distance: 1150,
    type: "city", category: "Start / End",
    description: "Board the overnight Volvo bus back to Delhi.",
    highlight: false, note: "End of trip"
  }
];

export const routeStats = {
  totalDistance: "24 km Trek",
  peakAltitude: "3,895m (12,779 ft)",
  totalWaypoints: 9,
  passes: 0,
  days: 5,
  scootyDistance: "~40 km in Shimla",
  lakeAltitude: "3,895m"
};

export const typeConfig = {
  city:      { color: "#6B7280", bg: "#F3F4F6",  label: "Start / End" },
  town:      { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"  },
  junction:  { color: "#64748B", bg: "#F1F5F9",  label: "Junction"    },
  trailhead: { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"   },
  camp:      { color: "#059669", bg: "#D1FAE5",  label: "Camp"        },
  lake:      { color: "#8B5CF6", bg: "#EDE9FE",  label: "Sacred Lake" }
};
