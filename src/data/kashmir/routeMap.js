export const routeWaypoints = [
  { id: 1, name: "Delhi station", altitude: 210, altLabel: "210m", distance: 0, type: "city", category: "Start / End", description: "Board overnight sleeper train to Jammu Tawi.", highlight: false },
  { id: 2, name: "Jammu Tawi", altitude: 327, altLabel: "327m", distance: 580, type: "town", category: "Transit Hub", description: "Board shared cab to Banihal railway station.", highlight: false },
  { id: 3, name: "Banihal station", altitude: 1666, altLabel: "1,666m", distance: 750, type: "town", category: "Transit Hub", description: "Board local train passing Pir Panjal rail tunnel.", highlight: false },
  { id: 4, name: "Srinagar (Base)", altitude: 1585, altLabel: "1,585m", distance: 830, type: "city", category: "Hotel Stay", description: "Check in houseboat/hotel, local sightseeing.", highlight: true },
  { id: 5, name: "Gulmarg Meadows", altitude: 2650, altLabel: "2,650m", distance: 885, type: "landmark", category: "Ski Slopes", description: "Pine-fringed alpine meadows and cable car ride.", highlight: true },
  { id: 6, name: "Pahalgam Valley", altitude: 2200, altLabel: "2,200m", distance: 925, type: "landmark", category: "Meadows", description: "Lidder river valley views and local hikes.", highlight: true },
  { id: 7, name: "Return: Delhi", altitude: 210, altLabel: "210m", distance: 1700, type: "city", category: "Start / End", description: "Arrive back in Delhi.", highlight: false }
];

export const routeStats = {
  totalDistance: "1,700 km",
  peakAltitude: "2,650m (Gulmarg)",
  totalWaypoints: 7,
  passes: 1,
  monasteries: 0,
  villages: 8,
  lakes: 1,
  temples: 2
};

export const typeConfig = {
  city:      { color: "#0F766E", accent: "#115E59", bg: "#CCFBF1",  label: "Start / End"   },
  landmark:  { color: "#EF4444", accent: "#B91C1C", bg: "#FEE2E2",  label: "Landmark"      },
  town:      { color: "#2563EB", accent: "#1E40AF", bg: "#DBEAFE",  label: "Transit Hub"    }
};
export default routeWaypoints;
