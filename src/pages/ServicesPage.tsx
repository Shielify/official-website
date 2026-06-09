import { Link } from "react-router";
import {
  Code2,
  Lightbulb,
  Handshake,
  Package,
  BarChart2,
  Brain,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Outsourcing",
    tagline: "Dedicated development teams, delivered.",
    description:
      "Scale your engineering capacity with dedicated Shielify teams. We embed directly into your workflow, providing senior-level talent across web, mobile, and backend — without the overhead of full-time hiring.",
    features: [
      "Full-stack web & mobile development",
      "Dedicated team models",
      "Agile & Scrum delivery",
      "Code reviews and QA included",
      "Ongoing maintenance & support",
    ],
    color: "#3b82f6",
    bg: "#eff6ff",
    gradient: "linear-gradient(135deg, #eff6ff, #dbeafe)",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    tagline: "Strategy that aligns tech with business.",
    description:
      "Navigate complex digital transformation with confidence. Our consulting team brings hands-on experience across InsureTech, LMS, E-commerce, and Sports — helping you make smarter architecture and investment decisions.",
    features: [
      "Technology roadmap planning",
      "Architecture design & review",
      "Digital transformation strategy",
      "Vendor selection & evaluation",
      "Risk assessment & mitigation",
    ],
    color: "#8b5cf6",
    bg: "#f5f3ff",
    gradient: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
  },
  {
    icon: Handshake,
    title: "Partnership",
    tagline: "Long-term collaboration, shared success.",
    description:
      "We believe the best outcomes come from true partnerships. Shielify offers equity or revenue-share partnership models with startups and SMEs looking to co-build next-generation tech products.",
    features: [
      "Revenue-share engagement models",
      "Co-development of new ventures",
      "Shared technical ownership",
      "Strategic advisory involvement",
      "Flexible long-term agreements",
    ],
    color: "#F97316",
    bg: "#fff7ed",
    gradient: "linear-gradient(135deg, #fff7ed, #fed7aa)",
  },
  {
    icon: Package,
    title: "Deliver Product",
    tagline: "From concept to production-ready.",
    description:
      "Got a product idea? We take it from zero to launch. Shielify handles the entire lifecycle — design, development, testing, and deployment — so you can focus on your market and users.",
    features: [
      "UI/UX design & prototyping",
      "End-to-end product development",
      "QA & performance testing",
      "Cloud deployment & CI/CD",
      "Post-launch support & iteration",
    ],
    color: "#22c55e",
    bg: "#f0fdf4",
    gradient: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
  },
  {
    icon: BarChart2,
    title: "Market Research",
    tagline: "Data-backed decisions, every time.",
    description:
      "Launch with confidence. Our market research service combines quantitative data and domain expertise to validate your product-market fit, competitive landscape, and go-to-market strategy before you build.",
    features: [
      "Competitive landscape analysis",
      "Target audience profiling",
      "Product-market fit validation",
      "Technology trend analysis",
      "Go-to-market strategy reports",
    ],
    color: "#0ea5e9",
    bg: "#f0f9ff",
    gradient: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
  },
  {
    icon: Brain,
    title: "AI-Driven Customization",
    tagline: "Smarter systems powered by intelligence.",
    description:
      "Embed intelligence into your products. From recommendation engines and predictive analytics to NLP and document AI, Shielify builds AI-driven features that create real differentiation for your business.",
    features: [
      "Custom ML model development",
      "NLP & document intelligence",
      "Recommendation & ranking systems",
      "Predictive analytics dashboards",
      "LLM integration & prompt engineering",
    ],
    color: "#ec4899",
    bg: "#fdf2f8",
    gradient: "linear-gradient(135deg, #fdf2f8, #fce7f3)",
  },
];

export function ServicesPage() {
  return (
    <div>
      {/* Page hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #60a5fa 0%, transparent 50%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 40%)",
          }}
        />
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
            What We Offer
          </div>
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Services Built for
            <br />
            <span style={{ color: "#60a5fa" }}>Every Challenge</span>
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Whether you need a dedicated team, product delivery, strategic advice, or cutting-edge AI capabilities — Shielify has a service model to match.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, tagline, description, features, color, gradient }) => (
              <div
                key={title}
                className="rounded-3xl p-8 flex flex-col gap-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "#fff", border: "1.5px solid #e8eef8" }}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: gradient }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>
                  <div>
                    <h2
                      className="text-slate-900 mb-1"
                      style={{ fontWeight: 900, fontSize: "1.2rem" }}
                    >
                      {title}
                    </h2>
                    <p style={{ color, fontWeight: 600, fontSize: "0.875rem" }}>{tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "0.9rem" }}>
                  {description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color }} />
                      <span style={{ color: "#64748b", fontSize: "0.875rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
            Not Sure Which Service Fits?
          </h2>
          <p className="mb-8" style={{ color: "#94a3b8" }}>
            Our team is happy to understand your needs and recommend the right engagement model.
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
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
