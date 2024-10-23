"use client";
import { features2 } from "@/data/features";
import { portfolios4 } from "@/data/portfolio";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModalTrigger } from "@/components/Modal";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsModalOpen(true);
  //   }, 15000); // Open modal every 5 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);
  return (
    <>
      <div className="row mb-70 mb-sm-50 custommt">
        <div className=" mb-md-40">
          <h2 className="section-title mb-40 mb-xs-30">
            We Will Help You to Choose the Right{" "}
            <span style={{ color: "#C8336A" }}>University</span>
          </h2>
          <p className="section-descr dark-white mb-0">
            Contact us now for a free counseling session and let our experts
            guide you in choosing the right German university.
          </p>
        </div>
      </div>
      {/* Portfolio Grid */}
      <div className="row mt-n50 mt-sm-n40 mb-70 mb-sm-50">
        {/* Portfolio Item */}
        {portfolios4.map((item, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 mt-50 mt-sm-40"
            style={{
              textAlign: "center", // Center text and elements inside the div
            }}
          >
            {/* <a href="#contact_form" className="portfolio-5-link"> */}
            <div className="portfolio-5-image">
              <div className="portfolio-5-image-bg wow scalexIn" />
              <div className="wow fadeIn " data-wow-delay="1s">
                <img
                  src={item.imageSrc}
                  width={660}
                  height={472}
                  alt="Portfolio Image"
                  style={{ maxHeight: "280px" }}
                />
              </div>
            </div>
            <h3 className="portfolio-4-title">
              <span>{item.title}</span>
            </h3>
            <div className="portfolio-4-number" style={{ fontWeight: "bold" }}>
              {item.number}
            </div>
            <div className="portfolio-5-number-descr">{item.description}</div>
            <div className="portfolio-5-number-descr">{item.description2}</div>
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "20px" }}
            >
              <button
                style={{
                  backgroundColor: "#1961FA",
                  borderColor: "#1961FA",
                  color: "#fff", // White text color
                  padding: "10px 20px", // Increased padding
                  fontSize: "1rem", // Font size
                  borderRadius: "5px", // Rounded corners
                  transition: "background-color 0.3s", // Smooth transition for hover effect
                }}
                onClick={openModal}
              >
                Know Admission Procedures
              </button>
            </div>
            {/* </a> */}
          </div>
        ))}

        {/* End Portfolio Item */}
      </div>
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
