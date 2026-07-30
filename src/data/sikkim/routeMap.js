// Shared route map data for Sikkim Expedition plans
// Route: Delhi → NJP → Gangtok → Lachen → Gurudongmar Lake → Lachung → Yumthang Valley → NJP → Delhi

export const routeWaypoints = [
  {
    id: 1, name: "Delhi", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Expedition starts here. Board overnight train (Sleeper/AC) heading to New Jalpaiguri (NJP).",
    highlight: true, note: "Train journey (~26 hrs)"
  },
  {
    id: 2, name: "New Jalpaiguri (NJP)", altitude: 115, altLabel: "115m", distance: 1150,
    type: "junction", category: "Transit Station",
    description: "Major railway gateway to Sikkim and Northeast. Take a shared Sumo/taxi to Gangtok.",
    highlight: false, note: "120 km · ~4.5 hrs hill drive"
  },
  {
    id: 3, name: "Gangtok", altitude: 1650, altLabel: "1,650m", distance: 1270,
    type: "town", category: "Capital City",
    description: "Sikkim's capital. Complete permit formalities for North Sikkim (Gurudongmar/Yumthang). Explore MG Marg in the evening.",
    highlight: true, note: "Permits required (2 photocopies + photo)"
  },
  {
    id: 4, name: "Lachen", altitude: 2750, altLabel: "2,750m", distance: 1380,
    type: "village", category: "Base Village",
    description: "Small alpine village in North Sikkim. Base camp for the early morning drive to Gurudongmar Lake. Extremely cold.",
    highlight: true, note: "Stay overnight · Day 3"
  },
  {
    id: 5, name: "Thangu Valley", altitude: 3962, altLabel: "3,962m", distance: 1420,
    type: "valley", category: "High Valley",
    description: "High-altitude military base and yak pastures. Brief stop for tea and acclimatization before pushing to the lake.",
    highlight: false, note: "Last place with toilets & hot water"
  },
  {
    id: 6, name: "Gurudongmar Lake", altitude: 5430, altLabel: "5,430m (17,800 ft)", distance: 1450,
    type: "lake", category: "Sacred High Lake",
    description: "One of the highest lakes in the world. Deeply sacred to Buddhists, Sikhs, and Hindus. Enclosed by massive snow-covered peaks.",
    highlight: true, note: "Highest point of expedition · 17,800 ft"
  },
  {
    id: 7, name: "Lachung", altitude: 2900, altLabel: "2,900m", distance: 1570,
    type: "village", category: "Base Village",
    description: "Tranquil mountain village on the banks of Lachung River. Base camp for Yumthang Valley.",
    highlight: true, note: "Stay overnight · Day 4"
  },
  {
    id: 8, name: "Yumthang Valley", altitude: 3560, altLabel: "3,560m", distance: 1595,
    type: "valley", category: "Alpine Meadow",
    description: "\"Valley of Flowers\" of the east. Pine forests, natural sulphur hot springs, and Shingba Rhododendron Sanctuary.",
    highlight: true, note: "Best bloom: April–May"
  },
  {
    id: 9, name: "Zero Point (Yumesamdong)", altitude: 4724, altLabel: "4,724m", distance: 1618,
    type: "landmark", category: "High Point",
    description: "Where the motorable road ends. Close to the Chinese border. Surrounded by permanent snow slopes.",
    highlight: false, note: "Optional side trip (₹3,000 extra per cab)"
  },
  {
    id: 10, name: "Return Gangtok", altitude: 1650, altLabel: "1,650m", distance: 1738,
    type: "town", category: "Capital City",
    description: "Travel back to Gangtok. Relax and celebrate the successful trip.",
    highlight: false, note: "End of North Sikkim package"
  },
  {
    id: 11, name: "Return Delhi", altitude: 215, altLabel: "215m", distance: 1920,
    type: "city", category: "Start / End",
    description: "Board train at NJP back to Delhi. Total circuit completed.",
    highlight: false, note: "End of trip"
  }
];

export const routeStats = {
  totalDistance: "1,920 km Tour",
  peakAltitude: "5,430m (17,800 ft)",
  totalWaypoints: 11,
  passes: 0,
  days: 7,
  highestLake: "Gurudongmar Lake",
  borderProximity: "China border (Zero Point)"
};

export const typeConfig = {
  city:       { color: "#6B7280", bg: "#F3F4F6",  label: "Start / End" },
  junction:   { color: "#64748B", bg: "#F1F5F9",  label: "Transit Stop" },
  town:       { color: "#2563EB", bg: "#DBEAFE",  label: "City Stop"    },
  village:    { color: "#10B981", bg: "#D1FAE5",  label: "Base Village" },
  valley:     { color: "#84CC16", bg: "#ECFCCB",  label: "High Valley"  },
  lake:       { color: "#8B5CF6", bg: "#EDE9FE",  label: "Sacred Lake"  },
  landmark:   { color: "#EF4444", bg: "#FEE2E2",  label: "Border Point" }
};
