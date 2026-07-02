import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2, Receipt, Users, Wallet, AlertCircle, TrendingUp, IndianRupee, ChevronDown } from "lucide-react";
import { useExpense } from "../hooks/useExpense";
import { expenseCategories } from "../data/trip";
import { getActiveTripKey } from "../data/proxyHelper";
import { formatCurrency } from "../utils/currency";
import Container from "../components/layout/Container";
import { transport } from "../data/transport";
import { stayOptions } from "../data/budget";

const categoryColors = {
  Transport: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  Accommodation: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  Food: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  Rafting: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  Emergency: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  Shopping: { bg: "bg-pink-50", text: "text-pink-700", dot: "bg-pink-500" },
  Other: { bg: "bg-slate-50", text: "text-slate-700", dot: "bg-slate-400" },
};

export default function Expenses() {
  const activeKey = getActiveTripKey();
  const isPlan2 = activeKey === "plan2";
  const members = ["Yashpal", "Vansh"];
  const planName = activeKey === "plan2" ? "Plan 2" : (activeKey === "sikkim" ? "Sikkim Trip" : "Plan 1");

  const { expenses, addExpense, deleteExpense, totalSpent } = useExpense();

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Transport");
  const [selectedPreset, setSelectedPreset] = useState("custom_transport");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [paidBy, setPaidBy] = useState(members[0]);
  const [splitWith, setSplitWith] = useState(members);
  const [paidAmounts, setPaidAmounts] = useState({ Yashpal: "", Vansh: "" });
  const [settleLater, setSettleLater] = useState(false);
  const [showSettleLaterOnly, setShowSettleLaterOnly] = useState(false);

  const filteredExpenses = useMemo(() => {
    return expenses.filter((exp) => {
      if (showSettleLaterOnly) return exp.settleLater;
      return true;
    });
  }, [expenses, showSettleLaterOnly]);

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
    return stayOptions.map((item) => ({
      value: `stay_${item.id}`,
      label: `Stay: ${item.destination}`,
      amountPerPerson: item.budget || item.mid || 0,
      category: "Accommodation",
      notes: `Stay at ${item.destination}`,
    }));
  }, [stayOptions]);

  const handlePresetChange = (presetValue) => {
    setSelectedPreset(presetValue);
    if (presetValue.startsWith("transport_")) {
      const p = transportPresets.find((x) => x.value === presetValue);
      if (p) {
        const totalAmt = p.amountPerPerson * 2;
        setCategory(p.category);
        setAmount(totalAmt);
        setNotes(p.notes);
        setPaidAmounts({ Yashpal: totalAmt / 2, Vansh: totalAmt / 2 });
      }
    } else if (presetValue.startsWith("stay_")) {
      const p = stayPresets.find((x) => x.value === presetValue);
      if (p) {
        const totalAmt = p.amountPerPerson * 2;
        setCategory(p.category);
        setAmount(totalAmt);
        setNotes(p.notes);
        setPaidAmounts({ Yashpal: totalAmt / 2, Vansh: totalAmt / 2 });
      }
    } else {
      const cat = presetValue.replace("custom_", "");
      const match = expenseCategories.find((c) => c.toLowerCase() === cat.toLowerCase());
      const categoryName = match || (cat.charAt(0).toUpperCase() + cat.slice(1));
      setCategory(categoryName);
      setAmount("");
      setNotes("");
      setPaidAmounts({ Yashpal: "", Vansh: "" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const selectedPresetObj = useMemo(() => {
    if (selectedPreset.startsWith("transport_")) {
      return transportPresets.find((x) => x.value === selectedPreset);
    } else if (selectedPreset.startsWith("stay_")) {
      return stayPresets.find((x) => x.value === selectedPreset);
    } else {
      const customOptions = expenseCategories.map((cat) => ({
        value: `custom_${cat.toLowerCase()}`,
        label: `Custom ${cat}`,
      }));
      return customOptions.find((x) => x.value === selectedPreset);
    }
  }, [selectedPreset, transportPresets, stayPresets, expenseCategories]);

  const handleCheckboxChange = (name) => {
    setSplitWith((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
  };

  const handlePaidByChange = (name) => {
    if (paidBy === "Share") {
      const other = members.find((m) => m !== name);
      setPaidBy(other);
      const totalPaid = Number(paidAmounts.Yashpal || 0) + Number(paidAmounts.Vansh || 0);
      if (totalPaid > 0) {
        setAmount(totalPaid);
      }
    } else if (paidBy === name) {
      const other = members.find((m) => m !== name);
      setPaidBy(other);
    } else {
      setPaidBy("Share");
      const currentAmt = Number(amount) || 0;
      setPaidAmounts({
        Yashpal: currentAmt ? currentAmt / 2 : "",
        Vansh: currentAmt ? currentAmt / 2 : ""
      });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0 || splitWith.length === 0) return;
    addExpense({
      date,
      category,
      amount: Number(amount),
      notes: notes || `${category} expense`,
      paidBy,
      splitWith,
      paidAmounts: paidBy === "Share" ? {
        Yashpal: Number(paidAmounts.Yashpal || 0),
        Vansh: Number(paidAmounts.Vansh || 0)
      } : null,
      settleLater,
    });
    setAmount("");
    setNotes("");
    setSelectedPreset("custom_transport");
    setCategory("Transport");
    setSplitWith(members);
    setPaidAmounts({ Yashpal: "", Vansh: "" });
    setSettleLater(false);
  };

  const balances = useMemo(() => {
    const netBalances = {};
    members.forEach((m) => { netBalances[m] = 0; });

    expenses.forEach((exp) => {
      if (exp.settleLater) return;

      const payer = exp.paidBy || members[0];
      const sharers = exp.splitWith || members;

      // Credit payers
      if (payer === "Share") {
        const pAmounts = exp.paidAmounts || {
          Yashpal: exp.amount / 2,
          Vansh: exp.amount / 2
        };
        members.forEach((m) => {
          netBalances[m] = (netBalances[m] || 0) + Number(pAmounts[m] || 0);
        });
      } else {
        if (members.includes(payer)) {
          netBalances[payer] = (netBalances[payer] || 0) + exp.amount;
        }
      }

      // Debit sharers
      const sharePerPerson = exp.amount / sharers.length;
      sharers.forEach((m) => {
        netBalances[m] = (netBalances[m] || 0) - sharePerPerson;
      });
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
  }, [expenses, members]);

  const inputCls = "w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black/10 text-sm font-medium transition-all placeholder:text-slate-400";
  const labelCls = "text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 block mb-1.5";

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 font-sans pb-16">

      {/* Header */}
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

      <Container className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column: Form + Ledger */}
        <div className="lg:col-span-2 space-y-6">

          {/* Add Expense Form */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center">
                <Plus size={16} className="text-white" />
              </div>
              <h2 className="font-extrabold text-base uppercase tracking-tight">Add Shared Expense</h2>
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
                        <div className="absolute left-0 right-0 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-black/10 bg-white/95 backdrop-blur-xl shadow-xl z-50 py-2 scrollbar-thin">
                          
                          {/* Transport from Itinerary */}
                          <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50">
                            Transport from Itinerary
                          </div>
                          {transportPresets.map((p) => (
                            <button
                              key={p.value}
                              type="button"
                              onClick={() => {
                                handlePresetChange(p.value);
                                setIsOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-black/5 transition-colors flex justify-between items-center ${selectedPreset === p.value ? "bg-black/5 text-black" : "text-slate-700"}`}
                            >
                              <span>{p.label}</span>
                              <span className="text-[10px] text-slate-400 font-mono">₹{p.amountPerPerson}/p</span>
                            </button>
                          ))}

                          {/* Stays from Itinerary */}
                          <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50 mt-2">
                            Stays from Itinerary
                          </div>
                          {stayPresets.map((p) => (
                            <button
                              key={p.value}
                              type="button"
                              onClick={() => {
                                handlePresetChange(p.value);
                                setIsOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-black/5 transition-colors flex justify-between items-center ${selectedPreset === p.value ? "bg-black/5 text-black" : "text-slate-700"}`}
                            >
                              <span>{p.label}</span>
                              <span className="text-[10px] text-slate-400 font-mono">₹{p.amountPerPerson}/p</span>
                            </button>
                          ))}

                          {/* Custom Expenses */}
                          <div className="px-4 py-1.5 text-[9px] font-black font-mono tracking-widest text-slate-400 uppercase bg-slate-50/50 mt-2">
                            Custom Expenses (Ad-hoc)
                          </div>
                           {expenseCategories.map((cat) => {
                             const value = `custom_${cat.toLowerCase()}`;
                             const label = `Custom ${cat}`;
                             return (
                               <button
                                 key={value}
                                 type="button"
                                 onClick={() => {
                                   handlePresetChange(value);
                                   setIsOpen(false);
                                 }}
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
                  <label className={labelCls}>Paid By</label>
                  <div className="flex flex-wrap gap-2 py-1.5">
                    {members.map((m) => {
                      const isChecked = paidBy === m || paidBy === "Share";
                      return (
                        <label key={m} className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold cursor-pointer select-none transition-all ${isChecked ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}>
                          <input type="checkbox" checked={isChecked} onChange={() => handlePaidByChange(m)} className="sr-only" />
                          {m}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div>
                  {paidBy === "Share" ? (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[9px] font-bold text-slate-400 block mb-1">Yashpal Paid</label>
                        <input
                          type="number"
                          placeholder="0.00"
                          value={paidAmounts.Yashpal}
                          onChange={(e) => {
                            const val = e.target.value;
                            setPaidAmounts((prev) => {
                              const newAmounts = { ...prev, Yashpal: val };
                              setAmount(Number(newAmounts.Yashpal || 0) + Number(newAmounts.Vansh || 0));
                              return newAmounts;
                            });
                          }}
                          required
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="text-[9px] font-bold text-slate-400 block mb-1">Vansh Paid</label>
                        <input
                          type="number"
                          placeholder="0.00"
                          value={paidAmounts.Vansh}
                          onChange={(e) => {
                            const val = e.target.value;
                            setPaidAmounts((prev) => {
                              const newAmounts = { ...prev, Vansh: val };
                              setAmount(Number(newAmounts.Yashpal || 0) + Number(newAmounts.Vansh || 0));
                              return newAmounts;
                            });
                          }}
                          required
                          className={inputCls}
                        />
                      </div>
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
                          setPaidAmounts({
                            Yashpal: amt / 2,
                            Vansh: amt / 2
                          });
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
                    <label key={m} className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold cursor-pointer select-none transition-all ${splitWith.includes(m) ? "bg-black text-white border-black" : "bg-white border-black/10 text-slate-600 hover:border-black/25"}`}>
                      <input type="checkbox" checked={splitWith.includes(m)} onChange={() => handleCheckboxChange(m)} className="sr-only" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50/50 p-3 rounded-2xl border border-black/5">
                <input
                  type="checkbox"
                  id="settleLater"
                  checked={settleLater}
                  onChange={(e) => setSettleLater(e.target.checked)}
                  className="rounded border-slate-300 text-black focus:ring-black w-4 h-4 cursor-pointer"
                />
                <label htmlFor="settleLater" className="text-xs font-bold text-slate-700 cursor-pointer select-none">
                  Settle Later (Exclude from automatic calculations; settle manually)
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setAmount("");
                    setNotes("");
                    setSelectedPreset("custom_transport");
                    setCategory("Transport");
                    setPaidBy(members[0]);
                    setSplitWith(members);
                    setPaidAmounts({ Yashpal: "", Vansh: "" });
                    setSettleLater(false);
                  }}
                  className="w-1/3 bg-slate-100 text-slate-600 border border-black/10 font-bold py-3.5 rounded-2xl hover:bg-slate-200 hover:border-black/20 transition-all text-sm tracking-wide"
                >
                  Clear
                </button>
                <button type="submit" className="w-2/3 bg-black text-white font-bold py-3.5 rounded-2xl hover:bg-black/85 transition-all text-sm tracking-wide">
                  Add Entry
                </button>
              </div>
            </form>
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
                        <span className="font-bold text-slate-600">Yashpal</span> (₹{exp.paidAmounts.Yashpal}) & <span className="font-bold text-slate-600">Vansh</span> (₹{exp.paidAmounts.Vansh})
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
                          {payerText} paid · split with {sharers.join(", ")} · {exp.date}
                        </p>
                      </div>
                      <p className="font-black text-base shrink-0">{formatCurrency(exp.amount)}</p>
                      <button
                        onClick={() => setDeleteTargetId(exp.id)}
                        className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-xl text-slate-300 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">

          {/* Pool Summary */}
          <div className="bg-black text-white rounded-[28px] p-7 shadow-sm">
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
    </div>
  );
}
