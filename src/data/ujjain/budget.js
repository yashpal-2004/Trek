import { ujjainAmounts } from "./amounts";

export const budget = {
  total: ujjainAmounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Buses",
      amount: ujjainAmounts.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Direct Sonipat-Ujjain AC Sleeper bus round trip + local auto-rickshaw fares",
      subItems: [
        { name: "Sonipat-Ujjain AC Sleeper Bus Round Trip (₹1,200 each way)", price: ujjainAmounts.transportFares.busRoundTrip },
        { name: "Local E-Rickshaws & Autos in Ujjain", price: ujjainAmounts.transportFares.localTransit }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: ujjainAmounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Comfortable hotel room near Mahakal Mandir (1 Night)",
      subItems: [
        { name: "Ujjain Hotel Stay (1 Night @ ₹600/person double-sharing)", price: ujjainAmounts.accommodationCategory }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: ujjainAmounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Local Malwai street food, dhaba thalis & snacks",
      subItems: [
        { name: "3 Days Meals & Prasad (₹300/day per person)", price: ujjainAmounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Pooja & Prasad Buffer",
      amount: ujjainAmounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Mahakal VIP ticket, Prasad boxes & emergency funds",
      subItems: [
        { name: "Mahakal VIP Darshan Ticket & Prasad", price: 250 },
        { name: "Emergency Buffer cash", price: 50 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 1200, label: "Friday Night — Board overnight bus from Sonipat" },
    { day: 1, amount: 1250, label: "Saturday — Arrive Ujjain, check in, Mahakal temple darshan & Aarti" },
    { day: 2, amount: 850,  label: "Sunday — Kal Bhairav, Mangalnath, local shopping & board return bus" },
    { day: 3, amount: 1200, label: "Monday Morning — Arrive back in Sonipat" }
  ],
  calculatorDefaults: ujjainAmounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Mahakal Temple Area",
    name: "Hotel Mahakal Palace",
    image: "/mountain_clay_peak.png",
    budget: 600,
    mid: 1000,
    premium: 1800,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Air Conditioning", "Hot water supply", "5 mins walk to temple entrance"],
    pros: ["Very close to the main temple complex", "Acclimatized clean rooms"],
    cons: ["Heavy traffic area; autos stop slightly away during peak hours"],
    tips: "Walk to the temple for early morning Bhasma Aarti to avoid transport delays",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Mahakaleshwar+Temple+Ujjain",
    type: "Hotel",
    pricePerNight: 600,
    location: "Ujjain",
    nights: 1,
    hotels: [
      { name: "Standard AC Double Room (per person)", price: 600 },
      { name: "Deluxe Family Suite", price: 1000 }
    ]
  }
];
