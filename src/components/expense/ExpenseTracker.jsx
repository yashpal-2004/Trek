import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Plus, Trash2, Pencil, Download, Receipt } from "lucide-react";
import { useExpense } from "../../hooks/useExpense";
import { expenseCategories } from "../../data/trip";
import { formatCurrency } from "../../utils/currency";
import { filterBySearch, downloadJSON } from "../../utils/helpers";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Card from "../common/Card";

export default function ExpenseTracker() {
  const { expenses, addExpense, updateExpense, deleteExpense, totalSpent, remainingBudget } = useExpense();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [editItem, setEditItem] = useState(null);
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const filtered = filterBySearch(expenses, search, ["category", "notes", "date"])
    .sort((a, b) => sortBy === "amount" ? b.amount - a.amount : new Date(b.date) - new Date(a.date));

  const onSubmit = (data) => {
    const expense = { ...data, amount: Number(data.amount) };
    if (editItem) {
      updateExpense(editItem.id, expense);
      setEditItem(null);
    } else {
      addExpense(expense);
    }
    reset();
  };

  const openEdit = (item) => {
    setEditItem(item);
    setValue("date", item.date);
    setValue("category", item.category);
    setValue("amount", item.amount);
    setValue("notes", item.notes || "");
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Receipt size={20} className="text-primary" />
        <h3 className="text-xl font-semibold">Expense Tracker</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card hover={false} className="text-center">
          <p className="text-xs text-secondary">Trip Total</p>
          <p className="text-2xl font-bold text-text">{formatCurrency(totalSpent)}</p>
        </Card>
        <Card hover={false} className="text-center">
          <p className="text-xs text-secondary">Remaining</p>
          <p className={`text-2xl font-bold ${remainingBudget >= 0 ? "text-accent" : "text-danger"}`}>{formatCurrency(remainingBudget)}</p>
        </Card>
        <Card hover={false} className="text-center">
          <p className="text-xs text-secondary">Entries</p>
          <p className="text-2xl font-bold text-text">{expenses.length}</p>
        </Card>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        <input {...register("date", { required: true })} type="date" className="px-4 py-2.5 rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
        <select {...register("category", { required: true })} className="px-4 py-2.5 rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20">
          <option value="">Category</option>
          {expenseCategories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <input {...register("amount", { required: true })} type="number" placeholder="Amount" className="px-4 py-2.5 rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
        <input {...register("notes")} placeholder="Notes" className="px-4 py-2.5 rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
        <Button type="submit" icon={Plus}>{editItem ? "Update" : "Add"}</Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search expenses..." className="flex-1 max-w-md" />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2.5 rounded-[12px] border border-border text-sm">
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
        <Button variant="outline" size="sm" icon={Download} onClick={() => downloadJSON(expenses, "expenses.json")}>Export</Button>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-[18px]">
          <Receipt size={48} className="mx-auto text-secondary/40 mb-4" />
          <p className="text-secondary">No expenses yet. Add your first expense above.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-secondary">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((exp) => (
                <tr key={exp.id} className="border-b border-border/50 hover:bg-gray-50/50">
                  <td className="py-3">{exp.date}</td>
                  <td className="py-3"><Badge color="primary">{exp.category}</Badge></td>
                  <td className="py-3 text-secondary">{exp.notes || "—"}</td>
                  <td className="py-3 text-right font-medium">{formatCurrency(exp.amount)}</td>
                  <td className="py-3 text-right">
                    <button onClick={() => openEdit(exp)} className="p-1.5 hover:bg-gray-100 rounded-lg inline-flex" aria-label="Edit"><Pencil size={16} /></button>
                     <button
                      onClick={() => setDeleteTargetId(exp.id)}
                      className="p-1.5 hover:bg-red-50 text-danger rounded-lg inline-flex"
                      aria-label="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

      {deleteTargetId !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[28px] border border-black/10 p-7 max-w-sm w-full shadow-2xl relative overflow-hidden text-left"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                <Trash2 size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg uppercase tracking-tight text-black">Delete Expense?</h3>
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
