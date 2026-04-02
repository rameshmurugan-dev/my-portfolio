import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "rameshmurugan585@gmail.com",
    sub: "Best way to reach me",
    icon: Mail,
    link: "mailto:rameshmurugan585@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/rameshmurugan-dev",
    sub: "Explore my projects & code",
    icon: Github,
    link: "https://github.com/rameshmurugan-dev",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rameshmurugan-dev",
    sub: "Let’s connect professionally",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/rameshmurugan-dev",
  },
  {
    label: "Phone",
    value: "+91 9790437731",
    sub: "Tamil Nadu, India",
    icon: Phone,
    link: "tel:+919790437731",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Get In Touch
        </h2>

        <p className="text-slate-600">
          Open to full-time opportunities and collaborations.
        </p>

        <p className="text-slate-500 mt-2 mb-4">
          Feel free to reach out through any of the following platforms.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8, scale: 1.05 }}
                className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-xl hover:shadow-indigo-200 transition cursor-pointer"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Label */}
                <h3 className="font-semibold text-lg text-slate-800">
                  {item.label}
                </h3>

                {/* Value */}
                <p className="text-sm text-slate-700 mt-2 break-all">
                  {item.value}
                </p>

                {/* Sub text */}
                <p className="text-xs text-slate-500 mt-2 flex items-center justify-center gap-1">
                  {item.label === "Phone" && <MapPin size={12} />}
                  {item.sub}
                </p>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}