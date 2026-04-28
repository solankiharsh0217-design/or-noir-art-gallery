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
          <img src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/133d42c8c_b80a069ab_OrNoir_Logo_RGB_White_Rorschach-e1701373025483.png" alt="Or Noir" />
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
          <img src="https://media.base44.com/images/public/69f0a5ad50ec7e63b687358b/133d42c8c_b80a069ab_OrNoir_Logo_RGB_White_Rorschach-e1701373025483.png" alt="Or Noir" />
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