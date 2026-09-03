import { amounts } from "./amounts";

const budgetTotal = amounts.transport.train + amounts.transport.localAuto + amounts.transport.boatRide + amounts.accommodation.hostel + amounts.food.meals + amounts.food.snacks + amounts.misc.templePrasad + amounts.misc.sarnathEntry + amounts.misc.shopping;

export const budget = {
  total: budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation",
      amount: amounts.transport.train + amounts.transport.localAuto + amounts.transport.boatRide,
      color: "#2563EB",
      icon: "Bus",
      description: "Sleeper train round trip + local e-rickshaws",
      subItems: [
        { name: "Sleeper Train Round Trip", price: amounts.transport.train },
        { name: "Local E-Rickshaws & Autos", price: amounts.transport.localAuto },
        { name: "Ganga Boat Ride", price: amounts.transport.boatRide }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: amounts.accommodation.hostel,
      color: "#10B981",
      icon: "Bed",
      description: "Hostel/Ashram stays for 2 nights",
      subItems: [
        { name: "Hostel/Ashram Stay (2 Nights)", price: amounts.accommodation.hostel }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: amounts.food.meals + amounts.food.snacks,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Meals and local street food",
      subItems: [
        { name: "Meals (Breakfast/Lunch/Dinner)", price: amounts.food.meals },
        { name: "Street Food (Lassi, Kachori, Sweets)", price: amounts.food.snacks }
      ]
    },
    {
      id: "emergency",
      label: "Prasad, Entry & Misc",
      amount: amounts.misc.templePrasad + amounts.misc.sarnathEntry + amounts.misc.shopping,
      color: "#8B5CF6",
      icon: "MapPin",
      description: "Temple prasad, Sarnath entry and local shopping",
      subItems: [
        { name: "Temple Prasad", price: amounts.misc.templePrasad },
        { name: "Sarnath Entry Fee", price: amounts.misc.sarnathEntry },
        { name: "Local Shopping", price: amounts.misc.shopping }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 400, label: "Friday Night — Board sleeper train" },
    { day: 1, amount: 1500, label: "Saturday — Hostel check-in, Kashi Vishwanath Darshan, Aarti & Boat Ride" },
    { day: 2, amount: 1200, label: "Sunday — Sarnath excursion, local shopping, board return train" },
    { day: 3, amount: 400, label: "Monday Morning — Arrive back in Delhi" }
  ],
  calculatorDefaults: {
    transport: amounts.transport.train + amounts.transport.localAuto + amounts.transport.boatRide,
    accommodation: amounts.accommodation.hostel,
    food: amounts.food.meals + amounts.food.snacks,
    emergency: amounts.misc.templePrasad + amounts.misc.sarnathEntry + amounts.misc.shopping
  },
};

export const stayOptions = [
  {
    id: 1,
    destination: "Assi Ghat / Godowlia",
    name: "Zostel / Backpacker Hostel",
    image: "/mountain_clay_peak.png",
    budget: 300,
    mid: 800,
    premium: 1500,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Free Wi-Fi", "Locker facility", "Rooftop Cafe"],
    pros: ["Very cheap", "Meet other travelers", "Close to Assi Ghat"],
    cons: ["Dormitory sharing", "Shared washrooms"],
    tips: "Book early during festive seasons.",
    rating: 4.6,
    mapLink: "#",
    type: "Hostel",
    pricePerNight: 300,
    location: "Varanasi",
    nights: 2,
    hotels: [
      { name: "Standard Dorm Bed", price: 300 },
      { name: "Private Double Room", price: 800 }
    ]
  }
];

export const accommodationBreakdown = [
  {
    day: 1,
    location: "Varanasi (Assi Ghat/Godowlia)",
    stay: "Zostel / Backpacker Hostel",
    type: "Hostel",
    price: 300,
    details: "Check-in after train arrival. Relax and keep luggage safe in lockers."
  },
  {
    day: 2,
    location: "Varanasi (Assi Ghat/Godowlia)",
    stay: "Zostel / Backpacker Hostel",
    type: "Hostel",
    price: 300,
    details: "Second night stay. Check out next morning or keep luggage until evening train."
  }
];
