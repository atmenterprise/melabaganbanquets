import React from 'react';
import { siteConfig } from '../config';
import SubpageHeader from '../components/SubpageHeader';

export default function VideoGallery() {
  return (
    <section className="bg-dark no-padding" id="videogallery">
      <SubpageHeader title="Video Gallery" />
      <div className="container" style={{ padding: '50px 15px' }}>
        <div className="row flex-lg-row-reverse disclaimer-row">
          
          <p className="strong disclaimer-subtitle">
            {siteConfig.title} Walk Through
          </p>
          <div style={{ marginBottom: '40px' }}>
            <iframe
              src="https://player.vimeo.com/video/1043938587?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              width="848"
              height="478"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Melabagan Banquets Site Walkthrough"
              style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
            ></iframe>
          </div>

          <p className="strong disclaimer-subtitle">
            {siteConfig.title} Aerial Footage (Drone Footage)
          </p>
          <div style={{ marginBottom: '40px' }}>
            <iframe
              src="https://player.vimeo.com/video/1043938617?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              width="848"
              height="478"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Melabagan Banquets Aerial View"
              style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
            ></iframe>
          </div>

          <p className="strong disclaimer-subtitle">
            Client Engagement Story at Melabagan Banquets: Ayush & Meghana
          </p>
          <div style={{ marginBottom: '40px' }}>
            <iframe
              src="https://player.vimeo.com/video/1130382537?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              width="848"
              height="478"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Ayush & Meghana Engagement Story at Melabagan Banquets"
              style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
