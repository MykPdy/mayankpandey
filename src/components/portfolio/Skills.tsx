import { Code, Cloud, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: Code,
    title: "Technical",
    color: "primary",
    skills: ["Java", "Python", "JavaScript", "Apex", "SQL", "React.js", "Node.js", "Express.js"],
  },
  {
    icon: Cloud,
    title: "Salesforce & Cloud",
    color: "cyan",
    skills: ["Salesforce Service Cloud", "Lightning Web Components", "Aura Components", "AWS Lambda", "AWS S3", "AWS IAM", "Amazon Connect"],
  },
  {
    icon: Sparkles,
    title: "Core Expertise",
    color: "purple",
    skills: ["Backend Development", "CRM Development", "Workflow Automation", "Cloud Integrations", "API Development", "Enterprise Apps", "Production Support", "DSA", "OOP", "Problem Solving"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Skills"
          title={<>The <span className="gradient-text">tools & tech</span> I work with.</>}
        />

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group relative h-full glass rounded-3xl p-6 overflow-hidden hover:border-primary/40 transition-all">
                <div
                  className="absolute -top-20 -right-20 size-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ background: `var(--${g.color === "primary" ? "primary" : g.color === "cyan" ? "cyan" : "purple"})` }}
                />
                <div className="relative">
                  <div className="size-11 rounded-xl grid place-items-center mb-4"
                    style={{ background: `color-mix(in oklab, var(--${g.color === "primary" ? "primary" : g.color === "cyan" ? "cyan" : "purple"}) 15%, transparent)` }}
                  >
                    <g.icon className="size-5" style={{ color: `var(--${g.color === "primary" ? "primary" : g.color === "cyan" ? "cyan" : "purple"})` }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-4">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary/60 border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
