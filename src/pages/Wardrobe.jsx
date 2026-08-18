import React, { useState } from "react";
import { ArrowLeft, Plus, Search, Tag, Trash2, Edit2, Check, Scale, AlertCircle, FileText, Image as ImageIcon, Shirt, X, Footprints, Flame, CloudRain, Backpack, Cpu, Shield, HardHat, Compass, Archive, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFirestore } from "../hooks/useFirestore";

const PantsIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3h12l1.5 8v10h-4.5v-7h-2v7h-4.5V11z" />
  </svg>
);

const ShortsIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3h12l1.5 7v4h-4.5v-3h-2v3h-4.5v-4z" />
  </svg>
);

const DEFAULT_CATEGORIES = ["Footwear", "T-Shirt", "Shirt", "Lower", "Pant", "Shorts", "Headgear & Gloves", "Thermal & Inner", "Rainwear", "Luggage & Packs", "Essentials"];

const CATEGORY_ICONS = {
  "Footwear": { icon: Footprints, bg: "from-amber-500/20 to-orange-500/10", text: "text-amber-600" },
  "T-Shirt": { icon: Shirt, bg: "from-sky-500/20 to-blue-500/10", text: "text-sky-600" },
  "Shirt": { icon: Shirt, bg: "from-blue-500/20 to-indigo-500/10", text: "text-blue-600" },
  "Lower": { icon: PantsIcon, bg: "from-indigo-500/20 to-purple-500/10", text: "text-indigo-600" },
  "Pant": { icon: PantsIcon, bg: "from-purple-500/20 to-violet-500/10", text: "text-purple-600" },
  "Shorts": { icon: ShortsIcon, bg: "from-violet-500/20 to-fuchsia-500/10", text: "text-violet-600" },
  "Headgear & Gloves": { icon: HardHat, bg: "from-teal-500/20 to-emerald-500/10", text: "text-teal-600" },
  "Thermal & Inner": { icon: Flame, bg: "from-rose-500/20 to-red-500/10", text: "text-rose-600" },
  "Rainwear": { icon: CloudRain, bg: "from-cyan-500/20 to-sky-500/10", text: "text-cyan-600" },
  "Luggage & Packs": { icon: Backpack, bg: "from-emerald-500/20 to-green-500/10", text: "text-emerald-600" },
  "Essentials": { icon: Shield, bg: "from-pink-500/20 to-rose-500/10", text: "text-pink-600" }
};

const getWeatherEmoji = (weather) => {
  if (!weather) return "🌤️";
  const w = weather.toLowerCase();
  if (w.includes("extreme") || w.includes("below") || w.includes("cold") || w.includes("0°c")) return "❄️";
  if (w.includes("summer") || w.includes("warm")) return "☀️";
  if (w.includes("rain") || w.includes("waterproof")) return "🌧️";
  if (w.includes("wind") || w.includes("storm")) return "💨";
  if (w.includes("dry") || w.includes("humidity")) return "💧";
  return "🌤️";
};

const renderFallbackImage = (category) => {
  const config = CATEGORY_ICONS[category] || { icon: Compass, bg: "from-slate-500/20 to-slate-500/10", text: "text-slate-600" };
  const IconComp = config.icon;
  return (
    <div className={`w-full h-full bg-gradient-to-br ${config.bg} flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      <IconComp className={`w-14 h-14 ${config.text} drop-shadow-xs`} />
    </div>
  );
};

export default function Wardrobe() {
  const [items, setItems, isLoading] = useFirestore("trek_wardrobe_items", [
    { id: "w-1", name: "Decathlon Trek 100 Down Jacket", category: "Thermal & Inner", tags: ["Down", "Warm"], weight: "290g", weather: "Below 0°C", notes: "Extremely packable, keep dry", packed: false, image: "" },
    { id: "w-2", name: "Quechua MH500 Hiking Shoes", category: "Footwear", tags: ["GoreTex", "Waterproof"], weight: "950g", weather: "Snow / Rain", notes: "Break in before long treks", packed: false, image: "" },
    { id: "w-3", name: "Forclaz Trek 100 Fleece", category: "Thermal & Inner", tags: ["Fleece", "Layer"], weight: "250g", weather: "Moderate Cold", notes: "Good mid layer", packed: false, image: "" }
  ]);

  const [archivedItems, setArchivedItems] = useFirestore("trek_archived_wardrobe_items", []);
  const [wardrobeTab, setWardrobeTab] = useState("active");

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("wardrobe_unlocked") === "true";
  });
  const [inputPassword, setInputPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    if (inputPassword === "1612") {
      sessionStorage.setItem("wardrobe_unlocked", "true");
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleToggleArchiveItem = (id, e) => {
    e.stopPropagation();
    setArchivedItems(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };
  
  // Modals / Form States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "T-Shirt",
    tags: "",
    weight: "",
    weather: "Any Weather",
    notes: "",
    image: ""
  });

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      category: "T-Shirt",
      tags: "",
      weight: "",
      weather: "Any Weather",
      notes: "",
      image: ""
    });
    setIsFormOpen(true);
  };

  const handleOpenEdit = (item, e) => {
    e.stopPropagation();
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      tags: (item.tags || []).join(", "),
      weight: item.weight || "",
      weather: item.weather || "Any Weather",
      notes: item.notes || "",
      image: item.image || ""
    });
    setIsFormOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const tagsArray = formData.tags
      ? formData.tags.split(",").map(t => t.trim()).filter(Boolean)
      : [];

    if (editingItem) {
      // Edit
      setItems(prev => prev.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...formData, tags: tagsArray }
          : item
      ));
    } else {
      // Add
      const newItem = {
        id: `w-${Date.now()}`,
        name: formData.name,
        category: formData.category,
        tags: tagsArray,
        weight: formData.weight,
        weather: formData.weather,
        notes: formData.notes,
        image: formData.image,
        packed: false
      };
      setItems(prev => [...prev, newItem]);
    }
    setIsFormOpen(false);
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this wardrobe item?")) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  // Filter Items
  const filteredItems = items.filter(item => {
    const isArchived = archivedItems.includes(item.id);
    const matchesStatus = wardrobeTab === "archived" ? isArchived : !isArchived;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.tags || []).some(t => t.toLowerCase().includes(search.toLowerCase())) ||
      (item.notes || "").toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesStatus && matchesSearch && matchesCategory;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-screen bg-[#f2efe9] text-black flex flex-col items-center justify-center p-6 font-sans">
        <div className="bg-white/80 border border-black/10 rounded-[32px] p-8 max-w-sm w-full text-center shadow-lg backdrop-blur-md">
          <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-slate-800 mx-auto mb-4">
            <Lock size={20} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
            Protected Closet
          </h2>
          <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">
            Please enter the security password to access your digital wardrobe inventory.
          </p>
          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-3 text-xs font-semibold outline-hidden text-center tracking-widest"
              autoFocus
            />
            {authError && <p className="text-[10px] text-rose-600 font-bold">{authError}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider hover:bg-black/85 transition-all shadow-xs"
            >
              Unlock Closet
            </button>
          </form>
          <a
            href="/"
            className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-black uppercase tracking-wider mt-6 transition-colors"
          >
            <ArrowLeft size={10} /> Back to Adventures
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-[#f2efe9] text-black selection:bg-black/10 flex flex-col justify-between font-sans">
      {/* Header Banner */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-black/5 z-30 bg-[#f2efe9]/80 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="w-9 h-9 rounded-xl border border-black/10 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all shadow-xs"
            title="Back to Adventures"
          >
            <ArrowLeft size={16} />
          </a>
          <span className="font-extrabold text-lg uppercase flex items-center gap-2">
            <Shirt size={18} />
            Digital Wardrobe
          </span>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-black hover:bg-black/85 text-white px-4 py-2 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
        >
          <Plus size={14} /> Add Item
        </button>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 flex flex-col gap-8">
        
        {/* Intro Banner */}
        <div className="bg-white/40 border border-black/5 rounded-[32px] p-6 backdrop-blur-md">
          <h1 className="text-3xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            My Gear Closet
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed max-w-2xl">
            A centralized inventory of your hiking boots, alpine apparel, and adventure gear. Manage and track your equipment list for your upcoming expeditions.
          </p>
        </div>

        {/* Toolbar: Search + Status Selector + Category Quick Filter Tabs */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="relative flex-grow">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search gear by name, tags, or notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-black/10 hover:border-black/25 focus:border-black rounded-2xl pl-11 pr-4 py-3 text-sm font-medium transition-all shadow-xs focus:ring-1 focus:ring-black outline-hidden"
              />
            </div>

            {/* Status Selector (Active vs Archived) */}
            <div className="flex gap-1.5 bg-black/5 p-1 rounded-2xl shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setWardrobeTab("active")}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  wardrobeTab === "active"
                    ? "bg-white text-black shadow-sm"
                    : "text-slate-500 hover:text-black"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setWardrobeTab("archived")}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  wardrobeTab === "archived"
                    ? "bg-white text-black shadow-sm"
                    : "text-slate-500 hover:text-black"
                }`}
              >
                Archived
              </button>
            </div>
          </div>

          {/* Categories bar */}
          <div className="flex flex-wrap gap-1.5 bg-black/5 p-1 rounded-2xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                selectedCategory === "All"
                  ? "bg-white text-black shadow-sm"
                  : "text-slate-500 hover:text-black"
              }`}
            >
              All Category ({items.length})
            </button>
            {DEFAULT_CATEGORIES.map(cat => {
              const count = items.filter(i => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full border-2 border-dashed border-black/5 rounded-[32px] p-12 text-center py-16 bg-white/30 backdrop-blur-md">
              <div className="w-8 h-8 border-2 border-t-transparent border-black rounded-full animate-spin mx-auto mb-4" />
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Loading Closet...</p>
            </div>
          ) : (
            <>
              <AnimatePresence>
                {filteredItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="h-64 rounded-3xl overflow-hidden border border-black/10 relative group bg-white hover:shadow-xl transition-all duration-300"
                  >
                    {/* Base View: Product Image or Fallback banner occupying the full card */}
                    <div className="w-full h-full flex items-center justify-center bg-white">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                      ) : (
                        renderFallbackImage(item.category)
                      )}
                    </div>

                    {/* Hover View: Translucent dark details overlay */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 text-white select-none">
                      {/* Top Row: Category Label + Floating Actions */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[8px] font-black font-mono tracking-wide text-slate-300 bg-white/10 px-2 py-0.5 rounded uppercase">
                          {item.category}
                        </span>

                        <div className="flex gap-1.5">
                          <button
                            onClick={(e) => handleOpenEdit(item, e)}
                            className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center shadow-xs transition-colors"
                            title="Edit Item"
                          >
                            <Edit2 size={11} />
                          </button>
                          <button
                            onClick={(e) => handleToggleArchiveItem(item.id, e)}
                            className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all shadow-xs ${
                              archivedItems.includes(item.id)
                                ? "bg-amber-500 border-amber-600 text-white hover:bg-amber-600"
                                : "bg-white/20 border-white/10 text-white hover:bg-white hover:text-black"
                            }`}
                            title={archivedItems.includes(item.id) ? "Unarchive Item" : "Archive Item"}
                          >
                            <Archive size={11} />
                          </button>
                          <button
                            onClick={(e) => handleDelete(item.id, e)}
                            className="w-7 h-7 rounded-lg bg-white/20 hover:bg-rose-600 border-transparent hover:text-white flex items-center justify-center shadow-xs transition-colors"
                            title="Delete Item"
                          >
                            <Trash2 size={11} />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Section: Title, Climate and Description details */}
                      <div className="space-y-2 mt-auto text-left">
                        <h3 className="font-extrabold text-sm leading-snug text-white">
                          {item.name}
                        </h3>

                        {/* Weather Tag */}
                        {item.weather && (
                          <div className="flex">
                            <span className="text-[9px] font-bold font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                              {getWeatherEmoji(item.weather)} {item.weather}
                            </span>
                          </div>
                        )}

                        {item.notes && (
                          <p className="text-[10px] text-slate-300 leading-relaxed font-medium line-clamp-2 italic pt-1.5 border-t border-white/10">
                            "{item.notes}"
                          </p>
                        )}

                        {/* Custom Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="text-[8px] font-bold text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                <Tag size={7} /> {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredItems.length === 0 && (
                <div className="col-span-full border-2 border-dashed border-black/10 rounded-[32px] p-12 text-center py-16">
                  <Shirt size={32} className="mx-auto text-slate-300 mb-3" />
                  <h4 className="font-extrabold text-base text-slate-700">No Wardrobe Items Found</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1 leading-relaxed">
                    Add your gear items using the "Add Item" button or refine your search keywords.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 md:px-12 flex justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-black/45 z-30 border-t border-black/5 mt-12 bg-white/40">
        <span>© 2026 Digital Closet.</span>
        <span>Premium Adventure Wardrobe Manager.</span>
      </footer>

      {/* Add / Edit Drawer Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={() => setIsFormOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f2efe9] rounded-[36px] border border-black/10 p-6 md:p-8 max-w-md w-full shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute right-6 top-6 w-8 h-8 rounded-xl border border-black/10 flex items-center justify-center bg-white hover:bg-black/5 transition-colors"
              >
                <X size={14} />
              </button>

              <div className="mb-6 pr-8">
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">Wardrobe Closet</span>
                <h3 className="text-xl font-black uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {editingItem ? "Edit Wardrobe Item" : "Add Gear Item"}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Forclaz Down Trek Jacket"
                    className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_10px_center] bg-[size:18px] bg-no-repeat pr-10 cursor-pointer"
                  >
                    {DEFAULT_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Weather/Warmth
                    </label>
                    <select
                      value={formData.weather}
                      onChange={(e) => setFormData(prev => ({ ...prev, weather: e.target.value }))}
                      className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_10px_center] bg-[size:18px] bg-no-repeat pr-10 cursor-pointer"
                    >
                      <option value="Extreme Cold">Extreme Cold (-10°C to -20°C)</option>
                      <option value="Below 0°C">Below 0°C (Heavy Winter)</option>
                      <option value="Moderate Cold">Moderate Cold</option>
                      <option value="Mild Breeze">Mild Breeze / Spring</option>
                      <option value="Summer/Warm">Summer / Warm Weather</option>
                      <option value="Rainwear">Rainwear / Waterproof</option>
                      <option value="Windproof">Windproof / Storm</option>
                      <option value="Quick Dry">Quick Dry / Humidity</option>
                      <option value="Any Weather">Any Weather</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="e.g. warm, packable, down"
                      className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="e.g. Stored in secondary bag section..."
                    rows={2}
                    className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Gear Image (optional)
                  </label>
                  
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.image && !formData.image.startsWith("data:") ? formData.image : ""}
                      onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                      placeholder="Paste image URL here..."
                      className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black"
                    />
                    
                    {formData.image && (
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-black/15 bg-white relative group shrink-0">
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                          className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={10} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Or upload local file:</span>
                    <label className="bg-white hover:bg-slate-50 border border-black/10 hover:border-black/25 text-slate-600 hover:text-black font-semibold text-[10px] py-1.5 px-3 rounded-lg cursor-pointer shadow-xs transition-all flex items-center gap-1">
                      <ImageIcon size={12} />
                      Choose File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-black/85 text-white py-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all shadow-sm mt-4"
                >
                  {editingItem ? "Save Changes" : "Add to Closet"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
