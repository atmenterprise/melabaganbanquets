import React, { useState } from 'react';
import GalleryInstagram from '../components/GalleryInstagram';
import SubpageHeader from '../components/SubpageHeader';

export default function PhotoGallery() {
  const [popupImage, setPopupImage] = useState(null);

  const images = [
    {
      src: "/img/gallery/1.jpg",
      title: "Grand Banquet Entrance",
      description: "Welcome your guests through our majestic entry lounge, designed with golden accents and premium marble floors that set an opulent tone for your celebrations."
    },
    {
      src: "/img/gallery/2.jpg",
      title: "Main Banquet Hall View",
      description: "A panoramic showcase of the vast indoor hall, boasting tall ceilings, lavish decorative chandeliers, and custom modular lighting built to host up to 500+ guests."
    },
    {
      src: "/img/gallery/3.jpg",
      title: "Premium Dining Layout",
      description: "Our meticulously arranged banquet dining space features elegant table setups, luxury linen arrangements, and wide walkways for comfortable movement."
    },
    {
      src: "/img/gallery/4.jpg",
      title: "Luxurious Bridal Suite",
      description: "A beautifully appointed, private, air-conditioned sanctuary for the bride and her bridal party to rest and prepare, complete with full-length mirrors and en-suite amenities."
    },
    {
      src: "/img/gallery/5.jpg",
      title: "Sprawling Open-Air Lawn",
      description: "Step outdoors into our lush green garden area, perfect for scenic wedding mandaps, vibrant buffet tables, live food stalls, and evening stardust socializing."
    },
    {
      src: "/img/gallery/6.jpg",
      title: "Floral Stage Backdrop",
      description: "A detail of our customized stage decor, featuring premium floral arrangements and mood uplighting crafted by our expert in-house design crew."
    },
    {
      src: "/img/gallery/7.jpg",
      title: "Groom's Lounge",
      description: "A sophisticated private suite dedicated for the groom and his attendants, offering a quiet, air-conditioned space for getting ready and relaxing."
    },
    {
      src: "/img/gallery/8.jpg",
      title: "Royal Mandap Canopy",
      description: "A beautifully decorated traditional wedding mandap, illuminated with warm lighting to elevate the spiritual and celebratory mood of your pheras."
    },
    {
      src: "/img/gallery/9.jpg",
      title: "In-House Buffet Counter",
      description: "Our modern, sleek buffet configuration, designed to present local and international cuisines in an elegant setting with high-hygiene standards."
    },
    {
      src: "/img/gallery/10.jpg",
      title: "Exquisite Ceiling Details",
      description: "A close-up of our modern dropped ceiling, integrating advanced soundproofing and dimmable LED systems to control the hall's ambiance."
    },
    {
      src: "/img/gallery/11.jpg",
      title: "Cocktail Party Lighting",
      description: "Our high-tech lighting control system enables deep color customization to transition the hall from an elegant daytime ceremony to a lively reception party."
    },
    {
      src: "/img/gallery/12.jpg",
      title: "Outdoor Live Kitchens",
      description: "Interactive chef counters set up in the open lawn allow guests to enjoy freshly cooked local Kolkata street foods and global cuisines."
    },
    {
      src: "/img/gallery/13.jpg",
      title: "Age-Friendly Accessibility",
      description: "Designed for all generations, our ground floor venue features wide, seamless entrances and zero-step walkways to ensure smooth wheelchair and stroller movement."
    },
    {
      src: "/img/gallery/14.jpg",
      title: "Spacious Valet Portico",
      description: "Our dedicated drop-off area where guests are welcomed by trained valet support staff, ensuring vehicle parking is completely stress-free."
    },
    {
      src: "/img/gallery/15.jpg",
      title: "Night Garden Illuminations",
      description: "An evening view of our garden area decorated with glowing string lights and spotlights, creating a warm, magical stardust atmosphere."
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
