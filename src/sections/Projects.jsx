import { motion } from "framer-motion";
import { useState } from "react";
import projectImage from "../assets/project.webp";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Crown,
  UserCog,
  GraduationCap,
  Copy
} from "lucide-react";



const features = [
  {
    title: "Hierarchical Question System",
    desc: "Section → SubSection → Question structure for organized and reusable question banks",
  },
  {
    title: "Role-Based Access Control",
    desc: "Supports Super Admin, Admin, and Student with strict permission handling",
  },
  {
    title: "Advanced Exam Creation Workflow",
    desc: "5-step controlled process ensuring consistency and flexibility in exam setup",
  },
  {
    title: "Secure Exam Environment",
    desc: "Timer-based exams with auto-submit and locked questions during attempts",
  },
  {
    title: "Analytics Dashboard",
    desc: "Insights at exam, section, question, and student performance levels",
  },
];

const highlights = [
  "Designed a modular and scalable architecture using Spring Boot + React",
  "Implemented JWT-based authentication & secure REST APIs",
  "Built a reusable question bank system for efficient exam management",
  "Ensured data integrity with strict system rules and workflows",
];

export default function Projects() {

  const [showDemo, setShowDemo] = useState(false);
  const [toast, setToast] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setToast(`${type} copied!`);

    setTimeout(() => {
      setToast("");
    }, 1500);
  };

  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Featured Project
          </h2>
          <p className="text-slate-600 mt-3">
            Showcasing my best full-stack work
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={projectImage}
                  alt="Examora Dashboard Preview"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              {/* Highlights */}
              <div className="bg-indigo-50 p-5 rounded-xl">
                <h4 className="font-semibold text-lg text-slate-800 mb-3">
                  Highlights
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">

                {/* Live Demo */}
                <button
                  onClick={() => setShowDemo(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow hover:scale-105 transition cursor-pointer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </button>

                {/* GitHub */}
                <a
                  href="https://github.com/rameshmurugan-dev/examora.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-slate-700 hover:bg-slate-100 transition"
                >
                  <Github size={16} />
                  GitHub
                </a>

              </div>
              <p className="text-xs text-slate-500 mt-2">
                ⚡ Explore using demo accounts (no signup required)
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Examora
                </h3>
                <p className="text-slate-600 mt-2">
                  A scalable full-stack examination platform enabling secure,
                  role-based exam management with structured workflows and real-time analytics.
                </p>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {["React", "Spring Boot", "PostgreSQL", "Java", "JWT", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-600 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  ⚡ Key Features
                </h4>

                <div className="space-y-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle size={18} className="text-indigo-500 mt-1" />
                      <div>
                        <p className="font-medium text-slate-800 text-sm">
                          {f.title}
                        </p>
                        <p className="text-sm text-slate-600">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Line */}
              <div className="border-t pt-4 text-slate-700">
                Built with a scalable architecture, secure workflows, and data-driven analytics for reliable examination management.
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {showDemo && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 px-4">

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-6"
          >

            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                🚀 Explore Examora
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Test different roles instantly (no signup required)
              </p>
            </div>

            {/* Roles */}
            <div className="space-y-4">

              {[
                {
                  role: "Super Admin",
                  icon: Crown,
                  email: "superadmin@examora.com",
                  pass: "SuperAdmin@123",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  role: "Admin",
                  icon: UserCog,
                  email: "examoraadmin@gmail.com",
                  pass: "admin@13",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  role: "Student",
                  icon: GraduationCap,
                  email: "examorastudent@gmail.com",
                  pass: "student@13",
                  color: "from-green-500 to-emerald-500"
                },
              ].map((user, i) => (

                <div
                  key={i}
                  className="rounded-xl p-4 bg-white shadow-sm border hover:shadow-md transition"
                >

                  {/* Role Header */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-slate-800 flex items-center gap-2">
                      <user.icon size={18} className="text-slate-700" /> {user.role}
                    </p>

                    <span className={`text-[10px] px-2 py-1 rounded-full bg-gradient-to-r ${user.color} text-white`}>
                      Demo
                    </span>
                  </div>

                  {/* Credentials */}
                  <div className="text-xs text-slate-500 mb-3 space-y-1">
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Password:</b> {user.pass}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-wrap">

                    <button
                      onClick={() => handleCopy(user.email, "Email")}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition flex items-center gap-1"
                    >
                      <Copy size={12} /> Email
                    </button>

                    <button
                      onClick={() => handleCopy(user.pass, "Password")}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition flex items-center gap-1"
                    >
                      <Copy size={12} /> Password
                    </button>

                    <a
                      href="https://examora-nine.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs px-3 py-1.5 rounded-lg text-white bg-gradient-to-r ${user.color} hover:opacity-90 transition`}
                    >
                      Open App →
                    </a>

                  </div>
                </div>

              ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowDemo(false)}
                className="text-sm text-slate-500 hover:text-slate-700 transition"
              >
                Close
              </button>
            </div>

          </motion.div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
          {toast}
        </div>
      )}
    </section>
  );
}