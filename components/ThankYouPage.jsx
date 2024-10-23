"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ThankYou = () => {
  const router = useRouter();

  // Redirect back to the home page after a few seconds if needed
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [router]);

  return (
    <div className="container text-center my-5">
      <div className="thank-you-message">
        <Image
          src="/assets/images/nirmal-lp/thank_you.jpg"
          alt="Thank you"
          className="img-fluid mb-4"
          width={500}
          height={500}
        />
        <h2 className="display-4 text-success animate__animated animate__bounceIn">
          Form Submitted Successfully!
        </h2>
        <p className="lead text-muted">
          Thank you for getting in touch! We&apos;ll get back to you soon.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
