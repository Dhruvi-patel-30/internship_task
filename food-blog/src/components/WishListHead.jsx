import React from "react";
import { assets } from "../assets/assets";
import SiteText from "../components/SiteText";
import { Form, Image } from "react-bootstrap";
import FontAwesomeIcon from "./FontAwesomeIcon";
import {
  faImage,
  faPenToSquare,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import SiteButton from "../components/SiteButton";

const WishListHead = () => {
  return (
    <div
      style={{ height: "auto", position: "relative" }}
      className=" m-3 rounded "
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 rounded "
        style={{
          backgroundImage: `url(${assets.wishlistBg})`,
          backgroundSize: "cover",
        //   backgroundPosition: "center",
          objectFit: "contain",
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
        {/* <SiteButton
          text="GET IN TOUCH"
          className="text-success rounded-5 bg-success bg-opacity-10 border-0 p-2 mb-3"
          style={{ maxWidth: "250px", width: "100%" }}
          icon2={
            <FontAwesomeIcon
              icon={faEnvelope}
              className="pe-2"
              style={{ color: "rgb(45, 170, 105)" }}
            />
          }
        /> */}
        <div className="d-flex align-items-center gap-3">
          <SiteText
            text="My"
            className="text-dark display-3 display-md-2 fw-semibold hover"
          />

          <SiteText
            text="Wishlist"
            className="display-3 display-md-4 hover "
            style={{ fontFamily: "Brush Script MT, cursive", color: "green" }}
          />
        </div>
        <SiteText
          text="Your Favourite Food Posts"
          className="fs-4 fw-semibold display-md-4 hover text-success "
        //   style={{ fontFamily: "Brush Script MT, cursive", color: "green" }}
        />
        <SiteText
          text="Here are the recepies and food stories you've saved for letter. Explore them anytime you want!"
          className="text-dark  fs-5 fs-md-4  "
        />
      </div>
    </div>
  );
};

export default WishListHead;
