export const itinerary = [
  {
    id: 1,
    day: 1,
    date: "Day 1",
    weekday: "Day 1",
    title: "Delhi → Haridwar → Govindghat",
    subtitle: "Overnight drive / morning train to Haridwar, scenic Himalayan highway to Govindghat",
    overview: "Depart early from Delhi to Haridwar via Shatabdi train or AC bus. Board a shared vehicle from Haridwar to Govindghat (275 km drive), journeying along the sacred Alaknanda river and passing through Devprayag, Rudraprayag, and Karnaprayag confluences. Arrive at Govindghat by evening and check into a local lodge or Gurudwara Yatri Niwas.",
    travel: "Delhi → Haridwar → Devprayag → Karnaprayag → Joshimath → Govindghat",
    travelMode: "Train + Shared Taxi / Bus",
    distance: "505 km",
    travelTime: "13-14 Hours",
    estimatedCost: 1700,
    weather: "Pleasant in highway, 20°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "1828m",
    stay: "Govindghat Hotel / Gurudwara Yatri Niwas (₹500/person shared)",
    food: "Breakfast on highway (₹150), lunch at Srinagar Garhwal (₹200), dinner at Govindghat dhaba/langar (₹150)",
    notes: "Leave Haridwar latest by 06:00 AM to cover the mountain highway comfortably before sunset.",
    warnings: [
      "Long 10-12 hour mountain drive; carry motion sickness medicine if prone to car sickness",
      "Landslide-prone stretches near Chamoli during heavy rains; keep buffer time"
    ],
    packing: ["Motion sickness medication", "Water bottle & trail snacks", "Light jacket for evening", "Identity proof"],
    images: [],
    mapLink: "https://maps.google.com/?q=Govindghat",
    tips: [
      "Catch the 05:00 AM Shatabdi Express from New Delhi to Haridwar to save morning travel time",
      "Attend the evening Ardas & Langar at Gurudwara Govindghat"
    ],
    photography: [
      "Alaknanda & Bhagirathi river confluence at Devprayag viewpoint",
      "Suspension bridges over rushing mountain rivers near Joshimath"
    ],
    highlights: ["Drive along Alaknanda river", "Confluence of Panch Prayags", "Govindghat Gurudwara"],
    meals: ["Breakfast on highway", "Lunch at Srinagar Garhwal", "Dinner at Govindghat"],
    activities: [
      { time: "05:00 AM", title: "Departure from Delhi", description: "Board early Shatabdi train / AC bus from Delhi to Haridwar" },
      { time: "10:00 AM", title: "Arrive Haridwar & Board Taxi", description: "Transfer to shared Bolero / HRTC bus bound for Govindghat" },
      { time: "02:00 PM", title: "Lunch Break at Srinagar Garhwal", description: "Enjoy hot Garhwali meals near Alaknanda banks" },
      { time: "05:30 PM", title: "Pass Joshimath", description: "Short halt near Joshimath before final stretch to Govindghat" },
      { time: "07:30 PM", title: "Arrive Govindghat Base", description: "Check-in to lodge, fresh up, attend evening prayers at Gurudwara" }
    ],
    schedule: [
      { time: "05:00 AM", activity: "Depart Delhi by Shatabdi train / Volvo bus to Haridwar" },
      { time: "10:00 AM", activity: "Board shared taxi / bus from Haridwar to Govindghat" },
      { time: "02:00 PM", activity: "Lunch stop at Srinagar Garhwal near Alaknanda banks" },
      { time: "07:30 PM", activity: "Arrive at Govindghat, check-in to lodge, attend evening prayers" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2",
    weekday: "Day 2",
    title: "Govindghat → Pulna → Ghangaria",
    subtitle: "Jeep drive to Pulna, trek along Bhyundar Ganga to Ghangaria base camp",
    overview: "Take a short 4 km shared jeep drive from Govindghat to Pulna roadhead. Begin the gradual 10 km uphill trek to Ghangaria (3,048m) alongside the roaring Bhyundar Ganga river. Pass through lush pine, oak, and rhododendron forests with cascading waterfalls. Reach Ghangaria base camp by early afternoon.",
    travel: "Govindghat → Pulna → Bhyundar Village → Ghangaria Base Camp",
    travelMode: "Shared Jeep + Trekking",
    distance: "4 km Drive + 10 km Trek",
    travelTime: "5-6 Hours",
    estimatedCost: 1100,
    weather: "Cool & Crisp, 12°C to 18°C",
    trekDistance: "10 km",
    highestAltitude: "3048m",
    stay: "Ghangaria Lodge / GMVN Tourist Bungalow (₹800/person shared)",
    food: "Breakfast at Govindghat (₹120), trail lunch at Bhyundar village dhaba (₹180), dinner at Ghangaria (₹200)",
    notes: "Mobile network ends after Govindghat (only BSNL works intermittently in Ghangaria). Inform family beforehand.",
    warnings: [
      "Paved stone trail can be slick when wet; wear boots with solid rubber grip",
      "Helicopter rides operate from Govindghat to Ghangaria subject to clear weather"
    ],
    packing: ["Rain poncho / Raincoat", "Trekking shoes with good grip", "Trekking poles", "Cash (No ATMs in Ghangaria)"],
    images: [],
    mapLink: "https://maps.google.com/?q=Ghangaria",
    tips: [
      "Hire shared jeep from Govindghat to Pulna to shorten the trek by 4 km",
      "Watch the evening 5:00 PM documentary on Valley of Flowers at the Eco-Development Committee hall in Ghangaria"
    ],
    photography: [
      "Bhyundar Ganga gushing through narrow granite gorges",
      "Cascading waterfalls along the stone trail",
      "Ghangaria wooden lodge village surrounded by sheer cliff walls"
    ],
    highlights: ["Cascading river views", "Pine & Deodar forests", "Ghangaria mountain hamlet"],
    meals: ["Breakfast at Govindghat", "Trail lunch at Bhyundar village", "Dinner at Ghangaria lodge"],
    activities: [
      { time: "06:30 AM", title: "Jeep to Pulna", description: "Board 4 km shared jeep from Govindghat to Pulna roadhead" },
      { time: "07:15 AM", title: "Begin Trek to Ghangaria", description: "Start 10 km well-paved trek along Bhyundar Ganga river trail" },
      { time: "10:30 AM", title: "Tea Stop at Bhyundar Village", description: "Rest break for fresh lemon tea and snacks at trail dhabas" },
      { time: "01:30 PM", title: "Arrive Ghangaria Base", description: "Reach Ghangaria (3,048m), check into lodge, rest and acclimatize" },
      { time: "05:00 PM", title: "Evening Village Exploration", description: "Stroll in Ghangaria market, visit Gurudwara & watch floral documentary" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Shared taxi from Govindghat to Pulna roadhead" },
      { time: "07:15 AM", activity: "Begin 10 km trek to Ghangaria along stone trail" },
      { time: "12:30 PM", activity: "Arrive Ghangaria, check-in, rest and acclimatize" },
      { time: "05:00 PM", activity: "Evening stroll in Ghangaria market & documentary show" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3",
    weekday: "Day 3",
    title: "Ghangaria → Valley of Flowers → Ghangaria",
    subtitle: "Explore UNESCO World Heritage floral sanctuary surrounded by glaciers",
    overview: "Cross the wooden bridge over Pushpawati river and enter the UNESCO World Heritage Valley of Flowers national park. Trek through vast alpine carpet meadows blooming with over 500 species of wild Himalayan flowers, including Blue Poppies, Cobra Lilies, and Edelweiss. Visit the grave memorial of botanist Joan Margaret Legge before returning to Ghangaria.",
    travel: "Ghangaria Base Camp ↔ Valley of Flowers Meadows",
    travelMode: "Trekking",
    distance: "10 km (Round Trip)",
    travelTime: "6-7 Hours",
    estimatedCost: 900,
    weather: "Mist & Cool breeze, 10°C to 16°C",
    trekDistance: "10 km",
    highestAltitude: "3600m",
    stay: "Ghangaria Lodge / GMVN Tourist Bungalow (₹800/person shared)",
    food: "Packed lunch / sandwiches & chocolates in valley (₹200), dinner in Ghangaria (₹200)",
    notes: "No food stalls or plastic bottles allowed inside the national park. Carry packed food and refillable water bottles.",
    warnings: [
      "Do not pluck flowers or leave any plastic litter inside the park (heavily fined)",
      "Park gate closes at 05:00 PM; start return walk by 02:00 PM"
    ],
    packing: ["Forest permit (₹200)", "Rain poncho", "Camera with extra batteries", "Packed lunch & water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Valley+of+Flowers",
    tips: [
      "Carry a small trash pouch to bring back all your waste from the national park",
      "Look for rare Himalayan Blue Poppies blooming in rocky crags during July-August"
    ],
    photography: [
      "Vast carpet of multi-colored flowers with glacier backdrop",
      "Pushpawati River stream winding through green meadows",
      "Macro shots of rare Blue Poppy and Cobra Lily blooms"
    ],
    highlights: ["Blue poppies & rare alpine flora", "Pushpawati River stream", "Snowy peaks panorama"],
    meals: ["Packed breakfast/lunch for valley", "Hot tea & dinner at Ghangaria"],
    activities: [
      { time: "06:30 AM", title: "Forest Permit & Check-post", description: "Buy park entry ticket at Ghangaria forest gate and cross Pushpawati bridge" },
      { time: "08:30 AM", title: "Enter Floral Sanctuary", description: "Walk through pine forest entering the expansive open flower valley" },
      { time: "11:00 AM", title: "Meadow Exploration & Photography", description: "Hike deep into meadows toward Rataban peak backdrop" },
      { time: "01:00 PM", title: "Joan Margaret Legge Grave", description: "Reach botanist memorial site and enjoy packed lunch surrounded by blossoms" },
      { time: "02:30 PM", title: "Return Walk", description: "Begin gradual return trek towards Ghangaria forest gate" },
      { time: "05:00 PM", title: "Back at Base Camp", description: "Arrive Ghangaria lodge, relax with hot tea and hearty dinner" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Obtain forest entry permit and cross Pushpawati bridge" },
      { time: "09:00 AM", activity: "Enter main floral meadows of Valley of Flowers" },
      { time: "01:00 PM", activity: "Reach Joan Margaret Legge grave & enjoy packed lunch" },
      { time: "04:30 PM", activity: "Trek back to Ghangaria base camp before entry gate closes" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4",
    weekday: "Day 4",
    title: "Ghangaria → Shree Hemkund Sahib → Ghangaria",
    subtitle: "Ascend steep stone staircase to sacred lake & highest Sikh Gurudwara at 15,200 ft",
    overview: "A challenging 6 km steep uphill climb from Ghangaria (3,048m) to Shree Hemkund Sahib (4,632m). Witness the sacred glacial lake surrounded by seven snow-capped peaks, spot rare Brahma Kamal flowers, participate in holy Ardas, and partake in warm Gurudwara langar before descending back to Ghangaria.",
    travel: "Ghangaria Base Camp ↔ Shree Hemkund Sahib Shrine",
    travelMode: "Trekking",
    distance: "12 km (Round Trip)",
    travelTime: "7-8 Hours",
    estimatedCost: 1000,
    weather: "Cold & Windy, 4°C to 10°C",
    trekDistance: "12 km",
    highestAltitude: "4632m",
    stay: "Ghangaria Base Camp Lodge / GMVN Guest House (₹800/person shared)",
    food: "Early morning tea at Ghangaria, hot tea & Khichdi Langar at Hemkund Sahib (Free/Donation), dinner in Ghangaria (₹200)",
    notes: "No overnight stay permitted at Hemkund Sahib due to extreme altitude and freezing temperatures. All pilgrims and trekkers must start descending by 02:00 PM.",
    warnings: [
      "Steep altitude gain of 1,584m in 6 km; pace yourself and stay hydrated",
      "Temperatures drop rapidly near the lake; wear heavy windproof woolens & gloves",
      "Monsoons cause slippery stone steps; trek with trekking poles"
    ],
    packing: ["Windproof & waterproof jacket", "Warm gloves & woolen cap", "Trekking poles", "Water bottle & energy bars"],
    images: [],
    mapLink: "https://maps.google.com/?q=Hemkund+Sahib",
    tips: [
      "Start by 05:00 AM to reach the Gurudwara before noon clouds cover the valley",
      "Look for rare Brahma Kamal flowers blooming in the rocks near the lake shore",
      "Enjoy the hot tea and piping hot khichdi langar served inside the Gurudwara complex"
    ],
    photography: [
      "Sacred Hemkund Glacial Lake reflecting 7 surrounding snow peaks",
      "Brahma Kamal (sacred high-altitude lotus)",
      "Hemkund Sahib Gurudwara building against dramatic cloudscape"
    ],
    highlights: ["High-altitude glacial lake", "Brahma Kamal flowers", "Hot Tea & Langar at Gurudwara"],
    meals: ["Early tea at Ghangaria", "Langar meal at Hemkund Sahib", "Dinner at Ghangaria"],
    activities: [
      { time: "05:00 AM", title: "Early Morning Departure", description: "Begin 6 km steep climbing trek along stone steps from Ghangaria" },
      { time: "08:00 AM", title: "Mid-trail Tea Stop", description: "Short rest break at trail dhabas while enjoying views of waterfalls" },
      { time: "10:30 AM", title: "Arrive Shree Hemkund Sahib", description: "Reach sacred lake & Gurudwara at 15,200 ft altitude" },
      { time: "11:30 AM", title: "Holy Dip & Ardas Prayer", description: "Witness holy lake dip, pay respects in Gurudwara hall, listen to Gurbani Kirtan" },
      { time: "12:30 PM", title: "Gurudwara Langar", description: "Partake in hot herbal tea & wholesome khichdi langar served by volunteers" },
      { time: "02:00 PM", title: "Begin Descent Trek", description: "Start downhill walk back towards Ghangaria before mountain weather turns harsh" },
      { time: "05:30 PM", title: "Return to Ghangaria", description: "Arrive back at base camp, rest tired legs, enjoy warm dinner" }
    ],
    schedule: [
      { time: "05:00 AM", activity: "Early start for 6 km steep climbing trek to Hemkund Sahib" },
      { time: "10:30 AM", activity: "Reach Hemkund Sahib Lake & Gurudwara at 15,200 ft" },
      { time: "12:00 PM", activity: "Attend Ardas prayer and enjoy hot tea with khichdi langar" },
      { time: "04:00 PM", activity: "Descent back to Ghangaria base camp" }
    ]
  },
  {
    id: 5,
    day: 5,
    date: "Day 5",
    weekday: "Day 5",
    title: "Ghangaria → Pulna → Govindghat → Haridwar",
    subtitle: "Descent trek to Pulna, drive back down Himalayan valleys to Haridwar",
    overview: "Trek 10 km downhill from Ghangaria to Pulna roadhead, take a short shared jeep ride to Govindghat, and then drive 275 km back down along the Alaknanda & Ganges river valley to Haridwar / Rishikesh. Option to attend evening Ganga Aarti at Har Ki Pauri / Triveni Ghat.",
    travel: "Ghangaria → Pulna → Govindghat → Joshimath → Devprayag → Haridwar",
    travelMode: "Trekking + Shared Taxi / Bus",
    distance: "10 km Trek + 279 km Drive",
    travelTime: "10-11 Hours",
    estimatedCost: 1500,
    weather: "Pleasant, 18°C to 28°C",
    trekDistance: "10 km",
    highestAltitude: "3048m",
    stay: "Hotel near Haridwar Railway Station / Rishikesh (₹500/person shared)",
    food: "Breakfast at Ghangaria (₹150), lunch at Joshimath/Karnaprayag (₹200), dinner in Haridwar (₹150)",
    notes: "Start descent trek early morning by 06:00 AM to catch daytime shared taxis/buses leaving Govindghat for Haridwar.",
    warnings: [
      "Downhill trekking causes knee impact; use trekking poles for support",
      "Mountain road traffic delays can happen near Landslides prone stretches"
    ],
    packing: ["Trekking poles", "Water bottle", "Snacks for road journey", "Phone charger"],
    images: [],
    mapLink: "https://maps.google.com/?q=Haridwar",
    tips: [
      "Take shared jeep from Pulna to Govindghat to save 4 km road walk",
      "Stop at Devprayag viewpoint for photography of Bhagirathi and Alaknanda confluence"
    ],
    photography: [
      "Devprayag Sangam (Bhagirathi & Alaknanda confluence)",
      "Har Ki Pauri evening illuminated ghats"
    ],
    highlights: ["Downhill riverside trail", "Rishikesh Triveni Ghat / Ganga Aarti"],
    meals: ["Breakfast at Ghangaria", "Lunch at Joshimath", "Dinner at Haridwar"],
    activities: [
      { time: "06:00 AM", title: "Morning Check-out", description: "Depart Ghangaria lodge and begin 10 km downhill trek to Pulna" },
      { time: "09:30 AM", title: "Reach Pulna Roadhead", description: "Board 4 km shared jeep to Govindghat main vehicle stand" },
      { time: "10:30 AM", title: "Board Shared Vehicle to Haridwar", description: "Begin 275 km scenic drive along Panch Prayag river route" },
      { time: "02:00 PM", title: "Lunch Stop at Karnaprayag", description: "Dhaba lunch break near river confluence" },
      { time: "07:30 PM", title: "Arrive in Haridwar", description: "Check-in to hotel near station, fresh up" },
      { time: "08:30 PM", title: "Evening Ganga Aarti & Dinner", description: "Visit Har Ki Pauri or Rishikesh ghats, followed by local dinner" }
    ],
    schedule: [
      { time: "06:00 AM", activity: "Start downhill trek from Ghangaria to Pulna" },
      { time: "10:00 AM", activity: "Board shared vehicle from Govindghat towards Haridwar" },
      { time: "07:30 PM", activity: "Arrive Haridwar, check-in hotel, optional Ganga Aarti visit" }
    ]
  },
  {
    id: 6,
    day: 6,
    date: "Day 6",
    weekday: "Day 6",
    title: "Haridwar / Rishikesh → Delhi",
    subtitle: "Morning spiritual sightseeing, local market shopping & return journey to Delhi",
    overview: "Conclude your memorable Himalayan pilgrimage and floral valley expedition. Spend the morning visiting sacred temples, ghats, or cafe hopping in Rishikesh/Haridwar, before taking an afternoon train or Volvo bus back to Delhi.",
    travel: "Haridwar / Rishikesh → Delhi",
    travelMode: "Train / AC Bus",
    distance: "230 km",
    travelTime: "5-6 Hours",
    estimatedCost: 1600,
    weather: "Warm, 30°C to 34°C",
    trekDistance: "0 km",
    highestAltitude: "314m",
    stay: "Home / End of trip",
    food: "Breakfast at Haridwar famous sweet shop (₹150), lunch en route (₹200), snacks (₹100)",
    notes: "Book afternoon Shatabdi (12006/14042) or AC Volvo bus to reach Delhi comfortably by evening.",
    warnings: [
      "Keep luggage safe during railway station and bus stand transitions",
      "Delhi traffic near ISBT Kashmere Gate during evening hours"
    ],
    packing: ["Souvenirs & sweets", "Used trekking gear packed securely"],
    images: [],
    mapLink: "https://maps.google.com/?q=Delhi",
    tips: [
      "Try famous Haridwar Puri-Kachori & Mathura Peda near Har Ki Pauri",
      "Buy local rhododendron (Buransh) juice concentrate as souvenir"
    ],
    photography: [
      "Haridwar bustling colorful bazaars",
      "Ganges river morning views"
    ],
    highlights: ["Har Ki Pauri", "Local sweets & souvenir shopping"],
    meals: ["Breakfast in Haridwar", "Lunch en route"],
    activities: [
      { time: "08:00 AM", title: "Morning Ghat Walk & Breakfast", description: "Visit Har Ki Pauri ghat for morning prayers & famous local breakfast" },
      { time: "10:30 AM", title: "Souvenir Shopping", description: "Shop for handicraft souvenirs, brass items, and authentic Buransh juice" },
      { time: "01:00 PM", title: "Lunch Break", description: "Relaxed lunch at local restaurant before departure" },
      { time: "02:30 PM", title: "Board Return Train / Volvo", description: "Depart Haridwar for Delhi via NH58 highway or Jan Shatabdi Express" },
      { time: "07:30 PM", title: "Arrive Delhi", description: "Reach Delhi (Kashmere Gate / New Delhi Railway Station) with wonderful memories" }
    ],
    schedule: [
      { time: "08:00 AM", activity: "Visit Har Ki Pauri and local markets" },
      { time: "02:00 PM", activity: "Board train/bus back to Delhi" },
      { time: "07:30 PM", activity: "Arrive Delhi with unforgettable Himalayan memories" }
    ]
  },
  {
    id: 7,
    day: 7,
    date: "Day 7 (Plan 2 Badrinath Extension)",
    weekday: "Day 7",
    title: "Govindghat → Badrinath Dham → Mana Village → Haridwar",
    subtitle: "25 km drive extension to Badrinath Temple, Tapt Kund dip, Mana Village (Last Indian Village) & return",
    overview: "In Plan 2 (Combined Circuit), after finishing the Valley of Flowers & Hemkund trek, take a 1-hour drive (25 km) up the highway to Badrinath Dham (3,133m). Take a holy dip at Tapt Kund thermal springs, perform Badrinath Temple Sparsh Darshan, and visit Mana Village (Vyas Gufa, Saraswati River origin, and India's Last Tea Stall) before driving down to Haridwar.",
    travel: "Govindghat → Badrinath Dham → Mana Village → Joshimath → Haridwar",
    travelMode: "Shared Taxi / Bus",
    distance: "310 km",
    travelTime: "10-11 Hours",
    estimatedCost: 1400,
    weather: "Cool at Badrinath (10°C to 18°C)",
    trekDistance: "0 km",
    highestAltitude: "3133m",
    stay: "Haridwar Hotel / Return Bus",
    food: "Breakfast at Badrinath (₹150), lunch at Joshimath (₹200), dinner en route (₹150)",
    notes: "Plan 2 Extension: Badrinath temple morning aarti is highly recommended.",
    warnings: [
      "Keep temple dress code ready for Badrinath Darshan",
      "Thermal water at Tapt Kund is hot; take care while dipping"
    ],
    packing: ["Puja essentials", "Thermal jacket", "Waterproof shoes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Badrinath+Temple",
    tips: [
      "Visit Vyas Gufa and Ganesh Gufa in Mana Village where Mahabharata was dictated",
      "Have tea at 'India's Last Tea Shop' near Saraswati River"
    ],
    photography: [
      "Badrinath colorful temple facade with Neelkanth Peak background",
      "Saraswati River gushing through Bhim Pul natural stone bridge"
    ],
    highlights: ["Badrinath Temple Darshan", "Tapt Kund Hot Springs", "Mana Village & Vyas Gufa", "Bhim Pul"],
    meals: ["Breakfast at Badrinath", "Lunch at Joshimath", "Dinner en route"],
    activities: [
      { time: "06:00 AM", title: "Govindghat to Badrinath Drive", description: "Drive 25 km from Govindghat to Badrinath Dham along Alaknanda river" },
      { time: "07:30 AM", title: "Tapt Kund Dip & Badrinath Darshan", description: "Take holy dip in natural hot springs and attend Badrinath Temple Darshan" },
      { time: "10:00 AM", title: "Mana Village Exploration", description: "Visit Vyas Gufa, Ganesh Gufa, Saraswati River origin, and Bhim Pul stone bridge" },
      { time: "01:00 PM", title: "Lunch at Joshimath", description: "Enjoy hot meal at Joshimath before descending to Haridwar" },
      { time: "08:30 PM", title: "Arrive Haridwar / Delhi Return", description: "Arrive at Haridwar to board overnight train/bus back to Delhi" }
    ],
    schedule: [
      { time: "06:00 AM", activity: "Drive from Govindghat to Badrinath Dham" },
      { time: "07:30 AM", activity: "Tapt Kund bath & Badrinath Temple Darshan" },
      { time: "10:00 AM", activity: "Explore Mana Village & Saraswati River" },
      { time: "08:30 PM", activity: "Arrive Haridwar for return journey" }
    ]
  }
];
