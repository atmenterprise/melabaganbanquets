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
                <h1 className="header-title">Melabagan Banquets</h1>
                <h2 className="brand-subtext-highlight">
                  <i>... where luxury meets celebration</i>
                </h2>
                <h4 className="brand-description">
                  A brand new banquet hall in the heart of Dum Dum, Kolkata. <br />
                  Come and Celebrate <span className={`change-text-loop ${fadeClass}`}>{celebrationTypes[currentWordIndex]}</span> with us.
                </h4>
                
                <div className="header-divider-container">
                  <img src="/img/divider.png" alt="divider" className="header-divider-img" />
                </div>

                <div className="header-actions">
                  <a href={`tel:${siteConfig.phone_main}`} target="_blank" rel="noopener noreferrer" className="btn btn-header-primary btn-md booknow-btn">
                    <i className="bx bxs-phone-call socialicon-sm">
                      <span className="socialicon-sm-text strong"> {siteConfig.phone_main} / {siteConfig.phone_alt}</span>
                    </i>
                  </a>
                  
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-header-secondary socialicon-xsm" target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-envelope socialicon-sm">
                      <span className="socialicon-sm-text"> {siteConfig.email}</span>
                    </i>
                  </a>
                  
                  <a href={siteConfig.calendy_url} className="btn btn-header-secondary socialicon-xsm" target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-calendar socialicon-sm">
                      <span className="socialicon-sm-text"> BOOK A TOUR</span>
                    </i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Video Card */}
            <div className="header-content-col header-video">
              <div className="header-video-frame wow slideInRight">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1130382537?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Ayush & Meghana Engagement Story at Melabagan Banquets"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
