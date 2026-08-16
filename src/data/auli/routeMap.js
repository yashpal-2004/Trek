export const routeWaypoints = [
  { id: 1, name: "Sonipat Bypass", altitude: 220, altLabel: "220m", distance: 0, type: "city", category: "Start / End", description: "Board Volvo sleeper bus to Rishikesh.", highlight: false },
  { id: 2, name: "Rishikesh ISBT", altitude: 340, altLabel: "340m", distance: 210, type: "town", category: "Transit Hub", description: "Transfer to Joshimath shared cabs.", highlight: false },
  { id: 3, name: "Joshimath Base", altitude: 1875, altLabel: "1,875m", distance: 470, type: "city", category: "Hotel Stay", description: "Check-in hotel, explore local town.", highlight: true },
  { id: 4, name: "Auli Tower 10", altitude: 2750, altLabel: "2,750m", distance: 486, type: "landmark", category: "Ski Slopes", description: "Skiing training slopes and artificial lake.", highlight: true },
  { id: 5, name: "Gorson Bugyal", altitude: 3050, altLabel: "3,050m", distance: 490, type: "landmark", category: "Meadows", description: "Vast alpine meadows covered in snow.", highlight: true },
  { id: 6, name: "Return: Joshimath", altitude: 1875, altLabel: "1,875m", distance: 506, type: "city", category: "Hotel Stay", description: "Descend from Auli slopes back to hotel.", highlight: false },
  { id: 7, name: "Return: Sonipat", altitude: 220, altLabel: "220m", distance: 1100, type: "city", category: "Start / End", description: "Arrive back in Sonipat.", highlight: false }
];

export const routeStats = {
  totalDistance: "1,100 km",
  peakAltitude: "3,050m (Gorson)",
  totalWaypoints: 7,
  passes: 0,
  monasteries: 0,
  villages: 0,
  lakes: 1,
  temples: 1
};

export const typeConfig = {
  city:      { color: "#6B7280", accent: "#374151", bg: "#F3F4F6",  label: "Start / End"   },
  landmark:  { color: "#EF4444", accent: "#B91C1C", bg: "#FEE2E2",  label: "Landmark"      },
  town:      { color: "#2563EB", accent: "#1E40AF", bg: "#DBEAFE",  label: "Town / Hub"    }
};
export default routeWaypoints;
