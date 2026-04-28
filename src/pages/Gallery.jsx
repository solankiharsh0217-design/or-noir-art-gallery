import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const BASE = "https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/";

const works = [
  {
    img: BASE + "59b58d0b2_150362945_236001824906801_795989140323528436_n1.jpg",
    style: "Gothic",
    title: "Crimson Reverie",
    year: "2023",
    medium: "Skull, red silk, gold-plated bones, resin, chains",
  },
  {
    img: BASE + "655481426_622921792_3786502991653739_1129221404982768407_n1.jpg",
    style: "Gothic",
    title: "The Crowned King",
    year: "2024",
    medium: "Skull, gold crown, red latex, bones, dried rose",
  },
  {
    img: BASE + "90427f121_557596651_18099952066723623_3861973380755344450_n1.jpg",
    style: "Mixed Media",
    title: "Taurus Aureus",
    year: "2023",
    medium: "Bull skull, amber latex, rope, pearls",
  },
  {
    img: BASE + "eaf91823c_557879683_18099951901723623_6560530536221164576_n1.jpg",
    style: "Mixed Media",
    title: "Amber Violin I",
    year: "2022",
    medium: "Violin, amber silk, jute rope, resin",
  },
  {
    img: BASE + "7bde4d431_558158506_18099952705723623_8234415805401986515_n1.jpg",
    style: "Sculpture",
    title: "Vanitas Noir",
    year: "2023",
    medium: "Skull, black latex, gold wire, pocket watch",
  },
  {
    img: BASE + "04ead52e7_558322596_18099952204723623_8122483656237214397_n1.jpg",
    style: "Sculpture",
    title: "Memento I",
    year: "2022",
    medium: "Skull, gears, chains, steampunk elements, resin",
  },
  {
    img: BASE + "ecb2e2fe4_624666089_18219638635310556_1698496815051835198_n1.jpg",
    style: "Mixed Media",
    title: "Black Serenade",
    year: "2024",
    medium: "Violin, black latex, gold chains, gold leaf frame",
  },
  {
    img: BASE + "ed4105f2f_624961102_18204593143326276_8426067856511495039_n1.jpg",
    style: "Gothic",
    title: "Dark Mirror",
    year: "2024",
    medium: "Black resin skull, gold baroque frame, latex",
  },
  {
    img: BASE + "c5aeb2e82_629465336_18390946552146107_8057900498616820661_n1.jpg",
    style: "Sculpture",
    title: "Vitruvian Machine",
    year: "2024",
    medium: "Vitruvian Man print, gears, amber silk, rope, resin",
  },
  {
    img: BASE + "7accf729d_629766182_18120182800719782_4427635083242464302_n1.jpg",
    style: "Sculpture",
    title: "Cogwork Atlas",
    year: "2024",
    medium: "Metal gears, chains, black latex, resin",
  },
  {
    img: BASE + "8265b3836_649233539_18069522014243687_4829911887271762012_n1.jpg",
    style: "Gothic",
    title: "Obsidian Crown",
    year: "2025",
    medium: "Black skull, gold baroque frame, resin, silk",
  },
  {
    img: BASE + "4e84858f3_662597530_18336597106174887_5102414850564128507_n1.jpg",
    style: "Mixed Media",
    title: "Resin World Table",
    year: "2025",
    medium: "Wood, resin, gears, antique map, rope",
  },
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