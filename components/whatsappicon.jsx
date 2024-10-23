// components/WhatsappIcon.js

"use client"; // This line makes it a client component

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="whatsapp-icon">
          <a
            href="https://wa.me/+918301921909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} /> {/* Reduced icon size */}
          </a>
          <style jsx>{`
            .whatsapp-icon {
              position: fixed;
              bottom: 120px;
              right: 20px;
              background-color: #25d366; /* WhatsApp green */
              border-radius: 50%;
              padding: 10px; /* Reduced padding */
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              z-index: 1000; /* Ensure it stays above other content */
              transition: opacity 0.3s ease; /* Smooth transition for visibility */
            }
            .whatsapp-icon a {
              color: white; /* Icon color */
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default WhatsappIcon;
