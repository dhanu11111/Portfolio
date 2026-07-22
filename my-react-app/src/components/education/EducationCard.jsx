import { motion } from "framer-motion";

export default function EducationCard({ item }) {
  const Icon = item.icon;

  const colorStyles = {
    cyan: {
      border: "border-cyan-400/30",
      bg: "bg-cyan-500/10",
      text: "text-cyan-300",
      glow: "hover:shadow-[0_0_35px_rgba(34,211,238,.35)]",
    },

    purple: {
      border: "border-purple-400/30",
      bg: "bg-purple-500/10",
      text: "text-purple-300",
      glow: "hover:shadow-[0_0_35px_rgba(168,85,247,.35)]",
    },

    pink: {
      border: "border-pink-400/30",
      bg: "bg-pink-500/10",
      text: "text-pink-300",
      glow: "hover:shadow-[0_0_35px_rgba(236,72,153,.35)]",
    },
  };

  const style = colorStyles[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`
        relative
        w-[280px]
        rounded-3xl
        border
        ${style.border}
        bg-white/5
        backdrop-blur-xl
        p-5
        transition-all
        duration-300
        ${style.glow}
      `}
    >
      {/* Glow Effect */}

      <div
        className={`
          absolute
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          blur-3xl
          opacity-20
          ${style.bg}
        `}
      />

      {/* Icon */}

      <div
        className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${style.bg}
          ${style.text}
          text-3xl
          border
          ${style.border}
        `}
      >
        <Icon />
      </div>

      {/* Duration */}

      <span
        className={`
          mt-6
          inline-block
          rounded-full
          ${style.bg}
          ${style.text}
          px-3
          py-1
          text-xs
          font-semibold
        `}
      >
        {item.duration}
      </span>

      {/* Title */}

      <h3 className="mt-5 text-xl font-bold text-white">
        {item.title}
      </h3>

      {/* Institute */}

      <p className="mt-2 text-gray-300 font-medium">
        {item.institute}
      </p>

      {/* Result */}

      <p className={`mt-1 ${style.text} font-semibold`}>
        {item.result}
      </p>


      {/* Description */}

      <p className="mt-5 text-sm leading-7 text-gray-400">
        {item.description}
      </p>
    </motion.div>
  );
}