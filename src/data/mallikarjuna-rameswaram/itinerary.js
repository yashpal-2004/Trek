export const itinerary = [
  {
    day: 1,
    title: "Delhi to Hyderabad / Markapur & Transit to Srisailam",
    subtitle: "Overnight Train → Nallamala Forest Drive → Srisailam Check-in",
    icon: "Train",
    accentColor: "from-blue-500 to-cyan-600",
    distance: "1700 km",
    driveTime: "Train + 4 hrs Bus",
    altitude: "476m",
    highlights: ["Nallamala Tiger Reserve Forest Drive", "Srisailam Hill Arrival", "Ghat Road Scenic Views"],
    activities: [
      { time: "05:00 PM", title: "Board Delhi Express Train", desc: "Board Telangana / AP Express from New Delhi station." },
      { time: "02:00 PM", title: "Arrive Markapur / Secunderabad", desc: "Transfer to APSRTC Express bus taking scenic ghats through Nallamala forest." },
      { time: "07:00 PM", title: "Check-in at Srisailam Hotel/Devasthanam", desc: "Check in near temple complex & view night illuminated Gopuram." }
    ]
  },
  {
    day: 2,
    title: "Mallikarjuna Jyotirlinga & Bhramaramba Temple Darshan",
    subtitle: "Patalganga Krishna River Dip → Sparsh Darshan → Transit to South",
    icon: "MapPin",
    accentColor: "from-amber-500 to-orange-600",
    distance: "50 km local",
    driveTime: "Cable Car / Auto",
    altitude: "476m",
    highlights: ["Patalganga Ropeway Dip", "Mallikarjuna Sparsh Darshan", "Bhramaramba Shakti Peeth"],
    activities: [
      { time: "05:30 AM", title: "Patalganga Ropeway & Holy Bath", desc: "Take ropeway cable car down to Krishna river for holy dip." },
      { time: "08:00 AM", title: "Mallikarjuna Jyotirlinga Darshan", desc: "Perform Sparsh Darshan at Mallikarjuna Swamy Temple and Shakti Peeth." },
      { time: "04:00 PM", title: "Board Train/Bus to Tamil Nadu", desc: "Head towards Chennai/Madurai for southern leg to Rameswaram." }
    ]
  },
  {
    day: 3,
    title: "Transit Across Pamban Sea Bridge to Rameswaram Island",
    subtitle: "Coastal journey crossing Pamban ocean bridge",
    icon: "Compass",
    accentColor: "from-indigo-500 to-purple-600",
    distance: "1100 km",
    driveTime: "Train / Bus",
    altitude: "10m",
    highlights: ["Pamban Sea Bridge Crossing", "Rameswaram Island Arrival", "Agni Theertham Sea Dip"],
    activities: [
      { time: "06:00 AM", title: "Cross Pamban Ocean Bridge", desc: "Breathtaking sea view crossing onto Pamban Island." },
      { time: "08:00 AM", title: "Hotel Check-in near Temple", desc: "Check in near East Gate of Ramanathaswamy Temple." }
    ]
  },
  {
    day: 4,
    title: "Ramanathaswamy Temple 22 Wells & Dhanushkodi Safari",
    subtitle: "22 Theertham Bathing → World's Longest Corridor → Dhanushkodi Tip",
    icon: "Sparkles",
    accentColor: "from-emerald-500 to-teal-600",
    distance: "40 km",
    driveTime: "Auto / Jeep",
    altitude: "10m",
    highlights: ["22 Holy Wells Bathing", "World's Longest Corridor", "Dhanushkodi Ocean Confluence"],
    activities: [
      { time: "05:00 AM", title: "Agni Theertham & 22 Well Bathing", desc: "Take ritual sea dip at Agni Theertham followed by bathing in all 22 sacred temple wells." },
      { time: "08:30 AM", title: "Ramanathaswamy Jyotirlinga Darshan", desc: "Offer prayers at the main Ramalingam shrine and admire the 1200-meter long pillared corridor." },
      { time: "01:30 PM", title: "Dhanushkodi & Ram Setu Point", desc: "Jeep safari to the ruins of Dhanushkodi ghost town and view Ram Setu origin point." }
    ]
  },
  {
    day: 5,
    title: "Return Journey to Delhi",
    subtitle: "Madurai / Rameswaram train departure to Delhi",
    icon: "Home",
    accentColor: "from-rose-500 to-pink-600",
    distance: "2700 km return",
    driveTime: "Train",
    altitude: "214m",
    highlights: ["Overnight Express Train", "South India Circuit Completion"],
    activities: [
      { time: "08:00 AM", title: "Board Return Train", desc: "Board Rameswaram-Delhi Express returning back home with divine blessings." }
    ]
  }
];

export const emergencyInfo = {
  hospitals: [
    { name: "Devasthanam Hospital Srisailam", phone: "08524-288600", distance: "1 km" },
    { name: "Government Hospital Rameswaram", phone: "04573-221233", distance: "2 km" }
  ],
  police: [
    { station: "Srisailam Police Station", phone: "100 / 08524-288333" },
    { station: "Rameswaram Temple Police", phone: "100 / 04573-221221" }
  ]
};
