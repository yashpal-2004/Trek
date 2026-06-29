import { Mountain, ArrowUp } from "lucide-react";
import { trip, navLinks } from "../../data/trip";
import { scrollToSection } from "../../utils/helpers";
import Container from "./Container";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="no-print bg-white border-t border-border py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain size={24} className="text-primary" />
              <span className="font-bold text-lg">{trip.title}</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              {trip.duration} · {trip.people} travelers · Budget {trip.budgetMin.toLocaleString("en-IN")}–{trip.budgetMax.toLocaleString("en-IN")} per person
            </p>
            <p className="text-xs text-secondary mt-4">Version {trip.version}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 8).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Trip Summary</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>Start: {trip.startingPoint}</li>
              <li>End: {trip.endingPoint}</li>
              <li>Difficulty: {trip.difficulty}</li>
              <li>Altitude: {trip.highestAltitude}</li>
            </ul>
            <Button
              variant="ghost"
              size="sm"
              icon={ArrowUp}
              className="mt-6"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary">
            © 2026 {trip.developer}. Built for the Trek.
          </p>
        </div>
      </Container>
    </footer>
  );
}
