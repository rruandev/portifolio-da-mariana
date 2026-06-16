import { motion } from "motion/react";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Lab", href: "#lab" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Logo size={28} />
        </a>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
