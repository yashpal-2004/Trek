import { useState } from "react";
import { motion } from "framer-motion";
import { getIcon } from "../../utils/icons";
import { packing } from "../../data/packing";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../data/trip";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import ProgressBar from "../common/ProgressBar";
import Badge from "../common/Badge";

export default function PackingSection() {
  const [checked, setChecked] = useLocalStorage(STORAGE_KEYS.packingChecklist, {});
  const allItems = packing.flatMap((cat) => cat.items);
  const checkedCount = allItems.filter((item) => checked[item.id]).length;
  const totalCount = allItems.length;
  const isComplete = checkedCount === totalCount;

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleCategory = (category) => {
    const catItems = category.items;
    const allChecked = catItems.every((item) => checked[item.id]);
    const updates = {};
    catItems.forEach((item) => { updates[item.id] = !allChecked; });
    setChecked((prev) => ({ ...prev, ...updates }));
  };

  return (
    <section id="packing" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle label="Prepare" title="Packing Checklist" description="Interactive checklist — progress saves automatically." />

        <div className="mb-8">
          <ProgressBar value={checkedCount} max={totalCount} label={`${checkedCount} of ${totalCount} items packed`} color={isComplete ? "accent" : "primary"} />
          {isComplete && (
            <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-accent font-medium text-sm mt-3 text-center">
              All packed! You're ready for the expedition.
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packing.map((category) => {
            const Icon = getIcon(category.icon);
            const catChecked = category.items.filter((i) => checked[i.id]).length;

            return (
              <div key={category.category} className="bg-card rounded-[18px] border border-border p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Icon size={20} className="text-primary" />
                    <h3 className="font-semibold">{category.category}</h3>
                  </div>
                  <button onClick={() => toggleCategory(category)} className="text-xs text-primary hover:underline">
                    {catChecked === category.items.length ? "Uncheck all" : "Check all"}
                  </button>
                </div>
                <p className="text-xs text-secondary mb-3">{catChecked}/{category.items.length} packed</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={!!checked[item.id]}
                          onChange={() => toggle(item.id)}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                        />
                        <span className={`text-sm ${checked[item.id] ? "line-through text-secondary" : "text-text"}`}>{item.name}</span>
                        {item.essential && <Badge color="warning">Essential</Badge>}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
