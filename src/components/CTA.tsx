import { ArrowRight } from "lucide-react";
import GridBG from "./ui/GridBg";
import Section from "./ui/Section";
import Title from "./ui/Title";

const CTA = () => {
    return (
        <Section id="contact" className="py-24">
        <GridBG />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title>Let’s build your next big thing</Title>
          <p className="mt-4 text-slate-600 dark:text-slate-300/90">
            Tell us about your idea and we’ll share a blueprint: scope, timeline, and budget—within days.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll reach out shortly.");
            }}
            className="mt-8 grid md:grid-cols-2 gap-3 text-left"
          >
            <input required placeholder="Name" className="px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5" />
            <input placeholder="Company" className="px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 md:col-span-2" />
            <textarea required placeholder="Project brief" rows={4} className="px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 md:col-span-2" />
            <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 text-sm font-bold shadow hover:shadow-lg active:scale-[.98] md:col-span-2">
              Request Proposal <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>
    );
}

export default CTA;