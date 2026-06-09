import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/success", label: "Success" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(59,130,246,0.1)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}
          >
            <Shield size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <span
            className="text-xl tracking-tight"
            style={{ fontWeight: 800, color: scrolled ? "#0f172a" : "#fff" }}
          >
            Shielify
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? (scrolled ? "bg-blue-50 text-blue-600 font-semibold" : "bg-white/10 text-white font-semibold")
                    : (scrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/80 hover:text-white hover:bg-white/10")
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 rounded-lg text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              fontWeight: 700,
            }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: scrolled ? "#0f172a" : "#fff" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-blue-50 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-lg text-sm text-white text-center"
            style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", fontWeight: 700 }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
