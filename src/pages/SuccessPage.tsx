import { Link } from "react-router";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const projects = [
  {
    id: "palyfi",
    name: "Palyfi",
    subtitle: "Sport Venue Booking System",
    category: "Sport Tech",
    year: "2025",
    status: "Live",
    statusColor: "#22c55e",
    description:
      "Palyfi is a full-featured sport venue booking platform that connects players with available courts, pitches, and arenas across Vietnam. The system handles real-time availability, online payments, court management dashboards, and automated scheduling — making sports access effortless.",
    highlights: [
      "Real-time court availability engine",
      "Multi-venue management dashboard",
      "Online payment integration (VNPay, MoMo)",
      "Mobile-responsive PWA for players",
      "Automated booking confirmation & reminders",
    ],
    image: "https://images.unsplash.com/photo-1629217855633-79a6925d6c47?w=800&h=500&fit=crop&auto=format",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    accentColor: "#22c55e",
    accentBg: "#f0fdf4",
    gradient: "linear-gradient(135deg, #0f172a, #064e3b)",
  },
  {
    id: "uiships",
    name: "UIShips",
    subtitle: "E-commerce Platform for UI Templates",
    category: "E-commerce",
    year: "2025",
    status: "Live",
    statusColor: "#3b82f6",
    description:
      "UIShips is a marketplace where designers and developers buy and sell premium UI templates, component libraries, and design systems. The platform features a powerful search and filter engine, license management, seller dashboards, and a streamlined checkout experience optimized for digital goods.",
    highlights: [
      "Template preview & live demo sandbox",
      "Seller onboarding & revenue dashboard",
      "License management system",
      "Search with tag-based filtering",
      "Stripe-powered international payments",
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format",
    tags: ["Next.js", "TypeScript", "Stripe", "Algolia"],
    accentColor: "#3b82f6",
    accentBg: "#eff6ff",
    gradient: "linear-gradient(135deg, #0f172a, #1e3a8a)",
  },
  {
    id: "shielify-warranty",
    name: "Shielify",
    subtitle: "Low-Code Warranty Equipment System",
    category: "InsureTech",
    year: "2025",
    status: "Live",
    statusColor: "#F97316",
    description:
      "Shielify's flagship product — a low-code configuration platform for delivering and managing warranty equipment systems. Insurance operators can configure product categories, warranty tiers, claim workflows, and customer portals without writing a single line of code.",
    highlights: [
      "Visual workflow builder for claim processes",
      "Multi-tier warranty plan configuration",
      "Customer portal with claim tracking",
      "API integrations with major insurers",
      "Analytics dashboard for operators",
    ],
    image: "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?w=800&h=500&fit=crop&auto=format",
    tags: ["React", "Python", "Low-Code Engine", "REST API"],
    accentColor: "#F97316",
    accentBg: "#fff7ed",
    gradient: "linear-gradient(135deg, #0f172a, #431407)",
  },
];

export function SuccessPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)",
        }}
      >
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
            style={{
              background: "rgba(59,130,246,0.2)",
              border: "1px solid rgba(96,165,250,0.3)",
              color: "#93c5fd",
              fontWeight: 600,
            }}
          >
            Our Work
          </div>
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Projects That Define
            <br />
            <span style={{ color: "#60a5fa" }}>Our Excellence</span>
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            From sport venue booking to InsureTech platforms — here are the products we've built and the problems we've solved.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl opacity-15"
                  style={{ background: project.accentColor }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover"
                    style={{ height: "340px" }}
                  />
                  <div
                    className="absolute inset-0 flex items-end p-6"
                    style={{ background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)" }}
                  >
                    <div>
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mb-2"
                        style={{
                          background: project.accentColor + "22",
                          border: `1px solid ${project.accentColor}44`,
                          color: project.accentColor,
                          fontWeight: 700,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: project.statusColor }}
                        />
                        {project.status}
                      </div>
                      <div className="text-white text-xl" style={{ fontWeight: 900 }}>
                        {project.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                    style={{ background: project.accentBg, color: project.accentColor, fontWeight: 700 }}
                  >
                    <Tag size={11} />
                    {project.category}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                    style={{ background: "#f1f5ff", color: "#64748b", fontWeight: 600 }}
                  >
                    <Calendar size={11} />
                    {project.year}
                  </span>
                </div>

                <h2
                  className="text-slate-900 mb-2"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  {project.name}
                </h2>
                <p
                  className="mb-5"
                  style={{ color: project.accentColor, fontWeight: 700, fontSize: "0.95rem" }}
                >
                  {project.subtitle}
                </p>
                <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "0.9rem" }} className="mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: project.accentBg }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: project.accentColor }}
                        />
                      </div>
                      <span style={{ color: "#475569", fontSize: "0.875rem" }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs"
                      style={{
                        background: "#f1f5ff",
                        color: "#1e3a8a",
                        fontWeight: 700,
                        fontFamily: "monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.02em" }}
          >
            Want to Be Our Next Success Story?
          </h2>
          <p className="mb-8" style={{ color: "#94a3b8" }}>
            Let's build something remarkable together. Reach out and let's start the conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
            }}
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
