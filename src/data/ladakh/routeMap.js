// Shared route map data for Ladakh Self-Scooty Circuit plans
// Circuit covering Zoji La, Leh, Khardung La, Nubra, Pangong, Chang La, Tanglang La, Sarchu, Manali

export const routeWaypoints = [
  {
    id: 1, name: "Hisar", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point of the epic scooty circuit. Ride north via Punjab bypass roads.",
    highlight: true, note: "Early 5 AM start"
  },
  {
    id: 2, name: "Patnitop / Ramban", altitude: 2024, altLabel: "2,024m", distance: 560,
    type: "town", category: "Town / Hub",
    description: "Hill station in Jammu. First major altitude rise. Rest overnight to prepare for Kashmir valley entry.",
    highlight: false, note: "Day 1 overnight stop"
  },
  {
    id: 3, name: "Srinagar", altitude: 1585, altLabel: "1,585m", distance: 700,
    type: "city", category: "City",
    description: "Lush Kashmir valley hub. Ride alongside Dal Lake. Essential refueling and mechanics check before high passes.",
    highlight: true, note: "Acclimatize here"
  },
  {
    id: 4, name: "Zoji La Pass", altitude: 3528, altLabel: "3,528m (11,575 ft)", distance: 800,
    type: "pass", category: "Mountain Pass",
    description: "Notorious dirt pass on the Srinagar-Leh highway. Challenging mud and slush sections.",
    highlight: true, note: "First high-altitude pass test"
  },
  {
    id: 5, name: "Kargil", altitude: 2676, altLabel: "2,676m", distance: 902,
    type: "town", category: "Town / Hub",
    description: "Historic town along the Suru River. Visit the Kargil War Memorial at Dras en route.",
    highlight: false, note: "Day 3 overnight stop"
  },
  {
    id: 6, name: "Leh", altitude: 3524, altLabel: "3,524m", distance: 1117,
    type: "city", category: "Leh Valley",
    description: "Capital of Ladakh. Spend a rest day to acclimatize fully. Obtain inner line permits for Nubra/Pangong.",
    highlight: true, note: "Permits & bike checklist check"
  },
  {
    id: 7, name: "Khardung La Pass", altitude: 5359, altLabel: "5,359m (17,582 ft)", distance: 1157,
    type: "pass", category: "Mountain Pass",
    description: "One of the highest motorable passes in the world. Breathtaking views of Karakoram range.",
    highlight: true, note: "Riding peak point: 17,582 ft"
  },
  {
    id: 8, name: "Nubra Valley (Hunder)", altitude: 3048, altLabel: "3,048m", distance: 1242,
    type: "valley", category: "High Valley",
    description: "High-altitude cold desert dunes. Witness double-humped Bactrian camels. Camp overnight.",
    highlight: false, note: "Day 6 overnight stop"
  },
  {
    id: 9, name: "Pangong Tso", altitude: 4225, altLabel: "4,225m (13,862 ft)", distance: 1407,
    type: "lake", category: "High Lake",
    description: "Saltwater lake stretching from India to China. Deep blue color shifting to green during the day.",
    highlight: true, note: "Day 7 overnight lake camping"
  },
  {
    id: 10, name: "Chang La Pass", altitude: 5360, altLabel: "5,360m (17,585 ft)", distance: 1487,
    type: "pass", category: "Mountain Pass",
    description: "Very steep and ice-covered descent returning to Leh valley. Challenging loose gravel.",
    highlight: false, note: "Changla Mata temple at top"
  },
  {
    id: 11, name: "Tanglang La Pass", altitude: 5328, altLabel: "5,328m (17,480 ft)", distance: 1677,
    type: "pass", category: "Mountain Pass",
    description: "High pass along the Leh-Manali highway. Smooth paved roads but extreme wind chill.",
    highlight: false, note: "Gateway to Lahaul plains"
  },
  {
    id: 12, name: "Sarchu / Jispa", altitude: 3200, altLabel: "3,200m", distance: 1902,
    type: "camp", category: "High Plain Camp",
    description: "Border between Ladakh and Himachal. Stark, desolate river banks. Staying in basic tents.",
    highlight: false, note: "Extreme cold overnight stay"
  },
  {
    id: 13, name: "Manali", altitude: 2050, altLabel: "2,050m", distance: 2000,
    type: "town", category: "Town / Hub",
    description: "Arrive in green Kullu valley after crossing Atal Tunnel. Refuel, relax, and explore cafes.",
    highlight: false, note: "Day 10/11 overnight stop"
  },
  {
    id: 14, name: "Return Hisar", altitude: 215, altLabel: "215m", distance: 2850,
    type: "city", category: "Start / End",
    description: "Final leg riding down the plains back to Hisar. Circuit complete.",
    highlight: true, note: "Total 2,850 km completed"
  }
];

export const routeStats = {
  totalDistance: "2,850 km Ride",
  peakAltitude: "5,360m (17,585 ft)",
  totalWaypoints: 14,
  passes: 5,
  days: 12,
  routeType: "Srinagar-Leh-Manali Loop",
  permitsRequired: "Inner Line Permit (ILP) Ladakh"
};

export const typeConfig = {
  city:      { color: "#6B7280", bg: "#F3F4F6",  label: "Start / End" },
  town:      { color: "#2563EB", bg: "#DBEAFE",  label: "Town Stop"  },
  pass:      { color: "#EF4444", bg: "#FEE2E2",  label: "High Pass"   },
  valley:    { color: "#10B981", bg: "#D1FAE5",  label: "High Valley" },
  lake:      { color: "#8B5CF6", bg: "#EDE9FE",  label: "Saltwater Lake" },
  camp:      { color: "#D97706", bg: "#FEF3C7",  label: "Desolate Camp" }
};
