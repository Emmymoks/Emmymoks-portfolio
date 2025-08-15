import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        
        {/* Logo */}
        <Link to="/" className="font-display text-xl tracking-tight">
          <span className="neon">EM</span>
          <span className="text-neutral-400">/dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden sm:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wide hover:text-accent-500 transition ${
                  isActive ? "text-accent-500" : "text-neutral-300"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden ml-auto flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md hover:bg-neutral-800 transition"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-neutral-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm sm:hidden">
          {/* Slide-in menu */}
          <div className="fixed right-0 top-0 h-full w-64 bg-neutral-900 shadow-lg transform translate-x-0 transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="font-display text-lg text-white">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-neutral-800 transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-neutral-300" />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-4">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-base uppercase tracking-wide hover:text-accent-500 transition ${
                      isActive ? "text-accent-500" : "text-neutral-300"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
