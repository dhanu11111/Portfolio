

import { motion } from "framer-motion";

export default function SkillCard({ icon, title, color, skills }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-2
      flex
      flex-col
      items-center
      justify-center
      gap-3
      hover:border-cyan-400/40
      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
      transition-all
      duration-300
      "
    >
      <div className="text-6xl">
        {icon}
      </div>

      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>
    </motion.div>
  );
}