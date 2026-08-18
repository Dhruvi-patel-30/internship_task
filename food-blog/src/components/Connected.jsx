import React from "react";
import { assets } from "../assets/assets";
import { Image, Form, Button, Container, Row, Col } from "react-bootstrap";
import SiteText from "./SiteText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import SiteButton from "./SiteButton";

const Connected = () => {
  return (
    <div
      fluid="xxl"
      className="py-3 px-0 m-3 rounded "
      style={{ backgroundColor: "rgba(246, 243, 238, 1.00)" }}
    >
      <Row className="gy-4 align-items-center">
        <Col xs={12} sm={12} lg={2} className="text-center px-4 ">
          <Image
            src={assets.connecting}
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={5}
          className="d-flex flex-column justifyy-content-center align-items-center px-4 "
        >
          <div className="d-flex align-items-center ">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                paddingLeft: "5px",
                alignItems: "center",
                justifyContent: "center",
                color: "green",
              }}
              className="fs-1"
            />
            <SiteText
              text="Let's Stay Connected"
              className="fs-1 mb-0"
              style={{ fontFamily: "Brush Script MT", color: "green" }}
            />
          </div>
          <div>
            <SiteText
              text="Get the latest recipes, food stories & tops straight to your inbox."
              className="fs-6 fw-semibold text-muted"
            />
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={5}
          className="d-flex flex-column justify-content-center align-items-center  px-4"
        >
          <div className="d-flex w-75 bg-white rounded-5 position-relative overflow-hidden">
            <Form.Control
              type="email"
              placeholder="Enter Email..."
              className="border-0 p-2 pe-5"
              style={{ width: "100%" }}
            />
            <SiteButton
              size="lg"
              text="Subscribe"
              className="bg-success border-0 position-absolute top-0 end-0 h-100 rounded-5"
            />
          </div>

          <div className="d-flex text-align-center gap-2 mt-3">
            <SiteText
              text="No spam, only delicious recipes!"
              className="fs-6 text-muted"
            />
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "rgb(45, 170, 105)", paddingLeft: "5px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Connected;
