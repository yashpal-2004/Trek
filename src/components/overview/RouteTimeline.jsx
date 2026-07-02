import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Timeline from "../common/Timeline";
import { trip, routeTimeline } from "../../data/trip";

export default function RouteTimeline() {
  const descriptionText = `Your complete path from ${trip.startingPoint} through the ${
    trip.title.includes("Sikkim") ? "Sikkim region" : "Garhwal Himalayas"
  } and back.`;

  return (
    <section id="timeline" className="py-20 md:py-28 bg-[#f2efe9] scroll-mt-20">
      <Container>
        <SectionTitle
          label="Route"
          title="Journey Timeline"
          description={descriptionText}
        />
        <Timeline items={routeTimeline} />
      </Container>
    </section>
  );
}
