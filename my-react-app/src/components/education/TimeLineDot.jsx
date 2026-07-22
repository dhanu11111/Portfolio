
import { motion } from "framer-motion";

export default function TimelineDot({ color = "cyan" }) {
  const colors = {
    cyan: {
      outer: "bg-cyan-500/20",
      inner: "bg-cyan-400",
      glow: "shadow-[0_0_25px_rgba(34,211,238,.9)]",
    },

    purple: {
      outer: "bg-purple-500/20",
      inner: "bg-purple-400",
      glow: "shadow-[0_0_25px_rgba(168,85,247,.9)]",
    },

    pink: {
      outer: "bg-pink-500/20",
      inner: "bg-pink-400",
      glow: "shadow-[0_0_25px_rgba(236,72,153,.9)]",
    },
  };

  const style = colors[color];

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
      className="relative flex items-center justify-center"
    >
      {/* Outer Glow */}
      <div
        className={`
          h-8
          w-8
          rounded-full
          ${style.outer}
          flex
          items-center
          justify-center
        `}
      >
        {/* Inner Dot */}
        <div
          className={`
            h-4
            w-4
            rounded-full
            ${style.inner}
            ${style.glow}
          `}
        />
      </div>

      {/* Animated Pulse Ring */}
      <motion.div
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className={`
          absolute
          h-8
          w-8
          rounded-full
          border
          border-white/20
        `}
      />
    </motion.div>
  );
}