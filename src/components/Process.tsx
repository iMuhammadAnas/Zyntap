import Card from "./ui/Card";
import Section from "./ui/Section";
import Title from "./ui/Title";

const Process = () => {
  return (
    <Section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <Title>How we deliver</Title>
          <p className="text-sm text-slate-600 dark:text-slate-300/90 max-w-xl">
            Collaborative sprints with continuous delivery and a focus on
            outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "Stakeholder workshops, problem framing, and success metrics.",
            },
            {
              step: "02",
              title: "Design",
              desc: "Prototyping, motion systems, and design tokens.",
            },
            {
              step: "03",
              title: "Build",
              desc: "API-first development, CI/CD, and observability.",
            },
            {
              step: "04",
              title: "Scale",
              desc: "Performance, security, and iterative growth.",
            },
          ].map((p) => (
            <Card key={p.step} className="cursor-pointer">
              <div className="flex items-start gap-4 curp">
                <div className="text-4xl font-black bg-gradient-to-b from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {p.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300/90">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
