import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const { openModal } = useModal();
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
          <div className="contact-column">
            <p>
              Thank you for considering {siteConfig.title} to be part of your special occasion!
            </p>
            <p>
              Whether you’re planning a wedding, reception, corporate event, or unique celebration, we’re here to help bring your vision to life.
              Please fill out our form with your contact info, and our team will get back to you as soon as possible.
            </p>

            <p>
              <a href={siteConfig.calendy_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-xl">
                <i className="bx bx-calendar social-sm"></i>
                Book a Site Tour
              </a>
            </p>
            <br />
            <h4 className="lead highlight">Contact Information</h4>
            <hr />
            <br />
            <p>
              Call or Text: {siteConfig.phone_main} / {siteConfig.phone_alt}
            </p>
            <p>
              Email: <a href={`mailto:${siteConfig.email}`} className="light">{siteConfig.email}</a>
            </p>
          </div>
          <div className="contact-column">
            <h4 className="lead highlight contact-form-title">Contact Form</h4>
            <hr className="contact-form-title" />
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
            <br />
            <p className="small">
              By Clicking on the Submit button, you are agreeing to sharing your name, phone and email with{' '}
              {siteConfig.title}. Read More on our privacy and data protection policies{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }} className="light">here</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
