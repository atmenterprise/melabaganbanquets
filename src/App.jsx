import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import { ModalProvider } from './context/ModalContext';
import InfoModal from './components/InfoModal';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <InfoModal />
        <ChatBox />
      </Router>
    </ModalProvider>
  );
}

export default App;
