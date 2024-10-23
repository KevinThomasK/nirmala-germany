"use client";
import React, { useState } from "react";

import Service from "./Service";
import Portfolio from "./Portfolio";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import Cta2 from "./Cta2";
import Blog from "../home-4/Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import AnimateButton from "@/components/common/AnimateButton";
import Link from "next/link";
import Testimonials2 from "./Testimonials2";
import Image from "next/image";
import { FaUniversity, FaUserGraduate, FaAward, FaBook } from "react-icons/fa";
import { ModalTrigger } from "@/components/Modal";

export default function Home4({ onePage = false, dark = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="bg-line-1 opacity-025">
          <Image
            src="/assets/images/demo-corporate/decoration-2.svg"
            width={1600}
            height={513}
            alt=""
            className="wow fadeIn"
            data-wow-delay="0.4s"
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-12 col-lg-10 text-center mx-auto">
              <h2 className="section-title mb-40 mb-xs-30">
                300+ Successful Students Have Fulfilled Their Dream Of Studying
                In <span style={{ color: "#C8336A" }}>Germany</span> With Our
                Help.
              </h2>
              <p className="section-descr dark-white mb-0">
                From Dreamers To Achievers See The Success Stories
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <Testimonials2 />
          {/* End Testimonials Grid */}
          <div className="local-scroll text-center">
            {onePage ? (
              <>
                <button
                  onClick={openModal}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                  style={{
                    fontSize: "1.25rem", // Increase font size
                    padding: "15px 30px", // Increase padding
                    borderRadius: "50px", // Make the button more rounded (optional)
                  }}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Get A Free Consultation"} />
                  </span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/corporate-about${dark ? "-dark" : ""}`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                  style={{
                    fontSize: "1.25rem", // Increase font size
                    padding: "15px 30px", // Increase padding
                    borderRadius: "50px", // Make the button more rounded (optional)
                  }}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Get A Free Consultation"} />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
        <h2 className="section-title mb-40 mb-xs-30">
          Why choose Nirmala Study Abroad For Your{" "}
          <span style={{ color: "#C8336A" }}>Germany</span> Study Journey?
        </h2>
      </div>

      {/* custom */}
      <section className="page-section bg-primary-1 bg-color-alpha-90 bg-scroll light-content">
        {/* Desktop Overlay */}
        <div className="container">
          <div className="row text-center g-4">
            {/* Column 1 */}
            <div className="col-md-3">
              <div className="icon-text px-3">
                <FaUniversity style={{ fontSize: "90px", color: "#20d723" }} />
                <p className="large-text mt-3" style={{ wordSpacing: "10px" }}>
                  20+ Partner Universities In Germany
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-3">
              <div className="icon-text px-3">
                <FaUserGraduate
                  style={{ fontSize: "100px", color: "orange" }}
                />
                <p className="large-text mt-3" style={{ wordSpacing: "10px" }}>
                  300+ Students Successfully Enrolled
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-3">
              <div className="icon-text px-3">
                <FaAward style={{ fontSize: "100px", color: "#ffc107" }} />
                <p className="large-text mt-3" style={{ wordSpacing: "10px" }}>
                  Fully Funded Scholarships
                </p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-md-3">
              <div className="icon-text px-3">
                <FaBook style={{ fontSize: "100px", color: "#dc3545" }} />
                <p className="large-text mt-3" style={{ wordSpacing: "10px" }}>
                  Courses From 5 Lakhs Onwards
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Desktop Overlay */}
        {/* Mobile Overlay */}
        {/* End Mobile Overlay */}
      </section>

      {/* custom end */}
      <section
        className={`page-section pb-0 scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div
              className="col-md-12 text-center"
              style={{ paddingLeft: "5%", paddingRight: "5%" }}
            >
              <h2
                className="section-title mb-40 mb-xs-30"
                style={{ marginTop: "-30px", textTransform: "capitalize" }}
              >
                Bringing <span style={{ color: "#C8336A" }}>70+</span> years of
                excellence to overseas education.
              </h2>
              <p className="section-descr mb-0">
                We leverage our expertise in education to assist students with
                the challenging task of selecting a program, applying to
                universities, obtaining visas and documents, and providing all
                the necessary support to embark on their education abroad
                journey. Our team of experienced consultants provides
                comprehensive guidance tailored to each student’s unique
                interests, strengths, and career aspirations.
              </p>
              <h2
                className="section-title mb-40 mb-xs-30"
                style={{ marginTop: "80px" }}
              >
                Discover the Field of Studies With Excellent Placement
                Opportunities.
              </h2>

              {/* <p className="section-descr mb-0">
                Contact us now for a free counseling session and let our experts
                guide you in choosing the right Irish university for you.
              </p> */}
            </div>
          </div>
        </div>

        <Service />
        {/* End Services Grid */}
        {/* Call to Action Block */}
        <div className="container position-relative z-index-1">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="text-center mb-40 mb-sm-30">
                <Image
                  src="/assets/images/demo-corporate/section-image-1.png"
                  width={100}
                  height={100}
                  alt="Image Description"
                />
              </div>
              {/* <p className="section-descr-medium mb-50 mb-sm-40">
                Contact us now for a free counseling session and let our experts
                guide you in choosing the right Courses for you.
              </p> */}
              <div className="local-scroll text-center">
                {onePage ? (
                  <button
                    onClick={openModal}
                    className={`btn btn-mod ${
                      dark ? "btn-dark" : "btn-w"
                    } btn-with-icon btn-circle btn-large`}
                  >
                    <span className="btn-icon color-1">
                      <i className="mi-heart" />
                    </span>
                    <span data-btn-animate="y">
                      <AnimateButton text={"Explore More Courses Now"} />
                    </span>
                  </button>
                ) : (
                  <Link
                    href={`/corporate-contact${dark ? "-dark" : ""}`}
                    className={`btn btn-mod ${
                      dark ? "btn-dark" : "btn-w"
                    } btn-with-icon btn-circle btn-large`}
                  >
                    <span className="btn-icon color-1">
                      <i className="mi-heart" />
                    </span>
                    <span data-btn-animate="y">
                      <AnimateButton text={"Explore More Courses Now"} />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* End Call to Action Block */}
        {/* Decorative Line */}
        <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
          <Image
            src="/assets/images/demo-corporate/decoration-3.svg"
            width={1600}
            height={243}
            alt=""
          />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div
          className="container position-relative negative-margin-top-sm"
          style={{ marginTop: "-100px" }}
        >
          <Portfolio />

          <div className="col-md-8 offset-md-2 text-center mb-20">
            <p className="section-descr mb-0">
              Check Your Admit Chances Across 20+ Other Universities Partnered
              With Nirmala Study Abroad
            </p>
          </div>

          {/* End Portfolio Grid */}
          <div className="local-scroll text-center">
            {onePage ? (
              <>
                <button
                  onClick={openModal}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-link-alt" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Explore More Universities"} />
                  </span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/corporate-portfolio${dark ? "-dark" : ""}`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-link-alt" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"Explore More Universities"} />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        style={{ marginTop: "-100px" }}
        id="clients-stories"
      >
        <Testimonials />
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
        style={{ marginTop: "-100px" }}
      >
        <div className="bg-line-3 opacity-025 mb-n90 mb-lg-n70 mb-md-n60 mb-sm-n40">
          <Image
            src="/assets/images/demo-corporate/decoration-4.svg"
            width={1600}
            height={206}
            alt=""
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-80 mb-sm-60 custommt">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Embark On Your <span style={{ color: "#C8336A" }}>Germany</span>{" "}
                Study Abroad Journey Today
              </h2>
              <p className="section-descr dark-white mb-0">
                Begin Your Germany Study Abroad Adventure With Nirmala. Get
                Expert Guidance And Personalized Support.
              </p>
            </div>
          </div>{" "}
          <Contact />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
    </>
  );
}
