import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkHistory from "@/components/WorkHistory";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-foreground selection:text-background">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <WorkHistory />
      <Contact />
    </main>
  );
}
