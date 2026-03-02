import { Link } from "react-router-dom";
import "./Footer.css";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h3 className="footer-brand-title">Zerowings</h3>
          <p className="footer-description">
            Advanced drone solutions for industrial inspection, precision
            cleaning, and comprehensive aerial services.
          </p>
          <div className="footer-social">
            <a href="https://in.linkedin.com/company/zerowingsaero" className="social-link" title="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="#" className="social-link" title="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/zerowingsaerospace/" className="social-link" title="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-link" title="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Solutions</h4>
          <ul className="footer-links">
            <li>
              <Link to="/services">Cleaning & Maintenance</Link>
            </li>
            <li>
              <Link to="/services">Infrastructure Inspection</Link>
            </li>
            <li>
              <Link to="/services">Thermal Analysis</Link>
            </li>
            <li>
              <Link to="/services">Asset Documentation</Link>
            </li>
            <li>
              <Link to="/products">Advanced Hardware</Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Company</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Get In Touch</Link>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#newsroom">Newsroom</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Support</h4>
          <ul className="footer-links">
            <li>
              <a href="#documentation">Documentation</a>
            </li>
            <li>
              <a href="#guides">Technical Guides</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#support">Help Center</a>
            </li>
            <li>
              <a href="#contact-support">Contact Support</a>
            </li>
          </ul>
        </div>

        {/* Compliance Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Legal</h4>
          <ul className="footer-links">
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#cookies">Cookie Preferences</a>
            </li>
            <li>
              <a href="#compliance">Safety & Compliance</a>
            </li>
            <li>
              <a href="#contact">Contact Info</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          &copy; 2024 Zerowings. All rights reserved. | Drone Solutions for
          Industrial Excellence
        </p>
        <div className="footer-badges">
          <span className="badge">ISO Certified</span>
          <span className="badge">Safety First</span>
          <span className="badge">24/7 Support</span>
        </div>
      </div>
    </footer>
  );
}
