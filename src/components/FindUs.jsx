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
        <div className="findus-row">
          <div className="findus-column">
            <h3 className="lead text-center">Address</h3>
            <p className="text-center">
              426/1 & 426/2 Dum Dum Road,<br />
              Melabagan Estate, Bagjolla, <br />
              Dum Dum, Kolkata - 700 074<br />
              West Bengal, <br />
              India<br />
            </p>
          </div>
          <div className="findus-column">
            <h3 className="lead text-center">Get Direction</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.9109401911114!2d88.40282663135095!3d22.62079252419505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f8a6db3f815%3A0x40441d6d4ffdb791!2sMelabagan%20Banquets!5e1!3m2!1sen!2sin!4v1735134277661!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Melabagan Banquets Location Map"
            ></iframe>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="lead">Local Area Information</h3>
          </div>
        </div>

        <div className="findus-row">
          <div className="findus-column">
            <ul>
              <li>
                <box-icon type="solid" name="church" class="icons-light"></box-icon>
                <span>Hindu Temple: Within the premises</span>
              </li>
              <li>
                <box-icon type="solid" name="train" class="icons-light"></box-icon>
                <span>Dum Dum Train Station: 5 - 10 minutes by Local Transportation</span>
              </li>
              <li>
                <box-icon type="solid" name="bus" class="icons-light"></box-icon>
                <span>Dum Dum Chattakol Bus Stop: 2 minutes walk</span>
              </li>
              <li>
                <box-icon type="solid" name="plane-alt" class="icons-light"></box-icon>
                <span>Netaji Subhash Chandra Bose International Airport: 20 - 30 minutes by car</span>
              </li>
            </ul>
          </div>
          <div className="findus-column">
            <ul>
              <li>
                <box-icon type="solid" name="store-alt" class="icons-light"></box-icon>
                <span>Dum Dum Zudio fashion mall: Opposite the venue.</span>
              </li>
              <li>
                <box-icon type="solid" name="store-alt" class="icons-light"></box-icon>
                <span>PVR Diamond Plaza Mall: 10 minutes by Local Transportation</span>
              </li>
              <li>
                <box-icon name="plus-medical" class="icons-light"></box-icon>
                <span>ILS Hospital, Dum Dum Nagerbazar branch: 5 - 10 minutes</span>
              </li>
              <li>
                <box-icon name="capsule" type="solid" class="icons-light"></box-icon>
                <span>Pharmacy: Within walking distance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
