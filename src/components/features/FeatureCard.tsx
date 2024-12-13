import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FeatureCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      style={{
        background:
          "radial-gradient(94.79997781055154% 94.79999776367805% at 6.367042537459778% 5.199996515206351%, var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))  0%, var(--token-6e1dd630-cd02-44c9-b21a-a542833cf79b, rgb(10, 9, 13))  100%)",
      }}
      className={cn(
        `bg-dark-100 
    text-neutral-40 py-10 px-6 shadow-dark-40 rounded-xl 
    shadow h-fit `,
        className
      )}
      whileHover={{
        scale: 1.06,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
