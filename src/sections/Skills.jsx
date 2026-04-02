import { motion } from "framer-motion";
import { FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import { Code, Database, Wrench, Server } from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: Code,
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", bg: "linear-gradient(135deg, rgba(97,218,251,0.18), rgba(97,218,251,0.05))" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", bg: "linear-gradient(135deg, rgba(6,182,212,0.18), rgba(6,182,212,0.05))" },
      { name: "JavaScript", icon: Code, color: "#F7DF1E", bg: "linear-gradient(135deg, rgba(247,223,30,0.18), rgba(247,223,30,0.05))" },
      { name: "Axios", icon: Code, color: "#5A29E4", bg: "linear-gradient(135deg, rgba(90,41,228,0.18), rgba(90,41,228,0.05))" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00", bg: "linear-gradient(135deg, rgba(237,139,0,0.18), rgba(237,139,0,0.05))" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", bg: "linear-gradient(135deg, rgba(109,179,63,0.18), rgba(109,179,63,0.05))" },
      { name: "REST API", icon: Code, color: "#6366F1", bg: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(99,102,241,0.05))" },
      { name: "JWT", icon: Code, color: "#000000", bg: "linear-gradient(135deg, rgba(0,0,0,0.12), rgba(0,0,0,0.03))" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    gradient: "from-cyan-400 to-indigo-500",
    skills: [
      { name: "PostgreSQL", icon: Database, color: "#4169E1", bg: "linear-gradient(135deg, rgba(65,105,225,0.18), rgba(65,105,225,0.05))" },
      { name: "SQL", icon: Database, color: "#CC2927", bg: "linear-gradient(135deg, rgba(204,41,39,0.18), rgba(204,41,39,0.05))" },
      { name: "DB Design", icon: Code, color: "#6366F1", bg: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(99,102,241,0.05))" },
      { name: "Optimization", icon: Code, color: "#8B5CF6", bg: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(139,92,246,0.05))" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    gradient: "from-indigo-500 to-cyan-400",
    skills: [
      { name: "Git", icon: Code, color: "#F05032", bg: "linear-gradient(135deg, rgba(240,80,50,0.18), rgba(240,80,50,0.05))" },
      { name: "Postman", icon: Code, color: "#FF6C37", bg: "linear-gradient(135deg, rgba(255,108,55,0.18), rgba(255,108,55,0.05))" },
      { name: "VS Code", icon: Code, color: "#007ACC", bg: "linear-gradient(135deg, rgba(0,122,204,0.18), rgba(0,122,204,0.05))" },
      { name: "Render", icon: Code, color: "#46E3B7", bg: "linear-gradient(135deg, rgba(70,227,183,0.18), rgba(70,227,183,0.05))" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-indigo-400/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-400/20 blur-[100px] rounded-full"></div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 mt-3">
            A toolkit for building modern applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillsData.map((category, i) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${category.gradient} relative`}
                      style={{
                        boxShadow:
                          "0 12px 40px rgba(99,102,241,0.35), 0 0 20px rgba(139,92,246,0.25)",
                      }}
                    >
                      <Icon size={30} />

                      {/* GLOW */}
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-70"
                        style={{
                          background: "inherit",
                          zIndex: -1,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center mb-6">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 6, scale: 1.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 group relative overflow-hidden"
                        style={{
                          background: skill.bg,
                          border: "1px solid rgba(255,255,255,0.3)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                        }}
                      >
                        {/* BIG GLOW BACKGROUND */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                          style={{
                            background: skill.color,
                            filter: "blur(40px)",
                            zIndex: 0,
                          }}
                        />

                        {/* CONTENT */}
                        <div className="flex items-center gap-3 relative z-10 w-full">

                          {/* ICON */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center relative"
                            style={{
                              background: "rgba(255,255,255,0.9)",
                              boxShadow: `
          0 4px 12px ${skill.color}40,
          0 0 20px ${skill.color}20
        `,
                            }}
                          >
                            <SkillIcon size={18} style={{ color: skill.color }} />

                            {/* ICON GLOW */}
                            <div
                              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                              style={{
                                background: skill.color,
                                filter: "blur(16px)",
                                zIndex: -1,
                              }}
                            />
                          </div>

                          {/* TEXT */}
                          <span className="text-sm font-semibold text-slate-800">
                            {skill.name}
                          </span>

                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}