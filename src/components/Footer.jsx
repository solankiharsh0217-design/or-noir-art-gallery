import { Link } from "react-router-dom";
import { Mail, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div>
            <div className="gold-line" />
            <h2>Let's create<br />something timeless.</h2>
            <p style={{ marginTop: "20px", color: "var(--color-text-soft)", fontSize: "17px", maxWidth: "480px" }}>
              Every piece begins with a conversation. Reach out to discuss your vision, a commission, or simply to learn more about the work.
            </p>
            <div className="group-links" style={{ marginTop: "28px" }}>
              <Link to="/gallery" className="button-link button-link-ghost">Gallery</Link>
              <Link to="/artist" className="button-link button-link-ghost">Artist</Link>
              <Link to="/commissions" className="button-link button-link-ghost">Commissions</Link>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:studio@ornoir.art">
              <Mail size={18} />
              <div>
                <p style={{ margin: 0, color: "var(--color-text)", fontSize: "14px" }}>studio@ornoir.art</p>
                <p style={{ margin: "2px 0 0", color: "var(--color-text-muted)", fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Email</p>
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
            <p style={{ marginTop: "24px", color: "var(--color-text-muted)", fontSize: "12px", fontFamily: "var(--font-label)", letterSpacing: "0.08em" }}>
              © {new Date().getFullYear()} Or Noir Fine Art. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}