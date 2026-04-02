import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import myPhoto from "../assets/my-photo.webp";
import { RESUME_URL } from "../constants/resume";
import { FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start md:items-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 md:pt-0 pb-12 md:pb-20 relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/30 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/30 blur-[120px] rounded-full"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5 sm:space-y-6 md:space-y-3 lg:col-span-3 text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Rameshmurugan
            </span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-slate-700 flex flex-wrap justify-center md:justify-start items-center gap-2">
            <span className="text-indigo-500">✔</span>
            Full Stack Developer
            <span className="text-slate-400">•</span>
            Java + React
          </h2>

          <div className="space-y-3 max-w-xl md:max-w-none">
            <p className="text-xs sm:text-sm text-green-600 font-medium">
              🟢 Open to Work | Immediate Joiner
            </p>

            <p className="text-xs sm:text-sm text-slate-500">
              📍 Tamil Nadu, India
            </p>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              I build scalable and secure full-stack applications using Java & React,
              specializing in backend architecture, REST APIs, and real-world systems.
            </p>

            <p className="text-xs sm:text-sm text-indigo-500 font-medium">
              🚀 Built Examora – a full-stack online exam platform with role-based workflows, secure authentication, and analytics.
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap justify-start gap-2 pt-2">
            {[
              "Full Stack Development",
              "Scalable Backend Systems",
              "REST API Architecture",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-600 text-xs sm:text-sm shadow-sm"
              >
                ✔ {item}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start gap-3 sm:gap-4 pt-3">
            <button
              onClick={() =>
                document.getElementById("projects").scrollIntoView()
              }
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-white text-sm sm:text-base bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:scale-105 transition cursor-pointer"
            >
              🚀 View My Work
              <ArrowRight size={18} />
            </button>

            <a
              href={RESUME_URL}
              download
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-indigo-500 border border-indigo-300 bg-white/60 backdrop-blur-md hover:scale-105 transition"
            >
              <Download size={18} />
              Resume
            </a>

            <button
              onClick={() =>
                document.getElementById("contact").scrollIntoView()
              }
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-slate-300 text-slate-700 bg-white/60 backdrop-blur-md hover:scale-105 hover:border-indigo-400 hover:text-indigo-600 transition cursor-pointer">
              <Mail size={18} />
              Contact
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[330px] sm:h-[460px] md:h-[600px] flex items-center justify-center lg:col-span-2 will-change-transform"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-500/30 blur-[100px] rounded-full" />
            <div className="absolute top-10 left-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-500/30 blur-[100px] rounded-full" />
            <div className="absolute bottom-10 right-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-green-400/20 blur-[100px] rounded-full" />
          </div>

          {/* Code Card */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-6 right-[18%] sm:top-6 sm:right-6 md:top-20 md:right-10 z-0 rotate-[-5deg] opacity-50 sm:opacity-100 scale-75 sm:scale-100"
          >
            <div className="w-40 sm:w-48 md:w-56 h-28 sm:h-32 md:h-36 rounded-2xl p-3 md:p-4 bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="text-[10px] sm:text-xs font-mono space-y-1">
                <div className="text-purple-300">const dev = "Ramesh"</div>
                <div className="text-blue-300">function build() {"{"}</div>
                <div className="text-green-300 pl-3">return "awesome"</div>
                <div>{"}"}</div>
              </div>
            </div>
          </motion.div>

          {/* PROFILE */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative z-20"
          >
            <div className="absolute inset-0 scale-110 rounded-full bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_20px_60px_rgba(99,102,241,0.25)]" />

            <div className="absolute inset-0 scale-[1.2] rounded-full bg-gradient-to-r from-indigo-400/30 via-purple-400/20 to-transparent blur-2xl" />

            <div className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
              <img
                src={myPhoto}
                alt="Ramesh profile"
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
          </motion.div>

          {/* FLOATING ICONS */}
          <div>
            {/* React */}
            <motion.div className="absolute top-12 left-[22%] sm:left-6 md:left-12 sm:top-14 sm:left-6 md:left-12">
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                <FaReact className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
              </div>
            </motion.div>

            {/* Java */}
            <motion.div className="absolute top-12 right-[22%] sm:right-4 md:right-6 sm:top-20 sm:right-4 md:right-6">
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                <FaJava className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
              </div>
            </motion.div>

            {/* Spring */}
            <motion.div className="absolute bottom-12 left-[22%] sm:left-6 md:left-10 sm:bottom-16 sm:left-6 md:left-10">
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                <SiSpringboot className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
              </div>
            </motion.div>

            {/* Tailwind */}
            <motion.div className="absolute bottom-12 right-[22%] sm:right-8 md:right-16 sm:bottom-20 sm:right-8 md:right-16">
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}