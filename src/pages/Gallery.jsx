import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const works = [
  { title: "Obsidian Relief I", category: "Wall Sculpture", year: "2024", medium: "Blackened steel, gold leaf", size: "120 × 80 cm", edition: "1/3", image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600&q=80" },
  { title: "Obsidian Relief II", category: "Wall Sculpture", year: "2024", medium: "Blackened steel, patina", size: "90 × 60 cm", edition: "2/3", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=80" },
  { title: "Threshold", category: "Furniture", year: "2023", medium: "Cast bronze, smoked oak", size: "180 × 40 × 75 cm", edition: "1/1", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { title: "Drift Table", category: "Furniture", year: "2023", medium: "Oxidised steel, glass", size: "200 × 90 × 72 cm", edition: "1/2", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80" },
  { title: "Aurum Object No. 7", category: "Object", year: "2024", medium: "Oxidised copper, marble", size: "28 × 12 × 12 cm", edition: "AP", image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80" },
  { title: "Vessel Study", category: "Object", year: "2023", medium: "Bronze, beeswax", size: "22 × 14 × 14 cm", edition: "3/5", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80" },
  { title: "Membrane", category: "Wall Sculpture", year: "2022", medium: "Forged iron, pigment", size: "200 × 140 cm", edition: "1/1", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80" },
  { title: "Column Fragment", category: "Object", year: "2022", medium: "Carved limestone, bronze pin", size: "48 × 20 × 20 cm", edition: "2/5", image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80" },
  { title: "Console No. 3", category: "Furniture", year: "2024", medium: "Blackened steel, travertine", size: "160 × 35 × 80 cm", edition: "1/2", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80" },
];

const categories = ["All", "Wall Sculpture", "Furniture", "Object"];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>
        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>Gallery</h2>
              <p>Original works available for acquisition. Each piece ships with a certificate of authenticity.</p>
            </div>

            <div className="filter-row">
              {categories.map((c) => (
                <button key={c} aria-pressed={active === c} onClick={() => setActive(c)}>
                  {c}
                </button>
              ))}
            </div>

            <div className="works-grid">
              {filtered.map((w) => (
                <div key={w.title} className="work-card">
                  <div className="work-image">
                    <img src={w.image} alt={w.title} />
                  </div>
                  <div className="work-copy">
                    <p>{w.category}</p>
                    <h3>{w.title}</h3>
                    <dl>
                      <div><dt>Year</dt><dd>{w.year}</dd></div>
                      <div><dt>Medium</dt><dd>{w.medium}</dd></div>
                      <div><dt>Dimensions</dt><dd>{w.size}</dd></div>
                      <div><dt>Edition</dt><dd>{w.edition}</dd></div>
                    </dl>
                  </div>
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