import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Abhiraj Anil",
    role: "Co-Founder",
    background: "CS @ IIITH | Ex-Intern @ Sequoia Capital, NEA, JPMC",
    imageUrl: "/abhiraj.jpg",
  },
  {
    name: "Anshika Srivastava",
    role: "Co-Founder",
    background: "CS @ IITM, MBA @ IIMA | Ex-Google, Meta, BCG, McKinsey",
    imageUrl: "/anshika.jpg",
  },
  // {
  //   name: "Kshitij Gajapure",
  //   role: "Co-Founder/CXO",
  //   background: "CS @ IIT Gandhinagar",
  //   imageUrl: "/kshitij.png",
  // },
  {
    name: "Sujal Gupta",
    role: "Co-Founder",
    background: "ECE @ IITH | Oracle Cloud",
    imageUrl: "/sujal.png",
  },
  {
    name: "Pratyaksh Panwar",
    role: "Co-Founder",
    background: "CS @ IITD | Samsung Solve For Tomorrow",
    imageUrl: "/pratyaksh.png",
  },
  // {
  //   name: "Adithya Pillai",
  //   role: "CXO",
  //   background: "MBA @ IIMC |  Deloitte US | Texas Instruments",
  //   imageUrl: "/adithya.png",
  // },

  // {
  //   name: "Devansh Jain",
  //   role: "CXO",
  //   background: "B.Tech @ IITKgp | BCG | Zomato",
  //   imageUrl: "/devansh.png",
  // },
  // {
  //   name: "Wilson Duan",
  //   role: "Founding Engineer",
  //   background: "CS @ Caltech | SWE Intern @ MemVerge ",
  //   imageUrl: "/wilson.png",
  // },
  // {
  //   name: "Bolem V S S Vidya Charan",
  //   role: "Founding Engineer",
  //   background: "CS @ IITD | Intern @ Accenture",
  //   imageUrl: "/vidya.png",
  // },
  // {
  //   name: "Kumar Shivam",
  //   role: "Founding Member",
  //   background: "CSDA @ IITP | Open Source",
  //   imageUrl: "/kumar.png",
  // },
  // {
  //   name: "Abhishek Sharma",
  //   role: "Founding Engineer",
  //   background: "CS @ DTU",
  //   imageUrl: "/sharma.png",
  // },
  // {
  //   name: "Abhishek Gupta",
  //   role: "Founding Engineer",
  //   background: "CS @ DTU",
  //   imageUrl: "/gupta.png",
  // },
  // {
  //   name: "Ashish Ranjan",
  //   role: "Founder's Office",
  //   background: "IPM, IIM Ranchi",
  //   imageUrl: "/ashish.png",
  // },
  // {
  //   name: "Akshit Kumar",
  //   role: "Founder's Office",
  //   background: "B.Tech @ Kalinga University",
  //   imageUrl: "/akshit.png",
  // },
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
          <div
            key={index}
            className="p-6 group cursor-pointer  rounded-lg text-center transform transition duration-300  shadow shadow-dark-40 hover:shadow hover:shadow-dark-10"
            style={{
              background:
                "radial-gradient(94.79997781055154% 94.79999776367805% at 6.367042537459778% 5.199996515206351%, var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))  0%, var(--token-6e1dd630-cd02-44c9-b21a-a542833cf79b, rgb(10, 9, 13))  100%)",
            }}
          >
            <div className="flex flex-col items-start">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-80 h-72 object-contain rounded-lg mx-auto mb-10 group-hover:scale-110 transition duration-300"
              />
              <p className="bg-dark-50 text-neutral-20 text-sm px-4 py-1 rounded-full mb-6">
                {member.role}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-neutral-0">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-40 text-left">{member.background}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
