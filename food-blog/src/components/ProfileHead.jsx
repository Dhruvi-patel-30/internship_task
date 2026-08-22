import React from "react";
import { assets } from "../assets/assets";
import SiteText from "../components/SiteText";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileHead = () => {
  return (
    <div
      style={{ height: "auto", position: "relative" }}
      className=" m-3 rounded "
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 rounded"
        style={{
          backgroundImage: `url(${assets.profileHeadBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          zIndex: 0,
        }}
      />
      <div
        className="d-flex align-items-center  text-md-start p-3 p-sm-4 md-5 p-lg-5 text-center text-lg-start pb-0"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <section className="m-3 align-items-top">
          <FontAwesomeIcon
            size="3x"
            icon={faUser}
            style={{
              color: "rgba(63, 115, 27, 1.00)",
              width: "100%",
            }}
          />
        </section>
        <section>
          <SiteText text="My Profile" className="fw-bold fs-2 mb-0" />
          <SiteText
            text="Manage Your Profile And Stories"
            className="text-muted"
          />
        </section>
      </div>
    </div>
  );
};

export default ProfileHead;
