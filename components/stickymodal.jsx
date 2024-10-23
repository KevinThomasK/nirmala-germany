"use client";
import React, { useState, useEffect } from "react";
import { ModalTrigger } from "@/components/Modal";

const Stickymodal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      // Adjust this value to control when the modal appears
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <>
        <div className="fixedcta d-flex align-content-center justify-content-between">
          <h5 className="mob-dis-none">Get A Free Consultation Now</h5>

          <a
            className="btn_black d-flex align-items-center justify-content-center"
            href="tel:+918301921909"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.2137 17.3441C13.66 17.1784 12.161 16.6762 10.7168 15.8374C9.2726 14.9985 7.99529 13.8912 6.8849 12.5152C5.77445 11.1397 4.96147 9.65769 4.44597 8.06909C3.93047 6.4805 3.75529 4.90932 3.92043 3.35557C3.94428 3.13184 4.03873 2.95335 4.20379 2.82009C4.36884 2.68684 4.56324 2.63214 4.78697 2.65599L7.80735 2.97799C7.98137 2.99654 8.13043 3.07227 8.25454 3.20517C8.37865 3.33808 8.44455 3.4864 8.45224 3.65014L8.65872 6.31202C8.66238 6.51355 8.63827 6.68068 8.58641 6.81343C8.53455 6.94618 8.45359 7.05698 8.34356 7.14581L6.34027 8.78016C6.53983 9.26655 6.78755 9.74224 7.08343 10.2072C7.3793 10.6722 7.71135 11.1257 8.07956 11.5677C8.4238 11.9941 8.78966 12.3947 9.17712 12.7694C9.56458 13.144 9.97993 13.493 10.4232 13.8163L12.3626 12.2506C12.4863 12.1507 12.6415 12.0825 12.8279 12.046C13.0143 12.0096 13.1929 12.0128 13.3639 12.0557L15.8811 12.852C16.0498 12.9203 16.1832 13.0257 16.2811 13.1684C16.379 13.3111 16.4194 13.463 16.4022 13.6241L16.0802 16.6445C16.0564 16.8682 15.9619 17.0467 15.7969 17.18C15.6318 17.3132 15.4374 17.3679 15.2137 17.3441ZM5.78284 7.28766L7.14455 6.18831L7.01444 4.40195L5.35509 4.22506C5.36291 4.74129 5.39625 5.25397 5.45511 5.76308C5.51397 6.27218 5.62322 6.78038 5.78284 7.28766ZM11.7459 14.6739C12.2082 14.9369 12.6845 15.1574 13.1749 15.3354C13.6653 15.5133 14.163 15.6481 14.6682 15.7397L14.8431 14.099L13.1283 13.5579L11.7459 14.6739Z"
                fill="#fff"
              ></path>
            </svg>
            Call Now
          </a>
          <button
            className="btn d-flex align-items-center justify-content-center"
            onClick={openModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H18C18.5523 22 19 21.5523 19 21V3C19 2.44772 18.5523 2 18 2H3ZM4 4H18V20H4V4ZM16 5H8C7.44772 5 7 5.44772 7 6V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V6C17 5.44772 16.5523 5 16 5Z"
                fill="white"
              />
            </svg>
            Get Callback
          </button>
        </div>
        <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      </>
    )
  );
};

export default Stickymodal;
