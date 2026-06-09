import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ChevronRight,
  Code2,
  Brain,
  ShoppingCart,
  Activity,
} from "lucide-react";

const stats = [
  { value: "3+", label: "Successful Projects" },
  { value: "4", label: "Expert Co-founders" },
  { value: "Dec 2024", label: "Established" },
  { value: "4", label: "Tech Domains" },
];

const serviceHighlights = [
  {
    icon: Code2,
    title: "Outsourcing",
    description: "End-to-end software development with dedicated teams tailored to your needs.",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: Brain,
    title: "AI-Driven Customization",
    description: "Intelligent automation and AI-powered features that adapt to your business.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: Globe,
    title: "Consulting",
    description: "Strategic technology consulting to align your digital roadmap with business goals.",
    color: "#22c55e",
    bg: "#f0fdf4",
  },
  {
    icon: ShoppingCart,
    title: "Deliver Product",
    description: "From concept to deployment — we deliver polished, production-ready products.",
    color: "#F97316",
    bg: "#fff7ed",
  },
];

const domains = [
  { icon: Shield, label: "InsureTech", desc: "Warranty & insurance systems" },
  { icon: Activity, label: "LMS", desc: "Learning management platforms" },
  { icon: ShoppingCart, label: "E-commerce", desc: "Online store solutions" },
  { icon: Zap, label: "Sport Booking", desc: "Venue management systems" },
];

const whyUs = [
  "Cross-domain technical expertise across 4 specialized verticals",
  "Founder-led delivery — experienced leadership on every project",
  "AI-first approach to build smarter, scalable solutions",
  "Transparent partnership model with long-term client relationships",
  "Based in Ho Chi Minh City with global delivery capability",
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1590098563837-5e7669b27e55?w=1920&h=1080&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Decorative circles */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)", transform: "translate(30%, -20%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #60a5fa, transparent 70%)", transform: "translate(-30%, 30%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
              style={{
                background: "rgba(59,130,246,0.2)",
                border: "1px solid rgba(96,165,250,0.3)",
                color: "#93c5fd",
                fontWeight: 600,
              }}
            >
              <Shield size={14} />
              Established December 2024 · Ho Chi Minh City
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-white mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
              }}
            >
              Technical Solutions
              <br />
              <span style={{ color: "#60a5fa" }}>Engineered to Shield</span>
              <br />
              Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-lg mb-10 leading-relaxed"
              style={{ color: "#94a3b8", maxWidth: "560px" }}
            >
              Shielify delivers expert software development across InsureTech, LMS, E-commerce, and Sport Venue Booking — turning complex challenges into elegant digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white transition-all hover:opacity-90 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  fontWeight: 700,
                  boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
                }}
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/success"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all hover:bg-white/10"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#e2e8f0",
                  fontWeight: 600,
                }}
              >
                View Our Work <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="text-3xl mb-1"
                  style={{ fontWeight: 900, color: "#60a5fa" }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Domain tags */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-center text-sm mb-10 uppercase tracking-widest"
            style={{ color: "#737373", fontWeight: 700 }}
          >
            Our Specializations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {domains.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ border: "1.5px solid #e8eef8", background: "#f8faff" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)" }}
                >
                  <Icon size={22} style={{ color: "#3b82f6" }} />
                </div>
                <div className="text-sm mb-1" style={{ fontWeight: 800, color: "#0f172a" }}>
                  {label}
                </div>
                <div className="text-xs" style={{ color: "#737373" }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section className="py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: "#3b82f6", fontWeight: 700 }}
            >
              What We Do
            </p>
            <h2
              className="text-slate-900 mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              Services Built for Impact
            </h2>
            <p style={{ color: "#737373", maxWidth: "520px", margin: "0 auto" }}>
              From strategy to deployment, we cover every stage of your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceHighlights.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className="rounded-2xl p-8 flex gap-5 transition-all hover:-translate-y-1 hover:shadow-lg group"
                style={{ background: "#fff", border: "1.5px solid #e8eef8" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <h3
                    className="text-slate-900 mb-2"
                    style={{ fontWeight: 800, fontSize: "1.1rem" }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "#737373", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(59,130,246,0.3)",
              }}
            >
              All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Shielify */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}
              />
              <img
                src="https://images.unsplash.com/photo-1640646291758-4f07d5fc1b58?w=700&h=500&fit=crop&auto=format"
                alt="Shielify team collaborating"
                className="relative rounded-2xl w-full object-cover"
                style={{ height: "420px" }}
              />
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-4"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
                }}
              >
                <div className="text-white text-2xl" style={{ fontWeight: 900 }}>
                  Est. 2024
                </div>
                <div className="text-blue-200 text-sm">Ho Chi Minh City, Vietnam</div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-4"
                style={{ color: "#3b82f6", fontWeight: 700 }}
              >
                Why Shielify
              </p>
              <h2
                className="text-slate-900 mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.02em" }}
              >
                Expert-Led. Innovation-Driven. Results-Focused.
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#22c55e" }}
                    />
                    <span style={{ color: "#475569", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-xl text-white transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(59,130,246,0.3)",
                }}
              >
                Work With Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-white mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build Something Great?
          </h2>
          <p className="mb-10" style={{ color: "#94a3b8", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Let's discuss how Shielify can accelerate your next product or project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
              }}
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/success"
              className="flex items-center gap-2 px-8 py-4 rounded-xl transition-all hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              See Our Projects <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
