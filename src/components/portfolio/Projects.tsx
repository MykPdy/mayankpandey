import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";
import stocks from "@/assets/project-stocks.jpg";
import medisage from "@/assets/project-medisage.jpg";

const projects = [
  {
    title: "Indian Stock Market Analysis (EDA)",
    category: "Data Science",
    desc: "Analyzed 159 Indian companies with Python, Pandas, NumPy, Matplotlib, and Seaborn. Built linear regression models to predict stock prices using key financial indicators.",
    tags: ["Python", "Pandas", "Seaborn", "Linear Regression"],
    image: stocks,
  },
  {
    title: "MediSage — Smart Medical Assistant",
    category: "AI / ML",
    desc: "AI-powered healthcare assistant using SVM for disease prediction, OpenCV for object detection, and speech recognition for patient interaction with chatbot guidance.",
    tags: ["SVM", "OpenCV", "Speech Recognition", "Chatbot"],
    image: medisage,
  },
];

const filters = ["All", "AI / ML", "Data Science"] as const;

export function Projects() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            kicker="Projects"
            title={<>Selected <span className="gradient-text-accent">work</span>.</>}
          />
          <Reveal>
            <div className="flex gap-1 glass rounded-full p-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-1.5 text-xs rounded-full transition-all",
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative glass rounded-3xl overflow-hidden h-full hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-mono px-2.5 py-1 rounded-full glass">{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <a href="#" aria-label="View project" className="shrink-0 size-9 rounded-full grid place-items-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t flex gap-3">
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-medium hover:text-primary transition-colors">
                      <Github className="size-4" /> Source
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-medium hover:text-primary transition-colors">
                      <ArrowUpRight className="size-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
