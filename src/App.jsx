import { Router, Routes, Route } from "@/lib/router";
import { LanguageProvider } from "@/lib/language";
import Home from "@/pages/Home.jsx";
import Gallery from "@/pages/Gallery.jsx";
import Artist from "@/pages/Artist.jsx";
import Commissions from "@/pages/Commissions.jsx";
import Contact from "@/pages/Contact.jsx";

export default function App() {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}