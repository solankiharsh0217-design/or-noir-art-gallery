import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Instagram, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Contact() {
  const { t } = useLanguage();

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
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>{t.contact.hours}</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.contact.hours_label}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>{t.contact.faq_title}</p>
                <div>
                  {t.contact.faqs.map((faq, i) => (
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