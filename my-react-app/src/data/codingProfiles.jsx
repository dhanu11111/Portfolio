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
    link: "https://leetcode.com/", // Replace with your profile
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