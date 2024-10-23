// ModalComponent.jsx
import React from "react";
// Import your custom CSS file

const ModalComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Modal Title</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          This is the body of the modal with some custom styles.
        </div>
        <div className="modal-footer">
          <button className="footer-button" onClick={onClose}>
            Close
          </button>
          <button className="footer-button primary">Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
