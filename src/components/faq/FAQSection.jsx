import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ChevronsDown, ChevronsUp } from "lucide-react";
import { faq, faqCategories } from "../../data/faq";
import { filterBySearch } from "../../utils/helpers";
import Container from "../layout/Container";

const categoryColors = {
  Transport:  { bg: "bg-blue-50",    text: "text-blue-700"   },
  Budget:     { bg: "bg-emerald-50", text: "text-emerald-700"},
  Trek:       { bg: "bg-amber-50",   text: "text-amber-700"  },
  Safety:     { bg: "bg-red-50",     text: "text-red-600"    },
  Stay:       { bg: "bg-purple-50",  text: "text-purple-700" },
  Food:       { bg: "bg-orange-50",  text: "text-orange-700" },
  Packing:    { bg: "bg-slate-100",  text: "text-slate-600"  },
  Practical:  { bg: "bg-cyan-50",    text: "text-cyan-700"   },
  General:    { bg: "bg-slate-100",  text: "text-slate-600"  },
  Weather:    { bg: "bg-sky-50",     text: "text-sky-700"    },
};

export default function FAQSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openIds, setOpenIds] = useState(new Set());

  let filtered = filterBySearch(faq, search, ["question", "answer"]);
  if (category !== "All") filtered = filtered.filter((f) => f.category === category);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll  = () => setOpenIds(new Set(filtered.map((f) => f.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <section id="faq" className="py-10 scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-7">
          <div className="flex-1">
            <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Questions</p>
            <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              Frequently Asked
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={expandAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/10 bg-white/60 text-xs font-bold hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <ChevronsDown size={13} /> Expand All
            </button>
            <button
              onClick={collapseAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/10 bg-white/60 text-xs font-bold hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <ChevronsUp size={13} /> Collapse
            </button>
          </div>
        </div>

        {/* Search + Category Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="pl-8 pr-4 py-2.5 rounded-xl border border-black/10 bg-white/70 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black/5 w-full sm:w-56"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border transition-all ${
                  category === cat
                    ? "bg-black text-white border-black"
                    : "bg-white/60 border-black/10 text-slate-500 hover:bg-white hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-sm">No questions match your search.</div>
        ) : (
          <div className="space-y-2">
            {filtered.map((item) => {
              const isOpen = openIds.has(item.id);
              const catStyle = categoryColors[item.category] || { bg: "bg-slate-100", text: "text-slate-600" };
              return (
                <div
                  key={item.id}
                  className={`bg-white/70 backdrop-blur-md border rounded-[20px] overflow-hidden transition-all ${isOpen ? "border-black/20 shadow-[0_4px_16px_rgba(0,0,0,0.04)]" : "border-black/8 hover:border-black/15"}`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-start justify-between p-5 text-left gap-4"
                  >
                    <div className="flex-1">
                      <span className={`text-[9px] font-black font-mono uppercase px-1.5 py-0.5 rounded-md ${catStyle.bg} ${catStyle.text} inline-block mb-1.5`}>
                        {item.category}
                      </span>
                      <p className="font-bold text-sm text-black leading-snug">{item.question}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
                      <ChevronDown size={16} className="text-slate-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-black/5 pt-3">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
