import { getIcon } from "../../utils/icons";
import { CloudRain, Shield } from "lucide-react";
import { safety } from "../../data/weather";
import { weather } from "../../data/weather";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionTitle label="Stay Safe" title="Safety Guide" description="Essential safety information for your trek." />

        <Card hover={false} className="mb-8 bg-warning/5 border-warning/20">
          <div className="flex items-start gap-3">
            <CloudRain size={24} className="text-warning shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Monsoon Warning — {weather.month}</h3>
              <p className="text-sm text-secondary">{weather.monsoonWarning}</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safety.map((item) => {
            const Icon = getIcon(item.icon, Shield);
            return (
              <Card key={item.id} hover={false} className="hover:-translate-y-1 hover:shadow-md transition-all">
                <Icon size={22} className="text-primary mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-secondary mb-3">{item.description}</p>
                <ul className="space-y-1">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-secondary flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>{tip}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <SectionTitle label="Weather" title="Expected Conditions" description={`Average weather during ${weather.month} in Garhwal.`} className="!mb-8" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-secondary">
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">Temp</th>
                <th className="pb-3 font-medium">Rain</th>
                <th className="pb-3 font-medium">Humidity</th>
                <th className="pb-3 font-medium">Sunrise</th>
                <th className="pb-3 font-medium">Wind</th>
              </tr>
            </thead>
            <tbody>
              {weather.locations.map((loc) => (
                <tr key={loc.name} className="border-b border-border/50">
                  <td className="py-3 font-medium">{loc.name}</td>
                  <td className="py-3">{loc.temp.min}–{loc.temp.max}°C</td>
                  <td className="py-3"><Badge color="primary">{loc.rain}%</Badge></td>
                  <td className="py-3">{loc.humidity}%</td>
                  <td className="py-3">{loc.sunrise}</td>
                  <td className="py-3 text-secondary">{loc.wind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
