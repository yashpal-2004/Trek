import { Printer, Download, FileText, ExternalLink } from "lucide-react";
import { trip } from "../../data/trip";
import { itinerary } from "../../data/itinerary";
import { budget } from "../../data/budget";
import { formatCurrency } from "../../utils/currency";
import { downloadJSON } from "../../utils/helpers";
import Container from "../layout/Container";

export default function PrintSection() {
  const isPlan2 = typeof window !== "undefined" && window.location.pathname.includes("plan2");
  const planRoot = isPlan2 ? "/plan2" : "/plan1";

  const handlePrint = () => {
    // Open the plan page with ?print=1 — Home.jsx detects this param
    // and auto-triggers window.print() after all lazy sections are rendered (3.5s delay)
    window.open(`${planRoot}?print=1`, "_blank");
  };

  const handleExportTrip = () => {
    downloadJSON({ trip, itinerary, budget }, "garhwal-expedition-full.json");
  };

  return (
    <section id="print" className="py-10 scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Export</p>
          <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            Print &amp; Download
          </h2>
          <p className="text-xs text-slate-500 mt-1">Take your itinerary offline or print a copy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Print Card */}
          <div className="bg-black text-white rounded-[24px] p-7 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Printer size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm uppercase tracking-tight mb-1">Print Itinerary</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Opens the main trip plan page and triggers the browser print dialog.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-white text-black font-bold text-xs py-3 rounded-xl hover:bg-white/90 transition-all"
            >
              <Printer size={14} /> Print Now
            </button>
          </div>

          {/* Open Plan Card */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-7 flex flex-col gap-4 hover:border-black/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
              <ExternalLink size={16} className="text-black/60" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm uppercase tracking-tight mb-1">Open Plan Page</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Navigate to the full trip plan in a new tab to browse all sections.
              </p>
            </div>
            <a
              href={planRoot}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-black text-white font-bold text-xs py-3 rounded-xl hover:bg-black/85 transition-all"
            >
              <ExternalLink size={14} /> Open in New Tab
            </a>
          </div>

          {/* Download + Summary Card */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-7 flex flex-col gap-4 hover:border-black/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
              <FileText size={16} className="text-black/60" />
            </div>
            <div className="flex-1">
              <h3 className="font-extrabold text-sm uppercase tracking-tight mb-1">Trip Summary</h3>
              <div className="space-y-1.5 mt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Duration</span>
                  <span className="font-bold">{trip.duration}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">People</span>
                  <span className="font-bold">{trip.people}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Budget</span>
                  <span className="font-black text-black">{formatCurrency(budget.total)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleExportTrip}
              className="mt-auto inline-flex items-center justify-center gap-2 w-full border border-black/10 bg-black/[0.03] text-black font-bold text-xs py-3 rounded-xl hover:bg-black/5 transition-all"
            >
              <Download size={14} /> Download JSON
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
