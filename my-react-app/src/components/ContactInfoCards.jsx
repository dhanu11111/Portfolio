import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "yourmail@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    text: "+91 XXXXX XXXXX",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Maharashtra, India",
  },
];

export default function ContactInfoCard() {
  return (
    <div className="space-y-5">

      {info.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="
          flex items-center gap-5
          p-5
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-cyan-500/20
          hover:border-cyan-400
          transition
          "
        >

          <div
            className="
            w-12 h-12
            rounded-xl
            bg-cyan-500/20
            flex items-center justify-center
            text-cyan-400
            text-xl
            "
          >
            {item.icon}
          </div>


          <div>
            <h3 className="text-gray-400 text-sm">
              {item.title}
            </h3>

            <p className="text-white font-semibold">
              {item.text}
            </p>
          </div>

        </motion.div>
      ))}

    </div>
  );
}