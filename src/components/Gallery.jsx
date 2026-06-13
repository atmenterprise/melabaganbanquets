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
      <div className="container gallery-container">
        {/* Card 1 */}
        <div className="gallery-card" style={{ backgroundImage: "url('/img/gallery/5.jpg')" }}>
          <Link to="/photogallery">
            <div className="gallery-icon">
              <i className="bx bx-photo-album"></i>
            </div>
            <div className="gallery-content">
              <h2>{siteConfig.title} Photo Gallery</h2>
              <br />
              <p>Click to Explore</p>
            </div>
          </Link>
        </div>
        {/* Card 2 */}
        <div className="gallery-card" style={{ backgroundImage: "url('/img/gallery/7.jpg')" }}>
          <Link to="/videogallery">
            <div className="gallery-icon">
              <i className="bx bx-video"></i>
            </div>
            <div className="gallery-content">
              <h2>A Walk Through</h2>
              <br />
              <p>Click to Explore</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
