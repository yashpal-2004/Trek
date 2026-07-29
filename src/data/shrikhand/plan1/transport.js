export const transport = [
  { id: 1, from: "Hisar", to: "Shimla", mode: "Bus", distance: "235 km", duration: "6 hrs", fare: 450, cheapest: 450, alternative: "Haryana Roadways", frequency: "Daily 6:00 AM", notes: "Board Haryana Roadways bus to Shimla, arrive afternoon", busType: "Haryana Roadways" },
  { id: 2, from: "Shimla", to: "Rampur Bushahr", mode: "Bus", distance: "130 km", duration: "4 hrs", fare: 180, cheapest: 180, alternative: "Shared Taxi", frequency: "Multiple daily", notes: "HRTC bus via Narkanda, scenic Sutlej valley drive", busType: "HRTC Bus" },
  { id: 3, from: "Rampur Bushahr", to: "Jaon Village", mode: "Shared Taxi", distance: "55 km", duration: "2.5 hrs", fare: 350, cheapest: 250, alternative: "Private Taxi", frequency: "Morning", notes: "Last taxi usually 1 PM, book early", busType: "Shared Bolero" },
  { id: 4, from: "Jaon Village", to: "Singhad", mode: "Walking", distance: "3 km", duration: "1 hr", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Walk to medical checkpost for registration", busType: "On Foot" },
  { id: 5, from: "Singhad", to: "Thachru Camp", mode: "Trek", distance: "11 km", duration: "7-9 hrs", fare: 0, cheapest: 0, alternative: "Pony (₹2000)", frequency: "Daily", notes: "Steep Danda Dhar ascent, start before 7 AM", busType: "On Foot" },
  { id: 6, from: "Thachru", to: "Kali Ghati", mode: "Trek", distance: "5 km", duration: "3-4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Ridge crossing at 3600m, watch for weather", busType: "On Foot" },
  { id: 7, from: "Kali Ghati", to: "Bhim Dwar", mode: "Trek", distance: "5 km", duration: "2-3 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Descend into flower valley", busType: "On Foot" },
  { id: 8, from: "Bhim Dwar", to: "Nain Sarovar", mode: "Trek", distance: "6 km", duration: "3-4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Boulder fields, glacial terrain, start 3 AM", busType: "On Foot" },
  { id: 9, from: "Nain Sarovar", to: "Shrikhand Mahadev Summit", mode: "Trek", distance: "1 km", duration: "1-2 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Final steep push to 5227m Shivling", busType: "On Foot" },
  { id: 10, from: "Shrikhand Summit", to: "Bhim Dwar", mode: "Trek", distance: "7 km", duration: "4-5 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Return descent", busType: "On Foot" },
  { id: 11, from: "Bhim Dwar", to: "Thachru", mode: "Trek", distance: "10 km", duration: "4-5 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Day 5 full descent", busType: "On Foot" },
  { id: 12, from: "Thachru", to: "Singhad / Jaon", mode: "Trek", distance: "11 km", duration: "5-6 hrs", fare: 0, cheapest: 0, alternative: "Pony", frequency: "Daily", notes: "Descend Danda Dhar", busType: "On Foot" },
  { id: 13, from: "Jaon", to: "Rampur Bushahr", mode: "Shared Taxi", distance: "55 km", duration: "2.5 hrs", fare: 350, cheapest: 250, alternative: "Private Taxi", frequency: "Morning/Afternoon", notes: "Book day before", busType: "Shared Bolero" },
  { id: 14, from: "Rampur Bushahr", to: "Shimla", mode: "Bus", distance: "130 km", duration: "4 hrs", fare: 180, cheapest: 180, alternative: "Shared Taxi", frequency: "Multiple daily", notes: "HRTC bus to Shimla, enjoy Mall Road", busType: "HRTC Bus" },
  { id: 15, from: "Shimla", to: "Hisar", mode: "Bus", distance: "235 km", duration: "6 hrs", fare: 450, cheapest: 450, alternative: "Haryana Roadways", frequency: "Daily 7:00 AM", notes: "Morning bus home", busType: "Haryana Roadways" },
];

export const transportModes = ["All", "Bus", "Shared Taxi", "Trek", "Walking"];
