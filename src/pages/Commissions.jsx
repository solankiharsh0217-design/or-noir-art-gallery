import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, MessageSquare, Ruler, Truck } from "lucide-react";

const steps = [
  { icon: <MessageSquare size={20} />, title: "Initial Conversation", desc: "We begin with an open conversation about your space, your intentions, and your sensibility. No brief is too loose at this stage — often the most important works emerge from the vaguest starting points." },
  { icon: <Ruler size={20} />, title: "Concept & Proposal", desc: "Based on our dialogue, Léa develops a written proposal including material references, dimensional studies, and a production timeline. A non-refundable deposit of 30% confirms the commission." },
  { icon: <Clock size={20} />, title: "Production", desc: "Production timelines range from 8 to 24 weeks depending on complexity. You receive progress updates at key milestones, and we welcome studio visits by appointment." },
  { icon: <CheckCircle size={20} />, title: "Completion & Delivery", desc: "The finished work is documented photographically before shipping. We work with specialist art handlers to ensure safe transit, and offer installation guidance for all major works." },
  { icon: <Truck size={20} />, title: "Worldwide Delivery", desc: "We ship to collectors across Europe, the Americas, the Middle East, and Asia. Import duties and local taxes are the responsibility of the recipient." },
];

export default function Commissions() {
  const [form, setForm] = useState({ name: "", email: "", description: "", budget: "", timeline: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        {/* Hero */}
        <section className="section" style={{ background: "var(--color-bg-raised)" }}>
          <div className="section-inner">
            <div className="section-title" style={{ maxWidth: "800px" }}>
              <div className="gold-line" />
              <h2>Bespoke Commissions</h2>
              <p style={{ fontSize: "18px" }}>
                A commission is the most direct way to bring an Or Noir work into your life. Whether you're furnishing a home, completing an architectural project, or marking a significant moment, we will create something that belongs only to you.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>The Process</h2>
            </div>
            <div className="detail-list" style={{ marginTop: "36px" }}>
              {steps.map((step, i) => (
                <div key={i} className="detail-item">
                  <div style={{ color: "var(--color-accent)" }}>{step.icon}</div>
                  <div>
                    <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-label)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {String(i + 1).padStart(2, "0")}. {step.title}
                    </strong>
                    <p style={{ margin: "8px 0 0", fontSize: "15px", color: "var(--color-text-soft)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="commission">
          <div className="section-inner commission-inner">
            <div className="section-title section-title-centered">
              <div className="gold-line" />
              <h2>Begin Your Commission</h2>
              <p style={{ marginTop: "16px" }}>
                Fill in the form below and Léa will respond within 48 hours.
              </p>
            </div>

            {submitted ? (
              <div style={{ marginTop: "48px", padding: "40px", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", textAlign: "center", maxWidth: "560px", background: "var(--color-panel)" }}>
                <CheckCircle size={40} color="var(--color-accent)" style={{ margin: "0 auto 18px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, textTransform: "uppercase", margin: "0 0 12px" }}>Thank you, {form.name.split(" ")[0]}.</h3>
                <p style={{ color: "var(--color-text-soft)", fontSize: "15px" }}>Your enquiry has been received. Léa will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: "44px", display: "grid", gap: "14px", width: "100%", maxWidth: "680px" }}>
                <div className="commission-grid">
                  <div className="commission-field" style={{ gridColumn: "1 / 3" }}>
                    <span>Full Name</span>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={{ display: "block", marginTop: "10px", width: "100%", background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "15px" }}
                    />
                  </div>
                  <div className="commission-field" style={{ gridColumn: "3 / 5" }}>
                    <span>Email Address</span>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={{ display: "block", marginTop: "10px", width: "100%", background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "15px" }}
                    />
                  </div>
                  <div className="commission-field" style={{ gridColumn: "1 / 3" }}>
                    <span>Approximate Budget</span>
                    <input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="e.g. CHF 15,000–25,000"
                      style={{ display: "block", marginTop: "10px", width: "100%", background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "15px" }}
                    />
                  </div>
                  <div className="commission-field" style={{ gridColumn: "3 / 5" }}>
                    <span>Desired Timeline</span>
                    <input
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      placeholder="e.g. Needed by September 2025"
                      style={{ display: "block", marginTop: "10px", width: "100%", background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "15px" }}
                    />
                  </div>
                  <div className="commission-field" style={{ gridColumn: "1 / 5", minHeight: "160px" }}>
                    <span>About Your Project</span>
                    <textarea
                      name="description"
                      required
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Describe your space, the feeling you're after, any references or constraints..."
                      style={{ display: "block", marginTop: "10px", width: "100%", minHeight: "100px", background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "15px", resize: "vertical" }}
                    />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <button type="submit" className="button-link button-link-primary" style={{ minWidth: "220px" }}>
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}