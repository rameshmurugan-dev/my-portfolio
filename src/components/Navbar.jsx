import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { RESUME_URL } from "../constants/resume";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 py-3 md:py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 md:py-3 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-lg">

          {/* Logo */}
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Rameshmurugan
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 font-semibold hover:text-indigo-500 transition"
              >
                {item.label}
              </button>
            ))}

            <a
              href={RESUME_URL}
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md hover:scale-105 transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 px-4 py-4 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-lg flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 font-medium text-left"
              >
                {item.label}
              </button>
            ))}

            <a
              href={RESUME_URL}
              download
              className="flex items-center justify-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}