import { Award, BadgeCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const certs = [
  { title: "Salesforce Certified Administrator", issuer: "Salesforce", year: "2025" },
  { title: "Salesforce Platform Developer I", issuer: "Salesforce", year: "2025" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { title: "Machine Learning Specialization", issuer: "Coursera", year: "2024" },
];

export function Certifications() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Certifications"
          title={<>Recognized <span className="gradient-text-accent">credentials</span> & learning.</>}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="group glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="size-12 shrink-0 rounded-xl grid place-items-center bg-[var(--gradient-primary)] text-primary-foreground">
                  <Award className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold truncate">{c.title}</h3>
                    <BadgeCheck className="size-4 text-primary shrink-0" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.issuer} · {c.year}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
