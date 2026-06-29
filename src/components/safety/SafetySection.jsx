import { getIcon } from "../../utils/icons";
import { CloudRain, Shield, Thermometer, Wind, Droplets, Sunrise } from "lucide-react";
import { safety } from "../../data/weather";
import { weather } from "../../data/weather";
import Container from "../layout/Container";

export default function SafetySection() {
  return (
    <section id="safety" className="py-10 scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Stay Safe</p>
          <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            Safety Guide
          </h2>
        </div>

        {/* Monsoon Warning Banner */}
        <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-[24px] p-6 mb-8">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
            <CloudRain size={18} className="text-amber-600" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm uppercase tracking-tight text-amber-800 mb-1">
              Monsoon Alert — {weather.month}
            </h3>
            <p className="text-xs text-amber-700 leading-relaxed">{weather.monsoonWarning}</p>
          </div>
        </div>

        {/* Safety Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {safety.map((item) => {
            const Icon = getIcon(item.icon, Shield);
            return (
              <div key={item.id} className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-5 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                  <Icon size={16} className="text-black/60" />
                </div>
                <h3 className="font-extrabold text-sm uppercase tracking-tight mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-1.5">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                      <span className="text-black/30 font-black shrink-0">{String(i + 1).padStart(2, "0")}.</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Weather Table */}
        <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-6">
          <div className="mb-5">
            <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Expected Conditions</p>
            <h3 className="text-base font-extrabold uppercase tracking-tight">
              Weather — {weather.month}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-black/5">
                  {["Location", "Temp", "Rain", "Humidity", "Sunrise", "Wind"].map((h) => (
                    <th key={h} className="pb-3 font-black text-slate-400 uppercase tracking-wider text-[9px] font-mono text-left pr-6">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weather.locations.map((loc, i) => (
                  <tr key={loc.name} className={`border-b border-black/5 last:border-0 ${i % 2 === 0 ? "" : "bg-black/[0.01]"}`}>
                    <td className="py-3 font-bold pr-6">{loc.name}</td>
                    <td className="py-3 pr-6">
                      <span className="flex items-center gap-1 font-medium">
                        <Thermometer size={11} className="text-red-400" />
                        {loc.temp.min}–{loc.temp.max}°C
                      </span>
                    </td>
                    <td className="py-3 pr-6">
                      <span className="flex items-center gap-1">
                        <Droplets size={11} className="text-blue-400" />
                        <span className="font-bold text-blue-600">{loc.rain}%</span>
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-slate-600">{loc.humidity}%</td>
                    <td className="py-3 pr-6">
                      <span className="flex items-center gap-1 text-slate-600">
                        <Sunrise size={11} className="text-amber-400" />{loc.sunrise}
                      </span>
                    </td>
                    <td className="py-3 text-slate-500">
                      <span className="flex items-center gap-1">
                        <Wind size={11} className="text-slate-400" />{loc.wind}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
