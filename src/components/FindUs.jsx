import React from 'react';
import { siteConfig } from '../config';

export default function FindUs() {
  return (
    <section className="bg-primary" id="findus">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading highlight">Reach Us</h2>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
          </div>
        </div>
      </div>
      
      <div className="container">
        {/* Reach Us cards grid */}
        <div className="reachus-grid">
          
          {/* Card 1: Our Address */}
          <div className="reachus-card reachus-address-card">
            <div className="reachus-card-header">
              <i className="bi bi-geo-alt-fill reachus-header-icon"></i>
              <h3 className="reachus-card-title">Our Address</h3>
            </div>
            <p className="reachus-address-text">
              426/1 & 426/2 Dum Dum Road,<br />
              Melabagan Estate, Bagjolla, <br />
              Dum Dum, Kolkata - 700 074<br />
              West Bengal, India
            </p>
            <div className="reachus-quick-contacts">
              <a href={`tel:${siteConfig.phone_main}`} className="reachus-contact-link">
                <i className="bi bi-telephone-fill"></i> {siteConfig.phone_main} / {siteConfig.phone_alt}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="reachus-contact-link">
                <i className="bi bi-envelope-fill"></i> {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Direction Map */}
          <div className="reachus-card reachus-map-card">
            <div className="reachus-card-header">
              <i className="bi bi-map-fill reachus-header-icon"></i>
              <h3 className="reachus-card-title">Get Direction</h3>
            </div>
            <div className="reachus-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.9109401911114!2d88.40282663135095!3d22.62079252419505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f8a6db3f815%3A0x40441d6d4ffdb791!2sMelabagan%20Banquets!5e1!3m2!1sen!2sin!4v1735134277661!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Melabagan Banquets Location Map"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Local Area Information title */}
        <div className="proximity-section-header text-center">
          <h3 className="proximity-title">Local Area Information</h3>
          <div className="proximity-divider"></div>
        </div>

        {/* Proximity lists cards */}
        <div className="proximity-row">
          
          {/* Proximity Card 1 */}
          <div className="proximity-card">
            <ul className="proximity-list">
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-bank"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">Hindu Temple</span>
                  <span className="proximity-detail">Within the premises</span>
                </div>
              </li>
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-train-front"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">Dum Dum Train Station</span>
                  <span className="proximity-detail">5 - 10 minutes by Local Transportation</span>
                </div>
              </li>
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-bus-front"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">Dum Dum Chattakol Bus Stop</span>
                  <span className="proximity-detail">2 minutes walk</span>
                </div>
              </li>
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-airplane"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">Netaji Subhash Chandra Bose International Airport</span>
                  <span className="proximity-detail">20 - 30 minutes by car</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Proximity Card 2 */}
          <div className="proximity-card">
            <ul className="proximity-list">
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-bag-heart"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">Dum Dum Zudio fashion mall</span>
                  <span className="proximity-detail">Opposite the venue.</span>
                </div>
              </li>
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-film"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">PVR Diamond Plaza Mall</span>
                  <span className="proximity-detail">10 minutes by Local Transportation</span>
                </div>
              </li>
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">ILS Hospital, Dum Dum Nagerbazar branch</span>
                  <span className="proximity-detail">5 - 10 minutes</span>
                </div>
              </li>
              <li>
                <div className="proximity-icon-box">
                  <i className="bi bi-capsule"></i>
                </div>
                <div className="proximity-text">
                  <span className="proximity-label">Pharmacy</span>
                  <span className="proximity-detail">Within walking distance</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
