import { useState } from "react";
import { Link, useLocation } from "@/lib/router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Gallery", path: "/gallery" },
  { label: "Artist", path: "/artist" },
  { label: "Commissions", path: "/commissions" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="site-nav">
        <Link to="/" className="brand">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text)" }}>
            Or Noir
          </span>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.path} to={l.path}>
              <button
                style={{ color: location.pathname === l.path ? "var(--color-text)" : undefined }}
              >
                {l.label}
              </button>
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/commissions" className="button-link button-link-primary">
            Commission a Piece
          </Link>
        </div>

        <button className="menu-button icon-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <span>Menu</span>
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <button className="close-button icon-button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={24} color="var(--color-text)" />
          </button>
          {links.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setOpen(false)}>
              <button>{l.label}</button>
            </Link>
          ))}
          <Link to="/commissions" className="button-link button-link-primary" onClick={() => setOpen(false)}>
            Commission a Piece
          </Link>
        </div>
      )}
    </>
  );
}