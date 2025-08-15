import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Code2,
  Shield,
  Rocket,
  LineChart,
  Globe2,
  Boxes,
  Cpu,
  Component,
  MousePointer2,
} from "lucide-react";

interface HeroProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  handleMouseMove: (e: React.MouseEvent) => void;
}

export default function Hero({ mouseX, mouseY, handleMouseMove }: HeroProps) {
  const springX = useSpring(mouseX, { stiffness: 50, damping: 12, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 12, mass: 0.5 });

//   const parallax = (v: MotionValue<number>, range = 20) =>
//     useTransform(v, [0, 1], [-range, range]);

  const bgX = useTransform(springX, [0, 1], [-30, 30]);
  const bgY = useTransform(springY, [0, 1], [-30, 30]);
  const orbX = useTransform(springX, [0, 1], [-10, 10]);
  const orbY = useTransform(springY, [0, 1], [-10, 10]);

  const logos = ["Google", "Meta", "Amazon", "Tesla", "Netflix", "Airbnb"];

  return (
    <section
      id="home"
      className="relative scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28 min-h-[50vh] lg:h-[80vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle glowing background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20 dark:opacity-10" />
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs">
              <Zap className="h-3 w-3 md:h-4 md:w-4" /> Future‑ready software at
              warp speed
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight md:leading-[1.05] tracking-tight">
              Build, launch, and scale with{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Zyntap
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300/90 max-w-2xl">
              We craft cloud‑native apps, AI products, and enterprise platforms
              with delightful UX. Motion‑first design, rock‑solid engineering,
              measurable outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-1 md:gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-bold shadow hover:shadow-lg active:scale-[.98]"
              >
                Talk to Experts <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1 md:gap-2 rounded-xl border border-slate-200/70 dark:border-white/10 px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-semibold hover:bg-white/60 dark:hover:bg-white/5"
              >
                See our work
              </a>
            </div>

            {/* Client logos - Hidden on smallest screens */}
            <div className="pt-4 md:pt-6">
              <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Trusted by innovators
              </p>
              <div className="mt-2 md:mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3 opacity-80">
                {logos.map((l, i) => (
                  <motion.div
                    key={l}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs md:text-sm font-semibold rounded-lg px-2 py-1 md:px-3 md:py-2 text-center border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5"
                  >
                    {l}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Orb (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-square">
              {/* Background glow */}
              <motion.div
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
              </motion.div>

              {/* Main orb */}
              <motion.div
                className="absolute inset-2 rounded-[2rem] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-2xl flex items-center justify-center"
                style={{
                  x: orbX,
                  y: orbY,
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                  }}
                  className="grid grid-cols-3 gap-3 p-4 md:p-6"
                >
                  {[
                    Code2,
                    Shield,
                    Rocket,
                    LineChart,
                    Globe2,
                    Boxes,
                    Cpu,
                    Component,
                    MousePointer2,
                  ].map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      className="h-12 w-12 md:h-16 md:w-16 rounded-2xl flex items-center justify-center bg-white/5 ring-1 ring-white/10"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Icon className="h-5 w-5 md:h-7 md:w-7 opacity-90" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
