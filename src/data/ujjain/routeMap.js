export const routeWaypoints = [
  { id: 1, name: "Sonipat Bypass", altitude: 220, altLabel: "220m", distance: 0, type: "city", category: "Start / End", description: "Board direct AC sleeper bus to Ujjain.", highlight: false },
  { id: 2, name: "Ujjain Hotel", altitude: 511, altLabel: "511m", distance: 850, type: "city", category: "Hotel Stay", description: "Check in, freshen up, base for the trip.", highlight: true },
  { id: 3, name: "Mahakaleshwar Temple", altitude: 511, altLabel: "511m", distance: 853, type: "landmark", category: "Temple", description: "Lord Shiva Jyotirlinga, witness special prayers.", highlight: true },
  { id: 4, name: "Harsiddhi Devi Temple", altitude: 511, altLabel: "511m", distance: 854, type: "landmark", category: "Temple", description: "One of 51 Shaktipeeths, famous lamp lighting.", highlight: true },
  { id: 5, name: "Ram Ghat", altitude: 511, altLabel: "511m", distance: 855, type: "landmark", category: "River Ghat", description: "Venerated ghat on Shipra River bank.", highlight: false },
  { id: 6, name: "Kal Bhairav Temple", altitude: 511, altLabel: "511m", distance: 862, type: "landmark", category: "Temple", description: "Unique ritual offering alcohol to deity.", highlight: true },
  { id: 7, name: "Mangalnath Temple", altitude: 511, altLabel: "511m", distance: 865, type: "landmark", category: "Temple", description: "Acclaimed birthplace of planet Mars.", highlight: false },
  { id: 8, name: "Return: Sonipat", altitude: 220, altLabel: "220m", distance: 1715, type: "city", category: "Start / End", description: "Arrive back by overnight bus.", highlight: false }
];

export const routeStats = {
  totalDistance: "1,700 km",
  peakAltitude: "511m (Ujjain)",
  totalWaypoints: 8,
  passes: 0,
  monasteries: 0,
  villages: 0,
  lakes: 0,
  temples: 5
};

export const typeConfig = {
  city:      { color: "#6B7280", accent: "#374151", bg: "#F3F4F6",  label: "Start / End"   },
  landmark:  { color: "#EF4444", accent: "#B91C1C", bg: "#FEE2E2",  label: "Landmark"      },
  town:      { color: "#2563EB", accent: "#1E40AF", bg: "#DBEAFE",  label: "Town / Hub"    }
};
export default routeWaypoints;
