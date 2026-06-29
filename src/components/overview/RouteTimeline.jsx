import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Timeline from "../common/Timeline";
import { routeTimeline as routeTimeline1 } from "../../data/plan1/trip";
import { routeTimeline as routeTimeline2 } from "../../data/plan2/trip";

export default function RouteTimeline() {
  const isPlan2 = typeof window !== "undefined" && window.location.pathname.includes("plan2");
  const routeTimeline = isPlan2 ? routeTimeline2 : routeTimeline1;

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
