import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Calculator, Download, Copy } from "lucide-react";
import { budget } from "../../data/budget";
import { useBudget } from "../../hooks/useBudget";
import { copyToClipboard, downloadJSON } from "../../utils/helpers";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

// Muted Premium Tailored Colors
const CHART_COLORS = ["#000000", "#18181b", "#3f3f46", "#71717a", "#a1a1aa", "#d4d4d8"];

export default function BudgetSection() {
  const { values, updateValue, total, remaining, remainingBudget, chartData, budgetLimit } = useBudget();

  const handleCopy = () => copyToClipboard(JSON.stringify({ values, total, remaining }, null, 2));
  const handleExport = () => downloadJSON({ values, total, remaining, categories: budget.categories }, "garhwal-budget.json");

  const limit = budgetLimit || budget.total;
  const remValue = limit - total;

  return (
    <section id="budget" className="py-20 md:py-28 bg-[#f2efe9] scroll-mt-20">
      <Container>
        <SectionTitle 
          label="Finances" 
          title="Budget Planner" 
          description="Adjust estimated costs to see how your target budget splits." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Calculator */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-6 md:p-8 flex flex-col justify-between shadow-sm lg:col-span-1">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-3">
                <Calculator size={18} className="text-black/70" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider">Interactive Estimator</h3>
              </div>

              <div className="space-y-4">
                {Object.entries(values).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between gap-4 border-b border-black/5 py-1.5">
                    <label className="text-xs font-bold text-slate-500 capitalize">{key}</label>
                    <div className="flex items-center gap-1 max-w-[120px]">
                      <span className="text-xs font-bold text-slate-400">₹</span>
                      <input
                        type="number"
                        value={val}
                        onChange={(e) => updateValue(key, e.target.value)}
                        className="w-full text-right bg-transparent font-extrabold text-sm focus:outline-none text-black/90 p-0 border-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Block */}
            <div className="mt-8 pt-6 border-t border-black/10 space-y-3">
              <div className="flex justify-between text-xs font-semibold text-slate-400">
                <span>TOTAL EXPENDITURE</span>
                <span className="font-black text-sm text-black">{formatCurrency(total)}</span>
              </div>
              <div className="flex justify-between text-xs font-semibold text-slate-400">
                <span>TARGET LIMIT</span>
                <span>{formatCurrency(limit)}</span>
              </div>
              <div className="h-[1px] bg-black/5" />
              <div className={`flex justify-between text-xs font-bold ${remValue >= 0 ? "text-green-700" : "text-red-600"}`}>
                <span>{remValue >= 0 ? "REMAINING POOL" : "DEFICIT BUDGET"}</span>
                <span className="text-sm font-black">{formatCurrency(Math.abs(remValue))}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-bold border border-black/10 bg-white hover:bg-black/5 transition-all cursor-pointer"
                >
                  <Copy size={13} />
                  Copy Log
                </button>
                <button
                  onClick={handleExport}
                  className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-black/90 transition-all cursor-pointer"
                >
                  <Download size={13} />
                  Export JSON
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Charts & Details */}
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-6 md:p-8 shadow-sm lg:col-span-2 space-y-6">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-black border-b border-black/5 pb-3">Expense Distribution</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Pie Chart Display */}
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={chartData.length ? chartData : budget.categories.map(c => ({ name: c.label, value: c.amount }))} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={50} 
                      outerRadius={80} 
                      dataKey="value" 
                      paddingAngle={3}
                    >
                      {(chartData.length ? chartData : budget.categories).map((_, i) => (
                        <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => formatCurrency(v)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Category Breakdown Progress Lines */}
              <div className="space-y-4">
                {budget.categories.map((cat, i) => {
                  const currentVal = values[cat.id] !== undefined ? values[cat.id] : cat.amount;
                  const pct = limit > 0 ? (currentVal / limit) * 100 : 0;
                  return (
                    <div key={cat.id} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-600">{cat.label}</span>
                        <span className="font-extrabold text-black">{formatCurrency(currentVal)} ({pct.toFixed(0)}%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-black rounded-full transition-all duration-500" 
                          style={{ width: `${Math.min(pct, 100)}%` }} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Daily Costs Chart */}
        <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] p-6 md:p-8 shadow-sm max-w-6xl mx-auto">
          <h3 className="font-extrabold text-sm uppercase tracking-wider text-black mb-6 border-b border-black/5 pb-3">Daily Cost Breakdown</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budget.dailyEstimate}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#64748b", fontWeight: "bold" }} angle={-15} textAnchor="end" height={50} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b", fontWeight: "bold" }} />
                <Tooltip formatter={(v) => formatCurrency(v)} />
                <Bar dataKey="amount" fill="#000000" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
