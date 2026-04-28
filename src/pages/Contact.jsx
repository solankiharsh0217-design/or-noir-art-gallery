import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";

const faqs = [
  { q: "Do you sell directly or through galleries?", a: "Both. Works are available directly from the studio and through a small number of partner galleries including Carpenters Workshop Gallery (London & Paris) and Galerie Lange + Pult (Zurich & Aarau)." },
  { q: "Can I visit the studio?", a: "Studio visits are by appointment only. We welcome collectors, architects, and interior designers who would like to see works in progress or discuss a commission in person." },
  { q: "How are prices determined?", a: "Prices reflect the complexity of a work, the materials used, and the edition size. We provide pricing on request. Commission budgets are discussed openly from the first conversation." },
  { q: "Do you work with interior designers and architects?", a: "Yes — a significant part of our practice involves collaborating with design and architecture studios on residential and hospitality projects. Trade enquiries are welcome." },
  { q: "Where are you based?", a: "Our studio is located in Zurich, Switzerland. We work with collectors globally and can arrange studio visits, international shipping, and on-site installation support." },
];

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>Get in Touch</h2>
              <p>We welcome enquiries from collectors, galleries, architects, and interior designers. All messages are read by Léa or her studio manager and answered within 48 hours.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginTop: "52px" }}>

              {/* Contact details */}
              <div>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>Studio Contact</p>
                <div className="contact-links">
                  <a href="mailto:studio@ornoir.art">
                    <Mail size={18} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>studio@ornoir.art</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>General Enquiries</p>
                    </div>
                  </a>
                  <a href="tel:+41791234567">
                    <Phone size={18} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>+41 79 123 45 67</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>WhatsApp / Call</p>
                    </div>
                  </a>
                  <a href="https://instagram.com/ornoir.art" target="_blank" rel="noreferrer">
                    <Instagram size={18} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>@ornoir.art</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Instagram</p>
                    </div>
                  </a>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", minHeight: "52px", padding: "14px 16px", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", color: "var(--color-text-soft)" }}>
                    <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>Sihlquai 268, 8005 Zurich</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Studio Address</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", minHeight: "52px", padding: "14px 16px", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", color: "var(--color-text-soft)" }}>
                    <Clock size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>Mon – Fri, 9:00 – 17:00</p>
                      <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Studio Hours (CET)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>Frequently Asked</p>
                <div style={{ display: "grid", gap: "0" }}>
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