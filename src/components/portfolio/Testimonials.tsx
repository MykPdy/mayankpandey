import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    quote: "Mayank consistently delivered clean, scalable Salesforce solutions and was a reliable engineer on critical production fixes.",
    name: "Engineering Lead",
    role: "Saks Global",
  },
  {
    quote: "Sharp problem solver who picks up new tech fast — equally comfortable in CRM workflows, AWS integrations, and ML notebooks.",
    name: "Senior Developer",
    role: "Saks Global",
  },
  {
    quote: "Brings a real product mindset to backend work. Took ownership end-to-end and shipped features that just worked.",
    name: "Project Mentor",
    role: "Academic Project",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Testimonials"
          title={<>Words from <span className="gradient-text">people I've worked with</span>.</>}
        />
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="relative h-full glass rounded-3xl p-6 hover:border-primary/40 transition-all">
                <Quote className="size-8 text-primary/40 mb-4" />
                <blockquote className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[var(--gradient-accent)] grid place-items-center text-primary-foreground font-display font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
