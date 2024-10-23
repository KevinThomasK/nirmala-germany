"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header4({ links }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it on mount to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-nav-sub container">
      {/* Logo */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a className="logo">
          <img
            src="/assets/images/nirmal-lp/Logo.png"
            alt="Nirmala Logo"
            className="light-mode-logo"
          />
          <img
            src="/assets/images/nirmal-lp/Logo.png"
            alt="Logo"
            className="dark-mode-logo"
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      {/* <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div> */}

      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          {/* Conditional rendering for Call Now */}
          {isMobile ? (
            <li>
              <a
                href="tel:+91 83019 21909"
                className="btn" // Use appropriate classes for styling
                style={{
                  padding: "2px 20px",

                  color: "#146DC6", // Optional: Set text color to match the border
                  textDecoration: "none", // Optional: to remove underline
                }}
              >
                <i
                  className="mi-mobile size-24 color-primary-1"
                  style={{ marginRight: "5px" }}
                />
                Call Now
              </a>
            </li>
          ) : (
            <li>
              <a
                href="tel:+91 83019 21909"
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px", // Optional: Rounded corners
                  border: "2px solid #146DC6", // Border color #146DC6
                  padding: "2px 20px", // Padding around the content
                  textDecoration: "none", // Optional: to remove underline
                  color: "#146DC6", // Optional: Set text color to match the border
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    margin: 0,
                    paddingRight: "8px",
                    color: "#146DC6", // Set the color for "Call Now"
                  }}
                >
                  Call Now
                </h2>
                <i
                  className="mi-mobile size-24 color-primary-1"
                  style={{ marginRight: "5px" }}
                />
                <span style={{ color: "#146DC6" }}>+91 83019 21909</span>
              </a>
            </li>
          )}
        </ul>
      </div>

      {/* End Main Menu */}
    </div>
  );
}
