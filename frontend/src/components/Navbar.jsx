import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logos/zw_logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Reset scrolled state when navigating to a different page
    if (location.pathname !== "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // If on home page, only transparent when at very top (scrollY = 0)
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 0);
      } else {
        // On other pages, always show dark navbar
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isWhiteText = !isScrolled;

  return (
    <nav
      className={`navbar ${isWhiteText ? "navbar-transparent" : "navbar-default"}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img src={logo} alt="ZW Logo" className="nav-logo" />
        </Link>
        <button
          className="hamburger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about2"
              className={`nav-link ${location.pathname === "/about2" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
