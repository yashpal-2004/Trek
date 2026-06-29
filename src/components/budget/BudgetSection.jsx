import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Calculator, Download, Copy } from "lucide-react";
import { budget } from "../../data/budget";
import { useBudget } from "../../hooks/useBudget";
import { copyToClipboard, downloadJSON } from "../../utils/helpers";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Button from "../common/Button";
import ProgressBar from "../common/ProgressBar";
import ExpenseTracker from "../expense/ExpenseTracker";

const COLORS = ["#2563EB", "#10B981", "#F59E0B", "#8B5CF6", "#EF4444", "#EC4899"];

export default function BudgetSection() {
  const { values, updateValue, total, remaining, savings, overBudget, chartData, budgetLimit } = useBudget();

  const handleCopy = () => copyToClipboard(JSON.stringify({ values, total, remaining }, null, 2));
  const handleExport = () => downloadJSON({ values, total, remaining, categories: budget.categories }, "garhwal-budget.json");

  return (
    <section id="budget" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionTitle label="Finances" title="Budget Planner" description="Track, calculate, and visualize your trip expenses." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card hover={false} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4"><Calculator size={20} className="text-primary" /><h3 className="font-semibold">Budget Calculator</h3></div>
            {Object.entries(values).map(([key, val]) => (
              <div key={key} className="mb-4">
                <label className="text-xs text-secondary capitalize block mb-1">{key}</label>
                <input
                  type="number"
                  value={val}
                  onChange={(e) => updateValue(key, e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <div className="flex justify-between text-sm"><span className="text-secondary">Total</span><span className="font-bold">{formatCurrency(total)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-secondary">Budget Limit</span><span>{formatCurrency(budgetLimit)}</span></div>
              <div className={`flex justify-between text-sm font-semibold ${remaining >= 0 ? "text-accent" : "text-danger"}`}>
                <span>{remaining >= 0 ? "Remaining" : "Over Budget"}</span>
                <span>{formatCurrency(Math.abs(remaining))}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" icon={Copy} onClick={handleCopy}>Copy</Button>
              <Button variant="ghost" size="sm" icon={Download} onClick={handleExport}>Export</Button>
            </div>
          </Card>

          <Card hover={false} className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Expense Distribution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={chartData.length ? chartData : budget.categories.map(c => ({ name: c.label, value: c.amount }))} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                    {(chartData.length ? chartData : budget.categories).map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v) => formatCurrency(v)} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {budget.categories.map((cat, i) => (
                  <div key={cat.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{cat.label}</span>
                      <span className="font-medium">{formatCurrency(cat.amount)}</span>
                    </div>
                    <ProgressBar value={cat.amount} max={budget.total} showPercent={false} color={i % 2 === 0 ? "primary" : "accent"} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <Card hover={false} className="mb-12">
          <h3 className="font-semibold mb-4">Daily Cost Estimate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={budget.dailyEstimate}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v) => formatCurrency(v)} />
              <Bar dataKey="amount" fill="#2563EB" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <ExpenseTracker />
      </Container>
    </section>
  );
}
