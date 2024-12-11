import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import heroimg from "@/assets/heroimg.webp";
import heroimg2 from "@/assets/heorimg2.avif";
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
import { SparklesCore } from "@/components/ui/sparkles";

type Props = {};
export default function HeroSection({}: Props) {
  return (
    <div className="bg-gradient-to-bl from-dark-90 via-neutral-100 to-neutral-100">
      <div
        className="mt-[120px] md:mt-[136px] w-full font-inter text-center md:h-[80vh] h-full  md:w-[600px] mx-auto flex flex-col items-center justify-center md:gap-8 gap-6"
        id=""
      >
        <SecondaryButton />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-bold md:text-6xl flex flex-col md:gap-3 gap-1 text-4xl text-neutral-0"
        >
          <div className="h-[160px] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-6xl text-4xl font-bold text-center text-white relative z-20 gap-2 flex flex-col">
              <div>Upgrade Experience</div>
              <div>Not Hardware</div>
            </h1>
            <div className="w-[40rem] h-40 mt-2 relative">
              <div className="">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              </div>

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={0.7}
                particleDensity={800}
                className="w-full h-10"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-neutral-40 md:px-0 px-10"
        >
          ByteSky delivers high-performance GPU/CPU instances and virtual
          machines at fraction of traditional costs.
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: "50px" },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="#faq"></a>
        </motion.div>
      </div>
      <div>
        <div className="flex flex-col overflow-hidden relative ">
          <div className="w-[390px] md:w-[800px] mx-auto md:mt-0 mt-10 ">
            <ContainerScroll titleComponent={<></>}>
              <img
                src={heroimg2}
                alt="hero"
                className="items-center border border-dark-0  justify-center rounded-[20px] h-full"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: "50px" },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto gap-4 items-center justify-center flex flex-col font-inter text-xs text-neutral-60"
          >
            <div className="flex gap-6 ">
              <img className="md:w-10  w-8 " src={googleLogo} />
              <img className="md:w-10 w-8 " src={ycLogo} />
              <img className="md:w-10 w-8 " src={microsoftLogo} />
            </div>
            <div className="flex ">"Fueled by the Finest"</div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: "50px" },
          visible: { opacity: 1, y: 0 },
        }}
        className="mt-20 flex items-center justify-center flex-col text-center"
      >
        <div className="text-neutral-40 pb-8 ">
          Proven & Approved: We’ve Tested Our Magic in Top Institutes!
        </div>
        <InfiniteMovingCardsDemo />
      </motion.div>
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
      // style={{ boxShadow: "0 1px 3px #0000000f,0 2px 4px 1px #0000001a" }}
      className="rounded-full md:mt-0 mt-6 bg-dark-80 p-[8px] flex items-center justify-center"
    >
      <div className="px-2 py-1 text-sm bg-dark-80 rounded-full text-neutral-0 ">
        🔥A Cloud GPU & DaaS Platform
      </div>
    </motion.div>
  );
};

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-dark-100  items-center justify-center relative overflow-hidden">
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
