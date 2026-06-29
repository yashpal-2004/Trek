import { Mountain, ArrowUp } from "lucide-react";
import { trip, navLinks } from "../../data/trip";
import { scrollToSection } from "../../utils/helpers";
import Container from "./Container";
import Button from "../common/Button";

export default function Footer() {
  const plan = typeof window !== "undefined" && window.location.pathname.includes("plan2") ? "plan2" : "plan1";
  const isHome = typeof window !== "undefined" && (window.location.pathname === "/plan1" || window.location.pathname === "/plan2");

  const handleLinkClick = (id) => {
    if (isHome) {
      scrollToSection(id);
    } else {
      window.location.href = `/${plan}#${id}`;
    }
  };

  return (
    <footer className="no-print bg-[#f2efe9] border-t border-black/10 py-16 text-black select-none">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo & Meta */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain size={24} className="text-black" />
              <span className="font-extrabold tracking-tight uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>Trek.</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed font-semibold">
              {trip.duration} · {trip.people} travelers · Budget {trip.budgetMin.toLocaleString("en-IN")}–{trip.budgetMax.toLocaleString("en-IN")} per person
            </p>
            <p className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
              Release Version {trip.version}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-bold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-600 hover:text-black transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li><a href={`/${plan}/stay`} className="text-slate-600 hover:text-black transition-colors block">Stay</a></li>
              <li><a href={`/${plan}/expenses`} className="text-slate-600 hover:text-black transition-colors block">Expenses</a></li>
              <li><a href={`/${plan}/resources`} className="text-slate-600 hover:text-black transition-colors block">Guides</a></li>
            </ul>
          </div>

          {/* Trip Summary Details */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">Trip Summary</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li>Start: <span className="text-black">{trip.startingPoint}</span></li>
              <li>End: <span className="text-black">{trip.endingPoint}</span></li>
              <li>Difficulty: <span className="text-black">{trip.difficulty}</span></li>
              <li>Altitude: <span className="text-black">{trip.highestAltitude}</span></li>
            </ul>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 text-[10px] font-bold font-mono uppercase bg-white hover:bg-black/5 transition-all cursor-pointer"
            >
              <ArrowUp size={12} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider">
            © 2026 {trip.developer}. Designed for the Garhwal Expedition.
          </p>
        </div>
      </Container>
    </footer>
  );
}
