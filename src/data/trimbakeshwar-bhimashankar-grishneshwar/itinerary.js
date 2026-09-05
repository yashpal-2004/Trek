import { maharashtraAmounts } from "./amounts";

export const itinerary = [
  {
    id: 0,
    day: 0,
    date: "Day 0",
    weekday: "Day 0",
    title: "Delhi / Sonipat → Board Overnight Train to Nashik",
    subtitle: "Board direct express train (Mangala Lakshadweep / Punjab Mail) from Hazrat Nizamuddin / New Delhi to Nashik Road",
    overview: "Report at Hazrat Nizamuddin (NZM) or New Delhi (NDLS) railway station by 03:00 PM. Board the direct Sleeper / 3AC express train departing towards Nashik Road. Enjoy the overnight journey crossing Madhya Pradesh into Northern Maharashtra.",
    travel: "Delhi (NZM/NDLS) → Gwalior → Bhopal → Nashik Road Station",
    travelMode: "Express Train (Sleeper)",
    distance: "1350 km",
    travelTime: "18 Hours",
    estimatedCost: maharashtraAmounts.transportFares.delhiToNashikTrain,
    weather: "Pleasant evening breezes, 24°C",
    trekDistance: "0 km",
    highestAltitude: "220m",
    stay: "Overnight Express Train Sleeper Berth",
    food: "Train pantry dinner / Packed home food (₹150)",
    notes: "Book train tickets (NZM to NK) at least 3-4 weeks in advance for confirmed sleeper berths.",
    warnings: [
      "Keep luggage locked under berth using chain & lock",
      "Charge power banks before boarding train"
    ],
    packing: ["Train ticket printout / M-Ticket", "Water bottle", "Hand sanitizer", "Lock & chain"],
    images: [],
    mapLink: "https://maps.google.com/?q=Nashik+Road+Railway+Station",
    tips: ["Download offline movies/podcasts for the 18-hour train journey."],
    photography: ["Boarding train at Hazrat Nizamuddin Station"],
    highlights: ["Overnight train journey across Central India", "Comfortable budget sleeper transit"],
    meals: ["Pantry dinner"],
    activities: [
      { time: "03:00 PM", title: "Report at NZM Railway Station", description: "Verify train status and platform number" },
      { time: "04:00 PM", title: "Board Express Train", description: "Settle into sleeper berth" }
    ],
    schedule: [
      { time: "03:00 PM", activity: "Arrive at Nizamuddin Railway Station" },
      { time: "04:00 PM", activity: "Board train to Nashik Road" }
    ]
  },
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Nashik Arrival → Trimbakeshwar Darshan & Kushavarta Kund",
    subtitle: "Arrive Nashik Road station, local shared cab to Trimbak & Darshan at 1st Jyotirlinga",
    overview: "Arrive at Nashik Road railway station by 10:30 AM. Take a shared taxi or MSRTC bus to Trimbakeshwar town (30 km). Check in at a budget hotel or Bhakta Niwas near Kushavarta Kund. Freshen up and proceed to Trimbakeshwar Temple for Darshan of the sacred three-faced Linga representing Brahma, Vishnu & Mahesh.",
    travel: "Nashik Road Station → Nashik CBS → Trimbakeshwar",
    travelMode: "Shared Taxi / Auto",
    distance: "35 km Local",
    travelTime: "1 Hour",
    estimatedCost: maharashtraAmounts.transportFares.nashikToTrimbakTaxi + maharashtraAmounts.stays.trimbak.hotelPrice + maharashtraAmounts.dailyFoodBudget,
    weather: "Pleasant & breezy, 22°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "600m",
    stay: "Hotel / Bhakta Niwas in Trimbak (₹500)",
    food: "Nashik Misal Pav lunch & Maharashtrian Thali dinner (₹350)",
    notes: "Dress code (Dhoti/Kurta for men) required if entering Garbhagriha for Abhishek.",
    warnings: [
      "Heavy rush on Mondays & Pradosham days, expect longer queue lines."
    ],
    packing: ["Traditional Dhoti / Sari", "Water bottle", "Power bank"],
    images: [],
    mapLink: "https://maps.google.com/?q=Trimbakeshwar+Temple",
    tips: ["Visit Godavari Kushavarta Kund early before temple Darshan."],
    photography: ["Kushavarta Kund holy tank"],
    highlights: ["Trimbakeshwar 3-faced Jyotirlinga", "Origin of River Godavari at Kushavarta"],
    meals: ["Misal Pav & Thali"],
    activities: [
      { time: "10:30 AM", title: "Arrive Nashik Road", description: "Exit station and take shared taxi to Trimbak" },
      { time: "11:30 AM", title: "Check-in & Fresh Up", description: "Check in at Trimbak hotel / Bhakta Niwas" },
      { time: "02:00 PM", title: "Temple Darshan", description: "Darshan at Trimbakeshwar Temple & Kushavarta Kund" }
    ],
    schedule: [
      { time: "10:30 AM", activity: "Arrive at Nashik Road Station" },
      { time: "02:00 PM", activity: "Trimbakeshwar Darshan" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Trimbak → Sambhaji Nagar (Aurangabad) → Grishneshwar & Ellora",
    subtitle: "Scenic highway bus to Sambhaji Nagar, visit 2nd Jyotirlinga (Grishneshwar) & UNESCO Ellora Caves",
    overview: "Take a morning intercity MSRTC bus from Nashik to Chhatrapati Sambhaji Nagar (Aurangabad). Reach Verul village and visit Grishneshwar Mandir, the 12th & last Jyotirlinga in India built of red volcanic rock. Afterwards, explore the breathtaking UNESCO World Heritage Kailasa Temple (Cave 16) at Ellora Caves.",
    travel: "Nashik → Sambhaji Nagar → Verul (Grishneshwar & Ellora)",
    travelMode: "Intercity MSRTC Bus & Auto",
    distance: "210 km",
    travelTime: "4.5 Hours",
    estimatedCost: maharashtraAmounts.transportFares.nashikToAurangabadBus + maharashtraAmounts.transportFares.aurangabadToGrishneshwarTaxi + maharashtraAmounts.stays.aurangabad.hotelPrice + maharashtraAmounts.dailyFoodBudget,
    weather: "Sunny, 24°C to 32°C",
    trekDistance: "0 km",
    highestAltitude: "570m",
    stay: "Tourist Lodge near Sambhaji Nagar / Ellora (₹600)",
    food: "Authentic Pithla Bhakri lunch & Naan Qalia (₹350)",
    notes: "Men must remove upper clothing (shirts/t-shirts) inside Grishneshwar Garbhagriha.",
    warnings: [
      "Ellora Caves complex requires 2-3 hours of walking; wear comfortable footwear."
    ],
    packing: ["Sunglasses", "Cap/Hat", "Comfortable walking shoes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Grishneshwar+Temple",
    tips: ["Do not miss Cave 16 (Kailasa Temple) carved out of a single monolithic rock."],
    photography: ["Ellora Kailasa Temple monolith"],
    highlights: ["12th Jyotirlinga Grishneshwar Darshan", "Monolithic Kailasa Temple at Ellora"],
    meals: ["Pithla Bhakri & local snacks"],
    activities: [
      { time: "07:00 AM", title: "Morning Bus", description: "Board bus to Sambhaji Nagar" },
      { time: "11:30 AM", title: "Grishneshwar Darshan", description: "Holy Darshan at Grishneshwar temple" },
      { time: "02:00 PM", title: "Ellora Caves Tour", description: "Explore Ellora Caves & Kailasa temple" }
    ],
    schedule: [
      { time: "07:00 AM", activity: "Bus to Sambhaji Nagar" },
      { time: "11:30 AM", activity: "Grishneshwar Mandir Darshan" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Sambhaji Nagar → Manchhar → Bhimashankar Wildlife Sanctuary",
    subtitle: "Travel towards Pune region ghats, ascend to Bhimashankar Jyotirlinga amidst lush sanctuary hills",
    overview: "Board an early express bus heading towards Pune/Manchhar. From Manchhar, take the mini ghat bus winding up into the Bhimashankar Wildlife Sanctuary. Reach Bhimashankar temple precinct located inside dense forest. Settle at hotel/MTDC lodge, then attend evening Aarti at Bhimashankar Jyotirlinga Mandir.",
    travel: "Sambhaji Nagar → Manchhar → Bhimashankar Ghats",
    travelMode: "Intercity Bus & Ghat Mini Bus",
    distance: "230 km",
    travelTime: "5.5 Hours",
    estimatedCost: maharashtraAmounts.transportFares.aurangabadToPuneBus + maharashtraAmounts.transportFares.puneToBhimashankarBus + maharashtraAmounts.stays.bhimashankar.hotelPrice + maharashtraAmounts.dailyFoodBudget,
    weather: "Misty & cool in hills, 18°C to 24°C",
    trekDistance: "0 km",
    highestAltitude: "950m",
    stay: "Lodge / MTDC Resort near Bhimashankar Temple (₹500)",
    food: "Fresh Mahaprasad & Sol Kadhi thali (₹350)",
    notes: "Keep food items inside bags as langurs and monkeys are active around Bhimashankar bus bay.",
    warnings: [
      "Ghat road has steep sharp bends; take motion sickness medicine if prone."
    ],
    packing: ["Rain jacket / Windcheater", "Insect repellent", "Moisturizer"],
    images: [],
    mapLink: "https://maps.google.com/?q=Bhimashankar+Temple",
    tips: ["Try to spot the Indian Giant Squirrel (Shekru) in the canopy trees."],
    photography: ["Misty forest canopy around Bhimashankar Mandir"],
    highlights: ["3rd Jyotirlinga Bhimashankar Darshan", "Bhimashankar Wildlife Sanctuary flora"],
    meals: ["Temple Mahaprasad & Sol Kadhi"],
    activities: [
      { time: "06:30 AM", title: "Intercity Transit", description: "Bus towards Pune/Manchhar" },
      { time: "01:00 PM", title: "Ascend Ghats", description: "Mini bus to Bhimashankar sanctuary" },
      { time: "04:30 PM", title: "Bhimashankar Aarti", description: "Attend evening Aarti at Jyotirlinga Mandir" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Travel to Manchhar / Bhimashankar" },
      { time: "04:30 PM", activity: "Bhimashankar Darshan" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Bhimashankar → Pune Station → Return Train to Delhi",
    subtitle: "Morning Kakad Aarti, bus to Pune Swargate/Station, and board return train back to Delhi/Sonipat",
    overview: "Attend early morning Kakad Aarti at Bhimashankar Mandir. Take an early MSRTC bus down to Pune Swargate / Pune Junction Railway Station (PUNE). Board the return express train (Jhelum Express / Goa Express / Karnataka Express) departing Pune in the evening back to New Delhi / Hazrat Nizamuddin.",
    travel: "Bhimashankar → Pune Swargate → Pune Station → Delhi",
    travelMode: "MSRTC Bus & Express Train (Sleeper)",
    distance: "1550 km",
    travelTime: "22 Hours",
    estimatedCost: maharashtraAmounts.transportFares.puneToDelhiTrain + maharashtraAmounts.dailyFoodBudget,
    weather: "Cool morning in hills, warm transit in Pune, 20°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "950m",
    stay: "Overnight Express Train Sleeper Berth",
    food: "Puran Poli lunch & train pantry dinner (₹350)",
    notes: "Train departs Pune Junction around 05:00 PM - 06:00 PM. Arrive in Delhi on Day 5 afternoon.",
    warnings: [
      "Ensure to leave Bhimashankar by 10 AM to reach Pune Station cleanly before 4 PM."
    ],
    packing: ["Water bottle", "Ticket copy", "Souvenirs / Pedha"],
    images: [],
    mapLink: "https://maps.google.com/?q=Pune+Junction+Railway+Station",
    tips: ["Buy authentic Maharashtrian Pedha & Bakarwadi near Pune station."],
    photography: ["Pune Junction Railway Station platform"],
    highlights: ["Nagphani Point viewpoint", "Completion of Maharashtra 3-Jyotirlinga Circuit"],
    meals: ["Puran Poli & Train Pantry Dinner"],
    activities: [
      { time: "05:30 AM", title: "Kakad Aarti", description: "Early morning Aarti at Bhimashankar" },
      { time: "10:00 AM", title: "Bus to Pune", description: "MSRTC bus down to Pune Swargate" },
      { time: "05:00 PM", title: "Board Return Train", description: "Board express train back to Delhi" }
    ],
    schedule: [
      { time: "05:30 AM", activity: "Morning Aarti" },
      { time: "05:00 PM", activity: "Board train back to Delhi" }
    ]
  }
];
