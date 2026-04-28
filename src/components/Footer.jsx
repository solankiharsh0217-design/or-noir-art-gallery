import { Link } from "@/lib/router";
import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div>
            <img
              src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/133d42c8c_b80a069ab_OrNoir_Logo_RGB_White_Rorschach-e1701373025483.png"
              alt="Or Noir"
              style={{ width: "160px", height: "auto", objectFit: "contain", marginBottom: "28px" }}
            />
            <h2 style={{ whiteSpace: "pre-line" }}>{t.footer.tagline}</h2>
            <p style={{ marginTop: "20px", color: "var(--color-text-soft)", fontSize: "16px", maxWidth: "480px" }}>{t.footer.sub}</p>
            <div style={{ marginTop: "32px" }}>
              <Link to="/commissions" className="button-link button-link-primary">{t.nav.cta}</Link>
            </div>
          </div>
          <div>
            <div className="contact-links">
              <a href="mailto:info@ornoirartgallery.com">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: "var(--color-accent)" }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@ornoirartgallery.com
              </a>
              <a href="https://instagram.com/ornoirartgallery" target="_blank" rel="noreferrer">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: "var(--color-accent)" }}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                @ornoirartgallery
              </a>
            </div>
            <p style={{ marginTop: "40px", color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.1em" }}>
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}