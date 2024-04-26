import { motion } from "framer-motion";

const BounceElement = ({ type, className, ...children }) => {
  const MotionComponent = motion[type] || motion.div;

  return (
    <MotionComponent
      className={className}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...children}
    />
  );
};

export default BounceElement;
