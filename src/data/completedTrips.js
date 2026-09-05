export const completedTrips = [
  {
    id: "spiti",
    type: "trip",
    typeLabel: "High Altitude Expedition",
    title: "Spiti Valley Expedition",
    subtitle: "Himachal Pradesh, India",
    description: "6-day high altitude overland circuit in Spiti Valley.",
    isCompleted: true,
    spentTotal: 9964.00,
    stats: {
      duration: "6 Days (20 Aug – 25 Aug 2026)",
      distance: "Overland Circuit",
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
        route: "Sonipat → Manali directly → Kaza (3 Nights Base) → Key Monastery → Hikkim → Komic → Langza → Chandratal Lake → Manali → Sonipat",
        details: "6-day high altitude overland circuit in Spiti Valley.",
        budget: "₹9,964.00",
        path: "#"
      }
    ]
  },
  {
    id: "rudranath-tungnath",
    tags: ["panch-kedar"],
    type: "trip",
    typeLabel: "High Altitude Trek",
    title: "Rudranath & Tungnath Trek",
    subtitle: "Uttarakhand, India",
    description: "Alpine valley trek visiting two sacred Panch Kedar temples (Rudranath & Tungnath) and Chandrashila Peak.",
    isCompleted: true,
    spentTotal: 6850.00,
    stats: {
      duration: "9 Days (2 Jul – 10 Jul 2026)",
      distance: "Foot Trail Trekking",
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
        route: "Sonipat → Rishikesh → Gopeshwar → Sagar Village → Liti Bugyal → Panar Bugyal → Rudranath Temple → Mandal → Chopta → Tungnath → Chandrashila → Sonipat",
        details: "Trek through dense forests and bugyals to Rudranath and highest Shiva temple Tungnath.",
        budget: "₹6,850.00",
        path: "#"
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
    spentTotal: 1570.05,
    stats: {
      duration: "3 Days (7 Nov – 9 Nov 2025)",
      distance: "Local Transit",
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
        route: "Sonipat (7 Nov 8:00 PM Bus) → Amritsar → Sonipat (9 Nov 9:00 AM Arrival)",
        details: "Boarded 8:00 PM evening bus from Sonipat on 7 Nov 2025, full day exploring Amritsar with hotel stay, and overnight return bus arriving in Sonipat on 9 Nov 2025 by 9:00 AM.",
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
    spentTotal: 5164.00,
    stats: {
      duration: "3 Days (31 Oct – 3 Nov 2025)",
      distance: "Friend's Scooty",
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
        route: "Sonipat (31 Oct Evening Cab) → Hisar (Scooty Exploration) → Sonipat (3 Nov 9:00 AM Return Cab)",
        details: "Departed Sonipat on 31 Oct 2025 evening via round-trip cab, explored Hisar on a friend's scooty, stayed 3 days in hotel, and returned to Sonipat on 3 Nov 2025 morning.",
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
    spentTotal: 8637.00,
    stats: {
      duration: "4 Days (23 Jan – 26 Jan 2026)",
      distance: "Rented Car Circuit",
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
        route: "Sonipat (23 Jan 2026 3:00 PM) → Dehradun → Mussoorie → Landour → Tehri → Sonipat (26 Jan 2026 11:00 AM)",
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
    spentTotal: 4192.50,
    stats: {
      duration: "5 Days (26 Nov – 1 Dec 2025)",
      distance: "3 Days Scooty",
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
        route: "Sonipat (26 Nov 8:00 PM RedBus) → Kullu → Kasol → Manali → Shuru → Sethan → Whisper Valley → Sajla Waterfall → Atal Tunnel → Lahaul → Sissu → Sonipat (1 Dec 8:00 AM)",
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
    spentTotal: 5631.50,
    stats: {
      duration: "4 Days (9 Jan – 12 Jan 2026)",
      distance: "Scooty & Public Transit",
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
        route: "Sonipat (9 Jan 12:00 PM) → Delhi (Train/Bus) → Jaipur (Metro, Auto & Scooty Exploration) → Sonipat (12 Jan 8:00 AM)",
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
    spentTotal: 0.00,
    stats: {
      duration: "2 Days (10 Jul – 11 Jul 2026)",
      distance: "Family Transit",
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
        route: "Hisar (10 Jul 10:00 PM) → Mathura → Vrindavan → Hisar (11 Jul 9:00 PM)",
        details: "Departed Hisar 10:00 PM on 10 Jul 2026 with family, visited Bankey Bihari Temple, Prem Mandir & local ashrams, returning 9:00 PM on 11 Jul 2026. Personal expense: ₹0.",
        budget: "₹0.00",
        path: "#",
      }
    ]
  }
];
