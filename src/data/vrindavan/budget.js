import { vrindavanAmounts as amounts } from "./amounts";

const budgetTotal =
  amounts.transport.train +
  amounts.transport.localAuto +
  amounts.transport.misc +
  amounts.accommodation.ashram +
  amounts.food.meals +
  amounts.food.snacks +
  amounts.misc.templePrasad +
  amounts.misc.mathurapeda +
  amounts.misc.shopping;

export const budget = {
  total: budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation",
      amount: amounts.transport.train + amounts.transport.localAuto + amounts.transport.misc,
      color: "#2563EB",
      icon: "Bus",
      description: "Train round trip + E-rickshaws in Vrindavan & Mathura",
      subItems: [
        { name: "Train Round Trip (Sonipat–Mathura)", price: amounts.transport.train },
        { name: "Local E-Rickshaw / Tempo", price: amounts.transport.localAuto },
        { name: "Misc Transport", price: amounts.transport.misc }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: amounts.accommodation.ashram,
      color: "#10B981",
      icon: "Bed",
      description: "Ashram / Dharamshala stay in Vrindavan",
      subItems: [
        { name: "Ashram / Dharamshala (1 Night)", price: amounts.accommodation.ashram }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: amounts.food.meals + amounts.food.snacks,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Pure vegetarian meals and street food",
      subItems: [
        { name: "Veg Meals (Breakfast / Lunch / Dinner)", price: amounts.food.meals },
        { name: "Street Food (Kachori, Lassi, Peda)", price: amounts.food.snacks }
      ]
    },
    {
      id: "emergency",
      label: "Prasad, Peda & Shopping",
      amount: amounts.misc.templePrasad + amounts.misc.mathurapeda + amounts.misc.shopping,
      color: "#8B5CF6",
      icon: "MapPin",
      description: "Temple prasad, famous Mathura Peda, and local souvenirs",
      subItems: [
        { name: "Temple Prasad / Offerings", price: amounts.misc.templePrasad },
        { name: "Mathura Peda (Famous Sweet Box)", price: amounts.misc.mathurapeda },
        { name: "Souvenirs & Shopping", price: amounts.misc.shopping }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 200, label: "Day 0 — Board early morning train from Sonipat" },
    { day: 1, amount: 1500, label: "Day 1 — Arrive Mathura, explore Vrindavan temples & Govardhan" },
    { day: 2, amount: 800, label: "Day 2 — Morning Yamuna Aarti, Mathura tour & return train" }
  ],
  calculatorDefaults: {
    transport: amounts.transport.train + amounts.transport.localAuto + amounts.transport.misc,
    accommodation: amounts.accommodation.ashram,
    food: amounts.food.meals + amounts.food.snacks,
    emergency: amounts.misc.templePrasad + amounts.misc.mathurapeda + amounts.misc.shopping
  },
};

export const stayOptions = [
  {
    id: 1,
    destination: "Vrindavan",
    name: "ISKCON Guesthouse / Dharamshala",
    image: "/mountain_clay_peak.png",
    budget: 300,
    mid: 700,
    premium: 1500,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Pure Vegetarian Food", "Temple Access", "Clean Rooms"],
    pros: ["Very affordable", "Spiritual environment", "Close to Banke Bihari Temple"],
    cons: ["Basic amenities", "Strict no non-veg / alcohol policy"],
    tips: "Book in advance during Janmashtami & Holi — rooms fill up very fast.",
    rating: 4.3,
    mapLink: "#",
    type: "Ashram / Dharamshala",
    pricePerNight: 300,
    location: "Vrindavan",
    nights: 1,
    hotels: [
      { name: "Dormitory (Dharamshala)", price: 150 },
      { name: "Private Room (Ashram)", price: 400 }
    ]
  }
];

export const accommodationBreakdown = [
  {
    day: 1,
    location: "Vrindavan",
    stay: "ISKCON Guesthouse / Dharamshala",
    type: "Ashram / Dharamshala",
    price: 300,
    details: "Check-in after afternoon arrival. Close to Banke Bihari and Prem Mandir temples."
  }
];
