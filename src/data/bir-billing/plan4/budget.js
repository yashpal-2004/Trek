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
      description: "Sonipat-Dharamshala overnight semi-sleeper Volvo + Dharamshala scooty rental & petrol split between 4 people",
      subItems: [
        { name: "Sonipat ↔ Dharamshala Volvo Round Trip", price: 1200 },
        { name: "Dharamshala Scooty Rental (2 scooties for 3 days, split by 4)", price: 750 },
        { name: "Petrol / Fuel for Scooties (split by 4 for Dharamshala-Bir round trip)", price: 300 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "2 Nights in a private couple room at Bir (2 rooms total for 2 couples)",
      subItems: [
        { name: "Bir Hotel Private Room (2 Nights, MMT Booking for 2 couples)", price: 687 }
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
    { day: 1, amount: 2900, label: "Bus to Dharamshala, Scooty rental pickup & ride to Bir + Check-in" },
    { day: 2, amount: 450, label: "Explore McLeod Ganj / Dharamshala sightseeings, return to Bir hotel" },
    { day: 3, amount: 1450, label: "Ride up to Billing takeoff ridge, descend to Dharamshala, return scooties & return bus" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Bir Tibetan Colony",
    image: "https://r1imghtlak.mmtcdn.com/195eaeb4-71eb-4331-baf4-da7fe025018b.jpg?downsize=810:*",
    budget: data.stays.bir.budget,
    mid: data.stays.bir.mid,
    premium: data.stays.bir.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Wi-Fi", "Hot showers", "Private rooms", "Double Bed"],
    pros: ["Super budget-friendly rate on MMT", "Stay at one base point for both nights"],
    cons: ["Need to ride back from Dharamshala at night"],
    tips: "Book the MMT deal early for the couple double room discount.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Bir+Tibetan+Colony",
    hotels: [
      { 
        name: "Bir MMT Selected Hotel (2 Nights)", 
        price: 687, 
        offline: false,
        link: "https://www.makemytrip.com/hotels/hotel-details/?checkin=08272026&checkout=08292026&locusId=CTXVB&locusType=city&city=CTXVB&country=IN&searchText=&roomStayQualifier=2e0e&_uCurrency=INR&reference=hotel&hotelId=202401152015113433&rf=directSearch&topHtlId=202401152015113433&type=hotel&rsc=1e2e0e&isPropSearch=T"
      }
    ]
  }
];
