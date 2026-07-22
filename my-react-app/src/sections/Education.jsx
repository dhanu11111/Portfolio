import { motion } from "framer-motion";
import Timeline from "../components/education/Timeline";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050816] py-10"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[150px]" />

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Stars */}

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 3,
            }}
            className="absolute h-1 w-1 rounded-full bg-cyan-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
            My Academic
            <span className="text-cyan-400"> Journey</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            My educational background and professional certification that
            shaped my journey into Full Stack Java Development.
          </p>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
        </motion.div>

        {/* Timeline */}

        <Timeline />
      </div>
    </section>
  );
}