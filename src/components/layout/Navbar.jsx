import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { navLinks } from "../../data/trip";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection, cn } from "../../utils/helpers";
import Container from "./Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.id);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "no-print fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-[72px]" aria-label="Main navigation">
          <button
            onClick={() => handleNav("overview")}
            className="flex items-center gap-2 font-bold text-lg text-text hover:text-primary transition-colors"
          >
            <Mountain size={24} className="text-primary" />
            <span className="hidden sm:inline">Trek</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                  activeId === link.id ? "text-primary" : "text-secondary hover:text-text"
                )}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border max-h-[70vh] overflow-y-auto">
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    activeId === link.id ? "bg-primary/10 text-primary" : "text-secondary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
