import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";
import FooterIcons from "./FooterIcons";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import CategotyList from "./CategotyList";
import SiteText from "./SiteText";
import InstaFeedImg from "./InstaFeedImg";
import { assets } from "../assets/assets";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <footer
      className="mt-auto shadow-lg w-100"
      style={{ backgroundColor: "rgba(252, 249, 243, 1.00)" }}
    >
      <Container fluid="xxl" className="py-5 px-4">
        <Row className="gy-4">
          <Col xs={12} sm={6} lg={4} className="text-center text-md-start">
            <div
              style={{ width: "150px", height: "100px" }}
              className="mx-auto mx-md-0 mb-3"
            >
              <Logo style={{ width: "100%" }} />
            </div>
            <p
              className="text-muted mb-4 text-center text-md-start"
              style={{ lineHeight: "1.6" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              animi aspernatur voluptatem error illo, nesciunt odit illum,
              consequuntur repellat minus similique voluptatum ipsam dicta
              sapiente excepturi hic impedit, quas at?
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <FooterIcons />
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            lg={2}
            className="text-center text-md-start mt-lg-5"
          >
            <SiteText
              text="Quick Links"
              className="fw-bold mb-3 d-block text-center text-md-start"
            />
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <NavLink />
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            lg={2}
            className="text-center text-md-start mt-lg-5"
          >
            <SiteText
              text="Categories"
              className="fw-bold mb-3 d-block text-center text-md-start"
            />
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <CategotyList />
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            lg={4}
            className="text-center text-md-start mt-lg-5"
          >
            <SiteText
              text="Instagram Feed"
              className="fw-bold mb-3 d-block text-center text-md-start"
            />
            <div className="d-flex justify-content-center justify-content-md-start fallback-wrapper">
              <InstaFeedImg />
            </div>
          </Col>
        </Row>

        <hr className="my-4 text-muted opacity-25" />

        <Row className="align-items-center gy-3 text-center text-sm-start text-muted">
          <Col xs={12} sm={4} className="order-2 order-sm-1">
            <SiteText text="© 2025 FoodieBlog. All rights reserved." />
          </Col>

          <Col
            xs={12}
            sm={4}
            className="d-flex justify-content-center order-1 order-sm-2"
          >
            <div style={{ maxWidth: "100px" }}>
              <Image
                src={assets.logo2}
                className="img-fluid object-fit-cover w-100"
              />
            </div>
          </Col>

          <Col xs={12} sm={4} className="text-center text-sm-end order-3">
            <SiteText text="Privacy Policy | Terms & conditions" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
