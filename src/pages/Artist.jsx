import { Link } from "@/lib/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

const PORTRAIT_FORMAL = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/17bed1cf4_619901967_18087549233026863_321123122223403389_n1.jpg";
const PORTRAIT_WORKING = BASE + "ed59c5739_619710569_18163962553406029_628315132717242372_n1.jpg";
const PORTRAIT_TORCH = BASE + "b6594bdce_619807647_18091329416072760_2634573453948344130_n1.jpg";
const PORTRAIT_STUDIO = BASE + "e6680baa6_621453866_18119033914573946_1544923781830615490_n1.jpg";

export default function Artist() {
  const { t } = useLanguage();

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        {/* HERO BAND */}
        <div className="artist-band">
          <div className="artist-image">
            <img src={PORTRAIT_FORMAL} alt="Alessio Gentile — Founder, Or Noir Art Gallery" />
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

        {/* QUOTE */}
        <section className="statement">
          <div className="section-inner">
            <div className="section-title section-title-centered" style={{ maxWidth: "820px" }}>
              <div className="gold-line" />
              <h2 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.65, textTransform: "none", fontStyle: "italic" }}>
                {t.artist.quote}
              </h2>
              <p style={{ marginTop: "22px", color: "var(--color-accent)", fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {t.artist.quote_attr}
              </p>
            </div>
          </div>
        </section>

        {/* VISION & ENTREPRENEURSHIP */}
        <section className="section">
          <div className="section-inner">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>
              <div>
                <div className="gold-line" />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,46px)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 28px", lineHeight: 0.95 }}>
                  {t.artist.bio_title}
                </h3>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.8, marginBottom: "18px" }}>{t.artist.vision_p1}</p>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.8, marginBottom: "18px" }}>{t.artist.vision_p2}</p>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.8 }}>{t.artist.vision_p3}</p>

                <div className="detail-list" style={{ marginTop: "36px" }}>
                  {[
                    { label: t.artist.detail1_label, desc: t.artist.detail1_desc },
                    { label: t.artist.detail2_label, desc: t.artist.detail2_desc },
                    { label: t.artist.detail3_label, desc: t.artist.detail3_desc },
                    { label: t.artist.detail4_label, desc: t.artist.detail4_desc },
                  ].map((item, i) => (
                    <div key={i} className="detail-item">
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0, marginTop: 8 }} />
                      <div>
                        <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</strong>
                        <p style={{ margin: "6px 0 0", fontSize: "14px", color: "var(--color-text-soft)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden", gridColumn: "1 / 3" }}>
                  <img src={PORTRAIT_WORKING} alt="Alessio at work" />
                </div>
                <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <img src={PORTRAIT_TORCH} alt="Alessio using a torch" />
                </div>
                <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <img src={PORTRAIT_STUDIO} alt="Alessio in the studio" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS STRIP */}
        <section className="statement">
          <div className="section-inner">
            <div className="section-title section-title-centered" style={{ marginBottom: "44px" }}>
              <div className="gold-line" />
              <h2>{t.artist.process_title}</h2>
              <p style={{ marginTop: "16px" }}>{t.artist.process_sub}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
              {[
                { img: BASE + "e8ce42585_622261703_1871325270181670_8080257567788768777_n1.jpg", caption: t.artist.process1 },
                { img: BASE + "5acba81f0_624243206_18083413970332146_1351980387724474205_n1.jpg", caption: t.artist.process2 },
                { img: BASE + "4905b9fda_619901967_18087549233026863_321123122223403389_n1.jpg", caption: t.artist.process3 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden", marginBottom: "12px" }}>
                    <img src={item.img} alt={item.caption} />
                  </div>
                  <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}