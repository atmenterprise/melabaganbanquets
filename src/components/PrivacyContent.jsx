import React from 'react';
import { siteConfig } from '../config';

export default function PrivacyContent() {
  return (
    <div className="modal-inner-content">
      <p className="strong disclaimer-subtitle">Effective Date: January 01, 2025</p>
      <p>
        {siteConfig.title.toUpperCase()} values your trust and is committed to protecting your privacy.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit
        our website and use our services. By accessing our website, you agree to the terms of this Privacy Policy.
      </p>
      
      <p className="strong disclaimer-subtitle">1. Information We Collect</p>
      <p>We collect information from you when you interact with our website or use our services:</p>
      
      <p><i className="bx bxs-square social-sm"></i> Personal Information:</p>
      <p>
        Name, email address, phone number, and other contact details submitted through third-party applications such
        as Calendly (for booking requests) and Formspree.io (for feedback and inquiries).
        Details related to your event, such as date, type, and number of attendees, if provided during booking or inquiries.
      </p>
      
      <p><i className="bx bxs-square social-sm"></i> Non-Personal Information:</p>
      <p>
        Usage data such as IP address, browser type, pages visited, time spent on the site, and other analytics data
        collected via Google Analytics.
      </p>

      <p className="strong disclaimer-subtitle">2. How We Use Your Information</p>
      <p>
        We use the information collected to:
        <br />
        <br />
        <i className="bx bxs-square social-sm"></i> Process booking requests and respond to inquiries. <br />
        <i className="bx bxs-square social-sm"></i> Provide and improve our services and user experience. <br />
        <i className="bx bxs-square social-sm"></i> Track website performance, usage trends, and traffic statistics. <br />
        <i className="bx bxs-square social-sm"></i> Communicate updates, offers, and other relevant information (with your consent).
      </p>

      <p className="strong disclaimer-subtitle">3. Third-Party Services</p>
      <p>
        We integrate third-party applications on our website for enhanced functionality:
        <br />
        <br />
        <i className="bx bxs-square social-sm"></i> Calendly: Used to manage booking requests.<br />
        <i className="bx bxs-square social-sm"></i> Formspree.io: Facilitates contact and feedback submissions.<br />
        <i className="bx bxs-square social-sm"></i> Google Analytics: Tracks website traffic and usage patterns.<br />
        <br />
        These services may collect and process data as per their privacy policies. We encourage users to review their policies:
        <br />
        <i className="bx bxs-square social-sm"></i>{' '}
        <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="light">
          Calendly Privacy Policy
        </a>
        <br />
        <i className="bx bxs-square social-sm"></i>{' '}
        <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="light">
          Formspree.io Privacy Policy
        </a>
        <br />
        <i className="bx bxs-square social-sm"></i>{' '}
        <a href="https://support.google.com/analytics/answer/7318509?hl=en" target="_blank" rel="noopener noreferrer" className="light">
          Google Analytics Privacy Policy
        </a>
      </p>

      <p className="strong disclaimer-subtitle">4. Data Protection and Security</p>
      <p>
        {siteConfig.title.toUpperCase()} employs appropriate technical and organizational measures to protect your personal
        information from unauthorized access, alteration, disclosure, or destruction.
        <br />
        <br />
        Measures Include:
        <br />
        <br />
        <i className="bx bxs-square social-sm"></i> SSL encryption for secure transmission of data.<br />
        <i className="bx bxs-square social-sm"></i> Restricted access to personal data to authorized personnel only.<br />
        <i className="bx bxs-square social-sm"></i> Regular monitoring of systems for vulnerabilities.<br />
      </p>

      <p className="strong disclaimer-subtitle">5. Data Sharing and Disclosure</p>
      <p>
        We do not sell, trade, or rent your personal information to third parties. However, we may share information:
        <br />
        <br />
        <i className="bx bxs-square social-sm"></i> Service Providers: With trusted third parties such as caterers, decorators, and technical support teams to facilitate your event.<br />
        <i className="bx bxs-square social-sm"></i> Legal Obligations: If required by law, government request, or to protect the rights and safety of MELABAGAN BANQUETS or its customers.<br />
        <i className="bx bxs-square social-sm"></i> With trusted third-party service providers (e.g., Calendly, Formspree.io, Google Analytics) to facilitate the functionality of our website.<br />
        <i className="bx bxs-square social-sm"></i> To protect our rights, safety, or property.<br />
      </p>

      <p className="strong disclaimer-subtitle">6. Your Rights</p>
      <p>
        You have the following rights regarding your personal data:
        <br />
        <br />
        <i className="bx bxs-square social-sm"></i> Access: Request a copy of the information we hold about you.<br />
        <i className="bx bxs-square social-sm"></i> Correction: Request correction of any inaccurate or incomplete data.<br />
        <i className="bx bxs-square social-sm"></i> Deletion: Request deletion of your personal data, subject to legal or contractual obligations.<br />
        <i className="bx bxs-square social-sm"></i> Opt-Out: Withdraw consent for marketing communications at any time by contacting us.<br />
      </p>

      <p className="strong disclaimer-subtitle">7. Cookies and Tracking Technologies</p>
      <p>
        Our website uses cookies to enhance user experience and track usage through Google Analytics.
        You can manage or disable cookies through your browser settings. However, this may impact the functionality
        of certain features on our website.
      </p>

      <p className="strong disclaimer-subtitle">8. Changes to This Privacy Policy</p>
      <p>
        We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or
        applicable regulations. Users are encouraged to review this page periodically for updates.
      </p>

      <p className="strong disclaimer-subtitle">9. Contact Us</p>
      <p>
        For any questions, concerns, or requests regarding this Privacy Policy or your data,
        please contact us via Email (<a href={`mailto:${siteConfig.email}`} className="light">{siteConfig.email}</a>) or via Phone ({siteConfig.phone_main}).
      </p>
    </div>
  );
}
