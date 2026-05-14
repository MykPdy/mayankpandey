import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/mayank-portrait.png";

const roles = [
  "Salesforce & Cloud Engineer",
  "Backend Developer",
  "AWS Integrations",
  "AI Enthusiast",
];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === word) { setTimeout(() => setDel(true), 1400); return; }
      if (del && text === "") { setDel(false); setI((i + 1) % roles.length); return; }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-primary">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5 animate-blink" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-20 -left-20 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 size-96 rounded-full bg-[var(--purple)]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>
          <p className="font-mono text-primary text-sm mb-3">Hello, I'm</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            Mayank
            <br />
            <span className="gradient-text">Pandey</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-display">
            <Typed />
          </p>
          <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
            Software Developer crafting scalable backend systems, Salesforce Service Cloud
            solutions, and AI-driven applications. I build with Java, Python, AWS, and a passion
            for clean, reliable engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] text-primary-foreground px-5 py-3 text-sm font-medium hover:scale-[1.03] transition-transform glow-primary">
              View Projects <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:border-primary/50 transition-colors">
              <Mail className="size-4" /> Contact Me
            </a>
            <a href="https://pdf.wondershare.com/app/id/jFiYYQdoAI-6RmVGHw22jB9c5XccaEvQ7ozlrbNJKtTQpEHoMUmGNyxMfWy8LXRyhHxxmbrgTxTdu7DNeloPuQ?t=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Download className="size-4" /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/MykPdy" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-primary hover:-translate-y-0.5 transition-all"><Github className="size-5" /></a>
            <a href="https://www.linkedin.com/in/mayank-pandey-1a16b7240/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-primary hover:-translate-y-0.5 transition-all"><Linkedin className="size-5" /></a>
            <a href="mailto:mymayankpandey@gmail.com" aria-label="Email" className="hover:text-primary hover:-translate-y-0.5 transition-all"><Mail className="size-5" /></a>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-[var(--gradient-accent)] blur-3xl opacity-30 rounded-full" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-[var(--purple)]/20 z-10 pointer-events-none" />
            <img src={portrait} alt="Mayank Pandey" width={1024} height={1280} className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs font-mono shadow-[var(--shadow-elegant)]">
            <div className="text-muted-foreground">// experience</div>
            <div className="text-foreground"><span className="text-primary">1+</span> years building</div>
          </div>
          <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs font-mono shadow-[var(--shadow-elegant)]">
            <div className="text-muted-foreground">// stack</div>
            <div className="text-foreground"><span className="text-[var(--cyan)]">Salesforce</span> + <span className="text-primary">AWS</span></div>
          </div>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}

const stack = ["Java", "Python", "JavaScript", "Apex", "React.js", "Node.js", "AWS", "Salesforce", "SQL", "Machine Learning", "LWC", "Amazon Connect"];

function TechMarquee() {
  return (
    <div className="relative mt-16 md:mt-24 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...stack, ...stack].map((s, i) => (
          <span key={i} className="text-2xl md:text-3xl font-display font-medium text-muted-foreground/60 hover:text-primary transition-colors">
            {s} <span className="text-primary/40">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
