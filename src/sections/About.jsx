import { motion } from "framer-motion";
import profileImg from "../assets/my-profile.jpg";

export default function About() {
  return (
    <section id="about" className="pt-0 pb-12 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl"
        >

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
            About Me
          </h2>

          {/* MAIN LAYOUT */}
          <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">

            {/* IMAGE */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[180px] h-[200px] md:w-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={profileImg}
                  alt="Ramesh profile"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-2 text-slate-600 leading-relaxed">

              <p>
                I'm a Full Stack Developer specializing in{" "}
                <span className="font-semibold text-indigo-600">Java and React</span>, focused on building scalable, production-ready web applications.
              </p>

              <p>
                I design and develop end-to-end systems — from clean, responsive user interfaces to robust backend architectures and secure REST APIs.
              </p>

              <p>
                My key strength lies in solving{" "}
                <span className="font-semibold text-slate-800">real-world problems</span> with structured system design, optimized performance, and maintainable code.
              </p>

              <p>
                I recently built{" "}
                <span className="font-semibold text-indigo-500">Examora</span> — a full-stack platform with role-based workflows, secure authentication, and analytics.
              </p>
            </div>

          </div>
          {/* FULL WIDTH HIGHLIGHT SECTION */}
          <div className="mt-3 border-t border-slate-200 pt-2">

            <p className="text-slate-800 font-medium text-lg text-center max-w-3xl mx-auto">
              I am currently open to full-time opportunities where I can contribute to impactful products and grow as a Fullstack Developer.
            </p>

            <div className="mt-3 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-slate-700">

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-green-600 text-lg">✔</span>
                <p><span className="font-semibold">Strong in:</span> Backend Architecture, API Design, System Thinking</p>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-green-600 text-lg">✔</span>
                <p><span className="font-semibold">Focused on:</span> Scalable Applications & Clean Code</p>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-green-600 text-lg">✔</span>
                <p><span className="font-semibold">Open to:</span> Full-time Fullstack Developer Roles</p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}