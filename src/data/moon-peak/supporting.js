export const foodGuide = [
  {
    name: "Triund & Trail Dhabas",
    type: "Trek Dhabas",
    cost: "₹120 - ₹180 per meal",
    mustTry: "Rajma Chawal, Maggi & Kangra Chai",
    description: "Basic trail dhabas offering hot cooked meals, tea, and packaged snacks along the Triund & Snowline trail."
  },
  {
    name: "Dharamkot Village Cafes",
    type: "Budget Backpackers Cafe",
    cost: "₹100 - ₹200",
    mustTry: "Shakshuka, Bhagsu Cake & Honey Lemon Ginger Tea",
    description: "Relaxed Bohemian village cafes serving affordable mountain breakfasts before or after the trek."
  }
];

export const packingList = [
  {
    category: "Trek Gear",
    icon: "Package",
    items: [
      { id: "moon-bag", name: "35-45L Backpack", essential: true },
      { id: "moon-pole", name: "Trekking Pole with Rubber Tip", essential: true },
      { id: "moon-microspikes", name: "Microspikes (for snow/scree summit)", essential: true },
      { id: "moon-headlamp", name: "Headlamp / Flashlight with extra batteries", essential: true }
    ]
  },
  {
    category: "Clothing",
    icon: "Shirt",
    items: [
      { id: "moon-thermal", name: "Thermal Base Layer", essential: true },
      { id: "moon-jacket", name: "Fleece Jacket & Windproof Down Jacket", essential: true },
      { id: "moon-pants", name: "Quick-Dry Trek Pants", essential: true },
      { id: "moon-poncho", name: "Rain Poncho", essential: true },
      { id: "moon-cap-gloves", name: "Woolen Cap & Waterproof Gloves", essential: true }
    ]
  },
  {
    category: "Personal & Safety",
    icon: "Shield",
    items: [
      { id: "moon-bottle", name: "2L Water Bottle / Hydration Bladder", essential: true },
      { id: "moon-ors", name: "ORS / Electrolyte Packets", essential: true },
      { id: "moon-energy", name: "High Energy Bars & Nuts", essential: true },
      { id: "moon-sunscreen", name: "Personal Sunscreen & Lip Balm", essential: false },
      { id: "moon-firstaid", name: "First Aid Kit & Diamox", essential: true }
    ]
  }
];

export const emergencyTips = [
  { title: "Dharamshala / McLeod Ganj Police Station", contact: "01892-221485 / 112" },
  { title: "Zonal Hospital Dharamshala", contact: "01892-222131" },
  { title: "State Disaster Management (Himachal)", contact: "1077" },
  { title: "High Altitude Caution", detail: "Weather past Lahesh Cave changes rapidly after 12 PM. Turn back if cloud cover or snowstorm approaches." }
];

export const weatherInfo = {
  season: "Spring & Autumn (May-June / Sept-Oct)",
  dayTemp: "10°C to 18°C",
  nightTemp: "-2°C to 5°C",
  conditions: "Clear sunny mornings with cool alpine winds; sub-zero temperatures near Laka Glacier & summit."
};

export const faq = [
  { question: "How difficult is Moon Peak Trek?", answer: "Moon Peak (15,250 ft) is rated Hard. While the trail to Triund is easy, the section from Lahesh Cave to the summit involves steep boulder scrambles and snow/scree slopes." },
  { question: "What is the cheapest way to reach from Delhi?", answer: "Take an unreserved general train from Old Delhi to Pathankot Junction (₹180), then an ordinary HRTC bus to Dharamshala (₹150), and a shared auto to Dharamkot (₹70). Total round trip transit cost is ₹800." },
  { question: "Is a guide required for Moon Peak summit?", answer: "Yes, past Lahesh Cave the trail is unmaintained and boulder-heavy. Hiring a local Dharamkot guide or joining an experienced trek leader is strongly advised." }
];

export const gallery = [
  { src: "/mountain_clay_peak.png", caption: "Sunrise over Moon Peak & Dhauladhar Summit wall" },
  { src: "/mountain_clay_peak.png", caption: "Triund Ridge looking towards Kangra Valley" },
  { src: "/mountain_clay_peak.png", caption: "Laka Got Glacial Meadow Base Camp" }
];

export const routeMap = {
  center: [32.25, 76.35],
  zoom: 12,
  points: [
    { name: "Dharamkot / Gallu Devi Temple (Start)", lat: 32.25, lng: 76.32 },
    { name: "Triund Top (2,850m)", lat: 32.26, lng: 76.35 },
    { name: "Laka Got Base Camp (3,300m)", lat: 32.28, lng: 76.36 },
    { name: "Lahesh Cave (3,500m)", lat: 32.29, lng: 76.36 },
    { name: "Moon Peak Summit (4,650m)", lat: 32.31, lng: 76.37 }
  ]
};
