// // // import { motion } from "framer-motion";
// // // import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// // // import { FiFileText } from "react-icons/fi";

// // // export default function ProjectCard({
// // //   image,
// // //   title,
// // //   summary,
// // //   tech,
// // //   live,
// // //   caseStudy,
// // // } ){
// // //   return (
// // //     <motion.div
// // //       whileHover={{
// // //         y: -10,
// // //         scale: 1.02,
// // //       }}
// // //       transition={{ duration: 0.3 }}
// // //       className="rounded-3xl
// // //       overflow-hidden
// // //       bg-[#0F172A]
// // //       border border-purple-500/30
// // //       shadow-[0_0_30px_rgba(168,85,247,.15)]"
// // //     >

// // //       <img
// // //         src={image}
// // //         alt={title}
// // //         className="w-full h-40 object-cover"
// // //       />

// // //       <div className="p-4">

// // //         <h2 className="text-xl font-bold text-purple-300">
// // //           {title}
// // //         </h2>

// // //         <p className="text-sm text-slate-400 mt-2 leading-6">
// // //           {summary}
// // //         </p>

// // //         <h4 className="text-white mt-6 mb-3 font-semibold">
// // //           Languages Used
// // //         </h4>

// // //         <div className="flex flex-wrap gap-2">

// // //           {tech.map((item) => (
// // //             <span
// // //               key={item}
// // //               className="bg-slate-800
// // //               text-sky-300
// // //               px-2
// // //               py-1
// // //               rounded-full
// // //               text-xs"
// // //             >
// // //               {item}
// // //             </span>
// // //           ))}

// // //         </div>

// // //         <div className="flex gap-4 mt-8">

// // //           <a
// // //             href={live}
// // //             className="flex-1"
// // //           >
// // //             <button
// // //               className="w-full
// // //               py-2 text-sm
// // //               rounded-xl
// // //               bg-blue-600
// // //               hover:bg-blue-500
// // //               text-white
// // //               flex
// // //               justify-center
// // //               items-center
// // //               gap-2
// // //               duration-300"
// // //             >
// // //               <FaArrowUpRightFromSquare />
// // //               Go Live
// // //             </button>
// // //           </a>

// // //           <a
// // //             href={caseStudy}
// // //             className="flex-1"
// // //           >
// // //             <button
// // //               className="w-full
// // //               py-3
// // //               rounded-xl
// // //               bg-purple-600
// // //               hover:bg-purple-500
// // //               text-white
// // //               flex
// // //               justify-center
// // //               items-center
// // //               gap-2
// // //               duration-300"
// // //             >
// // //               <FiFileText />
// // //               Case Study
// // //             </button>
// // //           </a>

// // //         </div>

// // //       </div>

// // //     </motion.div>
// // //   );
// // // }




// // // import { motion } from "framer-motion";
// // // import {
// // //   FaArrowUpRightFromSquare,
// // //   FaBook,
// // //   FaListCheck,
// // //   FaLaptopCode,
// // //   FaCartShopping,
// // // } from "react-icons/fa6";
// // // import { MdOutlineInventory2 } from "react-icons/md";
// // // import { GiClothes } from "react-icons/gi";
// // // import { FiFileText } from "react-icons/fi";

// // // export default function ProjectCard({
// // //   icon,
// // //   title,
// // //   summary,
// // //   tech,
// // //   live,
// // //   caseStudy,
// // // }) {
// // //   const icons = {
// // //     library: <FaBook size={45} />,
// // //     todo: <FaListCheck size={45} />,
// // //     portfolio: <FaLaptopCode size={45} />,
// // //     ecommerce: <FaCartShopping size={45} />,
// // //     expiry: <MdOutlineInventory2 size={45} />,
// // //     wardrobe: <GiClothes size={45} />,
// // //   };

// // //   return (
// // //     <motion.div
// // //       whileHover={{ y: -10, scale: 1.03 }}
// // //       transition={{ duration: 0.35 }}
// // //       className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,.15)] hover:shadow-[0_0_45px_rgba(59,130,246,.35)] duration-300"
// // //     >
// // //       {/* Header */}
// // //       {/* <div className="relative h-44 bg-gradient-to-br from-[#312E81] via-[#5B21B6] to-[#7E22CE] flex flex-col justify-center items-center overflow-hidden"> */}
// // //       <div className="relative h-44 bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#312E81] flex flex-col justify-center items-center overflow-hidden">
// // //       {/* <div className="relative h-44 bg-gradient-to-br from-[#581C87] via-[#7E22CE] to-[#DB2777] flex flex-col justify-center items-center overflow-hidden"> */}
// // //         {/* <div className="relative h-44 bg-gradient-to-r from-[#1E1B4B] via-[#4C1D95] to-[#701A75] flex flex-col justify-center items-center overflow-hidden"> */}
// // //         <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

// // //         <div className="z-10 text-white">
// // //           {icons[icon]}
// // //         </div>

// // //         <h2 className="z-10 mt-4 text-xl font-bold text-white text-center px-3">
// // //           {title}
// // //         </h2>
// // //       </div>

// // //       {/* Content */}
// // //       <div className="p-5">
// // //         <p className="text-slate-300 text-sm leading-6 h-[72px]">
// // //           {summary}
// // //         </p>

// // //         <h4 className="mt-5 text-white font-semibold">
// // //           Technologies
// // //         </h4>

// // //         <div className="flex flex-wrap gap-2 mt-3">
// // //           {tech.map((item) => (
// // //             <span
// // //               key={item}
// // //               className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs"
// // //             >
// // //               {item}
// // //             </span>
// // //           ))}
// // //         </div>

// // //         <div className="grid grid-cols-2 gap-3 mt-7">
// // //           <a href={live}>
// // //             <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:scale-105 duration-300 flex justify-center items-center gap-2">
// // //               <FaArrowUpRightFromSquare />
// // //               Go Live
// // //             </button>
// // //           </a>

// // //           <a href={caseStudy}>
// // //             <button className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-medium hover:scale-105 duration-300 flex justify-center items-center gap-2">
// // //               <FiFileText />
// // //               Case Study
// // //             </button>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }

// // import { motion } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import {
// //   FaArrowUpRightFromSquare,
// //   FaGithub,
// //   FaStar,
// // } from "react-icons/fa6";

// // export default function ProjectCard({ project, index }) {
// //   const Icon = project.icon;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 60 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{
// //         duration: 0.6,
// //         delay: index * 0.1,
// //       }}
// //       viewport={{ once: true }}
// //       whileHover={{ y: -8 }}
// //       className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#08111F] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]"
// //     >
// //       {/* Glow Background */}
// //       <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
// //         <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]" />
// //         <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[90px]" />
// //       </div>

// //       {/* Featured Badge */}
// //       {project.featured && (
// //         <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
// //           <FaStar size={10} />
// //           Featured Project
// //         </div>
// //       )}

// //       {/* Top Preview Area */}
// //       <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#12203A] via-[#182848] to-[#0E1729]">
// //         <motion.div
// //           whileHover={{
// //             rotate: 5,
// //             scale: 1.08,
// //           }}
// //           transition={{ duration: .35 }}
// //           className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
// //         >
// //           <Icon className="text-6xl text-cyan-300" />
// //         </motion.div>
// //       </div>

// //       {/* Card Content */}
// //       <div className="p-6">
// //         <h2 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
// //           {project.title}
// //         </h2>

// //         <p className="mt-4 text-sm leading-7 text-gray-400">
// //           {project.description}
// //         </p>

// //         {/* Technologies */}
// //         <div className="mt-5 flex flex-wrap gap-2">
// //           {project.tech.map((item) => (
// //             <span
// //               key={item}
// //               className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
// //             >
// //               {item}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Buttons */}
// //         <div className="mt-7 flex gap-3">
// //           <a
// //             href={project.liveDemo}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-105"
// //           >
// //             <FaArrowUpRightFromSquare />
// //             Live Demo
// //           </a>

// //           <Link
// //             to={`/projects/${project.id}`}
// //             className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-semibold text-white transition hover:scale-105"
// //           >
// //             <FaGithub />
// //             Case Study
// //           </Link>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }



// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   FaArrowUpRightFromSquare,
//   FaGithub,
//   FaStar,
// } from "react-icons/fa6";


// export default function ProjectCard({ project, index }) {
//   const Icon = project.icon;

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 70 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: .6,
//         delay: index * .12,
//       }}
//       viewport={{ once: true }}
//       whileHover={{ y: -10 }}
//       className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#08111F] shadow-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(0,255,255,.15)]"
//     >
//       {/* ================= BACKGROUND GLOW ================= */}

//       <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

//         <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

//         <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

//       </div>

//       {/* ================= FEATURED BADGE ================= */}

//       {project.featured && (
//         <div className="absolute left-5 top-5 z-30 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-lg">

//           <FaStar className="text-[10px]" />

//           Featured Project

//         </div>
//       )}

//       {/* ================= PROJECT PREVIEW ================= */}

//       <div className="relative h-[270px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0b1730] via-[#122442] to-[#08111F]">

//         {/* Decorative Glow */}

//         <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />

//         {/* Small Grid */}

//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
//             backgroundSize: "28px 28px",
//           }}
//         />

//         {/* Laptop */}

//         <motion.div
//   animate={{
//     y: [0, -8, 0],
//   }}
//   transition={{
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   whileHover={{
//     rotateX: 8,
//     rotateY: -8,
//     scale: 1.05,
//   }}
//           transition={{
//             duration: .4,
//           }}
//           className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
//         >
//           {/* Screen */}

//           <div className="h-[150px] w-[240px] rounded-t-2xl border border-cyan-400/20 bg-[#091321] p-3 shadow-2xl">
// <motion.div
//   animate={{
//     x: [-250, 250],
//   }}
//   transition={{
//     duration: 3,
//     repeat: Infinity,
//     ease: "linear",
//   }}
//   className="absolute top-0 left-0 h-full w-20 rotate-12 bg-white/10 blur-xl"
// />
//             {/* Browser */}

//             <div className="flex h-full flex-col overflow-hidden rounded-xl bg-[#101b2e]">

//               {/* Browser Top */}

//               <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">

//                 <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>

//                 <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>

//                 <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>

//               </div>

//               {/* Fake Project */}

//               <div className="relative flex flex-1 items-center justify-center">

//                 <div className="absolute h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl"></div>

//                 <Icon className="relative z-10 text-6xl text-cyan-300" />

//               </div>

//             </div>

//           </div>

//           {/* Laptop Base */}

//           <div className="mx-auto h-3 w-[280px] rounded-b-full bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500" />

//         </motion.div>

//       </div>

//       {/* ================= CONTENT ================= */}

//       <div className="relative z-20 p-7">

//         <h2 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">

//           {project.title}

//         </h2>

//         <p className="mt-4 text-[15px] leading-7 text-gray-400">

//           {project.description}

//         </p>

//         {/* Tech Stack */}

//         <div className="mt-6 flex flex-wrap gap-2">

//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
//             >
//               {tech}
//             </span>
//           ))}

//         </div>

//         {/* PART B CONTINUES FROM HERE */}
//                 {/* Buttons */}

//         <div className="mt-8 grid grid-cols-2 gap-3">

//           {/* Live Demo */}

//           <motion.a
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             href={project.liveDemo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/40"
//           >
//             <FaArrowUpRightFromSquare />
//             Live Demo
//           </motion.a>

//           {/* Github */}

//           <motion.a
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
//           >
//             <FaGithub />
//             GitHub
//           </motion.a>

//         </div>

//         {/* Case Study */}

//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="mt-4"
//         >
//           <Link
//            to={`/projects/${project.slug}`}
//             className="flex w-full items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,.45)]"
//           >
//             View Case Study →
//           </Link>
//         </motion.div>

//       </div>

//       {/* Bottom Glow Line */}

      
// <motion.div
//   initial={{ width: 0 }}
//   whileHover={{ width: "100%" }}
//   transition={{ duration: 0.4 }}
//   className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
// />
//     </motion.article>
//   );
// }




import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function ProjectCard({ project, onCaseStudy,

}) {
  const isComingSoon = project.status === "Coming Soon";

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-700
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_30px_rgba(59,130,246,0.12)]
      hover:border-violet-400/50
      hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]
      duration-300
      "
    >
      {/* Badge */}
      <div className="absolute top-5 right-5 z-20">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isComingSoon
              ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
              : "bg-green-500/20 text-green-300 border border-green-400/30"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Banner */}
      <div
        className="
        h-32
        flex
        flex-col
        items-center
        justify-center
        bg-gradient-to-br
from-[#0f172a]
via-[#1e293b]
to-[#312e81]
border-b
border-slate-700
        "
      >
        <div className="text-5xl">{project.icon}</div>

        <h3 className="mt-3 text-lg font-bold text-white text-center px-5">
          {project.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-300 text-sm leading-5 min-h-[72px]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
              px-2.5
              py-0.5
              rounded-full
             
              text-[11px]
             bg-slate-800
text-slate-300
border
border-slate-700
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        {!isComingSoon ? (
          <>
            <div className="flex gap-3 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                flex-1
                py-2.5
                rounded-xl
               bg-slate-800
hover:bg-slate-700
text-white
border
border-slate-600
                flex
                items-center
                justify-center
                gap-2
                transition
                "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                flex-1
                py-3
                rounded-xl
                bg-emerald-500
hover:bg-emerald-400
text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition
                "
              >
                <FaExternalLinkAlt />
                Live
              </a>
            </div>

            



            <button
  onClick={onCaseStudy}
  className="
    mt-4
  w-full
flex
items-center
justify-center
gap-2
py-2.5
rounded-xl
bg-gradient-to-r
from-violet-600
to-fuchsia-600
hover:from-violet-500
hover:to-fuchsia-500
text-white
font-medium
transition-all
duration-300
  "
>
  Case Study
  <FaArrowRight />
</button>
          </>
        ) : (
          <button
            disabled
          className="
mt-4
w-full
flex
items-center
justify-center
gap-2
py-2.5
rounded-xl
bg-gradient-to-r
from-light pink-600
to-violet-600
hover:from-violet-500
hover:to-fuchsia-500
text-white
font-medium
transition-all
duration-300

            "
          >
            🚧 Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
}