import { useState, useEffect } from "react";

const Navbar = () => {
  const links = ["Home", "Story", "Gameplay", "Media", "About Us"];

  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const logoSrc = `./logo/Lumin.svg`;

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="nav-wrap">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            {/* Logo */}
            <img src={logoSrc} alt="Lumin Logo" className="logo-img" />
          </div>

          {/* Getting all links from links array */}
          <nav className="nav-links">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className={`nav-link ${active === l ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(l);
                }}
                aria-current={active === l ? "page" : undefined}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="nav-right">
          <div className="search-box">
            <input
              className="search-input"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>

          {/* Burger Menu - For screens less than 800PX */}
          <button
            className="icon-btn burger-btn"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className="burger-box">
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </span>
          </button>
            
        
          <button className="icon-btn user-btn" aria-label="Profile">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                fill="#fff"
              />
              <path
                d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>

        <div
          className={`mobile-backdrop ${mobileOpen ? "open" : "close"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`mobile-panel ${mobileOpen ? "open" : "close"}`}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
          <nav className="mobile-nav">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className={`mobile-link ${active === l ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(l);
                  setMobileOpen(false);
                }}
              >
                {l}
              </a>
            ))}
          </nav>
  </div>
      </div>
    </header>
  );
};

export default Navbar;
