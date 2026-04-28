import { Link } from "@/lib/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

const featuredWorks = [
  { img: BASE + "art-work-1.jpg", style: "Gothic", title: "Rorschach I" },
  { img: BASE + "art-work-2.jpg", style: "Mixed Media", title: "Memento" },
  { img: BASE + "art-work-3.jpg", style: "Sculpture", title: "Chain & Bone" },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img src={BASE + "art-work-hero.jpg"} alt="Or Noir hero" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>
            {t.home.h1.map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h1>
          <p>{t.home.sub}</p>
          <div className="hero-actions">
            <Link to="/gallery" className="button-link button-link-primary">{t.home.cta1}</Link>
            <Link to="/commissions" className="button-link button-link-ghost">{t.home.cta2}</Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="section-inner">
          <div className="section-title" style={{ maxWidth: "860px" }}>
            <div className="gold-line" />
            <h2>{t.home.statement_title}</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.75 }}>{t.home.statement_body}</p>
          </div>
          <div className="detail-list" style={{ marginTop: "44px" }}>
            {[
              { label: t.home.craft, desc: t.home.craft_desc },
              { label: t.home.limited, desc: t.home.limited_desc },
              { label: t.home.shipping, desc: t.home.shipping_desc },
            ].map((item, i) => (
              <div key={i} className="detail-item">
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0, marginTop: 8 }} />
                <div>
                  <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</strong>
                  <p style={{ margin: "6px 0 0", fontSize: "14px", color: "var(--color-text-soft)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="section">
        <div className="section-inner">
          <div className="section-title section-title-centered">
            <div className="gold-line" />
            <h2>{t.home.selected}</h2>
            <p>{t.home.selected_sub}</p>
          </div>
          <div className="works-grid" style={{ marginTop: "44px" }}>
            {featuredWorks.map((work, i) => (
              <div key={i} className="work-card">
                <div className="work-image">
                  <img src={work.img} alt={work.title} />
                </div>
                <div className="work-copy">
                  <p>{work.style}</p>
                  <h3>{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link to="/gallery" className="button-link button-link-ghost">{t.home.view_gallery}</Link>
          </div>
        </div>
      </section>

      {/* COMMISSION BAND */}
      <section className="commission">
        <div className="section-inner commission-inner">
          <div className="section-title section-title-centered">
            <div className="gold-line" />
            <h2>{t.home.commission_title}</h2>
            <p style={{ marginTop: "16px" }}>{t.home.commission_sub}</p>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: "36px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link to="/commissions" className="button-link button-link-primary">{t.home.cta2}</Link>
            <Link to="/artist" className="button-link button-link-ghost">{t.home.learn_more}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}