import { somnathNageshwarAmounts } from "./amounts";

export const itinerary = [
  {
    id: 0,
    day: 0,
    date: "Day 0",
    weekday: "Day 0",
    title: "Delhi / Sonipat → Unreserved General Class Train to Veraval",
    subtitle: "Board Unreserved General Coach (GS Ticket ₹320) on direct express train to Veraval",
    overview: "Reach station 2 hours prior to departure. Purchase an Unreserved UTS General Ticket (₹320) at the railway counter. Board the General Coach (GS) early to secure a seat for overnight travel through Rajasthan to Veraval (Somnath).",
    travel: "Delhi → Jaipur → Ahmedabad → Rajkot → Veraval Station",
    travelMode: "General Class Train (Unreserved)",
    distance: "1350 km",
    travelTime: "18-20 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.delhiToVeravalTrain,
    weather: "Pleasant evening breezes, 25°C",
    trekDistance: "0 km",
    highestAltitude: "220m",
    stay: "Overnight Train (General Coach / GS)",
    food: "Station food / Packed home meal (₹100)",
    notes: "Keep cash handy for UTS general unreserved ticket counter.",
    warnings: [
      "Board at starting station to secure seat in General Coach."
    ],
    packing: ["UTS General Ticket", "Water Bottle", "Power Bank"],
    images: [],
    mapLink: "https://maps.google.com/?q=Veraval+Railway+Station",
    tips: ["Buy unreserved general ticket at UTS app or counter 2 hrs before train departure."],
    photography: ["Boarding General Coach"],
    highlights: ["Ultra-budget solo journey to Saurashtra"],
    meals: ["Packed dinner"],
    activities: [
      { time: "07:00 PM", title: "Buy Unreserved UTS Ticket", description: "Get ₹320 GS ticket at counter" },
      { time: "08:30 PM", title: "Board General Coach", description: "Depart for Veraval" }
    ],
    schedule: [
      { time: "07:00 PM", activity: "Buy ticket at station counter" },
      { time: "08:30 PM", activity: "Board General Coach" }
    ]
  },
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Veraval Arrival → Somnath Trust Dharamshala & Temple Darshan",
    subtitle: "Arrive Veraval, transfer via ₹20 shared auto, stay at Trust Dharamshala & view Sound Show",
    overview: "Arrive at Veraval station at 02:30 PM. Hop onto a shared e-rickshaw (₹20) to Somnath. Check into Somnath Trust Dharamshala dorm / budget room (₹250). Visit Somnath Jyotirlinga Temple on the shore of Arabian Sea, attend Sandhya Aarti and enjoy the ₹30 Light & Sound show.",
    travel: "Veraval Station → Somnath Temple → Triveni Sangam",
    travelMode: "Shared E-Rickshaw & Walking",
    distance: "10 km Local",
    travelTime: "1 Hour",
    estimatedCost: somnathNageshwarAmounts.transportFares.veravalToSomnathAuto + somnathNageshwarAmounts.stays.somnath.hotelPrice + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Sea breeze, 26°C to 30°C",
    trekDistance: "0 km",
    highestAltitude: "10m",
    stay: "Somnath Trust Dharamshala / Dormitory (₹250)",
    food: "Somnath Trust Annakshetra Thali (₹100)",
    notes: "Deposit mobile & leather items in free lockers outside temple gate.",
    warnings: [
      "Carry valid Aadhaar card for Dharamshala check-in."
    ],
    packing: ["ID Proof", "Hand towel"],
    images: [],
    mapLink: "https://maps.google.com/?q=Somnath+Temple",
    tips: ["Eat wholesome ₹80–100 thali at Somnath Trust Annakshetra."],
    photography: ["Somnath Mandir ocean front"],
    highlights: ["1st Jyotirlinga Darshan", "Sound & Light show"],
    meals: ["Annakshetra Veg Thali"],
    activities: [
      { time: "02:30 PM", title: "Arrive Veraval", description: "Shared auto to Dharamshala" },
      { time: "05:00 PM", title: "Somnath Darshan", description: "Darshan at Somnath Temple" },
      { time: "07:30 PM", title: "Light Show", description: "Watch laser light show" }
    ],
    schedule: [
      { time: "02:30 PM", activity: "Arrive at Somnath Dharamshala" },
      { time: "05:00 PM", activity: "Somnath Temple Darshan" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Somnath → Porbandar → Dwarka Bus & Dwarkadhish Aarti",
    subtitle: "Morning Triveni Sangam, GSRTC ordinary bus to Dwarka, stay at Dharamshala & evening Aarti",
    overview: "Visit Triveni Sangam and Bhalka Tirth. Board a GSRTC ordinary state bus (₹220) to Dwarka via Porbandar. Check into budget Dharamshala near Gomti Ghat (₹250). Visit Dwarkadhish Jagat Mandir for evening Aarti.",
    travel: "Somnath → Porbandar → Dwarka Bus Stand",
    travelMode: "GSRTC State Bus",
    distance: "230 km",
    travelTime: "4.5 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.somnathToDwarkaBus + somnathNageshwarAmounts.stays.dwarka.hotelPrice + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Sunny coastal weather, 25°C to 32°C",
    trekDistance: "0 km",
    highestAltitude: "15m",
    stay: "Dwarka Dharamshala / Budget Room (₹250)",
    food: "Kathiyawadi Dhaba Thali (₹200)",
    notes: "Walk along Gomti Ghat for serene evening river views.",
    warnings: [
      "Keep small change ready for bus conductors."
    ],
    packing: ["Cap", "Water Bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Dwarkadhish+Temple",
    tips: ["GSRTC non-AC ordinary buses are fast, frequent, and super economical."],
    photography: ["Dwarkadhish Temple Dhwaja"],
    highlights: ["Bhalka Tirth & Dwarkadhish Jagat Mandir"],
    meals: ["Kathiyawadi Thali"],
    activities: [
      { time: "06:30 AM", title: "Bhalka Tirth", description: "Morning visit to Bhalka Tirth" },
      { time: "08:30 AM", title: "GSRTC Bus to Dwarka", description: "State bus journey via Porbandar" },
      { time: "05:00 PM", title: "Dwarkadhish Aarti", description: "Evening Aarti at temple" }
    ],
    schedule: [
      { time: "08:30 AM", activity: "GSRTC Bus to Dwarka" },
      { time: "05:00 PM", activity: "Dwarkadhish Mandir Aarti" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Dwarka → Nageshwar Jyotirlinga, Gopi Talav & Beyt Dwarka Island",
    subtitle: "Shared tempo to Nageshwar (85-ft Shiva statue), Gopi Talav & ferry boat to Beyt Dwarka",
    overview: "Take a shared auto/tempo to Nageshwar Jyotirlinga (₹80 round trip). Marvel at the 85-foot giant Lord Shiva statue. Proceed to Gopi Talav & Okha jetty. Take the shared ferry boat (₹20) to Beyt Dwarka island. Return to Dwarka Dharamshala.",
    travel: "Dwarka → Nageshwar → Gopi Talav → Okha → Beyt Dwarka → Dwarka",
    travelMode: "Shared Auto & Ferry Boat",
    distance: "80 km Circuit",
    travelTime: "5 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.dwarkaToNageshwarTaxi + somnathNageshwarAmounts.transportFares.dwarkaToBeytDwarkaBoat + somnathNageshwarAmounts.stays.dwarka.hotelPrice + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Breezy coastal weather, 24°C to 30°C",
    trekDistance: "0 km",
    highestAltitude: "10m",
    stay: "Dwarka Dharamshala / Budget Room (₹250)",
    food: "Gujarati Khichdi & Kadhi (₹200)",
    notes: "Shared ferry ticket from Okha to Beyt Dwarka is only ₹20 per passenger.",
    warnings: [
      "Board official government ferry boats at Okha jetty."
    ],
    packing: ["Hat", "Water Bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Nageshwar+Jyotirlinga",
    tips: ["Shared tempos depart continuously from Dwarka bus stand area."],
    photography: ["85-foot giant Shiva statue"],
    highlights: ["Nageshwar Jyotirlinga Darshan", "Ferry boat ride to Beyt Dwarka"],
    meals: ["Gujarati Khichdi"],
    activities: [
      { time: "08:00 AM", title: "Nageshwar Darshan", description: "Shared tempo to Nageshwar" },
      { time: "11:00 AM", title: "Beyt Dwarka Ferry", description: "Shared ferry boat from Okha" },
      { time: "04:00 PM", title: "Return to Dwarka", description: "Relax at Gomti Ghat" }
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
    title: "Dwarka Morning Darshan → Dwarka Station → Return General Train to Delhi",
    subtitle: "Morning Mangla Aarti, buy UTS unreserved train ticket & board General Coach return to Delhi",
    overview: "Attend early morning Mangla Aarti at Dwarkadhish Temple. Walk through local bazaars. Buy unreserved general ticket (₹330) at Dwarka station counter and board GS General Coach for return train journey back to Delhi.",
    travel: "Dwarka Station → Jaipur → Delhi Station",
    travelMode: "General Class Train (Unreserved)",
    distance: "1350 km",
    travelTime: "22 Hours",
    estimatedCost: somnathNageshwarAmounts.transportFares.dwarkaToDelhiTrain + somnathNageshwarAmounts.dailyFoodBudget,
    weather: "Pleasant morning, 22°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "10m",
    stay: "Overnight Train (General Coach / GS)",
    food: "Station food & pantry snacks (₹200)",
    notes: "Train reaches Delhi next afternoon.",
    warnings: [
      "Purchase UTS ticket before entering platform."
    ],
    packing: ["UTS Ticket", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Dwarka+Railway+Station",
    tips: ["UTS Mobile App lets you buy unreserved train tickets directly on your smartphone."],
    photography: ["Dwarka station general coach"],
    highlights: ["Completion of Solo Budget 2-Jyotirlinga Yatra"],
    meals: ["Pantry snacks"],
    activities: [
      { time: "06:30 AM", title: "Mangla Aarti", description: "Morning Aarti at Dwarkadhish" },
      { time: "01:00 PM", title: "Board Return Train", description: "Board General Coach back to Delhi" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Mangla Aarti" },
      { time: "01:00 PM", activity: "Board Return General Train" }
    ]
  }
];
