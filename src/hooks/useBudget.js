import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "../data/trip";
import { budget as budgetData } from "../data/budget";

export function useBudget() {
  const [values, setValues] = useLocalStorage(STORAGE_KEYS.budgetCalculator, budgetData.calculatorDefaults);

  const updateValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: Number(value) || 0 }));
  };

  const total = useMemo(
    () => Object.values(values).reduce((sum, v) => sum + Number(v), 0),
    [values]
  );

  const remaining = budgetData.total - total;
  const savings = remaining > 0 ? remaining : 0;
  const overBudget = remaining < 0 ? Math.abs(remaining) : 0;

  const chartData = useMemo(
    () =>
      Object.entries(values)
        .filter(([, v]) => v > 0)
        .map(([key, value]) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          value: Number(value),
        })),
    [values]
  );

  return { values, updateValue, total, remaining, savings, overBudget, chartData, budgetLimit: budgetData.total };
}
