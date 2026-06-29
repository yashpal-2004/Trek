import { getIcon } from "../../utils/icons";
import { emergency, emergencyTips } from "../../data/emergency";
import { copyToClipboard } from "../../utils/helpers";
import Container from "../layout/Container";
import { Phone, Copy, AlertOctagon } from "lucide-react";

export default function EmergencySection() {
  return (
    <section id="emergency" className="py-10 scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Help</p>
          <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            Emergency Contacts
          </h2>
          <p className="text-xs text-slate-500 mt-1">Critical numbers and locations — save these offline.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {emergency.map((contact) => {
            const Icon = getIcon(contact.icon, Phone);
            return (
              <div key={contact.id} className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-5 hover:border-red-200 hover:bg-red-50/30 transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-xs uppercase tracking-tight mb-0.5">
                      {contact.type}{contact.name ? `: ${contact.name}` : ""}
                    </h3>
                    {contact.number && (
                      <a href={`tel:${contact.number}`} className="text-xl font-black text-red-600 hover:underline block">
                        {contact.number}
                      </a>
                    )}
                    <p className="text-[10px] text-slate-500 mt-1">{contact.description}</p>
                    {contact.location && (
                      <p className="text-[10px] text-slate-400 mt-0.5">{contact.location}</p>
                    )}
                  </div>
                  {contact.number && (
                    <button
                      onClick={() => copyToClipboard(contact.number)}
                      className="p-1.5 hover:bg-black/5 rounded-xl text-slate-300 hover:text-slate-600 transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                      aria-label="Copy number"
                    >
                      <Copy size={13} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Tips */}
        <div className="bg-black text-white rounded-[24px] p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <AlertOctagon size={15} className="text-red-400" />
            </div>
            <h3 className="font-extrabold text-sm uppercase tracking-tight">Emergency Action Tips</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {emergencyTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-white/70">
                <span className="font-black text-white/30 shrink-0 mt-0.5 font-mono">{String(i + 1).padStart(2, "0")}.</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
