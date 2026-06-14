import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Experience the Magic of Melabagan Banquets</h2>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="gallery-showcase-grid">
          
          {/* Card 1: Photo Gallery */}
          <div className="gallery-card">
            <div className="gallery-card-bg" style={{ backgroundImage: "url('/img/gallery/5.jpg')" }}></div>
            <Link to="/photogallery" className="gallery-card-link">
              <div className="gallery-icon-wrapper">
                <i className="bi bi-images"></i>
              </div>
              <div className="gallery-card-content">
                <span className="gallery-card-tag">Visual Tour</span>
                <h3 className="gallery-card-title">{siteConfig.title} Photo Gallery</h3>
                <span className="gallery-card-action">
                  Explore Collection <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>

          {/* Card 2: Video Gallery */}
          <div className="gallery-card">
            <div className="gallery-card-bg" style={{ backgroundImage: "url('/img/gallery/7.jpg')" }}></div>
            <Link to="/videogallery" className="gallery-card-link">
              <div className="gallery-icon-wrapper">
                <i className="bi bi-play-btn-fill"></i>
              </div>
              <div className="gallery-card-content">
                <span className="gallery-card-tag">Cinematic Tour</span>
                <h3 className="gallery-card-title">{siteConfig.title} Walk Through</h3>
                <span className="gallery-card-action">
                  Play Showcase <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
