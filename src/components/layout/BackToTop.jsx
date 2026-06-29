import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="no-print fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
