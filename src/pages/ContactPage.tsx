import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, User, Building2, MessageSquare } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/a/macros/shielify.com/s/AKfycbyp_ZcO25_g7tYpDxR6nmTwG0X8s2sU_eWOKBOn6_gwzHgb62Owd1QhMtqdj_O8CNaL/exec";

const contactInfo = [
  {
    icon: Phone,
    label: "Hotline",
    value: "(+84) 779 291 669",
    href: "tel:+84779291669",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tri.tran@shielify.com",
    href: "mailto:tri.tran@shielify.com",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "95 Dien Bien Phu, Lighthouse Building, Ho Chi Minh City, Vietnam",
    href: "https://maps.google.com/?q=95+Dien+Bien+Phu+Ho+Chi+Minh+City",
    color: "#22c55e",
    bg: "#f0fdf4",
  },
];

const founders = [
  { name: "Tri Tran", role: "CEO", email: "tri.tran@shielify.com" },
  { name: "Hieu Nguyen", role: "CMO", email: "hieu.nguyen@shielify.com" },
  { name: "Huy Su", role: "CFO", email: "huy.su@shielify.com" },
  { name: "Tam Tran", role: "CTO", email: "tam.tran@shielify.com" },
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
          source: "shielify.com",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit contact form failed:", error);
      alert(
        "Sorry, we couldn't send your message right now. Please try again later or contact us via email."
      );
    } finally {
      setLoading(false);
    }
  };

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
            Get in Touch
          </div>
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Let's Build Something
            <br />
            <span style={{ color: "#60a5fa" }}>Together</span>
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Have a project in mind? We'd love to hear from you. Send us a message or reach out directly — our team typically responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ background: "#fff", border: "1.5px solid #e8eef8" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs mb-1" style={{ color: "#737373", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {label}
                  </div>
                  <div style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div
                className="rounded-3xl p-8"
                style={{ background: "#fff", border: "1.5px solid #e8eef8" }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "#f0fdf4" }}
                    >
                      <CheckCircle size={32} style={{ color: "#22c55e" }} />
                    </div>
                    <h3 className="text-slate-900 mb-3" style={{ fontWeight: 900, fontSize: "1.4rem" }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: "#737373", maxWidth: "360px", lineHeight: 1.7 }}>
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }}
                      className="mt-7 px-6 py-3 rounded-xl text-white text-sm transition-all hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", fontWeight: 700 }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-slate-900 mb-6" style={{ fontWeight: 900, fontSize: "1.4rem" }}>
                      Send us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm mb-1.5"
                            style={{ color: "#374151", fontWeight: 600 }}
                          >
                            Full Name *
                          </label>
                          <div className="relative">
                            <User
                              size={16}
                              className="absolute left-3.5 top-1/2 -translate-y-1/2"
                              style={{ color: "#94a3b8" }}
                            />
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Nguyen Van A"
                              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                              style={{
                                background: "#f8faff",
                                border: "1.5px solid #e8eef8",
                                color: "#0f172a",
                              }}
                              onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                              onBlur={(e) => (e.target.style.borderColor = "#e8eef8")}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm mb-1.5"
                            style={{ color: "#374151", fontWeight: 600 }}
                          >
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail
                              size={16}
                              className="absolute left-3.5 top-1/2 -translate-y-1/2"
                              style={{ color: "#94a3b8" }}
                            />
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                              style={{
                                background: "#f8faff",
                                border: "1.5px solid #e8eef8",
                                color: "#0f172a",
                              }}
                              onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                              onBlur={(e) => (e.target.style.borderColor = "#e8eef8")}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm mb-1.5"
                          style={{ color: "#374151", fontWeight: 600 }}
                        >
                          Company / Organization
                        </label>
                        <div className="relative">
                          <Building2
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2"
                            style={{ color: "#94a3b8" }}
                          />
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{
                              background: "#f8faff",
                              border: "1.5px solid #e8eef8",
                              color: "#0f172a",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                            onBlur={(e) => (e.target.style.borderColor = "#e8eef8")}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm mb-1.5"
                          style={{ color: "#374151", fontWeight: 600 }}
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                          style={{
                            background: "#f8faff",
                            border: "1.5px solid #e8eef8",
                            color: form.subject ? "#0f172a" : "#94a3b8",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                          onBlur={(e) => (e.target.style.borderColor = "#e8eef8")}
                        >
                          <option value="" disabled>
                            Select a topic...
                          </option>
                          <option value="outsourcing">Outsourcing Inquiry</option>
                          <option value="consulting">Consulting & Strategy</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="product">Product Delivery</option>
                          <option value="market-research">Market Research</option>
                          <option value="ai">AI-Driven Customization</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm mb-1.5"
                          style={{ color: "#374151", fontWeight: 600 }}
                        >
                          Message *
                        </label>
                        <div className="relative">
                          <MessageSquare
                            size={16}
                            className="absolute left-3.5 top-3.5"
                            style={{ color: "#94a3b8" }}
                          />
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                            style={{
                              background: "#f8faff",
                              border: "1.5px solid #e8eef8",
                              color: "#0f172a",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                            onBlur={(e) => (e.target.style.borderColor = "#e8eef8")}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white transition-all hover:opacity-90"
                        style={{
                          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                          fontWeight: 700,
                          boxShadow: "0 4px 16px rgba(59,130,246,0.3)",
                          opacity: loading ? 0.75 : 1,
                        }}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar: Map + Team */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map embed */}
              <div
                className="rounded-3xl overflow-hidden"
                style={{ border: "1.5px solid #e8eef8", height: "280px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2861810735576!2d106.69418381103297!3d10.789379558909465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f23b4a07859%3A0xb6140472b58be4be!2zTElHSFRIT1VTRSA5NSDEkEnhu4ZOIEJJw4pOIFBI4bum!5e0!3m2!1sen!2s!4v1781149618444!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Leadership */}
              <div
                className="rounded-3xl p-6"
                style={{ background: "#fff", border: "1.5px solid #e8eef8" }}
              >
                <h3 className="text-slate-900 mb-5" style={{ fontWeight: 900, fontSize: "1rem" }}>
                  Leadership Team
                </h3>
                <div className="space-y-3">
                  {founders.map(({ name, role, email }) => (
                    <div
                      key={name}
                      className="flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-blue-50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                          style={{
                            background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                            color: "#1d4ed8",
                            fontWeight: 900,
                          }}
                        >
                          {name.split(" ")[0][0]}
                        </div>
                        <div>
                          <div className="text-sm" style={{ fontWeight: 700, color: "#0f172a" }}>
                            {name}
                          </div>
                          <div className="text-xs" style={{ color: "#3b82f6", fontWeight: 600 }}>
                            {role}
                          </div>
                        </div>
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs transition-colors hover:text-blue-600"
                        style={{ color: "#94a3b8" }}
                      >
                        <Mail size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
