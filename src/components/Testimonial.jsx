import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { reviews } from '../data/reviews';
import { siteConfig } from '../config';

export default function Testimonial() {
  const swiperRef = useRef(null);
  const [activeReview, setActiveReview] = useState(null);

  useEffect(() => {
    // Initialize Swiper with custom navigation elements
    const swiperInstance = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
    });

    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  // Truncate review description to keep card heights uniform and compact in the carousel row
  const truncateText = (text, maxLength = 160) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  const getInitials = (name) => {
    if (!name) return "G";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const handleCardClick = (review) => {
    setActiveReview(review);
  };

  const closeModal = () => {
    setActiveReview(null);
  };

  return (
    <section id="testimonial">
      <div className="container">
        
        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">What People are Saying</h2>
            <h4 className="text-muted">Real stories & feedback from our guests</h4>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
          </div>
        </div>

        {/* Swiper Carousel Wrapper */}
        <div className="testimonial-carousel-wrapper">
          <div className="testimonial swiper mySwiper">
            <div className="swiper-wrapper">
              {reviews.map((item) => {
                const isTruncated = item.description && item.description.length > 160;
                return (
                  <div className="swiper-slide" key={item.id}>
                    <div 
                      onClick={() => handleCardClick(item)}
                      className="review-carousel-card"
                      role="button"
                      tabIndex="0"
                      onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(item); }}
                    >
                      {/* Card Header Info */}
                      <div className="card-top-row">
                        <div className="author-avatar-circle">
                          {getInitials(item.author)}
                        </div>
                        <div className="author-meta">
                          <h4 className="author-name">{item.author}</h4>
                          <div className="star-rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                        <div className="google-badge-icon">
                          <i className="bi bi-google"></i>
                        </div>
                      </div>

                      {/* Card Quote Text - Truncated for equal heights */}
                      <p className="review-quote-text">
                        "{truncateText(item.description, 160)}"
                      </p>

                      {/* Verified Verification Badge */}
                      <div className="verified-row">
                        <div className="verified-badge-left">
                          <i className="bi bi-patch-check-fill"></i>
                          <span>Verified Guest Review</span>
                        </div>
                        <span className="click-to-read-more">
                          {isTruncated ? "Read More" : "Read Review"} <i className="bi bi-chat-left-text-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Bullet Points */}
            <div className="swiper-pagination"></div>
          </div>

          {/* Custom navigation buttons */}
          <button className="testimonial-nav-btn prev-btn" aria-label="Previous slide">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="testimonial-nav-btn next-btn" aria-label="Next slide">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Bottom actions */}
        <div className="reviews-actions-row">
          <a 
            href={siteConfig.google_reviews_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-review-primary"
          >
            <i className="bi bi-google"></i> View All Google Reviews
          </a>
          <a 
            href={siteConfig.google_reviews_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-review-secondary"
          >
            <i className="bi bi-pencil-square"></i> Write A Review
          </a>
        </div>

      </div>

      {/* Premium Review Pop-up Modal */}
      {activeReview && (
        <div className="testimonial-modal-overlay" onClick={closeModal}>
          <div className="testimonial-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="testimonial-modal-close" onClick={closeModal} aria-label="Close modal">
              <i className="bi bi-x-lg"></i>
            </button>
            
            {/* Header info */}
            <div className="testimonial-modal-header">
              <div className="author-avatar-circle large">
                {getInitials(activeReview.author)}
              </div>
              <div className="author-meta">
                <h3 className="modal-author-name">{activeReview.author}</h3>
                <div className="star-rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
              <div className="google-badge-icon large">
                <i className="bi bi-google"></i>
              </div>
            </div>
            
            {/* Quote body - untruncated */}
            <div className="testimonial-modal-body">
              <i className="bi bi-quote quote-icon-modal"></i>
              <p className="modal-review-text">"{activeReview.description}"</p>
            </div>
            
            {/* Footer verification & Google redirect CTA */}
            <div className="testimonial-modal-footer">
              <div className="verified-badge-left">
                <i className="bi bi-patch-check-fill"></i>
                <span>Verified Google Review</span>
              </div>
              <a 
                href={siteConfig.google_reviews_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-modal-google"
              >
                <i className="bi bi-google"></i> View on Google
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
