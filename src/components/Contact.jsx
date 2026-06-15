import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState('form');

  return (
    <section className="bg-dark" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading highlight">Contact</h2>
            <h4 className="text-muted">We're here to help you</h4>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact-row">
          <div className="contact-column contact-info-cards-col">
            <h4 className="lead highlight contact-info-title">Connect Instantly</h4>
            <p className="contact-info-intro">
              Have questions or want to discuss your event details? Reach out to us via any of our instant contact channels below:
            </p>
            
            <div className="contact-quick-cards">
              <a href={`tel:${siteConfig.phone_main}`} className="quick-card">
                <div className="quick-card-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="quick-card-details">
                  <h5>Call Main Line</h5>
                  <p>{siteConfig.phone_main}</p>
                </div>
              </a>

              <a href={`tel:${siteConfig.phone_alt}`} className="quick-card">
                <div className="quick-card-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="quick-card-details">
                  <h5>Call Alternate Line</h5>
                  <p>{siteConfig.phone_alt}</p>
                </div>
              </a>

              <a href={siteConfig.whatsapp_url} target="_blank" rel="noopener noreferrer" className="quick-card whatsapp-card">
                <div className="quick-card-icon">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div className="quick-card-details">
                  <h5>WhatsApp Chat</h5>
                  <p>Message our team instantly</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="quick-card">
                <div className="quick-card-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="quick-card-details">
                  <h5>Email Inquiry</h5>
                  <p>{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-column">
            {/* Elegant tabs header */}
            <div className="contact-tabs-header">
              <button
                type="button"
                className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
                onClick={() => setActiveTab('form')}
              >
                <i className="bx bx-envelope"></i> Send Enquiry
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'visit' ? 'active' : ''}`}
                onClick={() => setActiveTab('visit')}
              >
                <i className="bx bx-calendar"></i> Book Site Tour
              </button>
            </div>

            <div className="contact-card-container">
              <div className="contact-card">
                {activeTab === 'form' ? (
                  <div className="tab-pane form-pane">
                    <form action={siteConfig.formspree_url} method="POST">
                      <label>
                        <h5>Name<span className="text-italic">(required)</span></h5>
                        <input type="text" name="name" placeholder="your first and last name" required />
                      </label>
                      <label>
                        <h5>Phone Number<span className="text-italic">(required)</span></h5>
                        <input type="text" name="phone" placeholder="+91 " required />
                      </label>
                      <label>
                        <h5>Email<span className="text-italic">(required)</span></h5>
                        <input type="email" name="email" placeholder="your@email.com" required />
                      </label>
                      <label>
                        <h5>Your Message</h5>
                        <textarea name="message" placeholder="what's on your mind?"></textarea>
                      </label>
                      <button type="submit" className="btn btn-primary btn-xl">
                        <i className="bx bx-send social-sm"></i> Submit
                      </button>
                    </form>
                    <p className="small form-disclaimer">
                      By Clicking on the Submit button, you are agreeing to sharing your name, phone and email with{' '}
                      {siteConfig.title}. Read More on our privacy and data protection policies{' '}
                      <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }} className="light">here</a>.
                    </p>
                  </div>
                ) : (
                  <div className="tab-pane visit-pane">
                    <iframe
                      src="https://calendly.com/admin-melabaganbanquets/schedule?embed_domain=melabaganbanquets.com&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Schedule site visit"
                      className="calendly-iframe-integrated"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
