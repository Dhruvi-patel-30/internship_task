import React from "react";
import { assets } from "../assets/assets";
import SiteText from "../components/SiteText";
import { Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPenToSquare,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import SiteButton from "../components/SiteButton";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  return (
    <div
      style={{ height: "auto", position: "relative" }}
      className=" m-3 rounded "
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 rounded"
        style={{
          backgroundImage: `url(${assets.contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          // objectFit: "contain",
          zIndex: 0,
        }}
      />
      <div
        className=" text-md-start p-3 p-sm-4 md-5 p-lg-5 text-center text-lg-start pb-0"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <SiteButton
          text="GET IN TOUCH"
          className="text-success rounded-5 bg-success bg-opacity-10 border-0 p-2 mb-3"
          style={{ maxWidth: "250px", width: "100%" }}
          icon={
            <FontAwesomeIcon
              icon={faEnvelope}
              className="ps-2"
              style={{ color: "rgb(45, 170, 105)" }}
            />
          }
        />
        <h1 className="text-dark display-3 display-md-2 fw-semibold hover">
          Contact Us
        </h1>
        <h3
          className="display-5 display-md-4 hover"
          style={{ fontFamily: "Brush Script MT, cursive", color: "green" }}
        >
          We'd Love to Hear From You!
        </h3>
        <p className="text-dark  fs-5 fs-md-4  ">
          Have a question, suggestion, or feedback? Feel free to reach out –
          we're here to help.
        </p>
      </div>
    </div>
  );
};

export default Main;
