import { somnathNageshwarAmounts } from "./amounts";

export const itinerary = [
  {
    id: 0,
    day: 0,
    date: "Day 0",
    weekday: "Day 0",
    title: "Delhi / Sonipat → Board Overnight Train to Veraval (Somnath)",
    subtitle: "Board direct express train (Jabalpur - Veraval Express / Uttaranchal Express) from Delhi to Veraval",
    overview: "Report at Delhi Railway Station by 08:00 PM. Board the direct Sleeper / 3AC train departing towards Veraval (Somnath). Journey through Rajasthan into Gujarat's Saurashtra coastline.",
    travel: "Delhi → Jaipur → Ahmedabad → Rajkot → Veraval Station",
    travelMode: "Express Train (Sleeper)",
    distance: "1350 km",
    travelTime: "18 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.delhiToVeravalTrain,
    weather: "Pleasant evening breezes, 25°C",
    trekDistance: "0 km",
    highestAltitude: "220m",
    stay: "Overnight Express Train Sleeper Berth",
    food: "Train pantry dinner / Packed home food (₹150)",
    notes: "Veraval Railway Station is just 6 km from Somnath Mandir with 24/7 auto availability.",
    warnings: [
      "Keep valuables secure inside your berth"
    ],
    packing: ["Train ticket", "Water bottle", "Power bank"],
    images: [],
    mapLink: "https://maps.google.com/?q=Veraval+Railway+Station",
    tips: ["Pre-book Somnath Trust Dharamshala or nearby guest houses online."],
    photography: ["Boarding train at Delhi Station"],
    highlights: ["Sleeper journey to the Arabian coast"],
    meals: ["Pantry dinner"],
    activities: [
      { time: "08:00 PM", title: "Report at Station", description: "Verify train platform" },
      { time: "09:00 PM", title: "Board Express Train", description: "Depart for Veraval" }
    ],
    schedule: [
      { time: "08:00 PM", activity: "Arrive at Delhi station" },
      { time: "09:00 PM", activity: "Board train to Veraval" }
    ]
  },
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Veraval Arrival → Somnath Temple Darshan & Sound & Light Show",
    subtitle: "Arrive Veraval, transfer to Somnath, Darshan at 1st Jyotirlinga & Arabian Sea Light Show",
    overview: "Arrive at Veraval station by 02:30 PM. Take an auto to Somnath town (6 km) and check in at Somnath Trust Guest House / Hotel. Head to the grand Somnath Jyotirlinga Temple perched on the shore of the Arabian Sea. In the evening, attend Sandhya Aarti and enjoy the famous Light & Sound Show on the ocean terrace.",
    travel: "Veraval Station → Somnath Temple → Triveni Sangam",
    travelMode: "Auto-rickshaw & Walking",
    distance: "10 km Local",
    travelTime: "1 Hour",
    estimatedCost: somnathNageshwarAmounts.transportFares.veravalToSomnathAuto + somnathNageshwarAmounts.stays.somnath.hotelPrice + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Sea breeze, pleasant evening, 26°C to 30°C",
    trekDistance: "0 km",
    highestAltitude: "10m",
    stay: "Somnath Trust Hotel / Guest House (₹500)",
    food: "Gujarati Thali & Farsan (₹300)",
    notes: "Mobiles, cameras & electronic items must be deposited in free lockers outside Somnath Temple gate.",
    warnings: [
      "Strict security check at Somnath Temple entrance; carry valid photo ID."
    ],
    packing: ["Photo ID", "Modest traditional clothes", "Locker pouch"],
    images: [],
    mapLink: "https://maps.google.com/?q=Somnath+Temple",
    tips: ["Book the ₹30 Light & Sound show tickets right after evening Aarti."],
    photography: ["Somnath Mandir exterior illuminated against Arabian Sea"],
    highlights: ["First Jyotirlinga Somnath Darshan", "Sound & Light show over the ocean"],
    meals: ["Gujarati Thali & Dhokla"],
    activities: [
      { time: "02:30 PM", title: "Arrive Veraval", description: "Auto to Somnath guest house" },
      { time: "05:00 PM", title: "Somnath Darshan", description: "Darshan at Somnath Temple" },
      { time: "07:30 PM", title: "Light & Sound Show", description: "Watch light show on beach backdrop" }
    ],
    schedule: [
      { time: "02:30 PM", activity: "Arrive in Somnath" },
      { time: "05:00 PM", activity: "Somnath Temple Darshan" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Somnath → Porbandar → Dwarka Arrival & Dwarkadhish Aarti",
    subtitle: "Morning visit to Triveni Sangam & Bhalka Tirth, bus to Dwarka via Porbandar & evening Aarti",
    overview: "Visit Triveni Sangam (confluence of Hiran, Kapila & Saraswati rivers) and Bhalka Tirth (site where Lord Krishna departed). Board a GSRTC state express bus to Dwarka via Porbandar (Kirti Mandir). Arrive in Dwarka by 02:00 PM, check in, and visit the iconic 5-storey Jagat Mandir (Dwarkadhish Temple) for evening Aarti along Gomti Ghat.",
    travel: "Somnath → Porbandar → Dwarka Bus Stand",
    travelMode: "GSRTC State Express Bus",
    distance: "230 km",
    travelTime: "4.5 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.somnathToDwarkaBus + somnathNageshwarAmounts.stays.dwarka.hotelPrice + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Sunny coastal weather, 25°C to 32°C",
    trekDistance: "0 km",
    highestAltitude: "15m",
    stay: "Hotel / Dharamshala in Dwarka (₹500)",
    food: "Kathiyawadi Thali & Ringan Bhartha (₹300)",
    notes: "Witness the changing of the 52-yard flag (Dhwaja) atop Dwarkadhish Temple spire.",
    warnings: [
      "Heavy rush during evening Aarti at Dwarkadhish Mandir."
    ],
    packing: ["Sunglasses", "Cap", "Sunscreen"],
    images: [],
    mapLink: "https://maps.google.com/?q=Dwarkadhish+Temple",
    tips: ["Walk down Gomti Ghat steps for evening river views."],
    photography: ["Dwarkadhish Temple 52-yard flag spire"],
    highlights: ["Bhalka Tirth visit", "Dwarkadhish Jagat Mandir & Gomti Ghat"],
    meals: ["Kathiyawadi Thali"],
    activities: [
      { time: "06:30 AM", title: "Bhalka Tirth Visit", description: "Visit Bhalka Tirth & Triveni Sangam" },
      { time: "08:30 AM", title: "Bus to Dwarka", description: "GSRTC bus via Porbandar" },
      { time: "05:00 PM", title: "Dwarkadhish Aarti", description: "Attend Aarti at Jagat Mandir" }
    ],
    schedule: [
      { time: "08:30 AM", activity: "Bus to Dwarka" },
      { time: "05:00 PM", activity: "Dwarkadhish Mandir Aarti" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Dwarka → Nageshwar Jyotirlinga, Gopi Talav & Beyt Dwarka Island",
    subtitle: "Visit 2nd Jyotirlinga (Nageshwar with Giant Shiva Statue), Gopi Talav & ferry to Beyt Dwarka",
    overview: "Take a local shared cab to Nageshwar Jyotirlinga (16 km), featuring the famous 85-foot giant seated Lord Shiva statue. Proceed to Gopi Talav and Rukmini Devi Temple. Continue to Okha port (30 km) and board a ferry boat across the sea to Beyt Dwarka island (ancient kingdom of Lord Krishna). Return to Dwarka hotel.",
    travel: "Dwarka → Nageshwar → Gopi Talav → Okha → Beyt Dwarka → Dwarka",
    travelMode: "Shared Auto / Taxi & Ferry Boat",
    distance: "80 km Circuit",
    travelTime: "5 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.dwarkaToNageshwarTaxi + somnathNageshwarAmounts.transportFares.dwarkaToBeytDwarkaBoat + somnathNageshwarAmounts.stays.dwarka.hotelPrice + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Breezy ocean weather, 24°C to 30°C",
    trekDistance: "0 km",
    highestAltitude: "10m",
    stay: "Hotel / Dharamshala in Dwarka (₹500)",
    food: "Gujarati snacks, Farsan & Khichdi (₹300)",
    notes: "Ferry boat between Okha and Beyt Dwarka takes 15 minutes each way.",
    warnings: [
      "Watch your footing when getting on and off ferry boats at Okha jetty."
    ],
    packing: ["Camera/Phone", "Hat/Cap", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Nageshwar+Jyotirlinga",
    tips: ["Pose for photos in front of the giant 85-foot Lord Shiva statue at Nageshwar."],
    photography: ["85-foot Giant Shiva statue at Nageshwar"],
    highlights: ["Nageshwar Jyotirlinga Darshan", "Ferry boat trip to Beyt Dwarka island"],
    meals: ["Gujarati Khichdi & Kadhi"],
    activities: [
      { time: "08:00 AM", title: "Nageshwar Darshan", description: "Darshan at Nageshwar Jyotirlinga" },
      { time: "11:00 AM", title: "Ferry to Beyt Dwarka", description: "Board boat from Okha to Beyt Dwarka" },
      { time: "04:00 PM", title: "Return to Dwarka", description: "Relax at Dwarka local market" }
    ],
    schedule: [
      { time: "08:00 AM", activity: "Nageshwar Temple Darshan" },
      { time: "11:00 AM", activity: "Beyt Dwarka Ferry" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Dwarka Morning Darshan → Dwarka Station → Return Train to Delhi",
    subtitle: "Morning Aarti at Dwarkadhish, shopping for local brassware & return sleeper train to Delhi",
    overview: "Attend early morning Mangla Aarti at Dwarkadhish Temple. Explore local handicraft markets around temple lane for brassware and bandhani dupattas. Board the afternoon return train (Dwarka - Uttaranchal Express / OKHA DEE Exp) from Dwarka station returning to New Delhi.",
    travel: "Dwarka Station → Jaipur → Delhi Station",
    travelMode: "Express Train (Sleeper)",
    distance: "1350 km",
    travelTime: "22 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.dwarkaToDelhiTrain + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Pleasant coastal morning, 22°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "10m",
    stay: "Overnight Express Train Sleeper Berth",
    food: "Gujarati snacks & train pantry dinner (₹300)",
    notes: "Train departs Dwarka station around 01:00 PM - 02:00 PM, arriving Delhi on Day 5 afternoon.",
    warnings: [
      "Board train on time at Dwarka Station."
    ],
    packing: ["Bandhani souvenirs", "Water bottle", "Train ticket"],
    images: [],
    mapLink: "https://maps.google.com/?q=Dwarka+Railway+Station",
    tips: ["Buy local Bandhani sarees/dupattas near Dwarkadhish market."],
    photography: ["Dwarka station departure"],
    highlights: ["Completion of Gujarat 2-Jyotirlinga Circuit"],
    meals: ["Pantry dinner"],
    activities: [
      { time: "06:30 AM", title: "Mangla Aarti", description: "Morning Aarti at Dwarkadhish" },
      { time: "01:00 PM", title: "Board Return Train", description: "Board train back to Delhi" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Mangla Aarti" },
      { time: "01:00 PM", activity: "Board train to Delhi" }
    ]
  }
];
