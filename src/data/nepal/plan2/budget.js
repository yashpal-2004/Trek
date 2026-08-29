import { nepalAmounts } from "./amounts";

export const budget = {
  total: nepalAmounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Rent",
      amount: nepalAmounts.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Delhi-Gorakhpur train + border bus + Kathmandu/Pokhara shared scooty rental & fuel",
      subItems: [
        { name: "Delhi-Gorakhpur Sleeper Train (Round Trip)", price: 1000 },
        { name: "Gorakhpur to Sonauli Border Bus (Round Trip)", price: 300 },
        { name: "Sonauli Border to Kathmandu local bus", price: 500 },
        { name: "Kathmandu to Pokhara Bus", price: 600 },
        { name: "Pokhara to Sonauli Border Bus", price: 650 },
        { name: "Local Scooty Rental in Nepal (4 days shared @ ₹300/day per person)", price: 1200 },
        { name: "Scooty Petrol (4 days shared @ ₹150/day per person)", price: 600 }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: nepalAmounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Comfortable hostels or budget homestays in Kathmandu and Pokhara (4 Nights)",
      subItems: [
        { name: "Kathmandu Hostel stay (2 Nights @ ₹300/night)", price: 600 },
        { name: "Pokhara Hostel stay (2 Nights @ ₹350/night)", price: 700 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: nepalAmounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Nepalese Dal Bhat, Momos, local street food & tea",
      subItems: [
        { name: "6 Days Meals (Average ₹300/day per person)", price: 1800 }
      ]
    },
    {
      id: "emergency",
      label: "Permits & Buffer",
      amount: nepalAmounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Pokhara entry tickets, temple entries & emergency cash buffer",
      subItems: [
        { name: "Local sight entry fees & permits", price: 300 },
        { name: "Emergency cash buffer", price: 200 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 500, label: "Day 0 — Board evening train from New Delhi to Gorakhpur" },
    { day: 1, amount: 800, label: "Day 1 — Arrive Gorakhpur, bus to Sonauli, cross border, bus to Kathmandu (overnight)" },
    { day: 2, amount: 2000, label: "Day 2 — Arrive Kathmandu, check in, rent scooty, visit Pashupatinath & Boudhanath Stupa" },
    { day: 3, amount: 1200, label: "Day 3 — Swayambhunath (Monkey Temple) & Kathmandu Durbar Square on rented scooty" },
    { day: 4, amount: 1850, label: "Day 4 — Bus to Pokhara, check in hostel, rent Pokhara lakeside scooty, ride Phewa Lake" },
    { day: 5, amount: 1650, label: "Day 5 — Ride scooty to Sarangkot for sunrise, visit Davis Falls & return Pokhara terminal" },
    { day: 6, amount: 950, label: "Day 6 — Cross border to Gorakhpur, board evening sleeper train to Delhi" }
  ],
  calculatorDefaults: nepalAmounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Kathmandu & Pokhara",
    name: "Zostel / local Backpackers Hostels",
    image: "/mountain_clay_peak.png",
    budget: 300,
    mid: 600,
    premium: 1200,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Free Wi-Fi", "Hot showers", "Common room & lockers"],
    pros: ["Super cheap", "Great community of travelers", "Walkable distance to markets"],
    cons: ["Shared dorm rooms"],
    tips: "Book Zostel Kathmandu in Thamel and local Pokhara hostels online in advance",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Thamel+Kathmandu+Nepal",
    type: "Hostel",
    pricePerNight: 325,
    location: "Nepal",
    nights: 4,
    hotels: [
      { name: "Kathmandu Dorm Bed (per night)", price: 300 },
      { name: "Pokhara Dorm Bed (per night)", price: 350 }
    ]
  }
];
