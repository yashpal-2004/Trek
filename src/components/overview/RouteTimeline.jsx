import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Timeline from "../common/Timeline";
import { routeTimeline } from "../../data/trip";

export default function RouteTimeline() {
  return (
    <section id="timeline" className="py-20 md:py-28 bg-[#f2efe9] scroll-mt-20">
      <Container>
        <SectionTitle
          label="Route"
          title="Journey Timeline"
          description="Your complete path from Hisar through the Garhwal Himalayas and back."
        />
        <Timeline items={routeTimeline} />
      </Container>
    </section>
  );
}
