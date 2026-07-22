import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="
            w-full
            max-w-5xl
            h-[90vh]
            overflow-y-auto
            rounded-3xl
            bg-[#08111f]
            border border-cyan-500/20
            shadow-[0_0_60px_rgba(59,130,246,0.25)]
            "
          >
            {/* Close */}
            <div className="flex justify-end p-5">
              <button
                onClick={onClose}
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Banner */}
            <div className="px-10">
              <div className="h-60 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex flex-col items-center justify-center">
                <div className="text-7xl">{project.icon}</div>

                <h2 className="text-4xl font-bold text-white mt-4">
                  {project.title}
                </h2>

                <span className="mt-3 px-4 py-1 rounded-full bg-white/20 text-white text-sm">
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-10">

              {/* Overview */}
              <Section
                title="Overview"
                content={project.caseStudy?.overview}
              />

              <Section
                title="Problem"
                content={project.caseStudy?.problem}
              />

              <Section
                title="Solution"
                content={project.caseStudy?.solution}
              />

              {/* Features */}
              <ListSection
                title="Key Features"
                items={project.caseStudy?.features}
              />

              {/* Tech */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-white mb-5">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ListSection
                title="Challenges"
                items={project.caseStudy?.challenges}
              />

              <Section
                title="What I Learned"
                content={project.caseStudy?.learning}
              />

              {/* Buttons */}
              <div className="flex gap-5 mt-12">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-4 rounded-xl bg-white/10 hover:bg-white/20 flex justify-center items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold flex justify-center items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, content }) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h3>

      <p className="text-gray-300 leading-8">
        {content}
      </p>
    </div>
  );
}

function ListSection({ title, items }) {
  if (!items) return null;

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-gray-300 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}