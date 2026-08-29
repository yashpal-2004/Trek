export const itinerary = [
  {
    id: 0,
    day: 0,
    date: "Day 0 — Friday Night",
    weekday: "Fri",
    title: "Delhi → Board Overnight Train to Gorakhpur",
    subtitle: "Board the budget sleeper coach from New Delhi (NDLS) — overnight journey to Gorakhpur",
    overview: "Report at New Delhi Railway Station (NDLS) or Anand Vihar Terminal by 07:30 PM. Board the overnight Express Train (Sleeper Class, ticket booked in advance) departing towards Eastern Uttar Pradesh. Settle in your sleeper berth for an overnight run.",
    travel: "New Delhi (NDLS) → Gorakhpur Junction (Express Sleeper Train)",
    travelMode: "Sleeper Class Train",
    distance: "750 km",
    travelTime: "13 Hours",
    estimatedCost: 500,
    weather: "Cool air-conditioned or breeze in train, 25°C",
    trekDistance: "0 km",
    highestAltitude: "216m",
    stay: "Overnight Sleeper Train",
    food: "Pack dinner from home or buy at railway station (₹100)",
    notes: "Keep your IRCTC train ticket and ID card ready. Download the NTES or 'Where is my train' app to track train coordinates.",
    warnings: [
      "Keep your phone and handbag securely chained or under your pillow while sleeping",
      "Do not buy food from unauthorized vendors on train platforms"
    ],
    packing: ["Hand sanitizer", "Chain and lock for luggage", "Earplugs & eye mask"],
    images: [],
    mapLink: "https://maps.google.com/?q=New+Delhi+Railway+Station",
    tips: [
      "Book your train ticket at least 30-40 days in advance to secure Sleeper Class berths."
    ],
    photography: ["Boarding the train amidst the bustling NDLS platforms"],
    highlights: ["Overnight train journey", "Budget railway transit"],
    meals: ["Train platform snacks"],
    activities: [
      { time: "07:30 PM", title: "Report at Station", description: "Find the designated platform, verify coach position" },
      { time: "08:15 PM", title: "Board Train", description: "Settle your luggage under the lower berth, chain it" }
    ],
    schedule: [
      { time: "07:30 PM", activity: "Arrive at Delhi station" },
      { time: "08:15 PM", activity: "Board train to Gorakhpur" }
    ]
  },
  {
    id: 1,
    day: 1,
    date: "Day 1 — Saturday",
    weekday: "Sat",
    title: "Gorakhpur Arrival → Sonauli Border Cross → Overnight Bus to Kathmandu",
    subtitle: "Bus to Sonauli, cross Indo-Nepal border on foot, board Nepalese overnight bus",
    overview: "Arrive at Gorakhpur Junction by 10:00 AM. Immediately walk outside to the Gorakhpur Bus Stand and board a local UPSRTC bus or shared jeep heading to Sonauli (the Indian border town). Reach Sonauli around 01:30 PM. Walk across the border checkpoint. Complete Indian and Nepalese immigration checks (carry voter ID or passport). Once in Belahiya (Nepal), exchange INR to Nepalese Rupees and buy a local SIM card. Walk to the Belahiya Bus Stop and board the 04:00 PM overnight Deluxe AC bus to Kathmandu.",
    travel: "Gorakhpur → Sonauli Border (Bus) → Walk across Border → Belahiya → Kathmandu (Overnight Bus)",
    travelMode: "Local Bus & Deluxe Overnight Bus",
    distance: "100 km (India) + 280 km (Nepal)",
    travelTime: "3 Hours (to border) + 12 Hours (to Kathmandu)",
    estimatedCost: 1150,
    weather: "Warm border plains (32°C), cooling down as you ascend towards Kathmandu",
    trekDistance: "1 km walk across border",
    highestAltitude: "1400m",
    stay: "Overnight Deluxe AC Bus (Sleeper/Recliner)",
    food: "Lunch at Sonauli Dhaba (₹120), dinner at a highway stop in Nepal (NPR 250 / ₹150)",
    notes: "Keep your original Voter ID or Passport in an easily accessible pouch. Nepalese time is 15 minutes ahead of Indian Standard Time (IST).",
    warnings: [
      "Local brokers at the border may try to sell highly marked-up transport tickets or currency exchange. Walk directly to the government counters or bus terminals",
      "Do not accept ₹500 Indian notes as change from local dealers; only carry ₹100 notes"
    ],
    packing: ["Original ID card (Voter ID/Passport)", "Passport-size photos", "INR 100 denomination cash notes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Sonauli+Border+Immigration",
    tips: [
      "Indian currency notes of ₹100 and below are accepted everywhere in Nepal. The exchange rate is fixed: 1 INR = 1.6 NPR.",
      "Get a local Ncell SIM card at the border for NPR 150 with a photo and passport copy."
    ],
    photography: ["The historic Nepal Welcome Gate at Sonauli Border", "Immigration stamps on travel log"],
    highlights: ["Crossing international border on foot", "Overnight scenic mountain bus drive"],
    meals: ["Traditional Nepali highway Dal Bhat"],
    activities: [
      { time: "10:15 AM", title: "Reach Gorakhpur", description: "Arrive at GKP station, transfer to local bus terminal" },
      { time: "01:30 PM", title: "Border Crossing", description: "Get exit stamps at Indian immigration, walk 100m, enter Nepal, complete entry checks" },
      { time: "04:00 PM", title: "Board Nepal Bus", description: "Board overnight Deluxe AC bus from Belahiya to Kathmandu" }
    ],
    schedule: [
      { time: "10:00 AM", activity: "Arrive Gorakhpur, board bus to Sonauli border" },
      { time: "01:30 PM", activity: "Cross Sonauli-Belahiya border, finish immigration" },
      { time: "03:00 PM", activity: "Exchange currency, buy local SIM card" },
      { time: "04:00 PM", activity: "Board overnight deluxe bus to Kathmandu" }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "Day 2 — Sunday",
    weekday: "Sun",
    title: "Kathmandu Arrival → Hostel Check-in → Pashupatinath & Boudhanath Stupa",
    subtitle: "Arrive Kathmandu, stay in budget Thamel hostel, visit holy sites",
    overview: "Arrive in Kathmandu (Gongabu Bus Park) by 07:00 AM. Take a local shared micro-bus or taxi to Thamel, the backpacker hub. Check in to your budget hostel, freshen up, and take some rest. In the afternoon, take a local bus or shared ride to Pashupatinath Temple on the banks of Bagmati River. Afterwards, walk or take a local ride to the massive Boudhanath Stupa, one of the largest spherical stupas in the world. Circle the stupa alongside Buddhist monks, spin prayer wheels, and enjoy a budget rooftop cafe dinner overlooking the lit-up dome.",
    travel: "Bus Stand → Thamel Hostel → Pashupatinath → Boudhanath → Thamel",
    travelMode: "Local Micro-bus & Walking",
    distance: "15 km Local",
    travelTime: "2 Hours",
    estimatedCost: 800,
    weather: "Pleasant mountain weather, 20°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "1400m",
    stay: "Backpacker Hostel Dorm in Thamel (₹300/person)",
    food: "Hostel tea & local breakfast (₹80), lunch at local eatery (₹120), dinner near Boudhanath (₹180)",
    notes: "Only Hindus are allowed inside the main temple courtyard of Pashupatinath. Others can view the temple and cremation ghats from across the Bagmati river banks.",
    warnings: [
      "Monkeys around Pashupatinath can be aggressive; keep food items inside your bags",
      "Always remove shoes before entering temple/stupa platforms"
    ],
    packing: ["Modest clothing for temples", "Slip-on walking shoes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Boudhanath+Stupa+Kathmandu",
    tips: [
      "To travel cheaply inside Kathmandu, use local shared micro-buses (which cost NPR 20-30 / ₹15) or download local ride-sharing apps like Pathao or InDrive."
    ],
    photography: ["Golden roofs of Pashupatinath temple", "Eyes of Buddha painted on Boudhanath Stupa at twilight", "Tibetan monks chanting"],
    highlights: ["Pashupatinath Temple complex", "Sunset walking around Boudhanath Stupa", "Thamel vibrant backpacker streets"],
    meals: ["Nepalese Dal Bhat lunch", "Momo dinner at Boudhanath rooftop"],
    activities: [
      { time: "07:30 AM", title: "Hostel Check-in", description: "Reach Thamel hostel, unpack, shower and rest" },
      { time: "02:00 PM", title: "Pashupatinath Visit", description: "Explore the ancient temple complex, watch the riverside rituals" },
      { time: "05:00 PM", title: "Boudhanath Circle", description: "Circumambulate the stupa clockwise, listen to chanting, spin prayer wheels" }
    ],
    schedule: [
      { time: "07:00 AM", activity: "Arrive Kathmandu bus stand, transfer to Thamel hostel" },
      { time: "01:30 PM", activity: "Lunch at budget local eatery in Thamel" },
      { time: "02:30 PM", activity: "Visit sacred Pashupatinath Temple" },
      { time: "05:00 PM", activity: "Visit Boudhanath Stupa for evening prayers and kora" },
      { time: "08:00 PM", activity: "Rooftop dinner, return to Thamel hostel" }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "Day 3 — Monday",
    weekday: "Mon",
    title: "Swayambhunath Monkey Temple → Kathmandu Durbar Square → Local Markets",
    subtitle: "Climb Swayambhunath hill for panoramic city views & explore historic Durbar Square structures",
    overview: "Start your day with a local breakfast and climb the 365 steps of Swayambhunath Temple (Monkey Temple) situated on a hilltop, offering panoramic views of the Kathmandu Valley. Walk down to Kathmandu Durbar Square, a UNESCO World Heritage site filled with historic Newari architecture, old palaces, and intricately carved temples. Spend your afternoon exploring the local wholesale markets of Ason Bazaar and shopping for local souvenirs in Thamel. Return to your hostel for another comfortable night.",
    travel: "Thamel → Swayambhunath → Durbar Square → Ason Bazaar → Thamel",
    travelMode: "Walking & Local Rickshaw",
    distance: "8 km Local",
    travelTime: "1.5 Hours",
    estimatedCost: 650,
    weather: "Clear skies, mild sunshine, 22°C to 28°C",
    trekDistance: "0 km",
    highestAltitude: "1450m (Swayambhunath Hill)",
    stay: "Backpacker Hostel Dorm in Thamel (₹300/person)",
    food: "Local breakfast (₹70), budget lunch (₹100), dinner in Thamel (₹150)",
    notes: "Ason Bazaar is extremely crowded; keep your belongings safe in front pockets. Standard entry ticket to Durbar Square is required.",
    warnings: [
      "Watch out for sellers pushing overpriced handicraft items around Durbar Square"
    ],
    packing: ["Comfortable sports shoes (lots of walking)", "Water bottle"],
    images: [],
    mapLink: "https://maps.google.com/?q=Swayambhunath+Kathmandu",
    tips: [
      "Visit Ason Bazaar to buy local spices, tea, and Himalayan salt at local non-tourist wholesale rates."
    ],
    photography: ["Scenic view of Kathmandu valley from Swayambhunath", "Intricately carved wood carvings at Durbar Square"],
    highlights: ["Swayambhunath stupa panoramic views", "UNESCO Kathmandu Durbar Square structures", "Ason Bazaar wholesale spices search"],
    meals: ["Chatpat and local snacks", "Traditional Newari Thali dinner"],
    activities: [
      { time: "08:30 AM", title: "Swayambhunath", description: "Climb the steps, view Buddha stupa and playful monkeys" },
      { time: "11:30 AM", title: "Durbar Square", description: "Admire ancient royal palace courtyards and stone temples" },
      { time: "03:00 PM", title: "Ason Bazaar Walk", description: "Observe local trade, smell spices, walk back to Thamel" }
    ],
    schedule: [
      { time: "08:30 AM", activity: "Walk/Micro-bus to Swayambhunath Monkey Temple" },
      { time: "11:30 AM", activity: "Walk to Kathmandu Durbar Square" },
      { time: "01:30 PM", activity: "Lunch near Durbar Square" },
      { time: "03:00 PM", activity: "Walk through local Ason Bazaar spice market" },
      { time: "06:00 PM", activity: "Return to Thamel, explore street shops, dinner" }
    ]
  },
  {
    id: 4,
    day: 4,
    date: "Day 4 — Tuesday",
    weekday: "Tue",
    title: "Kathmandu → Tourist Bus to Pokhara → Phewa Lake Sunset Boating",
    subtitle: "Scenic highway bus ride to Pokhara, stay near Phewa Lake, boat ride to Tal Barahi",
    overview: "Report at the Sorhakhutte Tourist Bus Stand in Kathmandu by 06:30 AM. Board the comfortable tourist bus to Pokhara. The road follows the Trishuli River, offering beautiful views of terraced hills, waterfalls, and distant snow peaks. Arrive at Pokhara Lakeside Bus Park by 02:30 PM. Check in to your lakeside budget hostel. In the evening, walk down to Phewa Lake and take a cheap shared boat ride to Tal Barahi Temple, situated on a small island in the middle of the lake. Watch the sunset reflecting off the lake water, with the Machhapuchhre peak (Fishtail mountain) visible in the background.",
    travel: "Kathmandu → Mugling Highway → Pokhara Lakeside (Tourist Bus) → Phewa Lake",
    travelMode: "Tourist Bus & Lake Boat",
    distance: "200 km",
    travelTime: "7-8 Hours",
    estimatedCost: 1300,
    weather: "Warm day, breezy and cool evening by the lake, 18°C to 27°C",
    trekDistance: "0 km",
    highestAltitude: "822m (Pokhara)",
    stay: "Lakeside Pokhara Backpacker Hostel (₹350/person)",
    food: "Highway lunch stop (₹120), dinner at Pokhara Lakeside Dhaba (₹180)",
    notes: "Road expansion works are ongoing, so carry a face mask or bandana to protect against road dust during highway stops.",
    warnings: [
      "Wearing a life jacket is mandatory during boat rides on Phewa Lake",
      "Highway travel can be bumpy; carry motion sickness medicine if needed"
    ],
    packing: ["Face mask/bandana", "Sunscreen & sunglasses", "Light sweater for lakeside night breeze"],
    images: [],
    mapLink: "https://maps.google.com/?q=Phewa+Lake+Pokhara",
    tips: [
      "Get a seat on the right-hand side of the bus when traveling from Kathmandu to Pokhara to get the best views of the Trishuli River gorge."
    ],
    photography: ["Sunset colors over Phewa Lake", "Tal Barahi temple island", "Reflection of Annapurna range on lake"],
    highlights: ["Trishuli River scenic highway drive", "Phewa Lake sunset boating", "Lakeside cafes walking"],
    meals: ["Highway thali", "Lakeside momos and tea"],
    activities: [
      { time: "06:30 AM", title: "Tourist Bus", description: "Board tourist bus from Sorhakhutte stand, depart at 07:00 AM" },
      { time: "02:30 PM", title: "Reach Pokhara", description: "Arrive Pokhara Lakeside, walk to budget hostel" },
      { time: "05:00 PM", title: "Phewa Lake Boat", description: "Hire a shared wooden boat, row to Tal Barahi temple island" }
    ],
    schedule: [
      { time: "06:30 AM", activity: "Arrive at Kathmandu tourist bus stand" },
      { time: "07:00 AM", activity: "Depart to Pokhara via scenic highway" },
      { time: "02:30 PM", activity: "Arrive Pokhara Lakeside, check in to hostel" },
      { time: "05:00 PM", activity: "Sunset boat ride at Phewa Lake to Tal Barahi Temple" },
      { time: "08:00 PM", activity: "Walk around Pokhara Lakeside markets, dinner" }
    ]
  },
  {
    id: 5,
    day: 5,
    date: "Day 5 — Wednesday",
    weekday: "Wed",
    title: "Sarangkot Annapurna Sunrise → Davis Falls → Board Night Bus to Border",
    subtitle: "Sunrise views over Annapurna range, visit local falls and cave, return overnight bus",
    overview: "Wake up early at 04:30 AM and take a shared taxi or hike up to the Sarangkot Sunrise Viewpoint. Witness the spectacular golden sunrise lighting up the snow-clad peaks of the Annapurna range, Dhaulagiri, and Machhapuchhre (Fishtail). Return to the hostel for breakfast. In the afternoon, visit Davis Falls (Patale Chhango) and the Gupteshwor Mahadev Cave located opposite the waterfall. Return to Lakeside to collect your luggage. In the evening (06:00 PM), board the overnight deluxe sleeper bus from Pokhara bus terminal directly back to the Sonauli border.",
    travel: "Hostel → Sarangkot (Taxi) → Davis Falls → Pokhara Bus Terminal → Overnight Bus to Border",
    travelMode: "Local Cab & Overnight Sleeper Bus",
    distance: "30 km Local + 260 km highway",
    travelTime: "1 Hour Local + 11 Hours overnight bus",
    estimatedCost: 1350,
    weather: "Cold morning at Sarangkot (12°C), pleasant day, cool night in bus",
    trekDistance: "1 km walk to viewpoint",
    highestAltitude: "1600m (Sarangkot Viewpoint)",
    stay: "Overnight Sleeper Bus",
    food: "Tea & snacks at Sarangkot (₹50), lunch at local Pokhara outlet (₹120), highway dinner (NPR 250 / ₹150)",
    notes: "Carry a flashlight/phone light for exploring the dark, damp passages inside Gupteshwor Mahadev Cave.",
    warnings: [
      "Carry warm clothes for Sarangkot morning viewpoint as it can get windy and cold",
      "Do not climb past safety barriers at Davis Falls due to strong water currents"
    ],
    packing: ["Light jacket/fleece", "Flashlight", "Comfortable walking shoes"],
    images: [],
    mapLink: "https://maps.google.com/?q=Sarangkot+Pokhara+Nepal",
    tips: [
      "Sarangkot entry fee is around NPR 60 (₹40). Check the weather forecast the night before; if it is foggy/cloudy, skip the early taxi and sleep in."
    ],
    photography: ["First light on Machhapuchhre peak", "Davis Falls churning water", "Inside Gupteshwor cave temple"],
    highlights: ["Sarangkot Annapurna range golden sunrise", "Davis Falls waterfall", "Mystical Gupteshwor Mahadev cave walk", "Deluxe return overnight bus run"],
    meals: ["Lakeside breakfast", "Pokhara local lunch", "Highway return dinner"],
    activities: [
      { time: "05:00 AM", title: "Sarangkot Sunrise", description: "Reach viewpoint, watch the orange glow paint the snow peaks" },
      { time: "11:30 AM", title: "Davis Falls & Cave", description: "Visit the cascading waterfall and enter the subterranean cave to view Shiva lingam" },
      { time: "06:00 PM", title: "Board Night Bus", description: "Depart from Pokhara terminal back to Sonauli border" }
    ],
    schedule: [
      { time: "04:30 AM", activity: "Taxi to Sarangkot Sunrise Viewpoint" },
      { time: "08:30 AM", activity: "Return to hostel for breakfast, pack bags" },
      { time: "11:30 AM", activity: "Explore Davis Falls and Gupteshwor Cave" },
      { time: "05:30 PM", activity: "Report at Pokhara bus terminal" },
      { time: "06:00 PM", activity: "Board overnight bus to Sonauli border" }
    ]
  },
  {
    id: 6,
    day: 6,
    date: "Day 6 — Thursday",
    weekday: "Thu",
    title: "Border Arrival → Bus to Gorakhpur → Train to New Delhi",
    subtitle: "Arrive border, clear immigration, bus to Gorakhpur, board evening sleeper train to Delhi",
    overview: "Arrive at Belahiya border around 05:30 AM. Cross border checkpoints back into India at Sonauli. Board a local bus or shared taxi to Gorakhpur Railway Station. Arrive in Gorakhpur by 10:30 AM. You have the afternoon free to visit Gorakhnath Temple or relax. In the evening, report at Gorakhpur Junction and board the overnight sleeper train (e.g. Gorakhdham Express) departing around 04:30 PM / 09:00 PM back to New Delhi. Arrive in Delhi on Friday morning.",
    travel: "Border → Gorakhpur (Local Bus) → Gorakhpur Junction → Delhi (Sleeper Train)",
    travelMode: "Local Bus & Sleeper Train",
    distance: "100 km (Bus) + 750 km (Train)",
    travelTime: "3 Hours (to Gorakhpur) + 13 Hours (to Delhi)",
    estimatedCost: 950,
    weather: "Warm and humid plains, 28°C to 34°C",
    trekDistance: "0.5 km border walk",
    highestAltitude: "216m",
    stay: "Overnight Sleeper Train",
    food: "Breakfast at Gorakhpur (₹60), lunch near station (₹120), train dinner (₹100)",
    notes: "Keep your Indian ID cards handy at Sonauli check-post as Indian border police perform routine baggage and ID inspections.",
    warnings: [
      "Allow extra time at the border as queues can occasionally get delayed during peak cargo truck clearance hours"
    ],
    packing: ["Indian currency cash", "Train travel snacks"],
    images: [],
    mapLink: "https://maps.google.com/?q=Gorakhpur+Railway+Station",
    tips: [
      "If you have several hours at Gorakhpur, visit the famous Gorakhnath Temple, which is just 4 km from the railway station."
    ],
    photography: ["Re-entering India at Sonauli checkpost", "Gorakhpur Junction station boards"],
    highlights: ["Sonauli border exit checks", "Gorakhnath Temple visit", "Sleeper train return ride"],
    meals: ["Gorakhpur thali", "Train snacks"],
    activities: [
      { time: "05:30 AM", title: "Cross Border", description: "Immigration checks, enter Sonauli border, board local bus to Gorakhpur" },
      { time: "11:00 AM", title: "Gorakhpur Reach", description: "Reach Gorakhpur railway station, store luggage in cloakroom" },
      { time: "04:30 PM", title: "Board Return Train", description: "Board overnight sleeper train back to New Delhi" }
    ],
    schedule: [
      { time: "05:30 AM", activity: "Cross border back to India, clear Sonauli immigration" },
      { time: "06:30 AM", activity: "Board local bus to Gorakhpur Junction" },
      { time: "10:30 AM", activity: "Arrive Gorakhpur, visit local spots or rest" },
      { time: "08:30 PM", activity: "Report at railway station, board train to Delhi" }
    ]
  }
];
