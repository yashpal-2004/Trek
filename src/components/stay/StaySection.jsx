import { Bed, Star, MapPin, ExternalLink, Tent, Building } from "lucide-react";
import { stayOptions } from "../../data/budget";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";

export default function StaySection() {
  return (
    <section id="stay" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionTitle label="Accommodation" title="Where to Stay" description="Budget-friendly stays across your route." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stayOptions.map((stay) => (
            <Card key={stay.id} hover={false} className="overflow-hidden p-0 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="relative h-40">
                <img src={stay.image} alt={stay.destination} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">{stay.destination}</h3>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5">
                  <Star size={12} className="text-warning fill-warning" />
                  <span className="text-xs font-medium">{stay.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-secondary">Budget</p>
                    <p className="font-semibold text-sm">{stay.budget ? formatCurrency(stay.budget) : "Free"}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-secondary">Mid</p>
                    <p className="font-semibold text-sm">{formatCurrency(stay.mid)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-secondary">Premium</p>
                    <p className="font-semibold text-sm">{formatCurrency(stay.premium)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {stay.gmvnn && <Badge color="primary"><Building size={12} className="inline mr-1" />GMVN</Badge>}
                  {stay.camping && <Badge color="accent"><Tent size={12} className="inline mr-1" />Camping</Badge>}
                  {stay.hostel && <Badge color="secondary"><Bed size={12} className="inline mr-1" />Hostel</Badge>}
                </div>
                <div className="grid md:grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-xs font-medium text-accent mb-1">Pros</p>
                    <ul className="text-xs text-secondary space-y-0.5">{stay.pros.map((p, i) => <li key={i}>+ {p}</li>)}</ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-danger mb-1">Cons</p>
                    <ul className="text-xs text-secondary space-y-0.5">{stay.cons.map((c, i) => <li key={i}>− {c}</li>)}</ul>
                  </div>
                </div>
                <p className="text-xs text-secondary italic mb-4">{stay.tips}</p>
                <Button variant="outline" size="sm" icon={ExternalLink} onClick={() => window.open(stay.mapLink, "_blank")}>
                  Open Maps
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
