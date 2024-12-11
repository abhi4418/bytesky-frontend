import { LinkedInIcon } from "@/components/LinkedInIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoimg from "../../assets/logoimg.avif";
type FooterLink = {
  name: string;
  id: string;
};

const FooterLinks: FooterLink[] = [
  { name: "Overview", id: "overview" },
  { name: "Features", id: "features" },
  { name: "Product", id: "testimonial" },
  { name: "Testimonial", id: "testimonial" },
  { name: "FAQ", id: "faq" },
];

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer className="w-screen bg-gradient-to-bl from-dark-90 via-neutral-100 to-neutral-100 pt-20">
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-neutral-0 flex items-center justify-center w-full mx-auto"
      >
        <img className="w-[40px] h-[40px]" src={logoimg} alt="logo" />
        <div className="flex flex-col gap-2 pl-2">
          <div className="text-sm mb-[-6px]">ByteSky</div>
          <div className="text-sm text-neutral-40">Easy Compute</div>
        </div>
      </motion.div>
      <div className="w-full mx-auto flex gap-4 justify-center pt-8">
        {FooterLinks.map((el) => {
          return (
            <div>
              <a
                href={`#${el.id}`}
                className={`text-sm text-neutral-0 hover:text-neutral-20
                            ${el.name === "FAQ" ? "underline" : ""}`}
              >
                {el.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="mt-20 max-w-screen-lg mx-auto h-[1px] bg-neutral-60"></div>
      <div className="flex md:flex-row md:justify-between max-w-screen-lg mx-auto pt-4 text-sm text-neutral-0 flex-col gap-4 justify-center text-center pb-10 md:pb-0">
        <div className="md:text-center">
          ©ByteSky Technologies Pvt. Ltd. 2024. All rights reserved. Privacy
          Policy.
        </div>
        <a
          href="https://www.linkedin.com/company/byteskyofficial/"
          className="hover:cursor-pointer"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}
