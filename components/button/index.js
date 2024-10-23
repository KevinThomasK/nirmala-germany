"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import FullScreenModal from "../NewModal";

export const BannerBtm = () => {
  const [togglePopUp, setTogglePopUp] = useState();
  const btnClick = () => {
    console.log("click");
    setTogglePopUp(!togglePopUp);
  };
  return (
    <>
      {togglePopUp && (
        <FullScreenModal isOpen={togglePopUp} onClose={btnClick} />
      )}
      <div className="local-scroll mb-60 mb-sm-50" onClick={btnClick}>
        <a className="btn btn-mod btn-color btn-large btn-round btn-hover-anim">
          <span>Book Free Counselling Now</span>
        </a>
      </div>
    </>
  );
};
