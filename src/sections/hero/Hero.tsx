import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import heroimg from "@/assets/heroimg.webp";
import { Button } from "@/components/ui/button";
import microsoftLogo from "@/assets/microsoft-logo.png";
import ycLogo from "@/assets/yc-logo.avif";
import googleLogo from "@/assets/google-logo.avif";
import harvardUni from "@/assets/harvardimg.avif";
import hyderabadUni from "@/assets/hyderabaduni.avif";
import unknownUni from "@/assets/university-unknown.avif";
import standfordUni from "@/assets/stanfordimg.avif";
import nanyanuni from "@/assets/nanyanuni.avif";
import nusuni from "@/assets/nusuni.avif";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

type Props = {};
export default function HeroSection({}: Props) {
  return (
    <div>
      <div
        className="mt-[140px] md:mt-[124px] w-full font-inter text-center md:h-[80vh] h-full  md:w-[600px] mx-auto flex flex-col items-center justify-center md:gap-10 gap-6"
        id=""
      >
        <SecondaryButton />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-bold md:text-6xl flex flex-col md:gap-3 gap-1 text-4xl "
        >
          <div>Upgrade Experience</div>
          <div>Not Hardware</div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-neutral-60 md:px-0 px-10"
        >
          ByteSky delivers high-performance GPU/CPU instances and virtual
          machines at fraction of traditional costs.
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a
            href="https://calendly.com/abhiraj-bytesky/introductory-call"
            target="_blank"
          >
            <Button>Launch now</Button>
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="#faq" >
          </a>
        </motion.div>
      </div>
      <div>
        <div className="flex flex-col overflow-hidden relative ">
          <div className="w-[390px] md:w-[720px] mx-auto md:mt-0 mt-10 ">
            <ContainerScroll titleComponent={<></>}>
              <img
                src={heroimg}
                alt="hero"
                className="items-center justify-center rounded-4xl h-full"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <div className="mx-auto gap-4 items-center justify-center flex flex-col font-inter text-xs text-neutral-60">
            <div className="flex gap-6 ">
              <img className="md:w-10  w-8 " src={googleLogo} />
              <img className="md:w-10 w-8 " src={ycLogo} />
              <img className="md:w-10 w-8 " src={microsoftLogo} />
            </div>
            <div className="flex ">"Fueled by the Finest"</div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center flex-col text-center">
        <div className="text-neutral-40 ">
          Proven & Approved: We’ve Tested Our Magic in Top Institutes!
        </div>
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}

const SecondaryButton = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: "50px" },
        visible: { opacity: 1, y: 0 },
      }}
      style={{ boxShadow: "0 1px 3px #0000000f,0 2px 4px 1px #0000001a" }}
      className="rounded-full border bg-neutral-0 p-[8px] flex items-center justify-center"
    >
      <div className="px-2 py-1 text-sm bg-red-500 rounded-full text-neutral-0 ">
        🔥A Cloud GPU & DaaS Platform
      </div>
    </motion.div>
  );
};

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    img: nusuni,
  },
  {
    img: nanyanuni,
  },
  {
    img: unknownUni,
  },
  {
    img: hyderabadUni,
  },
  {
    img: standfordUni,
  },
  {
    img: harvardUni,
  },
];
