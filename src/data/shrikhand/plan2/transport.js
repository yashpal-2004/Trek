export const transport = [
  { id: 1, from: "Hisar", to: "Rampur Bushahr", mode: "Bus", distance: "365 km", duration: "9 hrs", fare: 620, cheapest: 620, alternative: "Overnight Express", frequency: "Depart 10:00 PM (15 Jul)", notes: "Overnight express bus, arrive Rampur early morning. Skips Shimla stay.", busType: "HRTC Volvo / Express" },
  { id: 2, from: "Rampur Bushahr", to: "Jaon Village", mode: "Shared Taxi", distance: "55 km", duration: "2.5 hrs", fare: 350, cheapest: 250, alternative: "Private Taxi", frequency: "Morning", notes: "Book early morning taxi to Jaon base camp", busType: "Shared Bolero" },
  { id: 3, from: "Jaon Village", to: "Singhad", mode: "Walking", distance: "3 km", duration: "1 hr", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Walk to Singhad medical registration", busType: "On Foot" },
  { id: 4, from: "Singhad", to: "Thachru Camp", mode: "Trek", distance: "11 km", duration: "7-9 hrs", fare: 0, cheapest: 0, alternative: "Pony (₹2000)", frequency: "Daily", notes: "Steep Danda Dhar — start before 7 AM", busType: "On Foot" },
  { id: 5, from: "Thachru", to: "Kali Ghati", mode: "Trek", distance: "5 km", duration: "3-4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Ridge crossing at 3600m", busType: "On Foot" },
  { id: 6, from: "Kali Ghati", to: "Bhim Dwar", mode: "Trek", distance: "5 km", duration: "2-3 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Daily", notes: "Descend to base camp", busType: "On Foot" },
  { id: 7, from: "Bhim Dwar", to: "Shrikhand Summit", mode: "Trek", distance: "7 km", duration: "6-8 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Start 2:30 AM", notes: "Pre-dawn summit push past Nain Sarovar", busType: "On Foot" },
  { id: 8, from: "Shrikhand Summit", to: "Thachru", mode: "Trek", distance: "18 km", duration: "8-9 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Post-summit same day", notes: "Full descent all the way to Thachru on summit day", busType: "On Foot" },
  { id: 9, from: "Thachru", to: "Singhad / Jaon", mode: "Trek", distance: "11 km", duration: "5-6 hrs", fare: 0, cheapest: 0, alternative: "Pony", frequency: "Daily morning", notes: "Final descent", busType: "On Foot" },
  { id: 10, from: "Jaon", to: "Rampur Bushahr", mode: "Shared Taxi", distance: "55 km", duration: "2.5 hrs", fare: 350, cheapest: 250, alternative: "Private Taxi", frequency: "Afternoon", notes: "Book day before", busType: "Shared Bolero" },
  { id: 11, from: "Rampur Bushahr", to: "Shimla", mode: "Bus", distance: "130 km", duration: "4 hrs", fare: 180, cheapest: 180, alternative: "Shared Taxi", frequency: "Multiple daily", notes: "Bus to Shimla", busType: "HRTC Bus" },
  { id: 12, from: "Shimla", to: "Hisar", mode: "Bus", distance: "235 km", duration: "6 hrs", fare: 450, cheapest: 450, alternative: "Haryana Roadways", frequency: "Daily 7:00 AM", notes: "Morning bus return to Hisar", busType: "Haryana Roadways" },
];

export const transportModes = ["All", "Bus", "Shared Taxi", "Trek", "Walking"];
