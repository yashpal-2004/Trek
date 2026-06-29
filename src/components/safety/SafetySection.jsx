import { getIcon } from "../../utils/icons";
import { CloudRain, Shield, Thermometer, Wind, Droplets, Sunrise, Signal, WifiOff, Wifi } from "lucide-react";
import { safety } from "../../data/weather";
import { weather } from "../../data/weather";
import { networkCoverage } from "../../data/weather";
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

        {/* Mobile Network Coverage */}
        <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-6 mb-6">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
              <Signal size={15} className="text-black/60" />
            </div>
            <div>
              <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Connectivity</p>
              <h3 className="text-base font-extrabold uppercase tracking-tight">Mobile Network Coverage</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {networkCoverage.map((loc) => {
              const signalStyle = {
                4: { badge: "bg-emerald-100 text-emerald-700", bar: "bg-emerald-500", bars: 4 },
                3: { badge: "bg-blue-50 text-blue-700",    bar: "bg-blue-500",   bars: 3 },
                1: { badge: "bg-amber-50 text-amber-700",  bar: "bg-amber-400",  bars: 1 },
                0: { badge: "bg-red-50 text-red-600",      bar: "bg-red-400",    bars: 0 },
              }[loc.level] || { badge: "bg-slate-100 text-slate-600", bar: "bg-slate-400", bars: 2 };

              return (
                <div key={loc.place} className="flex flex-col gap-2.5 p-4 bg-black/[0.02] border border-black/5 rounded-2xl hover:border-black/10 transition-all">
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold text-sm">{loc.place}</p>
                    <span className={`text-[9px] font-black font-mono uppercase px-2 py-0.5 rounded-md ${signalStyle.badge}`}>
                      {loc.signal}
                    </span>
                  </div>

                  {/* Signal bars */}
                  <div className="flex items-end gap-0.5 h-4">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className={`rounded-sm transition-all ${bar <= signalStyle.bars ? signalStyle.bar : "bg-black/10"}`}
                        style={{ width: "6px", height: `${bar * 25}%` }}
                      />
                    ))}
                    {loc.level === 0 && (
                      <WifiOff size={14} className="text-red-400 ml-1" />
                    )}
                  </div>

                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-slate-500">{loc.carriers}</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed">{loc.note}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] text-slate-400 mt-4 pt-4 border-t border-black/5">
            Download offline maps (Maps.me / Google Maps offline) before leaving Gopeshwar. Carry a fully charged power bank — no charging points at Rudranath or Sagar.
          </p>
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
