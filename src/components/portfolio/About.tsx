import { GraduationCap, Code2, Cloud, Brain } from "lucide-react";
import about from "@/assets/about-illustration.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  { icon: Code2, label: "Backend Engineering", desc: "Java, Python, Node.js, scalable APIs" },
  { icon: Cloud, label: "Salesforce & AWS", desc: "Service Cloud, Lambda, Amazon Connect" },
  { icon: Brain, label: "AI Applications", desc: "ML models, computer vision, predictions" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="About"
          title={<>Engineer focused on <span className="gradient-text">scalable systems</span> and clean execution.</>}
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--gradient-accent)] blur-3xl opacity-20 rounded-full" />
              <div className="relative glass rounded-3xl p-6 animate-float">
                <img src={about} alt="Developer illustration" width={1024} height={1024} loading="lazy" className="rounded-2xl w-full" />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a Software Developer who loves building <span className="text-foreground">scalable backend systems</span>,
                automating CRM workflows, and integrating cloud services that power real enterprise products.
                My toolkit spans Java, Python, JavaScript, React.js, Node.js, Salesforce, and AWS — and I bring
                the same curiosity to <span className="text-foreground">machine learning and AI-driven solutions</span>.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether it's CRM automation, API design, workflow optimization, or predictive analytics,
                I obsess over reliability, performance, and developer experience.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <Reveal key={h.label} delay={200 + i * 80}>
                  <div className="glass rounded-2xl p-4 h-full hover:border-primary/40 hover:-translate-y-1 transition-all">
                    <h.icon className="size-5 text-primary mb-3" />
                    <div className="font-medium text-sm">{h.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{h.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl grid place-items-center bg-primary/15 text-primary">
                    <GraduationCap className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold">Education</h3>
                </div>
                <div className="border-l-2 border-primary/40 pl-4">
                  <div className="text-sm font-mono text-primary">2021 — 2025</div>
                  <div className="font-medium mt-1">Bachelor of Engineering, Electronics & Communication</div>
                  <div className="text-sm text-muted-foreground">Siddaganga Institute of Technology, Tumkur</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
