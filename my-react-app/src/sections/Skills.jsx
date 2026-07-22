import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    color: "text-cyan-400",
    badgeClass: "bg-cyan-900/60",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    color: "text-pink-400",
    badgeClass: "bg-pink-900/50",
    skills: [
      { name: "Spring Boot", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Java", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    title: "Database & Tools",
    color: "text-green-400",
    badgeClass: "bg-green-900/50",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscCode className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#030712] overflow-hidden px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          My Skills
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Technologies, frameworks and tools I use to build modern web
          applications.
        </p>
      </motion.div>

      {/* Skill Groups — centered, single column, max width for easy scanning */}
      <div className="relative max-w-3xl mx-auto flex flex-col gap-8">

        {/* Purple Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full" />

        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="relative bg-[#151822] border border-white/10 rounded-[28px] p-8 backdrop-blur-lg"
          >
            <h3 className={`text-2xl font-semibold ${group.color} mb-8`}>
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full ${group.badgeClass} text-white text-lg`}
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
