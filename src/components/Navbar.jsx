import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-main">SONA</span>
        <span className="logo-sub">NAIL STUDIO & ACADEMY</span>
      </a>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#academy" onClick={closeMenu}>Academy</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
      </nav>

      <div className="nav-right">
        <a
          href="#contact"
          className="nav-contact-button"
          onClick={closeMenu}
        >
          Contact Us
        </a>

        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;