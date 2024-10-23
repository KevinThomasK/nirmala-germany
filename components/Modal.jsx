"use client";
import React from "react";
import ContactForm from "./ContactForm"; // Import your ContactModal

const FullScreenModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="custom-modal-backdrop" onClick={onClose}>
      <div
        className="custom-modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <div className="custom-modal-content">
          <div className="custom-modal-header d-flex justify-content-end">
            <button
              type="button"
              className="custom-close-btn"
              aria-label="Close"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="custom-modal-body">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated ModalTrigger to take isOpen and onClose props
export const ModalTrigger = ({ isOpen, onClose }) => {
  return (
    <>
      <FullScreenModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
