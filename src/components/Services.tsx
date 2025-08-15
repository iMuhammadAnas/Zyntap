import { ArrowRight, Shield, Sparkles, MousePointer2, Cpu, LineChart, Boxes} from "lucide-react";
import Section from "./ui/Section";
import Title from "./ui/Title";
import Card from "./ui/Card";

const Services = () => {
  return (
    <Section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <Title>Capabilities</Title>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-500"
          >
            Get a proposal <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Product Strategy",
              desc: "Discovery, roadmapping, and measurable KPIs to align tech with business outcomes.",
              icon: LineChart,
              bullets: ["Discovery sprints", "Market fit", "Analytics"],
            },
            {
              title: "Design & Frontend",
              desc: "Motion-first UX, design systems, and pixel-perfect React, Next.js, and Tailwind.",
              icon: MousePointer2,
              bullets: ["Design systems", "Accessibility", "Animations"],
            },
            {
              title: "Cloud & Backend",
              desc: "Scalable APIs, microservices, and DevOps on AWS, GCP, or Azure.",
              icon: Cpu,
              bullets: ["Node & Go", "Kubernetes", "CI/CD"],
            },
            {
              title: "AI & Data",
              desc: "LLMs, vector search, and analytics pipelines that unlock insights.",
              icon: Sparkles,
              bullets: ["RAG systems", "MLOps", "Dashboards"],
            },
            {
              title: "E‑commerce & ERP",
              desc: "Composable commerce, OMS, and enterprise integrations that scale.",
              icon: Boxes,
              bullets: ["Headless", "Integrations", "Automation"],
            },
            {
              title: "Security & Compliance",
              desc: "Zero‑trust architecture, SSO, SOC2/GDPR readiness by design.",
              icon: Shield,
              bullets: ["IAM", "Auditability", "Privacy"],
            },
          ].map((s) => (
            <Card key={s.title}>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 ring-1 ring-blue-400/30 flex items-center justify-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300/90">
                    {s.desc}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-xs px-2 py-1 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
