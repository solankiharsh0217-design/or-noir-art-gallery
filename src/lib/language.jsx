import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: { gallery: "Gallery", artist: "Artist", commissions: "Commissions", contact: "Contact", cta: "Commission a Piece" },
    home: {
      eyebrow: "Fine Art · Switzerland",
      h1: ["Where", "Darkness", "Becomes", "Gold"],
      sub: "Or Noir creates singular mixed-media works that occupy the space between art and object — pieces built to endure, conceived to move.",
      cta1: "View Gallery",
      cta2: "Commission a Piece",
      statement_title: "Fine Art for Extraordinary Spaces",
      statement_body: "Each work emerges from a process of layering — combining skulls, bronze, resin, silk, chains, gears and found objects until something new and irreducible appears. Materials are chosen for their resonance: the weight of metal, the fragility of bone, the flow of latex.",
      craft: "Hand-crafted", craft_desc: "Every piece is made entirely by hand in the Or Noir studio. No mass production, no shortcuts.",
      limited: "Limited editions", limited_desc: "Works are produced in strict editions. Certificates of authenticity accompany every piece.",
      shipping: "Worldwide shipping", shipping_desc: "We work with specialist art handlers to deliver pieces safely to collectors across Europe, the Americas and Asia.",
      selected: "Selected Works",
      selected_sub: "A selection of recent pieces available for acquisition.",
      view_gallery: "View Full Gallery",
      commission_title: "Begin a Commission",
      commission_sub: "Have a space that demands something extraordinary? We create bespoke works tailored to a specific place and intention.",
      learn_more: "Learn More",
    },
    gallery: {
      title: "Gallery",
      sub: "Original works available for acquisition. Each piece ships with a certificate of authenticity.",
      all: "All",
    },
    artist: {
      eyebrow: "The Artist",
      name: "Alessio Gentile",
      bio1: "Alessio Gentile is the founder and creative force behind Or Noir Art Gallery. His practice stands at the intersection of gothic aesthetics, mixed-media sculpture, and obsessive craftsmanship — combining skulls, resin, silk, bronze, chains, gears and other found objects into monumental, deeply personal works.",
      bio2: "His pieces are held in private collections across Europe and beyond, and have been exhibited internationally.",
      cta: "Commission a Piece",
      on_work: "On the Work",
      quote: '"I don\'t make decoration. I make objects that carry weight — emotional, symbolic, physical. Every material has a reason to be there. I work until the piece tells me it is finished."',
      quote_attr: "— Alessio Gentile",
      bio_title: "Biography",
    },
    commissions: {
      title: "Bespoke Commissions",
      sub: "A commission is the most direct way to bring an Or Noir work into your life.",
      process_title: "The Process",
      form_title: "Begin Your Commission",
      form_sub: "Fill in the form below and Alessio will respond within 48 hours.",
      name: "Full Name", email: "Email Address", budget: "Approximate Budget", timeline: "Desired Timeline", description: "About Your Project",
      send: "Send Enquiry",
      thanks: "Thank you",
      thanks_msg: "Your enquiry has been received. Alessio will be in touch within 48 hours.",
    },
    contact: {
      title: "Get in Touch",
      sub: "We welcome enquiries from collectors, galleries, architects, and interior designers.",
      studio: "Studio Contact",
      faq_title: "Frequently Asked",
      footer_tagline: "Let's create\nsomething timeless.",
      footer_sub: "Every piece begins with a conversation. Reach out to discuss your vision, a commission, or simply to learn more about the work.",
    },
    footer: {
      tagline: "Let's create\nsomething timeless.",
      sub: "Every piece begins with a conversation. Reach out to discuss your vision, a commission, or simply to learn more about the work.",
      rights: "Or Noir Fine Art. All rights reserved.",
    }
  },
  it: {
    nav: { gallery: "Galleria", artist: "Artista", commissions: "Commissioni", contact: "Contatto", cta: "Commissiona un'Opera" },
    home: {
      eyebrow: "Belle Arti · Svizzera",
      h1: ["Dove", "L'Oscurità", "Diventa", "Oro"],
      sub: "Or Noir crea opere mixed-media singolari che occupano lo spazio tra arte e oggetto — pezzi costruiti per durare, concepiti per emozionare.",
      cta1: "Vedi la Galleria",
      cta2: "Commissiona un'Opera",
      statement_title: "Belle Arti per Spazi Straordinari",
      statement_body: "Ogni opera emerge da un processo di stratificazione — combinando teschi, bronzo, resina, seta, catene, ingranaggi e oggetti trovati finché non appare qualcosa di nuovo e irriducibile.",
      craft: "Fatto a mano", craft_desc: "Ogni pezzo è realizzato interamente a mano nello studio Or Noir. Nessuna produzione in serie.",
      limited: "Edizioni limitate", limited_desc: "Le opere sono prodotte in edizioni rigorose. Ogni pezzo è accompagnato da un certificato di autenticità.",
      shipping: "Spedizione mondiale", shipping_desc: "Lavoriamo con spedizionieri specializzati per consegnare i pezzi in sicurezza a collezionisti in tutto il mondo.",
      selected: "Opere Selezionate",
      selected_sub: "Una selezione di opere recenti disponibili per l'acquisizione.",
      view_gallery: "Vedi Tutta la Galleria",
      commission_title: "Inizia una Commissione",
      commission_sub: "Hai uno spazio che richiede qualcosa di straordinario? Creiamo opere su misura per un luogo e un'intenzione specifici.",
      learn_more: "Scopri di più",
    },
    gallery: { title: "Galleria", sub: "Opere originali disponibili per l'acquisizione.", all: "Tutti" },
    artist: {
      eyebrow: "L'Artista", name: "Alessio Gentile",
      bio1: "Alessio Gentile è il fondatore e la forza creativa di Or Noir Art Gallery. La sua pratica si trova all'intersezione dell'estetica gotica, della scultura mixed-media e dell'artigianato ossessivo.",
      bio2: "I suoi pezzi sono conservati in collezioni private in tutta Europa e oltre, e sono stati esposti a livello internazionale.",
      cta: "Commissiona un'Opera", on_work: "Sul Lavoro",
      quote: '"Non creo decorazioni. Creo oggetti che portano peso — emotivo, simbolico, fisico. Ogni materiale ha una ragione per essere lì."',
      quote_attr: "— Alessio Gentile", bio_title: "Biografia",
    },
    commissions: {
      title: "Commissioni su Misura", sub: "Una commissione è il modo più diretto per portare un'opera Or Noir nella tua vita.",
      process_title: "Il Processo", form_title: "Inizia la Tua Commissione", form_sub: "Compila il modulo e Alessio risponderà entro 48 ore.",
      name: "Nome Completo", email: "Indirizzo Email", budget: "Budget Approssimativo", timeline: "Tempistica Desiderata", description: "Il Tuo Progetto",
      send: "Invia Richiesta", thanks: "Grazie", thanks_msg: "La tua richiesta è stata ricevuta. Alessio ti risponderà entro 48 ore.",
    },
    contact: {
      title: "Contattaci", sub: "Accogliamo richieste da collezionisti, gallerie, architetti e designer d'interni.",
      studio: "Contatto Studio", faq_title: "Domande Frequenti",
    },
    footer: {
      tagline: "Creiamo qualcosa\ndi eterno.",
      sub: "Tutto inizia con una conversazione. Contattaci per parlare della tua visione o di una commissione.",
      rights: "Or Noir Fine Art. Tutti i diritti riservati.",
    }
  },
  de: {
    nav: { gallery: "Galerie", artist: "Künstler", commissions: "Aufträge", contact: "Kontakt", cta: "Werk in Auftrag geben" },
    home: {
      eyebrow: "Bildende Kunst · Schweiz",
      h1: ["Wo", "Dunkelheit", "Zu Gold", "Wird"],
      sub: "Or Noir schafft einzigartige Mixed-Media-Werke, die den Raum zwischen Kunst und Objekt einnehmen — Stücke, die gebaut sind um zu dauern.",
      cta1: "Galerie ansehen",
      cta2: "Werk in Auftrag geben",
      statement_title: "Bildende Kunst für aussergewöhnliche Räume",
      statement_body: "Jedes Werk entsteht durch einen Schichtungsprozess — Kombination von Schädeln, Bronze, Harz, Seide, Ketten, Zahnrädern und Fundstücken.",
      craft: "Handgefertigt", craft_desc: "Jedes Stück wird vollständig von Hand im Or Noir Atelier hergestellt.",
      limited: "Limitierte Auflagen", limited_desc: "Werke werden in strengen Auflagen produziert. Jedes Stück wird mit einem Echtheitszertifikat geliefert.",
      shipping: "Weltweiter Versand", shipping_desc: "Wir arbeiten mit spezialisierten Kunstspediteuren zusammen.",
      selected: "Ausgewählte Werke",
      selected_sub: "Eine Auswahl aktueller Werke, die zum Erwerb verfügbar sind.",
      view_gallery: "Gesamte Galerie",
      commission_title: "Auftrag beginnen",
      commission_sub: "Haben Sie einen Raum, der etwas Aussergewöhnliches verlangt? Wir erstellen massgeschneiderte Werke.",
      learn_more: "Mehr erfahren",
    },
    gallery: { title: "Galerie", sub: "Originalwerke zum Erwerb. Jedes Stück wird mit einem Echtheitszertifikat geliefert.", all: "Alle" },
    artist: {
      eyebrow: "Der Künstler", name: "Alessio Gentile",
      bio1: "Alessio Gentile ist der Gründer und die kreative Kraft hinter Or Noir Art Gallery. Seine Praxis steht an der Schnittstelle von gotischer Ästhetik, Mixed-Media-Skulptur und obsessivem Handwerk.",
      bio2: "Seine Werke befinden sich in privaten Sammlungen in ganz Europa und wurden international ausgestellt.",
      cta: "Werk in Auftrag geben", on_work: "Über die Arbeit",
      quote: '"Ich mache keine Dekoration. Ich mache Objekte, die Gewicht tragen — emotional, symbolisch, physisch. Jedes Material hat einen Grund, dort zu sein."',
      quote_attr: "— Alessio Gentile", bio_title: "Biografie",
    },
    commissions: {
      title: "Massgeschneiderte Aufträge", sub: "Ein Auftrag ist der direkteste Weg, ein Or Noir Werk in Ihr Leben zu bringen.",
      process_title: "Der Prozess", form_title: "Auftrag beginnen", form_sub: "Füllen Sie das Formular aus und Alessio antwortet innerhalb von 48 Stunden.",
      name: "Vollständiger Name", email: "E-Mail-Adresse", budget: "Ungefähres Budget", timeline: "Gewünschter Zeitplan", description: "Über Ihr Projekt",
      send: "Anfrage senden", thanks: "Danke", thanks_msg: "Ihre Anfrage wurde erhalten. Alessio wird sich innerhalb von 48 Stunden melden.",
    },
    contact: {
      title: "Kontakt aufnehmen", sub: "Wir begrüssen Anfragen von Sammlern, Galerien, Architekten und Innenarchitekten.",
      studio: "Studiokontakt", faq_title: "Häufige Fragen",
    },
    footer: {
      tagline: "Lassen Sie uns etwas\nZeitloses schaffen.",
      sub: "Alles beginnt mit einem Gespräch. Kontaktieren Sie uns, um Ihre Vision zu besprechen.",
      rights: "Or Noir Fine Art. Alle Rechte vorbehalten.",
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}