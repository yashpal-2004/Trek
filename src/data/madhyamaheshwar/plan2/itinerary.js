export const itinerary = [
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Delhi → Rishikesh → Sonprayag → Gaurikund",
    subtitle: "Long drive along Alaknanda and Mandakini rivers to Kedarnath base village",
    overview: "Depart late night from Delhi to Rishikesh. Board a shared taxi or direct bus from Rishikesh to Sonprayag. Transfer to a local shuttle jeep to reach Gaurikund (1,982m) base camp. Rest and overnight at a local lodge.",
    travel: "Delhi → Rishikesh → Rudraprayag → Sonprayag → Gaurikund",
    travelMode: "AC Bus + Shared Taxi + Shuttle",
    distance: "450 km",
    travelTime: "13-14 Hours",
    estimatedCost: 1800,
    weather: "Pleasant to Cool, 15°C to 22°C",
    trekDistance: "0 km",
    highestAltitude: "1982m",
    stay: "Gaurikund Local Lodge (₹400/person shared)",
    food: "Breakfast at Rishikesh (₹150), lunch at Rudraprayag (₹200), dinner at Gaurikund (₹150)",
    notes: "Rest early to prepare for the long Kedarnath ascent the next day.",
    warnings: [
      "Winding hill roads; carry motion sickness remedies",
      "Registration verification occurs at Sonprayag; keep biometric slips handy"
    ],
    packing: ["Biometric slip", "Cash", "Waterproof jacket", "Comfortable walking shoes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Gaurikund+Uttarakhand",
    tips: [
      "Start from Rishikesh by 05:30 AM to reach Gaurikund comfortably before sunset.",
      "Soak your feet in Gaurikund hot springs to relax before the yatra."
    ],
    photography: [
      "Confluence of Mandakini & Alaknanda at Rudraprayag",
      "Gaurikund village surrounded by cliffs"
    ],
    highlights: ["Scenic Mandakini river drive", "Gaurikund base camp vibes"],
    meals: ["Highway Breakfast", "Lunch at Rudraprayag", "Dinner at Gaurikund Lodge"],
    activities: [
      { time: "05:00 AM", title: "Depart Rishikesh", description: "Board shared vehicle towards Sonprayag" },
      { time: "03:30 PM", title: "Sonprayag Verification", description: "Clear registration slips at Sonprayag checkpost" },
      { time: "04:30 PM", title: "Jeep to Gaurikund", description: "Take the 5 km shuttle jeep to Gaurikund roadhead" }
    ],
    schedule: [
      { time: "05:00 AM", activity: "Board bus/taxi from Rishikesh to Sonprayag" },
      { time: "03:30 PM", activity: "Registration check at Sonprayag" },
      { time: "04:30 PM", activity: "Shuttle jeep to Gaurikund base" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Gaurikund → Kedarnath",
    subtitle: "Steep 16 km climb to the sacred Kedarnath Temple",
    overview: "Start trekking by 05:00 AM from Gaurikund on a well-paved uphill stone trail along the Mandakini river. Pass through Jungle Chatti, Bheembali, and Lincholi. Ascend to the Kedarnath Valley (3,583m) by afternoon. Visit the temple for evening Ardas and view the stunning snow-capped peaks.",
    travel: "Gaurikund → Jungle Chatti → Bheembali → Lincholi → Kedarnath",
    travelMode: "Trekking",
    distance: "16 km Trek",
    travelTime: "7-9 Hours",
    estimatedCost: 1350,
    weather: "Cold, 5°C to 12°C",
    trekDistance: "16 km",
    highestAltitude: "3583m",
    stay: "GMVN Tent / Local Dharamshala (₹600/person shared)",
    food: "Breakfast at Bheembali (₹150), lunch at Lincholi dhaba (₹200), dinner at Kedarnath (₹200)",
    notes: "The climb is strenuous. Pace yourself and keep hydrated.",
    warnings: [
      "Very high altitude; walk slowly to prevent AMS (Altitude Sickness)",
      "Carry rain poncho; weather at Kedarnath can turn instantly"
    ],
    packing: ["Thermal layers", "Rain poncho", "Warm cap & gloves", "Diamox / AMS tablets"],
    images: [],
    mapLink: "https://maps.google.com/?q=Kedarnath+Temple",
    tips: [
      "Begin trek before 05:30 AM to beat the horse-traffic congestion on the trail.",
      "Attend the evening Aarti at Kedarnath temple — it is highly spiritual."
    ],
    photography: [
      "Stunning views of Mandakini valley waterfalls",
      "Kedarnath Temple at twilight backdropped by snow peaks"
    ],
    highlights: ["Holy Kedarnath Shrine", "Breathtaking peak views", "Challenging stone trail ascent"],
    meals: ["Breakfast at Bheembali", "Lunch at Lincholi", "Dinner at Kedarnath"],
    activities: [
      { time: "05:00 AM", title: "Begin Trek", description: "Start the 16 km ascent from Gaurikund" },
      { time: "11:30 AM", title: "Lincholi Halt", description: "Short rest and lunch at Lincholi dhaba" },
      { time: "03:30 PM", title: "Arrive Kedarnath", description: "Reach the temple valley, check-in, rest and dress in warm layers" }
    ],
    schedule: [
      { time: "05:00 AM", activity: "Start 16 km steep trek from Gaurikund" },
      { time: "11:30 AM", activity: "Lunch stop at Lincholi checkpoint" },
      { time: "03:30 PM", activity: "Reach Kedarnath temple valley" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Kedarnath → Gaurikund → Guptkashi / Ukhimath",
    subtitle: "Descend back to Gaurikund and travel to Ukhimath town",
    overview: "Attend early morning temple darshan. Begin the 16 km descent from Kedarnath back to Gaurikund. Upon reaching Gaurikund, take a jeep to Sonprayag and then drive to Guptkashi or Ukhimath (1,311m) town. Check into a hotel, rest, and recover.",
    travel: "Kedarnath → Gaurikund → Sonprayag → Guptkashi / Ukhimath",
    travelMode: "Trekking + Shared Jeep / Taxi",
    distance: "16 km Trek + 35 km Drive",
    travelTime: "6-7 Hours",
    estimatedCost: 1200,
    weather: "Pleasant, 16°C to 24°C",
    trekDistance: "16 km",
    highestAltitude: "3583m",
    stay: "Ukhimath Hotel / Lodge (₹400/person shared)",
    food: "Breakfast at Kedarnath (₹120), lunch at Gaurikund (₹180), dinner at Ukhimath (₹150)",
    notes: "Descent places strain on knees. Wear knee caps if needed and walk steadily.",
    warnings: [
      "Steep descend; watch your steps to prevent knee strain or ankle twists"
    ],
    packing: ["Trekking poles", "Water bottle", "Dry clothes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Ukhimath",
    tips: [
      "Rent trekking poles at Gaurikund if you don't have them; they are vital during descent.",
      "Check out Omkareshwar Temple in Ukhimath in the evening."
    ],
    photography: [
      "Clear morning shots of Kedarnath summit",
      "Scenic valleys of Guptkashi along Mandakini river"
    ],
    highlights: ["Smooth descent trail", "Ukhimath hill town comfort"],
    meals: ["Breakfast at Kedarnath", "Lunch at Gaurikund", "Dinner at Ukhimath"],
    activities: [
      { time: "07:00 AM", title: "Descend", description: "Trek back down from Kedarnath to Gaurikund base" },
      { time: "01:30 PM", title: "Sonprayag Transfer", description: "Jeep to Sonprayag and catch connecting taxi to Ukhimath" },
      { time: "04:30 PM", title: "Arrive Ukhimath", description: "Check in to hotel, fresh up, and relax" }
    ],
    schedule: [
      { time: "07:00 AM", activity: "Start 16 km descent to Gaurikund" },
      { time: "01:30 PM", activity: "Local jeeps to Sonprayag and taxi to Ukhimath" },
      { time: "04:30 PM", activity: "Arrive at Ukhimath hotel" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Ukhimath → Ransi → Madhyamaheshwar",
    subtitle: "Drive to Ransi roadhead and trek to Madhyamaheshwar base",
    overview: "Take a short morning drive from Ukhimath to Ransi village (20 km). Start your second major climb: the 16 km trek from Ransi to Madhyamaheshwar (3,497m). Climb along the Madmaheshwar Ganga river through dense forests via Bantoli. Reach the temple meadows by evening.",
    travel: "Ukhimath → Ransi → Gaundhar → Bantoli → Madhyamaheshwar",
    travelMode: "Shared Taxi + Trekking",
    distance: "20 km Drive + 16 km Trek",
    travelTime: "7-8 Hours",
    estimatedCost: 1100,
    weather: "Cool, 10°C to 16°C",
    trekDistance: "16 km",
    highestAltitude: "3497m",
    stay: "Temple Dharamshala / Homestay (₹500/person shared)",
    food: "Breakfast at Ransi (₹120), lunch at Bantoli dhaba (₹180), dinner at Madmaheshwar (₹200)",
    notes: "The climb from Bantoli to Nanu is extremely steep. Pace yourself.",
    warnings: [
      "Strenuous climb following Kedarnath yatra; keep a steady pace",
      "Network coverage is absent in Madmaheshwar; make important calls from Ukhimath"
    ],
    packing: ["Powerbank", "Rain poncho", "Warm jacket", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Madhyamaheshwar",
    tips: [
      "Carry rhododendron juice at Bantoli for instant energy boost.",
      "Stay close to the main temple complex for evening Ardas."
    ],
    photography: [
      "River confluence at Bantoli",
      "Sheer green cliffs on Madmaheshwar valley"
    ],
    highlights: ["Beautiful Bantoli confluence", "Quiet alpine forest trails", "Spiritual temple meadows"],
    meals: ["Breakfast at Ransi", "Lunch at Bantoli", "Dinner at Madmaheshwar"],
    activities: [
      { time: "07:00 AM", title: "Drive to Ransi", description: "Board local shared jeep to Ransi trailhead" },
      { time: "08:30 AM", title: "Begin Trek", description: "Start 16 km trek to Madmaheshwar" },
      { time: "04:30 PM", title: "Reach Temple", description: "Arrive at temple meadows, check-in, and attend evening rituals" }
    ],
    schedule: [
      { time: "07:00 AM", activity: "Drive to Ransi village base" },
      { time: "08:30 AM", activity: "Start 16 km trek to Madhyamaheshwar" },
      { time: "04:30 PM", activity: "Arrive at Madhyamaheshwar temple" }
    ]
  },
  {
    id: 5,
    day: 5,
    date: "Day 5",
    weekday: "Day 5",
    title: "Budha Madhyamaheshwar Peak & Exploration",
    subtitle: "Climb to Budha Madhyamaheshwar for Chaukhamba sunrise reflections",
    overview: "Ascend 2 km early in the morning to Budha Madhyamaheshwar ridge (3,750m) for sunrise. Watch the golden glow over the Chaukhamba massif reflected in a small tarn. Spend the rest of the day resting, meditating, and exploring the temple complex.",
    travel: "Madhyamaheshwar → Budha Madmaheshwar → Madhyamaheshwar",
    travelMode: "Trekking",
    distance: "4 km Trek",
    travelTime: "2 Hours",
    estimatedCost: 650,
    weather: "Cold & Windy, 4°C to 12°C",
    trekDistance: "4 km",
    highestAltitude: "3750m",
    stay: "Temple Dharamshala / Homestay (₹500/person shared)",
    food: "Breakfast at temple dhabas (₹100), lunch (₹150), dinner (₹150)",
    notes: "Leave by 04:30 AM to reach the summit ridge before sunrise.",
    warnings: [
      "Summit ridge is highly windy and cold in morning hours; wear windproof layers"
    ],
    packing: ["Woolen cap & gloves", "Windproof jacket", "Camera"],
    images: [],
    mapLink: "https://maps.google.com/?q=Budha+Madmaheshwar",
    tips: [
      "Carry hot tea in a thermos flask to keep warm at the summit.",
      "Explore the meadow trails in the afternoon."
    ],
    photography: [
      "Stunning reflection of Chaukhamba peaks in the mountain pool",
      "Temple architecture shots"
    ],
    highlights: ["Majestic Chaukhamba Sunrise", "Alpine reflection tarn", "Tranquil meditation hours"],
    meals: ["Breakfast at Temple Complex", "Lunch at Dharamshala", "Dinner at local dhaba"],
    activities: [
      { time: "04:30 AM", title: "Sunrise Climb", description: "Steep hike to Budha Madmaheshwar peak" },
      { time: "08:00 AM", title: "Descend to Temple", description: "Breakfast, rest, and attend morning temple darshan" },
      { time: "05:00 PM", title: "Evening Prayer", description: "Attend the deep, peaceful evening rituals at the main temple" }
    ],
    schedule: [
      { time: "04:30 AM", activity: "Sunrise hike to Budha Madhyamaheshwar" },
      { time: "08:00 AM", activity: "Return to base temple" },
      { time: "05:00 PM", activity: "Attend evening temple rituals" }
    ]
  },
  {
    id: 6,
    day: 6,
    date: "Day 6",
    weekday: "Day 6",
    title: "Madhyamaheshwar → Ransi",
    subtitle: "Trek back down to base village of Ransi",
    overview: "After morning temple prayers, begin the 16 km descent back to Ransi base village. The trail is mostly downhill, making the journey much faster. Reach Ransi by afternoon, check into a homestay, and rest.",
    travel: "Madhyamaheshwar → Bantoli → Gaundhar → Ransi",
    travelMode: "Trekking",
    distance: "16 km Trek",
    travelTime: "5 Hours",
    estimatedCost: 800,
    weather: "Cool, 12°C to 18°C",
    trekDistance: "16 km",
    highestAltitude: "3497m",
    stay: "Ransi Homestay (₹400/person shared)",
    food: "Breakfast at temple (₹120), lunch at Gaundhar (₹180), dinner at Ransi homestay (₹150)",
    notes: "Descent is fast; walk slowly to protect your knees.",
    warnings: [
      "Steep descent from Nanu to Bantoli can strain leg muscles; walk carefully"
    ],
    packing: ["Trekking poles", "Knee brace", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Ransi+Uttarakhand",
    tips: [
      "Enjoy fresh Garhwali dinner served by homestay hosts.",
      "Visit local craftsmen in Ransi village."
    ],
    photography: [
      "Lush valley flora on descend",
      "Local village life scenes"
    ],
    highlights: ["Acclimatized forest descent", "Garhwali hospitality at base village"],
    meals: ["Breakfast at Madmaheshwar", "Lunch at Gaundhar", "Dinner at Ransi homestay"],
    activities: [
      { time: "07:30 AM", title: "Begin Descent", description: "Trek downhill towards Bantoli" },
      { time: "11:30 AM", title: "Lunch at Gaundhar", description: "Enjoy hot lunch at Gaundhar dhaba" },
      { time: "03:00 PM", title: "Arrive Ransi", description: "Reach Ransi village homestay, relax, and rest" }
    ],
    schedule: [
      { time: "07:30 AM", activity: "Start descent from Madhyamaheshwar" },
      { time: "11:30 AM", activity: "Lunch stop at Gaundhar village" },
      { time: "03:00 PM", activity: "Arrive at Ransi homestay" }
    ]
  },
  {
    id: 7,
    day: 7,
    date: "Day 7",
    weekday: "Day 7",
    title: "Ransi → Ukhimath → Rishikesh",
    subtitle: "Travel back to the spiritual hub of Rishikesh",
    overview: "Board a morning shared jeep from Ransi to Ukhimath. Catch a bus or private taxi from Ukhimath back to Rishikesh. Check into a local hostel or hotel and spend the evening exploring Rishikesh ghats.",
    travel: "Ransi → Ukhimath → Srinagar → Rishikesh",
    travelMode: "Shared Taxi / Bus",
    distance: "210 km",
    travelTime: "7-8 Hours",
    estimatedCost: 900,
    weather: "Pleasant, 20°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "1900m",
    stay: "Rishikesh Hotel / Hostel (₹400/person shared)",
    food: "Breakfast at Ukhimath (₹120), lunch at Srinagar (₹200), dinner at Rishikesh cafe (₹180)",
    notes: "Leave Ransi early to ensure you get taxi connections from Ukhimath.",
    warnings: [
      "Expect traffic blocks or landslide clearances on mountain highways"
    ],
    packing: ["Chargers", "Fresh set of clothes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Rishikesh",
    tips: [
      "Enjoy evening cafe hopping in Rishikesh near Laxman Jhula.",
      "Attend the evening Ganga Aarti if time permits."
    ],
    photography: [
      "Scenic highway shots",
      "Rishikesh suspension bridges at night"
    ],
    highlights: ["Scenic mountain drive", "Rishikesh evening vibe"],
    meals: ["Breakfast at Ukhimath", "Lunch at Srinagar", "Dinner at Rishikesh Cafe"],
    activities: [
      { time: "07:00 AM", title: "Depart Ransi", description: "Board shared jeep to Ukhimath" },
      { time: "09:30 AM", title: "Ukhimath to Rishikesh", description: "Take the bus or taxi from Ukhimath" },
      { time: "05:30 PM", title: "Arrive Rishikesh", description: "Check in, walk around market, and relax" }
    ],
    schedule: [
      { time: "07:00 AM", activity: "Depart Ransi by shared jeep to Ukhimath" },
      { time: "09:30 AM", activity: "Board bus/taxi from Ukhimath to Rishikesh" },
      { time: "05:30 PM", activity: "Arrive at Rishikesh hostel" }
    ]
  },
  {
    id: 8,
    day: 8,
    date: "Day 8",
    weekday: "Day 8",
    title: "Rishikesh → Delhi",
    subtitle: "Sightseeing in Rishikesh and return to Delhi",
    overview: "Spend the morning exploring Rishikesh, trying out river rafting, or visiting yoga ashrams. In the afternoon, board your returning bus or train back to Delhi, concluding your combo yatra.",
    travel: "Rishikesh → Haridwar → Delhi",
    travelMode: "Volvo Bus / Train",
    distance: "240 km",
    travelTime: "5-6 Hours",
    estimatedCost: 600,
    weather: "Warm, 25°C to 32°C",
    trekDistance: "0 km",
    highestAltitude: "340m",
    stay: "Return to Delhi / End of Tour",
    food: "Breakfast at Rishikesh (₹120), lunch on highway (₹200), dinner at Delhi (₹150)",
    notes: "Pre-book your afternoon Shatabdi or Volvo bus from Rishikesh.",
    warnings: [
      "Weekend traffic near Haridwar can cause delays"
    ],
    packing: ["Luggage", "Souvenirs"],
    images: [],
    mapLink: "https://maps.google.com/?q=Delhi",
    tips: [
      "Visit the Beatles Ashram in Rishikesh for interesting photography.",
      "Get a hot ginger lemon honey tea at a rooftop café."
    ],
    photography: [
      "Beatles Ashram graffiti",
      "Ganga river rapids"
    ],
    highlights: ["Rishikesh morning exploration", "Scenic highway ride back home"],
    meals: ["Breakfast at Rishikesh", "Lunch on Highway", "Dinner in Delhi"],
    activities: [
      { time: "08:00 AM", title: "Rishikesh Walk", description: "Visit ashrams and temples in Rishikesh" },
      { time: "01:00 PM", title: "Depart Rishikesh", description: "Board Volvo bus / Shatabdi train to Delhi" },
      { time: "07:00 PM", title: "Arrive Delhi", description: "Conclude your combined yatra" }
    ],
    schedule: [
      { time: "08:00 AM", activity: "Explore Rishikesh ashrams & cafes" },
      { time: "01:00 PM", activity: "Board train/bus back to Delhi" },
      { time: "07:00 PM", activity: "Arrive in Delhi; end of journey" }
    ]
  }
];
