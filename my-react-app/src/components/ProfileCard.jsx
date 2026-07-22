import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProfileCard({ profile, index }) {
  const Icon = profile.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className={`group relative overflow-hidden rounded-3xl border ${profile.border}
      bg-[#08111F] p-8 shadow-xl transition-all duration-500
      hover:shadow-[0_0_40px_rgba(34,211,238,.15)]`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Floating Icon */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-[#0F1C30]">
          <Icon className={`text-5xl ${profile.color}`} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mt-8 text-center">
        <h2 className="text-2xl font-bold text-white">
          {profile.name}
        </h2>

        <p className="mt-2 text-cyan-300">
          {profile.username}
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {profile.stats}
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl
          bg-gradient-to-r from-cyan-500 to-blue-600
          px-6 py-3 font-semibold text-white
          transition duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          Visit Profile
          <FaArrowUpRightFromSquare />
        </motion.a>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}