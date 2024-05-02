import { motion } from "framer-motion";

export default function SlideCard({ direction, children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // direction should be a value of 50 or -50
        x: direction,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
