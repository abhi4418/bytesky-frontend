import { ITestimonials } from "@/sections/testimonials/Testimonial";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
export default function TestimonialCard({
  userName,
  userId,
  userImg,
  review,
  rating,
}: ITestimonials) {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        transition: {
          duration: 0.2,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.4,
      }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{
        background:
          "radial-gradient(94.79997781055154% 94.79999776367805% at 6.367042537459778% 5.199996515206351%, var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))  0%, var(--token-6e1dd630-cd02-44c9-b21a-a542833cf79b, rgb(10, 9, 13))  100%)",
      }}
      className="w-[340px]  shadow-dark-40 border border-neutral-80 shadow-sm h-auto p-6 rounded-xl cursor-pointer"
    >
      <StarIcons count={rating} />
      <div className="mt-6 text-neutral-10">{review}</div>
      <div className="flex mt-8 gap-2 text-neutral-20">
        <div>
          <img src={userImg} className="w-14 rounded-full" />
        </div>
        <div className="flex flex-col text-sm justify-center">
          <div>{userName}</div>
          <div>{userId}</div>
        </div>
      </div>
    </motion.div>
  );
}

const StarIcons = ({ count }: { count: number }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} className="text-yellow-400" fill="#fbbf24" />
      ))}
    </div>
  );
};
