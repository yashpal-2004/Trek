// Shared route map data for Annapurna Base Camp Expedition
// Route: Delhi → Gorakhpur → Sonauli Border → Pokhara → Nayapul → Chhomrong → Deurali → ABC → Jhinu Danda → Pokhara → Delhi

export const routeWaypoints = [
  {
    id: 1, name: "Delhi (NDLS / ANVT)", altitude: 216, altLabel: "216m", distance: 0,
    type: "city", category: "Start / End",
    description: "Expedition starts here. Board overnight sleeper train to Gorakhpur.",
    highlight: true, note: "Train journey (~13 hrs)"
  },
  {
    id: 2, name: "Gorakhpur Junction", altitude: 84, altLabel: "84m", distance: 780,
    type: "town", category: "Town / Hub",
    description: "Arrive in UP. Board UP Roadways bus heading straight to Sonauli border.",
    highlight: false, note: "Bus ride (~3 hrs)"
  },
  {
    id: 3, name: "Sonauli / Bhairahawa", altitude: 105, altLabel: "105m", distance: 875,
    type: "border", category: "Border",
    description: "Cross Indo-Nepal border on foot. Complete customs entry. Board Nepalese bus to Pokhara.",
    highlight: true, note: "Passport/ID check at border"
  },
  {
    id: 4, name: "Pokhara Lakeside", altitude: 822, altLabel: "822m", distance: 1055,
    type: "lake", category: "Base Town",
    description: "Stunning lakeside town nestled under the Annapurna massif. Get TIMS/ACAP permits here.",
    highlight: true, note: "Permit office open 10 AM - 5 PM"
  },
  {
    id: 5, name: "Nayapul Trailhead", altitude: 1070, altLabel: "1,070m", distance: 1100,
    type: "trailhead", category: "Trailhead",
    description: "Official trekking start point. Cross the Modi Khola suspension bridge and begin the hike.",
    highlight: false, note: "Start trek here"
  },
  {
    id: 6, name: "Ghandruk Village", altitude: 1940, altLabel: "1,940m", distance: 1110,
    type: "village", category: "Gurung Village",
    description: "Beautiful Gurung village with stone-paved paths and pristine views of Annapurna South and Machapuchare.",
    highlight: false, note: "First views of snow peaks"
  },
  {
    id: 7, name: "Chhomrong Village", altitude: 2170, altLabel: "2,170m", distance: 1116,
    type: "village", category: "Gurung Village",
    description: "Major settlement along the sanctuary trail. Massive stone staircase trail leading into the valley.",
    highlight: true, note: "Day 3 Stop"
  },
  {
    id: 8, name: "Dovan / Deurali", altitude: 3230, altLabel: "3,230m", distance: 1128,
    type: "camp", category: "Camp",
    description: "Dense bamboo and oak forests transition into alpine shrubland. High risk of cold wind drafts here.",
    highlight: false, note: "Acclimatize carefully here"
  },
  {
    id: 9, name: "Machapuchare Base Camp (MBC)", altitude: 3700, altLabel: "3,700m", distance: 1135,
    type: "basecamp", category: "Base Camp",
    description: "Stunning campsite at the base of the sacred, unclimbed Fishtail Peak (Machapuchare).",
    highlight: false, note: "Rest stop before final push"
  },
  {
    id: 10, name: "Annapurna Base Camp (ABC)", altitude: 4130, altLabel: "4,130m (13,549 ft)", distance: 1139,
    type: "summit", category: "Expedition Peak",
    description: "The ultimate destination. Stand inside a 360-degree amphitheater of giant 7,000m+ Himalayan peaks.",
    highlight: true, note: "Peak point of expedition"
  },
  {
    id: 11, name: "Jhinu Danda Hot Springs", altitude: 1780, altLabel: "1,780m", distance: 1163,
    type: "natural", category: "Hot Springs",
    description: "Natural thermal hot springs on the banks of the Modi Khola. Perfect to soothe aching muscles.",
    highlight: true, note: "Relaxation stop on return"
  },
  {
    id: 12, name: "Return Pokhara", altitude: 822, altLabel: "822m", distance: 1220,
    type: "lake", category: "Base Town",
    description: "Return to Pokhara by local bus from Nayapul. Celebrate trek completion by the lake.",
    highlight: false, note: "End of trek portion"
  },
  {
    id: 13, name: "Return Delhi", altitude: 216, altLabel: "216m", distance: 2000,
    type: "city", category: "Start / End",
    description: "Overland return via Sonauli border and Gorakhpur junction back to Delhi.",
    highlight: false, note: "Total ~2,000 km loop completed"
  }
];

export const routeStats = {
  totalDistance: "75 km Trek",
  peakAltitude: "4,130m (13,549 ft)",
  totalWaypoints: 13,
  passes: 0,
  days: 10,
  permitCost: "TIMS + ACAP (~₹4,000)",
  borderCross: "Sonauli (Indo-Nepal)"
};

export const typeConfig = {
  city:      { color: "#6B7280", bg: "#F3F4F6",  label: "Start / End" },
  town:      { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"  },
  border:    { color: "#EF4444", bg: "#FEE2E2",  label: "Border Stop" },
  lake:      { color: "#0EA5E9", bg: "#E0F2FE",  label: "Lakeside"    },
  trailhead: { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"   },
  village:   { color: "#10B981", bg: "#D1FAE5",  label: "Village"     },
  camp:      { color: "#0D9488", bg: "#CCFBF1",  label: "Meadow Camp" },
  basecamp:  { color: "#059669", bg: "#D1FAE5",  label: "Base Camp"    },
  summit:    { color: "#8B5CF6", bg: "#EDE9FE",  label: "Peak View"   },
  natural:   { color: "#0EA5E9", bg: "#E0F2FE",  label: "Hot Springs" }
};
