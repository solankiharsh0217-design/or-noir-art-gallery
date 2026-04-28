import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Artist from "@/pages/Artist";
import Commissions from "@/pages/Commissions";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}