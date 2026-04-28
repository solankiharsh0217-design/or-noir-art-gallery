import { Link } from "@/lib/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

// Portrait: formal shot in golden throne (most commanding)
const PORTRAIT_FORMAL = BASE + "d691f7dd6_619220059_18054923570392481_7092798990713874641_n1.jpg";
// At work: painting a skull with brush (elegant, craft-focused)
const PORTRAIT_WORKING = BASE + "ed59c5739_619710569_18163962553406029_628315132717242372_n1.jpg";
// With torch: intense studio action shot
const PORTRAIT_TORCH = BASE + "b6594bdce_619807647_18091329416072760_2634573453948344130_n1.jpg";
// Full studio shot with large piece
const PORTRAIT_STUDIO = BASE + "e6680baa6_621453866_18119033914573946_1544923781830615490_n1.jpg";

export default function Artist() {
  const { t } = useLanguage();

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        {/* HERO BAND — formal portrait */}
        <div className="artist-band">
          <div className="artist-image">
            <img src={PORTRAIT_FORMAL} alt="Alessio Gentile — Founder, Or Noir Art Gallery" />
          </div>
          <div className="artist-copy">
            <p className="eyebrow">{t.artist.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6vw,72px)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 24px", lineHeight: 0.95 }}>
              {t.artist.name}
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: "17px", lineHeight: 1.75, marginBottom: "18px" }}>
              Alessio Gentile is not only an artist — he is a visionary entrepreneur who transformed a singular obsession into an internationally recognised fine-art brand. As founder and creative director of Or Noir Art Gallery, he built a self-sustaining studio practice from scratch, establishing a direct-to-collector model that reaches clients across Europe, the Americas, the Middle East, and Asia.
            </p>
            <p style={{ color: "var(--color-text-soft)", fontSize: "17px", lineHeight: 1.75 }}>
              His leadership is defined by an uncompromising standard of craft and a refusal to scale down the ambition of any piece. Every decision — material, format, edition size — reflects a coherent long-term vision: to create works that appreciate in value precisely because they are irreplaceable.
            </p>
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
                "I don't make decoration. I build objects that carry weight — emotional, symbolic, physical. Each material has a reason to be there. The piece is finished when it tells me so — not before."
              </h2>
              <p style={{ marginTop: "22px", color: "var(--color-accent)", fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                — Alessio Gentile, Founder & Creative Director
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
                  Vision &amp;<br />Leadership
                </h3>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.8, marginBottom: "18px" }}>
                  Before Or Noir became a gallery, it was a conviction: that there existed an underserved market for handcrafted works of exceptional material complexity — pieces that occupy the territory between fine art and object, between sculpture and symbol.
                </p>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.8, marginBottom: "18px" }}>
                  Alessio built the brand organically, without institutional backing, relying entirely on the quality of the work and an intuitive understanding of what serious collectors want — not trend, but permanence. Or Noir now operates internationally, with bespoke commissions delivered to collectors across four continents.
                </p>
                <p style={{ color: "var(--color-text-soft)", fontSize: "16px", lineHeight: 1.8 }}>
                  His entrepreneurial model is as distinctive as his aesthetic: no intermediaries, no compromises on materials, no dilution of the creative process. Every commission is a direct dialogue between artist and client — a collaboration that begins with a conversation and ends with something that will outlast them both.
                </p>

                <div className="detail-list" style={{ marginTop: "36px" }}>
                  {[
                    { label: "Studio founded", desc: "Switzerland — building an international presence from a Swiss studio" },
                    { label: "International reach", desc: "Works commissioned by private collectors across Europe, the Americas, the Middle East and Asia" },
                    { label: "Direct model", desc: "No galleries, no intermediaries — every work sold directly from the studio" },
                    { label: "Bespoke commissions", desc: "Each commission is conceived individually, from initial conversation to delivery" },
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

              {/* Studio photos — 2-up grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden", gridColumn: "1 / 3" }}>
                  <img src={PORTRAIT_WORKING} alt="Alessio at work — painting a skull" />
                </div>
                <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <img src={PORTRAIT_TORCH} alt="Alessio using a torch on a sculpture" />
                </div>
                <div className="work-image" style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <img src={PORTRAIT_STUDIO} alt="Alessio in the Or Noir studio" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS STRIP — studio action images */}
        <section className="statement">
          <div className="section-inner">
            <div className="section-title section-title-centered" style={{ marginBottom: "44px" }}>
              <div className="gold-line" />
              <h2>The Process</h2>
              <p style={{ marginTop: "16px" }}>Every piece passes through hundreds of hours of manual work. Nothing is rushed. Nothing is delegated.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
              {[
                { img: BASE + "e8ce42585_622261703_1871325270181670_8080257567788768777_n1.jpg", caption: "Assembling the armature" },
                { img: BASE + "5acba81f0_624243206_18083413970332146_1351980387724474205_n1.jpg", caption: "Applying resin layers" },
                { img: BASE + "4905b9fda_619901967_18087549233026863_321123122223403389_n1.jpg", caption: "Final details in the studio" },
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