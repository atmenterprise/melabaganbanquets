import React, { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';
import DisclaimerContent from './DisclaimerContent';
import PrivacyContent from './PrivacyContent';
import FaqContent from './FaqContent';

export default function InfoModal() {
  const { activeModal, closeModal } = useModal();
  const modalBoxRef = useRef(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, closeModal]);

  if (!activeModal) return null;

  // Determine title based on active type
  let title = '';
  let content = null;

  switch (activeModal) {
    case 'disclaimer':
      title = 'Disclaimer';
      content = <DisclaimerContent />;
      break;
    case 'privacy':
      title = 'Privacy & Data Protection Policy';
      content = <PrivacyContent />;
      break;
    case 'faq':
      title = 'Frequently Asked Questions (FAQs)';
      content = <FaqContent closeModal={closeModal} />;
      break;
    default:
      break;
  }

  return (
    <div className="custom-modal-overlay" onClick={closeModal}>
      <div 
        className="custom-modal-box wow zoomIn" 
        data-wow-duration="0.3s"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal box
        ref={modalBoxRef}
      >
        {/* Modal Header */}
        <div className="custom-modal-header">
          <h2 className="custom-modal-title">{title}</h2>
          <button className="custom-modal-close-btn" onClick={closeModal} aria-label="Close modal">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="custom-modal-body">
          {content}
        </div>
      </div>
    </div>
  );
}
