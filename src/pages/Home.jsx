import { lazy, Suspense } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import BackToTop from "../components/layout/BackToTop";
import Hero from "../components/hero/Hero";
import QuickStats, { OverviewSection } from "../components/overview/Overview";
import RouteTimeline from "../components/overview/RouteTimeline";

const ItinerarySection = lazy(() => import("../components/itinerary/ItinerarySection"));
const TransportSection = lazy(() => import("../components/transport/TransportSection"));
const TrekSection = lazy(() => import("../components/trek/TrekSection"));
const BudgetSection = lazy(() => import("../components/budget/BudgetSection"));
const StaySection = lazy(() => import("../components/stay/StaySection"));
const FoodSection = lazy(() => import("../components/food/FoodSection"));
const PackingSection = lazy(() => import("../components/packing/PackingSection"));
const SafetySection = lazy(() => import("../components/safety/SafetySection"));
const EmergencySection = lazy(() => import("../components/emergency/EmergencySection"));
const FAQSection = lazy(() => import("../components/faq/FAQSection"));
const PrintSection = lazy(() => import("../components/print/PrintSection"));

function SectionFallback() {
  return (
    <div className="py-20 flex justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <OverviewSection />
        <RouteTimeline />
        <Suspense fallback={<SectionFallback />}>
          <ItinerarySection />
          <TransportSection />
          <TrekSection />
          <BudgetSection />
          <StaySection />
          <FoodSection />
          <PackingSection />
          <SafetySection />
          <EmergencySection />
          <FAQSection />
          <PrintSection />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
