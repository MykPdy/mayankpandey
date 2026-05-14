import { useState } from "react";
import { Mail, Linkedin, Instagram, Send, Github } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Reveal, SectionHeading } from "./Reveal";

const socials = [
  { icon: Mail, label: "Email", value: "mymayankpandey@gmail.com", href: "mailto:mymayankpandey@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/mayank-pandey-1a16b7240", href: "https://www.linkedin.com/in/mayank-pandey-1a16b7240/" },
  { icon: Instagram, label: "Instagram", value: "@mykpdy", href: "https://instagram.com/mykpdy" },
  { icon: Github, label: "GitHub", value: "/MykPdy", href: "https://github.com/MykPdy" },
];

const EMAILJS_SERVICE_ID = "service_a7iy27u";
const EMAILJS_TEMPLATE_ID = "template_5ccelka";
const EMAILJS_PUBLIC_KEY = "8s7W1b53o4Kwe21o3";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: bots typically fill all fields, including hidden ones
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (honeypot) {
      // Silently pretend success to avoid signaling the trap
      toast.success("Message sent — I'll get back to you soon!");
      form.reset();
      return;
    }
    // Time trap: humans take more than 3s to fill the form
    if (Date.now() - formLoadedAt < 3000) {
      toast.error("Please take a moment to review your message before sending.");
      return;
    }
    setSending(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      toast.success("Message sent — I'll get back to you soon!");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Contact"
          title={<>Let's build <span className="gradient-text">something great</span> together.</>}
          description="Open to full-time roles, freelance projects, and collaborations. Drop a message and I'll respond within 24 hours."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <Reveal>
            <div className="glass rounded-3xl p-6 md:p-8 h-full">
              <h3 className="font-display text-lg font-semibold mb-6">Reach me on</h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary/50 transition-colors"
                  >
                    <div className="size-10 rounded-xl grid place-items-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="text-sm font-medium truncate">{s.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-4">
              {/* Honeypot field — hidden from users, bots will fill it */}
              <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" />
              <div>
                <label className="text-xs text-muted-foreground font-medium">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="mt-1.5 w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] text-primary-foreground px-5 py-3 text-sm font-medium hover:scale-[1.01] transition-transform glow-primary disabled:opacity-60"
              >
                {sending ? "Sending…" : <>Send Message <Send className="size-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs text-muted-foreground font-medium">{label}</label>
      <input
        required
        {...props}
        className="mt-1.5 w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
