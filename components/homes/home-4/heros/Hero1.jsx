"use client";
import { useState, useEffect } from "react";
import { features } from "@/data/features";
import Image from "next/image";
//import { BannerBtm } from "@/components/button";
import { ModalTrigger } from "@/components/Modal";

export default function Hero1() {
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
  //   }, 25000); // Open modal every 25 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return (
    <>
      <div className="container position-relative d-flex align-items-center">
        {/* Home Section Content */}
        <div className="home-content text-start mt-n40">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center order-first order-lg-last mb-md-60">
              <div className="w-100 text-center text-lg-start">
                <h1 className="hs-title-8 mb-40 mb-sm-20 wow fadeInUp">
                  Are you Looking For Best University To Study In{" "}
                  <span style={{ color: "#CA346B" }}>Germany</span> ?
                </h1>

                <p
                  className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                  style={{ textTransform: "capitalize" }}
                  data-wow-delay="0.15s"
                >
                  Find the best universities in Germany offering up to 100%
                  scholarships with our expert guidance.
                </p>
                <div
                  className="wow fadeInUp wch-unset"
                  data-wow-delay="0.3s"
                  data-wow-offset={0}
                >
                  <div
                    className="local-scroll mb-60 mb-sm-50"
                    onClick={openModal}
                  >
                    <a className="btn btn-mod btn-color btn-large btn-round btn-hover-anim">
                      <span>Book Free Counselling Now</span>
                    </a>
                  </div>
                  {/* <BannerBtm /> */}

                  {/* Features List */}
                  <div className="mt-n10">
                    {/* Features List Item */}
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className="d-flex justify-content-center justify-content-lg-start mt-10"
                      >
                        <div className="features-list-icon">
                          <i className="mi-check" />
                        </div>
                        <div className="features-list-text">{feature.text}</div>
                      </div>
                    ))}
                    {/* End Features List Item */}
                  </div>
                  {/* End Features List */}
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Images */}
            <div className="col-lg-6">
              <div className="composition-8">
                {/* Decorative Dots */}
                <div
                  className="composition-8-decoration-1 mt-n90 mt-md-n60 wow fadeIn"
                  data-wow-duration="1.3s"
                >
                  <Image
                    src="/assets/images/demo-corporate/decoration-1.svg"
                    width={253}
                    height={304}
                    alt=""
                  />
                </div>
                {/* End Decorative Dots */}
                {/* Main Image */}
                <div className="composition-8-image bg-white">
                  <Image
                    src="/assets/images/germany/banner.jpg"
                    width={706}
                    height={800}
                    alt="Image Description"
                    className="wow fadeScaleOutIn"
                    data-wow-duration="1.3s"
                  />
                </div>
                {/* End Main Image */}
                {/* Overlay Buttons */}
                <div
                  className="composition-8-decoration-2 local-scroll wow fadeIn animated"
                  data-wow-duration="1.3s"
                  data-wow-offset={0}
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="mt-10">
                    <a
                      href="#services"
                      className="btn btn-mod btn-w btn-with-icon btn-circle"
                    >
                      <span className="btn-icon color-3">
                        <i className="mi-user" aria-hidden="true" />
                      </span>
                      <span data-btn-animate="y">
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            HealthCare Courses
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            HealthCare Courses
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="mt-10">
                    <a
                      href="#services"
                      className="btn btn-mod btn-w btn-with-icon btn-circle"
                    >
                      <span className="btn-icon color-2">
                        <i className="mi-search" aria-hidden="true" />
                      </span>
                      <span data-btn-animate="y">
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Business Analytics
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Business Analytics
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="mt-10">
                    <a
                      href="#services"
                      className="btn btn-mod btn-w btn-with-icon btn-circle"
                    >
                      <span className="btn-icon color-4">
                        <i className="mi-message" aria-hidden="true" />
                      </span>
                      <span data-btn-animate="y">
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">Engineering</span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Engineering
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* End Overlay Buttons */}
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
        {/* End Home Section Content */}
      </div>
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
