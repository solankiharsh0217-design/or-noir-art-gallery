import { Link } from "@/lib/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

export default function Artist() {
  const { t } = useLanguage();

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        <div className="artist-band">
          <div className="artist-image">
            <img src={BASE + "artist-alessio.jpg"} alt="Alessio Gentile" />
          </div>
          <div className="artist-copy">
            <p className="eyebrow">{t.artist.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6vw,72px)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 24px", lineHeight: 0.95 }}>
              {t.artist.name}
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: "17px", lineHeight: 1.75, marginBottom: "18px" }}>{t.artist.bio1}</p>
            <p style={{ color: "var(--color-text-soft)", fontSize: "17px", lineHeight: 1.75 }}>{t.artist.bio2}</p>
            <div style={{ marginTop: "36px" }}>
              <Link to="/commissions" className="button-link button-link-primary">{t.artist.cta}</Link>
            </div>
          </div>
        </div>

        <section className="statement">
          <div className="section-inner">
            <div className="section-title section-title-centered" style={{ maxWidth: "800px" }}>
              <div className="gold-line" />
              <h2 style={{ fontSize: "clamp(20px,2.5vw,28px)", fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.6, textTransform: "none", fontStyle: "italic" }}>
                {t.artist.quote}
              </h2>
              <p style={{ marginTop: "20px", color: "var(--color-accent)", fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {t.artist.quote_attr}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <div className="gold-line" />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 24px" }}>{t.artist.bio_title}</h3>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.75 }}>{t.artist.bio1}</p>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.75, marginTop: "16px" }}>{t.artist.bio2}</p>
              </div>
              <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
                <img src={BASE + "art-work-studio.jpg"} alt="Studio" />
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}