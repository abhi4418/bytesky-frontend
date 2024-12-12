"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const mobileD1 = [0,20];
const mobileD2 = [0, 1];
export const ContainerScroll = ({
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [.9, 0.8] : [1, 0.9];
  };

  const rotate = useTransform(
    scrollYProgress,
    isMobile ? mobileD2 : [0, .4],
    isMobile ? mobileD1 : [20,0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div
      className=" md:h-[60rem] md:my-[-180px]  flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className=" w-fit relative"
        style={{
          perspective: "800px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="w-fit h-fit -mt-12 mx-auto rounded-[30px] shadow-2xl"
    >
      <div className=" h-fit w-fit  overflow-hidden rounded-2xl md:rounded-2xl ">
        {children}
      </div>
    </motion.div>
  );
};
