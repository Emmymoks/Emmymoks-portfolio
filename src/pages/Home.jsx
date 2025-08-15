import { Link } from "react-router-dom";
import HeroAnimatedSVG from "../components/HeroAnimatedSVG.jsx";
import Availability from "../components/Availability.jsx";
import ParallaxSection from "../components/ParallaxSection.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
        {/* Left Column - Text */}
        <div className="text-center lg:text-left">
          <p className="uppercase tracking-[.3em] text-neutral-300 text-sm mb-4">
            Hi, I'm
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Emmanuel —{" "}
            <span className="neon">Front-End Developer</span> & Designer
          </h1>
          <p className="mt-4 text-neutral-300 max-w-prose mx-auto lg:mx-0">
            I craft fast, beautiful interfaces with clean code and thoughtful motion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
            <Link
              to="/portfolio"
              className="px-5 py-3 rounded-xl border border-accent-500 text-neutral-900 bg-accent-500 font-semibold neon-btn"
              data-hover
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl border border-white/20 hover:border-accent-500"
              data-hover
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-6">
            <Availability status="open" note="Taking new projects" />
          </div>
          <div className="mt-10 text-xs text-neutral-400 animate-bounce">
            Scroll down ↓
          </div>

          {/* Download Resume Button */}
          <div className="mt-6">
            <a
              href="/my-resume.pdf"
              download
              className="inline-block px-5 py-3 rounded-xl border border-accent-500 text-neutral-900 bg-accent-500 font-semibold hover:bg-accent-600 transition"
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Right Column - Animated SVG (Hidden on mobile) */}
        <div className="hidden lg:block">
          <HeroAnimatedSVG />
        </div>
      </section>

      {/* Testimonials Section with Parallax */}
      <ParallaxSection>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="font-display text-2xl mb-4">What Clients Say</h2>
          <Testimonials />
        </section>
      </ParallaxSection>
    </div>
  );
}
