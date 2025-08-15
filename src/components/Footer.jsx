import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-3 items-center">
        
        {/* Left/Center Info */}
        <div className="text-center sm:text-left text-sm text-neutral-400">
          Built with <span className="font-semibold text-white">React</span> &{" "}
          <span className="font-semibold text-white">TailwindCSS</span> by{" "}
          <span className="font-semibold text-white">Emmanuel Mokwunye</span>
        </div>
        
        {/* Spacer for proper alignment on desktop */}
        <div className="hidden sm:block"></div>
        
        {/* Contact Links */}
        <div className="text-center sm:text-right text-sm space-x-4">
          <a
            href="mailto:Mokwunyeemmanuel@gmail.com"
            className="hover:text-accent-500"
          >
            Email
          </a>
          <a
            href="https://wa.me/17154758328"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-500"
          >
            WhatsApp
          </a>
          <a
            href="http://linkedin.com/in/emmanuel-mokwunye-a639842b3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-500"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
