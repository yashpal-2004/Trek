import React, { useState, useMemo, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2, Receipt, Users, Wallet, AlertCircle, TrendingUp, IndianRupee, ChevronDown, Pencil, X, ArrowRight, Search, Download } from "lucide-react";
import { useExpense } from "../hooks/useExpense";
import { expenseCategories } from "../data/trip";
import { getActiveTripKey, getParentTripId } from "../data/proxyHelper";
import { formatCurrency } from "../utils/currency";
import Container from "../components/layout/Container";
import { transport } from "../data/transport";
import { stayOptions, budget } from "../data/budget";
import { useFirestore } from "../hooks/useFirestore";

const categoryColors = {
  Transport: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500", hex: "#3b82f6" },
  Accommodation: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", hex: "#10b981" },
  Food: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", hex: "#f59e0b" },
  Rafting: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", hex: "#a855f7" },
  Emergency: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500", hex: "#ef4444" },
  Shopping: { bg: "bg-pink-50", text: "text-pink-700", dot: "bg-pink-500", hex: "#ec4899" },
  Other: { bg: "bg-slate-50", text: "text-slate-700", dot: "bg-slate-400", hex: "#94a3b8" },
};

export default function Expenses({ isSection = false }) {
  const activeKey = getActiveTripKey();
  const parentTripId = getParentTripId();
  const isPlan2 = activeKey === "plan2";
  const defaultMembers = parentTripId === "bir-billing"
    ? ["Yashpal", "Vaishnavi", "Adarsh", "Anshika"]
    : ["Yashpal", "Vansh"];
  const [members, setMembers] = useFirestore(`trek_members_${parentTripId}`, defaultMembers);
  const [advances, setAdvances] = useFirestore(`trek_advances_${parentTripId}`, []);
  const planName = activeKey === "plan2" ? "Plan 2" : (activeKey === "sikkim" ? "Sikkim Trip" : "Plan 1");

  // Advance form state
  const [advFrom, setAdvFrom] = useState("");
  const [advTo, setAdvTo] = useState("");
  const [advAmount, setAdvAmount] = useState("");
  const [advNotes, setAdvNotes] = useState("");

  const { expenses, addExpense, updateExpense, deleteExpense, totalSpent } = useExpense();

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Transport");
  const [selectedPreset, setSelectedPreset] = useState("custom_transport");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [paidBy, setPaidBy] = useState("Yashpal");
  const [splitWith, setSplitWith] = useState(members);
  const [paidAmounts, setPaidAmounts] = useState({});
  const [settleLater, setSettleLater] = useState(false);
  const [showSettleLaterOnly, setShowSettleLaterOnly] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showAdvanceModal, setShowAdvanceModal] = useState(false);
  const [editingAdvanceId, setEditingAdvanceId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPayer, setFilterPayer] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [deleteAdvanceTargetId, setDeleteAdvanceTargetId] = useState(null);

  const [showMemberManager, setShowMemberManager] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [editNameValue, setEditNameValue] = useState("");

  // Keep splitWith in sync: always default to ALL current members
  useEffect(() => {
    setSplitWith(members);
  }, [members]);

  const handleAddMember = (e) => {
    e.preventDefault();
    const name = newMemberName.trim();
    if (!name) return;
    if (!members.includes(name)) {
      const updated = [...members, name];
      setMembers(updated);
      setSplitWith(updated);
    }
    setNewMemberName("");
  };

  const handleRenameMember = (oldName, newName) => {
    const trimmed = newName.trim();
    if (!trimmed || trimmed === oldName) {
      setEditingMember(null);
      return;
    }
    const updated = members.map((m) => (m === oldName ? trimmed : m));
    setMembers(updated);
    if (paidBy === oldName) setPaidBy(trimmed);
    if (splitWith.includes(oldName)) {
      setSplitWith(splitWith.map((m) => (m === oldName ? trimmed : m)));
    }
    if (paidAmounts[oldName] !== undefined) {
      const copy = { ...paidAmounts };
      copy[trimmed] = copy[oldName];
      delete copy[oldName];
      setPaidAmounts(copy);
    }
    setEditingMember(null);
  };

  const handleDeleteMember = (name) => {
    if (members.length <= 1) return;
    const updated = members.filter((m) => m !== name);
    setMembers(updated);
    if (paidBy === name) setPaidBy(updated[0] || "");
    setSplitWith(splitWith.filter((m) => m !== name));
    if (paidAmounts[name] !== undefined) {
      const copy = { ...paidAmounts };
      delete copy[name];
      setPaidAmounts(copy);
    }
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((exp) => {
      const matchesSettleLater = showSettleLaterOnly ? exp.settleLater : true;
      const matchesSearch = searchQuery
        ? (exp.notes || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
          (exp.category || "").toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesPayer = filterPayer && filterPayer !== "all"
        ? exp.paidBy === filterPayer
        : true;
      const matchesCategory = filterCategory && filterCategory !== "all"
        ? exp.category === filterCategory
        : true;
      return matchesSettleLater && matchesSearch && matchesPayer && matchesCategory;
    });
  }, [expenses, showSettleLaterOnly, searchQuery, filterPayer, filterCategory]);

  const handleExportXLS = () => {
    const tripNameMap = {
      "rudranath": "Rudranath Trek",
      "yulla": "Yulla Kanda",
      "ladakh": "Ladakh Trip",
      "spiti": "Spiti Valley",
      "annapurna": "Annapurna Base Camp",
      "hemkund": "Hemkund Sahib",
      "shrikhand-mahadev": "Shrikhand Mahadev",
      "hampta-pass": "Hampta Pass",
      "madhyamaheshwar": "Madhyamaheshwar Trek",
      "kedarkantha": "Kedarkantha Trek",
      "bir-billing": "Bir Billing",
      "jibhi": "Jibhi Trip",
      "kashmir": "Kashmir Great Lakes",
      "ujjain": "Ujjain Trip",
      "auli": "Auli Trip"
    };
    
    const tripName = tripNameMap[parentTripId] || parentTripId;
    const sheetTitle = `${tripName} - ${planName} Expenses`;
    
    const excelColors = {
      Transport: { bg: "#eff6ff", text: "#1d4ed8" },
      Accommodation: { bg: "#ecfdf5", text: "#047857" },
      Food: { bg: "#fffbeb", text: "#b45309" },
      Rafting: { bg: "#faf5ff", text: "#7e22ce" },
      Emergency: { bg: "#fef2f2", text: "#b91c1c" },
      Shopping: { bg: "#fdf2f8", text: "#be185d" },
      Other: { bg: "#f8fafc", text: "#475569" }
    };

    let html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>
        <style>
          table { border-collapse: collapse; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
          th { background-color: #000000; color: #ffffff; font-weight: bold; border: 1px solid #e2e8f0; padding: 8px; text-align: left; }
          td { border: 1px solid #e2e8f0; padding: 8px; font-size: 13px; }
          .title { font-size: 18px; font-weight: bold; padding: 15px 0; text-transform: uppercase; text-align: center; }
          .section-header { font-weight: bold; background-color: #f1f5f9; font-size: 14px; padding: 10px; }
          .negative { color: #dc2626; font-weight: bold; }
          .positive { color: #16a34a; font-weight: bold; }
          .total { font-weight: bold; background-color: #fafafa; }
        </style>
      </head>
      <body>
        <table>
          <tr>
            <td colspan="7" class="title">${sheetTitle}</td>
          </tr>
          <tr>
            <th>Date</th>
            <th>Notes</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Paid By</th>
            <th>Split With</th>
            <th>Settle Later</th>
          </tr>
    `;

    filteredExpenses.forEach((e) => {
      const catColor = excelColors[e.category] || excelColors.Other;
      const catStyle = `background-color: ${catColor.bg}; color: ${catColor.text}; font-weight: bold; text-align: center;`;
      
      html += `
        <tr>
          <td>${e.date || ""}</td>
          <td>${e.notes || ""}</td>
          <td style="${catStyle}">${e.category}</td>
          <td style="font-weight: bold;">₹${e.amount}</td>
          <td>${e.paidBy}</td>
          <td>${`"${(e.splitWith || []).join(", ")}"`}</td>
          <td style="text-align: center;">${e.settleLater ? "Yes" : "No"}</td>
        </tr>
      `;
    });

    html += `
          <tr><td colspan="7" style="border: none; height: 20px;"></td></tr>
          <tr class="section-header">
            <td colspan="7">Summary</td>
          </tr>
          <tr class="total">
            <td colspan="3">Total Spent</td>
            <td colspan="4" style="font-size: 14px;">₹${totalSpent.toLocaleString("en-IN")}</td>
          </tr>
          <tr><td colspan="7" style="border: none; height: 20px;"></td></tr>
          <tr class="section-header">
            <td colspan="7">Net Balance Sheet</td>
          </tr>
    `;

    Object.entries(balances.netBalances).forEach(([name, bal]) => {
      const roundedBal = Math.round(bal);
      const isNeg = roundedBal < 0;
      const classStr = isNeg ? 'class="negative"' : 'class="positive"';
      const prefix = isNeg ? "" : "+";
      
      html += `
        <tr>
          <td colspan="3" style="font-weight: bold;">${name}</td>
          <td colspan="4" ${classStr}>${prefix}₹${roundedBal.toLocaleString("en-IN")}</td>
        </tr>
      `;
    });

    html += `
        </table>
      </body>
      </html>
    `;

    const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `${sheetTitle.replace(/\s+/g, '_')}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const transportPresets = useMemo(() => {
    return transport.map((item) => ({
      value: `transport_${item.id}`,
      label: `${item.from} → ${item.to} (${item.mode})`,
      amountPerPerson: item.fare || item.cheapest || 0,
      category: "Transport",
      notes: `${item.from} to ${item.to} (${item.mode})`,
    }));
  }, [transport]);

  const stayPresets = useMemo(() => {
    return stayOptions.map((item, idx) => {
      const price = item.pricePerNight || item.budget || item.mid || 0;
      const nightsCount = item.nights || 1;
      return {
        value: `stay_${item.id || item.name || idx}`,
        label: `Stay: ${item.destination || item.name || 'Homestay'} (${nightsCount} Night${nightsCount > 1 ? 's' : ''})`,
        amountPerPerson: price * nightsCount,
        category: "Accommodation",
        notes: `Stay at ${item.destination || item.name || 'Homestay'} for ${nightsCount} nights`,
      };
    });
  }, [stayOptions]);

  const otherPresets = useMemo(() => {
    const list = [];
    budget?.categories?.forEach((cat) => {
      if (cat.id === "transport" || cat.id === "accommodation") return;
      if (cat.subItems) {
        cat.subItems.forEach((sub, idx) => {
          list.push({
            value: `other_${cat.id}_${idx}`,
            label: `${cat.label}: ${sub.name}`,
            amountPerPerson: sub.price || 0,
            category: cat.id === "emergency" ? "Emergency" : (cat.label || "Other"),
            notes: sub.name,
          });
        });
      }
    });
    return list;
  }, [budget]);

  const handlePresetChange = (presetValue) => {
    setSelectedPreset(presetValue);
    let p = null;
    if (presetValue.startsWith("transport_")) {
      p = transportPresets.find((x) => x.value === presetValue);
    } else if (presetValue.startsWith("stay_")) {
      p = stayPresets.find((x) => x.value === presetValue);
    } else if (presetValue.startsWith("other_")) {
      p = otherPresets.find((x) => x.value === presetValue);
    }

    if (p) {
      const totalAmt = p.amountPerPerson * members.length;
      setCategory(p.category);
      setAmount(totalAmt);
      setNotes(p.notes);
      const newPaid = {};
      members.forEach((m) => { newPaid[m] = p.amountPerPerson; });
      setPaidAmounts(newPaid);
    } else {
      const cat = presetValue.replace("custom_", "");
      const match = expenseCategories.find((c) => c.toLowerCase() === cat.toLowerCase());
      const categoryName = match || (cat.charAt(0).toUpperCase() + cat.slice(1));
      setCategory(categoryName);
      setAmount("");
      setNotes("");
      setPaidAmounts({});
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const selectedPresetObj = useMemo(() => {
    if (selectedPreset.startsWith("transport_")) {
      return transportPresets.find((x) => x.value === selectedPreset);
    } else if (selectedPreset.startsWith("stay_")) {
      return stayPresets.find((x) => x.value === selectedPreset);
    } else if (selectedPreset.startsWith("other_")) {
      return otherPresets.find((x) => x.value === selectedPreset);
    } else {
      const customOptions = expenseCategories.map((cat) => ({
        value: `custom_${cat.toLowerCase()}`,
        label: `Custom ${cat}`,
      }));
      return customOptions.find((x) => x.value === selectedPreset);
    }
  }, [selectedPreset, transportPresets, stayPresets, otherPresets, expenseCategories]);

  const handleCheckboxChange = (name) => {
    setSplitWith((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
  };

  const handlePaidByChange = (name) => {
    if (paidBy === "Share") {
      setPaidBy(name);
      setPaidAmounts({});
      setAmount("");
    } else if (paidBy === name) {
      setPaidBy("Share");
      const currentAmt = Number(amount) || 0;
      const shareAmt = currentAmt / members.length;
      const newPaidAmounts = {};
      members.forEach((m) => {
        newPaidAmounts[m] = currentAmt ? shareAmt : "";
      });
      setPaidAmounts(newPaidAmounts);
    } else {
      setPaidBy(name);
      setPaidAmounts({});
      setAmount("");
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0 || splitWith.length === 0) return;

    const formattedPaidAmounts = {};
    if (paidBy === "Share") {
      members.forEach((m) => {
        formattedPaidAmounts[m] = Number(paidAmounts[m] || 0);
      });
    }

    if (editingId) {
      // Update existing expense
      const formattedPaidAmounts2 = {};
      if (paidBy === "Share") {
        members.forEach((m) => { formattedPaidAmounts2[m] = Number(paidAmounts[m] || 0); });
      }
      updateExpense(editingId, {
        date, category,
        amount: Number(amount),
        notes: notes || `${category} expense`,
        paidBy,
        splitWith,
        paidAmounts: paidBy === "Share" ? formattedPaidAmounts2 : null,
        settleLater,
      });
      setEditingId(null);
    } else {
      addExpense({
        date,
        category,
        amount: Number(amount),
        notes: notes || `${category} expense`,
        paidBy,
        splitWith,
        paidAmounts: paidBy === "Share" ? formattedPaidAmounts : null,
        settleLater,
      });
    }
    setShowExpenseModal(false);
    setAmount("");
    setNotes("");
    setSelectedPreset("custom_transport");
    setCategory("Transport");
    setSplitWith(members);
    setPaidAmounts({});
    setPaidBy(members[0] || "Yashpal");
    setSettleLater(false);
  };

  const handleStartEdit = (exp) => {
    setEditingId(exp.id);
    setDate(exp.date);
    setCategory(exp.category);
    setAmount(String(exp.amount));
    setNotes(exp.notes || "");
    setPaidBy(exp.paidBy);
    setSplitWith(exp.splitWith || members);
    setPaidAmounts(exp.paidAmounts || {});
    setSettleLater(exp.settleLater || false);
    // auto-select the matching preset key if possible
    setSelectedPreset(`custom_${exp.category.toLowerCase()}`);
    setShowExpenseModal(true);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setShowExpenseModal(false);
    setAmount("");
    setNotes("");
    setSelectedPreset("custom_transport");
    setCategory("Transport");
    setPaidBy(members[0]);
    setSplitWith(members);
    setPaidAmounts({});
    setSettleLater(false);
  };

  const handleStartEditAdvance = (adv) => {
    setEditingAdvanceId(adv.id);
    setAdvFrom(adv.from);
    setAdvTo(adv.to);
    setAdvAmount(String(adv.amount));
    setAdvNotes(adv.notes || "");
    setShowAdvanceModal(true);
  };

  const handleCancelEditAdvance = () => {
    setEditingAdvanceId(null);
    setAdvAmount("");
    setAdvNotes("");
    setAdvFrom("");
    setAdvTo("");
    setShowAdvanceModal(false);
  };

  const handleAddAdvance = (e) => {
    e.preventDefault();
    const amt = Number(advAmount);
    if (!advFrom || !advTo || advFrom === advTo || amt <= 0) return;
    
    if (editingAdvanceId) {
      setAdvances((prev) =>
        prev.map((a) =>
          a.id === editingAdvanceId
            ? { ...a, from: advFrom, to: advTo, amount: amt, notes: advNotes.trim() }
            : a
        )
      );
      setEditingAdvanceId(null);
    } else {
      setAdvances((prev) => [
        ...prev,
        { id: Date.now(), from: advFrom, to: advTo, amount: amt, notes: advNotes.trim(), date: new Date().toISOString().split("T")[0] },
      ]);
    }
    setAdvAmount("");
    setAdvNotes("");
    setAdvFrom("");
    setAdvTo("");
    setShowAdvanceModal(false);
  };

  const handleDeleteAdvance = (id) => {
    setAdvances((prev) => prev.filter((a) => a.id !== id));
  };

  const balances = useMemo(() => {
    const netBalances = {};
    members.forEach((m) => { netBalances[m] = 0; });

    expenses.forEach((exp) => {
      if (exp.settleLater) return;

      const payer = exp.paidBy || members[0];
      const sharers = exp.splitWith || members;

      // Credit payers
      if (payer === "Share" && exp.paidAmounts) {
        const pAmounts = exp.paidAmounts;
        members.forEach((m) => {
          netBalances[m] = (netBalances[m] || 0) + Number(pAmounts[m] || 0);
        });
      } else {
        if (members.includes(payer)) {
          netBalances[payer] = (netBalances[payer] || 0) + exp.amount;
        }
      }

      // Debit sharers — only count current members to avoid phantom entries from old expenses
      const activeSharers = sharers.filter((m) => members.includes(m));
      if (activeSharers.length === 0) return;
      const sharePerPerson = exp.amount / sharers.length; // keep original per-person share
      activeSharers.forEach((m) => {
        netBalances[m] = (netBalances[m] || 0) - sharePerPerson;
      });
    });

    // Factor in cash advances: giver gets credit, receiver gets debit
    advances.forEach((adv) => {
      if (members.includes(adv.from)) {
        netBalances[adv.from] = (netBalances[adv.from] || 0) + Number(adv.amount);
      }
      if (members.includes(adv.to)) {
        netBalances[adv.to] = (netBalances[adv.to] || 0) - Number(adv.amount);
      }
    });

    const creditors = Object.entries(netBalances).filter(([, b]) => b > 0).sort((a, b) => b[1] - a[1]);
    const debtors = Object.entries(netBalances).filter(([, b]) => b < 0).sort((a, b) => a[1] - b[1]);
    const settlements = [];
    const c = creditors.map(([n, b]) => [n, b]);
    const d = debtors.map(([n, b]) => [n, -b]);
    let ci = 0, di = 0;
    while (ci < c.length && di < d.length) {
      const amount = Math.min(c[ci][1], d[di][1]);
      if (amount > 0.01) settlements.push({ from: d[di][0], to: c[ci][0], amount: Math.round(amount) });
      c[ci][1] -= amount;
      d[di][1] -= amount;
      if (c[ci][1] < 0.01) ci++;
      if (d[di][1] < 0.01) di++;
    }

    return { netBalances, settlements };
  }, [expenses, members, advances]);

  const categoryBreakdown = useMemo(() => {
    const totals = {};
    expenses.forEach((exp) => {
      const cat = exp.category || "Other";
      totals[cat] = (totals[cat] || 0) + Number(exp.amount);
    });
    return Object.entries(totals)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([name, value]) => ({
        name,
        value,
        hex: (categoryColors[name] || categoryColors.Other).hex,
      }));
  }, [expenses]);

  const inputCls = "w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black/10 text-sm font-medium transition-all placeholder:text-slate-400";
  const labelCls = "text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 block mb-1.5";

  const renderDeleteAdvanceModal = () => {
    if (deleteAdvanceTargetId === null) return null;
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[28px] border border-black/10 p-7 max-w-sm w-full shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
              <Trash2 size={22} />
            </div>
            <div>
              <h3 className="font-extrabold text-lg uppercase tracking-tight">Delete Advance?</h3>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                Are you sure you want to delete this cash advance record? This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => setDeleteAdvanceTargetId(null)}
              className="w-1/2 bg-slate-100 text-slate-600 border border-black/10 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all text-xs tracking-wide cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                handleDeleteAdvance(deleteAdvanceTargetId);
                setDeleteAdvanceTargetId(null);
              }}
              className="w-1/2 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all text-xs tracking-wide cursor-pointer"
            >
              Delete
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  const renderAdvanceModal = () => {
    if (!showAdvanceModal) return null;
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-white rounded-[28px] border border-black/10 p-7 max-w-md w-full shadow-2xl relative my-8"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${editingAdvanceId ? "bg-amber-400" : "bg-green-100"}`}>
              {editingAdvanceId ? <Pencil size={14} className="text-black" /> : <ArrowRight size={15} className="text-green-700" />}
            </div>
            <h2 className="font-extrabold text-base uppercase tracking-tight">{editingAdvanceId ? "Edit Cash Advance" : "Record Cash Advance"}</h2>
            <button
              type="button"
              onClick={handleCancelEditAdvance}
              className="ml-auto p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-black transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleAddAdvance} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Given By</label>
                <select value={advFrom} onChange={(e) => setAdvFrom(e.target.value)} required className={inputCls + " py-2.5"}>
                  <option value="">Select</option>
                  {members.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Given To</label>
                <select value={advTo} onChange={(e) => setAdvTo(e.target.value)} required className={inputCls + " py-2.5"}>
                  <option value="">Select</option>
                  {members.filter(m => m !== advFrom).map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Amount (₹)</label>
                <input type="number" min="1" value={advAmount} onChange={(e) => setAdvAmount(e.target.value)} placeholder="0" required className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Note (optional)</label>
                <input type="text" value={advNotes} onChange={(e) => setAdvNotes(e.target.value)} placeholder="e.g. before trip" className={inputCls} />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleCancelEditAdvance}
                className="w-1/3 bg-slate-100 text-slate-600 border border-black/10 font-bold py-3 rounded-2xl hover:bg-slate-200 transition-all text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`w-2/3 font-bold py-3 rounded-2xl transition-all text-sm cursor-pointer ${editingAdvanceId ? "bg-amber-400 text-black hover:bg-amber-500" : "bg-green-600 hover:bg-green-700 text-white"}`}
              >
                {editingAdvanceId ? "Update" : "Record"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  };

  const renderBudgetProgressTracker = () => {
    const limitPerPerson = Number(budget?.total) || 0;
    if (limitPerPerson <= 0) return null;

    const groupBudgetLimit = limitPerPerson * members.length;
    const percentage = totalSpent > 0 ? Math.min(Math.round((totalSpent / groupBudgetLimit) * 100), 100) : 0;
    const avgSpentPerPerson = Math.round(totalSpent / members.length);
    
    let colorClass = "bg-emerald-500";
    let textClass = "text-emerald-700 bg-emerald-50";
    let borderClass = "border-emerald-100";
    if (percentage > 85) {
      colorClass = "bg-red-500";
      textClass = "text-red-700 bg-red-50";
      borderClass = "border-red-100";
    } else if (percentage > 60) {
      colorClass = "bg-amber-500";
      textClass = "text-amber-700 bg-amber-50";
      borderClass = "border-amber-100";
    }

    return (
      <div className={`w-full bg-white/70 backdrop-blur-md border ${borderClass} rounded-[28px] p-6 shadow-sm mb-6`}>
        <div className="flex justify-between items-center mb-2.5">
          <div>
            <h3 className="font-extrabold text-sm uppercase tracking-tight text-slate-800">Trip Budget Tracker</h3>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">Pool spent relative to total budget limit (scaled for {members.length} members)</p>
          </div>
          <span className={`text-xs font-black px-2.5 py-1 rounded-xl ${textClass}`}>
            {percentage}% Used
          </span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-2">
          <div
            className={`h-full transition-all duration-500 rounded-full ${colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-xs font-bold text-slate-500">
          <span>Spent: ₹{totalSpent.toLocaleString("en-IN")} <span className="text-[10px] font-medium text-slate-400">(Avg ₹{avgSpentPerPerson.toLocaleString("en-IN")}/p)</span></span>
          <span>Budget limit: ₹{groupBudgetLimit.toLocaleString("en-IN")} <span className="text-[10px] font-medium text-slate-400">(₹{limitPerPerson.toLocaleString("en-IN")}/p)</span></span>
        </div>
      </div>
    );
  };

  const renderExpenseModal = () => {
    if (!showExpenseModal) return null;
    return (
      
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-white rounded-[28px] border border-black/10 p-7 max-w-2xl w-full shadow-2xl relative my-8"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${editingId ? "bg-amber-400" : "bg-black"}`}>
                {editingId ? <Pencil size={15} className="text-black" /> : <Plus size={16} className="text-white" />}
              </div>
              <h2 className="font-extrabold text-base uppercase tracking-tight">{editingId ? "Edit Expense" : "Add Shared Expense"}</h2>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="ml-auto p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-black transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Date</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Category / Preset</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className={inputCls + " flex justify-between items-center text-left cursor-pointer pr-10 bg-white/80"}
                    >
                      <span className="truncate">
                        {selectedPresetObj ? `${selectedPresetObj.label} ${selectedPresetObj.amountPerPerson ? `(₹${selectedPresetObj.amountPerPerson}/p)` : ""}` : "Select Category / Preset"}
                      </span>
                      <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                        <div className="absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-black/10 bg-white/95 backdrop-blur-xl shadow-xl z-50 py-2 scrollbar-thin">
                          <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50">Transport from Itinerary</div>
                          {transportPresets.map((p) => (
                            <button
                              key={p.value}
                              type="button"
                              onClick={() => { handlePresetChange(p.value); setIsOpen(false); }}
                              className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-black/5 transition-colors flex justify-between items-center ${selectedPreset === p.value ? "bg-black/5 text-black" : "text-slate-700"}`}
                            >
                              <span>{p.label}</span>
                              <span className="text-[10px] text-slate-400 font-mono">₹{p.amountPerPerson}/p</span>
                            </button>
                          ))}
                          <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50 mt-2">Stays from Itinerary</div>
                          {stayPresets.map((p) => (
                            <button
                              key={p.value}
                              type="button"
                              onClick={() => { handlePresetChange(p.value); setIsOpen(false); }}
                              className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-black/5 transition-colors flex justify-between items-center ${selectedPreset === p.value ? "bg-black/5 text-black" : "text-slate-700"}`}
                            >
                              <span>{p.label}</span>
                              <span className="text-[10px] text-slate-400 font-mono">₹{p.amountPerPerson}/p</span>
                            </button>
                          ))}
                          {otherPresets.length > 0 && (
                            <>
                              <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50 mt-2">Other Presets from Itinerary</div>
                              {otherPresets.map((p) => (
                                <button
                                  key={p.value}
                                  type="button"
                                  onClick={() => { handlePresetChange(p.value); setIsOpen(false); }}
                                  className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-black/5 transition-colors flex justify-between items-center ${selectedPreset === p.value ? "bg-black/5 text-black" : "text-slate-700"}`}
                                >
                                  <span>{p.label}</span>
                                  <span className="text-[10px] text-slate-400 font-mono">₹{p.amountPerPerson}/p</span>
                                </button>
                              ))}
                            </>
                          )}
                          <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50 mt-2">Custom Expenses (Ad-hoc)</div>
                          {expenseCategories.map((cat) => {
                            const value = `custom_${cat.toLowerCase()}`;
                            const label = `Custom ${cat}`;
                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => { handlePresetChange(value); setIsOpen(false); }}
                                className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-black/5 transition-colors ${selectedPreset === value ? "bg-black/5 text-black" : "text-slate-700"}`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className={labelCls}>Paid By</label>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setShowMemberManager(!showMemberManager)}
                        className="text-[11px] font-bold text-slate-500 hover:text-black cursor-pointer px-2 py-0.5 border border-black/10 rounded-lg bg-white/50"
                      >
                        {showMemberManager ? "Done" : "Manage"}
                      </button>
                      <input
                        type="text"
                        placeholder="New"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        className="px-2 py-0.5 text-[11px] rounded-lg border border-black/10 focus:outline-none w-16 bg-white/50"
                      />
                      <button
                        type="button"
                        onClick={handleAddMember}
                        className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-lg hover:bg-black/80 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {showMemberManager && (
                    <div className="mb-3 p-3 bg-slate-50 rounded-2xl border border-black/5 space-y-2 max-h-40 overflow-y-auto">
                      {members.map((m) => (
                        <div key={m} className="flex items-center justify-between gap-2 bg-white px-3 py-1.5 rounded-xl border border-black/5">
                          {editingMember === m ? (
                            <input
                              type="text"
                              value={editNameValue}
                              onChange={(e) => setEditNameValue(e.target.value)}
                              onBlur={() => handleRenameMember(m, editNameValue)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleRenameMember(m, editNameValue);
                              }}
                              autoFocus
                              className="text-xs font-bold bg-transparent border-b border-black/20 focus:outline-none w-full"
                            />
                          ) : (
                            <span
                              onClick={() => { setEditingMember(m); setEditNameValue(m); }}
                              className="text-xs font-bold cursor-pointer hover:underline text-slate-700"
                            >
                              {m}
                            </span>
                          )}
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              disabled={members.length <= 1}
                              onClick={() => handleDeleteMember(m)}
                              className="p-1 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 disabled:opacity-30"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 py-1.5">
                    {members.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => { setPaidBy(m); setPaidAmounts({}); }}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${paidBy === m ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}
                      >
                        {m}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setPaidBy("Share");
                        const currentAmt = Number(amount) || 0;
                        const shareAmt = currentAmt / members.length;
                        const newPaidAmounts = {};
                        members.forEach((m) => { newPaidAmounts[m] = currentAmt ? shareAmt : ""; });
                        setPaidAmounts(newPaidAmounts);
                      }}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${paidBy === "Share" ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}
                    >
                      Multiple People
                    </button>
                  </div>
                </div>

                <div>
                  {paidBy === "Share" ? (
                    <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto p-1">
                      {members.map((m) => (
                        <div key={m}>
                          <label className="text-[9px] font-bold text-slate-400 block mb-1">{m} Paid</label>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={paidAmounts[m] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              setPaidAmounts((prev) => {
                                const newAmounts = { ...prev, [m]: val };
                                const totalSum = members.reduce((sum, member) => sum + Number(newAmounts[member] || 0), 0);
                                setAmount(totalSum);
                                return newAmounts;
                              });
                            }}
                            required
                            className={inputCls}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <label className={labelCls}>Amount (₹)</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => {
                          const val = e.target.value;
                          setAmount(val);
                          const amt = Number(val) || 0;
                          const shareAmt = amt / members.length;
                          const newPaidAmounts = {};
                          members.forEach((m) => { newPaidAmounts[m] = shareAmt; });
                          setPaidAmounts(newPaidAmounts);
                        }}
                        required
                        className={inputCls}
                      />
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className={labelCls}>Notes / Description</label>
                <input type="text" placeholder="e.g. Tea & snacks at Gopeshwar" value={notes} onChange={(e) => setNotes(e.target.value)} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Split With</label>
                <div className="flex flex-wrap gap-2">
                  {members.map((m) => (
                    <label key={m} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${splitWith.includes(m) ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}>
                      <input type="checkbox" checked={splitWith.includes(m)} onChange={() => handleCheckboxChange(m)} className="sr-only" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50/50 p-3 rounded-2xl border border-black/5">
                <input type="checkbox" id="settleLater" checked={settleLater} onChange={(e) => setSettleLater(e.target.checked)} className="rounded border-slate-300 text-black focus:ring-black w-4 h-4 cursor-pointer" />
                <label htmlFor="settleLater" className="text-xs font-bold text-slate-700 cursor-pointer select-none">Settle Later (Exclude from automatic calculations; settle manually)</label>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="w-1/3 bg-slate-100 text-slate-600 border border-black/10 font-bold py-3 rounded-2xl hover:bg-slate-200 transition-all text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`w-2/3 font-bold py-3 rounded-2xl transition-all text-sm ${editingId ? "bg-amber-400 text-black hover:bg-amber-500" : "bg-black text-white hover:bg-black/85"}`}
                >
                  {editingId ? "Update Entry" : "Add Entry"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
    
    );
  };

  
  const cumulativeData = useMemo(() => {
    const dates = [...new Set(expenses.map(e => e.date))].sort();
    if (dates.length === 0) return [];

    const groupBudgetLimit = (Number(budget?.total) || 0) * members.length;
    let runningTotal = 0;
    const data = [];
    
    dates.forEach((d) => {
      const dailyExpenses = expenses.filter(e => e.date === d);
      const dailyTotal = dailyExpenses.reduce((sum, e) => sum + Number(e.amount), 0);
      runningTotal += dailyTotal;
      
      let displayDate = d;
      try {
        const dateObj = new Date(d);
        if (!isNaN(dateObj)) {
          displayDate = dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
        }
      } catch (err) {}

      data.push({
        date: displayDate,
        rawDate: d,
        "Total Spent": runningTotal,
        "Budget Limit": groupBudgetLimit,
      });
    });
    return data;
  }, [expenses, budget, members]);

  const renderCumulativeSpendingChart = () => {
    const totalBudget = (Number(budget?.total) || 0) * members.length;
    if (totalBudget <= 0 || cumulativeData.length === 0) return null;

    return (
      <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-6 shadow-sm flex flex-col justify-between">
        <div>
          <h2 className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 mb-0.5">Cumulative Spending</h2>
          <p className="text-xs font-bold text-slate-800 mb-3">Growth vs. Budget limit</p>
        </div>
        <div className="w-full flex-1 min-h-[130px]">
          <ResponsiveContainer width="100%" height={130}>
            <AreaChart data={cumulativeData} margin={{ top: 10, right: 5, left: -22, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="date" stroke="#94a3b8" fontSize={8} fontWeight={600} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={8} fontWeight={600} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(val, name) => [name === "Total Spent" ? `₹${val.toLocaleString("en-IN")}` : `₹${val.toLocaleString("en-IN")} (Limit)`, name]}
                contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 10, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              />
              <Area type="monotone" dataKey="Total Spent" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorSpent)" />
              <Area type="monotone" dataKey="Budget Limit" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 5" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const renderPoolSummaryCard = () => (
    <div className="bg-black text-white rounded-[28px] p-7 shadow-sm flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-5">
        <Wallet size={16} className="text-white/60" />
        <h2 className="font-black text-sm uppercase tracking-wider text-white/60">Trip Pool Summary</h2>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Total Pool Spent</p>
          <p className="text-4xl font-black">{formatCurrency(totalSpent)}</p>
        </div>
        <div className="h-px bg-white/10" />
        <div className="flex justify-between items-end">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Avg Per Person</p>
          <p className="text-xl font-extrabold">{formatCurrency(Math.round(totalSpent / members.length))}</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Entries</p>
          <p className="text-xl font-extrabold">{expenses.length}</p>
        </div>
      </div>
    </div>
  );

  const renderPieChartCard = () => (
    <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
      <h2 className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 mb-4">Spending by Category</h2>
      {categoryBreakdown.length === 0 ? (
        <div className="flex flex-col items-center py-8 text-slate-300 gap-2">
          <IndianRupee size={28} className="opacity-30" />
          <p className="text-xs font-medium">No expenses yet</p>
        </div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={categoryBreakdown}
                cx="50%" cy="50%"
                innerRadius={40} outerRadius={60}
                paddingAngle={3}
                dataKey="value"
              >
                {categoryBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.hex} stroke="none" />
                ))}
              </Pie>
              <Tooltip
                formatter={(val) => [`₹${val.toLocaleString("en-IN")}`, ""]}
                contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                itemStyle={{ color: "#1e293b" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1.5 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
            {categoryBreakdown.map((entry) => {
              const pct = totalSpent > 0 ? Math.round((entry.value / totalSpent) * 100) : 0;
              return (
                <div key={entry.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.hex }} />
                    <span className="text-[11px] font-bold text-slate-600">{entry.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-slate-400">{pct}%</span>
                    <span className="text-[11px] font-extrabold text-slate-800">₹{entry.value.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );

  if (isSection) {
    return (
      <section id="expenses" className="pt-20 pb-20 md:pt-24 md:pb-28 bg-[#f2efe9] scroll-mt-20 border-t border-black/5">
        <Container>
          <div className="text-center mb-8">
            <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">{planName} Expenses</span>
            <h2 className="text-4xl md:text-5xl font-black mt-1 uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              Expense Ledger & Bill Splitter
            </h2>
          </div>

          {renderBudgetProgressTracker()}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderPoolSummaryCard()}
                {renderPieChartCard()}
                {renderCumulativeSpendingChart()}
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => { setEditingId(null); setSplitWith(members); setShowExpenseModal(true); }}
                  className="inline-flex items-center gap-2 bg-black text-white rounded-2xl px-5 py-3 hover:bg-black/85 transition-all shadow-md group cursor-pointer"
                >
                  <Plus size={16} className="text-white" />
                  <span className="font-extrabold text-sm tracking-tight">Add Shared Expense</span>
                </button>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Receipt size={15} className="text-slate-700" />
                    </div>
                    <h2 className="font-extrabold text-base uppercase tracking-tight">Shared Ledger</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setShowSettleLaterOnly(!showSettleLaterOnly)} className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer select-none transition-all ${showSettleLaterOnly ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}>Settle Later Only</button>
                    {expenses.length > 0 && <span className="text-[10px] font-bold font-mono text-slate-400 bg-black/5 px-2 py-1.5 rounded-lg">{filteredExpenses.length} entries</span>}
                  </div>
                </div>

              {/* Filter controls row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6 p-4 bg-slate-50/50 rounded-2xl border border-black/5">
                {/* Search query input */}
                <div className="sm:col-span-5 relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search size={14} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search note or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-black/10 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-xs font-semibold"
                  />
                </div>
                {/* Payer filter select */}
                <div className="sm:col-span-3">
                  <select
                    value={filterPayer}
                    onChange={(e) => setFilterPayer(e.target.value)}
                    className="w-full px-3 py-2 border border-black/10 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-xs font-semibold"
                  >
                    <option value="all">All Payers</option>
                    {members.map(m => <option key={m} value={m}>{m}</option>)}
                    <option value="Share">Multiple</option>
                  </select>
                </div>
                {/* Category filter select */}
                <div className="sm:col-span-3">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-black/10 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-xs font-semibold"
                  >
                    <option value="all">All Categories</option>
                    {Object.keys(categoryColors).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                {/* CSV Export action */}
                <div className="sm:col-span-1 flex justify-end">
                  <button
                    type="button"
                    onClick={handleExportXLS}
                    title="Export current view to CSV"
                    className="w-full sm:w-auto flex items-center justify-center p-2 border border-black/10 bg-white hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                  >
                    <Download size={14} />
                  </button>
                </div>
              </div>
                {filteredExpenses.length === 0 ? (
                  <div className="flex flex-col items-center py-16 text-slate-400 gap-3">
                    <Receipt size={36} className="opacity-25" />
                    <p className="text-sm font-medium">No expenses match the filter.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredExpenses.map((exp) => {
                      const sharers = exp.splitWith || members;
                      const payer = exp.paidBy || members[0];
                      const colors = categoryColors[exp.category] || categoryColors.Other;
                      let payerText = <span className="font-bold text-slate-600">{payer}</span>;
                      if (payer === "Share" && exp.paidAmounts) {
                        payerText = (
                          <span className="font-medium text-slate-500">
                            {Object.entries(exp.paidAmounts)
                              .filter(([, amt]) => Number(amt) > 0)
                              .map(([m, amt]) => `${m} (₹${amt})`)
                              .join(" & ")}
                          </span>
                        );
                      }
                      return (
                        <div key={exp.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-black/15 transition-all group">
                          <div className={`w-2 h-8 rounded-full shrink-0 ${colors.dot}`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <p className="font-bold text-sm truncate">{exp.notes}</p>
                              <span className={`text-[9px] font-black font-mono uppercase px-1.5 py-0.5 rounded-md shrink-0 ${colors.bg} ${colors.text}`}>{exp.category}</span>
                              {exp.settleLater && <span className="text-[9px] font-black font-mono uppercase px-1.5 py-0.5 rounded-md shrink-0 bg-amber-100 text-amber-800">Settle Later</span>}
                            </div>
                            <p className="text-[11px] text-slate-400">{payerText} paid · split with {sharers.filter(m => members.includes(m)).join(", ")} · {exp.date}</p>
                          </div>
                          <p className="font-black text-base shrink-0">{formatCurrency(exp.amount)}</p>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                            <button onClick={() => handleStartEdit(exp)} className="p-1.5 hover:bg-amber-50 hover:text-amber-500 rounded-xl text-slate-300 transition-colors">
                              <Pencil size={13} />
                            </button>
                            <button onClick={() => setDeleteTargetId(exp.id)} className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-xl text-slate-300 transition-colors">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center">
                    <TrendingUp size={15} className="text-slate-700" />
                  </div>
                  <h2 className="font-extrabold text-base uppercase tracking-tight">Settle Up</h2>
                </div>
                {balances.settlements.length === 0 ? (
                  <div className="flex flex-col items-center py-8 text-center gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-1"><AlertCircle size={22} className="text-emerald-500" /></div>
                    <p className="font-bold text-sm text-slate-700">All balanced!</p>
                    <p className="text-xs text-slate-400">No pending settlements.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {balances.settlements.map((set, idx) => (
                      <div key={idx} className="p-4 bg-black/[0.03] rounded-2xl border border-black/5">
                        <div className="flex justify-between items-center">
                          <div className="text-sm"><span className="font-black text-red-600">{set.from}</span><span className="text-slate-400 mx-1.5 text-xs">owes</span><span className="font-black text-emerald-700">{set.to}</span></div>
                          <span className="font-black text-base">{formatCurrency(set.amount)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cash Advances */}
              <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                    <ArrowRight size={15} className="text-green-700" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base uppercase tracking-tight">Cash Advances</h2>
                    <p className="text-[10px] text-slate-400 font-medium">Money given upfront before trip expenses</p>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => setShowAdvanceModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-all text-xs cursor-pointer mb-4"
                >
                  <Plus size={14} /> Record Upfront Cash
                </button>

                {advances.length > 0 && (
                  <div className="space-y-2 border-t border-black/5 pt-4">
                    {advances.map((adv) => (
                      <div key={adv.id} className="flex items-center justify-between p-3 bg-green-50/60 rounded-2xl border border-green-100 group">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 text-sm">
                            <span className="font-black text-green-700">{adv.from}</span>
                            <ArrowRight size={12} className="text-slate-400 shrink-0" />
                            <span className="font-black text-slate-700">{adv.to}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">{adv.notes || "Cash advance"} · {adv.date}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-extrabold text-sm text-green-700">₹{Number(adv.amount).toLocaleString("en-IN")}</span>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                            <button onClick={() => handleStartEditAdvance(adv)} className="p-1 hover:bg-amber-50 hover:text-amber-500 rounded-lg text-slate-300 transition-colors">
                              <Pencil size={11} />
                            </button>
                            <button onClick={() => setDeleteAdvanceTargetId(adv.id)} className="p-1 hover:bg-red-100 hover:text-red-500 rounded-lg text-slate-300 transition-colors">
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
                <h2 className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 mb-4">Net Balance Sheet</h2>
                <div className="space-y-2">
                  {Object.entries(balances.netBalances).map(([name, bal]) => (
                    <div key={name} className="flex justify-between items-center py-2.5 border-b border-black/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-[10px] font-black ${bal >= 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>{name[0]}</div>
                        <span className="font-bold text-sm">{name}</span>
                      </div>
                      <span className={`font-mono text-sm font-extrabold ${bal >= 0 ? "text-emerald-700" : "text-red-600"}`}>{bal >= 0 ? "+" : ""}{formatCurrency(Math.abs(Math.round(bal)))}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
        {deleteTargetId !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[28px] border border-black/10 p-7 max-w-sm w-full shadow-2xl relative overflow-hidden">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500"><Trash2 size={22} /></div>
                <div>
                  <h3 className="font-extrabold text-lg uppercase tracking-tight">Delete Expense?</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">Are you sure you want to delete this expense entry? This action cannot be undone.</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setDeleteTargetId(null)} className="w-1/2 bg-slate-100 text-slate-600 border border-black/10 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all text-xs tracking-wide cursor-pointer">Cancel</button>
                <button type="button" onClick={() => { deleteExpense(deleteTargetId); setDeleteTargetId(null); }} className="w-1/2 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all text-xs tracking-wide cursor-pointer">Delete</button>
              </div>
            </motion.div>
          </div>
        )}
        {renderExpenseModal()}
        {renderAdvanceModal()}
        {renderDeleteAdvanceModal()}
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 font-sans pb-16">

      <header className="w-full py-5 border-b border-black/5 bg-[#f2efe9]/90 backdrop-blur-xl sticky top-0 z-40">
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href={`/${activeKey}`}
              className="w-9 h-9 rounded-xl border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors bg-white/60"
            >
              <ArrowLeft size={16} />
            </a>
            <div>
              <span className="text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase">{planName} · Expense Tracker</span>
              <h1 className="text-xl font-black uppercase tracking-tight leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>
                Shared Bill Splitter
              </h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 bg-white/70 border border-black/5 rounded-2xl px-3 py-1.5">
            <Users size={12} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-600">{members.join(", ")}</span>
          </div>
        </Container>
      </header>

      <Container className="mt-8">
        {renderBudgetProgressTracker()}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column: Form + Ledger */}
        <div className="lg:col-span-2 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {renderPoolSummaryCard()}
            {renderPieChartCard()}
            {renderCumulativeSpendingChart()}
          </div>

          <div className="flex justify-start mb-6">
            <button
              onClick={() => { setEditingId(null); setSplitWith(members); setShowExpenseModal(true); }}
              className="inline-flex items-center gap-2 bg-black text-white rounded-2xl px-5 py-3 hover:bg-black/85 transition-all shadow-md group cursor-pointer"
            >
              <Plus size={16} className="text-white" />
              <span className="font-extrabold text-sm tracking-tight">Add Shared Expense</span>
            </button>
          </div>
          {/* Expense Ledger */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Receipt size={15} className="text-slate-700" />
                </div>
                <h2 className="font-extrabold text-base uppercase tracking-tight">Shared Ledger</h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowSettleLaterOnly(!showSettleLaterOnly)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer select-none transition-all ${showSettleLaterOnly ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}
                >
                  Settle Later Only
                </button>
                {expenses.length > 0 && (
                  <span className="text-[10px] font-bold font-mono text-slate-400 bg-black/5 px-2 py-1.5 rounded-lg">
                    {filteredExpenses.length} entries
                  </span>
                )}
              </div>
            </div>

              {/* Filter controls row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6 p-4 bg-slate-50/50 rounded-2xl border border-black/5">
                {/* Search query input */}
                <div className="sm:col-span-5 relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search size={14} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search note or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-black/10 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-xs font-semibold"
                  />
                </div>
                {/* Payer filter select */}
                <div className="sm:col-span-3">
                  <select
                    value={filterPayer}
                    onChange={(e) => setFilterPayer(e.target.value)}
                    className="w-full px-3 py-2 border border-black/10 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-xs font-semibold"
                  >
                    <option value="all">All Payers</option>
                    {members.map(m => <option key={m} value={m}>{m}</option>)}
                    <option value="Share">Multiple</option>
                  </select>
                </div>
                {/* Category filter select */}
                <div className="sm:col-span-3">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-black/10 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-xs font-semibold"
                  >
                    <option value="all">All Categories</option>
                    {Object.keys(categoryColors).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                {/* CSV Export action */}
                <div className="sm:col-span-1 flex justify-end">
                  <button
                    type="button"
                    onClick={handleExportXLS}
                    title="Export current view to CSV"
                    className="w-full sm:w-auto flex items-center justify-center p-2 border border-black/10 bg-white hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                  >
                    <Download size={14} />
                  </button>
                </div>
              </div>

            {filteredExpenses.length === 0 ? (
              <div className="flex flex-col items-center py-16 text-slate-400 gap-3">
                <Receipt size={36} className="opacity-25" />
                <p className="text-sm font-medium">No expenses match the filter.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredExpenses.map((exp) => {
                  const sharers = exp.splitWith || members;
                  const payer = exp.paidBy || members[0];
                  const colors = categoryColors[exp.category] || categoryColors.Other;

                  let payerText = <span className="font-bold text-slate-600">{payer}</span>;
                  if (payer === "Share" && exp.paidAmounts) {
                    payerText = (
                      <span className="font-medium text-slate-500">
                        {Object.entries(exp.paidAmounts)
                          .filter(([, amt]) => Number(amt) > 0)
                          .map(([m, amt]) => `${m} (₹${amt})`)
                          .join(" & ")}
                      </span>
                    );
                  }

                  return (
                    <div key={exp.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-black/15 transition-all group">
                      <div className={`w-2 h-8 rounded-full shrink-0 ${colors.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-bold text-sm truncate">{exp.notes}</p>
                          <span className={`text-[9px] font-black font-mono uppercase px-1.5 py-0.5 rounded-md shrink-0 ${colors.bg} ${colors.text}`}>{exp.category}</span>
                          {exp.settleLater && (
                            <span className="text-[9px] font-black font-mono uppercase px-1.5 py-0.5 rounded-md shrink-0 bg-amber-100 text-amber-800">Settle Later</span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {payerText} paid · split with {sharers.filter(m => members.includes(m)).join(", ")} · {exp.date}
                        </p>
                      </div>
                      <p className="font-black text-base shrink-0">{formatCurrency(exp.amount)}</p>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                        <button onClick={() => handleStartEdit(exp)} className="p-1.5 hover:bg-amber-50 hover:text-amber-500 rounded-xl text-slate-300 transition-colors">
                          <Pencil size={13} />
                        </button>
                        <button
                          onClick={() => setDeleteTargetId(exp.id)}
                          className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-xl text-slate-300 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">

          {/* Settle Up */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center">
                <TrendingUp size={15} className="text-slate-700" />
              </div>
              <h2 className="font-extrabold text-base uppercase tracking-tight">Settle Up</h2>
            </div>

            {balances.settlements.length === 0 ? (
              <div className="flex flex-col items-center py-8 text-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-1">
                  <AlertCircle size={22} className="text-emerald-500" />
                </div>
                <p className="font-bold text-sm text-slate-700">All balanced!</p>
                <p className="text-xs text-slate-400">No pending settlements.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {balances.settlements.map((set, idx) => (
                  <div key={idx} className="p-4 bg-black/[0.03] rounded-2xl border border-black/5">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-black text-red-600">{set.from}</span>
                        <span className="text-slate-400 mx-1.5 text-xs">owes</span>
                        <span className="font-black text-emerald-700">{set.to}</span>
                      </div>
                      <span className="font-black text-base">{formatCurrency(set.amount)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cash Advances */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                <ArrowRight size={15} className="text-green-700" />
              </div>
              <div>
                <h2 className="font-extrabold text-base uppercase tracking-tight">Cash Advances</h2>
                <p className="text-[10px] text-slate-400 font-medium">Money given upfront before trip expenses</p>
              </div>
            </div>
            <form onSubmit={handleAddAdvance} className="space-y-3 mb-5">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={labelCls}>Given By</label>
                  <select value={advFrom} onChange={(e) => setAdvFrom(e.target.value)} required className={inputCls + " py-2.5"}>
                    <option value="">Select</option>
                    {members.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Given To</label>
                  <select value={advTo} onChange={(e) => setAdvTo(e.target.value)} required className={inputCls + " py-2.5"}>
                    <option value="">Select</option>
                    {members.filter(m => m !== advFrom).map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={labelCls}>Amount (₹)</label>
                  <input type="number" min="1" value={advAmount} onChange={(e) => setAdvAmount(e.target.value)} placeholder="0" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Note (optional)</label>
                  <input type="text" value={advNotes} onChange={(e) => setAdvNotes(e.target.value)} placeholder="e.g. before trip" className={inputCls} />
                </div>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-2xl transition-all text-sm">Record Advance</button>
            </form>
            {advances.length > 0 && (
              <div className="space-y-2 border-t border-black/5 pt-4">
                {advances.map((adv) => (
                  <div key={adv.id} className="flex items-center justify-between p-3 bg-green-50/60 rounded-2xl border border-green-100 group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-sm">
                        <span className="font-black text-green-700">{adv.from}</span>
                        <ArrowRight size={12} className="text-slate-400 shrink-0" />
                        <span className="font-black text-slate-700">{adv.to}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">{adv.notes || "Cash advance"} · {adv.date}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-extrabold text-sm text-green-700">₹{Number(adv.amount).toLocaleString("en-IN")}</span>
                      <button onClick={() => handleDeleteAdvance(adv.id)} className="p-1 hover:bg-red-100 hover:text-red-500 rounded-lg text-slate-300 transition-colors opacity-0 group-hover:opacity-100">
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Net Balance Sheet */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
            <h2 className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 mb-4">Net Balance Sheet</h2>
            <div className="space-y-2">
              {Object.entries(balances.netBalances).map(([name, bal]) => (
                <div key={name} className="flex justify-between items-center py-2.5 border-b border-black/5 last:border-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-[10px] font-black ${bal >= 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                      {name[0]}
                    </div>
                    <span className="font-bold text-sm">{name}</span>
                  </div>
                  <span className={`font-mono text-sm font-extrabold ${bal >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                    {bal >= 0 ? "+" : ""}{formatCurrency(Math.abs(Math.round(bal)))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Container>

      {deleteTargetId !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[28px] border border-black/10 p-7 max-w-sm w-full shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                <Trash2 size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg uppercase tracking-tight">Delete Expense?</h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  Are you sure you want to delete this expense entry? This action cannot be undone.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setDeleteTargetId(null)}
                className="w-1/2 bg-slate-100 text-slate-600 border border-black/10 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all text-xs tracking-wide cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteExpense(deleteTargetId);
                  setDeleteTargetId(null);
                }}
                className="w-1/2 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all text-xs tracking-wide cursor-pointer"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {renderExpenseModal()}
      {renderAdvanceModal()}
      {renderDeleteAdvanceModal()}
    </div>
  );
}