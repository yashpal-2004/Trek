export const itinerary = [
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Delhi → Rishikesh → Ukhimath → Ransi",
    subtitle: "Overnight travel from Delhi to roadhead village of Ransi via Rishikesh & Ukhimath",
    overview: "Depart late night from Delhi to Rishikesh. Board a morning bus or shared taxi from Rishikesh to Ukhimath. From Ukhimath, take another local taxi to reach the base village of Ransi (1,900m) by late afternoon. Rest at a village homestay and prepare for the trek.",
    travel: "Delhi → Rishikesh → Rudraprayag → Ukhimath → Ransi",
    travelMode: "AC Bus + Shared Taxi",
    distance: "450 km",
    travelTime: "12-14 Hours",
    estimatedCost: 1530,
    weather: "Pleasant, 18°C to 25°C",
    trekDistance: "0 km",
    highestAltitude: "1900m",
    stay: "Ransi Local Homestay (₹400/person shared)",
    food: "Breakfast on highway (₹150), lunch at Rudraprayag (₹200), dinner at Ransi homestay (₹150)",
    notes: "Start early from Rishikesh (by 06:00 AM) to ensure you reach Ransi before road blocks or sunset.",
    warnings: [
      "Long journey on winding mountain roads; carry motion sickness remedies if needed",
      "Keep cash handy as online payments are not reliable in Ukhimath/Ransi"
    ],
    packing: ["ID proofs", "Cash", "Light jacket", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Ransi+Uttarakhand",
    tips: [
      "Take an overnight train/bus to Rishikesh to secure early morning transit",
      "Visit the Rakeshwari Temple in Ransi in the evening"
    ],
    photography: [
      "Confluence views at Devprayag and Rudraprayag along the drive",
      "Traditional wooden-structured houses in Ransi village"
    ],
    highlights: ["Scenic drive along Alaknanda", "Panch Prayag confluences", "Ransi village heritage"],
    meals: ["Highway Breakfast", "Lunch at Rudraprayag", "Dinner at Ransi Homestay"],
    activities: [
      { time: "05:00 AM", title: "Rishikesh Departure", description: "Catch early morning shared taxi or bus bound for Ukhimath" },
      { time: "02:00 PM", title: "Reach Ukhimath", description: "Take a shared jeep/local transport towards Ransi village" },
      { time: "05:00 PM", title: "Arrive Ransi", description: "Check in to homestay, fresh up, and stroll around the quiet village" }
    ],
    schedule: [
      { time: "05:00 AM", activity: "Depart Rishikesh towards Ukhimath" },
      { time: "02:00 PM", activity: "Transfer to Ransi vehicle at Ukhimath" },
      { time: "05:00 PM", activity: "Arrive Ransi, check-in to local homestay" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Ransi → Bantoli → Madhyamaheshwar",
    subtitle: "Trek along the Madhyamaheshwar Ganga river through lush valleys",
    overview: "Wake up early and begin the 16 km trek from Ransi to Madhyamaheshwar (3,497m). The trail goes downhill initially to Gaundhar and then crosses the Madhyamaheshwar Ganga. From here, a steep, continuous ascent starts via Bantoli, Nanu, and Kun Chatti. Reach the beautiful meadows of Madhyamaheshwar by evening.",
    travel: "Ransi → Gaundhar → Bantoli → Nanu → Madhyamaheshwar",
    travelMode: "Trekking",
    distance: "16 km Trek",
    travelTime: "6-8 Hours",
    estimatedCost: 1030,
    weather: "Cool & Crisp, 10°C to 16°C",
    trekDistance: "16 km",
    highestAltitude: "3497m",
    stay: "Temple Dharamshala / Homestay (₹500/person shared)",
    food: "Breakfast at Ransi (₹120), lunch at Bantoli dhaba (₹180), dinner at Madmaheshwar (₹200)",
    notes: "Keep a steady pace. The stretch from Bantoli to Nanu is a very steep uphill climb.",
    warnings: [
      "Steady steep climb; keep hydrated and do not rush",
      "Temperatures drop significantly in the evening; keep warm layers accessible"
    ],
    packing: ["Rain poncho", "Warm layers/jacket", "Trekking poles", "Flashlight/Headlamp"],
    images: [],
    mapLink: "https://maps.google.com/?q=Madhyamaheshwar",
    tips: [
      "Hire a porter at Ransi if you have heavy bags to enjoy a comfortable trek",
      "Rest at Bantoli confluence (Madmaheshwar Ganga and Markanga Ganga)"
    ],
    photography: [
      "The confluence at Bantoli surrounded by deep green cliffs",
      "Stunning forest canopies and waterfalls along the trail"
    ],
    highlights: ["Bantoli river confluence", "Lush oak & rhododendron forests", "Madhyamaheshwar alpine meadows"],
    meals: ["Breakfast at Ransi", "Lunch at Bantoli", "Dinner at Madmaheshwar"],
    activities: [
      { time: "06:30 AM", title: "Begin Trek", description: "Start trekking from Ransi down to Gaundhar village" },
      { time: "10:30 AM", title: "Lunch at Bantoli", description: "Rest and eat at a trail-side dhaba in Bantoli" },
      { time: "04:30 PM", title: "Reach Madhyamaheshwar", description: "Arrive at the temple meadows, check-in, and view the evening temple Ardas" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Start 16 km trek from Ransi base" },
      { time: "10:30 AM", activity: "Lunch stop at Bantoli" },
      { time: "04:30 PM", activity: "Arrive at Madhyamaheshwar temple" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Budha Madhyamaheshwar & Exploration",
    subtitle: "Climb to Budha Madhyamaheshwar for panoramic views of Chaukhamba Peaks",
    overview: "Hike 2 km early in the morning to Budha Madhyamaheshwar (3,750m) for a majestic sunrise over the Chaukhamba, Kedarnath, and Neelkanth peaks. Spend the rest of the day exploring the serene meadows, relaxing near the sacred pool, and attending prayers at the ancient temple.",
    travel: "Madhyamaheshwar → Budha Madhyamaheshwar → Madhyamaheshwar",
    travelMode: "Trekking / Exploration",
    distance: "4 km Trek",
    travelTime: "2-3 Hours",
    estimatedCost: 730,
    weather: "Chilly, 5°C to 12°C",
    trekDistance: "4 km",
    highestAltitude: "3750m",
    stay: "Temple Dharamshala / Homestay (₹500/person shared)",
    food: "Breakfast and lunch at Madmaheshwar (₹350), dinner at local dhaba (₹200)",
    notes: "Leave by 04:30 AM to catch the sunrise at the top. The reflections of Chaukhamba in the small lake are breathtaking.",
    warnings: [
      "Early morning temperatures are near freezing; wear windproof layers",
      "Stay on marked paths; alpine grass can be slippery in morning dew"
    ],
    packing: ["Woolen cap & gloves", "Windcheater / Down jacket", "Camera / Smartphone", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Budha+Madmaheshwar",
    tips: [
      "Carry a thermos with warm water or tea to the summit",
      "Spend peaceful hours meditating or resting in the meadows"
    ],
    photography: [
      "Golden hour reflection of Chaukhamba massif in the alpine tarn",
      "Close-up shots of the ancient stone temple and bells"
    ],
    highlights: ["Sunrise over Chaukhamba", "Reflection lake/pool", "Spiritual energy at the shrine"],
    meals: ["Breakfast at Temple Complex", "Lunch at Dharamshala", "Dinner at local dhaba"],
    activities: [
      { time: "04:30 AM", title: "Hike to Budha Madmaheshwar", description: "Steep 2 km walk up to the ridge for sunrise views" },
      { time: "07:30 AM", title: "Return to Temple", description: "Descend back for breakfast and morning temple darshan" },
      { time: "05:00 PM", title: "Evening Temple Prayer", description: "Attend the deep, peaceful evening rituals at the main temple" }
    ],
    schedule: [
      { time: "04:30 AM", activity: "Begin sunrise hike to Budha Madhyamaheshwar" },
      { time: "07:30 AM", activity: "Descend back to base temple" },
      { time: "05:00 PM", activity: "Attend evening temple rituals" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Madhyamaheshwar → Ransi",
    subtitle: "Complete descent back to Ransi base village",
    overview: "After morning prayers, begin the 16 km descent from Madhyamaheshwar back to Ransi village. The trail is mostly downhill, making the walk much faster and less tiring. Arrive in Ransi by afternoon, check into your homestay, and rest your legs.",
    travel: "Madhyamaheshwar → Nanu → Bantoli → Gaundhar → Ransi",
    travelMode: "Trekking",
    distance: "16 km Trek",
    travelTime: "5-6 Hours",
    estimatedCost: 930,
    weather: "Cool & Cloudy, 12°C to 18°C",
    trekDistance: "16 km",
    highestAltitude: "3497m",
    stay: "Ransi Local Homestay (₹400/person shared)",
    food: "Breakfast at Madmaheshwar (₹120), lunch at Gaundhar (₹180), dinner at Ransi homestay (₹150)",
    notes: "Watch your knees during the steep descent from Nanu to Bantoli. Walking poles help reduce impact.",
    warnings: [
      "Descent can place strain on knees; walk slowly and use trekking poles",
      "Do not run on steep stone steps"
    ],
    packing: ["Trekking poles", "Knee supports if needed", "Rain cover for bags"],
    images: [],
    mapLink: "https://maps.google.com/?q=Ransi+Uttarakhand",
    tips: [
      "Take small, frequent breaks instead of long rests to prevent muscles from stiffening",
      "Have a fresh glass of Rhododendron (Buransh) juice at Bantoli"
    ],
    photography: [
      "Valley mist rising from the gorge",
      "Local shepherds grazing sheep on the hillsides"
    ],
    highlights: ["Easy downhill forest walk", "Buransh juice stop", "Garhwali hospitality at Ransi"],
    meals: ["Breakfast at Madmaheshwar", "Lunch at Gaundhar Dhaba", "Dinner at Ransi Homestay"],
    activities: [
      { time: "07:30 AM", title: "Begin Descent", description: "Trek back down from the meadows towards Bantoli" },
      { time: "11:30 AM", title: "Lunch at Gaundhar", description: "Simple lunch near the river crossing" },
      { time: "03:00 PM", title: "Arrive Ransi", description: "Reach Ransi homestay, relax, and share stories with locals" }
    ],
    schedule: [
      { time: "07:30 AM", activity: "Start descent from Madhyamaheshwar" },
      { time: "11:30 AM", activity: "Lunch halt at Gaundhar village" },
      { time: "03:00 PM", activity: "Arrive at Ransi base village homestay" }
    ]
  },
  {
    id: 5,
    day: 5,
    date: "Day 5",
    weekday: "Day 5",
    title: "Ransi → Ukhimath → Rishikesh → Delhi",
    subtitle: "Road transit back to Rishikesh and overnight bus to Delhi",
    overview: "Board a morning shared jeep from Ransi to Ukhimath. Catch a bus or taxi from Ukhimath back to Rishikesh/Haridwar. In the evening, board your overnight sleeper bus or train to complete your journey back to Delhi.",
    travel: "Ransi → Ukhimath → Srinagar → Rishikesh → Delhi",
    travelMode: "Shared Taxi + Overnight Bus / Train",
    distance: "450 km",
    travelTime: "12-14 Hours",
    estimatedCost: 1630,
    weather: "Pleasant to Warm, 22°C to 30°C",
    trekDistance: "0 km",
    highestAltitude: "1900m",
    stay: "Overnight travel / Return to Delhi",
    food: "Breakfast at Ukhimath (₹120), lunch at Srinagar (₹200), dinner at Rishikesh (₹180)",
    notes: "Leave Ransi early (by 07:00 AM) to ensure you catch the connecting buses from Ukhimath.",
    warnings: [
      "Traffic blocks or landslide repairs can cause delays; book late-evening transport from Rishikesh"
    ],
    packing: ["Powerbank", "Travel pillow", "Hand sanitizer", "Comfortable clothes for journey"],
    images: [],
    mapLink: "https://maps.google.com/?q=Delhi",
    tips: [
      "Buy local honey or mountain pulses from Ukhimath market as souvenirs",
      "Have dinner near Laxman Jhula if you have a buffer before the Delhi bus"
    ],
    photography: [
      "Mandakini river views along the road from Ukhimath",
      "Vibrant Rishikesh ghats at sunset"
    ],
    highlights: ["Scenic Mandakini river drive", "Market stop at Ukhimath", "Rishikesh evening vibes"],
    meals: ["Breakfast at Ukhimath", "Lunch at Srinagar Garhwal", "Dinner at Rishikesh"],
    activities: [
      { time: "07:00 AM", title: "Depart Ransi", description: "Board shared jeep to Ukhimath" },
      { time: "09:30 AM", title: "Ukhimath to Rishikesh", description: "Board direct taxi or bus from Ukhimath bus stand" },
      { time: "06:00 PM", title: "Reach Rishikesh", description: "Evening stroll, dinner, and board overnight bus to Delhi" }
    ],
    schedule: [
      { time: "07:00 AM", activity: "Depart Ransi by shared jeep to Ukhimath" },
      { time: "09:30 AM", activity: "Board bus/taxi from Ukhimath to Rishikesh" },
      { time: "09:30 PM", activity: "Board overnight bus from Rishikesh to Delhi" }
    ]
  }
];
