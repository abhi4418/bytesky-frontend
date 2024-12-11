import { cn } from "@/lib/utils";
import {motion} from "framer-motion";

export function FeatureCard({children , className} : {children : React.ReactNode , className? : string}) {
  return (
    <motion.div className={cn(`bg-dark-100 
    text-neutral-40 py-10 px-6 border rounded-xl border-gray-100
    shadow h-fit ` , className)}
    whileHover={{
        scale: 1.06,
        transition: {
          duration: 0.3
        }
      }}
    >
        {children}
    </motion.div>
  )
}
