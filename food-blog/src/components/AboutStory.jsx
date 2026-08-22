import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { assets } from "../assets/assets";
import SiteButton from "./SiteButton";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesomeIcon from "./FontAwesomeIcon";
import SiteText from "./SiteText";

const AboutStory = () => {
  return (
    <div className="mx-3 mb-0 rounded">
      <Row className="d-flex text-center p-2 p-lg-4">
        <Col
          xs={12}
          sm={6}
          lg={6}
          className="  text-center d-flex justify-content-center align-items-center"
        >
          <Image
            src={assets.about}
            className="hover img-fluid  w-100 h-100 hover"
            style={{
              maxWidth: "650px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col xs={12} sm={6} lg={6} className="text-center ">
          <SiteButton
            text={"OUR STORY"}
            className={
              " text-danger rounded-5 bg-transparent fw-semibold border-0 p-2 mb-3"
            }
            style={{ width: "50%", minWidth: "200px" }}
            icon2={
              <FontAwesomeIcon
                icon={faLeaf}
                style={{ color: "rgb(45, 170, 105)", paddingRight: "5px" }}
              />
            }
          />

          <SiteText
            text="How FoodieBlog"
            className="text-dark fw-xl display-3 mb-0 fw-semibold hover"
          />
          <SiteText
            text="Began"
            className="fw-xl display-3 mt-0 fw-semibold hover"
            style={{ color: "rgb(45, 170, 105)" }}
          />

          <SiteText
            text="FoodieBlog was born out of a simple love for food and the joy it
            brings to our lives.what started as a small kitchen experiment has
            now grown into a vibrant community of food lovers.Our Mission is to
            inspier you to cook better,eat healthier, and enjoy every bite."
            className="fw-semibold text-muted mt-4 w-75 mx-auto text-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutStory;
