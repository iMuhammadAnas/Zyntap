import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-[#0b0f17]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <motion.div
                className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-emerald-300" />
            </div>
            <span className="font-black text-lg tracking-tight">Zyntap</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md px-1 py-1"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-xs font-bold shadow hover:shadow-lg active:scale-[.98]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {mobileOpen ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200/60 dark:border-white/10 bg-white/90 dark:bg-[#0b0f17]/90 backdrop-blur-lg"
          >
            <nav className="flex flex-col p-10 space-y-4 text-sm font-medium">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-blue-500"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-xs font-bold shadow hover:shadow-lg active:scale-[.98]"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
