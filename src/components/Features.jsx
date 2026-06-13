import React, { useState } from 'react';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(null);

  const featuresList = [
    {
      icon: "/img/icons/hall.png",
      title: "Modern Banquet Hall",
      shortDescription: "Luxurious and spacious banquet hall with over 8000 sq. ft. of area.",
      description: "Step into a brand new, meticulously designed banquet hall boasting over 8000 sq. ft. of grand luxury. Conveniently located in the heart of Dum Dum, Kolkata, our hall features tall ceilings, exquisite modern lighting, premium acoustics, and a modular layout designed to accommodate and wow up to 500+ guests."
    },
    {
      icon: "/img/icons/internet.png",
      title: "Fully Air-Conditioned",
      shortDescription: "Fully air-conditioned hall ensuring maximum comfort for your guests.",
      description: "To ensure the absolute comfort of you and your guests during Kolkata's warm seasons, our entire indoor facility is equipped with state-of-the-art, high-capacity silent air-conditioning. This maintains a cool, fresh, and temperature-controlled atmosphere throughout your grand celebrations."
    },
    {
      icon: "/img/icons/room.png",
      title: "Rooms",
      shortDescription: "Separate, well-appointed private rooms for the bride and groom.",
      description: "We provide beautifully furnished, private, air-conditioned rooms dedicated separately for the bride and groom. These well-appointed suites serve as peaceful sanctuaries for changing, resting, and preparing for the big day, complete with vanity mirrors and en-suite facilities."
    },
    {
      icon: "/img/icons/spring.png",
      title: "Open Lawn Space",
      shortDescription: "Sprawling open lawn area for socializing and outdoor activities.",
      description: "Adjacent to the grand hall is a sprawling, lush green open-air lawn space. It is perfect for starry-sky wedding ceremonies, outdoor buffet installations, live food stalls, and socializing, providing ample room for guests to mingle and children to play safely."
    },
    {
      icon: "/img/icons/christmas-lights.png",
      title: "In-House Decorator",
      shortDescription: "Professional in-house team to customize your event decorations.",
      description: "Our premier in-house decoration team is dedicated to turning your dream event into a visual masterpiece. From elegant floral backdrops and theme lighting to contemporary sit-down arrangements, our designers work closely with you to personalize every detail."
    },
    {
      icon: "/img/icons/burger.png",
      title: "In-House Caterers",
      shortDescription: "Customizable dining with premium in-house and external options.",
      description: "Treat your guests to a world-class culinary journey managed by some of Kolkata's most celebrated chefs. We offer customizable menus featuring a wide variety of Indian, continental, and oriental cuisines. We also offer the flexibility to host your own external catering team if preferred."
    },
    {
      icon: "/img/icons/cleaning.png",
      title: "In-House Cleaning & Support",
      shortDescription: "Dedicated support and maintenance staff present throughout the event.",
      description: "Experience hassle-free hosting with our dedicated, round-the-clock housekeeping and support team. We ensure the venue remains pristine, restrooms remain sanitized, and all logistics run smoothly from the moment you arrive until the last guest departs."
    },
    {
      icon: "/img/icons/security-camera.png",
      title: "In-House Security",
      shortDescription: "24x7 security monitoring and CCTV protection for peace of mind.",
      description: "Your safety is our priority. The venue is monitored 24x7 by high-definition CCTV security cameras positioned across all entrances and common spaces. A trained team of security guards manages guest entries and ensures a safe, private environment."
    },
    {
      icon: "/img/icons/couple.png",
      title: "Age Friendly Area",
      shortDescription: "Wheelchair and elderly-friendly ground floor facilities.",
      description: "Our banquet hall features seamless ground-floor access with zero stairs, making the entire venue completely accessible for elderly guests, young children, and individuals with disabilities. We provide ramp installations and wide walkways to ensure ease of movement."
    },
    {
      icon: "/img/icons/parking.png",
      title: "Car Parking (Valet)",
      shortDescription: "Ample vehicle parking space with professional valet service support.",
      description: "Eliminate parking stress for your guests. We offer a spacious, secure parking lot for cars and two-wheelers inside the premises. Our professional, in-house valet service will greet your guests upon arrival and securely park their vehicles, with additional parking available on the adjacent road."
    },
    {
      icon: "/img/icons/toilets.png",
      title: "Toilet Facility",
      shortDescription: "Separate, sanitised rest room facilities for men and women.",
      description: "We maintain separate, highly hygienic restroom facilities for men and women. Each washroom is equipped with premium fittings, large mirrors, fresh hand towels, and is consistently cleaned and refreshed by our housekeeping staff throughout the event."
    },
    {
      icon: "/img/icons/wifi.png",
      title: "Network & Wifi",
      shortDescription: "Excellent mobile network reception and complimentary event Wi-Fi.",
      description: "Stay connected with high-speed, complimentary Wi-Fi for all your guests, perfect for sharing live wedding updates. The venue is also designed to maintain excellent cell-phone signal strength across all major telecom networks inside the thick-walled hall."
    },
    {
      icon: "/img/icons/transport.png",
      title: "Local Transportation",
      shortDescription: "Convenient access to bus, metro, train stations, and airport.",
      description: "Our prime location offers unparalleled convenience. Located opposite the Dum Dum Zudio fashion mall on Dum Dum Road, we are just 10 minutes from the metro and train stations, and a short 20-minute drive from the international airport, making it easy for out-of-town guests to reach us."
    }
  ];

  return (
    <>
      <section id="features" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Features</h2>
              <section className="divider">
                <img src="/img/divider.png" alt="divider" />
              </section>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="feature-container">
            {featuresList.map((feature, idx) => (
              <div 
                className="feature text-black" 
                key={idx}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveFeature(feature)}
              >
                <div className="feature-icon">
                  <img src={feature.icon} className="wow pulse" alt={`${feature.title}-icon`} />
                </div>
                <div className="feature-title">{feature.title}</div>
                <div className="feature-description">{feature.shortDescription}</div>
                <span className="feature-readmore">
                  Learn More <i className="bi bi-arrow-right-short" style={{ fontSize: '16px' }}></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details Modal Overlay - Rendered outside the bg-primary section */}
      {activeFeature && (
        <div className="custom-modal-overlay" onClick={() => setActiveFeature(null)}>
          <div 
            className="custom-modal-box" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '600px' }}
          >
            {/* Modal Header */}
            <div className="custom-modal-header">
              <h2 className="custom-modal-title">{activeFeature.title}</h2>
              <button 
                className="custom-modal-close-btn" 
                onClick={() => setActiveFeature(null)} 
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="custom-modal-body text-center" style={{ padding: '30px 24px' }}>
              <div className="feature-modal-icon-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div 
                  className="feature-icon" 
                  style={{ 
                    width: '90px', 
                    height: '90px', 
                    backgroundColor: 'rgba(125, 20, 36, 0.05)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    border: '1px solid rgba(125, 20, 36, 0.1)',
                    marginBottom: 0
                  }}
                >
                  <img src={activeFeature.icon} alt={activeFeature.title} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </div>
              </div>
              <p 
                className="feature-modal-description" 
                style={{ 
                  color: '#3d2b2e', 
                  fontSize: '15px', 
                  lineHeight: '1.75', 
                  margin: '0 auto', 
                  fontWeight: '400' 
                }}
              >
                {activeFeature.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
