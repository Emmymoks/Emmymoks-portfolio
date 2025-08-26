import { useEffect, useRef, useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid.jsx";

// Hook for scroll-based reveal
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

export default function Portfolio() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  const headingVisible = useScrollReveal(headingRef);
  const gridVisible = useScrollReveal(gridRef);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Page Heading */}
      <h1
        ref={headingRef}
        className={`font-display text-4xl mb-8 text-center lg:text-left transition-all duration-700 ${
          headingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        Portfolio
      </h1>

      {/* Portfolio Grid with staggered animation */}
      <div
        ref={gridRef}
        className={`transition-all duration-700 ${
          gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <PortfolioGrid />
      </div>

      {/* Animations */}
      <style>{`
        /* Optional: Staggered fade-in for grid items */
        .portfolio-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        .portfolio-item:nth-child(1) { animation-delay: 0.2s; }
        .portfolio-item:nth-child(2) { animation-delay: 0.4s; }
        .portfolio-item:nth-child(3) { animation-delay: 0.6s; }
        .portfolio-item:nth-child(4) { animation-delay: 0.8s; }
        .portfolio-item:nth-child(5) { animation-delay: 1s; }
        .portfolio-item:nth-child(6) { animation-delay: 1.2s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
