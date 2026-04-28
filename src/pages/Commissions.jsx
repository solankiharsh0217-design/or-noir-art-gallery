import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, MessageSquare, Ruler, Truck } from "lucide-react";
import { useLanguage } from "@/lib/language";

const stepsIcons = [
  <MessageSquare size={20} />,
  <Ruler size={20} />,
  <Clock size={20} />,
  <CheckCircle size={20} />,
  <Truck size={20} />,
];

const stepContent = {
  en: [
    { title: "Initial Conversation", desc: "We begin with an open conversation about your space, your intentions, and your sensibility. No brief is too loose at this stage." },
    { title: "Concept & Proposal", desc: "Based on our dialogue, Alessio develops a written proposal including material references, dimensional studies, and a production timeline. A deposit of 30% confirms the commission." },
    { title: "Production", desc: "Production timelines range from 8 to 24 weeks depending on complexity. You receive progress updates at key milestones, and we welcome studio visits by appointment." },
    { title: "Completion & Documentation", desc: "The finished work is photographed professionally before shipping. We offer installation guidance for all major works." },
    { title: "Worldwide Delivery", desc: "We ship to collectors across Europe, the Americas, the Middle East, and Asia with specialist art handlers." },
  ],
  it: [
    { title: "Conversazione Iniziale", desc: "Iniziamo con una conversazione aperta sul tuo spazio e le tue intenzioni." },
    { title: "Concetto e Proposta", desc: "Alessio sviluppa una proposta scritta con riferimenti materiali e tempistiche. Un deposito del 30% conferma la commissione." },
    { title: "Produzione", desc: "I tempi di produzione vanno da 8 a 24 settimane. Riceverai aggiornamenti ai principali traguardi." },
    { title: "Completamento e Documentazione", desc: "L'opera finita viene fotografata professionalmente prima della spedizione." },
    { title: "Consegna Mondiale", desc: "Spediamo a collezionisti in Europa, Americhe, Medio Oriente e Asia con spedizionieri specializzati." },
  ],
  de: [
    { title: "Erstes Gespräch", desc: "Wir beginnen mit einem offenen Gespräch über Ihren Raum und Ihre Absichten." },
    { title: "Konzept und Angebot", desc: "Alessio entwickelt ein schriftliches Angebot mit Materialreferenzen und Zeitplan. Eine Anzahlung von 30% bestätigt den Auftrag." },
    { title: "Produktion", desc: "Produktionszeiten reichen von 8 bis 24 Wochen. Sie erhalten Fortschrittsupdates bei wichtigen Meilensteinen." },
    { title: "Fertigstellung und Dokumentation", desc: "Das fertige Werk wird professionell fotografiert, bevor es versandt wird." },
    { title: "Weltweite Lieferung", desc: "Wir liefern an Sammler in Europa, Amerika, dem Nahen Osten und Asien." },
  ],
};

export default function Commissions() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", description: "", budget: "", timeline: "" });
  const [submitted, setSubmitted] = useState(false);
  const steps = stepContent[lang];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        <section className="section" style={{ background: "var(--color-bg-raised)" }}>
          <div className="section-inner">
            <div className="section-title" style={{ maxWidth: "800px" }}>
              <div className="gold-line" />
              <h2>{t.commissions.title}</h2>
              <p style={{ fontSize: "18px" }}>{t.commissions.sub}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>{t.commissions.process_title}</h2>
            </div>
            <div className="detail-list" style={{ marginTop: "36px" }}>
              {steps.map((step, i) => (
                <div key={i} className="detail-item">
                  <div style={{ color: "var(--color-accent)" }}>{stepsIcons[i]}</div>
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

        <section className="commission">
          <div className="section-inner commission-inner">
            <div className="section-title section-title-centered">
              <div className="gold-line" />
              <h2>{t.commissions.form_title}</h2>
              <p style={{ marginTop: "16px" }}>{t.commissions.form_sub}</p>
            </div>

            {submitted ? (
              <div style={{ marginTop: "48px", padding: "40px", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", textAlign: "center", maxWidth: "560px", background: "var(--color-panel)" }}>
                <CheckCircle size={40} color="var(--color-accent)" style={{ margin: "0 auto 18px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, textTransform: "uppercase", margin: "0 0 12px" }}>{t.commissions.thanks}, {form.name.split(" ")[0]}.</h3>
                <p style={{ color: "var(--color-text-soft)", fontSize: "15px" }}>{t.commissions.thanks_msg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: "44px", display: "grid", gap: "14px", width: "100%", maxWidth: "680px" }}>
                <div className="commission-grid">
                  {[
                    { name: "name", label: t.commissions.name, placeholder: "Alessio Rossi", col: "1 / 3" },
                    { name: "email", label: t.commissions.email, type: "email", placeholder: "your@email.com", col: "3 / 5" },
                    { name: "budget", label: t.commissions.budget, placeholder: "e.g. CHF 5,000–15,000", col: "1 / 3" },
                    { name: "timeline", label: t.commissions.timeline, placeholder: "e.g. September 2025", col: "3 / 5" },
                  ].map((field) => (
                    <div key={field.name} className="commission-field" style={{ gridColumn: field.col }}>
                      <span>{field.label}</span>
                      <input
                        name={field.name}
                        type={field.type || "text"}
                        required={field.name === "name" || field.name === "email"}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        style={{ display: "block", marginTop: "10px", width: "100%", background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "15px" }}
                      />
                    </div>
                  ))}
                  <div className="commission-field" style={{ gridColumn: "1 / 5", minHeight: "160px" }}>
                    <span>{t.commissions.description}</span>
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
                    {t.commissions.send}
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