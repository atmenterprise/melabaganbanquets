import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null); // 'disclaimer', 'privacy', 'faq', or null

  const openModal = (type) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };
  
  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset'; // Unlock background scrolling
  };

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
