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

import { getActiveTripKey } from "../data/proxyHelper";

export default function Resources({ isSection = false }) {
  const activeKey = getActiveTripKey();
  const planName = activeKey === "plan2" ? "Plan 2" : (activeKey === "sikkim" ? "Sikkim Trip" : "Plan 1");
  const [activeTab, setActiveTab] = useState("treks");

  const tabs = [
    { id: "treks",     label: "Treks",     icon: Mountain,   component: <TrekSection /> },
    { id: "food",      label: "Food",      icon: Coffee,     component: <FoodSection /> },
    { id: "packing",   label: "Packing",   icon: Backpack,   component: <PackingSection /> },
    { id: "safety",    label: "Safety",    icon: ShieldCheck,component: <SafetySection /> },
    { id: "emergency", label: "Emergency", icon: Flame,      component: <EmergencySection /> },
    { id: "faq",       label: "FAQ",       icon: HelpCircle, component: <FAQSection /> },
    { id: "print",     label: "Print",     icon: Printer,    component: <PrintSection /> },
  ];

  const activeComponent = tabs.find((t) => t.id === activeTab)?.component || <TrekSection />;

  if (isSection) {
    return (
      <section id="resources" className="py-20 md:py-28 bg-[#f2efe9] scroll-mt-20 border-t border-black/5">
        <Container>
          <div className="text-center mb-12">
            <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">{planName} · Guides</span>
            <h2 className="text-4xl md:text-5xl font-black mt-1 uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              Essential Resources
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed mt-2">
              Everything you need for the expedition — food spots, packing checklist, safety guidelines, and print backups.
            </p>
          </div>

          {/* Tab Rail */}
          <div className="sticky top-16 z-30 border-b border-black/5 bg-[#f2efe9]/90 backdrop-blur-xl no-print mb-8">
            <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border whitespace-nowrap transition-all duration-200 shrink-0",
                      isActive
                        ? "bg-black text-white border-black shadow-sm"
                        : "bg-white/60 text-slate-500 border-black/8 hover:bg-white hover:text-black hover:border-black/15"
                    )}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[50vh]">
            {activeComponent}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 font-sans pb-12">
      <ScrollProgress />
      <Navbar />

      {/* Hero Header */}
      <div className="pt-28 pb-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase">{planName} · Resources</span>
          <h1
            className="text-5xl md:text-6xl font-black mt-3 mb-4 uppercase tracking-tight leading-none"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Essential<br />Resources
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Everything you need for the expedition — food spots, packing checklist, safety guidelines, and print backups.
          </p>
        </div>
      </div>

      {/* Tab Rail */}
      <div className="sticky top-16 z-30 border-b border-black/5 bg-[#f2efe9]/90 backdrop-blur-xl no-print">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border whitespace-nowrap transition-all duration-200 shrink-0",
                    isActive
                      ? "bg-black text-white border-black shadow-sm"
                      : "bg-white/60 text-slate-500 border-black/8 hover:bg-white hover:text-black hover:border-black/15"
                  )}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="min-h-[50vh]">
        {activeComponent}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
