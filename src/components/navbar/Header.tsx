import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: "-50px" },
        visible: { opacity: 1, y: 0 },
      }}
      className="fixed top-0 z-[100] flex w-full justify-center items-center h-14 bg-neutral-900 md:text-base text-sm  text-neutral-0 font-inter"
    >
      ✹ Simple, Fast Computing for Your Big Ideas ✹
    </motion.div>
  );
}

export default Header;
