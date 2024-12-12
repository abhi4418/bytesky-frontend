import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
const FAQSection = () => {
  const faqs = [
    {
      question:
        "How does ByteCompute achieve the lowest possible cost for GPU usage?",
      answer:
        "Unlike traditional methods that rely solely on high-end GPUs, ByteCompute utilizes low-demand GPUs. By combining these GPUs, ByteCompute achieves performance equivalent to high-end GPUs at a significantly lower cost, optimizing resources without compromising on quality.",
    },
    {
      question:
        "Why is better availability important, and how does ByteCompute achieve it?",
      answer:
        "When high-performance GPUs are scarce, it can be challenging to maintain efficiency. ByteCompute strategically pools low-demand GPUs, which enhances availability and ensures that users have consistent access to the computing power they need, even during peak demand periods.",
    },
    {
      question: "How does ByteCompute ensure the sustainable use of resources?",
      answer:
        "Balancing availability and performance is key to ByteCompute’s approach to sustainable GPU usage. ByteCompute minimizes waste by optimizing the use of existing resources, ensuring that operations are both eco-friendly and efficient.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
          }}
          className="space-y-6"
        >
          <SectionHeading title="FAQ" logoType="Link" className="w-fit md:mx-0 mx-auto" />
          <h2 className="text-4xl font-bold text-neutral-0">Get to Know More About ByteCompute</h2>
          <p className="text-neutral-40">
            Explore the answers to common questions and learn how ByteCompute
            maximizes performance while minimizing costs.
          </p>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="name@email.com"
              className="bg-gray-100 text-gray-500 px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-64 text-sm"
            />
            <button className="bg-black text-white text-sm px-6 py-3 rounded-md">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Right Side FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.6,
      }}
      variants={{
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
      }}
      className="border border-neutral-80 rounded-md p-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-neutral-0">{question}</h3>
        <span className="text-neutral-0">{isOpen ? "–" : "+"}</span>
      </div>
      {isOpen && (
        <div className="mt-2 text-neutral-60">
          <p>{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

export default FAQSection;
