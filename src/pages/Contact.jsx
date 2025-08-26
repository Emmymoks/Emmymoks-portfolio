import { useState, useRef, useEffect } from "react";
import HeroAnimatedSVG from "../components/HeroAnimatedSVG.jsx";

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

export default function Contact() {
  const [status, setStatus] = useState(null);

  const formRef = useRef(null);
  const infoRef = useRef(null);

  const formVisible = useScrollReveal(formRef);
  const infoVisible = useScrollReveal(infoRef);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Encode WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello, my name is ${name} (from ${email}).\n\n${message}`
    );

    const whatsappURL = `https://wa.me/17154758328?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Show status and reset form
    setStatus("Redirecting you to WhatsApp...");
    setTimeout(() => {
      form.reset();
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Column - Form */}
      <div
        ref={formRef}
        className={`transition-all duration-700 ${
          formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-display text-4xl mb-6">Contact</h1>
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-3 rounded-xl border border-accent-500 text-neutral-900 bg-accent-500 font-semibold neon-btn transition-transform hover:scale-105"
          >
            Send
          </button>
        </form>
        {status && (
          <p className="mt-4 text-sm text-neutral-300 transition-opacity duration-500">
            {status}
          </p>
        )}
      </div>

      {/* Right Column - Hero SVG (hidden on mobile) */}
      <div
        className="hidden lg:flex justify-center items-center animate-fade-in-right"
      >
        <HeroAnimatedSVG />
      </div>

      {/* Contact Information */}
      <div
        ref={infoRef}
        className={`lg:col-span-2 mt-12 text-sm text-neutral-300 space-y-2 transition-all duration-700 ${
          infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p>
          Direct email:{" "}
          <a
            className="underline"
            href="mailto:Mokwunyeemmanuel@gmail.com"
          >
            Mokwunyeemmanuel@gmail.com
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            className="underline"
            href="https://wa.me/17154758328"
            target="_blank"
            rel="noopener noreferrer"
          >
            +1 715 475 8328
          </a>
        </p>
      </div>

      {/* Animations */}
      <style>{`
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
