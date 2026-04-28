import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Instagram, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language";

const faqsData = {
  en: [
    { q: "Do you sell directly or through galleries?", a: "Works are available directly from the studio and through selected partner galleries. Contact us for current availability." },
    { q: "Can I visit the studio?", a: "Studio visits are by appointment only. We welcome collectors, architects, and interior designers who would like to see works in progress or discuss a commission in person." },
    { q: "How are prices determined?", a: "Prices reflect the complexity of a work, the materials used, and the edition size. We provide pricing on request. Commission budgets are discussed openly from the first conversation." },
    { q: "Do you work with interior designers and architects?", a: "Yes — a significant part of our practice involves collaborating with design and architecture studios on residential and hospitality projects." },
    { q: "Where are you based?", a: "Our studio is based in Switzerland. We work with collectors globally and can arrange studio visits, international shipping, and on-site installation support." },
  ],
  it: [
    { q: "Vendete direttamente o tramite gallerie?", a: "Le opere sono disponibili direttamente dallo studio e attraverso gallerie partner selezionate." },
    { q: "Posso visitare lo studio?", a: "Le visite allo studio sono solo su appuntamento. Accogliamo collezionisti, architetti e designer d'interni." },
    { q: "Come vengono determinati i prezzi?", a: "I prezzi riflettono la complessità dell'opera, i materiali utilizzati e la dimensione dell'edizione." },
    { q: "Lavorate con designer d'interni e architetti?", a: "Sì — una parte significativa della nostra pratica coinvolge la collaborazione con studi di design e architettura." },
    { q: "Dove siete?", a: "Il nostro studio è in Svizzera. Lavoriamo con collezionisti a livello globale." },
  ],
  de: [
    { q: "Verkaufen Sie direkt oder über Galerien?", a: "Werke sind direkt aus dem Atelier und über ausgewählte Partnergalerien erhältlich." },
    { q: "Kann ich das Atelier besuchen?", a: "Atelierbesuche sind nur nach Vereinbarung möglich. Wir begrüssen Sammler, Architekten und Innenarchitekten." },
    { q: "Wie werden die Preise festgelegt?", a: "Die Preise spiegeln die Komplexität eines Werkes, die verwendeten Materialien und die Auflagengrösse wider." },
    { q: "Arbeiten Sie mit Innenarchitekten und Architekten zusammen?", a: "Ja — ein bedeutender Teil unserer Praxis beinhaltet die Zusammenarbeit mit Design- und Architekturbüros." },
    { q: "Wo befinden Sie sich?", a: "Unser Atelier befindet sich in der Schweiz. Wir arbeiten weltweit mit Sammlern zusammen." },
  ],
};

export default function Contact() {
  const { t, lang } = useLanguage();
  const faqs = faqsData[lang];

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>
        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>{t.contact.title}</h2>
              <p>{t.contact.sub}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginTop: "52px" }}>
              <div>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>{t.contact.studio}</p>
                <div className="contact-links">
                  <a href="mailto:info@ornoirartgallery.com">
                    <Mail size={18} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>info@ornoirartgallery.com</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Email</p>
                    </div>
                  </a>
                  <a href="https://instagram.com/ornoirartgallery" target="_blank" rel="noreferrer">
                    <Instagram size={18} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>@ornoirartgallery</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Instagram</p>
                    </div>
                  </a>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", minHeight: "52px", padding: "14px 16px", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", color: "var(--color-text-soft)" }}>
                    <Clock size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>Mon – Fri, 9:00 – 17:00</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Studio Hours (CET)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>{t.contact.faq_title}</p>
                <div>
                  {faqs.map((faq, i) => (
                    <div key={i} style={{ padding: "20px 0", borderBottom: "1px solid var(--color-border)" }}>
                      <p style={{ margin: "0 0 8px", color: "var(--color-text)", fontFamily: "var(--font-label)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em" }}>{faq.q}</p>
                      <p style={{ margin: 0, color: "var(--color-text-soft)", fontSize: "14px", lineHeight: 1.65 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}