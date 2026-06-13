import React from 'react';
import { siteConfig } from '../config';

export default function About() {
  return (
    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">{siteConfig.title}</h2>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
            <p>
              Welcome to {siteConfig.title}, Dum Dum's newest and most luxurious venue for celebrations and events!
              Strategically located just 10 minutes away from the airport and opposite the Dum Dum Zudio fashion mall on Dum Dum Road,
              {siteConfig.title} is designed to make your special occasions truly unforgettable.
            </p>
            <p>
              With a sprawling lawn, a massive air-conditioned hall, and the capacity to host over 500 guests,
              we are the perfect choice for weddings, receptions, corporate events, conferences, seminars, birthday parties, and more.
              Our venue boasts modern amenities, including ample in-house parking, a serene temple complex, well-appointed private rooms for your comfort,
              and top-notch facilities to meet all your event needs.
            </p>
            <p>
              Whether you're planning an elegant wedding, a milestone celebration, or a business gathering,
              {siteConfig.title} offers the perfect blend of sophistication and convenience. Let us help you create memories that last a lifetime!
            </p>
            <p className="strong">
              {siteConfig.title} – Where luxury meets celebration.
            </p>
            <a href={siteConfig.calendy_url} target="_blank" rel="noopener noreferrer" className="btn btn-default btn-xl">
              <i className="bx bx-calendar social-sm"></i> Meet us today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
