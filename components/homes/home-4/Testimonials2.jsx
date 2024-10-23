import { testimonials4 } from "@/data/testimonials";
import Image from "next/image";
import React from "react";

export default function Testimonials2() {
  return (
    <div className="row mt-n50 mb-70 mb-sm-50">
      {/* Testimonials Item */}
      {testimonials4.map((testimonial) => (
        <div
          key={testimonial.id}
          className="col-6 col-md-4 mt-50 wow fadeInLeft"
          data-wow-delay={testimonial.delay}
        >
          <div className="text-center px-lg-4">
            <div className="testimonials-5-stars">
              <Image
                src={testimonial.image}
                height={500}
                width={500}
                alt={testimonial.caption}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="testimonials-4-text fw-bold">
              {testimonial.text}
            </div>
            <div className="testimonials-5-caption">{testimonial.caption}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
