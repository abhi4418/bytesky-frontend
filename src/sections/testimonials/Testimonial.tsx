type Props = {};

import useravatar from "@/assets/useravatar.png";
import { SectionHeading } from "@/components/SectionHeading";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
export interface ITestimonials {
  rating: number;
  review: string;
  userName: string;
  userImg: string;
  userId: string;
}
const Testimonials: ITestimonials[] = [
  {
    rating: 4,
    review:
      "It’s so smooth, it feels like a native application. Sometimes I completely forget I'm working in a cloud PC and not on my own low end machine.",
    userName: "Aditya Gupta",
    userId: "IISC",
    userImg: useravatar,
  },
  {
    rating: 4,
    review:
      "It’s so smooth, it feels like a native application. Sometimes I completely forget I'm working in a cloud PC and not on my own low end machine.",
    userName: "Aditya Gupta",
    userId: "IISC",
    userImg: useravatar,
  },
  {
    rating: 4,
    review:
      "It’s so smooth, it feels like a native application. Sometimes I completely forget I'm working in a cloud PC and not on my own low end machine.",
    userName: "Aditya Gupta",
    userId: "IISC",
    userImg: useravatar,
  },
];
export default function Testimonial({}: Props) {
  return (
    <div className="font-inter mt-20 md:w-full mx-auto py-10" id="testimonial">
      <div className="flex flex-col items-center justify-center mb-6">
        <SectionHeading title="Features" logoType="Star" />
      </div>
      <div className="mx-auto text-center flex flex-col gap-4 mb-20">
        <div className="font-bold md:text-4xl text-3xl px-8">
          Hear From Our Happy Clients
        </div>
        <div className="md:text-base text-neutral-60 px-12">
          Discover how we've made a difference in their lives and businesses.
        </div>
      </div>
      <div className="flex flex-wrap gap-8 w-full mx-auto items-center justify-center">
        {Testimonials.map((item, i) => (
          <TestimonialCard {...item} key={i} />
        ))}
      </div>
    </div>
  );
}
