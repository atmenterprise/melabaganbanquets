import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import GalleryInstagram from '../components/GalleryInstagram';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import FindUs from '../components/FindUs';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Gallery />
      <GalleryInstagram />
      <Features />
      <Testimonial />
      <FindUs />
      <Contact />
    </>
  );
}
