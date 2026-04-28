import { useState } from "react";
import { Link, useLocation } from "@/lib/router";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.artist, path: "/artist" },
    { label: t.nav.commissions, path: "/commissions" },
    { label: t.nav.contact, path: "/contact" },
  ];

  const langs = ["en", "it", "de"];

  return (
    <>
      <nav className="site-nav">
        <Link to="/" className="brand">
          <img src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/133d42c8c_b80a069ab_OrNoir_Logo_RGB_White_Rorschach-e1701373025483.png" alt="Or Noir" />
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.path} to={l.path}>
              <button style={{ color: location.pathname === l.path ? "var(--color-text)" : undefined }}>
                {l.label}
              </button>
            </Link>
          ))}
        </div>

        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="language-control">
            {langs.map((l) => (
              <button key={l} aria-pressed={lang === l} onClick={() => setLang(l)} style={{ textTransform: "uppercase", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", background: "transparent", border: "none", color: lang === l ? "var(--color-accent)" : "var(--color-text-muted)", cursor: "pointer" }}>
                {l}
              </button>
            ))}
          </div>
          <Link to="/commissions" className="button-link button-link-primary">
            {t.nav.cta}
          </Link>
        </div>

        <button className="menu-button icon-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <span>Menu</span>
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <button className="close-button icon-button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={24} color="var(--color-text)" />
          </button>
          <img src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/133d42c8c_b80a069ab_OrNoir_Logo_RGB_White_Rorschach-e1701373025483.png" alt="Or Noir" />
          {links.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setOpen(false)}>
              <button>{l.label}</button>
            </Link>
          ))}
          <div className="mobile-languages">
            {langs.map((l) => (
              <button key={l} aria-pressed={lang === l} onClick={() => setLang(l)} style={{ textTransform: "uppercase" }}>
                {l}
              </button>
            ))}
          </div>
          <Link to="/commissions" className="button-link button-link-primary" onClick={() => setOpen(false)}>
            {t.nav.cta}
          </Link>
        </div>
      )}
    </>
  );
}