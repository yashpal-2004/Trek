import React, { useState, useMemo } from "react";
import { ArrowLeft, Plus, Trash2, Receipt, Users, Wallet, AlertCircle } from "lucide-react";
import { useExpense } from "../hooks/useExpense";
import { expenseCategories } from "../data/trip";
import { formatCurrency } from "../utils/currency";
import Container from "../components/layout/Container";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

export default function Expenses() {
  const isPlan2 = typeof window !== "undefined" && window.location.pathname.includes("plan2");
  const members = isPlan2 ? ["Yashpal", "Vansh", "Subham"] : ["Yashpal", "Vansh"];
  const planName = isPlan2 ? "Plan 2" : "Plan 1";

  const { expenses, addExpense, deleteExpense, totalSpent } = useExpense();
  
  // Form states
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

  // Balances calculation algorithm (Splitwise style)
  const balances = useMemo(() => {
    // 1. Initialize net balances for all members to 0
    const netBalances = {};
    members.forEach((m) => {
      netBalances[m] = 0;
    });

    // 2. Accumulate paid vs owed for each expense
    expenses.forEach((exp) => {
      const payer = exp.paidBy || members[0];
      const sharers = exp.splitWith || members;
      const amt = Number(exp.amount) || 0;

      if (sharers.length > 0) {
        const share = amt / sharers.length;
        // Payer gets back the amount they paid
        netBalances[payer] += amt;
        // Every sharer owes their share
        sharers.forEach((s) => {
          if (netBalances[s] !== undefined) {
            netBalances[s] -= share;
          }
        });
      }
    });

    // 3. Settle up transactions
    // Separate debtors and creditors
    const debtors = [];
    const creditors = [];

    Object.entries(netBalances).forEach(([name, bal]) => {
      // Use threshold to prevent rounding errors
      if (bal < -0.01) {
        debtors.push({ name, amount: Math.abs(bal) });
      } else if (bal > 0.01) {
        creditors.push({ name, amount: bal });
      }
    });

    // Greedy settlement
    const settlements = [];
    let dIdx = 0;
    let cIdx = 0;

    // Make copies since we'll modify values
    const dList = debtors.map((d) => ({ ...d }));
    const cList = creditors.map((c) => ({ ...c }));

    while (dIdx < dList.length && cIdx < cList.length) {
      const debtor = dList[dIdx];
      const creditor = cList[cIdx];
      const settledAmount = Math.min(debtor.amount, creditor.amount);

      settlements.push({
        from: debtor.name,
        to: creditor.name,
        amount: settledAmount,
      });

      debtor.amount -= settledAmount;
      creditor.amount -= settledAmount;

      if (debtor.amount < 0.01) dIdx++;
      if (creditor.amount < 0.01) cIdx++;
    }

    return {
      netBalances,
      settlements,
    };
  }, [expenses, members]);

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 font-sans pb-16">
      
      {/* Header */}
      <header className="w-full py-6 border-b border-black/5 bg-[#f2efe9]/80 backdrop-blur-md sticky top-0 z-40">
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href={`/${isPlan2 ? "plan2" : "plan1"}`}
              className="w-9 h-9 rounded-xl border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"
            >
              <ArrowLeft size={16} />
            </a>
            <div>
              <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase">{planName}</span>
              <h1 className="text-lg font-extrabold uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>Shared Bill Splitter</h1>
            </div>
          </div>
          <span className="text-xs font-mono bg-black/5 px-2.5 py-1 rounded-md border border-black/5">Active Members: {members.join(", ")}</span>
        </Container>
      </header>

      <Container className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Form & Recent List */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Add Expense Form */}
          <Card hover={false} className="border border-black/10 bg-white/70 backdrop-blur-md rounded-3xl p-6">
            <h2 className="font-extrabold text-lg mb-4 flex items-center gap-2">
              <Plus size={18} className="text-black" />
              Add Shared Expense
            </h2>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                  >
                    {expenseCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Paid By</label>
                  <select
                    value={paidBy}
                    onChange={(e) => setPaidBy(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                  >
                    {members.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">Notes / Description</label>
                <input
                  type="text"
                  placeholder="e.g. Tea & snacks at Gopeshwar"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>

              {/* Split With Checkboxes */}
              <div>
                <label className="text-xs font-bold text-slate-500 block mb-2">Split With</label>
                <div className="flex flex-wrap gap-4">
                  {members.map((m) => (
                    <label key={m} className="flex items-center gap-2 text-sm font-semibold select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={splitWith.includes(m)}
                        onChange={() => handleCheckboxChange(m)}
                        className="w-4 h-4 rounded border-black/20 text-black focus:ring-black"
                      />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 py-3 rounded-xl">
                  Add Expense Entry
                </Button>
              </div>
            </form>
          </Card>

          {/* Expense History List */}
          <Card hover={false} className="border border-black/10 bg-white/70 backdrop-blur-md rounded-3xl p-6">
            <h2 className="font-extrabold text-lg mb-4 flex items-center gap-2">
              <Receipt size={18} className="text-black" />
              Shared Ledger
            </h2>
            {expenses.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                No expenses logged yet. Add one above!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-black/5 text-slate-500 pb-2">
                      <th className="pb-3 font-semibold">Date</th>
                      <th className="pb-3 font-semibold">Details</th>
                      <th className="pb-3 font-semibold">Paid By</th>
                      <th className="pb-3 font-semibold">Split With</th>
                      <th className="pb-3 font-semibold text-right">Amount</th>
                      <th className="pb-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {expenses.map((exp) => {
                      const sharers = exp.splitWith || members;
                      const payer = exp.paidBy || members[0];
                      return (
                        <tr key={exp.id} className="hover:bg-black/[0.02] transition-colors">
                          <td className="py-4 font-medium">{exp.date}</td>
                          <td className="py-4">
                            <span className="font-bold block">{exp.notes}</span>
                            <span className="text-[10px] text-slate-400 uppercase font-mono">{exp.category}</span>
                          </td>
                          <td className="py-4 font-semibold text-black/75">{payer}</td>
                          <td className="py-4 text-xs text-slate-500">{sharers.join(", ")}</td>
                          <td className="py-4 font-bold text-right">{formatCurrency(exp.amount)}</td>
                          <td className="py-4 text-right">
                            <button
                              onClick={() => deleteExpense(exp.id)}
                              className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-lg text-slate-400 transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

        </div>

        {/* Right Column: Balances & Settle Up */}
        <div className="space-y-6">
          
          {/* Summary Box */}
          <Card hover={false} className="border border-black/10 bg-black text-white rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wallet size={18} className="text-white" />
              <h2 className="font-extrabold text-lg">Trip Pool Summary</h2>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400 text-sm">Total Pool Spent</span>
                <span className="text-xl font-bold">{formatCurrency(totalSpent)}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400 text-sm">Average Per Person</span>
                <span className="text-md font-bold">{formatCurrency(totalSpent / members.length)}</span>
              </div>
            </div>
          </Card>

          {/* Settle Up / Transfer Directions */}
          <Card hover={false} className="border border-black/10 bg-white/70 backdrop-blur-md rounded-3xl p-6">
            <h2 className="font-extrabold text-lg mb-4 flex items-center gap-2">
              <Users size={18} className="text-black" />
              Settle Up Balances
            </h2>

            {balances.settlements.length === 0 ? (
              <div className="flex items-center gap-2 text-slate-500 text-sm py-4">
                <AlertCircle size={18} />
                <span>All balances are settled up!</span>
              </div>
            ) : (
              <div className="space-y-3">
                {balances.settlements.map((set, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3.5 bg-black/5 rounded-2xl border border-black/5 text-sm"
                  >
                    <div>
                      <span className="font-bold text-red-600">{set.from}</span>
                      <span className="text-xs text-slate-500 mx-1.5">owes</span>
                      <span className="font-bold text-green-700">{set.to}</span>
                    </div>
                    <span className="font-black text-base">{formatCurrency(set.amount)}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Individual Share Breakdown */}
          <Card hover={false} className="border border-black/10 bg-white/70 backdrop-blur-md rounded-3xl p-6">
            <h2 className="font-extrabold text-md mb-4 uppercase tracking-wider text-slate-500">
              Net Balance Sheet
            </h2>
            <div className="space-y-3">
              {Object.entries(balances.netBalances).map(([name, bal]) => (
                <div key={name} className="flex justify-between items-center py-2 border-b border-black/5 last:border-0">
                  <span className="font-bold">{name}</span>
                  <span className={`font-mono text-sm font-semibold ${bal >= 0 ? "text-green-700" : "text-red-600"}`}>
                    {bal >= 0 ? "+" : ""}{formatCurrency(bal)}
                  </span>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </Container>
    </div>
  );
}
