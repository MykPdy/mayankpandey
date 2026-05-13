import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className={cn(
        "mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300",
        scrolled && "max-w-5xl"
      )}>
        <div className={cn(
          "flex items-center justify-between rounded-full px-5 py-3 transition-all",
          scrolled ? "glass shadow-[var(--shadow-elegant)]" : "bg-transparent"
        )}>
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <span className="grid place-items-center size-8 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground text-sm">M</span>
            <span className="hidden sm:inline">Mayank<span className="text-primary">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full transition-colors relative",
                  active === l.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-0 rounded-full bg-primary/10 -z-10" />
                )}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
