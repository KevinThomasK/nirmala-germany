"use client";
import { contactItems } from "@/data/contact";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  const [ipAddress, setIpAddress] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const router = useRouter(); // To handle redirection

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://dashboard.omnisellcrm.com/api/store",
        {
          name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          location: null,
          company_name: "Nirmala",
          lead_types_id: "nirmala_ireland",
          requirement: "",
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
        router.push("/thank-you"); // Redirect to the Thank You page on success
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Error submitting form, please try again.");
    }
  };

  return (
    <>
      <div className="row wow fadeInUp">
        {/* Left Column */}
        <div className="col-lg-5 mb-md-50 mb-sm-30 d-flex align-items-strech">
          <div
            className="bg-color-primary-1 bg-color-alpha-90 bg-image bg-scroll light-content w-100 round overflow-hidden px-4 px-sm-5 py-5"
            style={{
              backgroundImage:
                "url(/assets/images/demo-corporate/section-bg-4.jpg)",
            }}
          >
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`contact-item ${
                    index !== 3 ? "mb-40 mb-sm-20" : ""
                  }`}
                >
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title">{item.title}</h4>
                  <div className="ci-text large">{item.text}</div>
                  <div className="ci-link">
                    <a
                      href={item.link.url}
                      target={item.link.target}
                      rel={item.link.rel}
                    >
                      {item.link.text}
                    </a>
                  </div>
                </div>
                {index !== contactItems.length - 1 && (
                  <hr className="mt-0 mb-40 mb-sm-20 opacity-02" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* End Left Column */}

        {/* Right Column (Form) */}
        <div className="col-lg-7 d-flex align-items-stretch">
          <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5">
            <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
              Get A Free Consultation
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form contact-form"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-lg round form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-lg round form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="input-lg round form-control"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input
                  type="number"
                  name="whatsapp"
                  id="whatsapp"
                  className="input-lg round form-control"
                  placeholder="Enter your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  <div className="form-tip w-100 pt-3">
                    <i className="icon-info size-16" />
                    All the fields are required. By sending the form you agree
                    to the <a href="#">Terms & Conditions</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </div>
                </div>
                <div className="col-md-6 col-xl-5 mt-sm-20">
                  <div className="pt-3 text-md-end">
                    <button
                      type="button"
                      className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                      onClick={handleSubmit}
                    >
                      {"Send Message"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
