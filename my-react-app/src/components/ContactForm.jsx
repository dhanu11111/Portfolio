import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl border border-cyan-500/20 
      bg-white/5 backdrop-blur-xl p-6 md:p-8 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-52 h-52 
      bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative z-10">

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Send Me a Message
        </h2>


        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-xl bg-black/30 
              border border-gray-700 px-4 py-3 
              text-white outline-none
              focus:border-cyan-400
              focus:ring-2 focus:ring-cyan-400/20
              transition"
            />
          </div>


          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl bg-black/30 
              border border-gray-700 px-4 py-3 
              text-white outline-none
              focus:border-cyan-400
              focus:ring-2 focus:ring-cyan-400/20
              transition"
            />
          </div>


          {/* Subject */}
          <div>
            <label className="text-gray-300 text-sm">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter subject"
              className="mt-2 w-full rounded-xl bg-black/30 
              border border-gray-700 px-4 py-3 
              text-white outline-none
              focus:border-cyan-400
              focus:ring-2 focus:ring-cyan-400/20
              transition"
            />
          </div>


          {/* Message */}
          <div>
            <label className="text-gray-300 text-sm">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Write your message..."
              className="mt-2 w-full rounded-xl bg-black/30 
              border border-gray-700 px-4 py-3 
              text-white outline-none resize-none
              focus:border-cyan-400
              focus:ring-2 focus:ring-cyan-400/20
              transition"
            />
          </div>


          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            group relative w-full py-3 rounded-xl
            bg-gradient-to-r from-cyan-500 to-blue-600
            text-white font-semibold
            flex items-center justify-center gap-3
            overflow-hidden
            shadow-lg shadow-cyan-500/20
            "
          >

            <span className="relative z-10">
              Send Message
            </span>

            <FaPaperPlane className="relative z-10 
            group-hover:translate-x-1 transition" />


            {/* Button Glow */}
            <div className="
            absolute inset-0 
            bg-gradient-to-r 
            from-blue-600 
            to-purple-600
            opacity-0 
            group-hover:opacity-100
            transition
            " />

          </motion.button>

        </form>

      </div>

    </motion.div>
  );
}