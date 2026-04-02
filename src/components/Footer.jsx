import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-slate-500 text-sm"
      >
        © {new Date().getFullYear()} Rameshmurugan · Built with React + Tailwind
      </motion.div>
    </footer>
  );
}