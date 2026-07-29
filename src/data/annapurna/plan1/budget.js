import { annapurnaAmounts } from "../amounts";
const data = annapurnaAmounts.plan1;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation", 
      amount: data.transportCategory, 
      color: "#2563EB", 
      icon: "Bus", 
      description: "Delhi-Gorakhpur IRCTC Sleeper train + UP Roadways bus to Sonauli + Bhairahawa local bus to Pokhara + Pokhara-Nayapul local bus round trip",
      subItems: [
        { name: "Delhi ↔ Gorakhpur Express Train (Sleeper Class)", price: data.transportFares.trainDelhiGorakhpur },
        { name: "Gorakhpur ↔ Sonauli Border UP Roadways Bus", price: data.transportFares.busGorakhpurSonauli },
        { name: "Bhairahawa ↔ Pokhara Local Nepalese Bus (NPR 1,000)", price: data.transportFares.busBhairahawaPokhara },
        { name: "Pokhara ↔ Nayapul Trailhead Local Bus (NPR 400)", price: data.transportFares.busPokharaNayapul }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Pokhara budget guest houses (2 nights) + Trail teahouse shared rooms (5 nights)",
      subItems: [
        { name: "Pokhara Lakeside Budget Hotel (2 Nights @ ₹250/person)", price: 500 },
        { name: "Trail Teahouses (5 Nights @ ₹190/person avg room fee)", price: 940 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Drinks", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Daily Dal Bhat thalis with unlimited refills + hot lemon tea + trail snacks",
      subItems: [
        { name: "Trail Meals (6 Days @ ₹450/day Dal Bhat Power)", price: 2700 },
        { name: "Pokhara & Transit Meals (3 Days @ ₹350/day)", price: 1050 }
      ]
    },
    { 
      id: "permits", 
      label: "Permits & Fees", 
      amount: data.emergencyCategory, 
      color: "#EF4444", 
      icon: "FileText", 
      description: "ACAP permit + TIMS card + chlorine water purification tablets + emergency cash",
      subItems: [
        { name: "ACAP Permit (NPR 1,000)", price: 625 },
        { name: "TIMS Card (NPR 1,000)", price: 625 },
        { name: "Chlorine Water Purification Tablets", price: 150 },
        { name: "Emergency Buffer & Hot Spring Entry", price: 850 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 1, amount: 490, label: "Delhi → Gorakhpur Train & Snacks" },
    { day: 2, amount: 1100, label: "Border Transit & Pokhara Arrival" },
    { day: 3, amount: 850, label: "Nayapul Bus & Trek to Chhomrong" },
    { day: 4, amount: 800, label: "Chhomrong to Himalaya" },
    { day: 5, amount: 950, label: "Himalaya to ABC Summit" },
    { day: 6, amount: 850, label: "ABC Sunrise & Descend to Bamboo" },
    { day: 7, amount: 750, label: "Bamboo to Jhinu Danda Hot Springs" },
    { day: 8, amount: 1150, label: "Trek to Nayapul & Pokhara Night" },
    { day: 9, amount: 980, label: "Pokhara to Border & Night Train" },
    { day: 10, amount: 138, label: "Delhi Arrival" }
  ],
  calculatorDefaults: data.calcDefaults,
};

export const accommodationBreakdown = [
  { night: "Night 2", location: "Pokhara Lakeside", roomType: "Backpacker Hostel Bed", npr: "NPR 400", inr: 250 },
  { night: "Night 3", location: "Chhomrong Village", roomType: "Twin Teahouse Room", npr: "NPR 250 / room", inr: 160 },
  { night: "Night 4", location: "Himalaya Village", roomType: "Twin Teahouse Room", npr: "NPR 300 / room", inr: 190 },
  { night: "Night 5", location: "Annapurna Base Camp", roomType: "Teahouse Shared Room", npr: "NPR 350 / room", inr: 220 },
  { night: "Night 6", location: "Bamboo Village", roomType: "Twin Teahouse Room", npr: "NPR 300 / room", inr: 190 },
  { night: "Night 7", location: "Jhinu Danda", roomType: "Twin Teahouse Room", npr: "NPR 280 / room", inr: 180 },
  { night: "Night 8", location: "Pokhara Lakeside", roomType: "Backpacker Hostel Bed", npr: "NPR 400", inr: 250 },
  { night: "Nights 1 & 9", location: "Overnight Transit", roomType: "Express Train Sleeper Berth", npr: "—", inr: 0, note: "Included in Transport" }
];

export const stayOptions = [
  {
    id: 1,
    destination: "Pokhara Lakeside Budget Lodge",
    name: "Pokhara Lakeside Budget Lodge",
    image: "/mountain_clay_peak.png",
    budget: 250,
    mid: 600,
    premium: 1200,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Free WiFi", "Hot shower", "Luggage storage"],
    pros: ["Walking distance to Fewa Lake", "Close to tourist bus park"],
    cons: ["Shared bath in budget rooms"],
    tips: "Store main luggage in Pokhara hotel while trekking",
    rating: 4.4,
    mapLink: "https://maps.google.com/?q=Lakeside+Pokhara",
    type: "Hotel",
    pricePerNight: 250,
    location: "Pokhara",
    hotels: [
      { name: "Pokhara Backpacker Hostel", price: 250 },
      { name: "Lakeside Peace Guest House", price: 600 }
    ]
  },
  {
    id: 2,
    destination: "Chhomrong / ABC Teahouses",
    name: "Chhomrong / ABC Teahouses",
    image: "/mountain_clay_peak.png",
    budget: 200,
    mid: 500,
    premium: 900,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Wooden twin beds", "Dining hall stove heater", "Blankets provided"],
    pros: ["Authentic mountain teahouse experience", "Unlimited Dal Bhat refills"],
    cons: ["Extra charge for hot showers (NPR 150-300) and phone charging (NPR 100-200)"],
    tips: "Order Dal Bhat for dinner to get free rice and dal refills for high calorie energy",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Annapurna+Base+Camp",
    type: "Teahouse",
    pricePerNight: 200,
    location: "ABC Trail",
    hotels: [
      { name: "Chhomrong Excellent Guest House", price: 200 },
      { name: "Annapurna Sanctuary Lodge ABC", price: 300 }
    ]
  }
];
