import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation", 
      amount: data.transportCategory, 
      color: "#3B82F6", 
      icon: "Bus", 
      description: "Sonipat-Dharamshala overnight Volvo + Dharamshala scooty rental & petrol split between 4 people",
      subItems: [
        { name: "Sonipat ↔ Dharamshala Volvo Round Trip", price: 1200 },
        { name: "Dharamshala Scooty Rental (2 scooties for 3 days, split by 4)", price: 750 },
        { name: "Petrol / Fuel for Scooties (split by 4 for entire loop)", price: 300 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "1 Night in Dharamshala (MMT Hotel) + 1 Night in Bir (Guesthouse) for 2 couples",
      subItems: [
        { name: "Dharamshala MMT Hotel (1 Night, split by 2)", price: 290 },
        { name: "Bir Hotel / Guesthouse (1 Night, split by 2)", price: 343 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Cafes", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Local Tibetan dishes, cafe meals and snacks in Bir and Dharamshala",
      subItems: [
        { name: "Snacks, local meals & tea (3 days * ₹350)", price: 1050 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 2440, label: "Board overnight bus, rent scooties, explore McLeod Ganj & check in at Dharamshala MMT hotel" },
    { day: 2, amount: 463, label: "Ride from Dharamshala via Palampur Tea Gardens to Bir, check in & watch sunset at Billing takeoff" },
    { day: 3, amount: 1031, label: "Checkout from Bir, ride to Barot Valley & Luhardi, visit Andretta, return scooties & board return bus" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Dharamshala",
    image: "https://r1imghtlak.mmtcdn.com/195eaeb4-71eb-4331-baf4-da7fe025018b.jpg?downsize=810:*",
    budget: 200,
    mid: 290,
    premium: 600,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Wi-Fi", "Hot showers", "Private rooms", "Double Bed"],
    pros: ["MMT budget option near town stand", "Great McLeod Ganj access"],
    cons: ["Need to checkout next morning"],
    tips: "Book early to secure the MMT deal rate.",
    rating: 4.5,
    mapLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=201912162216117653&_uCurrency=INR&checkin=08272026&checkout=08292026&city=CTKANG&country=IN&lat=32.25013&lng=76.30458&locusId=CTKANG&locusType=city&rank=1&reference=hotel&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Dharamshala&sort=price-asc%7C%7C%7C--&type=city&viewType=BUDGET&mtkeys=undefined",
    hotels: [
      { 
        name: "Dharamshala MMT Hotel (1 Night)", 
        price: 290, 
        offline: false,
        link: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=201912162216117653&_uCurrency=INR&checkin=08272026&checkout=08292026&city=CTKANG&country=IN&lat=32.25013&lng=76.30458&locusId=CTKANG&locusType=city&rank=1&reference=hotel&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Dharamshala&sort=price-asc%7C%7C%7C--&type=city&viewType=BUDGET&mtkeys=undefined"
      }
    ]
  },
  {
    id: 2,
    destination: "Bir Tibetan Colony",
    image: "https://r1imghtlak.mmtcdn.com/195eaeb4-71eb-4331-baf4-da7fe025018b.jpg?downsize=810:*",
    budget: 250,
    mid: 343,
    premium: 800,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Wi-Fi", "Hot water", "Mountain views"],
    pros: ["Close to landing site and cafes", "Very peaceful valley stays"],
    cons: ["Slightly colder at night"],
    tips: "Book a hotel close to the paragliding landing field to watch pilots land.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Bir+Tibetan+Colony",
    hotels: [
      { 
        name: "Bir Hotel / Guesthouse (1 Night)", 
        price: 343, 
        offline: false,
        link: "https://maps.google.com/?q=Bir+Tibetan+Colony"
      }
    ]
  }
];
