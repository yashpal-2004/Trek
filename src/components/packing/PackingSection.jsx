import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getIcon } from "../../utils/icons";
import { packing } from "../../data/packing";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFirestore } from "../../hooks/useFirestore";
import { getParentTripId } from "../../data/proxyHelper";
import Container from "../layout/Container";
import { CheckCircle2, Circle, Package, Shirt, Plus, X, Tag, Lock, Check } from "lucide-react";

export default function PackingSection() {
  const parentTripId = getParentTripId();
  const [checked, setChecked] = useLocalStorage(`packing_checklist_${parentTripId}`, {});
  const [wardrobeItems] = useFirestore("trek_wardrobe_items", []);
  const [selectedWardrobeIds, setSelectedWardrobeIds] = useFirestore(`trek_packing_wardrobe_${parentTripId}`, []);
  const [showWardrobeModal, setShowWardrobeModal] = useState(false);
  const [wardrobeSearch, setWardrobeSearch] = useState("");
  const [wardrobeCategory, setWardrobeCategory] = useState("All");

  const getItemId = (item) => item.id || item.name;
  const getCategoryTitle = (cat) => cat.category || cat.name;

  const defaultItems = packing.flatMap((cat) => cat.items);
  const selectedWardrobeItems = wardrobeItems.filter(i => selectedWardrobeIds.includes(i.id));

  const totalCount = defaultItems.length + selectedWardrobeItems.length;
  const checkedDefaultCount = defaultItems.filter((item) => checked[getItemId(item)]).length;
  const checkedWardrobeCount = selectedWardrobeItems.filter((item) => checked[item.id]).length;
  const checkedCount = checkedDefaultCount + checkedWardrobeCount;

  const pct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
  const isComplete = totalCount > 0 && checkedCount === totalCount;

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleCategory = (category) => {
    const catItems = category.items;
    const allChecked = catItems.every((item) => checked[getItemId(item)]);
    const updates = {};
    catItems.forEach((item) => { updates[getItemId(item)] = !allChecked; });
    setChecked((prev) => ({ ...prev, ...updates }));
  };

  const [itemToRemove, setItemToRemove] = useState(null); // item object to confirm removing from packing list

  const handleRemoveWardrobeClick = (item, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setItemToRemove(item);
  };

  const confirmRemoveWardrobeItem = () => {
    if (itemToRemove) {
      setSelectedWardrobeIds((prev) => prev.filter((x) => x !== itemToRemove.id));
      setItemToRemove(null);
    }
  };

  const toggleWardrobeSelection = (item) => {
    const isSelected = selectedWardrobeIds.includes(item.id);
    if (isSelected) {
      setItemToRemove(item);
    } else {
      setSelectedWardrobeIds((prev) => [...prev, item.id]);
    }
  };

  const wardrobeCategories = ["All", ...new Set(wardrobeItems.map(i => i.category || "Other"))];
  const filteredWardrobe = wardrobeItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(wardrobeSearch.toLowerCase()) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(wardrobeSearch.toLowerCase())));
    const matchesCategory = wardrobeCategory === "All" || item.category === wardrobeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="packing" className="py-10 scroll-mt-20">
      <Container>
        {/* Header + Progress */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Prepare</p>
              <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                Packing Checklist & Wardrobe
              </h2>
            </div>
            <button
              onClick={() => setShowWardrobeModal(true)}
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-black/85 text-xs font-extrabold px-4 py-2.5 rounded-2xl shadow-sm transition-all cursor-pointer self-start sm:self-auto"
            >
              <Shirt size={14} />
              <span>Select from Wardrobe ({selectedWardrobeIds.length})</span>
            </button>
          </div>

          {/* Big progress block */}
          <div className="bg-black text-white rounded-[24px] p-6 flex items-center gap-6">
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none" stroke="white" strokeWidth="3"
                  strokeDasharray={`${pct} ${100 - pct}`}
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-black">{pct}%</span>
            </div>
            <div className="flex-1">
              <p className="font-extrabold text-xl">{checkedCount} <span className="text-white/40 font-medium text-base">/ {totalCount}</span></p>
              <p className="text-white/50 text-xs mt-0.5">items packed ({selectedWardrobeItems.length} from wardrobe)</p>
              {isComplete && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-xs font-bold mt-1">
                  All packed! You're ready for the expedition.
                </motion.p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Selected Digital Wardrobe Clothes Card */}
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-[24px] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <Shirt size={15} className="text-amber-700" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs uppercase tracking-tight text-amber-950">Wardrobe Clothes</h3>
                  <p className="text-[10px] text-amber-700 font-medium">{checkedWardrobeCount}/{selectedWardrobeItems.length} packed</p>
                </div>
              </div>
              <button
                onClick={() => setShowWardrobeModal(true)}
                className="text-[9px] font-black font-mono uppercase bg-amber-200/60 hover:bg-amber-200 text-amber-900 px-2 py-1 rounded-lg transition-colors cursor-pointer"
              >
                + Add / Manage
              </button>
            </div>

            {/* Mini progress bar */}
            <div className="h-1 bg-amber-950/10 rounded-full mb-4 overflow-hidden">
              <div
                className="h-full bg-amber-600 rounded-full transition-all duration-500"
                style={{ width: `${selectedWardrobeItems.length > 0 ? Math.round((checkedWardrobeCount / selectedWardrobeItems.length) * 100) : 0}%` }}
              />
            </div>

            {selectedWardrobeItems.length === 0 ? (
              <div className="text-center py-6 border border-dashed border-amber-900/15 rounded-2xl bg-white/40">
                <Shirt size={24} className="mx-auto text-amber-600/40 mb-2" />
                <p className="text-xs font-extrabold text-amber-900">No Wardrobe Clothes Added</p>
                <p className="text-[10px] text-amber-700/80 max-w-[180px] mx-auto mt-0.5 mb-3">Pick your jackets, shoes & outfits from your personal closet.</p>
                <button
                  onClick={() => setShowWardrobeModal(true)}
                  className="px-3 py-1.5 bg-amber-900 text-amber-50 text-[10px] font-extrabold uppercase rounded-xl hover:bg-amber-950 transition-colors"
                >
                  Browse Wardrobe
                </button>
              </div>
            ) : (
              <ul className="space-y-2">
                {selectedWardrobeItems.map((item) => {
                  const done = !!checked[item.id];
                  return (
                    <li key={item.id}>
                      <label className="flex items-center gap-2.5 cursor-pointer group bg-white/60 p-2 rounded-xl border border-amber-900/5 hover:border-amber-900/15 transition-all">
                        <span className="shrink-0">
                          {done
                            ? <CheckCircle2 size={16} className="text-emerald-600" />
                            : <Circle size={16} className="text-amber-800/30 group-hover:text-amber-800/50 transition-colors" />
                          }
                        </span>
                        <input type="checkbox" checked={done} onChange={() => toggle(item.id)} className="sr-only" />
                        {item.image && (
                          <img src={item.image} alt={item.name} className="w-7 h-7 rounded-lg object-cover shrink-0 border border-black/5" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold truncate ${done ? "line-through text-slate-400" : "text-slate-800"}`}>
                            {item.name}
                          </p>
                          <p className="text-[9px] text-slate-400 font-mono">{item.category} {item.weight ? `· ${item.weight}` : ""}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => handleRemoveWardrobeClick(item, e)}
                          className="p-1 text-slate-300 hover:text-red-500 rounded-lg transition-colors shrink-0"
                          title="Remove from packing list"
                        >
                          <X size={12} />
                        </button>
                      </label>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Standard Packing Categories */}
          {packing.map((category) => {
            const Icon = getIcon(category.icon, Package);
            const catTitle = getCategoryTitle(category);
            const catChecked = category.items.filter((i) => checked[getItemId(i)]).length;
            const catPct = Math.round((catChecked / category.items.length) * 100);

            return (
              <div key={catTitle} className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-5 hover:border-black/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                      <Icon size={14} className="text-black/60" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xs uppercase tracking-tight">{catTitle}</h3>
                      <p className="text-[10px] text-slate-400">{catChecked}/{category.items.length} packed</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="text-[9px] font-black font-mono uppercase text-slate-400 hover:text-black transition-colors"
                  >
                    {catChecked === category.items.length ? "Uncheck All" : "Check All"}
                  </button>
                </div>

                {/* Mini progress bar */}
                <div className="h-1 bg-black/5 rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-500"
                    style={{ width: `${catPct}%` }}
                  />
                </div>

                <ul className="space-y-2">
                  {category.items.map((item) => {
                    const itemId = getItemId(item);
                    const done = !!checked[itemId];
                    return (
                      <li key={itemId}>
                        <label className="flex items-center gap-2.5 cursor-pointer group">
                          <span className="shrink-0">
                            {done
                              ? <CheckCircle2 size={16} className="text-emerald-500" />
                              : <Circle size={16} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
                            }
                          </span>
                          <input type="checkbox" checked={done} onChange={() => toggle(itemId)} className="sr-only" />
                          <span className={`text-xs font-medium flex-1 ${done ? "line-through text-slate-400" : "text-slate-700"}`}>
                            {item.name}
                          </span>
                          {item.essential && (
                            <span className="text-[8px] font-black font-mono uppercase bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded shrink-0">
                              Essential
                            </span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Modal: Select Clothes from Digital Wardrobe */}
        <AnimatePresence>
          {showWardrobeModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#f2efe9] rounded-[28px] border border-black/10 max-w-xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-black/10 bg-white/70 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-700">
                      <Shirt size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                        Digital Wardrobe Closet
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">Select clothes & gear to pack for this expedition</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowWardrobeModal(false)}
                    className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Filter / Search Bar */}
                <div className="p-4 border-b border-black/5 bg-white/40 space-y-3">
                  <input
                    type="text"
                    placeholder="Search clothes, tags, weight..."
                    value={wardrobeSearch}
                    onChange={(e) => setWardrobeSearch(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-black/10 rounded-xl text-xs font-semibold focus:outline-none focus:border-black"
                  />
                  <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
                    {wardrobeCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setWardrobeCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase whitespace-nowrap transition-all ${
                          wardrobeCategory === cat
                            ? "bg-black text-white"
                            : "bg-white/80 text-slate-600 border border-black/5 hover:bg-white"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Wardrobe Items List */}
                <div className="p-6 overflow-y-auto flex-1 space-y-3">
                  {filteredWardrobe.length === 0 ? (
                    <div className="text-center py-12 text-slate-400">
                      <Shirt size={32} className="mx-auto opacity-30 mb-2" />
                      <p className="text-xs font-bold">No clothes found in wardrobe</p>
                      <p className="text-[10px] mt-0.5">Add items in the Digital Wardrobe section to pick them here.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filteredWardrobe.map((item) => {
                        const isSelected = selectedWardrobeIds.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => toggleWardrobeSelection(item)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 relative ${
                              isSelected
                                ? "bg-amber-500/10 border-amber-500/40 shadow-xs"
                                : "bg-white border-black/8 hover:border-black/20"
                            }`}
                          >
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="w-11 h-11 rounded-xl object-cover border border-black/5 shrink-0" />
                            ) : (
                              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-black/5 flex items-center justify-center shrink-0">
                                <Shirt size={18} className="text-slate-400" />
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <h4 className="font-extrabold text-xs truncate text-slate-800">{item.name}</h4>
                              <p className="text-[10px] text-slate-400 font-mono mt-0.5">{item.category} {item.weight ? `· ${item.weight}` : ""}</p>
                              {item.weather && (
                                <span className="inline-block text-[8px] font-extrabold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mt-1">
                                  {item.weather}
                                </span>
                              )}
                            </div>

                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isSelected ? "bg-amber-600 text-white" : "border border-slate-300 bg-slate-50"
                            }`}>
                              {isSelected && <Check size={14} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-black/10 bg-white/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">
                    {selectedWardrobeIds.length} item(s) selected
                  </span>
                  <button
                    onClick={() => setShowWardrobeModal(false)}
                    className="px-6 py-2.5 bg-black text-white font-extrabold text-xs uppercase tracking-wide rounded-xl hover:bg-black/85 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal: Confirm Remove Wardrobe Item */}
        <AnimatePresence>
          {itemToRemove && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[28px] border border-black/10 p-6 max-w-sm w-full shadow-2xl relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                    <X size={22} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base uppercase tracking-tight">Remove from Packing List?</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                      Are you sure you want to remove <span className="font-bold text-slate-800">"{itemToRemove.name}"</span> from this trip's packing checklist?
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setItemToRemove(null)}
                    className="w-1/2 bg-slate-100 text-slate-600 border border-black/10 font-bold py-2.5 rounded-xl hover:bg-slate-200 transition-all text-xs tracking-wide cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={confirmRemoveWardrobeItem}
                    className="w-1/2 bg-red-600 text-white font-bold py-2.5 rounded-xl hover:bg-red-700 transition-all text-xs tracking-wide cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
