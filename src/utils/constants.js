export const SECTION_IDS = {
  overview: "overview",
  timeline: "timeline",
  itinerary: "itinerary",
  transport: "transport",
  treks: "treks",
  budget: "budget",
  stay: "stay",
  food: "food",
  packing: "packing",
  safety: "safety",
  emergency: "emergency",
  gallery: "gallery",
  faq: "faq",
  print: "print",
};

export const ANIMATION = {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } },
  slideUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
  stagger: { staggerChildren: 0.1 },
};

export const MAX_WIDTH = "max-w-[1400px]";
export const CONTENT_WIDTH = "max-w-[1280px]";
