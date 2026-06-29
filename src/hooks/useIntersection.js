import { useInView } from "react-intersection-observer";

export function useIntersection(options = {}) {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return { ref, inView, entry };
}
