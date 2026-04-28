import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/lib/router";
import { ArrowRight } from "lucide-react";

const timeline = [
  { year: "1984", event: "Born in Geneva, Switzerland." },
  { year: "2006", event: "Graduated with distinction from the École cantonale d'art de Lausanne (ECAL), specialising in industrial design and material research." },
  { year: "2008", event: "Two-year residency at the Fonderia Artistica Battaglia in Milan — one of Europe's last traditional bronze foundries." },
  { year: "2011", event: "Established the Or Noir studio in Zurich. First solo exhibition, 'Matière Noire', at Galerie Lange + Pult, Zurich." },
  { year: "2014", event: "Commissioned for a permanent installation at the Hôtel de Crillon, Paris, following renovation by Aline Asmar d'Amman." },
  { year: "2017", event: "Represented Switzerland at Design Miami/ Basel with a body of work exploring oxidisation as narrative." },
  { year: "2020", event: "Solo exhibition 'Seuil' at Carpenters Workshop Gallery, London." },
  { year: "2023", event: "Collection acquired in part by Musée des Arts Décoratifs, Paris." },
  { year: "2024", event: "Ongoing studio practice. New body of work in preparation." },
];

export default function Artist() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>

        {/* Portrait band */}
        <div className="artist-band">
          <div className="artist-image">
            <img
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&q=80"
              alt="Artist in studio"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div className="artist-copy">
            <p className="eyebrow">The Artist</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95, textTransform: "uppercase", margin: "0 0 28px" }}>
              Léa Voss
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: "17px", maxWidth: "560px" }}>
              Léa Voss works at the intersection of sculpture, design, and material science. Her practice is rooted in a deep respect for craft — for the knowledge held in hands, fire, and time. Or Noir, meaning "black gold" in French, captures the duality at the core of her work: the relationship between shadow and luminosity, weight and lightness, permanence and change.
            </p>
            <p style={{ color: "var(--color-text-soft)", fontSize: "17px", maxWidth: "560px", marginTop: "18px" }}>
              Her works are held in private collections across Europe, North America, and the Middle East, as well as in the permanent collection of the Musée des Arts Décoratifs in Paris.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link to="/commissions" className="button-link button-link-primary">
                Commission a Piece <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Statement */}
        <section className="statement">
          <div className="section-inner">
            <div className="section-title" style={{ maxWidth: "820px" }}>
              <div className="gold-line" />
              <h2>On the Work</h2>
              <p style={{ fontSize: "19px", lineHeight: 1.75 }}>
                "I'm not interested in decoration. A piece must have a reason to exist — it must hold something, ask something, change the character of a room simply by being present. I work slowly. Some pieces take years to resolve. The materials themselves often tell me what they need to become."
              </p>
              <p style={{ marginTop: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                — Léa Voss, 2023
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>Biography</h2>
            </div>
            <div style={{ marginTop: "40px", display: "grid", gap: "0" }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "24px", padding: "20px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", paddingTop: "3px" }}>{item.year}</span>
                  <p style={{ margin: 0, color: "var(--color-text-soft)", fontSize: "15px", lineHeight: 1.65 }}>{item.event}</p>
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