import React from 'react';
import { siteConfig } from '../config';

export default function FaqContent({ closeModal }) {
  // Helper to handle links inside modal that point to section anchors on home page
  const handleAnchorClick = (e, targetHash) => {
    if (closeModal) {
      closeModal();
    }
    // Let ScrollToHash or default hash anchor behavior handle it after modal closes
    // We navigate to home page + hash if needed, or if already on home page, scroll smoothly.
    if (window.location.pathname !== '/') {
      window.location.href = '/' + targetHash;
    } else {
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="modal-inner-content">
      <h3 className="lead highlight" style={{ marginTop: 0 }}>General Information</h3>
      
      <p className="strong disclaimer-subtitle">
        1. What types of events do you host?
      </p>
      <p>
        {siteConfig.title} hosts a variety of events like Weddings, Wedding Receptions, Birthday events,
        Annaprashan (Baby rice eating ceremony), Anniversaries, corporate events, and many more.
        If you have any unique event requirement, please feel free to{' '}
        <a href="#contact" className="light" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, '#contact'); }}>contact us</a>.
      </p>

      <p className="strong disclaimer-subtitle">
        2. What is the seating capacity of the banquet hall?
      </p>
      <p>
        Our banquet hall can comfortably accommodate for more than 500 guests.
        However, reach out to us with your requirement, and we can suggest and arrange the event accordingly.
      </p>

      <p className="strong disclaimer-subtitle">
        3. How can I check the availability of the hall?
      </p>
      <p>
        You can check availability by calling us at:{' '}
        <a href={`tel:${siteConfig.phone_main}`} className="light">{siteConfig.phone_main}</a>,
        emailing <a href={`mailto:${siteConfig.email}`} className="light">{siteConfig.email}</a>,
        visiting our <a href="#findus" className="light" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, '#findus'); }}>banquet hall location</a>,
        or visiting our website to fill out the inquiry form.
      </p>

      <h3 className="lead highlight">Booking and Payments</h3>
      
      <p className="strong disclaimer-subtitle">
        4. How far in advance should I book the hall?
      </p>
      <p>
        We recommend booking at least 6 to 12 months in advance to secure your preferred date,
        especially during peak seasons.
      </p>

      <p className="strong disclaimer-subtitle">
        5. What is the booking process?
      </p>
      <div style={{ marginBottom: '20px' }}>
        We understand each customer will have its own priorities and requirements to get the event booked.
        In general, to book the venue, a sample process will be as follows:
        <br />
        <br />
        1. Plan your event date. Do a site visit.{' '}
        <a href={siteConfig.calendy_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '5px' }}>
          <i className="bx bx-calendar social-sm"></i> Visit Us Today
        </a>
        <br />
        2. Call or visit us to enquire about the availability and book the venue.
        <br />
        3. Sign the contractual agreement with us.
        <br />
        4. Pay the booking amount.
      </div>

      <p className="strong disclaimer-subtitle">
        6. What is your cancellation policy?
      </p>
      <p>
        Our cancellation policy varies based on the event date.
        Please refer to your contract for specific details or{' '}
        <a href="#contact" className="light" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, '#contact'); }}>contact us</a> for clarification.
      </p>

      <p className="strong disclaimer-subtitle">
        7. What forms of payment do you accept?
      </p>
      <p>
        We accept Credit cards, Bank transfers, UPI, etc.
      </p>

      <h3 className="lead highlight">Amenities and Services</h3>
      
      <p className="strong disclaimer-subtitle">
        8. What amenities are included in the rental?
      </p>
      <p>
        We provide a lot of facilities. Please check out our{' '}
        <a href="#features" className="light" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, '#features'); }}>Key Features gallery</a>{' '}
        to view the list of facilities available.
      </p>

      <p className="strong disclaimer-subtitle">
        9. Do you provide decorations?
      </p>
      <p>
        Yes, our in-house decorator will cater to all your needs and requirements. Please remember, we do not allow
        third-party decorators.
      </p>

      <p className="strong disclaimer-subtitle">
        10. Do you provide catering services?
      </p>
      <p>
        Yes, we offer in-house catering with customizable menus.
        Alternatively, you may bring your own caterer, but additional fees may apply.
      </p>

      <p className="strong disclaimer-subtitle">
        11. Is parking available?
      </p>
      <p>
        Yes, we have car and two-wheeler parking space available for guests.
        We will provide a Valet on the day of the event to ensure that the parking is properly carried out.
      </p>

      <p className="strong disclaimer-subtitle">
        12. How does {siteConfig.title} ensure that the building is in pristine condition before the event?
      </p>
      <p>
        Hosting an event is a big task and requires a lot of time and effort.
        We love hosting our guests, and our team will ensure that the event is a success.
        Our in-house cleaning and service staff will ensure the venue is cleaned and is in pristine condition
        before the event.
      </p>
      <p>
        However, we also encourage our guests to keep our premises clean and not create
        unnecessary trouble that may affect the event and its guests. The event security deposit will also have an impact
        in case of unnecessary damages to properties.
      </p>

      <p className="strong disclaimer-subtitle">
        13. Can we have our own songs playlist?
      </p>
      <p>
        Yes, absolutely. We have in-house speakers available. Please bring your songs on pen-drive and share it with us.
        Alternatively, we also have some songs in English, Hindi and Classical genre.
      </p>

      <h3 className="lead highlight">Miscellaneous</h3>
      
      <p className="strong disclaimer-subtitle">
        14. Is the venue wheelchair accessible?
      </p>
      <p>
        Yes, our venue is both old-aged and wheelchair friendly.
      </p>

      <p className="strong disclaimer-subtitle">
        15. Is Alcohol allowed?
      </p>
      <div className="feature-icon" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <img src="/img/icons/no-alcohol.png" className="wow pulse" alt="no-alcohol-icon" style={{ width: '60px' }} />
        <p style={{ margin: 0 }}>
          No. It is an <strong>ALCOHOL-FREE</strong> venue and is strictly prohibited within the venue premises.
        </p>
      </div>

      <p className="strong disclaimer-subtitle">
        16. Is Smoking allowed?
      </p>
      <div className="feature-icon" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <img src="/img/icons/no-smoking.png" className="wow pulse" alt="no-smoking-icon" style={{ width: '60px' }} />
        <p style={{ margin: 0 }}>
          No. Smoking cigarettes and e-cigarettes is strictly not allowed.
        </p>
      </div>

      <p className="strong disclaimer-subtitle">
        17. Is Wi-Fi available for guests?
      </p>
      <div className="feature-icon" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <img src="/img/icons/wifi.png" className="wow pulse" alt="wifi-icon" style={{ width: '60px' }} />
        <p style={{ margin: 0 }}>
          Yes a complimentary WiFi is available to limited selected guests throughout the venue.
          Please note, the venue also has strong cellular network connection to ensure 4G/5G data network is easily available.
        </p>
      </div>
    </div>
  );
}
