export const routeWaypoints = [
  { id: 1, name: "New Delhi", altitude: 216, altLabel: "216m", distance: 0, type: "city", category: "Start / End", description: "Board evening sleeper train from NDLS.", highlight: false },
  { id: 2, name: "Gorakhpur", altitude: 102, altLabel: "102m", distance: 750, type: "city", category: "Transit Hub", description: "Arrive by train, board local bus to border.", highlight: false },
  { id: 3, name: "Sonauli Border", altitude: 95, altLabel: "95m", distance: 850, type: "town", category: "Border Checkpost", description: "Clear Indo-Nepal immigration, walk across to Belahiya.", highlight: true },
  { id: 4, name: "Kathmandu", altitude: 1400, altLabel: "1400m", distance: 1130, type: "city", category: "Base Camp / Capital", description: "Explore Pashupatinath, Boudhanath, Swayambhunath & Durbar Square.", highlight: true },
  { id: 5, name: "Pokhara Lakeside", altitude: 822, altLabel: "822m", distance: 1330, type: "city", category: "Lake City", description: "Boating in Phewa Lake, lakeside walks, caves.", highlight: true },
  { id: 6, name: "Sarangkot", altitude: 1600, altLabel: "1600m", distance: 1340, type: "landmark", category: "Viewpoint", description: "Breathtaking sunrise views over Annapurna & Fishtail range.", highlight: true },
  { id: 7, name: "Return to Delhi", altitude: 216, altLabel: "216m", distance: 2320, type: "city", category: "Start / End", description: "Overnight train from Gorakhpur back to New Delhi.", highlight: false }
];

export const routeStats = {
  totalDistance: "2,320 km",
  peakAltitude: "1,600m (Sarangkot)",
  totalWaypoints: 7,
  passes: 0,
  monasteries: 2,
  villages: 2,
  lakes: 1,
  temples: 4
};

export const typeConfig = {
  city:      { color: "#6B7280", accent: "#374151", bg: "#F3F4F6",  label: "City"   },
  landmark:  { color: "#EF4444", accent: "#B91C1C", bg: "#FEE2E2",  label: "Landmark"      },
  town:      { color: "#2563EB", accent: "#1E40AF", bg: "#DBEAFE",  label: "Town / Border"    }
};

export default routeWaypoints;
