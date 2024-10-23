"use client";
import { testimonialItems } from "@/data/testimonials";
import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "@/components/VideoModal";

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    let embedUrl = "";
    
    // Check if the URL is for a YouTube Shorts video
    if (url.includes("shorts")) {
      // Extract the Shorts video ID from the URL
      const videoId = url.split("/shorts/")[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("watch")) {
      // For regular YouTube videos
      const videoId = url.split("v=")[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    setVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };
  return (
    <div className="container position-relative ">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h2 className="section-title mb-70 mb-sm-50 text-center">
            Hear It From Our Successful Students
          </h2>
        </div>
      </div>
      {/* Testimonial */}
      {testimonialItems.map((elm, i) => (
        <React.Fragment key={i}>
          {!(i % 2) ? (
            <div className="row mb-80 mb-sm-60 ">
              <div className="col-md-5 col-lg-4 offset-lg-1 mb-sm-40">
                <button
                  onClick={() => openModal(elm.vsrc)}
                  className="overflow-hidden round "
                  style={{ border: "none" }}
                >
                  <img
                    src={elm.imageSrc}
                    width={356}
                    height={500}
                    alt="Image Description"
                    className="wow scaleOutIn"
                  />
                </button>
              </div>
              <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <p className="testimonials-5-text mb-40">{elm.quote}</p>
                  <div className="section-line mb-10" />
                  <footer>
                    <div className="testimonials-6-author">{elm.author}</div>
                    <div className="testimonials-6-position">
                      {elm.position}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-1 order-md-last mb-sm-40">
                <button
                  style={{ border: "none" }}
                  onClick={() => openModal(elm.vsrc)}
                  className="overflow-hidden round"
                >
                  <img
                    src={elm.imageSrc}
                    width={356}
                    height={500}
                    alt="Image Description"
                    className="wow scaleOutIn"
                  />
                </button>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <p className="testimonials-5-text mb-40">{elm.quote}</p>
                  <div className="section-line mb-10" />
                  <footer>
                    <div className="testimonials-6-author">{elm.author}</div>
                    <div className="testimonials-6-position">
                      {elm.position}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      {/* End Testimonial */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="video-container">
          <iframe
            width="100%"
            height="600"
            src={videoUrl} // The URL for the iframe is the constructed YouTube embed URL
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </VideoModal>
    </div>
  );
}
