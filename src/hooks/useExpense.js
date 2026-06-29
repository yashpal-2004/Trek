import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "../data/trip";
import { budget as budgetData } from "../data/budget";

export function useExpense() {
  const [expenses, setExpenses] = useLocalStorage(STORAGE_KEYS.expenseTracker, []);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
  };

  const updateExpense = (id, updates) => {
    setExpenses((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)));
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const totalSpent = useMemo(() => expenses.reduce((sum, e) => sum + Number(e.amount), 0), [expenses]);

  const remainingBudget = budgetData.total - totalSpent;

  const dailyTotals = useMemo(() => {
    const totals = {};
    expenses.forEach((e) => {
      totals[e.date] = (totals[e.date] || 0) + Number(e.amount);
    });
    return totals;
  }, [expenses]);

  return { expenses, addExpense, updateExpense, deleteExpense, totalSpent, remainingBudget, dailyTotals };
}
