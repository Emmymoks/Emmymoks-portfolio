import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import HeroAnimatedSVG from "../components/HeroAnimatedSVG.jsx";
import Availability from "../components/Availability.jsx";
import ParallaxSection from "../components/ParallaxSection.jsx";
import Testimonials from "../components/Testimonials.jsx";

// Typewriter Hook (runs once, no loop)
function useTypewriter(words, speed = 120) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= words.length) return;
    const currentWord = words[wordIndex];
    if (index < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord.charAt(index));
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, wordIndex, words, speed]);

  return text;
}

// Scroll reveal hook
function useScrollReveal(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

export default function Home() {
  const typewriterText = useTypewriter(["Front-End Developer & Designer"], 100);

  const resumeRef = useRef(null);
  const heroRef = useRef(null);
  const testimonialRef = useRef(null);

  const showResume = useScrollReveal(resumeRef);
  const heroVisible = useScrollReveal(heroRef);
  const testimonialVisible = useScrollReveal(testimonialRef);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`max-w-6xl mx-auto px-4 py-20 grid gap-10 lg:grid-cols-2 items-center transition-all duration-700 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Column */}
        <div className="text-center lg:text-left space-y-6">
          <p className="uppercase tracking-[.3em] text-neutral-300 text-sm">
            Hi, I'm
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block animate-float">Emmanuel</span>
            <span className="block neon mt-2">{typewriterText}</span>
          </h1>

          <p className="text-neutral-300 max-w-prose mx-auto lg:mx-0">
            I craft fast, beautiful interfaces with clean code and thoughtful motion.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
            <Link
              to="/portfolio"
              className="px-5 py-3 rounded-xl border border-accent-500 text-neutral-900 bg-accent-500 font-semibold neon-btn transition-transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl border border-white/20 hover:border-accent-500 transition-transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>

          <Availability status="open" note="Taking new projects" />

          {/* Scroll Down Indicator */}
          <div className="mt-10 text-xs text-neutral-400 animate-bounce">
            Scroll down ↓
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block animate-fade-in-right">
          <HeroAnimatedSVG />
        </div>
      </section>

      {/* Resume Button Section */}
      <section
        ref={resumeRef}
        className={`max-w-6xl mx-auto px-4 py-20 flex justify-center transition-all duration-700 ${
          showResume
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="/my-resume.pdf"
          download
          className="inline-block px-6 py-4 rounded-xl border border-accent-500 text-neutral-900 bg-accent-500 font-semibold hover:bg-accent-600 transition-transform hover:scale-105 shadow-lg"
        >
          Download My Resume
        </a>
      </section>

      {/* Testimonials Section with Parallax */}
      <ParallaxSection>
        <section
          ref={testimonialRef}
          className={`max-w-6xl mx-auto px-4 py-16 transition-all duration-700 ${
            testimonialVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl font-bold mb-6 text-center">
            What Clients Say
          </h2>
          <Testimonials />
        </section>
      </ParallaxSection>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease forwards;
        }
      `}</style>
    </div>
  );
}
