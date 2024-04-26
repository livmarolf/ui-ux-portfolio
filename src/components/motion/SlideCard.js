import { motion } from "framer-motion";

export default function SlideCard({ title, description, direction }) {
  return (
    <motion.div
      className="case-card"
      initial={{
        opacity: 0,
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
      <div className="left">
        <div className="image-container"></div>
        <div className="description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="right"></div>
    </motion.div>
  );
}
