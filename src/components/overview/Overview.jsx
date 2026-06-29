import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Info } from "lucide-react";
import { quickStats as quickStats1, overviewCards as overviewCards1 } from "../../data/plan1/trip";
import { quickStats as quickStats2, overviewCards as overviewCards2 } from "../../data/plan2/trip";
import { getIcon } from "../../utils/icons";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

// Detect plan at render time (not at module load time) to stay reactive in SPA
function usePlan2() {
  const [isPlan2, setIsPlan2] = useState(
    typeof window !== "undefined" && window.location.pathname.includes("plan2")
  );
  useEffect(() => {
    setIsPlan2(window.location.pathname.includes("plan2"));
  }, []);
  return isPlan2;
}

function AnimatedNumber({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(progress * value);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  const isDecimal = value % 1 !== 0;
  return isDecimal ? count.toFixed(2) : Math.round(count).toLocaleString("en-IN");
}

function AnimatedStat({ stat, index }) {
  const Icon = getIcon(stat.icon);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group bg-white/70 backdrop-blur-md rounded-[24px] border border-black/10 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-black/20 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-4 text-black/70 group-hover:bg-black/10 transition-colors">
        <Icon size={20} />
      </div>
      <p className="text-3xl font-black text-black">
        {stat.prefix}
        <AnimatedNumber value={stat.value} inView={inView} />
        {stat.suffix}
      </p>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5">{stat.label}</p>
      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{stat.description}</p>
    </motion.div>
  );
}

export default function QuickStats() {
  const isPlan2 = usePlan2();
  const quickStats = isPlan2 ? quickStats2 : quickStats1;

  return (
    <section className="py-20 md:py-28 bg-[#f2efe9]">
      <Container>
        <SectionTitle
          label="At a Glance"
          title="Trip Statistics"
          description="Key numbers for your Garhwal adventure at a glance."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, i) => (
            <AnimatedStat key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function OverviewSection() {
  const isPlan2 = usePlan2();
  const overviewCards = isPlan2 ? overviewCards2 : overviewCards1;

  return (
    <section id="overview" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle
          label="Trip Overview"
          title="Trek"
          description="Everything you need before starting your journey."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewCards.map((card, i) => {
            const Icon = getIcon(card.icon, Info);
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-[18px] border border-border p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <Icon size={22} className="text-primary mb-3" />
                <p className="text-xs text-secondary font-medium uppercase tracking-wide">{card.label}</p>
                <p className="text-xl font-bold text-text mt-1">{card.value}</p>
                <p className="text-xs text-secondary mt-2">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
