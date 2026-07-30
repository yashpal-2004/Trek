export const itinerary = [
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Delhi → Manali Arrival & Ride to Kaza",
    subtitle: "Overnight Volvo bus arrival in Manali, pick up Xpulse 200 and ride immediately over Atal Tunnel & Kunzum Pass (14,931 ft) to Kaza",
    overview: "Arrive in Manali around 08:00 AM. Skip hotel check-in. Head straight to the rental shop, pick up the Hero Xpulse 200, secure your luggage, and begin the high-altitude ride. Travel via the engineering marvel Atal Tunnel, cross the rugged riverbeds of Batal, conquer the steep loops of Kunzum Pass (4,551m), and enter Kaza by evening. Check into your Spitian homestay.",
    travel: "Manali → Atal Tunnel → Batal → Kunzum Pass → Kaza",
    travelMode: "Volvo Bus + Hero Xpulse 200",
    distance: "200 km Riding + 530 km Bus",
    travelTime: "9 Hours Riding + 12 Hours Bus",
    estimatedCost: 2050,
    weather: "Chilly at Kunzum Pass (2°C to 8°C), cold in Kaza (5°C to 12°C)",
    trekDistance: "0 km",
    highestAltitude: "4,551m (14,931 ft)",
    stay: "Kaza Local Homestay (₹850/person for 2-person group)",
    food: "Breakfast in Manali (₹150), lunch at Chhatru dhaba (₹200), dinner in Kaza homestay (₹250)",
    notes: "An early start from Manali by 09:30 AM is critical to cross water crossings (nala) before glaciers melt in the afternoon heat.",
    warnings: [
      "Rapid ascent: Take deep breaths and stay highly hydrated to avoid AMS",
      "Kunzum Pass descent is gravelly off-road; ride carefully"
    ],
    packing: ["Thermal layers", "Windproof riding jacket & gloves", "Waterproof boots", "Diamox / AMS tablets"],
    images: [],
    mapLink: "https://maps.google.com/?q=Kaza",
    tips: [
      "Fill fuel tank to maximum capacity in Manali; next pump is in Kaza",
      "Respect the mountain curves; do not speed on the dirt tracks"
    ],
    highlights: ["Atal Tunnel crossing", "Kunzum Pass high-point", "Spiti Valley entry", "Kaza Homestay stay"],
    meals: ["Breakfast at Manali", "Lunch at Chhatru", "Dinner at Kaza Homestay"],
    activities: [
      { time: "08:00 AM", title: "Arrive Manali", description: "Arrive at Volvo stand, transfer directly to bike shop" },
      { time: "09:30 AM", title: "Riding Starts", description: "Collect Xpulse 200, secure saddlebags, ride via Atal Tunnel" },
      { time: "01:30 PM", title: "Batal Halt", description: "Quick lunch at Batal Chacha-Chachi Dhaba" },
      { time: "03:30 PM", title: "Kunzum Pass", description: "Reach Kunzum Pass summit at 14,931 ft, pay respects at the temple" },
      { time: "07:30 PM", title: "Kaza Check-in", description: "Arrive Kaza, check into traditional homestay, dinner" }
    ],
    schedule: [
      { time: "08:00 AM", activity: "Arrive in Manali, pick up Hero Xpulse 200 bike immediately" },
      { time: "09:30 AM", activity: "Ride from Manali through Atal Tunnel and Batal" },
      { time: "03:30 PM", activity: "Cross Kunzum Pass summit (14,931 ft)" },
      { time: "07:30 PM", activity: "Arrive in Kaza, check-in to homestay, hot local dinner" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Kaza → Key Monastery → Chicham Bridge → Hikkim → Komic → Langza → Kaza",
    subtitle: "Exploration of the world's highest villages and ancient Buddhist sanctuaries",
    overview: "Set off at 08:30 AM on the Xpulse 200. Climb to Key Monastery, the iconic 11th-century fort-like monastery. Ride over the deep canyon across Chicham Bridge (Asia's highest suspension bridge). Ascend to Hikkim to post cards from the world's highest post office (14,567 ft). Ride to Komic, the highest village connected by motorable road (15,027 ft) for lunch. Visit the giant Buddha statue at Langza before returning to Kaza.",
    travel: "Kaza → Key → Chicham → Hikkim → Komic → Langza → Kaza",
    travelMode: "Hero Xpulse 200",
    distance: "80 km Riding",
    travelTime: "5 Hours Riding",
    estimatedCost: 1200,
    weather: "Sunny but windy and cold at Komic (4°C to 10°C)",
    trekDistance: "0 km",
    highestAltitude: "4,587m (15,050 ft)",
    stay: "Kaza Local Homestay (₹850/person for 2-person group)",
    food: "Breakfast in homestay (₹0), lunch in Komic (₹250), cafe dinner in Kaza (₹250)",
    notes: "Carry printed postcards with stamps already purchased to save time at Hikkim post office.",
    warnings: [
      "Avoid running or physical exertion at Komic due to thin air",
      "Keep headlight on in dusty patches"
    ],
    packing: ["Postcard addresses", "Sunscreen SPF 50+", "UV protection sunglasses"],
    images: [],
    mapLink: "https://maps.google.com/?q=Key+Monastery",
    tips: [
      "Try local Seabuckthorn juice at Key Monastery tea stall",
      "Buy fossils from local children in Langza (please don't dig them yourself)"
    ],
    highlights: ["Key Monastery murals", "Chicham Bridge gorge", "Hikkim Post Office", "Komic highest village", "Langza Buddha statue"],
    meals: ["Breakfast at Homestay", "Lunch at Komic", "Dinner at Kaza Cafe"],
    activities: [
      { time: "08:30 AM", title: "Key Monastery", description: "Explore the ancient assembly hall and library at Key" },
      { time: "11:00 AM", title: "Chicham Bridge", description: "Cross the massive suspension bridge over the 1000 ft gorge" },
      { time: "01:00 PM", title: "Hikkim & Komic", description: "Mail postcards at Hikkim, lunch at Komic restaurant" },
      { time: "04:00 PM", title: "Langza Buddha", description: "Photo halt at the giant golden Buddha overlooking snow peaks" },
      { time: "06:30 PM", title: "Kaza Market", description: "Evening stroll in Kaza local market, buy souvenirs" }
    ],
    schedule: [
      { time: "08:30 AM", activity: "Ride to Key Monastery and Chicham Bridge" },
      { time: "01:00 PM", activity: "Mail postcards at Hikkim and eat lunch at Komic" },
      { time: "04:00 PM", activity: "Visit giant Buddha Statue in Langza village" },
      { time: "06:30 PM", activity: "Return to Kaza guesthouse, evening walk in local market" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Kaza → Chandratal Lake → Manali → Board Bus to Delhi",
    subtitle: "Ride via Batal, detour to turquoise crescent Chandratal Lake, return Xpulse 200 in Manali, and board evening Volvo bus to Delhi",
    overview: "A massive riding day. Depart Kaza at 06:00 AM. Cross Kunzum Pass back to Batal. Take the bumpy 14 km off-road trail to Chandratal Lake. Take a short 1 km walk to witness the magical reflection of mountain peaks on the lake's turquoise water. Ride back through Batal, Chhatru, and Atal Tunnel, returning the Xpulse 200 in Manali by 06:30 PM. Board the overnight Volvo bus back to Delhi.",
    travel: "Kaza → Chandratal Lake → Batal → Atal Tunnel → Manali + Manali → Delhi (Overnight Bus)",
    travelMode: "Hero Xpulse 200 + Volvo Bus",
    distance: "230 km Riding + 530 km Bus",
    travelTime: "10 Hours Riding + 12 Hours Bus",
    estimatedCost: 3900,
    weather: "Crisp sun at Chandratal (5°C to 12°C), pleasant in Manali (18°C)",
    trekDistance: "2 km (Lake walk)",
    highestAltitude: "4,300m",
    stay: "Overnight Volvo Bus to Delhi",
    food: "Breakfast in Losar (₹150), lunch in Chhatru (₹200), dinner at highway dhaba (₹150)",
    notes: "Leave Kaza by 06:00 AM to reach Chandratal by 10:30 AM before afternoon winds pick up.",
    warnings: [
      "Chandratal road is a narrow dirt track; yield space to oncoming camper vehicles",
      "Do not swim or step inside Chandratal Lake water (sacred & freezing)"
    ],
    packing: ["Warm shawl / blanket for bus", "Power bank", "Travel neck pillow"],
    images: [],
    mapLink: "https://maps.google.com/?q=Chandratal+Lake",
    tips: [
      "Carry extra layer for the windy walk along Chandratal shore",
      "Clean your helmet visor before the dusty ride back through Atal Tunnel"
    ],
    highlights: ["Chandratal moon lake", "Lahaul off-roading", "Atal Tunnel return", "Return Xpulse 200", "Volvo departure"],
    meals: ["Breakfast at Losar", "Lunch at Chhatru", "Dinner at highway dhaba"],
    activities: [
      { time: "06:00 AM", title: "Depart Kaza", description: "Early morning departure on Xpulse 200 towards Losar" },
      { time: "10:30 AM", title: "Chandratal Lake Visit", description: "14 km dirt track detour from Batal to Chandratal, 1 km walk to lake" },
      { time: "02:00 PM", title: "Lunch at Chhatru", description: "Hot Maggi / Thukpa lunch break at Chhatru dhabas" },
      { time: "06:30 PM", title: "Return Xpulse 200", description: "Hand back bike at rental store in Manali, receive deposit" },
      { time: "07:30 PM", title: "Board Volvo Bus", description: "Board overnight Volvo AC bus from Manali to Delhi" }
    ],
    schedule: [
      { time: "06:00 AM", activity: "Depart Kaza early morning on Hero Xpulse 200" },
      { time: "10:30 AM", activity: "Visit Chandratal Lake and walk along lake shore" },
      { time: "02:00 PM", activity: "Lunch halt at Chhatru mountain dhaba" },
      { time: "06:30 PM", activity: "Arrive Manali, return Hero Xpulse 200, board overnight Volvo bus" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Arrival in Delhi",
    subtitle: "Early morning arrival at ISBT Kashmiri Gate, Delhi",
    overview: "Arrive at ISBT Kashmiri Gate / Majnu ka Tilla in Delhi around 07:30 AM. End of high-intensity Spiti Express tour.",
    travel: "Kullu → Mandi → Swarghat → Delhi",
    travelMode: "Volvo Bus",
    distance: "530 km",
    travelTime: "12 Hours (Overnight)",
    estimatedCost: 150,
    weather: "Delhi morning weather, 25°C to 34°C",
    trekDistance: "0 km",
    highestAltitude: "215m",
    stay: "Home / Hotel in Delhi",
    food: "Morning tea/breakfast in Delhi (₹150)",
    notes: "Trip concludes upon arrival in Delhi.",
    warnings: [],
    packing: [],
    images: [],
    mapLink: "https://maps.google.com/?q=ISBT+Kashmiri+Gate+Delhi",
    tips: ["Take Delhi Metro from Kashmiri Gate for easy onward connectivity"],
    photography: ["Final group photo at Kashmiri Gate bus terminal"],
    highlights: ["Arrival in Delhi", "End of trip"],
    meals: ["Morning tea in Delhi"],
    activities: [
      { time: "07:30 AM", title: "Arrival in Delhi", description: "Arrive at ISBT Kashmiri Gate, Delhi. Trip concludes." }
    ],
    schedule: [
      { time: "07:30 AM", activity: "Arrive in Delhi by Volvo AC bus. Trip concludes." }
    ]
  }
];
