export const itinerary = [
  {
    id: 1,
    day: 1,
    date: "26-27 Aug",
    weekday: "Day 1",
    title: "Sonipat → Dharamshala → Bir Colony",
    subtitle: "Overnight Volvo straight to Dharamshala, scooty pickup, and ride to Bir base",
    overview: "Board the overnight Volvo bus from Sonipat bypass straight to Dharamshala on the evening of 26 August. Arrive in Dharamshala early morning on 27 August. Pick up your 2 rented scooties directly in Dharamshala and enjoy the scenic 65 km ride to Bir Colony via Palampur tea gardens. Check into your Bir hotel (MMT booking for 2 nights). Explore local monasteries (Chokling / Sherab Ling), cafe-hop, and watch the gliders land at sunset.",
    travel: "Sonipat → Dharamshala (Bus) then Dharamshala → Palampur → Bir (Scooty)",
    travelMode: "AC Volvo + Scooty Ride",
    distance: "475 km bus + 65 km scooty",
    travelTime: "10 Hours bus + 2 Hours riding",
    estimatedCost: 950, // Bus fare (600) + Day 1 sharing scooty/fuel
    weather: "Pleasant & Breezy, 17°C to 25°C",
    trekDistance: "0 km",
    highestAltitude: "1525m",
    stay: "Bir MMT Selected Hotel (₹687/person for 2 nights sharing, 2 rooms total for 2 couples)",
    food: "Breakfast in Dharamshala (₹80), lunch in Palampur (₹120), dinner in Bir Colony (₹200)",
    notes: "Renting scooties from Dharamshala allows you to easily drop your heavy bags at the Bir hotel base and ride light.",
    warnings: [
      "Check scooty tyres, headlights, and brakes before starting the highway ride to Bir."
    ],
    packing: ["Sunglasses", "Light jacket / windcheater", "Driving license"],
    images: [],
    mapLink: "https://maps.google.com/?q=Bir+Tibetan+Colony",
    tips: [
      "Stop at Palampur tea gardens for fresh tea and quick photos on your way to Bir.",
      "Check-in at the hotel early so you can ride baggage-free for the rest of the day."
    ],
    photography: [
      "Beautiful green tea plantations in Palampur",
      "Stunning paraglider landings at the sunset site"
    ],
    highlights: ["Dharamshala-Bir scenic ride", "Landing site sunset"],
    meals: ["Highway Breakfast", "Tea Garden Lunch", "Monastery Cafe Dinner"],
    activities: [
      { time: "07:00 AM (27 Aug)", title: "Arrive Dharamshala", description: "De-board Volvo at Dharamshala stand" },
      { time: "08:00 AM (27 Aug)", title: "Scooty Pickup", description: "Collect 2 rented scooties in Dharamshala" },
      { time: "11:00 AM (27 Aug)", title: "Reach Bir Base", description: "Arrive at Bir Colony hotel and check-in" }
    ],
    schedule: [
      { time: "08:30 PM (26 Aug)", activity: "Board overnight bus straight to Dharamshala" },
      { time: "07:00 AM (27 Aug)", activity: "Arrive Dharamshala, pick up rented scooties" },
      { time: "08:00 AM (27 Aug)", activity: "Ride from Dharamshala to Bir Colony" },
      { time: "11:00 AM (27 Aug)", activity: "Check-in to Bir couple rooms (MMT stay)" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "28 Aug",
    weekday: "Day 2",
    title: "Bir Colony ↔ Dharamshala & Mcleod Ganj",
    subtitle: "Ride from Bir base to Dalai Lama Temple and Mcleod Ganj sightseeing",
    overview: "After breakfast, take a scenic day ride back to Dharamshala and Mcleod Ganj (~65 km one way). Visit the Dalai Lama Temple Complex in Mcleod Ganj, explore local Tibetan markets, take a short hike to Bhagsu Waterfall, and enjoy mountain cafes. Ride back to Bir by late afternoon to stay the second night at your hotel base.",
    travel: "Bir Colony → Palampur → Dharamshala → Mcleod Ganj and return to Bir base",
    travelMode: "Scooty Ride",
    distance: "130 km round trip",
    travelTime: "4 Hours total riding",
    estimatedCost: 550, // Fuel and meals
    weather: "Cool & Pleasant, 15°C to 23°C",
    trekDistance: "0 km (Short walks at Bhagsu)",
    highestAltitude: "2082m (Mcleod Ganj)",
    stay: "Bir MMT Selected Hotel (Same room - second night)",
    food: "Breakfast in Bir (₹80), lunch at a cafe in Mcleod Ganj (₹200), dinner in Bir Colony (₹200)",
    notes: "Riding from Bir to McLeod Ganj takes you through winding roads. Leave early around 08:30 AM.",
    warnings: [
      "Highway traffic near Palampur can be fast. Ensure helmets are buckled properly."
    ],
    packing: ["Sunglasses", "Light jacket", "Driving License", "Rain poncho"],
    images: [],
    mapLink: "https://maps.google.com/?q=McLeod+Ganj",
    tips: [
      "Taste the local butter tea or try steaming hot momos at the Temple road shops.",
      "Visit the tranquil St. John Wilderness church in the pine woods."
    ],
    photography: [
      "Palampur pine-lined roads",
      "Spiritual Buddhist prayer wheels at Mcleod Ganj"
    ],
    highlights: ["Palampur tea fields ride", "Dalai Lama Temple", "Mcleod Ganj markets"],
    meals: ["Hotel Breakfast", "Tibetan Cafe Lunch", "Bir Colony Dinner"],
    activities: [
      { time: "08:30 AM", title: "Depart Bir", description: "Ride Bir → Palampur → McLeod Ganj" },
      { time: "11:00 AM", title: "Dalai Lama Temple", description: "Walk through temple complex" },
      { time: "01:30 PM", title: "Bhagsu Waterfall", description: "Hike up to the waterfall and cafes" },
      { time: "05:00 PM", title: "Ride to Bir", description: "Ride back to the Bir base hotel" }
    ],
    schedule: [
      { time: "08:30 AM", activity: "Depart from Bir base hotel on scooties" },
      { time: "11:00 AM", activity: "Arrive McLeod Ganj, visit Dalai Lama Temple" },
      { time: "01:30 PM", activity: "Hike to Bhagsu waterfall & lunch" },
      { time: "05:00 PM", activity: "Return ride back to Bir base" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "29-30 Aug",
    weekday: "Day 3",
    title: "Bir Base → Billing Ridge → Dharamshala Return",
    subtitle: "Ride to Billing Takeoff, ride back to Dharamshala, and overnight return bus",
    overview: "After breakfast, check out from the hotel and ride the scooties up the 14 km road to the Billing takeoff ridge (2,400m) to catch the morning paragliding launches. Ride back to Bir for lunch and collect your bags. Start the return ride back to Dharamshala (~65 km). Return the rented scooties at Dharamshala by evening, have dinner, and board your overnight return bus back to Sonipat.",
    travel: "Bir Base → Billing (Ride) → Bir → Dharamshala (Ride) then Dharamshala → Sonipat (Bus)",
    travelMode: "Scooty Ride + AC Volvo",
    distance: "14 km takeoff climb + 65 km return ride + 475 km bus",
    travelTime: "3 Hours total riding + 10 Hours bus",
    estimatedCost: 950, // Return bus ticket (600) + daily meals & fuel share
    weather: "Cool & Breezy, 8°C to 18°C on Ridge",
    trekDistance: "0 km",
    highestAltitude: "2400m",
    stay: "Overnight bus return to Sonipat",
    food: "Breakfast in Bir (₹80), lunch in Bir Colony (₹150), dinner in Dharamshala (₹150)",
    notes: "Make sure to start the Dharamshala return ride by 03:30 PM so you reach the rental office before dark.",
    warnings: [
      "Drive slow on the sharp curves climbing to Billing; watch for oncoming cabs.",
      "Check that you have all personal items from the scooty storage before returning the keys."
    ],
    packing: ["Helmets", "Windproof jacket", "Sturdy shoes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Sonipat",
    tips: [
      "Stand near the Billing launch line to watch pilots configure their gliders before jumping."
    ],
    photography: [
      "Majestic views of Dhauladhar snow peaks from Billing takeoff pad",
      "Group selfie at the Dharamshala bus stand"
    ],
    highlights: ["Uphill Billing ridge ride", "Volvo return coach"],
    meals: ["Hotel Breakfast", "Bir Cafe Lunch", "Dharamshala Dinner"],
    activities: [
      { time: "09:30 AM (29 Aug)", title: "Ride to Billing", description: "Ascend to Billing Ridge takeoff pad via scooties" },
      { time: "03:30 PM (29 Aug)", title: "Ride to Dharamshala", description: "Riding back to Dharamshala" },
      { time: "06:00 PM (29 Aug)", title: "Scooty Return", description: "Handover keys at Dharamshala shop" },
      { time: "08:00 PM (29 Aug)", title: "Board Bus", description: "Volvo boarding back to Sonipat" },
      { time: "06:00 AM (30 Aug)", title: "Arrive Sonipat", description: "Reach Sonipat bypass; end of journey" }
    ],
    schedule: [
      { time: "09:30 AM (29 Aug)", activity: "Ride from Bir Base to Billing takeoff ridge" },
      { time: "01:30 PM (29 Aug)", activity: "Ride back to Bir for lunch and luggage collection" },
      { time: "03:30 PM (29 Aug)", activity: "Return ride from Bir to Dharamshala" },
      { time: "06:00 PM (29 Aug)", activity: "Return scooties at Dharamshala shop" },
      { time: "08:00 PM (29 Aug)", activity: "Board overnight bus to Sonipat" },
      { time: "06:00 AM (30 Aug)", activity: "Arrive at Sonipat bypass" }
    ]
  }
];
