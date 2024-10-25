"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });
  const [ipAddress, setIpAddress] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const router = useRouter();

  // Get the user's IP address
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(response.data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    setSourceUrl(window.location.href); // Get the current page's URL
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill in both your name and phone number.");
      return;
    }
    try {
      const response = await axios.post(
        "https://dashboard.omnisellcrm.com/api/store",
        {
          name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          location: null,
          company_name: "Nirmala",
          lead_types_id: "nirmala_germany",
          requirement: formData.whatsapp,
          ip_address: ipAddress, // Set IP address from API
          source_url: sourceUrl, // Set source URL
          source_app: null,
          source_website: "", // LP URL
          original_source: null,
          utm_source: null,
          utm_medium: null,
          utm_campaign: null,
          gclid: null,
          verified: 0,
          api: true,
        }
      );

      if (response.status === 200) {
        router.push("/study-in-germany/thank-you");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Error submitting form, please try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="contact-form rounded bg-white">
        <h2 className="text-center mb-4">Get A Free Consultation</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
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
              value={formData.whatsapp}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary premium-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
