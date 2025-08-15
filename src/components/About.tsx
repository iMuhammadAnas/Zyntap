import Card from "./ui/Card";
import Section from "./ui/Section";
import Title from "./ui/Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Title>About Zyntap</Title>
            <p className="mt-4 text-slate-600 dark:text-slate-300/90">
              We’re a multidisciplinary team of engineers, designers, and
              product strategists. We partner with founders and enterprises to
              ship at startup speed with enterprise quality.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "100+ successful releases",
                "Design systems for scale",
                "Security-first mindset",
                "Global delivery, local care",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-400/20 ring-1 ring-emerald-400/40 inline-flex items-center justify-center">
                    ✅
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="p-0 overflow-hidden">
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-cyan-400/20 to-emerald-400/20" />
                <motion.div
                  className="absolute inset-6 rounded-2xl border border-white/10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-10 rounded-xl bg-white/10 backdrop-blur-xl"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
