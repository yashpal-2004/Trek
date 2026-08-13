import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan1;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Rental",
      amount: data.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Sonipat-Delhi local + Delhi-Manali Volvo AC bus round trip + Royal Enfield Himalayan rental (4 Days) + Fuel",
      subItems: [
        { name: "Sonipat \u2192 Delhi Local Bus/Train (each way)", price: data.transportFares.sonipatDelhiLocal },
        { name: "Delhi-Manali Volvo Bus Round Trip (\u20b9600 each way)", price: data.transportFares.volvoRoundTrip },
        { name: "Royal Enfield Himalayan Bike Rental (4 Days)", price: data.transportFares.bikeRentalPerPerson },
        { name: "Himalayan Fuel (Manali + Spiti ~840 km)", price: data.transportFares.bikeFuelPerPerson },
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: data.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Kaza Spiti Homestay with meals (2 Nights) + Chandratal Camps (1 Night)",
      subItems: [
        { name: "Kaza Spiti Homestay with meals (2 Nights @ \u20b9850/person)", price: 1700 },
        { name: "Chandratal Camps (1 Night @ \u20b9900/person)", price: 900 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: data.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Highway dhabas, Kaza cafes, and camp meals (5 days @ \u20b9350/day)",
      subItems: [
        { name: "5 Days Meals & Snacks (\u20b9350/day per person)", price: 1750 }
      ]
    },
    {
      id: "emergency",
      label: "Permits & Buffer",
      amount: data.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Green Fee permit, entry fees, and emergency cash buffer",
      subItems: [
        { name: "Green Permit & Entry Fees", price: data.calcDefaults.permits },
        { name: "Emergency Buffer", price: data.calcDefaults.emergency }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 900,  label: "20 Aug \u2014 Sonipat \u2192 Delhi \u2192 Board Volvo Bus to Manali" },
    { day: 1, amount: 2200, label: "21 Aug \u2014 Arrive Manali \u2192 Pick up Himalayan \u2192 Ride to Kaza via Kunzum Pass" },
    { day: 2, amount: 1200, label: "22 Aug \u2014 Kaza \u2192 Key \u2192 Chicham \u2192 Hikkim \u2192 Komic \u2192 Langza" },
    { day: 3, amount: 1900, label: "23 Aug \u2014 Kaza \u2192 Kunzum Pass \u2192 Chandratal Lake Camping" },
    { day: 4, amount: 1650, label: "24 Aug \u2014 Chandratal \u2192 Manali \u2192 Return Himalayan \u2192 Evening Volvo Bus" },
    { day: 5, amount: 200,  label: "25 Aug \u2014 Arrive Delhi \u2192 Return to Sonipat" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Kaza Village Homestay",
    name: "Kaza Village Homestay",
    image: "/mountain_clay_peak.png",
    budget: 850,
    mid: 1400,
    premium: 2200,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Home cooked local thali", "Solar heated water", "Jio / BSNL 4G"],
    pros: ["Authentic Spitian hospitality", "Warm homestyle dinner included"],
    cons: ["Water supply via buckets during cold mornings"],
    tips: "Hydrate well and enjoy hot barley butter tea with local family",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Kaza",
    type: "Homestay",
    pricePerNight: 850,
    location: "Kaza",
    nights: 2,
    hotels: [
      { name: "Kaza Traditional Spiti Homestay (with meals)", price: 850 },
      { name: "Sakya Abode Guest House", price: 1400 }
    ]
  },
  {
    id: 2,
    destination: "Chandratal Lake Camps",
    name: "Chandratal Swiss Tents & Camps",
    image: "/mountain_clay_peak.png",
    budget: 900,
    mid: 1500,
    premium: 2500,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Attached chemical toilets", "Warm quilts & sleeping bags", "Hot water buckets"],
    pros: ["Stunning view of stars", "Located 3km from lake basin"],
    cons: ["Extremely cold night temperatures", "No electricity (generators run 7pm - 10pm)"],
    tips: "Bring your warmest jacket and do not drink alcohol at this altitude",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Chandratal+Lake",
    type: "Camping",
    pricePerNight: 900,
    location: "Chandratal",
    nights: 1,
    hotels: [
      { name: "Standard Swiss Camps (dinner & breakfast included)", price: 900 },
      { name: "Parasol Camps Chandratal", price: 1500 }
    ]
  }
];
