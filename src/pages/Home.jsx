import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Palette, Globe } from "lucide-react";

const featured = [
  {
    title: "Obsidian Relief I",
    category: "Wall Sculpture",
    year: "2024",
    medium: "Blackened steel, gold leaf",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600&q=80",
  },
  {
    title: "Threshold",
    category: "Furniture",
    year: "2023",
    medium: "Cast bronze, smoked oak",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    title: "Aurum Object No. 7",
    category: "Object",
    year: "2024",
    medium: "Oxidised copper, marble",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1600&q=80"
            alt="Or Noir studio"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Fine Art · Switzerland</p>
          <h1>Where<br />Darkness<br />Becomes<br />Gold</h1>
          <p>
            Or Noir creates singular sculptural works that occupy the space between art and object — pieces built to endure, conceived to move.
          </p>
          <div className="hero-actions">
            <Link to="/gallery" className="button-link button-link-primary">
              View Gallery <ArrowRight size={16} />
            </Link>
            <Link to="/commissions" className="button-link button-link-ghost">
              Commission a Piece
            </Link>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="statement">
        <div className="section-inner">
          <div className="section-title">
            <div className="gold-line" />
            <h2>Fine Art for Extraordinary Spaces</h2>
            <p>
              Each work emerges from a process of reduction — stripping away the superfluous until only the essential remains. Materials are chosen for their memory: steel that has known fire, bronze that carries centuries, wood that still holds the forest.
            </p>
          </div>

          <div className="detail-list" style={{ marginTop: "40px" }}>
            {[
              { icon: <Palette size={18} />, title: "Hand-crafted", desc: "Every piece is made entirely by hand in our studio in Zurich. No mass production, no shortcuts." },
              { icon: <Award size={18} />, title: "Limited editions", desc: "Works are produced in strict editions of 1 to 5. Certificates of authenticity accompany every piece." },
              { icon: <Globe size={18} />, title: "Worldwide shipping", desc: "We work with specialist art handlers to deliver pieces safely to collectors across Europe, the Americas and Asia." },
            ].map((item) => (
              <div key={item.title} className="detail-item">
                {item.icon}
                <div>
                  <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-label)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.title}</strong>
                  <p style={{ margin: "6px 0 0", fontSize: "15px" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="section">
        <div className="section-inner">
          <div className="section-title">
            <div className="gold-line" />
            <h2>Selected Works</h2>
            <p>A selection of recent pieces available for acquisition.</p>
          </div>
          <div className="works-grid" style={{ marginTop: "36px" }}>
            {featured.map((w) => (
              <div key={w.title} className="work-card">
                <div className="work-image">
                  <img src={w.image} alt={w.title} />
                </div>
                <div className="work-copy">
                  <p>{w.category}</p>
                  <h3>{w.title}</h3>
                  <dl>
                    <div>
                      <dt>Year</dt>
                      <dd>{w.year}</dd>
                    </div>
                    <div>
                      <dt>Medium</dt>
                      <dd>{w.medium}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "36px", textAlign: "center" }}>
            <Link to="/gallery" className="button-link button-link-ghost">
              View Full Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="commission" style={{ textAlign: "center" }}>
        <div className="section-inner commission-inner">
          <div className="section-title section-title-centered">
            <div className="gold-line" />
            <h2>Begin a Commission</h2>
            <p style={{ marginTop: "18px" }}>
              Have a space that demands something extraordinary? We work with architects, interior designers, and private collectors to create bespoke works tailored to a specific place and intention.
            </p>
          </div>
          <div style={{ marginTop: "36px" }}>
            <Link to="/commissions" className="button-link button-link-primary">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}