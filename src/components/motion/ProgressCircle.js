import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressCircle() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scaleX }}
      />
    </svg>
  );
}
