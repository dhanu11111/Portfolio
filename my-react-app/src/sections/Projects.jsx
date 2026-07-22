



import { motion } from "framer-motion";
import { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projects from "../data/projectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );

  const upcomingProjects = projects.filter(
    (project) => project.status === "Coming Soon"
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#030712] px-6 lg:px-16 py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A collection of projects showcasing my frontend, backend and
            full-stack development skills.
          </p>
        </motion.div>

        {/* Completed */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCaseStudy={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Coming Soon */}
        <div className="flex justify-center gap-6 flex-wrap mt-10">
          {upcomingProjects.map((project) => (
            <div key={project.id} className="w-full md:w-[300px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}