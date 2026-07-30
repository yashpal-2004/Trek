// Shared route map data for both Hampta Pass plans
// Route: Delhi → Manali → Jobra → Chika → Balu Ka Ghera → Hampta Pass → Shea Goru → Chatru
// Side trip: Chatru → Chandra Tal Lake → Return → Manali → Delhi

export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board overnight Volvo bus (9 PM). Seats on aisle side recommended for Manali road comfort.",
    highlight: true, note: "Book Volvo bus 2 weeks in advance"
  },
  {
    id: 2, name: "Manali", altitude: 2050, altLabel: "2,050m", distance: 530,
    type: "town", category: "Town / Hub",
    description: "Arrive early morning. Grab breakfast on Mall Road. Hire shared cab to Jobra trailhead.",
    highlight: true, note: "530 km · ~14 hrs overnight Volvo"
  },
  {
    id: 3, name: "Jobra Trailhead", altitude: 2980, altLabel: "2,980m", distance: 550,
    type: "trailhead", category: "Trailhead",
    description: "Official start of the Hampta Pass trek. Forest check post, permits verified here. Trek begins into the green Kullu Valley.",
    highlight: true, note: "20 km from Manali by shared cab"
  },
  {
    id: 4, name: "Chika Camp", altitude: 3140, altLabel: "3,140m", distance: 553,
    type: "camp", category: "Camp",
    description: "First campsite in a dense conifer forest beside a gurgling stream. 3 km easy walk from Jobra. Overnight camping.",
    highlight: false, note: "Day 1 camp · 3 km from Jobra"
  },
  {
    id: 5, name: "Jwara Meadow", altitude: 3350, altLabel: "3,350m", distance: 556,
    type: "meadow", category: "Meadow",
    description: "Gorgeous rolling alpine meadow carpeted with wildflowers in monsoon season. Great spot for a rest break.",
    highlight: false, note: "~5 km from Chika"
  },
  {
    id: 6, name: "Balu Ka Ghera", altitude: 3600, altLabel: "3,600m", distance: 561,
    type: "camp", category: "Camp",
    description: "\"Sandy Plain\" campsite at the base of Hampta Pass glacier. Last campsite before the pass. Clear night skies.",
    highlight: true, note: "Day 2 camp · 8 km from Chika"
  },
  {
    id: 7, name: "Hampta Pass Summit", altitude: 4270, altLabel: "4,270m (14,010 ft)", distance: 568,
    type: "pass", category: "Mountain Pass",
    description: "The dramatic crossover — Hampta Pass separates the lush green Kullu Valley from the stark grey lunar landscape of Lahaul. Stunning 360° views.",
    highlight: true, note: "Highest point · 14,010 ft"
  },
  {
    id: 8, name: "Shea Goru Camp", altitude: 3900, altLabel: "3,900m", distance: 573,
    type: "camp", category: "Camp",
    description: "First camp on the Lahaul (Spiti) side. Dramatic contrast from green forest to barren rocky desert landscape.",
    highlight: false, note: "Day 3 camp · 5 km from pass"
  },
  {
    id: 9, name: "Chatru", altitude: 3350, altLabel: "3,350m", distance: 585,
    type: "junction", category: "Junction",
    description: "River confluence camp where the Chandra river flows. Road accessible point — shared taxis available to Chandra Tal and Manali via Rohtang.",
    highlight: true, note: "Day 4 · Road access point"
  },
  {
    id: 10, name: "Chandra Tal Lake", altitude: 4250, altLabel: "4,250m (13,943 ft)", distance: 630,
    type: "lake", category: "Lake",
    description: "Crescent-shaped turquoise glacial lake — \"Moon Lake\" — set in the high Lahaul plateau. One of the most beautiful lakes in the Himalayas.",
    highlight: true, note: "45 km from Chatru by jeep · same-day return"
  },
  {
    id: 11, name: "Rohtang Pass", altitude: 3978, altLabel: "3,978m", distance: 680,
    type: "pass", category: "Mountain Pass",
    description: "Historic mountain pass on the return route to Manali. Subject to seasonal permits — sometimes closed for civilian traffic.",
    highlight: false, note: "Permit required (₹550 per vehicle)"
  },
  {
    id: 12, name: "Return: Manali", altitude: 2050, altLabel: "2,050m", distance: 740,
    type: "town", category: "Town / Hub",
    description: "Return to Manali via Rohtang Pass after Chandra Tal visit. Board evening Volvo bus back to Delhi.",
    highlight: false, note: "Board evening Volvo to Delhi"
  },
  {
    id: 13, name: "Return: Delhi", altitude: 215, altLabel: "215m", distance: 1095,
    type: "city", category: "Start / End",
    description: "Arrive Delhi early morning. End of expedition.",
    highlight: false, note: "~14 hrs overnight journey"
  }
];

export const routeStats = {
  totalDistance: "35 km Trek",
  peakAltitude: "4,270m (14,010 ft)",
  totalWaypoints: 13,
  passes: 2,
  days: 5,
  crossover: "Kullu → Lahaul",
  chandralTal: "4,250m (13,943 ft)"
};

export const typeConfig = {
  city:      { color: "#6B7280", bg: "#F3F4F6",  label: "Start / End"    },
  town:      { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"     },
  trailhead: { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"      },
  camp:      { color: "#059669", bg: "#D1FAE5",  label: "Camp"           },
  meadow:    { color: "#84CC16", bg: "#ECFCCB",  label: "Meadow"         },
  pass:      { color: "#EF4444", bg: "#FEE2E2",  label: "Mountain Pass"  },
  junction:  { color: "#64748B", bg: "#F1F5F9",  label: "Junction"       },
  lake:      { color: "#0EA5E9", bg: "#E0F2FE",  label: "Lake"           }
};
