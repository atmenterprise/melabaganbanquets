import React from 'react';
import { siteConfig } from '../config';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row about-row">
          
          {/* Left Column: Story & Highlights */}
          <div className="col-lg-6 col-md-12 about-content-col">
            <span className="about-subtitle">Welcome to</span>
            <h2 className="about-title">{siteConfig.title}</h2>
            <div className="about-divider"></div>
            
            <p className="about-lead-text">
              Welcome to {siteConfig.title}, Dum Dum's newest and most luxurious venue for grand celebrations and lifetime memories!
            </p>
            
            <p className="about-body-text">
              Strategically located opposite the Zudio fashion mall on Dum Dum Road (just 10 minutes from the metro and train stations, and 20 minutes from the airport), our venue offers the perfect blend of modern sophistication and unparalleled convenience.
            </p>

            <p className="about-body-text">
              Featuring a massive 8,000+ sq. ft. fully air-conditioned hall and an adjacent sprawling green lawn, we comfortably host grand celebrations of up to 500+ guests.
            </p>

            {/* Quick Highlights list */}
            <div className="about-highlights-grid">
              <div className="about-highlight-item">
                <i className="bi bi-check2-circle highlight-icon"></i>
                <span>Sprawling Open Lawn</span>
              </div>
              <div className="about-highlight-item">
                <i className="bi bi-check2-circle highlight-icon"></i>
                <span>8000+ sq. ft. AC Hall</span>
              </div>
              <div className="about-highlight-item">
                <i className="bi bi-check2-circle highlight-icon"></i>
                <span>500+ Guest Capacity</span>
              </div>
              <div className="about-highlight-item">
                <i className="bi bi-check2-circle highlight-icon"></i>
                <span>Ample Secure Parking</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" rel="noopener noreferrer" className="btn btn-about-cta">
                <i className="bi bi-calendar3-event btn-icon"></i> Book Site Visit
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="col-lg-6 col-md-12 about-visual-col text-center">
            <div className="about-image-frame-container">
              <div className="about-image-frame wow fadeInRight">
                <img src="/img/gallery/2.jpg" alt="Melabagan Banquets Main Hall" className="about-primary-img" />
                <div className="about-image-overlay-card">
                  <div className="overlay-card-logo">
                    <img src="/img/logo-2.png" alt="Logo" className="overlay-logo-img" />
                  </div>
                  <span className="overlay-card-tag">Premier Venue At</span>
                  <span className="overlay-card-title">Dum Dum, Kolkata</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
