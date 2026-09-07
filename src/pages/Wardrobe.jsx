import React, { useState } from "react";
import { ArrowLeft, Plus, Search, Tag, Trash2, Edit2, Check, Scale, AlertCircle, FileText, Image as ImageIcon, Shirt, X, Footprints, Flame, CloudRain, Backpack, Cpu, Shield, HardHat, Compass, Archive, Lock, Briefcase, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFirestore } from "../hooks/useFirestore";
import { uploadToCloudinary, removeBackgroundCloudinary } from "../utils/cloudinary";
import { removeBackgroundPhotoroom } from "../utils/photoroom";
import { removeBackgroundClientSide } from "../utils/clientAi";

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

const DEFAULT_CATEGORIES = ["Footwear", "Jacket", "Sweater & Hoodie", "Tracksuit", "Kurta Pajama", "Formals", "Garments", "T-Shirt", "Shirt", "Lower", "Pant", "Shorts", "Headgear & Gloves", "Thermal & Inner", "Towel", "Toiletries", "Documents", "Essentials"];

const CATEGORY_ICONS = {
  "Footwear": { icon: Footprints, bg: "from-amber-500/20 to-orange-500/10", text: "text-amber-600" },
  "Jacket": { icon: Shield, bg: "from-orange-500/20 to-amber-500/10", text: "text-orange-600" },
  "Sweater & Hoodie": { icon: Flame, bg: "from-rose-500/20 to-orange-500/10", text: "text-rose-600" },
  "Tracksuit": { icon: PantsIcon, bg: "from-blue-500/20 to-teal-500/10", text: "text-blue-600" },
  "Kurta Pajama": { icon: Shirt, bg: "from-amber-600/20 to-yellow-500/10", text: "text-amber-700" },
  "Formals": { icon: Briefcase, bg: "from-slate-700/20 to-slate-900/10", text: "text-slate-800" },
  "Garments": { icon: Layers, bg: "from-teal-600/20 to-emerald-500/10", text: "text-teal-700" },
  "T-Shirt": { icon: Shirt, bg: "from-sky-500/20 to-blue-500/10", text: "text-sky-600" },
  "Shirt": { icon: Shirt, bg: "from-blue-500/20 to-indigo-500/10", text: "text-blue-600" },
  "Lower": { icon: PantsIcon, bg: "from-indigo-500/20 to-purple-500/10", text: "text-indigo-600" },
  "Pant": { icon: PantsIcon, bg: "from-purple-500/20 to-violet-500/10", text: "text-purple-600" },
  "Shorts": { icon: ShortsIcon, bg: "from-violet-500/20 to-fuchsia-500/10", text: "text-violet-600" },
  "Headgear & Gloves": { icon: HardHat, bg: "from-teal-500/20 to-emerald-500/10", text: "text-teal-600" },
  "Thermal & Inner": { icon: Flame, bg: "from-rose-500/20 to-red-500/10", text: "text-rose-600" },
  "Towel": { icon: Layers, bg: "from-cyan-500/20 to-blue-500/10", text: "text-cyan-600" },
  "Toiletries": { icon: Shield, bg: "from-emerald-500/20 to-teal-500/10", text: "text-emerald-700" },
  "Documents": { icon: FileText, bg: "from-blue-600/20 to-indigo-600/10", text: "text-blue-700" },
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
  const [outfits, setOutfits] = useFirestore("trek_wardrobe_outfits", [
    { id: "outfit-1", name: "Alpine Summit Layering", items: ["w-1", "w-2", "w-3"], notes: "Tested for sub-zero summit pushes" }
  ]);
  const [wardrobeTab, setWardrobeTab] = useState("active"); // "active" | "outfits" | "archived"

  // Outfit builder modal state
  const [isOutfitModalOpen, setIsOutfitModalOpen] = useState(false);
  const [editingOutfit, setEditingOutfit] = useState(null);
  const [outfitForm, setOutfitForm] = useState({ name: "", notes: "", items: [] });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("wardrobe_unlocked") === "true";
  });
  const [inputPassword, setInputPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    if (inputPassword === "2659") {
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

  const compressImage = (src, callback) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 220;
      const MAX_HEIGHT = 220;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = Math.round(width);
      canvas.height = Math.round(height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressedBase64 = canvas.toDataURL("image/jpeg", 0.4);
      callback(compressedBase64);
    };
    img.onerror = () => {
      // Fallback if crossOrigin load fails for external URL
      callback(src);
    };
    img.src = src;
  };

  const [isProcessingAiImage, setIsProcessingAiImage] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessingAiImage(true);

    try {
      // Step 1: Run Photoroom AI background removal to isolate clothes from person/background
      const cutoutBase64 = await removeBackgroundPhotoroom(file);
      const sourceToUpload = cutoutBase64 || file;

      // Step 2: Upload isolated cutout to Cloudinary
      const cloudUrl = await uploadToCloudinary(sourceToUpload);
      if (cloudUrl) {
        setFormData((prev) => ({ ...prev, image: cloudUrl }));
        setIsProcessingAiImage(false);
        return;
      }

      // Step 3: Local compression fallback if Cloudinary unavailable
      if (cutoutBase64) {
        compressImage(cutoutBase64, (compressed) => {
          setFormData((prev) => ({ ...prev, image: compressed }));
          setIsProcessingAiImage(false);
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        compressImage(event.target.result, (compressed) => {
          setFormData((prev) => ({ ...prev, image: compressed }));
          setIsProcessingAiImage(false);
        });
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.warn("AI extraction error:", err);
      setIsProcessingAiImage(false);
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
          className="bg-black hover:bg-black/85 text-white px-4 py-2 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
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

            {/* Status Selector (Active vs Outfits vs Archived) */}
            <div className="flex gap-1.5 bg-black/5 p-1 rounded-2xl shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setWardrobeTab("active")}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  wardrobeTab === "active"
                    ? "bg-white text-black shadow-sm"
                    : "text-slate-500 hover:text-black"
                }`}
              >
                Active ({items.length - archivedItems.length})
              </button>
              <button
                onClick={() => setWardrobeTab("outfits")}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                  wardrobeTab === "outfits"
                    ? "bg-white text-black shadow-sm"
                    : "text-slate-500 hover:text-black"
                }`}
              >
                <Sparkles size={11} className="text-amber-500" />
                Outfit Combos ({outfits.length})
              </button>
              <button
                onClick={() => setWardrobeTab("archived")}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  wardrobeTab === "archived"
                    ? "bg-white text-black shadow-sm"
                    : "text-slate-500 hover:text-black"
                }`}
              >
                Archived ({archivedItems.length})
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

        {/* Tab content conditional rendering */}
        {wardrobeTab === "outfits" ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white/40 p-5 rounded-3xl border border-black/5">
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                  Outfit Combos ({outfits.length})
                </h3>
                <p className="text-xs text-slate-500 font-medium">Group jackets, boots & base layers into full expedition outfits.</p>
              </div>
              <button
                onClick={() => {
                  setEditingOutfit(null);
                  setOutfitForm({ name: "", notes: "", items: [] });
                  setIsOutfitModalOpen(true);
                }}
                className="bg-black text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-black/85 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Plus size={14} /> Create Outfit Combo
              </button>
            </div>

            {outfits.length === 0 ? (
              <div className="border-2 border-dashed border-black/10 rounded-[32px] p-12 text-center py-16 bg-white/40">
                <Sparkles size={32} className="mx-auto text-amber-500 mb-3" />
                <h4 className="font-extrabold text-base text-slate-800">No Outfit Combos Created</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1 mb-4 leading-relaxed">
                  Combine tops, bottoms, shoes & outer layers into reusable outfit sets for your treks.
                </p>
                <button
                  onClick={() => {
                    setEditingOutfit(null);
                    setOutfitForm({ name: "", notes: "", items: [] });
                    setIsOutfitModalOpen(true);
                  }}
                  className="px-4 py-2 bg-black text-white text-xs font-black uppercase rounded-xl hover:bg-black/85 transition-all"
                >
                  Build First Outfit Combo
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {outfits.map((outfit) => {
                  const outfitItemsList = items.filter((i) => outfit.items.includes(i.id));
                  return (
                    <div key={outfit.id} className="bg-white rounded-3xl border border-black/10 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-black text-base uppercase tracking-tight text-slate-900">{outfit.name}</h4>
                          <div className="flex gap-1">
                            <button
                              onClick={() => {
                                setEditingOutfit(outfit);
                                setOutfitForm({ name: outfit.name, notes: outfit.notes || "", items: outfit.items });
                                setIsOutfitModalOpen(true);
                              }}
                              className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                              title="Edit Outfit"
                            >
                              <Edit2 size={12} />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm("Delete this outfit combo?")) {
                                  setOutfits((prev) => prev.filter((o) => o.id !== outfit.id));
                                }
                              }}
                              className="p-1.5 hover:bg-rose-50 text-slate-500 hover:text-rose-600 rounded-lg transition-colors"
                              title="Delete Outfit"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>

                        {outfit.notes && (
                          <p className="text-xs text-slate-500 italic mb-3">"{outfit.notes}"</p>
                        )}

                        <div className="space-y-2">
                          <p className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest">Outfit Layering Pieces ({outfitItemsList.length})</p>
                          <div className="flex flex-wrap gap-2">
                            {outfitItemsList.map((item) => (
                              <div key={item.id} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-black/5 text-xs font-bold text-slate-700">
                                {item.image ? (
                                  <img src={item.image} alt={item.name} className="w-6 h-6 rounded-md object-cover border border-black/5" />
                                ) : (
                                  <Shirt size={14} className="text-slate-400 shrink-0" />
                                )}
                                <span className="truncate max-w-[120px]">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Grid List */
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

                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* AI Extraction Dropdown Button */}
                            <div className="relative group/ai">
                              <button
                                type="button"
                                className="px-2 h-7 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-mono text-[9px] font-black uppercase flex items-center gap-1 shadow-xs transition-colors"
                              >
                                <Sparkles size={10} /> Extract AI
                              </button>

                              {/* Dropdown Options */}
                              <div className="absolute right-0 top-full mt-1 w-44 bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-1.5 hidden group-hover/ai:flex flex-col gap-1 z-30 backdrop-blur-md">
                                <button
                                  type="button"
                                  onClick={async (e) => {
                                    e.stopPropagation();
                                    if (!item.image) {
                                      alert("No image available to extract.");
                                      return;
                                    }
                                    const cutoutBase64 = await removeBackgroundPhotoroom(item.image);
                                    if (cutoutBase64) {
                                      const cloudUrl = await uploadToCloudinary(cutoutBase64);
                                      setItems(prev => prev.map(i => i.id === item.id ? { ...i, image: cloudUrl || cutoutBase64 } : i));
                                    } else {
                                      alert("Photoroom extraction failed.");
                                    }
                                  }}
                                  className="w-full px-2.5 py-1.5 rounded-lg hover:bg-amber-500/20 text-left flex items-center gap-2 transition-colors text-amber-400 font-mono text-[9px] font-bold"
                                >
                                  <Sparkles size={10} /> Photoroom AI (10 Clean)
                                </button>

                                <button
                                  type="button"
                                  onClick={async (e) => {
                                    e.stopPropagation();
                                    if (!item.image) {
                                      alert("No image available to extract.");
                                      return;
                                    }
                                    const cutoutBase64 = await removeBackgroundClientSide(item.image);
                                    if (cutoutBase64) {
                                      const cloudUrl = await uploadToCloudinary(cutoutBase64);
                                      setItems(prev => prev.map(i => i.id === item.id ? { ...i, image: cloudUrl || cutoutBase64 } : i));
                                    } else {
                                      alert("Free Browser AI extraction failed.");
                                    }
                                  }}
                                  className="w-full px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/20 text-left flex items-center gap-2 transition-colors text-emerald-400 font-mono text-[9px] font-bold"
                                >
                                  <Sparkles size={10} /> Free AI (Unlimited)
                                </button>

                                <button
                                  type="button"
                                  onClick={async (e) => {
                                    e.stopPropagation();
                                    if (!item.image) {
                                      alert("No image available to extract.");
                                      return;
                                    }
                                    const transparentUrl = await removeBackgroundCloudinary(item.image);
                                    if (transparentUrl) {
                                      setItems(prev => prev.map(i => i.id === item.id ? { ...i, image: transparentUrl } : i));
                                    } else {
                                      alert("Enable free 'Cloudinary AI Background Removal' add-on in Cloudinary Console.");
                                    }
                                  }}
                                  className="w-full px-2.5 py-1.5 rounded-lg hover:bg-sky-500/20 text-left flex items-center gap-2 transition-colors text-sky-400 font-mono text-[9px] font-bold"
                                >
                                  <Sparkles size={10} /> Cloudinary AI (25 Free)
                                </button>
                              </div>
                            </div>

                            <button
                              onClick={(e) => handleOpenEdit(item, e)}
                              className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center shadow-xs transition-colors shrink-0"
                              title="Edit Item"
                            >
                              <Edit2 size={11} />
                            </button>
                            <button
                              onClick={(e) => handleToggleArchiveItem(item.id, e)}
                              className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all shadow-xs shrink-0 ${
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
                              className="w-7 h-7 rounded-lg bg-white/20 hover:bg-rose-600 border-transparent hover:text-white flex items-center justify-center shadow-xs transition-colors shrink-0"
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
        )}
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
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!val) {
                          setFormData(prev => ({ ...prev, image: "" }));
                          return;
                        }
                        setFormData(prev => ({ ...prev, image: val }));
                        compressImage(val, (compressed) => {
                          setFormData(prev => ({ ...prev, image: compressed }));
                        });
                      }}
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

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1">
                      <Sparkles size={10} className="text-amber-500" />
                      Auto AI Clothes Isolator
                    </span>
                    <label className={`bg-white hover:bg-slate-50 border border-black/10 hover:border-black/25 text-slate-600 hover:text-black font-semibold text-[10px] py-1.5 px-3 rounded-lg cursor-pointer shadow-xs transition-all flex items-center gap-1.5 ${
                      isProcessingAiImage ? "opacity-50 pointer-events-none" : ""
                    }`}>
                      {isProcessingAiImage ? (
                        <>
                          <div className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                          <span>Extracting Clothes AI...</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon size={12} />
                          Choose File (Auto-Cutout)
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isProcessingAiImage}
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

      {/* Outfit Combo Builder Modal */}
      <AnimatePresence>
        {isOutfitModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={() => setIsOutfitModalOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#f2efe9] rounded-[36px] border border-black/10 p-6 md:p-8 max-w-lg w-full shadow-2xl relative z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOutfitModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-slate-500 hover:text-black transition-colors"
              >
                <X size={16} />
              </button>

              <div className="mb-6 pr-8">
                <span className="text-[10px] font-black font-mono tracking-widest text-amber-600 uppercase flex items-center gap-1">
                  <Sparkles size={11} /> Mix & Match Builder
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {editingOutfit ? "Edit Outfit Combo" : "Build Outfit Combo"}
                </h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!outfitForm.name.trim()) return;
                  if (editingOutfit) {
                    setOutfits((prev) =>
                      prev.map((o) => (o.id === editingOutfit.id ? { ...o, ...outfitForm } : o))
                    );
                  } else {
                    const newOutfit = {
                      id: `outfit-${Date.now()}`,
                      name: outfitForm.name,
                      notes: outfitForm.notes,
                      items: outfitForm.items
                    };
                    setOutfits((prev) => [...prev, newOutfit]);
                  }
                  setIsOutfitModalOpen(false);
                }}
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Outfit Combo Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={outfitForm.name}
                    onChange={(e) => setOutfitForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Sub-Zero Summit Layering, Casual Ghat Outfit"
                    className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Notes / Expedition Conditions
                  </label>
                  <input
                    type="text"
                    value={outfitForm.notes}
                    onChange={(e) => setOutfitForm((prev) => ({ ...prev, notes: e.target.value }))}
                    placeholder="e.g. Down jacket + thermal + boots for cold evening"
                    className="w-full bg-white border border-black/10 focus:border-black rounded-xl px-4 py-2.5 text-xs font-semibold outline-hidden focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Select Wardrobe Pieces ({outfitForm.items.length} selected)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto p-1 border border-black/5 rounded-2xl bg-white/40">
                    {items.map((item) => {
                      const isSelected = outfitForm.items.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            setOutfitForm((prev) => ({
                              ...prev,
                              items: isSelected
                                ? prev.items.filter((x) => x !== item.id)
                                : [...prev.items, item.id]
                            }));
                          }}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-2.5 ${
                            isSelected
                              ? "bg-amber-500/10 border-amber-500/40 text-amber-950 font-bold"
                              : "bg-white border-black/5 text-slate-700 hover:border-black/15"
                          }`}
                        >
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-8 h-8 rounded-lg object-cover shrink-0 border border-black/5" />
                          ) : (
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 border border-black/5">
                              <Shirt size={14} className="text-slate-400" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs truncate">{item.name}</p>
                            <p className="text-[9px] text-slate-400 font-mono">{item.category}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-amber-600 text-white" : "border border-slate-300"
                          }`}>
                            {isSelected && <Check size={12} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-black/85 text-white py-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all shadow-sm mt-4"
                >
                  {editingOutfit ? "Save Outfit Combo" : "Save New Combo"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
