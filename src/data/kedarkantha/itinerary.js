export const itinerary = [
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Delhi → Dehradun → Sankri Drive",
    subtitle: "Overnight travel from Delhi followed by scenic Yamuna valley drive to Sankri",
    overview: "Board overnight bus/train from Delhi to Dehradun. From Dehradun railway station, take a morning shared jeep or local bus to Sankri (190 km / 1,950m) via Mussoorie, Purola, and Mori. Pass along the Tons river and check into a homestay/hostel in Sankri.",
    travel: "Delhi → Dehradun → Purola → Mori → Sankri",
    travelMode: "AC Train + Shared Jeep",
    distance: "430 km",
    travelTime: "12-14 Hours",
    estimatedCost: 1600,
    weather: "Cold, 5°C to 12°C",
    trekDistance: "0 km",
    highestAltitude: "1950m",
    stay: "Sankri Homestay / Zostel (₹400/person shared)",
    food: "Breakfast on highway (₹100), lunch at Purola (₹150), dinner at Sankri (₹150)",
    notes: "Sankri has limited network (BSNL/Jio works in spots). Finish calls here.",
    warnings: [
      "Winding roads in Tons valley; carry motion sickness meds"
    ],
    packing: ["Cash (limited ATMs)", "Thermal layers", "ID Proofs"],
    images: [],
    mapLink: "https://maps.google.com/?q=Sankri+Uttarakhand",
    tips: [
      "Shared jeeps leave Dehradun station by 06:00 AM. Try to arrive early.",
      "Check out local apple orchards in Sankri if visiting in late harvest months."
    ],
    photography: [
      "Yamuna & Tons river confluences",
      "Traditional wooden houses of Mori village"
    ],
    highlights: ["Scenic pine forest drive", "Charming base camp vibes"],
    meals: ["Highway Breakfast", "Lunch at Purola", "Dinner at Sankri homestay"],
    activities: [
      { time: "06:00 AM", title: "Depart Dehradun", description: "Board shared jeep to Sankri" },
      { time: "01:00 PM", title: "Mori Checkpost", description: "Clear forest entry permit checks at Mori gate" },
      { time: "04:00 PM", title: "Arrive Sankri", description: "Check in, settle down, and explore local village lanes" }
    ],
    schedule: [
      { time: "06:00 AM", activity: "Board shared jeep from Dehradun station" },
      { time: "01:00 PM", activity: "Permit verification at entry checkpost" },
      { time: "04:00 PM", activity: "Reach Sankri base village and check-in" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Sankri → Juda Ka Talab",
    subtitle: "Trek through dense pine forests to the iconic frozen high alpine pond",
    overview: "Begin the 4 km climb from Sankri trailhead. The route leads through tall pine forest paths, crossing small wooden bridges and snow patches. Arrive at Juda Ka Talab (2,700m), a gorgeous high-altitude lake that remains frozen during January. Check into your pre-rented campsite and rest.",
    travel: "Sankri → Sor Village → Juda Ka Talab Camp",
    travelMode: "Trekking",
    distance: "4 km Trek",
    travelTime: "4-5 Hours",
    estimatedCost: 1350,
    weather: "Freezing, -3°C to 8°C",
    trekDistance: "4 km",
    highestAltitude: "2700m",
    stay: "Juda Ka Talab Campsite (₹1000/person shared with meals)",
    food: "Breakfast in Sankri (₹80), lunch at trail dhabas (₹120), dinner at campsite (included)",
    notes: "Trail can be slippery due to hard snow. Fit microspikes on boots if needed.",
    warnings: [
      "Avoid walking directly over thin ice patches on the frozen pond surface."
    ],
    packing: ["Trekking poles", "Waterproof trekking shoes", "Microspikes", "Warm flask"],
    images: [],
    mapLink: "https://maps.google.com/?q=Juda+Ka+Talab",
    tips: [
      "Carry enough dry fruits/chocolates to keep energy high during the climb.",
      "Stay hydrated even when cold to prevent altitude sickness."
    ],
    photography: [
      "Frozen Juda Ka Talab lake reflecting winter pines",
      "Golden hour sunrays passing through tall forest canopy"
    ],
    highlights: ["Scenic pine forest trail", "Beautiful frozen mountain pond"],
    meals: ["Breakfast at Sankri", "Lunch at Trail stop", "Campsite Dinner"],
    activities: [
      { time: "08:30 AM", title: "Trail briefing", description: "Collect microspikes and verify gear packing" },
      { time: "09:00 AM", title: "Begin Climb", description: "Start the 4 km trek from Sankri gate" },
      { time: "02:00 PM", title: "Arrive Juda Lake", description: "Reach the frozen lake, settle in tents, and explore" }
    ],
    schedule: [
      { time: "09:00 AM", activity: "Start trekking from Sankri trailhead" },
      { time: "11:30 AM", activity: "Rest stop at midway tea point" },
      { time: "02:00 PM", activity: "Reach Juda Ka Talab campsite" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Juda Ka Talab → Kedarkantha Summit → Hargaon",
    subtitle: "Climb to Kedarkantha peak (3,810m) followed by descent to Hargaon meadows",
    overview: "Wake up by 02:30 AM for a summit push. Climb through snow trails to Kedarkantha Base Camp (3,400m), then ascend the steep ridge to Kedarkantha Summit (3,810m) by sunrise. Enjoy 360-degree views of Har Ki Dun, Swargarohini, and Bandarpoonch. Descend via Hargaon (2,600m) and rest at camp.",
    travel: "Juda Ka Talab → Base Camp → Kedarkantha Summit (3,810m) → Hargaon Camp",
    travelMode: "Trekking",
    distance: "8 km Trek",
    travelTime: "7-9 Hours",
    estimatedCost: 1350,
    weather: "Extreme Cold & Windy, -8°C to 4°C",
    trekDistance: "8 km",
    highestAltitude: "3810m",
    stay: "Hargaon Camp (₹1000/person shared with meals)",
    food: "Light breakfast at camp (included), lunch at summit base (₹150), dinner at Hargaon (included)",
    notes: "Dress in multiple layers. Temperatures drop below -8°C on the summit ridge.",
    warnings: [
      "Extreme wind chill at summit; keep head, neck and hands covered",
      "Walk very carefully on icy sections using microspikes"
    ],
    packing: ["Down jacket", "Windproof outer shell", "Balaclava", "Gaiters", "Headlamp"],
    images: [],
    mapLink: "https://maps.google.com/?q=Kedarkantha+Summit",
    tips: [
      "Start the summit climb by 03:30 AM to catch the magical golden sunrise from the peak.",
      "Carry hot water in your thermos flask; regular cold water will freeze."
    ],
    photography: [
      "Stunning 360-degree panorama of Garhwal peaks at sunrise",
      "The stone shrine of Lord Shiva at the summit peak"
    ],
    highlights: ["Kedarkantha 3,810m Summit", "Breathtaking Chaukhamba & Swargarohini views"],
    meals: ["Pre-summit hot tea", "Mid-trek Lunch pack", "Hargaon Camp Dinner"],
    activities: [
      { time: "03:00 AM", title: "Summit Push", description: "Leave campsite with headlamps on" },
      { time: "07:00 AM", title: "Summit Peak", description: "Reach summit, witness sunrise, and explore peak shrine" },
      { time: "10:30 AM", title: "Descent", description: "Begin return trek down towards Hargaon meadows" }
    ],
    schedule: [
      { time: "03:00 AM", activity: "Depart Juda Ka Talab for summit push" },
      { time: "07:00 AM", activity: "Reach summit peak and enjoy sunrise" },
      { time: "02:00 PM", activity: "Arrive at Hargaon campsite" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Hargaon → Sankri → Dehradun Drive",
    subtitle: "Descend to Sankri base and drive back to Dehradun",
    overview: "Trek back down from Hargaon to Sankri (6 km) through pine forest slopes. Reach Sankri by mid-day, return rented gear, and board a shared jeep or bus back to Dehradun. Check into a hotel or rest near the station.",
    travel: "Hargaon Camp → Sankri → Mori → Dehradun",
    travelMode: "Trekking + Shared Jeep",
    distance: "6 km Trek + 190 km Drive",
    travelTime: "7-8 Hours",
    estimatedCost: 1250,
    weather: "Pleasant, 12°C to 18°C",
    trekDistance: "6 km",
    highestAltitude: "2600m",
    stay: "Dehradun Hotel / Lodge (₹400/person shared)",
    food: "Breakfast at camp (included), lunch at Sankri (₹150), dinner at Dehradun (₹150)",
    notes: "Confirm jeep departure times from Sankri beforehand to avoid missing connections.",
    warnings: [
      "Descent can place strain on knees; use trekking poles to offset impact"
    ],
    packing: ["Trekking poles", "Fresh dry socks", "Travel clothes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Dehradun+Railway+Station",
    tips: [
      "Rent knee caps in Sankri if you have weak knees.",
      "Get a hot ginger lemon honey tea at a cafe in Sankri before boarding your jeep."
    ],
    photography: [
      "Beautiful pine forests of Hargaon",
      "Scenic Tons river valley sunset shots"
    ],
    highlights: ["Smooth forest descend", "Yamuna valley drive return"],
    meals: ["Breakfast at camp", "Lunch at Sankri", "Dinner in Dehradun"],
    activities: [
      { time: "08:00 AM", title: "Descend", description: "Trek downhill to Sankri base" },
      { time: "11:30 AM", title: "Arrive Sankri", description: "Return rental gear, pack luggage, and have lunch" },
      { time: "01:00 PM", title: "Drive to Dehradun", description: "Board returning jeep towards Dehradun station" }
    ],
    schedule: [
      { time: "08:00 AM", activity: "Start downhill trek to Sankri base" },
      { time: "01:00 PM", activity: "Board returning vehicle to Dehradun" },
      { time: "08:00 PM", activity: "Arrive in Dehradun; check-in at lodge" }
    ]
  },
  {
    id: 5,
    day: 5,
    date: "Day 5",
    weekday: "Day 5",
    title: "Dehradun → Rishikesh → Delhi Return",
    subtitle: "Explore local spots and catch returning bus/train to Delhi",
    overview: "Explore Dehradun or take a short detour to Rishikesh for cafe-hopping and Ganga river view. Board your returning bus or Shatabdi Express train back to Delhi, concluding your winter yatra.",
    travel: "Dehradun / Rishikesh → Delhi",
    travelMode: "AC Bus / Train",
    distance: "240 km",
    travelTime: "5-6 Hours",
    estimatedCost: 600,
    weather: "Warm, 18°C to 25°C",
    trekDistance: "0 km",
    highestAltitude: "340m",
    stay: "Return to Delhi / End of Tour",
    food: "Breakfast at Dehradun (₹100), lunch at Rishikesh (₹200), dinner in Delhi (₹150)",
    notes: "Ensure return tickets from Dehradun/Haridwar are pre-booked.",
    warnings: [
      "Weekend traffic near Haridwar might cause minor delays"
    ],
    packing: ["Luggage", "Souvenirs"],
    images: [],
    mapLink: "https://maps.google.com/?q=Delhi",
    tips: [
      "Visit Robber's Cave in Dehradun if you have a few hours to spare.",
      "Get local sweets like Bal Mithai from Dehradun markets."
    ],
    photography: [
      "Scenic Dehradun city views",
      "Robber's Cave rock formations"
    ],
    highlights: ["Dehradun morning walk", "Comfortable train ride back home"],
    meals: ["Breakfast in Dehradun", "Lunch in Rishikesh", "Dinner in Delhi"],
    activities: [
      { time: "09:00 AM", title: "Local sights", description: "Explore local cafes and shops in Dehradun" },
      { time: "02:00 PM", title: "Depart", description: "Board Volvo bus / train back to Delhi" },
      { time: "08:00 PM", title: "Arrive Delhi", description: "Conclude your winter expedition" }
    ],
    schedule: [
      { time: "09:00 AM", activity: "Explore local spots in Dehradun/Rishikesh" },
      { time: "02:00 PM", activity: "Board train/bus back to Delhi" },
      { time: "08:00 PM", activity: "Arrive in Delhi; end of journey" }
    ]
  }
];
