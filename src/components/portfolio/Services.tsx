import { Cloud, Database, Cpu, Workflow, Code2, LineChart } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  { icon: Cloud, title: "Salesforce Development", desc: "Service Cloud, LWC, Aura, Apex — custom CRM solutions and enterprise integrations." },
  { icon: Database, title: "Backend Engineering", desc: "Robust APIs and services with Java, Python, Node.js, and Express." },
  { icon: Workflow, title: "AWS Integrations", desc: "Lambda, S3, IAM, and Amazon Connect to power scalable cloud workflows." },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Predictive models, computer vision, and intelligent assistants for real products." },
  { icon: Code2, title: "Enterprise Apps", desc: "End-to-end application development with focus on reliability and performance." },
  { icon: LineChart, title: "Data & Analytics", desc: "EDA, dashboards, and insights powered by Pandas, NumPy, and visualization libs." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="What I Do"
          title={<>Services I <span className="gradient-text-accent">offer</span>.</>}
          description="From CRM development to AI-driven applications — end-to-end engineering, with care."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group relative h-full glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 size-24 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="size-11 rounded-xl grid place-items-center bg-primary/10 text-primary mb-4 group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground transition-all">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
