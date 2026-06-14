import React from 'react';
import { siteConfig } from '../config';
import SubpageHeader from '../components/SubpageHeader';

export default function VideoGallery() {
  return (
    <section className="bg-light-gallery no-padding" id="videogallery">
      <SubpageHeader title="Video Gallery" />
      
      <div className="video-gallery-section">
        <div className="container">
          
          {/* Featured Video: Site Walk Through */}
          <div className="video-featured-card">
            <div className="video-featured-header">
              <span className="video-section-subtitle">Featured Video</span>
              <h2 className="video-section-title">{siteConfig.title} Walk Through</h2>
            </div>
            
            <div className="video-iframe-wrapper">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1043938587?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Melabagan Banquets Site Walkthrough"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Grid of secondary videos */}
          <div className="video-grid-row">
            
            {/* Video 1: Drone Footage */}
            <div className="video-grid-card">
              <div className="video-title-bar">
                <span className="video-section-subtitle">Cinematic View</span>
                <h3 className="video-title">Aerial & Drone Footage</h3>
              </div>
              <div className="video-iframe-wrapper">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1043938617?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="Melabagan Banquets Aerial View"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Video 2: Engagement Story */}
            <div className="video-grid-card">
              <div className="video-title-bar">
                <span className="video-section-subtitle">Celebrations</span>
                <h3 className="video-title">Ayush & Meghana Engagement</h3>
              </div>
              <div className="video-iframe-wrapper">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1130382537?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="Ayush & Meghana Engagement Story at Melabagan Banquets"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
