export const emergencyContacts = [
  { id: 1, name: "Kullu District Police HQ", number: "01902-222727", location: "Kullu/Manali", type: "Police", available: "24/7" },
  { id: 2, name: "Lady Willingdon Hospital", number: "01902-252379", location: "Manali Town", type: "Hospital", available: "24/7" },
  { id: 3, name: "Atal Bihari Vajpayee Institute of Mountaineering (ABIMAS)", number: "01902-252342", location: "Manali", type: "Rescue / Advisory", available: "9 AM–5 PM" },
  { id: 4, name: "Himachal Pradesh Disaster Management Helpline", number: "108 / 112", location: "Himachal", type: "Emergency Services", available: "24/7" },
];

export const emergencyProtocols = [
  { id: 1, title: "Altitude Sickness (AMS)", steps: ["Stop ascending immediately", "Descend at least 300–500m to lower camp (e.g. Balu Ka Ghera to Chika)", "Administer bottled oxygen", "Administer Diamox 250mg", "Keep patient warm and hydrated", "Never leave the patient alone"], icon: "AlertTriangle", priority: "critical" },
  { id: 2, title: "Severe Hypothermia", steps: ["Replace wet clothes immediately with dry warm layers", "Place patient inside a rated sleeping bag with another person for body heat sharing", "Provide warm sugary liquids if conscious", "Do not expose to direct heat source like campfire directly to bare skin"], icon: "Thermometer", priority: "critical" },
  { id: 3, title: "Glacial Torrent Injuries / Foot Trap", steps: ["Secure patient with climbing ropes", "Pull patient to safety upstream of current", "Treat minor cuts, wrap in dry space blankets", "Check for signs of shock or sprains"], icon: "Zap", priority: "high" }
];
