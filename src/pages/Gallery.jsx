import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

const works = [
  { img: BASE + "art-work-1.jpg", style: "Gothic", title: "Rorschach I", year: "2023", medium: "Skull, resin, bronze" },
  { img: BASE + "art-work-2.jpg", style: "Mixed Media", title: "Memento", year: "2023", medium: "Skull, silk, chains" },
  { img: BASE + "art-work-3.jpg", style: "Sculpture", title: "Chain & Bone", year: "2022", medium: "Metal, bone, latex" },
  { img: BASE + "art-work-4.jpg", style: "Gothic", title: "Obscura", year: "2022", medium: "Resin, gears, bronze" },
  { img: BASE + "art-work-5.jpg", style: "Mixed Media", title: "Vanitas II", year: "2023", medium: "Skull, gold leaf, silk" },
  { img: BASE + "art-work-6.jpg", style: "Sculpture", title: "Reliquary", year: "2024", medium: "Steel, resin, found objects" },
];

const categories = ["All", "Gothic", "Mixed Media", "Sculpture"];

export default function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? works : works.filter((w) => w.style === active);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>
        <section className="section">
          <div className="section-inner">
            <div className="section-title">
              <div className="gold-line" />
              <h2>{t.gallery.title}</h2>
              <p>{t.gallery.sub}</p>
            </div>
            <div className="filter-row">
              {categories.map((cat) => (
                <button key={cat} aria-pressed={active === cat} onClick={() => setActive(cat)}>
                  {cat === "All" ? t.gallery.all : cat}
                </button>
              ))}
            </div>
            <div className="works-grid">
              {filtered.map((work, i) => (
                <div key={i} className="work-card">
                  <div className="work-image">
                    <img src={work.img} alt={work.title} />
                  </div>
                  <div className="work-copy">
                    <p>{work.style}</p>
                    <h3>{work.title}</h3>
                    <dl>
                      <div><dt>Year</dt><dd>{work.year}</dd></div>
                      <div><dt>Medium</dt><dd>{work.medium}</dd></div>
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