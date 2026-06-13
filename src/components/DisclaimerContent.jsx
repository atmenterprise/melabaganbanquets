import React from 'react';
import { siteConfig } from '../config';

export default function DisclaimerContent() {
  return (
    <div className="modal-inner-content">
      <p className="strong disclaimer-subtitle">General Information</p>
      <p>
        {siteConfig.title.toUpperCase()} provides facilities for events such as weddings, receptions, birthdays, corporate
        gatherings, business meetings, and other social or formal events. By accessing or using our services,
        you acknowledge and agree to the terms outlined below.
      </p>
      
      <p className="strong disclaimer-subtitle">Booking and Availability</p>
      <p>
        All bookings are subject to availability and are confirmed only after receipt of a signed agreement and
        applicable advance payment. The management reserves the right to prioritize bookings or deny services in
        case of any discrepancy, unforeseen circumstances, or non-compliance with the terms and conditions.
      </p>
      
      <p className="strong disclaimer-subtitle">Pricing and Payment</p>
      <p>
        Prices for our services and facilities may vary based on requirements, seasonality, and other factors.
        Any changes to pricing or taxes are at the discretion of {siteConfig.title.toUpperCase()}. Payments once made are
        non-refundable, except in cases explicitly agreed upon in writing by the management.
      </p>
      
      <p className="strong disclaimer-subtitle">Event Responsibility</p>
      <p>
        Clients are solely responsible for the planning, organization, and execution of their events within the
        premises. {siteConfig.title.toUpperCase()} shall not be held liable for any personal injury, property damage, theft, or
        loss of items during the event. Clients must ensure all activities comply with Indian laws, including noise
        and public safety regulations.
      </p>
      
      <p className="strong disclaimer-subtitle">Force Majeure</p>
      <p>
        {siteConfig.title.toUpperCase()} shall not be liable for any cancellation, delay, or disruption caused by events beyond our
        control, such as natural disasters, strikes, governmental restrictions, or other force majeure circumstances.
      </p>
      
      <p className="strong disclaimer-subtitle">Third-Party Services</p>
      <p>
        We may recommend or facilitate third-party services (e.g., caterers, decorators, photographers). However,
        {siteConfig.title.toUpperCase()} does not take responsibility for the quality, reliability, or disputes arising
        from such services. Clients are encouraged to coordinate directly with third-party providers.
      </p>
      
      <p className="strong disclaimer-subtitle">Property Damage</p>
      <p>
        Clients are expected to maintain the premises in its original condition. Any damage caused to the property
        during the event will result in additional charges, determined by the management.
      </p>

      <p className="strong disclaimer-subtitle">Copyright Disclaimer for Images and Videos</p>
      <p>
        All images and videos featured on this website are protected by copyright law. They are the exclusive property
        of {siteConfig.title.toUpperCase()} or have been used with appropriate licenses from third-party sources.
      </p>
      <p>
        <i className="bx bxs-square social-sm"></i> Ownership: Any original media created by {siteConfig.title.toUpperCase()} remains the intellectual property of the company. <br />
        <i className="bx bxs-square social-sm"></i> Third-Party Media: Media from third parties is used under applicable licensing agreements and may not be copied,
        reproduced, or redistributed without the copyright holder’s consent. <br />
      </p>
      <p>
        If you believe any content on this website infringes copyright or requires additional attribution,
        please contact us at <a href={`mailto:${siteConfig.email}`} className="light">{siteConfig.email}</a>.
      </p>

      <p className="strong disclaimer-subtitle">Images and Icons Disclaimer</p>
      <p>
        The content, images, and videos displayed on the {siteConfig.title.toUpperCase()}{' '}
        website are either original works or licensed for use. Unauthorized copying, redistribution, or
        reproduction of these images and videos in any form without prior written consent from {siteConfig.title.toUpperCase()}{' '}
        is strictly prohibited.
        <br />
        <br />
        The header bridal image shot is downloaded from Unsplash on Free License usage and is credited to:{' '}
        <strong>Marcus Lewis on Unsplash</strong>
        <br />
        The link to the image on Unsplash is:{' '}
        <a
          href="https://unsplash.com/photos/black-mendhi-tattoo-OJ6LOiMcQ5k?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          target="_blank"
          rel="noopener noreferrer"
          className="light"
        >
          https://unsplash.com/photos/black-mendhi-tattoo-OJ6LOiMcQ5k?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash
        </a>
        <br />
        <br />
        This website uses icons sourced from Flaticon.com under their respective licenses. Attribution for these icons is as follows:
        <br />
      </p>
      <ul>
        <li><a href="https://www.flaticon.com/free-icons/wedding" title="wedding icons" target="_blank" rel="noopener noreferrer" className="light">Wedding icons created by Siipkan Creative - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/contioner" title="contioner icons" target="_blank" rel="noopener noreferrer" className="light">Contioner icons created by CapVora - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/old-people" title="old-people icons" target="_blank" rel="noopener noreferrer" className="light">Old-people icons created by Vector Stall - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/christmas" title="christmas icons" target="_blank" rel="noopener noreferrer" className="light">Christmas icons created by Aranagraphics - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/burger" title="burger icons" target="_blank" rel="noopener noreferrer" className="light">Burger icons created by Smashicons - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/parking-sign" title="parking sign icons" target="_blank" rel="noopener noreferrer" className="light">Parking sign icons created by SyafriStudio - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/security-camera" title="security camera icons" target="_blank" rel="noopener noreferrer" className="light">Security camera icons created by Muhammad Atif - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/room" title="room icons" target="_blank" rel="noopener noreferrer" className="light">Room icons created by Becris - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/cleaning" title="cleaning icons" target="_blank" rel="noopener noreferrer" className="light">Cleaning icons created by monkik - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/restroom" title="restroom icons" target="_blank" rel="noopener noreferrer" className="light">Restroom icons created by Freepik - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/no-alcohol" title="no alcohol icons" target="_blank" rel="noopener noreferrer" className="light">No alcohol icons created by Vectors Market - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/smoke" title="smoke icons" target="_blank" rel="noopener noreferrer" className="light">Smoke icons created by Freepik - Flaticon</a></li>
        <li><a href="https://www.flaticon.com/free-icons/grass" title="grass icons" target="_blank" rel="noopener noreferrer" className="light">Grass icons created by kornkun - Flaticon</a></li>
      </ul>
      <p>
        Icons provided by Flaticon are used under their licensing terms.
        If you believe any content on this website infringes copyright or requires additional attribution,
        please contact us at <a href={`mailto:${siteConfig.email}`} className="light">{siteConfig.email}</a>.
      </p>
      
      <p className="strong disclaimer-subtitle">Changes and Modifications</p>
      <p>
        The management reserves the right to amend the terms, conditions, and policies at any time without prior
        notice. Users and customers are advised to regularly review this disclaimer and the terms of service on
        our website.
      </p>
      <p>
        By proceeding with a booking or using our services, you agree to comply with the above terms and any
        additional conditions provided at the time of booking. For further details, please contact our management team.
      </p>
      
      <p className="strong disclaimer-subtitle">Contact Us</p>
      <p>
        For queries or concerns, please reach out to us via Email (<a href={`mailto:${siteConfig.email}`} className="light">{siteConfig.email}</a>) or via Phone ({siteConfig.phone_main}).
      </p>
    </div>
  );
}
