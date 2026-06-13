import React, { useEffect } from 'react';
import { siteConfig } from '../config';

export default function GalleryInstagram() {
  useEffect(() => {
    // Dynamically load tagembed script to ensure it renders correctly on SPA page changes
    const script = document.createElement('script');
    script.src = 'https://widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Check if script is already present
    const existingScript = document.querySelector('script[src="https://widget.tagembed.com/embed.min.js"]');
    if (!existingScript) {
      document.body.appendChild(script);
    } else {
      // If script exists, we re-trigger tagembed loading
      try {
        if (window.Tagembed && typeof window.Tagembed.init === 'function') {
          window.Tagembed.init();
        }
      } catch (e) {
        console.error('Tagembed re-init failed:', e);
      }
    }
  }, []);

  return (
    <section id="gallery-insta" className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">
              Share your moments with us{' '}
              <a href={siteConfig.instagram_url} target="_blank" rel="noopener noreferrer" className="light">
                @melabaganbanquets
              </a>{' '}
              on <i className="bi bi-instagram"></i>
            </h2>
            <h4 className="text-muted">
              Tag us:{' '}
              <a href={siteConfig.instagram_url} target="_blank" rel="noopener noreferrer" className="light">
                #melabaganbanquets
              </a>
            </h4>

            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
          </div>
        </div>
      </div>
      <div className="container gallery-container">
        <div
          className="tagembed-widget"
          style={{ width: '100%', height: '100%' }}
          data-widget-id="2147071"
          data-tags="false"
          view-url="https://widget.tagembed.com/2147071"
        ></div>
      </div>
      <h4></h4>
      <h4 className="text-center">
        <a href={siteConfig.instagram_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm page-scroll">
          <i className="bi bi-instagram social-sm"></i> Follow us on Instagram
        </a>
      </h4>
    </section>
  );
}
