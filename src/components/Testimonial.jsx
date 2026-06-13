import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { reviews } from '../data/reviews';
import { siteConfig } from '../config';

export default function Testimonial() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper using DOM class matching original theme scripts
    const swiperInstance = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section id="testimonial" className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">What People are Saying</h2>
            <h4 className="text-muted">Testimonials and Reviews</h4>
            <section className="divider">
              <img src="/img/divider.png" alt="divider" />
            </section>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial swiper mySwiper">
          <div className="testimonial-content swiper-wrapper">
            {reviews.map((item) => (
              <div className="slide swiper-slide" key={item.id}>
                <p>{item.description}</p>
                <i className="bx bxs-quote-left quote-icon"></i>
                <div className="slide-details">
                  <span>{item.author}</span>
                </div>
              </div>
            ))}
          </div>

          {/* swiper navigation */}
          <div className="swiper-button-next swipper-nav-btn"></div>
          <div className="swiper-button-prev swipper-nav-btn"></div>
          {/* pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="container">
        <h4 className="text-center">
          <a href={siteConfig.google_reviews_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm page-scroll">
            <i className="bi bi-google social-sm"></i> Check out more reviews
          </a>
        </h4>
      </div>
    </section>
  );
}
