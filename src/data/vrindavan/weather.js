export const weather = {
  bestMonths: ["October", "November", "December", "January", "February", "March"],
  seasons: [
    {
      name: "Winter (Oct–Feb)",
      months: "October to February",
      temperature: "8°C – 25°C",
      rainfall: "Low",
      description: "Perfect time to visit. Mornings and evenings are cool and pleasant. Festive atmosphere around Diwali and Dev Deepawali.",
      recommendation: "Best Season"
    },
    {
      name: "Summer (Mar–Jun)",
      months: "March to June",
      temperature: "25°C – 45°C",
      rainfall: "Low",
      description: "Holi (March) is spectacular! Post-Holi (April–June), it gets very hot — carry plenty of water and stay hydrated.",
      recommendation: "Avoid April–June unless for Holi"
    },
    {
      name: "Monsoon (Jul–Sep)",
      months: "July to September",
      temperature: "25°C – 35°C",
      rainfall: "High",
      description: "Heavy rains. Yamuna floods are possible near the ghats. Janmashtami (August) brings massive crowds despite rains.",
      recommendation: "Avoid"
    }
  ],
  monthlyData: [
    { month: "Jan", maxTemp: 20, minTemp: 7, rainfall: 20 },
    { month: "Feb", maxTemp: 24, minTemp: 10, rainfall: 15 },
    { month: "Mar", maxTemp: 30, minTemp: 15, rainfall: 10 },
    { month: "Apr", maxTemp: 38, minTemp: 22, rainfall: 8 },
    { month: "May", maxTemp: 42, minTemp: 27, rainfall: 20 },
    { month: "Jun", maxTemp: 41, minTemp: 28, rainfall: 55 },
    { month: "Jul", maxTemp: 36, minTemp: 26, rainfall: 200 },
    { month: "Aug", maxTemp: 33, minTemp: 25, rainfall: 220 },
    { month: "Sep", maxTemp: 34, minTemp: 25, rainfall: 130 },
    { month: "Oct", maxTemp: 32, minTemp: 18, rainfall: 20 },
    { month: "Nov", maxTemp: 26, minTemp: 12, rainfall: 5 },
    { month: "Dec", maxTemp: 20, minTemp: 8, rainfall: 10 }
  ]
};

export const safety = [
  { id: 1, title: "Monkey Menace (Banka Bihari Galis)", icon: "Shield", description: "Monkeys in Vrindavan are notorious for snatching spectacles, phones, and prasad bags.", tips: ["Remove spectacles/sunglasses or secure them with a strap", "Keep phones inside zipped bag", "Do not carry open food or prasad in hands"] },
  { id: 2, title: "Crowd Surges & Stampedes", icon: "AlertTriangle", description: "Banka Bihari and Prem Mandir can experience extreme rushes during aarti hours.", tips: ["Keep to the sides of entry corridors", "Do not carry heavy backpacks into tight temple lanes", "Hold companions' hands"] },
  { id: 3, title: "Touts and Fake Guides", icon: "AlertTriangle", description: "Touts near Mathura Janmabhoomi and Banka Bihari demand excessive fees for 'VIP' entry.", tips: ["All standard temple darshans are free", "Ignore unauthorized pandas and photographers"] }
];

export const networkCoverage = [
  { place: "Mathura Cantt / Junction", signal: "Excellent", level: 4, carriers: "All Networks", note: "Full 4G/5G coverage throughout stations" },
  { place: "Vrindavan Raman Reti / ISKCON", signal: "Excellent", level: 4, carriers: "All Networks", note: "Full 4G/5G mobile connectivity" },
  { place: "Banka Bihari Narrow Galis", signal: "Good", level: 3, carriers: "Jio, Airtel, Vi", note: "Moderate to good, slight drop during dense temple gatherings" },
  { place: "Govardhan Parikrama Marg", signal: "Good", level: 3, carriers: "All Networks", note: "Good coverage all along the 21 km circuit" }
];
