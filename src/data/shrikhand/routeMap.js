// Shared route map data for Shrikhand Mahadev Trek plans
// Route: Hisar → Shimla → Rampur Bushahr → Jaon Village → Singhad → Thachru → Bhim Dwar → Parvati Bag → Shrikhand Mahadev Summit → Return

export const routeWaypoints = [
  {
    id: 1, name: "Hisar", altitude: 215, altLabel: "215m", distance: 0,
    type: "city", category: "Start / End",
    description: "Starting point. Board early morning bus to Shimla.",
    highlight: true, note: "Day 1 start"
  },
  {
    id: 2, name: "Shimla", altitude: 2276, altLabel: "2,276m", distance: 235,
    type: "town", category: "Town / Hub",
    description: "Transit hub. Transfer to a bus or taxi heading to Rampur.",
    highlight: false, note: "Ramp-up altitude stop"
  },
  {
    id: 3, name: "Rampur Bushahr", altitude: 1012, altLabel: "1,012m", distance: 365,
    type: "town", category: "Town / Hub",
    description: "Located along Sutlej River. Stay overnight. Next morning proceed to Jaon via Nirmand.",
    highlight: false, note: "Overnight transit point"
  },
  {
    id: 4, name: "Jaon Village", altitude: 1850, altLabel: "1,850m", distance: 420,
    type: "trailhead", category: "Village / Trailhead",
    description: "Official start of the trek. Tiny village in Kullu district. Registration and medical fitness certificates verified here.",
    highlight: true, note: "Trek registration & check post"
  },
  {
    id: 5, name: "Singhad", altitude: 2130, altLabel: "2,130m", distance: 423,
    type: "camp", category: "Camp",
    description: "First base camp. Located on the banks of a mountain stream. Free langar meals and tent options.",
    highlight: false, note: "Last place with thick tree lines"
  },
  {
    id: 6, name: "Thachru", altitude: 3200, altLabel: "3,200m", distance: 434,
    type: "camp", category: "Camp",
    description: "Arrived after a grueling vertical 11 km climb called 'Dandi Dhar'. Famous for steep pine slopes.",
    highlight: true, note: "Overnight camp at 10,500 ft"
  },
  {
    id: 7, name: "Kali Ghati", altitude: 4000, altLabel: "4,000m", distance: 437,
    type: "pass", category: "Ridge",
    description: "A steep high-altitude ridge with a small shrine of Goddess Kali. Offers the first clear view of the Shrikhand peak.",
    highlight: false, note: "Peak view point"
  },
  {
    id: 8, name: "Bhim Dwar", altitude: 3800, altLabel: "3,800m", distance: 444,
    type: "camp", category: "Camp",
    description: "Deep glacial valley surrounded by massive waterfalls. Overnight tents and medical camps set up here during yatra.",
    highlight: true, note: "Launchpad for summit run"
  },
  {
    id: 9, name: "Parvati Bag", altitude: 4100, altLabel: "4,100m", distance: 447,
    type: "meadow", category: "Meadow",
    description: "Beautiful alpine meadow. Believed to be Lord Shiva's consort Parvati's garden. Last tent option before summit.",
    highlight: false, note: "Rare Brahma Kamal flowers bloom here"
  },
  {
    id: 10, name: "Shrikhand Mahadev Summit", altitude: 5227, altLabel: "5,227m (17,150 ft)", distance: 451,
    type: "shrinelil", category: "Sacred Peak",
    description: "72-foot natural stone monolith (Shivling) rising dramatically against the Tibetan skyline. Extremely high altitude.",
    highlight: true, note: "Summit target at 17,150 ft"
  },
  {
    id: 11, name: "Return Jaon Village", altitude: 1850, altLabel: "1,850m", distance: 482,
    type: "trailhead", category: "Village / Trailhead",
    description: "Descend back from the heights. Long, steep descent taxing on the knees.",
    highlight: false, note: "Descent takes ~1.5 days"
  },
  {
    id: 12, name: "Return Hisar", altitude: 215, altLabel: "215m", distance: 784,
    type: "city", category: "Start / End",
    description: "Transit back to Hisar via Shimla. End of strenuous pilgrimage.",
    highlight: false, note: "Total 784 km circuit"
  }
];

export const routeStats = {
  totalDistance: "64 km Trek",
  peakAltitude: "5,227m (17,150 ft)",
  totalWaypoints: 12,
  passes: 1,
  days: 7,
  difficulty: "Strenuous",
  yatraStatus: "Official Permits Required"
};

export const typeConfig = {
  city:       { color: "#6B7280", bg: "#F3F4F6",  label: "Start / End" },
  town:       { color: "#2563EB", bg: "#DBEAFE",  label: "Town / Hub"  },
  trailhead:  { color: "#D97706", bg: "#FEF3C7",  label: "Trailhead"   },
  camp:       { color: "#059669", bg: "#D1FAE5",  label: "Camp"        },
  pass:       { color: "#EF4444", bg: "#FEE2E2",  label: "Pass / Ridge" },
  meadow:     { color: "#84CC16", bg: "#ECFCCB",  label: "Meadow"      },
  shrinelil:  { color: "#8B5CF6", bg: "#EDE9FE",  label: "Sacred Peak" }
};
