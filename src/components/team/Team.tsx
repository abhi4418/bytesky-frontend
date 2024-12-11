import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import adityapillai from "@/assets/adityapillaiimg.png";
const teamMembers = [
  {
    name: "Abhiraj Anil",
    role: "CEO",
    background: "CS @ IIITH | Sequoia Capital | NEA | JPMC",
    imageUrl: "/abhiraj.png",
  },
  {
    name: "Adrianna Pinzariu",
    role: "CTO",
    background: "Harvard Business Review | Google | NASA",
    imageUrl: "/adrianna.png",
  },
  {
    name: "Pratyaksh Panwar",
    role: "COO",
    background:
      "CSE @ IITD | Samsung Solve For Tomorrow | Smart India Hackathon",
    imageUrl: "/pratyaksh.png",
  },
  {
    name: "Wilson Duan",
    role: "Founding Engineer",
    background: "CS @ Caltech | SWE Intern @ MemVerge ",
    imageUrl: "/wilson.png",
  },
  {
    name: "Kumar Shivam",
    role: "Founding Member",
    background: "CSDA @ IITP | Open Source",
    imageUrl: "/kumar.png",
  },
  {
    name: "Ramcharan Velpuri",
    role: "Founding Member",
    background: "Healthomate | LevelUp Ventures",
    imageUrl: "/ramcharan.png",
  },
  {
    name: "Sujal Gupta",
    role: "Founding Engineer",
    background: "ECE @ IITH | Oracle Cloud",
    imageUrl: "/sujal.png",
  },
  {
    name: "Shruti Priya",
    role: "Founding Engineer",
    background: "NIT Jamshedpur | GSSoC'24 | DRDO",
    imageUrl: "/shruti.png",
  },
  {
    name: "Adithya Pillai",
    role: "Founding Member",
    background: "MBA @ IIMC |  Deloitte US | Texas Instruments",
    imageUrl: adityapillai,
  },
  {
    name: "Waffae Bakkali",
    role: "Founding Member",
    background: "Google | Amazon",
    imageUrl: "/waffae.png",
  },
];

const Team = () => {
  return (
    <div className=" px-6 flex flex-col items-center justify-center min-h-screen pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: "50px" },
          visible: { opacity: 1, y: 0 },
        }}
        className=""
      >
        <SectionHeading
          title="Team"
          logoType="Lock"
          className="mb-4 center mx-auto"
        />
        <h2 className="text-3xl font-bold text-neutral-0 text-center mb-2">
          We Made This Possible!
        </h2>
        <p className="text-lg text-center mb-14 text-neutral-40">
          Driven innovators committed to revolutionizing cloud computing
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-8 md:px-12 lg:px-20 px-2">
        {teamMembers.map((member, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.1,
              // delay: 0.4,
            }}
            variants={{
              hidden: { y: 40 },
              visible: { y: 0 },
            }}
            key={index}
            className="p-6  rounded-lg text-center transform hover:scale-110 transition duration-300  shadow shadow-dark-40"
            style={{
              background:
                "radial-gradient(94.79997781055154% 94.79999776367805% at 6.367042537459778% 5.199996515206351%, var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))  0%, var(--token-6e1dd630-cd02-44c9-b21a-a542833cf79b, rgb(10, 9, 13))  100%)",
            }}
          >
            <div className="flex flex-col items-start">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-80 h-72 object-contain rounded-lg mx-auto mb-10"
              />
              <p className="bg-dark-50 text-neutral-20 text-sm px-4 py-1 rounded-full mb-6">
                {member.role}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-neutral-0">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-40">{member.background}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
