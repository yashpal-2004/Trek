import React, { useState, useMemo } from "react";
import { ArrowLeft, Plus, Trash2, Receipt, Users, Wallet, AlertCircle, TrendingUp, IndianRupee, ChevronDown } from "lucide-react";
import { useExpense } from "../hooks/useExpense";
import { expenseCategories } from "../data/trip";
import { formatCurrency } from "../utils/currency";
import Container from "../components/layout/Container";

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
  const isPlan2 = typeof window !== "undefined" && window.location.pathname.includes("plan2");
  const members = isPlan2 ? ["Yashpal", "Vansh", "Subham"] : ["Yashpal", "Vansh"];
  const planName = isPlan2 ? "Plan 2" : "Plan 1";

  const { expenses, addExpense, deleteExpense, totalSpent } = useExpense();

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Transport");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [paidBy, setPaidBy] = useState(members[0]);
  const [splitWith, setSplitWith] = useState(members);

  const handleCheckboxChange = (name) => {
    setSplitWith((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
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
    });
    setAmount("");
    setNotes("");
    setSplitWith(members);
  };

  const balances = useMemo(() => {
    const netBalances = {};
    members.forEach((m) => { netBalances[m] = 0; });

    expenses.forEach((exp) => {
      const payer = exp.paidBy || members[0];
      const sharers = exp.splitWith || members;
      if (!sharers.includes(payer) && !members.includes(payer)) return;
      const sharePerPerson = exp.amount / sharers.length;
      netBalances[payer] = (netBalances[payer] || 0) + exp.amount;
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
              href={`/${isPlan2 ? "plan2" : "plan1"}`}
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
                  <label className={labelCls}>Category</label>
                  <div className="relative">
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls + " appearance-none pr-10"}>
                      {expenseCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Paid By</label>
                  <div className="relative">
                    <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)} className={inputCls + " appearance-none pr-10"}>
                      {members.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Amount (₹)</label>
                  <input type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required className={inputCls} />
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

              <button type="submit" className="w-full bg-black text-white font-bold py-3.5 rounded-2xl hover:bg-black/85 transition-all text-sm tracking-wide">
                Add Expense Entry
              </button>
            </form>
          </div>

          {/* Expense Ledger */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-7 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Receipt size={15} className="text-slate-700" />
                </div>
                <h2 className="font-extrabold text-base uppercase tracking-tight">Shared Ledger</h2>
              </div>
              {expenses.length > 0 && (
                <span className="text-[10px] font-bold font-mono text-slate-400 bg-black/5 px-2 py-1 rounded-lg">
                  {expenses.length} entries
                </span>
              )}
            </div>

            {expenses.length === 0 ? (
              <div className="flex flex-col items-center py-16 text-slate-400 gap-3">
                <Receipt size={36} className="opacity-25" />
                <p className="text-sm font-medium">No expenses logged yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {expenses.map((exp) => {
                  const sharers = exp.splitWith || members;
                  const payer = exp.paidBy || members[0];
                  const colors = categoryColors[exp.category] || categoryColors.Other;
                  return (
                    <div key={exp.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-black/15 transition-all group">
                      <div className={`w-2 h-8 rounded-full shrink-0 ${colors.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-bold text-sm truncate">{exp.notes}</p>
                          <span className={`text-[9px] font-black font-mono uppercase px-1.5 py-0.5 rounded-md shrink-0 ${colors.bg} ${colors.text}`}>{exp.category}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          <span className="font-bold text-slate-600">{payer}</span> paid · split with {sharers.join(", ")} · {exp.date}
                        </p>
                      </div>
                      <p className="font-black text-base shrink-0">{formatCurrency(exp.amount)}</p>
                      <button
                        onClick={() => deleteExpense(exp.id)}
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
    </div>
  );
}
