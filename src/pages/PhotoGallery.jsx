import React, { useState } from 'react';
import GalleryInstagram from '../components/GalleryInstagram';
import SubpageHeader from '../components/SubpageHeader';

export default function PhotoGallery() {
  const [popupImage, setPopupImage] = useState(null);

  const column1 = [
    "/img/gallery/1.jpg",
    "/img/gallery/2.jpg",
    "/img/gallery/7.jpg",
    "/img/gallery/10.jpg",
    "/img/gallery/13.jpg"
  ];

  const column2 = [
    "/img/gallery/3.jpg",
    "/img/gallery/4.jpg",
    "/img/gallery/8.jpg",
    "/img/gallery/11.jpg",
    "/img/gallery/14.jpg"
  ];

  const column3 = [
    "/img/gallery/5.jpg",
    "/img/gallery/6.jpg",
    "/img/gallery/9.jpg",
    "/img/gallery/12.jpg",
    "/img/gallery/15.jpg"
  ];

  const openPopup = (imgSrc) => {
    setPopupImage(imgSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section className="bg-dark no-padding" id="photogallery">
      <SubpageHeader title="Photo Gallery" />
      
      <div className="container photo-gallery-container" style={{ padding: '50px 15px' }}>
        <div className="photo-gallery-row">
          {/* Column 1 */}
          <div className="photo-gallery-col">
            {column1.map((src, idx) => (
              <div className="image" key={idx} onClick={() => openPopup(src)}>
                <img src={src} alt={`melabagan-banquet-image-col1-${idx}`} />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="photo-gallery-col">
            {column2.map((src, idx) => (
              <div className="image" key={idx} onClick={() => openPopup(src)}>
                <img src={src} alt={`melabagan-banquet-image-col2-${idx}`} />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="photo-gallery-col">
            {column3.map((src, idx) => (
              <div className="image" key={idx} onClick={() => openPopup(src)}>
                <img src={src} alt={`melabagan-banquet-image-col3-${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* React Image Popup Modal */}
        {popupImage && (
          <div className="photo-gallery-container">
            <div className="popup-image" style={{ display: 'block' }} onClick={closePopup}>
              <span onClick={closePopup}>
                <i className="bi bi-x-circle"></i>
              </span>
              <img
                src={popupImage}
                alt="melabagan-banquet-popup"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              />
            </div>
          </div>
        )}
      </div>

      <GalleryInstagram />
    </section>
  );
}
