import { motion } from "framer-motion";
import educationData from "../../data/educationData";
import EducationCard from "./EducationCard";
import TimelineDot from "./TimelineDot";

export default function Timeline() {
  return (
    <>
      {/* ================= Desktop Timeline ================= */}

      <div className="hidden lg:block relative mt-28">

        {/* Horizontal Line */}

        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

        <div className="grid grid-cols-3 relative">

          {educationData.map((item) => (
            <div
              key={item.id}
              className="relative flex justify-center"
            >
              {/* Timeline Dot */}

              <div className="absolute top-1/2 -translate-y-1/2 z-20">
                <TimelineDot color={item.color} />
              </div>

              {/* TOP CARD */}

              {item.position === "top" && (
                <motion.div
                  initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .7 }}
                  className="flex flex-col items-center mb-40"
                >
                  {/* Vertical Line */}

                  <div className="w-[2px] h-20 bg-gradient-to-b from-transparent to-cyan-400" />

                  <EducationCard item={item} />
                </motion.div>
              )}

              {/* BOTTOM CARD */}

              {item.position === "bottom" && (
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .7 }}
                  className="flex flex-col items-center mt-40"
                >
                  <EducationCard item={item} />

                  {/* Vertical Line */}

                  <div className="w-[2px] h-20 bg-gradient-to-b from-purple-400 to-transparent" />
                </motion.div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* ================= Mobile Timeline ================= */}

      <div className="lg:hidden space-y-10">

        {educationData.map((item) => (
          <div
            key={item.id}
            className="relative pl-12"
          >
            {/* Vertical Line */}

            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            {/* Dot */}

            <div className="absolute left-0 top-10">
              <TimelineDot color={item.color} />
            </div>

            <EducationCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
}