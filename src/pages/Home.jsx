import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import BackToTop from "../components/layout/BackToTop";
import QuickStats, { OverviewSection } from "../components/overview/Overview";
import RouteTimeline from "../components/overview/RouteTimeline";
import ItinerarySection from "../components/itinerary/ItinerarySection";
import TransportSection from "../components/transport/TransportSection";
import StaySection from "../components/stay/StaySection";
import BudgetSection from "../components/budget/BudgetSection";
import ExpensesSection from "./Expenses";
import ResourcesSection from "./Resources";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "overview";
      
      if (["stay", "budget", "expenses", "resources"].includes(hash)) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setActiveTab("overview");
        // Wait a brief moment for the dashboard components to mount, then scroll
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 100);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "1") {
      // Wait for lazy sections + images to render before printing
      const timer = setTimeout(() => {
        window.print();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-16 lg:pt-[72px] min-h-[75vh]">
        {activeTab === "overview" && (
          <>
            <QuickStats />
            <RouteTimeline />
            <ItinerarySection />
            <TransportSection />
          </>
        )}
        {activeTab === "stay" && <StaySection />}
        {activeTab === "budget" && <BudgetSection />}
        {activeTab === "expenses" && <ExpensesSection isSection={true} />}
        {activeTab === "resources" && <ResourcesSection isSection={true} />}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
