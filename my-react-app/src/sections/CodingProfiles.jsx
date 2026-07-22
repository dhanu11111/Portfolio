// import { motion } from "framer-motion";
// import { codingProfiles } from "../data/codingProfiles";
// import ProfileCard from "../components/ProfileCard";

// export default function CodingProfiles() {
//   return (
//     <section
//       id="coding-profiles"
//       className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24"
//     >
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[180px]" />

//       {/* Floating Stars */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <motion.span
//             key={i}
//             animate={{
//               opacity: [0.3, 1, 0.3],
//               scale: [1, 1.5, 1],
//               y: [0, -15, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute h-1 w-1 rounded-full bg-cyan-300"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >
//           <p className="mb-3 uppercase tracking-[0.3em] text-cyan-400 font-semibold">
//             Competitive Programming
//           </p>

//           <h1 className="text-5xl font-extrabold text-white md:text-6xl">
//             Coding{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Profiles
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
//             I continuously improve my problem-solving skills through coding
//             challenges, data structures & algorithms, and full stack projects.
//           </p>

//           <div className="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
//         </motion.div>

//         {/* Cards */}
//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {codingProfiles.map((profile, index) => (
//             <ProfileCard
//               key={profile.id}
//               profile={profile}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Coding Journey */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-24 rounded-3xl border border-cyan-500/20 bg-[#08111F] p-10"
//         >
//           <h2 className="text-center text-3xl font-bold text-white">
//             My Coding Journey
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-gray-400">
//             I regularly practice programming to strengthen my understanding of
//             Data Structures, Algorithms, Java, JavaScript, React, Node.js and
//             Full Stack Development. As I continue learning, I update my coding
//             profiles with new achievements, solved problems and certifications.
//           </p>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             <div className="rounded-2xl border border-cyan-500/20 bg-[#0C172B] p-6 text-center">
//               <h3 className="text-4xl font-bold text-cyan-400">∞</h3>
//               <p className="mt-3 text-gray-300">Learning Never Stops</p>
//             </div>

//             <div className="rounded-2xl border border-cyan-500/20 bg-[#0C172B] p-6 text-center">
//               <h3 className="text-4xl font-bold text-cyan-400">DSA</h3>
//               <p className="mt-3 text-gray-300">
//                 Problem Solving Practice
//               </p>
//             </div>

//             <div className="rounded-2xl border border-cyan-500/20 bg-[#0C172B] p-6 text-center">
//               <h3 className="text-4xl font-bold text-cyan-400">Full Stack</h3>
//               <p className="mt-3 text-gray-300">
//                 Building Real-World Projects
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { FaCode, FaArrowRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdWorkspaces } from "react-icons/md";

const profiles = [
  {
    id: 1,
    title: "LeetCode",
    icon: <SiLeetcode className="text-6xl text-orange-400" />,
    description:
      "Practicing Data Structures & Algorithms to improve problem-solving skills and coding efficiency.",
    link: "https://leetcode.com/u/dhanushinde11111/", // Replace with your profile
    button: "View Profile",
    color: "from-orange-500 to-yellow-500",
  },

  {
    id: 2,
    title: "Wingz Portfolio",
    icon: <MdWorkspaces className="text-6xl text-cyan-400" />,
    description:
      "Explore my projects, assignments and achievements completed during Full Stack Java Development training.",
    link: "https://wingz.itvedant.com/portfolio/dhanashree-shinde-feb26-t229",
    button: "Visit Portfolio",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function CodingProfiles() {
  return (
    <section
      id="coding"
      className="relative min-h-screen bg-[#030712] py-20 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 uppercase tracking-[4px] text-sm font-medium">
            Practice & Showcase
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent mt-2">
            Coding Profiles
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A glimpse of my coding practice and portfolio showcasing projects
            and continuous learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="w-[340px] rounded-3xl bg-[#0B1220] border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg"
            >
              {/* Top */}
              <div
                className={`h-36 rounded-t-3xl bg-gradient-to-r ${profile.color} flex items-center justify-center`}
              >
                {profile.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {profile.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 min-h-[90px]">
                  {profile.description}
                </p>

                <a
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 text-white font-medium"
                >
                  {profile.button}
                  <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}