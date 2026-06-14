import React from 'react';
import { siteConfig } from '../config';

export default function About() {
  return (
    <section className="about-section bg-primary" id="about">
      <div className="container">
        <div className="row about-row">
          
          {/* Left Column: Story & Actions */}
          <div className="col-lg-6 col-md-12 about-content-col">
            <span className="about-subtitle">Welcome to</span>
            <h2 className="about-title">{siteConfig.title}</h2>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
            
            <p className="about-lead-text">
              Launched in January 2025 onwards, {siteConfig.title} is Dum Dum's newest and most prestigious venue, crafted to host your grandest celebrations and lifetime milestones!
            </p>
            
            <p className="about-body-text">
              Strategically located opposite the Zudio fashion mall on Dum Dum Road (just 10 minutes from the metro/train stations and 20 minutes from the airport), our venue offers the perfect blend of modern luxury and unparalleled convenience.
            </p>

            <p className="about-body-text">
              Featuring a massive 8,000+ sq. ft. fully air-conditioned indoor banquet hall and an adjacent sprawling green lawn, we comfortably host gatherings of up to 500+ guests. Our state-of-the-art facilities also include private rooms, a serene temple complex, and a spacious valet drop-off portico.
            </p>

            <div className="about-actions" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '35px' }}>
              <a href="#contact" rel="noopener noreferrer" className="btn btn-about-cta">
                <i className="bi bi-calendar3-event btn-icon"></i> Book Site Visit
              </a>
              <a href="#features" className="btn btn-about-cta-secondary">
                <i className="bi bi-list-stars btn-icon"></i> View Banquet Features
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame & Services Grid */}
          <div className="col-lg-6 col-md-12 about-visual-col flex-column">
            
            {/* Visual Showcase Frame */}
            <div className="about-image-frame-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-image-frame wow fadeInRight" style={{ margin: '0 auto' }}>
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

            {/* Premium Services Grid */}
            <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
              <h3 className="about-services-heading" style={{ marginTop: '10px' }}>Our Premium Services</h3>
              <div className="about-services-grid" style={{ marginBottom: '0' }}>
                <div className="about-service-item">
                  <i className="bi bi-heart-fill about-service-icon"></i>
                  <div className="about-service-content">
                    <h4 className="about-service-title">Weddings & Receptions</h4>
                    <p className="about-service-desc">Complete space and logistics support for pre-wedding rituals, pheras, sangeet, and grand wedding receptions.</p>
                  </div>
                </div>
                <div className="about-service-item">
                  <i className="bi bi-people-fill about-service-icon"></i>
                  <div className="about-service-content">
                    <h4 className="about-service-title">Social Gatherings</h4>
                    <p className="about-service-desc">Perfect venue for birthday parties, wedding anniversaries, thread ceremonies, and family get-togethers.</p>
                  </div>
                </div>
                <div className="about-service-item">
                  <i className="bi bi-building about-service-icon"></i>
                  <div className="about-service-content">
                    <h4 className="about-service-title">Corporate Events</h4>
                    <p className="about-service-desc">Professional corporate setups for business meetings, conferences, seminars, product launches, and annual banquets.</p>
                  </div>
                </div>
                <div className="about-service-item">
                  <i className="bi bi-stars about-service-icon"></i>
                  <div className="about-service-content">
                    <h4 className="about-service-title">Decor & Catering</h4>
                    <p className="about-service-desc">Stunning in-house decoration styling coupled with custom gourmet multi-cuisine catering solutions.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
