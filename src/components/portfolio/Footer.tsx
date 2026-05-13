import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="grid place-items-center size-7 rounded-md bg-[var(--gradient-primary)] text-primary-foreground text-xs font-bold">M</span>
          <span className="font-display font-semibold">Mayank Pandey</span>
          <span className="text-muted-foreground hidden sm:inline">— Built with care.</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="size-4" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="size-4" /></a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="size-4" /></a>
          <a href="mailto:mayank@example.com" aria-label="Email" className="hover:text-primary transition-colors"><Mail className="size-4" /></a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mayank Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
}
