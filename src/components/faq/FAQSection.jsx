import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronsDown, ChevronsUp } from "lucide-react";
import { faq, faqCategories } from "../../data/faq";
import { filterBySearch } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";

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

  const expandAll = () => setOpenIds(new Set(filtered.map((f) => f.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle
          label="Questions"
          title="Frequently Asked"
          description="Everything you need to know before your expedition."
          action={
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" icon={ChevronsDown} onClick={expandAll}>Expand All</Button>
              <Button variant="ghost" size="sm" icon={ChevronsUp} onClick={collapseAll}>Collapse All</Button>
            </div>
          }
        />

        <SearchBar value={search} onChange={setSearch} placeholder="Search FAQ..." className="mb-4 max-w-md" />
        <div className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${category === cat ? "bg-primary text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="text-center text-secondary py-12">No questions match your search.</p>
          ) : (
            filtered.map((item) => {
              const isOpen = openIds.has(item.id);
              return (
                <div key={item.id} className="bg-card rounded-[18px] border border-border overflow-hidden">
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-xs text-primary font-medium">{item.category}</span>
                      <p className="font-medium text-text mt-0.5">{item.question}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={20} className="text-secondary shrink-0 ml-4" /></motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm text-secondary leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </section>
  );
}
