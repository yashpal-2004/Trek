import { Printer, Download, FileText } from "lucide-react";
import { trip } from "../../data/trip";
import { itinerary } from "../../data/itinerary";
import { budget } from "../../data/budget";
import { formatCurrency } from "../../utils/currency";
import { downloadJSON } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import Card from "../common/Card";

export default function PrintSection() {
  const handlePrint = () => window.print();

  const handleExportTrip = () => {
    downloadJSON({ trip, itinerary, budget }, "garhwal-expedition-full.json");
  };

  return (
    <section id="print" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionTitle label="Export" title="Print & Download" description="Take your itinerary offline or print a copy." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover={false} className="text-center">
            <Printer size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Print Itinerary</h3>
            <p className="text-sm text-secondary mb-4">Print-friendly version of the complete trip plan.</p>
            <Button onClick={handlePrint} icon={Printer}>Print Now</Button>
          </Card>
          <Card hover={false} className="text-center">
            <Download size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Download JSON</h3>
            <p className="text-sm text-secondary mb-4">Export all trip data for offline backup.</p>
            <Button variant="outline" onClick={handleExportTrip} icon={Download}>Download</Button>
          </Card>
          <Card hover={false} className="text-center">
            <FileText size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Trip Summary</h3>
            <p className="text-sm text-secondary mb-2">{trip.duration} · {trip.people} people</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(budget.total)} budget</p>
          </Card>
        </div>

        <div className="print-only mt-12 hidden">
          <h1>{trip.title}</h1>
          <p>{trip.duration} · Budget: {formatCurrency(trip.budgetMin)}–{formatCurrency(trip.budgetMax)}</p>
          {itinerary.map((day) => (
            <div key={day.id} className="mb-6">
              <h2>Day {day.id}: {day.title}</h2>
              <p>{day.overview}</p>
              <p>Cost: {formatCurrency(day.estimatedCost)} | {day.travelMode} | {day.travelTime}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
