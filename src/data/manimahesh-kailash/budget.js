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
      description: "Sleeper train round trip + local transport",
      subItems: [
        { name: "Train Round Trip", price: amounts.transport.train },
        { name: "Local Transport", price: amounts.transport.localAuto }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: amounts.accommodation.hostel,
      color: "#10B981",
      icon: "Bed",
      description: "Budget stays",
      subItems: [
        { name: "Hostel/Ashram Stay", price: amounts.accommodation.hostel }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: amounts.food.meals + amounts.food.snacks,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Meals and local food",
      subItems: [
        { name: "Meals", price: amounts.food.meals },
        { name: "Snacks", price: amounts.food.snacks }
      ]
    },
    {
      id: "emergency",
      label: "Prasad & Misc",
      amount: amounts.misc.templePrasad + amounts.misc.sarnathEntry + amounts.misc.shopping,
      color: "#8B5CF6",
      icon: "MapPin",
      description: "Temple prasad and local shopping",
      subItems: [
        { name: "Temple Prasad", price: amounts.misc.templePrasad },
        { name: "Local Shopping", price: amounts.misc.shopping }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 500, label: "Travel" },
    { day: 1, amount: 1500, label: "Darshan & Local Sightseeing" },
  ],
  calculatorDefaults: {
    transport: amounts.transport.train + amounts.transport.localAuto + amounts.transport.boatRide,
    accommodation: amounts.accommodation.hostel,
    food: amounts.food.meals + amounts.food.snacks,
    emergency: amounts.misc.templePrasad + amounts.misc.sarnathEntry + amounts.misc.shopping
  },
};

export const stayOptions = [];
export const accommodationBreakdown = [];
