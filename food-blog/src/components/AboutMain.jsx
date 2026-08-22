import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import SiteButton from "../components/SiteButton";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesomeIcon from "./FontAwesomeIcon";
import { assets } from "../assets/assets";
import SiteText from "./SiteText";

const AboutMain = () => {
  return (
    <div
      className="mx-3 rounded"
      style={{ backgroundColor: "rgba(250, 248, 245, 1.00)" }}
    >
      <Row className="d-flex text-center p-2 p-lg-4">
        <Col xs={12} sm={6} lg={6} className="text-center ">
          <SiteButton
            text={"ABOUT FOODIE BLOG"}
            className={
              " text-success rounded-5 bg-success bg-opacity-10 border-0 p-2 mb-3"
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
            text="We're More Thean"
            className="text-dark  fw-xl display-3 fw-semibold hover"
          />

          <SiteText
            text="Just Recipes"
            className="  fw-xl display-3 fw-semibold hover"
            style={{ color: "rgb(45, 170, 105)" }}
          />

          <SiteText
            text="We're a community that loves good food and good stories."
            className="display-1 hover fs-1 w-75 mx-auto text-center"
            style={{ fontFamily: "Brush Script MT" }}
          />
          <SiteText
            text="Foodie Blog is Your go-to place for delicious recipes, honest food
            stories, and trusted tips to make every meal a memorable one."
            className="text-dark mb-4 w-75 mx-auto text-center"
          />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={6}
          className="  text-center d-flex justify-content-center align-items-center"
        >
          <Image
            src={assets.aboutMain}
            thumbnail
            className="hover object-fit-cover w-100 h-100 "
            style={{
              borderRadius: "50%",
              maxWidth: "550px",
              maxHeight: "400px",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutMain;
