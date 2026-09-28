export const completedTrips = [
  {
    id: "spiti",
    type: "trip",
    typeLabel: "High Altitude Expedition",
    title: "Spiti Valley Expedition",
    subtitle: "Himachal Pradesh, India",
    description: "6-day high altitude overland circuit in Spiti Valley.",
    isCompleted: true,
    distanceKm: 1700,
    completedYear: 2026,
    spentTotal: 9964.00,
    transportMode: "Volvo Bus & Scooty",
    maxElevationMeters: 4520,
    maxElevationLabel: "4,520 m (14,830 ft)",
    majorSpots: ["Kaza", "Key Monastery", "Hikkim", "Komic", "Langza", "Dhankar", "Tabo", "Lepcha La Pass"],
    records: [
      { landmark: "Hikkim Post Office", record: "World's Highest Post Office", detail: "4,440 m (14,567 ft)", badge: "World Record", scope: "World" },
      { landmark: "Komic Village", record: "World's Highest Motorable Village", detail: "4,587 m (15,049 ft)", badge: "World Record", scope: "World" }
    ],
    stats: {
      duration: "6 Days (20 Aug – 25 Aug 2026)",
      distance: "1,700 km",
      budget: "₹9,964.00",
    },
    image: "/Spiti.jpg",
    expenses: [
      { category: "Food", description: "Food & Drinks", amount: 1750.00 },
      { category: "Transport", description: "Volvo / Transit Share", amount: 5670.00 },
      { category: "Accommodation", description: "Homestay / Hotel Stay", amount: 2550.00 },
      { category: "Activities", description: "Local Sightseeing & Permits", amount: 0.00 }
    ],
    plans: [
      {
        id: "spiti-done",
        title: "Completed High Altitude Expedition",
        duration: "6 Days (20 Aug – 25 Aug 2026)",
        route: "Sonipat → Manali → Kaza → Key Monastery → Hikkim → Komic → Langza → Dhankar → Tabo → Lepcha La Pass → Kaza → Manali → Sonipat",
        details: "6-day high altitude overland circuit in Spiti Valley.",
        budget: "₹9,964.00",
        path: "/spiti-plan1"
      }
    ]
  },
  {
    id: "rudranath-tungnath",
    tags: ["panch-kedar"],
    type: "trek",
    typeLabel: "High Altitude Trek",
    title: "Rudranath & Tungnath Trek",
    subtitle: "Uttarakhand, India",
    description: "Alpine valley trek visiting two sacred Panch Kedar temples (Rudranath & Tungnath) and Chandrashila Peak.",
    isCompleted: true,
    distanceKm: 1115,
    completedYear: 2026,
    spentTotal: 6850.00,
    transportMode: "Trekking & Bus",
    maxElevationMeters: 4000,
    maxElevationLabel: "4,000 m (13,123 ft)",
    majorSpots: ["Rudranath Temple", "Tungnath Temple", "Chandrashila Peak", "Chopta"],
    records: [
      { landmark: "Tungnath Temple", record: "World's Highest Shiva Temple", detail: "3,680 m (12,073 ft)", badge: "World Record", scope: "World" },
      { landmark: "Rudranath Temple", record: "Only Worshipped Face of Lord Shiva (Panch Kedar)", detail: "2,286 m (7,500 ft)", badge: "Sacred Distinction", scope: "India" },
    ],
    stats: {
      duration: "9 Days (2 Jul – 10 Jul 2026)",
      distance: "1,115 km",
      budget: "₹6,850.00"
    },
    image: "/rudranth.png",
    expenses: [
      { category: "Food", description: "Valley Meals & Tea Stalls", amount: 2150.00 },
      { category: "Transport", description: "Sonipat → Gopeshwar / Chopta Transit", amount: 2400.00 },
      { category: "Accommodation", description: "Ashram & Lodge Stays", amount: 1800.00 },
      { category: "Activities", description: "Pony / Guide / Permits", amount: 500.00 }
    ],
    plans: [
      {
        id: "rudranath-done",
        title: "Completed Panch Kedar Trek",
        duration: "9 Days (2 Jul – 10 Jul 2026)",
        route: "Hisar → Haridwar → Rishikesh → Gopeshwar → Sagar Village → Liti Bugyal → Panar Bugyal → Rudranath Temple → Chopta → Tungnath → Chandrashila → Rudraprayag → Haridwar → Hisar",
        details: "Trek through dense forests and bugyals to Rudranath and highest Shiva temple Tungnath.",
        budget: "₹6,850.00",
        path: "/rudranath-plan1"
      }
    ]
  },
  {
    id: "amritsar",
    type: "trip",
    typeLabel: "Quick Trip",
    title: "Amritsar Trip",
    subtitle: "Punjab, India",
    description: "Overnight bus trip from Sonipat departing 7 Nov 2025 at 8:00 PM, exploring Golden Temple and local street food, returning on 9 Nov 2025 at 9:00 AM.",
    isCompleted: true,
    distanceKm: 915,
    completedYear: 2025,
    spentTotal: 1570.05,
    transportMode: "Overnight Bus",
    maxElevationMeters: 230,
    maxElevationLabel: "230 m (754 ft)",
    majorSpots: ["Golden Temple", "Local Street Food", "Heritage Street"],
    records: [
      { landmark: "Golden Temple (Harmandir Sahib)", record: "World's Most Visited Sacred Shrine", detail: "100,000+ daily visitors & World's Largest Free Kitchen (Langar)", badge: "World Distinction", scope: "World" },
    ],
    stats: {
      duration: "3 Days (7 Nov – 9 Nov 2025)",
      distance: "915 km",
      budget: "₹1,570.05",
    },
    image: "/Amritsar.jpeg",
    expenses: [
      { category: "Food", description: "Meals & Street Food", amount: 200.00 },
      { category: "Transport (Bus)", description: "Sonipat → Amritsar Bus (7 Nov 2025, 8:00 PM)", amount: 429.05 },
      { category: "Transport (Bus)", description: "Amritsar → Sonipat Overnight Bus (8-9 Nov 2025)", amount: 421.00 },
      { category: "Local Transit", description: "Auto Rickshaw", amount: 20.00 },
      { category: "Accommodation", description: "Hotel Stay (1 Night)", amount: 500.00 },
    ],
    plans: [
      {
        id: "amritsar-done",
        title: "Completed Quick Trip",
        duration: "3 Days (7 Nov – 9 Nov 2025)",
        route: "Sonipat → Amritsar → Delhi → Sonipat",
        details: "Boarded 8:00 PM evening bus from Sonipat on 7 Nov 2025, full day exploring Amritsar with hotel stay, and return via Delhi to Sonipat.",
        budget: "₹1,570.05",
        path: "#",
      }
    ]
  },
  {
    id: "hisar",
    type: "trip",
    typeLabel: "Quick Trip",
    title: "Hisar Trip",
    subtitle: "Haryana, India",
    description: "3-day trip from Sonipat to Hisar (31 Oct – 3 Nov 2025), round-trip cab transit, riding local scooty borrowed from a friend, hotel stay, and shopping.",
    isCompleted: true,
    distanceKm: 310,
    completedYear: 2025,
    spentTotal: 5164.00,
    transportMode: "Cab & Scooty",
    maxElevationMeters: 215,
    maxElevationLabel: "215 m (705 ft)",
    majorSpots: ["Hisar", "Local Bazaars", "Scooty Exploration"],
    stats: {
      duration: "3 Days (31 Oct – 3 Nov 2025)",
      distance: "310 km",
      budget: "₹5,164.00",
    },
    image: "/Hisar.jpeg",
    expenses: [
      { category: "Intercity Transit", description: "Sonipat ↔ Hisar Cab (Round Trip)", amount: 700.00 },
      { category: "Fuel", description: "Petrol for Friend's Scooty", amount: 225.00 },
      { category: "Local Transport", description: "Auto Rickshaw", amount: 10.00 },
      { category: "Accommodation", description: "Hotel Stay (3 Days)", amount: 1377.50 },
      { category: "Shopping", description: "Local Shopping & Souvenirs", amount: 1700.00 },
      { category: "Food", description: "Meals & Refreshments", amount: 1100.00 },
      { category: "Miscellaneous", description: "Miscellaneous Expenses", amount: 51.50 },
    ],
    plans: [
      {
        id: "hisar-done",
        title: "Completed Quick Trip",
        duration: "3 Days (31 Oct – 3 Nov 2025)",
        route: "Sonipat → Hisar → Sonipat",
        details: "Departed Sonipat on 31 Oct 2025 evening via cab, explored Hisar on a friend's scooty, stayed 3 days in hotel, and returned to Sonipat on 3 Nov 2025 morning.",
        budget: "₹5,164.00",
        path: "#",
      }
    ]
  },
  {
    id: "mussoorie-dehradun",
    type: "trip",
    typeLabel: "Road Expedition",
    title: "Mussoorie, Landour, Dehradun & Tehri Trip",
    subtitle: "Uttarakhand, India",
    description: "Rented car road trip (23 Jan – 26 Jan 2026) covering Dehradun, Mussoorie hill station, serene Landour, water sports at Tehri Dam & Lake.",
    isCompleted: true,
    distanceKm: 650,
    completedYear: 2026,
    spentTotal: 8637.00,
    transportMode: "Rented Car",
    maxElevationMeters: 2250,
    maxElevationLabel: "2,250 m (7,380 ft)",
    majorSpots: ["Dehradun", "Mussoorie Mall Road", "Landour Bakehouse", "Tehri Dam & Lake"],
    records: [
      { landmark: "Tehri Dam", record: "India's Highest Dam (12th Highest in the World)", detail: "Height: 260.5 m (855 ft)", badge: "India Record", scope: "India" },
    ],
    stats: {
      duration: "4 Days (23 Jan – 26 Jan 2026)",
      distance: "650 km",
      budget: "₹8,637.00",
    },
    image: "/Mussorie.jpeg",
    expenses: [
      { category: "Rented Car", description: "Car (Rent + Fuel + Toll + Parking)", amount: 2692.50 },
      { category: "Car Damage", description: "Car Damage Fine / Repair Share", amount: 3000.00 },
      { category: "Activities", description: "Tehri Lake Water Sports & Activities", amount: 1500.00 },
      { category: "Accommodation", description: "Hotel Stay", amount: 1097.50 },
      { category: "Food & Drinks", description: "Meals, Beverages & Snacks", amount: 347.00 },
    ],
    plans: [
      {
        id: "mussoorie-done",
        title: "Completed Road Expedition",
        duration: "4 Days (23 Jan – 26 Jan 2026)",
        route: "Sonipat → Dehradun → Mussoorie → Landour → Dehradun → Tehri → Dehradun → Sonipat",
        details: "Rented self-drive car circuit departing 3:00 PM on 23 Jan 2026, exploring Dehradun, Mussoorie Mall Road, Landour Bakehouse, water sports at Tehri Lake, returning 11:00 AM on 26 Jan 2026.",
        budget: "₹8,637.00",
        path: "#",
      }
    ]
  },
  {
    id: "manali-sissu-circuit",
    type: "trip",
    typeLabel: "Scooty Expedition",
    title: "Manali, Kasol, Sethan, Lahaul & Sissu Circuit",
    subtitle: "Himachal Pradesh, India",
    description: "5-day expedition (26 Nov – 1 Dec 2025) exploring Kasol, Kullu, Manali, Shuru, Sethan (Igloo Village), Whisper Valley, Sajla Waterfall, Atal Tunnel, Lahaul Valley & Sissu via RedBus and 3 days scooty rental.",
    isCompleted: true,
    distanceKm: 1340,
    completedYear: 2025,
    spentTotal: 4192.50,
    transportMode: "Volvo Bus & Scooty",
    maxElevationMeters: 3200,
    maxElevationLabel: "3,200 m (10,500 ft)",
    majorSpots: ["Kasol", "Sethan (Igloo Village)", "Sajla Waterfall", "Atal Tunnel", "Sissu (Lahaul)"],
    records: [
      { landmark: "Atal Tunnel (Rohtang)", record: "World's Longest Highway Tunnel Above 10,000 ft", detail: "9.02 km long at 3,048 m elevation", badge: "World Record", scope: "World" },
      { landmark: "Sethan Village", record: "India's First & Only Igloo Village", detail: "2,700 m elevation", badge: "India Record", scope: "India" },
    ],
    stats: {
      duration: "5 Days (26 Nov – 1 Dec 2025)",
      distance: "1,340 km",
      budget: "₹4,192.50",
    },
    image: "/Manali.jpeg",
    expenses: [
      { category: "Intercity Transit", description: "Bus to Manali (26 Nov) [Shared]", amount: 424.00 },
      { category: "Food & Snacks", description: "Blinkit (26 Nov) [Shared]", amount: 191.00 },
      { category: "Food & Snacks", description: "Dew (26 Nov) [Shared]", amount: 50.00 },
      { category: "Food", description: "Paranthe (27 Nov) [Shared]", amount: 50.00 },
      { category: "Fuel", description: "Scooty Petrol (27 Nov) [Shared]", amount: 405.00 },
      { category: "Scooty Rental", description: "Scooty Rent (27 Nov) [Shared]", amount: 1000.00 },
      { category: "Accommodation", description: "Hotel in Manali (27–30 Nov) [Shared]", amount: 764.50 },
      { category: "Food", description: "Momos & Laping (27 Nov) [Shared]", amount: 80.00 },
      { category: "Local Transit", description: "Cab Pvt Bus Stand To Scooty (27 Nov) [Shared]", amount: 50.00 },
      { category: "Food", description: "Sidu, Chowmein & Angoori Gulab Jamun, Kurkure (28 Nov) [Shared]", amount: 130.00 },
      { category: "Food", description: "Paranthe & Tea (28 Nov) [Shared]", amount: 60.00 },
      { category: "Food", description: "Paranthe (29 Nov) [Shared]", amount: 75.00 },
      { category: "Food", description: "Momos (29 Nov) [Shared]", amount: 100.00 },
      { category: "Food", description: "Chowmein HeatUp (30 Nov) [Shared]", amount: 15.00 },
      { category: "Accommodation", description: "Late CheckOut (30 Nov) [Shared]", amount: 50.00 },
      { category: "Food", description: "Tea & Fan (30 Nov) [Shared]", amount: 35.00 },
      { category: "Food", description: "Paranthe (30 Nov) [Shared]", amount: 75.00 },
      { category: "Intercity Transit", description: "Bus to Delhi (30 Nov) [Shared]", amount: 561.00 },
      { category: "Local Transit", description: "Auto Sonipat to College (1 Dec) [Shared]", amount: 10.00 },
      { category: "Intercity Transit", description: "Bus Delhi to Sonipat (1 Dec) [Shared]", amount: 67.00 }
    ],
    plans: [
      {
        id: "manali-sissu-done",
        title: "Completed Circuit Expedition",
        duration: "5 Days (26 Nov – 1 Dec 2025)",
        route: "Sonipat → Manali → Shuru → Sethan → Whisper Valley → Sajla Waterfall → Atal Tunnel → Lahaul → Sissu → Koksar → Shuru → Kullu → Kasol → Manali → Sonipat",
        details: "Departed 26 Nov 8:00 PM via RedBus, rented scooty for 3 days exploring Kasol, Kullu, Manali, Shuru, Sethan, Sajla Waterfall, Atal Tunnel, Lahaul & Sissu, 3 nights hotel stay, returning 1 Dec 8:00 AM.",
        budget: "₹4,192.50",
        path: "#",
      }
    ]
  },
  {
    id: "jaipur-heritage",
    type: "trip",
    typeLabel: "Heritage Trip",
    title: "Jaipur Heritage Trip",
    subtitle: "Rajasthan, India",
    description: "Cultural heritage trip from Sonipat (9 Jan – 12 Jan 2026) exploring Pink City forts, local bazaars, food, and sightseeing using bus, train, metro & scooty.",
    isCompleted: true,
    distanceKm: 550,
    completedYear: 2026,
    spentTotal: 5631.50,
    transportMode: "Train, Metro & Scooty",
    maxElevationMeters: 430,
    maxElevationLabel: "430 m (1,410 ft)",
    majorSpots: ["Nahargarh Fort", "Hawa Mahal & Bazaars", "Scooty & Metro Circuit"],
    records: [
      { landmark: "Hawa Mahal", record: "World's Tallest Building Without a Foundation", detail: "5-storey honeycomb lattice with 953 jharokhas", badge: "World Distinction", scope: "World" },
    ],
    stats: {
      duration: "4 Days (9 Jan – 12 Jan 2026)",
      distance: "550 km",
      budget: "₹5,631.50",
    },
    image: "/Jaipur.jpeg",
    expenses: [
      { category: "Shopping", description: "Perfume (₹750), Shoes (₹1,650) & Zombie Ride (₹200)", amount: 2600.00 },
      { category: "Stay", description: "Hotel / Guesthouse Accommodation", amount: 759.50 },
      { category: "Food", description: "Meals & Local Dining", amount: 738.00 },
      { category: "Public Transport", description: "Bus (₹70 + ₹200), Train (₹135), Auto (₹60), Metro (₹15) & Parking (₹20)", amount: 500.00 },
      { category: "Scooty & Fuel", description: "Local Scooty Rental & Petrol", amount: 330.00 },
      { category: "Alcohol", description: "Beverages & Drinks", amount: 280.00 },
      { category: "Snacks", description: "Street Food & Snacks", amount: 232.00 },
      { category: "Sightseeing", description: "Fort & Monument Entry Tickets", amount: 192.00 },
    ],
    plans: [
      {
        id: "jaipur-done",
        title: "Completed Heritage Trip",
        duration: "4 Days (9 Jan – 12 Jan 2026)",
        route: "Sonipat → Delhi → Jaipur → Sonipat",
        details: "Budget cultural trip from Sonipat departing 12:00 PM on 9 Jan 2026, local scooty & metro transit in Jaipur, exploring forts, bazaar shopping, local snacks, and street food, returning 8:00 AM on 12 Jan 2026.",
        budget: "₹5,631.50",
        path: "#",
      }
    ]
  },
  {
    id: "vrindavan-family",
    type: "trip",
    typeLabel: "Family Pilgrimage",
    title: "Vrindavan Family Pilgrimage",
    subtitle: "Uttar Pradesh, India",
    description: "Family pilgrimage from Hisar to Vrindavan (10 Jul – 11 Jul 2026) visiting Bankey Bihari Temple, Prem Mandir & Nidhivan with personal expense fully covered by family.",
    isCompleted: true,
    distanceKm: 490,
    completedYear: 2026,
    spentTotal: 0.00,
    transportMode: "Family Car",
    maxElevationMeters: 170,
    maxElevationLabel: "170 m (557 ft)",
    majorSpots: ["Bankey Bihari Temple", "Prem Mandir", "Nandgaon", "Mathura"],
    records: [
    ],
    stats: {
      duration: "2 Days (10 Jul – 11 Jul 2026)",
      distance: "490 km",
      budget: "₹0.00",
    },
    image: "/Vrindavan.png",
    expenses: [
      { category: "Family Covered", description: "Transits, Accommodation & Meals (Paid by Family)", amount: 0.00 },
    ],
    plans: [
      {
        id: "vrindavan-done",
        title: "Completed Family Pilgrimage",
        duration: "2 Days (10 Jul – 11 Jul 2026)",
        route: "Hisar → Mathura → Nandgaon → Vrindavan → Hisar",
        details: "Departed Hisar 10:00 PM on 10 Jul 2026 with family, visited Bankey Bihari Temple, Prem Mandir, Nandgaon & local ashrams, returning 9:00 PM on 11 Jul 2026. Personal expense: ₹0.",
        budget: "₹0.00",
        path: "#",
      }
    ]
  },
  {
    id: "varanasi",
    type: "jyotirlinga",
    typeLabel: "Jyotirlinga Yatra",
    title: "Kashi Vishwanath Jyotirlinga Yatra",
    subtitle: "Uttar Pradesh, India",
    description: "Sacred pilgrimage to Kashi Vishwanath Jyotirlinga along the Ganges in Varanasi.",
    isCompleted: true,
    distanceKm: 1600,
    completedYear: 2026,
    spentTotal: 3124.00,
    transportMode: "Sleeper Train",
    maxElevationMeters: 80,
    maxElevationLabel: "80 m (262 ft)",
    majorSpots: ["Kashi Vishwanath Jyotirlinga", "Ganga Ghat Aarti"],
    records: [
      { landmark: "Kashi Vishwanath & Varanasi Ghats", record: "World's Oldest Living Sacred City", detail: "Ancient Jyotirlinga & 84 Ganges Ghats", badge: "Global Heritage", scope: "World" },
    ],
    stats: {
      duration: "5 Days (20 Sep – 24 Sep 2026)",
      distance: "1,600 km",
      budget: "₹3,124.00",
    },
    image: "/varanasi.jpeg",
    expenses: [
      { category: "Transportation", description: "Sleeper train round trip, local autos & e-rickshaws", amount: 1280.00 },
      { category: "Food & Meals", description: "Meals, Banarasi kachori, tea & street food", amount: 1113.00 },
      { category: "Accommodation", description: "Hostel / Guesthouse stay in Varanasi (2 Nights)", amount: 476.00 },
      { category: "Shopping", description: "Local Banarasi shopping & souvenirs", amount: 185.00 },
      { category: "Other", description: "Miscellaneous local expenses", amount: 70.00 }
    ],
    plans: [
      {
        id: "varanasi-done",
        title: "Completed Jyotirlinga Yatra",
        duration: "5 Days (20 Sep – 24 Sep 2026)",
        route: "Delhi → Varanasi → Sarnath → Delhi",
        details: "5-day spiritual pilgrimage from Delhi to Kashi Vishwanath, Dashashwamedh Aarti, Sarnath, and Ganga Ghats.",
        budget: "₹3,124.00",
        path: "/varanasi"
      }
    ]
  }
];
