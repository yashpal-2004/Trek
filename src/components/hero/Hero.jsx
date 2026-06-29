import { motion } from "framer-motion";
import { Calendar, Users, Wallet, Activity, TrendingUp, Route, ChevronDown, Map, Download } from "lucide-react";
import { trip } from "../../data/trip";
import { scrollToSection } from "../../utils/helpers";
import Button from "../common/Button";
import Card from "../common/Card";

const heroCards = [
  { icon: Calendar, label: "Duration", value: trip.duration },
  { icon: Users, label: "People", value: `${trip.people} Travelers` },
  { icon: Wallet, label: "Budget", value: `₹${trip.budgetMin / 1000}K–${trip.budgetMax / 1000}K` },
  { icon: Activity, label: "Difficulty", value: trip.difficulty },
  { icon: TrendingUp, label: "Altitude", value: trip.highestAltitude },
  { icon: Route, label: "Trek Distance", value: trip.totalTrekDistance },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            2 Jul – 11 Jul · 10 Days · Uttarakhand
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            {trip.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {trip.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" onClick={() => scrollToSection("itinerary")} icon={Map}>
              View Itinerary
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => scrollToSection("timeline")}
            >
              Explore Route
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
              icon={Download}
              onClick={() => window.print()}
            >
              Download PDF
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {heroCards.map(({ icon: Icon, label, value }) => (
            <Card key={label} hover className="bg-white/10 backdrop-blur-md border-white/20 text-white !p-4">
              <Icon size={20} className="text-white/70 mb-2 mx-auto" />
              <p className="text-xs text-white/60">{label}</p>
              <p className="text-sm font-semibold mt-0.5">{value}</p>
            </Card>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
