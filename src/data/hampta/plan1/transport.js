export const transport = [
  { id: 1, from: "Delhi", to: "Manali", mode: "Volvo Bus", distance: "530 km", duration: "12 hrs", fare: 850, cheapest: 850, alternative: "HRTC Ordinary Bus", frequency: "Hourly (Overnight)", notes: "Overnight semi-sleeper AC Volvo bus journey from Delhi to Manali", busType: "AC Volvo Semi-Sleeper" },
  { id: 2, from: "Manali", to: "Jobra Trailhead", mode: "Shared Cab", distance: "20 km", duration: "1.5 hrs", fare: 300, cheapest: 300, alternative: "Private Taxi (₹1800)", frequency: "Morning cabs from Prini", notes: "Shared Bolero up to the trek start point through 40 hairpin turns", busType: "Mahindra Bolero" },
  { id: 3, from: "Jobra Trailhead", to: "Chika Camp", mode: "Trek", distance: "3 km", duration: "2 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Continuous", notes: "Gradual trek along the Rani river banks", busType: "On Foot" },
  { id: 4, from: "Chika Camp", to: "Balu Ka Ghera", mode: "Trek", distance: "8 km", duration: "5 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Continuous", notes: "Scenic valley ascent crossing cold water streams", busType: "On Foot" },
  { id: 5, from: "Balu Ka Ghera", to: "Shea Goru", mode: "Trek", distance: "12 km", duration: "9 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Continuous", notes: "Pass summit climb and steep scree descent", busType: "On Foot" },
  { id: 6, from: "Shea Goru", to: "Chatru Camp", mode: "Trek", distance: "6 km", duration: "4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Continuous", notes: "Descent down rocky mountain pathways", busType: "On Foot" },
  { id: 7, from: "Chatru Camp", to: "Chandra Tal Lake", mode: "Shared Cab", distance: "45 km", duration: "3 hrs", fare: 500, cheapest: 500, alternative: "Hitchhiking", frequency: "Afternoon cabs", notes: "Rocky off-road drive to the sacred Moon Lake", busType: "Tata Sumo / Bolero" },
  { id: 8, from: "Chandra Tal Lake", to: "Manali", mode: "Shared Cab", distance: "110 km", duration: "5 hrs", fare: 650, cheapest: 650, alternative: "State Bus (₹150)", frequency: "Morning only", notes: "Return drive via Atal Tunnel / Rohtang Pass", busType: "Tata Sumo / Bolero" },
  { id: 9, from: "Manali", to: "Delhi", mode: "Volvo Bus", distance: "530 km", duration: "12 hrs", fare: 850, cheapest: 850, alternative: "HRTC Ordinary Bus", frequency: "Hourly (Overnight)", notes: "Overnight semi-sleeper AC Volvo bus returning to Delhi", busType: "AC Volvo Semi-Sleeper" },
];

export const transportModes = ["All", "Volvo Bus", "Shared Cab", "Trek"];
