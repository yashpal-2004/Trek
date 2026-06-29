import { getIcon } from "../../utils/icons";
import { emergency, emergencyTips } from "../../data/emergency";
import { copyToClipboard } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { Phone, Copy } from "lucide-react";

export default function EmergencySection() {
  return (
    <section id="emergency" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle label="Help" title="Emergency Contacts" description="Critical numbers and locations — save these offline." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {emergency.map((contact) => {
            const Icon = getIcon(contact.icon, Phone);
            return (
              <Card key={contact.id} hover={false} className="hover:border-danger/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-danger" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{contact.type}{contact.name ? `: ${contact.name}` : ""}</h3>
                    {contact.number && (
                      <a href={`tel:${contact.number}`} className="text-lg font-bold text-danger hover:underline">{contact.number}</a>
                    )}
                    <p className="text-xs text-secondary mt-1">{contact.description}</p>
                    <p className="text-xs text-secondary">{contact.location}</p>
                  </div>
                  {contact.number && (
                    <button
                      onClick={() => copyToClipboard(contact.number)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg shrink-0"
                      aria-label="Copy number"
                    >
                      <Copy size={14} />
                    </button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <Card hover={false} className="bg-primary/5 border-primary/20">
          <h3 className="font-semibold mb-4">Emergency Tips</h3>
          <ul className="grid md:grid-cols-2 gap-2">
            {emergencyTips.map((tip, i) => (
              <li key={i} className="text-sm text-secondary flex items-start gap-2">
                <span className="text-primary font-bold">{i + 1}.</span>{tip}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
