import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { openModal } = useModal();

  // Helper to handle smooth scroll to hash sections on homepage
  const handleHashLink = (e, hash) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-title">{siteConfig.title.toUpperCase()}</h3>
            <p className="footer-tagline">Where luxury meets celebration</p>
            <p className="footer-address">
              426/1 & 426/2 Dum Dum Road,<br />
              Melabagan Estate, Bagjolla,<br />
              Dum Dum, Kolkata - 700 074
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={(e) => handleHashLink(e, '#page-top')}>Home</Link>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleHashLink(e, '#about')}>About Us</a>
              </li>
              <li>
                <Link to="/photogallery">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/videogallery">Video Gallery</Link>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleHashLink(e, '#features')}>Features</a>
              </li>
              <li>
                <a href="#findus" onClick={(e) => handleHashLink(e, '#findus')}>Location</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleHashLink(e, '#contact')}>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="footer-col">
            <h4 className="footer-col-title">Info & Policies</h4>
            <ul className="footer-links">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal('disclaimer'); }}>Disclaimer</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }}>Privacy Policy</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal('faq'); }}>FAQs</a>
              </li>
              <li>
                <a href="#" id="open_preferences_center">Cookie Preferences</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleHashLink(e, '#contact')}>Submit Feedback</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleHashLink(e, '#contact')}>Complaints & Escalation</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <p className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <a href={`tel:${siteConfig.phone_main}`}>{siteConfig.phone_main}</a>
            </p>
            <p className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <a href={`tel:${siteConfig.phone_alt}`}>{siteConfig.phone_alt}</a>
            </p>
            <p className="footer-contact-item">
              <i className="bi bi-envelope-fill"></i>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            
            <div className="footer-social-icons">
              <a href={siteConfig.facebook_url} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={siteConfig.instagram_url} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={siteConfig.whatsapp_url} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href={siteConfig.address_url} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Google Maps Location">
                <i className="bi bi-geo-alt-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {siteConfig.title.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-developer">
            DESIGNED BY{' '}
            <a href={siteConfig.developer_webpage} target="_blank" rel="noopener noreferrer">
              {siteConfig.developer_name.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
