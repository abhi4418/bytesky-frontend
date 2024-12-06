import { ITestimonials } from "@/sections/testimonials/Testimonial";
import {  Star } from "lucide-react";
import {motion} from "framer-motion"
export default function TestimonialCard({
  userName,
  userId,
  userImg,
  review,
  rating,
}: ITestimonials) {
  return (
    <motion.div whileHover={{
      scale: 1.06,
      transition: {
        duration: 0.3
      }
    }} className="w-[340px]  h-auto bg-[#fbfbfb] border-[#e5e5e8] border p-6 rounded-lg cursor-pointer">
      <StarIcons count={rating} />
      <div className="mt-6">{review}</div>
      <div className="flex mt-8 gap-2">
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
        <Star key={index} className="text-yellow-400"  fill="#fbbf24"/>
      ))}
    </div>
  );
};
