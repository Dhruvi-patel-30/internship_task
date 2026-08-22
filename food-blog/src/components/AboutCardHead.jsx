import React from "react";
import { Image } from "react-bootstrap";
import { assets } from "../assets/assets";
import SiteText from "./SiteText";

const AboutCardHead = () => {
  return (
    <div className="d-flex flex-column  align-items-center">
      <Image src={assets.logo2} className="" style={{ width: "50px" }} />
      <h1>
        Why Choose Foodie
        <span style={{ fontFamily: "Brush Script MT", color: "green" }}>
          Blog
        </span>
      </h1>

      <SiteText
        className="fw-semibold"
        text="Because every bite tells a story!"
      />
    </div>
  );
};

export default AboutCardHead;
