import Card from "./ui/Card";
import Section from "./ui/Section";
import Title from "./ui/Title";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <Section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <Title>Selected Work</Title>
          <p className="text-sm text-slate-600 dark:text-slate-300/90 max-w-xl">
            A snapshot of platforms and products we’ve built for startups and
            enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden p-0">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Project {i} — Platform</h3>
                  <span className="text-xs rounded-lg px-2 py-1 border border-slate-200/60 dark:border-white/10">
                    Case Study
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
                  High-performance, cloud-native application with stunning
                  motion UI and robust analytics.
                </p>
              </div>
              <motion.div
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1 }}
                className="relative h-56 sm:h-64 md:h-72"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-emerald-400/20" />
                <div className="absolute inset-[10px] rounded-2xl bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-32 w-48 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-xl" />
                </motion.div>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Work;
