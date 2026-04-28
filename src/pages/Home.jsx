import { Link } from "@/lib/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

// Real artwork images — curated selection for featured works
const featuredWorks = [
  {
    img: BASE + "59b58d0b2_150362945_236001824906801_795989140323528436_n1.jpg",
    style: "Gothic Sculpture",
    title: "Crimson Reverie",
  },
  {
    img: BASE + "7bde4d431_558158506_18099952705723623_8234415805401986515_n1.jpg",
    style: "Mixed Media",
    title: "Vanitas Noir",
  },
  {
    img: BASE + "655481426_622921792_3786502991653739_1129221404982768407_n1.jpg",
    style: "Gothic Sculpture",
    title: "The Crowned King",
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img
            src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/bbd414179_generated_image.png"
            alt="Or Noir — Fine Art"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow" style={{ letterSpacing: "0.22em" }}>{t.home.eyebrow}</p>

          <h1 style={{ fontSize: "clamp(38px, 6.5vw, 80px)", lineHeight: 0.92, marginBottom: "0" }}>
            {t.home.h1.map((line, i) => (
              <span key={i} style={{ display: "block", color: i === 1 ? "var(--color-accent)" : "var(--color-text)" }}>{line}</span>
            ))}
          </h1>

          <div style={{ width: 48, height: 1, background: "var(--color-accent)", margin: "24px 0" }} />

          <p style={{ fontSize: "clamp(14px, 1.4vw, 17px)", color: "var(--color-text-soft)", maxWidth: "480px", lineHeight: 1.75, margin: "0 0 10px" }}>
            {t.home.hero_sub}
          </p>
          <p style={{ fontSize: "clamp(12px, 1.1vw, 14px)", color: "var(--color-text-muted)", maxWidth: "440px", lineHeight: 1.65, fontFamily: "var(--font-label)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {t.home.hero_tagline}
          </p>

          <div className="hero-actions" style={{ marginTop: "32px" }}>
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

      {/* FOUNDER TEASER */}
      <div className="artist-band">
        <div className="artist-image">
          <img
            src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/17bed1cf4_619901967_18087549233026863_321123122223403389_n1.jpg"
            alt="Alessio Gentile — Founder, Or Noir"
          />
        </div>
        <div className="artist-copy">
          <p className="eyebrow">{t.home.founder_eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 22px", lineHeight: 0.95 }}>
            Alessio<br />Gentile
          </h2>
          <p style={{ color: "var(--color-text-soft)", fontSize: "17px", lineHeight: 1.75, marginBottom: "16px" }}>
            {t.home.founder_bio1}
          </p>
          <p style={{ color: "var(--color-text-soft)", fontSize: "17px", lineHeight: 1.75 }}>
            {t.home.founder_bio2}
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link to="/artist" className="button-link button-link-ghost" style={{ marginRight: "12px" }}>{t.home.founder_cta1}</Link>
            <Link to="/commissions" className="button-link button-link-primary">{t.home.cta2}</Link>
          </div>
        </div>
      </div>

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