import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCircle,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "dhanashree@example.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Maharashtra, India",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <FaCircle className="text-green-400 text-sm" />,
    title: "Availability",
    value: "Open to Full Stack Developer Roles",
    color: "from-emerald-500 to-green-500",
  },
];

export default function ContactInfoCard() {
  return (
    <div className="space-y-5">
      {contactInfo.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5 transition-all duration-300 hover:border-cyan-400/50"
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

          <div className="relative flex items-center gap-4">
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color}
              flex items-center justify-center text-white text-xl shadow-lg`}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-gray-300 text-sm uppercase tracking-wider">
                {item.title}
              </h3>

              <p className="text-white font-semibold mt-1 break-all">
                {item.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}