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

  const plan = typeof window !== "undefined" && window.location.pathname.includes("plan2") ? "plan2" : "plan1";
  const isHome = typeof window !== "undefined" && (window.location.pathname === "/plan1" || window.location.pathname === "/plan2");

  const handleNav = (id) => {
    if (isHome) {
      scrollToSection(id);
    } else {
      window.location.href = `/${plan}#${id}`;
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "no-print fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-[#f2efe9]/80 backdrop-blur-xl shadow-sm border-b border-black/10" : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-[72px]" aria-label="Main navigation">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("overview")}
              className="flex items-center gap-2 font-bold text-lg text-text hover:opacity-75 transition-opacity"
            >
              <Mountain size={24} className="text-black" />
              <span className="font-extrabold tracking-tight uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>Trek.</span>
            </button>
            <a
              href="/"
              className="text-xs font-semibold text-secondary hover:text-black transition-colors bg-transparent hover:bg-black/5 px-2.5 py-1 rounded-[8px] border border-black/15"
            >
              Switch Plan
            </a>
          </div>


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
            <div className="w-[1px] h-4 bg-black/10 mx-2" />
            <a
              href={`/${plan}/stay`}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                window.location.pathname.includes("stay") ? "text-primary" : "text-secondary hover:text-text"
              )}
            >
              Stay
            </a>
            <a
              href={`/${plan}/expenses`}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                window.location.pathname.includes("expenses") ? "text-primary" : "text-secondary hover:text-text"
              )}
            >
              Expenses
            </a>
            <a
              href={`/${plan}/resources`}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                window.location.pathname.includes("resources") ? "text-primary" : "text-secondary hover:text-text"
              )}
            >
              Guides
            </a>
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
              <div className="h-[1px] bg-black/5 my-2" />
              <a
                href={`/${plan}/stay`}
                className={cn(
                  "text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors block",
                  window.location.pathname.includes("stay") ? "bg-primary/10 text-primary" : "text-secondary hover:bg-gray-50"
                )}
              >
                Stay
              </a>
              <a
                href={`/${plan}/expenses`}
                className={cn(
                  "text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors block",
                  window.location.pathname.includes("expenses") ? "bg-primary/10 text-primary" : "text-secondary hover:bg-gray-50"
                )}
              >
                Expenses
              </a>
              <a
                href={`/${plan}/resources`}
                className={cn(
                  "text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors block",
                  window.location.pathname.includes("resources") ? "bg-primary/10 text-primary" : "text-secondary hover:bg-gray-50"
                )}
              >
                Guides
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
