import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import BackToTop from "../components/layout/BackToTop";
import Container from "../components/layout/Container";
import FoodSection from "../components/food/FoodSection";
import PackingSection from "../components/packing/PackingSection";
import SafetySection from "../components/safety/SafetySection";
import EmergencySection from "../components/emergency/EmergencySection";
import FAQSection from "../components/faq/FAQSection";
import PrintSection from "../components/print/PrintSection";
import TrekSection from "../components/trek/TrekSection";
import { Coffee, Backpack, ShieldCheck, Flame, HelpCircle, Printer, Mountain } from "lucide-react";
import { cn } from "../utils/helpers";

export default function Resources() {
  const isPlan2 = typeof window !== "undefined" && window.location.pathname.includes("plan2");
  const planName = isPlan2 ? "Plan 2" : "Plan 1";
  const [activeTab, setActiveTab] = useState("treks");

  const tabs = [
    { id: "treks", label: "Treks", icon: Mountain, component: <TrekSection /> },
    { id: "food", label: "Food", icon: Coffee, component: <FoodSection /> },
    { id: "packing", label: "Packing", icon: Backpack, component: <PackingSection /> },
    { id: "safety", label: "Safety", icon: ShieldCheck, component: <SafetySection /> },
    { id: "emergency", label: "Emergency", icon: Flame, component: <EmergencySection /> },
    { id: "faq", label: "FAQ", icon: HelpCircle, component: <FAQSection /> },
    { id: "print", label: "Print", icon: Printer, component: <PrintSection /> },
  ];

  const activeComponent = tabs.find((t) => t.id === activeTab)?.component || <TrekSection />;

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 font-sans pb-12">
      <ScrollProgress />
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-8 border-b border-black/5 bg-[#f2efe9]/50 backdrop-blur-md">
        <Container className="text-center">
          <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase">{planName} Guides</span>
          <h1 className="text-4xl font-black mt-2 mb-4 uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            Essential Resources
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Everything you need for the expedition: food spots, packing checklist, safety guidelines, and print backups.
          </p>
        </Container>
      </div>

      {/* Tab Switcher */}
      <div className="sticky top-16 z-30 bg-[#f2efe9]/80 backdrop-blur-md border-b border-black/5 py-4 no-print">
        <Container>
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none justify-start lg:justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold border transition-all whitespace-nowrap",
                    activeTab === tab.id
                      ? "bg-black text-white border-black shadow-md scale-102"
                      : "bg-white/60 text-slate-600 border-black/10 hover:bg-white hover:text-black"
                  )}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Main Tab Content */}
      <main className="py-8 min-h-[50vh]">
        {activeComponent}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
