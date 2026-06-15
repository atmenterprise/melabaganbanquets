import React, { useState } from 'react';
import GalleryInstagram from '../components/GalleryInstagram';
import SubpageHeader from '../components/SubpageHeader';

export default function PhotoGallery() {
  const [popupImage, setPopupImage] = useState(null);

  const images = [
    {
      "src": "/img/gallery/1.jpg",
      "title": "Grand Entrance Neon Sign",
      "description": "A vibrant neon signboard welcoming you to Melabagan Banquet, setting a bright, celebratory, and modern tone right at our main entrance."
    },
    {
      "src": "/img/gallery/2.jpg",
      "title": "Sacred Ganesha Welcome",
      "description": "An elegant and beautifully adorned Ganesha idol greets every guest upon arrival, bringing traditional blessings and positive energy to your auspicious day."
    },
    {
      "src": "/img/gallery/3.jpg",
      "title": "Custom Food Stall Layouts",
      "description": "Explore premium catering setups tailored to your taste. At Melabagan Banquet, hosts can customize their own food stall designs and thematic layouts."
    },
    {
      "src": "/img/gallery/4.jpg",
      "title": "Sprawling Open-Air Lawn",
      "description": "Step outdoors into our lush green garden area, perfect for scenic wedding mandaps, vibrant buffet tables, live food stalls, and evening stardust socializing."
    },
    {
      "src": "/img/gallery/5.jpg",
      "title": "Majestic Banquet Hall View",
      "description": "A grand perspective of our indoor hall, showcasing expansive interiors, high ceilings, and premium lighting options designed for large gatherings."
    },
    {
      "src": "/img/gallery/6.jpg",
      "title": "Premium Indoor Ambiance",
      "description": "Another stunning look inside the banquet hall, highlighting versatile seating arrangements and customizable mood lighting to match your event's theme."
    },
    {
      "src": "/img/gallery/7.jpg",
      "title": "Grand Entrance Decor",
      "description": "A sample of our magnificent entrance styling, curated by expert decorators to give your guests a truly royal and memorable welcome to Melabagan."
    },
    {
      "src": "/img/gallery/8.jpg",
      "title": "Lawn Live Kitchen Spaces",
      "description": "Our open lawn features dedicated, spacious areas for live food counters and interactive stalls, blending outdoor fresh-air dining with exceptional catering."
    },
    {
      "src": "/img/gallery/9.jpg",
      "title": "Instagram-Friendly Photo Zone",
      "description": "A beautifully curated, picture-perfect backdrop designed specifically for selfie lovers and photography enthusiasts to capture unforgettable moments."
    },
    {
      "src": "/img/gallery/10.jpg",
      "title": "Exquisite Ceiling Details",
      "description": "A close-up of our modern dropped ceiling, integrating advanced soundproofing and dimmable LED systems to control the hall's ambiance."
    },
    {
      "src": "/img/gallery/11.jpg",
      "title": "Grand Lawn Canopy Setup",
      "description": "A look at our magnificent outdoor canopy installation over the open lawn, perfect for keeping your open-air celebrations elegant and weather-proof."
    },
    {
      "src": "/img/gallery/12.jpg",
      "title": "Family-Friendly Open Lawn",
      "description": "A lively view of our seamless, age-friendly ground floor lawn where guests mingle, kids play safely, and live food stalls keep the energy buzzing."
    },
    {
      "src": "/img/gallery/13.jpg",
      "title": "Air-Conditioned Indoor Mandap",
      "description": "Experience your sacred pheras in absolute comfort with a beautifully decorated traditional wedding mandap set up inside our fully air-conditioned hall."
    },
    {
      "src": "/img/gallery/14.jpg",
      "title": "Valet & Parking Canopy",
      "description": "A seamless entry point leading directly from our valet and parking zones, featuring a protective canopy to shield guests from weather elements."
    },
    {
      "src": "/img/gallery/15.jpg",
      "title": "Hall & Mandap Integration",
      "description": "A comprehensive view of our spacious indoor hall seamlessly integrating the core wedding mandap setup, ensuring everyone gets a perfect view."
    },
    {
      "src": "/img/gallery/16.jpg",
      "title": "The Grand Celebrations Stage",
      "description": "A majestic and versatile main stage backdrop, beautifully designed to host weddings, receptions, annaprashans, and milestone occasions."
    }
  ];

  const openPopup = (imgObj) => {
    setPopupImage(imgObj);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section className="bg-light-gallery no-padding" id="photogallery">
      <SubpageHeader title="Photo Gallery" />
      
      <div className="container photo-gallery-container" style={{ padding: '50px 15px' }}>
        <div className="photo-gallery-grid">
          {images.map((img, idx) => (
            <div className="image-card" key={idx} onClick={() => openPopup(img)}>
              <img src={img.src} alt={`${img.title} - Melabagan Banquets`} />
              <div className="image-card-overlay">
                <h4 className="image-card-title">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* React Image Popup Modal */}
        {popupImage && (
          <div className="photo-gallery-container">
            <div className="popup-image-wrapper" onClick={closePopup}>
              <button className="popup-close-btn" onClick={closePopup} aria-label="Close lightbox">
                <i className="bi bi-x-lg"></i>
              </button>
              
              <div className="popup-card-container" onClick={(e) => e.stopPropagation()}>
                <div className="popup-image-content">
                  <img src={popupImage.src} alt={popupImage.title} />
                </div>
                
                <div className="popup-info-panel">
                  <span className="popup-info-category">Gallery Showcase</span>
                  <h2 className="popup-info-title">{popupImage.title}</h2>
                  <div className="popup-info-divider"></div>
                  <p className="popup-info-description">{popupImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <GalleryInstagram />
    </section>
  );
}
