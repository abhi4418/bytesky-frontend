import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCard({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "right" | "left" | "top" | "bottom";
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Determine initial position based on direction
  const initialPosition = {
    right: { x: 300, opacity: 0 },
    left: { x: -300, opacity: 0 },
    top: { y: -300, opacity: 0 },
    bottom: { y: 300, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialPosition[direction]} // Set initial based on direction
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}} // Animate to visible position
      transition={{ duration: 0.8 , ease: "easeOut"}}
      className=" rounded"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
