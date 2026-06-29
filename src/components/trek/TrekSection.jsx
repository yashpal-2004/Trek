import { useState } from "react";
import { Mountain, Clock, TrendingUp, Droplets, Tent, Utensils, Camera, AlertTriangle, ExternalLink, CheckCircle2, Circle } from "lucide-react";
import { treks, trekDifficulties } from "../../data/treks";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../data/trip";
import { filterBySearch } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import SearchBar from "../common/SearchBar";
import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";

const diffColors = { Easy: "accent", Moderate: "warning", Hard: "danger" };

function TrekCard({ trek, isCompleted, onToggleComplete }) {
  return (
    <Card hover={false} className="overflow-hidden p-0 hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="relative h-48">
        <img src={trek.image} alt={trek.name} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="text-xl font-bold text-white">{trek.name}</h3>
          <Badge color={diffColors[trek.difficulty] || "secondary"}>{trek.difficulty}</Badge>
        </div>
        <button
          onClick={() => onToggleComplete(trek.id)}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
          aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
        >
          {isCompleted ? <CheckCircle2 size={20} className="text-accent" /> : <Circle size={20} className="text-white" />}
        </button>
      </div>
      <div className="p-6">
        <p className="text-sm text-secondary mb-4">{trek.description}</p>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2"><Mountain size={14} className="text-primary" />{trek.distance}</div>
          <div className="flex items-center gap-2"><Clock size={14} className="text-primary" />{trek.duration}</div>
          <div className="flex items-center gap-2"><TrendingUp size={14} className="text-primary" />{trek.elevation}</div>
          <div className="flex items-center gap-2"><Droplets size={14} className="text-primary" />{trek.waterSources ? "Water available" : "Carry water"}</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {trek.camping && <Badge color="secondary"><Tent size={12} className="inline mr-1" />Camping</Badge>}
          {trek.foodAvailable && <Badge color="secondary"><Utensils size={12} className="inline mr-1" />{trek.foodAvailable}</Badge>}
        </div>
        {trek.warnings?.length > 0 && (
          <div className="bg-danger/5 rounded-xl p-3 mb-4">
            <p className="text-xs font-medium text-danger flex items-center gap-1 mb-1"><AlertTriangle size={12} /> Warnings</p>
            <ul className="text-xs text-secondary space-y-0.5">{trek.warnings.slice(0, 2).map((w, i) => <li key={i}>• {w}</li>)}</ul>
          </div>
        )}
        {trek.packing?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {trek.packing.map((p, i) => <Badge key={i} color="primary">{p}</Badge>)}
          </div>
        )}
        <Button variant="outline" size="sm" icon={ExternalLink} onClick={() => window.open(trek.mapLink, "_blank")}>
          View Full Guide
        </Button>
      </div>
    </Card>
  );
}

export default function TrekSection() {
  const [search, setSearch] = useState("");
  const [diffFilter, setDiffFilter] = useState("All");
  const [completedTreks, setCompletedTreks] = useLocalStorage(STORAGE_KEYS.completedTreks, []);

  let filtered = filterBySearch(treks, search, ["name", "description", "difficulty"]);
  if (diffFilter !== "All") filtered = filtered.filter((t) => t.difficulty === diffFilter);

  const toggleComplete = (id) => {
    setCompletedTreks((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);
  };

  return (
    <section id="treks" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle label="Trekking" title="Trek Guides" description="Detailed guides for every trek on your expedition." />
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar value={search} onChange={setSearch} placeholder="Search treks..." className="flex-1 max-w-md" />
          <div className="flex flex-wrap gap-2">
            {trekDifficulties.map((d) => (
              <button key={d} onClick={() => setDiffFilter(d)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${diffFilter === d ? "bg-primary text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((trek) => (
            <TrekCard key={trek.id} trek={trek} isCompleted={completedTreks.includes(trek.id)} onToggleComplete={toggleComplete} />
          ))}
        </div>
      </Container>
    </section>
  );
}
