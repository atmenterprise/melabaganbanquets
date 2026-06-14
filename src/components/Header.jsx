import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config';

export default function Header() {
  const celebrationTypes = ["Wedding", "Reception", "Birthday", "Annaprashan", "Corporate Event"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % celebrationTypes.length);
        setFadeClass('fade-in');
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="premium-header">
      <div className="header-content">
        <div className="container-fluid">
          <div className="header-content-row">
            
            {/* Left Column: Glass Card Info */}
            <div className="header-content-col">
              <div className="header-glass-card wow slideInLeft">
                
                <div className="header-brand-layout">
                  {/* Left Column: Logo Crest */}
                  <div className="header-logo-col">
                    <div className="header-logo-wrapper">
                      <img src="/img/logo-2.png" alt="Melabagan Banquets Logo" className="header-logo" />
                    </div>
                  </div>

                  {/* Right Column: Brand Info */}
                  <div className="header-info-col">
                    {/* Gold Rating Trust Badge */}
                    <div className="header-trust-badge">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star-half"></i>
                      <span>4.5/5 Rated Venue</span>
                    </div>

                    <h1 className="header-title">Melabagan Banquets</h1>
                    <h4 className="header-subtitle">where luxury meets celebration</h4>
                    
                    <h4 className="brand-description">
                      A brand new banquet hall in the heart of Dum Dum, Kolkata. <br />
                      Come and Celebrate <span className={`change-text-loop ${fadeClass}`}>{celebrationTypes[currentWordIndex]}</span> with us.
                    </h4>
                  </div>
                </div>
                
                <div className="header-divider-line"></div>

                {/* Primary Action CTAs */}
                <div className="header-actions">
                  <a href={`tel:${siteConfig.phone_main}`} className="btn btn-header-primary booknow-btn">
                    <i className="bx bxs-phone-call"></i>
                    <span>Call Venue</span>
                  </a>
                  
                  <a href={siteConfig.calendy_url} target="_blank" rel="noopener noreferrer" className="btn btn-header-secondary">
                    <i className="bx bx-calendar-event"></i>
                    <span>Schedule a Visit</span>
                  </a>
                </div>

                {/* Integrated Social Icons */}
                <div className="header-socials">
                  <a href={siteConfig.facebook_url} target="_blank" rel="noopener noreferrer" className="social-icon-btn facebook" title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href={siteConfig.instagram_url} target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram" title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href={siteConfig.whatsapp_url} target="_blank" rel="noopener noreferrer" className="social-icon-btn whatsapp" title="WhatsApp">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                  <a href={siteConfig.google_reviews_url} target="_blank" rel="noopener noreferrer" className="social-icon-btn google" title="Google Reviews">
                    <i className="bx bxl-google"></i>
                  </a>
                </div>

              </div>
            </div>

            {/* Right Column: Floating Video Card */}
            <div className="header-content-col header-video">
              <div className="header-video-frame wow slideInRight">
                
                <span className="video-tour-badge">
                  <i className="bx bx-play-circle"></i> Venue Tour
                </span>
                <div className="header-video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/1130382537?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    title="Ayush & Meghana Engagement Story at Melabagan Banquets"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <a href="#about" className="header-scroll-down">
        <span className="scroll-text">Scroll to Explore</span>
        <i className="bx bx-chevron-down animate-bounce-slow"></i>
      </a>
    </header>
  );
}
