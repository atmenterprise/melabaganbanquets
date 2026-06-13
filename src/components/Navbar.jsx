import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAffixed, setIsAffixed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Manage affix behavior (scrolling changes navbar height/bg if needed)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicking outside of the dropdown container
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Determine navbar classes
  // Home page has navbar-home class, subpages have navbar-subpage class. Affix is added on scroll.
  const navClass = `navbar navbar-default navbar-fixed-top ${isHome ? 'navbar-home' : 'navbar-subpage'} ${isAffixed ? 'affix' : ''}`;

  return (
    <nav id="mainNav" className={navClass}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${isOpen ? '' : 'collapsed'}`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          
          <Link className="navbar-brand page-scroll" to="/" onClick={closeMenu}>
            <img src="/img/logo-2.png" alt="logo" className="wow bounceIn nav-brand-img" />
          </Link>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? 'in' : ''}`} id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {isHome ? (
              <>
                <li>
                  <a className="page-scroll" href="#about" onClick={closeMenu}>About Us</a>
                </li>
                <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                  <a
                    href="#"
                    className="dropdown-toggle page-scroll"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Experience <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/photogallery" className="page-scroll dropdown-text" onClick={closeMenu}>
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/videogallery" className="page-scroll dropdown-text" onClick={closeMenu}>
                        Video Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="page-scroll" href="#features" onClick={closeMenu}>Features</a>
                </li>
                <li>
                  <a className="page-scroll" href="#testimonial" onClick={closeMenu}>Testimonial</a>
                </li>
                <li>
                  <a className="page-scroll" href="#findus" onClick={closeMenu}>Location</a>
                </li>
                <li>
                  <a className="page-scroll" href="#contact" onClick={closeMenu}>Contact</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="page-scroll" to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#about" onClick={closeMenu}>About Us</Link>
                </li>
                <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                  <a
                    href="#"
                    className="dropdown-toggle page-scroll"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Experience <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/photogallery" className="page-scroll dropdown-text" onClick={closeMenu}>
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/videogallery" className="page-scroll dropdown-text" onClick={closeMenu}>
                        Video Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="page-scroll" to="/#features" onClick={closeMenu}>Features</Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#testimonial" onClick={closeMenu}>Testimonial</Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#findus" onClick={closeMenu}>Location</Link>
                </li>
                <li>
                  <Link className="page-scroll" to="/#contact" onClick={closeMenu}>Contact</Link>
                </li>
              </>
            )}

            <li className="social-mobile">
              <a href={siteConfig.facebook_url} className="btn" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook socialicon-sm"></i>
              </a>
            </li>
            <li className="social-mobile">
              <a href={siteConfig.instagram_url} className="btn" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram socialicon-sm"></i>
              </a>
            </li>
            <li className="social-mobile">
              <a href={siteConfig.whatsapp_url} className="btn" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp socialicon-sm"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
