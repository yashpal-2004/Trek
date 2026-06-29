import { useState } from "react";
import { Train, Bus, Footprints, Waves, Car, Copy, ExternalLink, ArrowDown } from "lucide-react";
import { transport, transportModes } from "../../data/transport";
import { formatCurrency } from "../../utils/currency";
import { filterBySearch, copyToClipboard } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import SearchBar from "../common/SearchBar";
import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";

const modeIcons = { Train, Bus, Trek: Footprints, Raft: Waves, Auto: Car, "Shared Jeep": Car };

function TransportCard({ item }) {
  const Icon = modeIcons[item.mode] || Bus;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${item.from} → ${item.to} | ${item.mode} | ${item.duration} | ${formatCurrency(item.fare)}`;
    const ok = await copyToClipboard(text);
    if (ok) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  return (
    <Card hover={false} className="hover:-translate-y-1 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
        <Badge color="primary">{item.mode}</Badge>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold">{item.from}</span>
        <ArrowDown size={14} className="text-secondary rotate-[-90deg]" />
        <span className="font-semibold">{item.to}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        <div><p className="text-xs text-secondary">Distance</p><p>{item.distance}</p></div>
        <div><p className="text-xs text-secondary">Duration</p><p>{item.duration}</p></div>
        <div><p className="text-xs text-secondary">Fare</p><p className="font-semibold text-primary">{formatCurrency(item.fare)}</p></div>
        <div><p className="text-xs text-secondary">Cheapest</p><p>{formatCurrency(item.cheapest)}</p></div>
      </div>
      {item.alternative && <p className="text-xs text-secondary mt-3">Alt: {item.alternative}</p>}
      {item.frequency && <p className="text-xs text-secondary">Frequency: {item.frequency}</p>}
      {item.notes && <p className="text-xs text-secondary mt-2 italic">{item.notes}</p>}
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="sm" icon={Copy} onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </Button>
        <Button variant="ghost" size="sm" icon={ExternalLink} onClick={() => window.open(`https://maps.google.com/?q=${item.from}+to+${item.to}`, "_blank")}>
          Maps
        </Button>
      </div>
    </Card>
  );
}

export default function TransportSection() {
  const [search, setSearch] = useState("");
  const [modeFilter, setModeFilter] = useState("All");

  let filtered = filterBySearch(transport, search, ["from", "to", "mode", "notes"]);
  if (modeFilter !== "All") filtered = filtered.filter((t) => t.mode === modeFilter);

  return (
    <section id="transport" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionTitle label="Getting Around" title="Transport Guide" description="Complete transport details for every leg of your journey." />
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar value={search} onChange={setSearch} placeholder="Search routes..." className="flex-1 max-w-md" />
          <div className="flex flex-wrap gap-2">
            {transportModes.map((mode) => (
              <button
                key={mode}
                onClick={() => setModeFilter(mode)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${modeFilter === mode ? "bg-primary text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => <TransportCard key={item.id} item={item} />)}
        </div>
      </Container>
    </section>
  );
}
