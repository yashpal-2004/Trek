import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import BackToTop from "../components/layout/BackToTop";
import Container from "../components/layout/Container";
import StaySection from "../components/stay/StaySection";

import { getActiveTripKey } from "../data/proxyHelper";

export default function StayPage() {
  const activeKey = getActiveTripKey();
  const planName = activeKey === "plan2" ? "Plan 2" : (activeKey === "sikkim" ? "Sikkim Trip" : "Plan 1");

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 font-sans pb-12">
      <ScrollProgress />
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-8 border-b border-black/5 bg-[#f2efe9]/50 backdrop-blur-md">
        <Container className="text-center">
          <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase">{planName} Accommodation</span>
          <h1 className="text-4xl font-black mt-2 mb-4 uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            Where to Stay
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Recommended lodgings, GMVN guest houses, homestays, and temple shelters for every stop.
          </p>
        </Container>
      </div>

      {/* Stay Section */}
      <main className="py-8 min-h-[50vh]">
        <StaySection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
