export const routeWaypoints = [
  { id: 1, name: "Delhi (DLI / NDLS)", altitude: 214, altLabel: "214m", distance: 0, type: "city", category: "Start / End", description: "Board Amrit Bharat Express to Varanasi.", highlight: false },
  { id: 2, name: "Varanasi Station", altitude: 81, altLabel: "81m", distance: 780, type: "city", category: "Station / Transit", description: "Arrive at Varanasi Jn / BSBS at 12:00 PM.", highlight: false },
  { id: 3, name: "Kal Bhairav Mandir", altitude: 81, altLabel: "81m", distance: 783, type: "landmark", category: "Temple", description: "Blessings of Kotwal of Kashi.", highlight: true },
  { id: 4, name: "Kashi Vishwanath Temple", altitude: 81, altLabel: "81m", distance: 785, type: "landmark", category: "Temple", description: "Jyotirlinga & Grand Corridor Darshan.", highlight: true },
  { id: 5, name: "Lalita Ghat & Nepali Temple", altitude: 81, altLabel: "81m", distance: 786, type: "landmark", category: "River Ghat", description: "Corridor Exit to Ganges & Wooden Pagoda Temple.", highlight: true },
  { id: 6, name: "Manikarnika Ghat", altitude: 81, altLabel: "81m", distance: 787, type: "landmark", category: "River Ghat", description: "Sacred eternal cremation ghat.", highlight: true },
  { id: 7, name: "Dashashwamedh Ghat Aarti", altitude: 81, altLabel: "81m", distance: 788, type: "landmark", category: "River Ghat", description: "Evening Ganga Aarti from boat.", highlight: true },
  { id: 8, name: "Lalita Ghat 3D Light Show", altitude: 81, altLabel: "81m", distance: 789, type: "landmark", category: "River Ghat", description: "7:30 PM Laser Projection mapping show.", highlight: true },
  { id: 9, name: "Assi Ghat Subah-e-Banaras", altitude: 81, altLabel: "81m", distance: 792, type: "landmark", category: "River Ghat", description: "05:30 AM Morning music, chants & boat ride.", highlight: true },
  { id: 10, name: "Shree Durga Mata Mandir", altitude: 81, altLabel: "81m", distance: 795, type: "landmark", category: "Temple", description: "18th-century red stone Durga Kund Temple.", highlight: true },
  { id: 11, name: "BHU New Vishwanath Temple (VT)", altitude: 81, altLabel: "81m", distance: 798, type: "landmark", category: "Temple", description: "Lush green campus & Asia's tallest temple tower.", highlight: true },
  { id: 12, name: "Namo Ghat Sunset", altitude: 81, altLabel: "81m", distance: 808, type: "landmark", category: "River Ghat", description: "Illuminated giant Namaste sculptures & promenade.", highlight: true },
  { id: 13, name: "Banaras Station (BNRS)", altitude: 81, altLabel: "81m", distance: 815, type: "city", category: "Station / Transit", description: "Board Kashi V Nath Exp return train at 1:30 PM.", highlight: false },
  { id: 14, name: "Return: Delhi (NDLS)", altitude: 214, altLabel: "214m", distance: 1600, type: "city", category: "Start / End", description: "Arrive back in Delhi at 05:45 AM.", highlight: false }
];

export const routeStats = {
  totalDistance: "1,600 km",
  peakAltitude: "214m (Delhi)",
  totalWaypoints: 14,
  passes: 0,
  monasteries: 0,
  villages: 0,
  lakes: 0,
  temples: 5
};

export const typeConfig = {
  city:      { color: "#6B7280", accent: "#374151", bg: "#F3F4F6",  label: "Start / End"   },
  landmark:  { color: "#F97316", accent: "#C2410C", bg: "#FFEDD5",  label: "Landmark / Temple" },
  town:      { color: "#2563EB", accent: "#1E40AF", bg: "#DBEAFE",  label: "Transit Hub"    }
};
export default routeWaypoints;
