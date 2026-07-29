import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "../data/trip";
import { budget as budgetData } from "../data/budget";

export function useBudget() {
  const [rawValues, setValues] = useLocalStorage(STORAGE_KEYS.budgetCalculator, budgetData.calculatorDefaults);

  const effectiveValues = useMemo(() => {
    const defaults = budgetData.calculatorDefaults || {};
    if (!rawValues) return defaults;
    const result = {};
    Object.keys(defaults).forEach((key) => {
      result[key] = rawValues[key] !== undefined ? rawValues[key] : defaults[key];
    });
    return result;
  }, [rawValues]);

  const updateValue = (key, value) => {
    setValues((prev) => ({ ...(prev || {}), [key]: Number(value) || 0 }));
  };

  const total = useMemo(
    () => Object.values(effectiveValues).reduce((sum, v) => sum + Number(v), 0),
    [effectiveValues]
  );

  const remaining = (budgetData.total || 0) - total;
  const savings = remaining > 0 ? remaining : 0;
  const overBudget = remaining < 0 ? Math.abs(remaining) : 0;

  const chartData = useMemo(
    () =>
      Object.entries(effectiveValues)
        .filter(([, v]) => v > 0)
        .map(([key, value]) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          value: Number(value),
        })),
    [effectiveValues]
  );

  return { values: effectiveValues, updateValue, total, remaining, savings, overBudget, chartData, budgetLimit: budgetData.total };
}
