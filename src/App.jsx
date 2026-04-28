// Updated
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';

const LOGO_URL =
  'https://media.base44.com/images/public/69bd385bab5537a46b016e2b/b80a069ab_OrNoir_Logo_RGB_White_Rorschach-e1701373025483.png';

// Updated

const workTitles = [
  'Obsidian Detail',
  'Gold Wound Study',
  'Reliquary Totem',
  'Amber Frame Relic',
  'Instrument Standard',
  'Crowned Mechanism',
  'Oval Nocturne',
  'Violin Altar',
  'Circular Instrument',
  'Resin Table Study',
  'Red Skull Vessel',
  'Artist Process I',
  'Bone Standard',
  'Small Relic I',
  'Miniature Amber Shrine',
  'Burnished Cabinet',
  'Cable Icon',
  'Golden Skull Study',
  'Mechanical Column',
  'Dark Horn Relic',
  'Wall Fragment I',
  'Reliquary Cross',
  'Skull and Brass Study',
  'Long Table Relic',
  'Patina Surface',
  'Amber Object Study',
  'Dark Process Detail',
  'Industrial Memento',
  'Grand Wall Relic',
  'Horned Standard',
  'Sculptural Maquette',
  'Cabinet of Remains',
];

const workTypes = [
  'Object',
  'Object',
  'Wall sculpture',
  'Wall sculpture',
  'Wall sculpture',
  'Object',
  'Wall sculpture',
  'Wall sculpture',
  'Wall sculpture',
  'Furniture',
  'Object',
  'Object',
  'Wall sculpture',
  'Object',
  'Object',
  'Furniture',
  'Wall sculpture',
  'Object',
  'Wall sculpture',
  'Wall sculpture',
  'Wall sculpture',
  'Wall sculpture',
  'Object',
  'Furniture',
  'Furniture',
  'Object',
  'Object',
  'Object',
  'Wall sculpture',
  'Wall sculpture',
  'Object',
  'Furniture',
];

const materialByType = {
  'Wall sculpture': 'Found object, dark resin, cable, brass, bone-like forms, and industrial fragments',
  Furniture: 'Wood, resin, metallic inclusions, sculptural surface treatment, and amber patina',
  Object: 'Skull forms, oxidized metal, dark resin, brass detail, and hand-finished relic material',
};

const works = workTitles.map((title, index) => {
  const type = workTypes[index];

  return {
    title,
    type,
    material: materialByType[type],
    size: type === 'Furniture' ? 'Bespoke dimensions' : 'One-of-one scale',
    availability: index % 3 === 0 ? 'Commission reference' : 'One-off work',
    image: `/art-work-${String(index + 1).padStart(2, '0')}.jpg`,
  };
});

const copy = {
  en: {
    nav: {
      links: [
        ['Works', 'works'],
        ['The Artist', 'artist'],
        ['Commission', 'commission'],
        ['Contact', 'contact'],
      ],
      cta: 'Commission a Work',
    },
    hero: {
      eyebrow: 'OR NOIR ART GALLERY',
      headline: 'Unique gothic mixed-media works.',
      body:
        'Handcrafted wall sculptures, objects, and bespoke furniture shaped from skull forms, instruments, cables, brass, and industrial fragments.',
      primary: 'View Works',
      secondary: 'Start a Commission',
    },
    system: {
      eyebrow: 'FINE ART DIVISION',
      headline: 'One visual language, one-of-one objects.',
      body:
        'Or Noir Art Gallery is the fine art division of Or Noir Group. The work keeps the group language dark, minimal, and premium, then pushes it into materiality: texture, patina, shadow, and physical presence.',
    },
    works: {
      eyebrow: 'WORKS',
      headline: 'A portfolio built from relics, instruments, and industrial memory.',
      all: 'All',
      filters: [
        ['Wall sculpture', 'Wall sculpture'],
        ['Furniture', 'Furniture'],
        ['Object', 'Object'],
      ],
      labels: {
        material: 'Materials',
        size: 'Scale',
        availability: 'Status',
      },
    },
    artist: {
      eyebrow: 'THE ARTIST',
      headline: 'Gentile Alessio builds objects with ritual weight.',
      body:
        'Each work begins with found material and a precise atmosphere. Brass, resin, instrument bodies, cables, bones, and mechanical pieces are composed into singular objects that feel excavated rather than manufactured.',
      details: [
        'Unique handcrafted pieces, never standard product runs',
        'Dark gothic language with amber and gold material warmth',
        'Commission-led process for collectors, interiors, and exhibitions',
      ],
    },
    commission: {
      eyebrow: 'COMMISSION A WORK',
      headline: 'No checkout. A conversation, then a singular piece.',
      body:
        'Share the type of work, dimensions, budget range, and references. The studio will define materials, scale, timing, and availability around the commission.',
      fields: ['Type of work', 'Approximate dimensions', 'Budget range', 'Notes and references'],
      cta: 'Prepare Email',
    },
    contact: {
      eyebrow: 'CONTACT',
      headline: 'Press, exhibitions, collaborations, and commissions.',
      email: 'info@ornoirtattoogallery.com',
      whatsapp: '+41 78 912 20 80',
      group: 'Part of Or Noir Group',
      groupLink: 'Visit Or Noir Group',
      tattooLink: 'Tattoo Gallery',
      mangaLink: 'Background Manga',
    },
  },
  de: {
    nav: {
      links: [
        ['Werke', 'works'],
        ['Der Kunstler', 'artist'],
        ['Auftrag', 'commission'],
        ['Kontakt', 'contact'],
      ],
      cta: 'Werk beauftragen',
    },
    hero: {
      eyebrow: 'OR NOIR ART GALLERY',
      headline: 'Einzigartige Gothic Mixed-Media Werke.',
      body:
        'Handgefertigte Wandskulpturen, Objekte und Mobel aus Schadel-Formen, Instrumenten, Kabeln, Messing und industriellen Fragmenten.',
      primary: 'Werke ansehen',
      secondary: 'Auftrag starten',
    },
    system: {
      eyebrow: 'FINE-ART-DIVISION',
      headline: 'Eine visuelle Sprache, Objekte als Unikate.',
      body:
        'Or Noir Art Gallery ist die Fine-Art-Division der Or Noir Group. Die Arbeiten ubertragen die dunkle, minimale und hochwertige Gruppensprache in Materialitat: Textur, Patina, Schatten und physische Prasenz.',
    },
    works: {
      eyebrow: 'WERKE',
      headline: 'Ein Portfolio aus Relikten, Instrumenten und industrieller Erinnerung.',
      all: 'Alle',
      filters: [
        ['Wandskulptur', 'Wall sculpture'],
        ['Mobel', 'Furniture'],
        ['Objekt', 'Object'],
      ],
      labels: {
        material: 'Materialien',
        size: 'Massstab',
        availability: 'Status',
      },
    },
    artist: {
      eyebrow: 'DER KUNSTLER',
      headline: 'Gentile Alessio baut Objekte mit ritueller Schwere.',
      body:
        'Jedes Werk beginnt mit gefundenem Material und einer prazisen Atmosphare. Messing, Harz, Instrumentenkorper, Kabel, Knochen und mechanische Teile werden zu singularen Objekten komponiert.',
      details: [
        'Einzigartige handgefertigte Arbeiten, keine Serienprodukte',
        'Dunkle Gothic-Sprache mit warmer Amber- und Goldmaterialitat',
        'Auftragsprozess fur Sammler, Interieurs und Ausstellungen',
      ],
    },
    commission: {
      eyebrow: 'WERK BEAUFTRAGEN',
      headline: 'Kein Checkout. Ein Gesprach, dann ein Einzelstuck.',
      body:
        'Teilen Sie Werktyp, Dimensionen, Budgetrahmen und Referenzen. Das Studio definiert Material, Massstab, Timing und Verfugbarkeit passend zum Auftrag.',
      fields: ['Werktyp', 'Ungefaire Dimensionen', 'Budgetrahmen', 'Notizen und Referenzen'],
      cta: 'E-Mail vorbereiten',
    },
    contact: {
      eyebrow: 'KONTAKT',
      headline: 'Presse, Ausstellungen, Kollaborationen und Auftrage.',
      email: 'info@ornoirtattoogallery.com',
      whatsapp: '+41 78 912 20 80',
      group: 'Teil der Or Noir Group',
      groupLink: 'Or Noir Group besuchen',
      tattooLink: 'Tattoo Gallery',
      mangaLink: 'Background Manga',
    },
  },
  it: {
    nav: {
      links: [
        ['Opere', 'works'],
        ["L'artista", 'artist'],
        ['Commissioni', 'commission'],
        ['Contatto', 'contact'],
      ],
      cta: 'Commissiona un opera',
    },
    hero: {
      eyebrow: 'OR NOIR ART GALLERY',
      headline: 'Opere gothic mixed-media uniche.',
      body:
        'Sculture da parete, oggetti e arredi su misura costruiti a mano con forme craniche, strumenti, cavi, ottone e frammenti industriali.',
      primary: 'Guarda le opere',
      secondary: 'Avvia una commissione',
    },
    system: {
      eyebrow: 'DIVISIONE FINE ART',
      headline: 'Una lingua visiva, oggetti irripetibili.',
      body:
        'Or Noir Art Gallery e la divisione fine art di Or Noir Group. Il lavoro conserva il linguaggio scuro, minimale e premium del gruppo e lo porta nella materia: texture, patina, ombra e presenza fisica.',
    },
    works: {
      eyebrow: 'OPERE',
      headline: 'Un portfolio fatto di reliquie, strumenti e memoria industriale.',
      all: 'Tutte',
      filters: [
        ['Scultura da parete', 'Wall sculpture'],
        ['Arredo', 'Furniture'],
        ['Oggetto', 'Object'],
      ],
      labels: {
        material: 'Materiali',
        size: 'Scala',
        availability: 'Stato',
      },
    },
    artist: {
      eyebrow: "L'ARTISTA",
      headline: 'Gentile Alessio costruisce oggetti con peso rituale.',
      body:
        'Ogni opera nasce da materiali trovati e da una atmosfera precisa. Ottone, resina, corpi di strumenti, cavi, ossa e parti meccaniche diventano oggetti singolari.',
      details: [
        'Pezzi unici realizzati a mano, mai produzioni standard',
        'Linguaggio gothic scuro con calore materico amber e oro',
        'Processo su commissione per collezionisti, interni e mostre',
      ],
    },
    commission: {
      eyebrow: 'COMMISSIONA UN OPERA',
      headline: 'Nessun checkout. Una conversazione, poi un pezzo unico.',
      body:
        'Condividi tipo di opera, dimensioni, budget e riferimenti. Lo studio definira materiali, scala, tempi e disponibilita intorno alla commissione.',
      fields: ['Tipo di opera', 'Dimensioni indicative', 'Budget', 'Note e riferimenti'],
      cta: 'Prepara email',
    },
    contact: {
      eyebrow: 'CONTATTO',
      headline: 'Stampa, mostre, collaborazioni e commissioni.',
      email: 'info@ornoirtattoogallery.com',
      whatsapp: '+41 78 912 20 80',
      group: 'Parte di Or Noir Group',
      groupLink: 'Visita Or Noir Group',
      tattooLink: 'Tattoo Gallery',
      mangaLink: 'Background Manga',
    },
  },
};

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ButtonLink({ children, variant = 'primary', onClick, href }) {
  const className = `button-link button-link-${variant}`;
  const content = (
    <>
      <span>{children}</span>
      {variant === 'ghost' ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {content}
    </button>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionTitle({ eyebrow, headline, body, centered = false }) {
  return (
    <div className={centered ? 'section-title section-title-centered' : 'section-title'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="gold-line" />
      <h2>{headline}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Navigation({ lang, setLang, content }) {
  const [open, setOpen] = useState(false);
  const langLabel = lang.toUpperCase();

  return (
    <>
      <nav className="site-nav">
        <button className="brand" type="button" onClick={() => scrollToSection('home')}>
          <img src={LOGO_URL} alt="Or Noir Art Gallery" />
        </button>

        <div className="nav-links">
          {content.nav.links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <div className="language-control" aria-label="Language selector">
            <Globe2 size={16} />
            {['en', 'de', 'it'].map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <ButtonLink onClick={() => scrollToSection('commission')}>{content.nav.cta}</ButtonLink>
        </div>

        <button className="icon-button menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
          <span>{langLabel}</span>
        </button>
      </nav>

      {open ? (
        <div className="mobile-menu">
          <button className="icon-button close-button" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          <img src={LOGO_URL} alt="Or Noir Art Gallery" />
          {content.nav.links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setOpen(false);
                scrollToSection(id);
              }}
            >
              {label}
            </button>
          ))}
          <div className="mobile-languages">
            {['en', 'de', 'it'].map((code) => (
              <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

function Hero({ content }) {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <img src="/art-gallery-hero-generated.png" alt="" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <Eyebrow>{content.hero.eyebrow}</Eyebrow>
        <h1>{content.hero.headline}</h1>
        <p>{content.hero.body}</p>
        <div className="hero-actions">
          <ButtonLink onClick={() => scrollToSection('works')}>{content.hero.primary}</ButtonLink>
          <ButtonLink variant="ghost" onClick={() => scrollToSection('commission')}>
            {content.hero.secondary}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Works({ content }) {
  const [filter, setFilter] = useState('All');
  const filters = [[content.works.all, 'All'], ...content.works.filters];
  const visibleWorks = useMemo(() => {
    if (filter === 'All') return works;
    return works.filter((work) => work.type === filter);
  }, [filter]);

  return (
    <section className="section" id="works">
      <div className="section-inner">
        <SectionTitle eyebrow={content.works.eyebrow} headline={content.works.headline} />
        <div className="filter-row">
          {filters.map(([label, value]) => (
            <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {label}
            </button>
          ))}
        </div>
        <div className="works-grid">
          {visibleWorks.map((work) => (
            <article className="work-card" key={work.title}>
              <div className="work-image">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="work-copy">
                <p>{work.type}</p>
                <h3>{work.title}</h3>
                <dl>
                  <div>
                    <dt>{content.works.labels.material}</dt>
                    <dd>{work.material}</dd>
                  </div>
                  <div>
                    <dt>{content.works.labels.size}</dt>
                    <dd>{work.size}</dd>
                  </div>
                  <div>
                    <dt>{content.works.labels.availability}</dt>
                    <dd>{work.availability}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Artist({ content }) {
  return (
    <section className="artist-band" id="artist">
      <div className="artist-image">
        <img src="/art-work-12.jpg" alt="Gentile Alessio working on a sculptural piece" />
      </div>
      <div className="artist-copy">
        <SectionTitle eyebrow={content.artist.eyebrow} headline={content.artist.headline} body={content.artist.body} />
        <div className="detail-list">
          {content.artist.details.map((item) => (
            <div key={item} className="detail-item">
              <Check size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commission({ content }) {
  const mailtoBody = encodeURIComponent(
    `${content.commission.headline}\n\n${content.commission.fields.map((field) => `${field}:`).join('\n')}`,
  );
  const href = `mailto:${content.contact.email}?subject=${encodeURIComponent('Or Noir Art Gallery commission enquiry')}&body=${mailtoBody}`;

  return (
    <section className="commission" id="commission">
      <div className="section-inner commission-inner">
        <SectionTitle
          eyebrow={content.commission.eyebrow}
          headline={content.commission.headline}
          body={content.commission.body}
          centered
        />
        <div className="commission-grid">
          {content.commission.fields.map((field, index) => (
            <div className="commission-field" key={field}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{field}</p>
            </div>
          ))}
        </div>
        <ButtonLink href={href}>{content.commission.cta}</ButtonLink>
      </div>
    </section>
  );
}

function Contact({ content }) {
  return (
    <footer className="contact" id="contact">
      <div className="section-inner contact-inner">
        <div>
          <Eyebrow>{content.contact.eyebrow}</Eyebrow>
          <h2>{content.contact.headline}</h2>
        </div>
        <div className="contact-links">
          <a href={`mailto:${content.contact.email}`}>
            <Mail size={18} />
            <span>{content.contact.email}</span>
          </a>
          <a href={`https://wa.me/${content.contact.whatsapp.replace(/[^\d]/g, '')}`} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            <span>{content.contact.whatsapp}</span>
          </a>
          <p>{content.contact.group}</p>
          <div className="group-links">
            <a href="https://or-noir-group.base44.app">{content.contact.groupLink}</a>
            <a href="https://ornoirtattoogallery.ch">{content.contact.tattooLink}</a>
            <a href="https://or-noir-background-manga-gallery.base44.app">{content.contact.mangaLink}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const content = copy[lang];

  return (
    <>
      <Navigation lang={lang} setLang={setLang} content={content} />
      <main>
        <Hero content={content} />
        <section className="statement">
          <div className="section-inner">
            <SectionTitle eyebrow={content.system.eyebrow} headline={content.system.headline} body={content.system.body} centered />
          </div>
        </section>
        <Works content={content} />
        <Artist content={content} />
        <Commission content={content} />
      </main>
      <Contact content={content} />
    </>
  );
}
