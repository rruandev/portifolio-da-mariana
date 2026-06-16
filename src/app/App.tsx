import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Experience } from "./components/portfolio/Experience";
import { Project } from "./components/portfolio/Project";
import { Qualifications } from "./components/portfolio/Qualifications";
import { Contact } from "./components/portfolio/Contact";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#08040f] text-white relative overflow-x-hidden">
      {/* ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(112,26,117,0.25),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Project />
        <Qualifications />
        <Contact />
      </main>
    </div>
  );
}
