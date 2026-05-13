import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
