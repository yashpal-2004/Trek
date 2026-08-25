import React, { useState, useMemo, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2, Receipt, Users, Wallet, AlertCircle, TrendingUp, IndianRupee, ChevronDown, Pencil, X, ArrowRight, Search, Download, Settings, Lock } from "lucide-react";
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
  const [completedPlans] = useFirestore("trek_completed_plans", []);
  const [advances, setAdvances] = useFirestore(`trek_advances_${parentTripId}`, []);
  const isCurrentPlanCompleted = completedPlans.includes(activeKey);
  const planName = activeKey === "plan2" ? "Plan 2" : (activeKey === "sikkim" ? "Sikkim Trip" : "Plan 1");

  // Advance form state
  const [advFrom, setAdvFrom] = useState("");
  const [advTo, setAdvTo] = useState("");
  const [advAmount, setAdvAmount] = useState("");
  const [advNotes, setAdvNotes] = useState("");

  const { expenses, setExpenses, addExpense, updateExpense, deleteExpense, totalSpent } = useExpense();

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Transport");
  const [selectedPreset, setSelectedPreset] = useState("custom_transport");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [paidBy, setPaidBy] = useState("Yashpal");
  const [splitWith, setSplitWith] = useState(members);
  const [paidAmounts, setPaidAmounts] = useState({});
  const [splitType, setSplitType] = useState("equal"); // "equal" or "unequal"
  const [splitAmounts, setSplitAmounts] = useState({});
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

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleVerifyPassword = (e) => {
    e.preventDefault();
    if (passwordInput === "1612") {
      setIsUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const shouldShowLock = isCurrentPlanCompleted && !isUnlocked;

  const [breakdownType, setBreakdownType] = useState("paid"); // "paid" or "share"

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
    if (splitAmounts[oldName] !== undefined) {
      const copy = { ...splitAmounts };
      copy[trimmed] = copy[oldName];
      delete copy[oldName];
      setSplitAmounts(copy);
    }

    // Cascade name edit to cash advances
    setAdvances((prev) =>
      prev.map((adv) => {
        const copy = { ...adv };
        if (adv.from === oldName) copy.from = trimmed;
        if (adv.to === oldName) copy.to = trimmed;
        return copy;
      })
    );

    // Cascade name edit to expenses
    setExpenses((prev) =>
      prev.map((exp) => {
        let copy = { ...exp };
        let needsUpdate = false;

        if (exp.paidBy === oldName) {
          copy.paidBy = trimmed;
          needsUpdate = true;
        }

        if (exp.splitWith && exp.splitWith.includes(oldName)) {
          copy.splitWith = exp.splitWith.map((m) => (m === oldName ? trimmed : m));
          needsUpdate = true;
        }

        if (exp.paidAmounts && exp.paidAmounts[oldName] !== undefined) {
          const pCopy = { ...exp.paidAmounts };
          pCopy[trimmed] = pCopy[oldName];
          delete pCopy[oldName];
          copy.paidAmounts = pCopy;
          needsUpdate = true;
        }

        if (exp.splitAmounts && exp.splitAmounts[oldName] !== undefined) {
          const sCopy = { ...exp.splitAmounts };
          sCopy[trimmed] = sCopy[oldName];
          delete sCopy[oldName];
          copy.splitAmounts = sCopy;
          needsUpdate = true;
        }

        return needsUpdate ? copy : exp;
      })
    );

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
      // Preserve existing amount, notes, and paid amounts instead of resetting them
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

    const formattedSplitAmounts = {};
    if (splitType === "unequal") {
      const sum = splitWith.reduce((total, m) => total + Number(splitAmounts[m] || 0), 0);
      if (Math.abs(sum - Number(amount)) > 0.05) {
        alert(`The sum of individual shares (₹${sum}) does not equal the total amount (₹${amount}). Please verify the amounts.`);
        return;
      }
      splitWith.forEach((m) => {
        formattedSplitAmounts[m] = Number(splitAmounts[m] || 0);
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
        splitType,
        splitAmounts: splitType === "unequal" ? formattedSplitAmounts : null,
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
        splitType,
        splitAmounts: splitType === "unequal" ? formattedSplitAmounts : null,
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
    setSplitType("equal");
    setSplitAmounts({});
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
    setSplitType(exp.splitType || "equal");
    setSplitAmounts(exp.splitAmounts || {});
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
    setSplitType("equal");
    setSplitAmounts({});
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
      
      if (exp.splitType === "unequal" && exp.splitAmounts) {
        activeSharers.forEach((m) => {
          const personShare = Number(exp.splitAmounts[m] || 0);
          netBalances[m] = (netBalances[m] || 0) - personShare;
        });
      } else {
        const sharePerPerson = exp.amount / sharers.length; // keep original per-person share
        activeSharers.forEach((m) => {
          netBalances[m] = (netBalances[m] || 0) - sharePerPerson;
        });
      }
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

  const personWiseCategoryExpenses = useMemo(() => {
    const breakdown = {};
    members.forEach((m) => {
      breakdown[m] = {
        paid: { total: 0 },
        share: { total: 0 }
      };
      Object.keys(categoryColors).forEach((cat) => {
        breakdown[m].paid[cat] = 0;
        breakdown[m].share[cat] = 0;
      });
    });

    expenses.forEach((exp) => {
      if (exp.settleLater) return;
      const payer = exp.paidBy || members[0];
      const sharers = exp.splitWith || members;
      const cat = exp.category || "Other";
      const amt = Number(exp.amount) || 0;

      // 1. Paid breakdown
      if (payer === "Share" && exp.paidAmounts) {
        Object.entries(exp.paidAmounts).forEach(([m, pAmt]) => {
          if (members.includes(m)) {
            breakdown[m].paid[cat] = (breakdown[m].paid[cat] || 0) + Number(pAmt);
            breakdown[m].paid.total += Number(pAmt);
          }
        });
      } else if (members.includes(payer)) {
        breakdown[payer].paid[cat] = (breakdown[payer].paid[cat] || 0) + amt;
        breakdown[payer].paid.total += amt;
      }

      // 2. Share breakdown
      const activeSharers = sharers.filter((m) => members.includes(m));
      if (activeSharers.length > 0) {
        if (exp.splitType === "unequal" && exp.splitAmounts) {
          activeSharers.forEach((m) => {
            const personShare = Number(exp.splitAmounts[m] || 0);
            breakdown[m].share[cat] = (breakdown[m].share[cat] || 0) + personShare;
            breakdown[m].share.total += personShare;
          });
        } else {
          const sharePerPerson = amt / sharers.length;
          activeSharers.forEach((m) => {
            breakdown[m].share[cat] = (breakdown[m].share[cat] || 0) + sharePerPerson;
            breakdown[m].share.total += sharePerPerson;
          });
        }
      }
    });

    return breakdown;
  }, [expenses, members]);

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
    const diff = groupBudgetLimit - totalSpent;
    const avgDiffPerPerson = limitPerPerson - avgSpentPerPerson;
    
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
      <div className={"w-full bg-white/70 backdrop-blur-md border rounded-[28px] p-6 shadow-sm mb-6 " + borderClass}>
        <div className="flex justify-between items-center mb-2.5">
          <div>
            <h3 className="font-extrabold text-sm uppercase tracking-tight text-slate-800">Trip Budget Tracker</h3>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">{"Pool spent relative to total budget limit (scaled for " + members.length + " members)"}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {diff > 0 ? (
              <span className="text-xs font-black px-2.5 py-1 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-100">
                {"Saved: ₹" + diff.toLocaleString("en-IN")} <span className="text-[10px] font-semibold opacity-75">{"(₹" + avgDiffPerPerson.toLocaleString("en-IN") + "/p)"}</span>
              </span>
            ) : diff < 0 ? (
              <span className="text-xs font-black px-2.5 py-1 rounded-xl text-red-700 bg-red-50 border border-red-100">
                {"Over: ₹" + Math.abs(diff).toLocaleString("en-IN")} <span className="text-[10px] font-semibold opacity-75">{"(₹" + Math.abs(avgDiffPerPerson).toLocaleString("en-IN") + "/p)"}</span>
              </span>
            ) : null}
            <span className={"text-xs font-black px-2.5 py-1 rounded-xl " + textClass}>
              {percentage}% Used
            </span>
          </div>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-2">
          <div
            className={"h-full transition-all duration-500 rounded-full " + colorClass}
            style={{ width: percentage + "%" }}
          />
        </div>
        <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-4">
          <span>Spent: ₹{totalSpent.toLocaleString("en-IN")} <span className="text-[10px] font-medium text-slate-400">{"(Avg ₹" + avgSpentPerPerson.toLocaleString("en-IN") + "/p)"}</span></span>
          <span>Budget limit: ₹{groupBudgetLimit.toLocaleString("en-IN")} <span className="text-[10px] font-medium text-slate-400">{"(₹" + limitPerPerson.toLocaleString("en-IN") + "/p)"}</span></span>
        </div>

        {/* Member-wise budget usage bars */}
        <div className="border-t border-black/5 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {members.map((m) => {
            const memberLimit = limitPerPerson;
            const memberShare = personWiseCategoryExpenses[m]?.share?.total || 0;
            const mPct = memberLimit > 0 ? Math.min(Math.round((memberShare / memberLimit) * 100), 100) : 0;
            const isOver = memberShare > memberLimit;
            
            return (
              <div key={m} className="space-y-1 bg-black/[0.01] border border-black/5 p-3 rounded-2xl">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">{m}</span>
                  <span className="text-slate-800">
                    ₹{Math.round(memberShare).toLocaleString("en-IN")} / ₹{memberLimit.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${isOver ? "bg-red-500" : "bg-emerald-500"}`}
                    style={{ width: `${mPct}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[9px] font-black font-mono uppercase tracking-wider">
                  <span className="text-slate-400">{mPct}% consumed</span>
                  <span className={isOver ? "text-red-500" : "text-emerald-600"}>
                    {isOver ? `Over by ₹${Math.round(memberShare - memberLimit).toLocaleString("en-IN")}` : `Saved ₹${Math.round(memberLimit - memberShare).toLocaleString("en-IN")}`}
                  </span>
                </div>
              </div>
            );
          })}
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
                    <button
                      type="button"
                      onClick={() => setShowMemberManager(!showMemberManager)}
                      className="text-[10px] font-black font-mono uppercase tracking-wider text-slate-400 hover:text-black transition-colors flex items-center gap-1 border border-black/10 rounded-lg px-2 py-1 bg-white/50 cursor-pointer"
                    >
                      <Settings size={10} className="shrink-0" /> {showMemberManager ? "Done" : "Manage"}
                    </button>
                  </div>
                  {showMemberManager && (
                    <div className="mb-3.5 p-3.5 bg-slate-50 rounded-2xl border border-black/5 space-y-3 max-h-56 overflow-y-auto">
                      <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Manage Trip Members</p>
                      
                      {/* Add new member form */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="New member..."
                          value={newMemberName}
                          onChange={(e) => setNewMemberName(e.target.value)}
                          className="flex-grow px-3 py-1.5 text-xs font-semibold rounded-xl border border-black/10 focus:outline-none focus:ring-1 focus:ring-black bg-white"
                        />
                        <button
                          type="button"
                          onClick={handleAddMember}
                          className="bg-black text-white text-xs font-black px-4 py-1.5 rounded-xl hover:bg-black/80 transition-colors cursor-pointer"
                        >
                          Add
                        </button>
                      </div>

                      {/* Members List */}
                      <div className="space-y-1.5">
                        {members.map((m) => (
                          <div key={m} className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-black/5">
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
                                className="text-xs font-extrabold bg-transparent border-b border-black/25 focus:outline-none w-full py-0.5"
                              />
                            ) : (
                              <span
                                onClick={() => { setEditingMember(m); setEditNameValue(m); }}
                                className="text-xs font-extrabold cursor-pointer hover:underline text-slate-700"
                              >
                                {m}
                              </span>
                            )}
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                type="button"
                                onClick={() => { setEditingMember(m); setEditNameValue(m); }}
                                className="p-1 hover:bg-amber-50 rounded-lg text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
                              >
                                <Pencil size={11} />
                              </button>
                              <button
                                type="button"
                                disabled={members.length <= 1}
                                onClick={() => handleDeleteMember(m)}
                                className="p-1 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 disabled:opacity-30 transition-colors cursor-pointer"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
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
                <div className="flex flex-wrap gap-2 mb-3">
                  {members.map((m) => (
                    <label key={m} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${splitWith.includes(m) ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}>
                      <input type="checkbox" checked={splitWith.includes(m)} onChange={() => handleCheckboxChange(m)} className="sr-only" />
                      {m}
                    </label>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400">Split Method</label>
                  <div className="flex gap-1 bg-black/5 p-0.5 rounded-xl text-[9px] font-black uppercase tracking-wider shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setSplitType("equal");
                        setSplitAmounts({});
                      }}
                      className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${splitType === "equal" ? "bg-white text-black shadow-xs font-black" : "text-slate-500 hover:text-black font-bold"}`}
                    >
                      Equally
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSplitType("unequal");
                        const currentAmt = Number(amount) || 0;
                        const shareAmt = splitWith.length ? Math.round((currentAmt / splitWith.length) * 100) / 100 : 0;
                        const newSplitAmounts = {};
                        splitWith.forEach((m) => { newSplitAmounts[m] = currentAmt ? shareAmt : ""; });
                        setSplitAmounts(newSplitAmounts);
                      }}
                      className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${splitType === "unequal" ? "bg-white text-black shadow-xs font-black" : "text-slate-500 hover:text-black font-bold"}`}
                    >
                      Unequally
                    </button>
                  </div>
                </div>

                 {splitType === "unequal" && (
                  <>
                    <div className="grid grid-cols-2 gap-2 mt-2 max-h-36 overflow-y-auto p-2 bg-slate-50 border border-black/5 rounded-2xl">
                      {splitWith.map((m) => (
                        <div key={m}>
                          <label className="text-[9px] font-bold text-slate-400 block mb-1">{m}'s Share (₹)</label>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={splitAmounts[m] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              const amt = Number(amount) || 0;
                              setSplitAmounts((prev) => {
                                const next = { ...prev, [m]: val };
                                
                                // Auto calculate for other members
                                const otherMembers = splitWith.filter(name => name !== m);
                                if (otherMembers.length === 1) {
                                  const other = otherMembers[0];
                                  const remainder = amt - Number(val || 0);
                                  next[other] = remainder > 0 ? String(Math.round(remainder * 100) / 100) : "0";
                                } else {
                                  // If there are multiple other members, find if there's exactly one that is empty
                                  const emptyOthers = otherMembers.filter(name => !next[name] || Number(next[name]) === 0);
                                  if (emptyOthers.length === 1) {
                                    const emptyName = emptyOthers[0];
                                    const filledSum = splitWith
                                      .filter(name => name !== emptyName)
                                      .reduce((sum, name) => sum + Number(next[name] || 0), 0);
                                    const remainder = amt - filledSum;
                                    next[emptyName] = remainder > 0 ? String(Math.round(remainder * 100) / 100) : "0";
                                  }
                                }
                                return next;
                              });
                            }}
                            required
                            className={inputCls}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Unallocated balance indicator */}
                    {(() => {
                      const totalSum = splitWith.reduce((sum, name) => sum + Number(splitAmounts[name] || 0), 0);
                      const diff = (Number(amount) || 0) - totalSum;
                      const absDiff = Math.abs(diff);
                      if (absDiff < 0.05) return null;
                      return (
                        <div className="flex justify-between items-center text-[10px] font-black font-mono uppercase tracking-wider mt-2 px-1">
                          <span className="text-slate-400">Balance Remainder</span>
                          <span className={diff > 0 ? "text-amber-600 animate-pulse" : "text-red-500 animate-pulse"}>
                            {diff > 0 ? `Unallocated: ₹${absDiff.toFixed(2)}` : `Overallocated: ₹${absDiff.toFixed(2)}`}
                          </span>
                        </div>
                      );
                    })()}
                  </>
                )}
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

  const getCategorySpentAndBudget = () => {
    const idToNameMap = {
      transport: "Transport",
      accommodation: "Accommodation",
      food: "Food",
      emergency: "Emergency",
      rafting: "Rafting",
      shopping: "Shopping",
      other: "Other"
    };

    const budgetCategories = budget?.categories || [];
    
    const results = budgetCategories.map((bc) => {
      const spent = expenses
        .filter((e) => {
          return !e.settleLater && ((e.category || "").toLowerCase() === bc.id.toLowerCase() ||
                 (e.category || "").toLowerCase() === (idToNameMap[bc.id] || "").toLowerCase());
        })
        .reduce((sum, e) => sum + Number(e.amount), 0);

      const limitPerPerson = bc.amount || 0;
      const groupLimit = limitPerPerson * members.length;
      const pct = groupLimit > 0 ? Math.min(Math.round((spent / groupLimit) * 100), 100) : 0;
      
      return {
        id: bc.id,
        label: bc.label,
        spent,
        limit: groupLimit,
        percentage: pct,
        color: bc.color || "#3b82f6"
      };
    });

    // Append unplanned categories with active spending
    const plannedIds = new Set(budgetCategories.map(bc => bc.id.toLowerCase()));
    const idToLabelMap = {
      transport: "Transportation & Rental",
      accommodation: "Accommodation",
      food: "Food & Meals",
      emergency: "Permits & Buffer",
      rafting: "Rafting / Activities",
      shopping: "Shopping",
      other: "Other"
    };

    Object.entries(idToNameMap).forEach(([id, name]) => {
      if (!plannedIds.has(id.toLowerCase())) {
        const spent = expenses
          .filter((e) => !e.settleLater && (e.category || "").toLowerCase() === name.toLowerCase())
          .reduce((sum, e) => sum + Number(e.amount), 0);

        if (spent > 0) {
          results.push({
            id: id,
            label: idToLabelMap[id] || name,
            spent,
            limit: 0,
            percentage: 0,
            color: (categoryColors[name] || categoryColors.Other).hex
          });
        }
      }
    });

    return results;
  };

  const renderSegmentedCategoryBudgets = () => {
    const categoryBudgets = getCategorySpentAndBudget();
    if (categoryBudgets.length === 0) return null;

    return (
      <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
        <div>
          <h2 className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 mb-0.5">Category Budgets</h2>
          <p className="text-xs font-bold text-slate-800 mb-4">Targeted group limits & usage</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {categoryBudgets.map((cb) => {
            let barColor = "bg-blue-600";
            if (cb.percentage > 85) barColor = "bg-red-500";
            else if (cb.percentage > 60) barColor = "bg-amber-500";

            const diff = cb.limit - cb.spent;

            return (
              <div key={cb.id} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-700">{cb.label}</span>
                    {diff > 0 ? (
                      <span className="text-[9px] font-black font-mono uppercase bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">Saved: ₹{diff.toLocaleString("en-IN")}</span>
                    ) : diff < 0 ? (
                      <span className="text-[9px] font-black font-mono uppercase bg-red-50 text-red-600 px-1.5 py-0.5 rounded">Over: ₹{Math.abs(diff).toLocaleString("en-IN")}</span>
                    ) : null}
                  </div>
                  <span className="text-slate-500">
                    ₹{cb.spent.toLocaleString("en-IN")} / ₹{cb.limit.toLocaleString("en-IN")}
                    <span className="text-[10px] text-slate-400 font-medium ml-1">({cb.percentage}%)</span>
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                    style={{ width: `${cb.percentage}%` }}
                  />
                </div>
                
                {/* Member-wise share breakdown */}
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 text-[9px] font-bold text-slate-500">
                  {members.map((m) => {
                    const idToNameMap = {
                      transport: "Transport",
                      accommodation: "Accommodation",
                      food: "Food",
                      emergency: "Emergency",
                      rafting: "Rafting",
                      shopping: "Shopping",
                      other: "Other"
                    };
                    const catName = idToNameMap[cb.id] || cb.label;
                    const memberShare = personWiseCategoryExpenses[m]?.share?.[catName] || 0;
                    if (memberShare <= 0) return null;
                    return (
                      <span key={m} className="bg-black/[0.02] border border-black/5 px-1.5 py-0.5 rounded-md">
                        {m}: <span className="text-slate-800 font-extrabold">₹{Math.round(memberShare).toLocaleString("en-IN")}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
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

  const renderPersonWiseCategoryBreakdown = () => (
    <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 mb-0.5">Person-wise Expenses</h2>
          <p className="text-xs font-bold text-slate-800">Category-wise breakdown</p>
        </div>
        
        {/* Toggle breakdown type */}
        <div className="flex gap-1 bg-black/5 p-0.5 rounded-xl text-[9px] font-black uppercase tracking-wider shrink-0">
          <button
            type="button"
            onClick={() => setBreakdownType("paid")}
            className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${breakdownType === "paid" ? "bg-white text-black shadow-xs font-black" : "text-slate-500 hover:text-black font-bold"}`}
          >
            Paid
          </button>
          <button
            type="button"
            onClick={() => setBreakdownType("share")}
            className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${breakdownType === "share" ? "bg-white text-black shadow-xs font-black" : "text-slate-500 hover:text-black font-bold"}`}
          >
            Share
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {members.map((m) => {
          const data = personWiseCategoryExpenses[m] || { paid: { total: 0 }, share: { total: 0 } };
          const selectedData = breakdownType === "paid" ? data.paid : data.share;
          
          return (
            <div key={m} className="p-3.5 bg-black/[0.02] border border-black/5 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-extrabold text-xs text-slate-800">{m}</span>
                <span className="font-black text-xs text-black">
                  {formatCurrency(Math.round(selectedData.total))}
                </span>
              </div>

              <div className="space-y-1.5 border-t border-black/5 pt-2">
                {Object.entries(selectedData)
                  .filter(([cat, val]) => cat !== "total" && val > 0)
                  .map(([cat, val]) => {
                    const colors = categoryColors[cat] || categoryColors.Other;
                    return (
                      <div key={cat} className="flex justify-between items-center text-[10px] font-bold">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                          <span className="text-slate-500">{cat}</span>
                        </div>
                        <span className="text-slate-700 font-mono">{formatCurrency(Math.round(val))}</span>
                      </div>
                    );
                  })}
                {Object.entries(selectedData).filter(([cat, val]) => cat !== "total" && val > 0).length === 0 && (
                  <p className="text-[10px] text-slate-400 italic">No category expenses recorded</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Category differences comparison block */}
      {members.length === 2 && (
        <div className="mt-4 pt-4 border-t border-black/5 space-y-2">
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Category Differences</p>
          <div className="space-y-1.5">
            {Object.keys(categoryColors).map((cat) => {
              const memberA = members[0];
              const memberB = members[1];
              
              const dataA = personWiseCategoryExpenses[memberA] || { paid: { total: 0 }, share: { total: 0 } };
              const dataB = personWiseCategoryExpenses[memberB] || { paid: { total: 0 }, share: { total: 0 } };
              
              const valA = breakdownType === "paid" ? (dataA.paid[cat] || 0) : (dataA.share[cat] || 0);
              const valB = breakdownType === "paid" ? (dataB.paid[cat] || 0) : (dataB.share[cat] || 0);
              
              const diff = valA - valB;
              if (Math.abs(diff) < 0.5) return null; // ignore very tiny/zero diffs

              const colors = categoryColors[cat] || categoryColors.Other;
              const payerName = diff > 0 ? memberA : memberB;
              const receiverName = diff > 0 ? memberB : memberA;
              
              return (
                <div key={cat} className="flex justify-between items-center text-[10px] font-bold p-2 bg-black/[0.01] border border-black/5 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    <span className="text-slate-600">{cat}</span>
                  </div>
                  <span className="text-slate-700 text-right">
                    <span className="font-extrabold text-black">{payerName}</span> spent <span className="font-mono text-black font-extrabold">₹{Math.round(Math.abs(diff)).toLocaleString("en-IN")}</span> more than {receiverName}
                  </span>
                </div>
              );
            })}
            {Object.keys(categoryColors).every((cat) => {
              const memberA = members[0];
              const memberB = members[1];
              const dataA = personWiseCategoryExpenses[memberA] || { paid: { total: 0 }, share: { total: 0 } };
              const dataB = personWiseCategoryExpenses[memberB] || { paid: { total: 0 }, share: { total: 0 } };
              const valA = breakdownType === "paid" ? (dataA.paid[cat] || 0) : (dataA.share[cat] || 0);
              const valB = breakdownType === "paid" ? (dataB.paid[cat] || 0) : (dataB.share[cat] || 0);
              return Math.abs(valA - valB) < 0.5;
            }) && (
              <p className="text-[10px] text-slate-400 italic text-center py-1">No category-wise differences</p>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (isSection) {
    if (isCurrentPlanCompleted && !isUnlocked) {
      return (
        <section id="expenses" className="pt-20 pb-20 md:pt-24 md:pb-28 bg-[#f2efe9] scroll-mt-20 border-t border-black/5">
          <Container className="max-w-sm text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[32px] p-8 shadow-xl"
            >
              <div className="w-14 h-14 rounded-[22px] bg-black/5 flex items-center justify-center mx-auto mb-5 text-black">
                <Lock size={22} />
              </div>
              
              <h2 className="text-xl font-black uppercase tracking-tight mb-1.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                Ledger Locked
              </h2>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Enter the security code to view the active expenses ledger, settle up sheets, and cash advances.
              </p>

              <form onSubmit={handleVerifyPassword} className="space-y-4">
                <div className="space-y-1.5">
                  <input
                    type="password"
                    required
                    placeholder="Enter Passcode"
                    value={passwordInput}
                    onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                    className={`w-full px-4 py-3 rounded-xl border text-center font-mono font-black text-lg focus:outline-none transition-colors ${
                      passwordError 
                        ? "border-red-300 focus:border-red-500 bg-red-50/50" 
                        : "border-black/10 focus:border-black bg-white"
                    }`}
                  />
                  {passwordError && (
                    <p className="text-[10px] text-red-600 font-bold mt-1">
                      ❌ Incorrect security passcode
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-black text-white hover:bg-black/85 transition-colors shadow-md cursor-pointer"
                >
                  Access Ledger
                </button>
              </form>
            </motion.div>
          </Container>
        </section>
      );
    }

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

              {renderSegmentedCategoryBudgets()}

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

              {renderPersonWiseCategoryBreakdown()}
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

      {shouldShowLock ? (
        <Container className="mt-20 max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[32px] p-8 text-center shadow-xl"
          >
            <div className="w-14 h-14 rounded-[22px] bg-black/5 flex items-center justify-center mx-auto mb-5 text-black">
              <Lock size={22} />
            </div>
            
            <h2 className="text-xl font-black uppercase tracking-tight mb-1.5" style={{ fontFamily: "'Anton', sans-serif" }}>
              Ledger Locked
            </h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
              Enter the security code to view the active expenses ledger, settle up sheets, and cash advances.
            </p>

            <form onSubmit={handleVerifyPassword} className="space-y-4">
              <div className="space-y-1.5">
                <input
                  type="password"
                  required
                  placeholder="Enter Passcode"
                  value={passwordInput}
                  onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                  className={`w-full px-4 py-3 rounded-xl border text-center font-mono font-black text-lg focus:outline-none transition-colors ${
                    passwordError 
                      ? "border-red-300 focus:border-red-500 bg-red-50/50" 
                      : "border-black/10 focus:border-black bg-white"
                  }`}
                />
                {passwordError && (
                  <p className="text-[10px] text-red-600 font-bold mt-1">
                    ❌ Incorrect security passcode
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-black text-white hover:bg-black/80 transition-colors shadow-md cursor-pointer"
              >
                Access Ledger
              </button>
            </form>
          </motion.div>
        </Container>
      ) : (
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

            {renderSegmentedCategoryBudgets()}

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
                        <span className="font-bold text-slate-600" title={Object.entries(exp.paidAmounts).map(([m, a]) => `${m}: ₹${a}`).join(", ")}>
                          Multiple
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

            {renderPersonWiseCategoryBreakdown()}
          </div>
        </div>
        </Container>
      )}

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