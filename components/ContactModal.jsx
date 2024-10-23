"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="container my-5">
      <div className="contact-form  rounded  bg-white">
        <h2 className="text-center mb-4 mb-md-4 fs-4 fs-md-2">
          Get A Free Consultation
        </h2>

        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control premium-input"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control premium-input"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control premium-input"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="whatsapp" className="form-label">
              WhatsApp
            </label>
            <input
              type="text"
              className="form-control premium-input"
              id="whatsapp"
              placeholder="Enter your WhatsApp number"
            />
          </div>

          {/* <div className="mb-4">
            <p className="text-muted">
              <small>
                <i className="bi bi-info-circle"></i> All the fields are
                required. By sending the form, you agree to the{" "}
                <a href="#terms" className="text-decoration-underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#privacy" className="text-decoration-underline">
                  Privacy Policy
                </a>
                .
              </small>
            </p>
          </div> */}

          <button type="button" className="btn btn-primary premium-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
