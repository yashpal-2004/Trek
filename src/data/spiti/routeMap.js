export const routeWaypoints = [
  {
    id: 1, name: "Manali", altitude: 2050, altLabel: "2,050m", distance: 0,
    type: "city", category: "Start / End",
    description: "Base city for the Spiti expedition. Rent your Hero Xpulse here, stock supplies, and board the evening Volvo.",
    highlight: true, note: "Bike pickup & supplies"
  },
  {
    id: 2, name: "Atal Tunnel", altitude: 3071, altLabel: "3,071m", distance: 52,
    type: "landmark", category: "Landmark",
    description: "9.2 km single-tube highway tunnel — the world's longest at this altitude. Marks the gateway to Lahaul & Spiti.",
    highlight: true, note: "Network drops to zero after this point"
  },
  {
    id: 3, name: "Khoksar", altitude: 3140, altLabel: "3,140m", distance: 85,
    type: "village", category: "Village",
    description: "First Lahaul village after the Atal Tunnel. Police check post. Last fuel before Kaza.",
    highlight: false, note: "Police check post"
  },
  {
    id: 4, name: "Gramphu", altitude: 3360, altLabel: "3,360m", distance: 115,
    type: "junction", category: "Junction",
    description: "Critical road junction. Spiti road branches right toward Chandratal and Kaza.",
    highlight: false, note: "Route splits here"
  },
  {
    id: 5, name: "Chhatru", altitude: 3350, altLabel: "3,350m", distance: 150,
    type: "rest", category: "Rest Stop",
    description: "Famous dhabas in the middle of barren glacial valley. Great hot Maggi and chai stop on a long ride.",
    highlight: false, note: "Last dhabas before Batal"
  },
  {
    id: 6, name: "Batal", altitude: 3960, altLabel: "3,960m", distance: 190,
    type: "rest", category: "Rest Stop",
    description: "Legendary Chacha-Chachi Dhaba — piping hot Rajma Chawal at 12,992 ft. Don't miss it.",
    highlight: true, note: "Iconic Rajma Chawal stop"
  },
  {
    id: 7, name: "Kunzum Pass", altitude: 4551, altLabel: "4,551m (14,931 ft)", distance: 220,
    type: "pass", category: "Mountain Pass",
    description: "The highest point of the entire expedition at 14,931 ft. Kunzum Mata temple and breathtaking 360° views.",
    highlight: true, note: "Highest point of the route"
  },
  {
    id: 8, name: "Losar", altitude: 4079, altLabel: "4,079m", distance: 255,
    type: "village", category: "Village",
    description: "First village officially inside Spiti Valley. Surrounded by high-altitude apple orchards and barley fields.",
    highlight: false, note: "Entry to Spiti Valley"
  },
  {
    id: 9, name: "Kaza", altitude: 3800, altLabel: "3,800m", distance: 310,
    type: "town", category: "Town / Hub",
    description: "Sub-divisional HQ of Spiti Valley. Only working ATM, fuel pump, mobile coverage, and accommodation hub in Spiti.",
    highlight: true, note: "Last ATM & fuel in Spiti"
  },
  {
    id: 10, name: "Key Monastery", altitude: 4166, altLabel: "4,166m (13,668 ft)", distance: 330,
    type: "monastery", category: "Monastery",
    description: "1,000-year-old Tibetan Buddhist monastery perched dramatically on a hilltop above the Spiti river gorge.",
    highlight: true, note: "~14 km from Kaza"
  },
  {
    id: 11, name: "Kibber", altitude: 4205, altLabel: "4,205m", distance: 355,
    type: "village", category: "Village",
    description: "One of the world's highest motorable villages. Snow leopard habitat. Connected to Chicham by Asia's highest village bridge.",
    highlight: false, note: "Snow leopard habitat"
  },
  {
    id: 12, name: "Chicham Bridge", altitude: 4270, altLabel: "4,270m", distance: 375,
    type: "landmark", category: "Landmark",
    description: "Asia's highest village suspension bridge connecting Kibber and Chicham villages across the deep Spiti gorge.",
    highlight: true, note: "Asia's highest village bridge"
  },
  {
    id: 13, name: "Langza", altitude: 4400, altLabel: "4,400m", distance: 395,
    type: "village", category: "Village",
    description: "Fossil village where you can pick up 70-million-year-old ammonite fossils. Giant 1,000-year-old Buddha statue.",
    highlight: false, note: "70M year old marine fossils"
  },
  {
    id: 14, name: "Hikkim", altitude: 4440, altLabel: "4,440m (14,567 ft)", distance: 415,
    type: "landmark", category: "Landmark",
    description: "World's highest functional post office at 14,567 ft. Send a postcard to anyone in the world from here.",
    highlight: true, note: "World's highest post office"
  },
  {
    id: 15, name: "Komic", altitude: 4527, altLabel: "4,527m (14,856 ft)", distance: 435,
    type: "village", category: "Village",
    description: "One of the world's highest motorable villages. A tiny hamlet at nearly 15,000 ft with a small monastery.",
    highlight: false, note: "14,856 ft motorable"
  },
  {
    id: 16, name: "Dhankar Monastery", altitude: 3890, altLabel: "3,890m", distance: 360,
    type: "monastery", category: "Monastery",
    description: "Dramatically perched on a cliff face 1,000m above the confluence of Spiti and Pin rivers. One of the most scenic spots in Spiti.",
    highlight: true, note: "Cliff-perched monastery"
  },
  {
    id: 17, name: "Tabo Monastery", altitude: 3280, altLabel: "3,280m", distance: 400,
    type: "monastery", category: "Monastery",
    description: "Founded in 996 AD — one of the oldest active Buddhist monasteries in the world. Called 'Ajanta of the Himalayas' for its murals.",
    highlight: true, note: "Founded 996 AD — oldest in Himalayas"
  },
  {
    id: 18, name: "Pin Valley (Mud)", altitude: 3720, altLabel: "3,720m", distance: 430,
    type: "valley", category: "Valley",
    description: "Remote and desolate cold desert valley. Primary habitat for snow leopards. The end village Mud has a basic homestay.",
    highlight: false, note: "Snow leopard territory"
  },
  {
    id: 19, name: "Chandratal Lake", altitude: 4300, altLabel: "4,300m (14,100 ft)", distance: 580,
    type: "lake", category: "Lake",
    description: "Stunning crescent-shaped turquoise glacial lake at 14,100 ft. One of India's most breathtaking high-altitude lakes.",
    highlight: true, note: "No camping at lake edge"
  },
  {
    id: 20, name: "Return: Manali", altitude: 2050, altLabel: "2,050m", distance: 800,
    type: "city", category: "Start / End",
    description: "Return to Manali. Return bike rental, board evening Volvo to Delhi.",
    highlight: false, note: "Bike return & Volvo to Delhi"
  }
];

export const routeStats = {
  totalDistance: "~800 km",
  peakAltitude: "4,551m (14,931 ft)",
  totalWaypoints: 19,
  passes: 1,
  monasteries: 3,
  villages: 6,
  lakes: 1
};

export const typeConfig = {
  city:      { color: "#6B7280", accent: "#374151", bg: "#F3F4F6",  label: "Start / End"   },
  landmark:  { color: "#EF4444", accent: "#B91C1C", bg: "#FEE2E2",  label: "Landmark"      },
  village:   { color: "#10B981", accent: "#065F46", bg: "#D1FAE5",  label: "Village"       },
  junction:  { color: "#64748B", accent: "#334155", bg: "#F1F5F9",  label: "Junction"      },
  rest:      { color: "#D97706", accent: "#92400E", bg: "#FDE68A",  label: "Rest Stop"     },
  pass:      { color: "#F59E0B", accent: "#B45309", bg: "#FEF3C7",  label: "Mountain Pass" },
  town:      { color: "#2563EB", accent: "#1E40AF", bg: "#DBEAFE",  label: "Town / Hub"    },
  monastery: { color: "#8B5CF6", accent: "#5B21B6", bg: "#EDE9FE",  label: "Monastery"     },
  valley:    { color: "#059669", accent: "#064E3B", bg: "#D1FAE5",  label: "Valley"        },
  lake:      { color: "#0EA5E9", accent: "#0369A1", bg: "#E0F2FE",  label: "Lake"          }
};
