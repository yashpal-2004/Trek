import { getIcon } from "../../utils/icons";
import { Utensils } from "lucide-react";
import { foodGuide } from "../../data/food";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";
import Card from "../common/Card";

export default function FoodSection() {
  return (
    <section id="food" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle
          label="Dining"
          title="Food Guide"
          description={`Daily estimate: ${formatCurrency(foodGuide.dailyEstimate.min)}–${formatCurrency(foodGuide.dailyEstimate.max)} per person.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {foodGuide.meals.map((meal) => {
            const Icon = getIcon(meal.icon, Utensils);
            return (
              <Card key={meal.type} hover={false}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={20} className="text-primary" />
                  <h3 className="font-semibold">{meal.type}</h3>
                </div>
                <ul className="space-y-3">
                  {meal.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start text-sm border-b border-border/50 pb-2">
                      <div>
                        <p className="font-medium">{item.dish}</p>
                        <p className="text-xs text-secondary">{item.place}</p>
                      </div>
                      <span className="font-semibold text-primary shrink-0">{formatCurrency(item.cost)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card hover={false}>
            <h3 className="font-semibold mb-4">Local Specialties</h3>
            <ul className="space-y-3">
              {foodGuide.localSpecialties.map((s, i) => (
                <li key={i}>
                  <p className="font-medium text-sm">{s.name}</p>
                  <p className="text-xs text-secondary">{s.description}</p>
                  <Badge color="accent" className="mt-1">{s.cost}</Badge>
                </li>
              ))}
            </ul>
          </Card>
          <Card hover={false}>
            <h3 className="font-semibold mb-4">Protein Sources</h3>
            <ul className="space-y-2">
              {foodGuide.proteinSources.map((p, i) => (
                <li key={i} className="text-sm text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />{p}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-2">Tips</h4>
              <ul className="space-y-1">
                {foodGuide.tips.map((t, i) => <li key={i} className="text-xs text-secondary">• {t}</li>)}
              </ul>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
