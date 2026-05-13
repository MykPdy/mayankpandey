import { Briefcase } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    role: "Software Developer",
    company: "Saks Global",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Worked on Salesforce Service Cloud development and enterprise CRM solutions.",
      "Developed backend services and custom Salesforce components.",
      "Integrated AWS services and Amazon Connect solutions.",
      "Optimized workflows and resolved production issues across enterprise applications.",
    ],
    tags: ["Salesforce", "AWS", "Apex", "Amazon Connect"],
  },
  {
    role: "Technology Intern",
    company: "Saks Global",
    period: "Jan 2025 – Jan 2026",
    points: [
      "Contributed to Salesforce customization and CRM workflow automation.",
      "Worked with Apex, Lightning Components, AWS services, and deployment activities.",
      "Supported testing, development, maintenance, and enterprise integration processes.",
    ],
    tags: ["LWC", "Apex", "AWS", "CI/CD"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Experience"
          title={<>Where I've <span className="gradient-text-accent">shipped real work</span>.</>}
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="absolute left-4 md:left-1/2 size-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-2 animate-glow" />
                    <div className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2 md:justify-start">
                        <Briefcase className="size-3.5" /> {it.period}
                      </div>
                      <h3 className="text-xl font-display font-semibold">{it.role}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{it.company}</p>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground text-left">
                        {it.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="text-primary mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2 text-left">
                        {it.tags.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
