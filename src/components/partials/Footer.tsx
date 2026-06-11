import { Link } from "react-router";
import { Shield, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const services = [
  "Outsourcing",
  "Consulting",
  "Partnership",
  "Deliver Product",
  "Market Research",
  "AI-Driven Customization",
];

const projects = ["Palyfi", "UIShips", "Shielify Warranty"];

export function Footer() {
  return (
    <footer style={{ background: "#0f172a" }} className="text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}
              >
                <Shield size={20} color="#fff" strokeWidth={2.5} />
              </div>
              <span className="text-xl text-white" style={{ fontWeight: 800 }}>
                Shielify
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Delivering innovative technical solutions across InsureTech, LMS, E-commerce, and Sport Venue Booking since January 2025.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm mb-4" style={{ fontWeight: 700 }}>
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Success */}
          <div>
            <h4 className="text-white text-sm mb-4" style={{ fontWeight: 700 }}>
              Success Stories
            </h4>
            <ul className="space-y-2">
              {projects.map((p) => (
                <li key={p}>
                  <Link
                    to="/success"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm mb-4" style={{ fontWeight: 700 }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <a href="tel:+84779291669" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  (+84) 779 291 669
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <a href="mailto:tri.tran@shielify.com" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  tri.tran@shielify.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  95 Dien Bien Phu, Lighthouse Building, Ho Chi Minh City
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs text-slate-500">
            © 2025–2026 Shielify. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with excellence in Ho Chi Minh City, Vietnam.
          </p>
        </div>
      </div>
    </footer>
  );
}
