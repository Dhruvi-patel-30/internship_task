import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import { assets } from "../assets/assets";
import NavbarLink from "./NavbarLink";
import NavLink from "./NavLink";

const FoodNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary shadow-lg rounded m-3"
        style={{ height: "70px", zIndex: 1050, position: "relative" }}
      >
        <Container className="d-flex align-items-center justify-content-between position-relative h-100">
          {/* brand start */}
          <div>
            <Navbar.Brand
              href="#home"
              className="d-flex align-items-center"
              style={{
                height: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "110px",
                  width: "auto",
                }}
              >
                <Logo
                  style={{ height: "100%", width: "auto" }}
                  className={"hover"}
                />
              </div>
            </Navbar.Brand>
          </div>
          {/* brand end */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav zIndex-0" />

          <Navbar.Collapse
            id="responsive-navbar-nav "
            className="text-center justify-content-center align-items-center bg-body-tertiary"
          >
            {/* nav link start */}
            <Nav className="mx-lg-auto gap-4 align-items-center justify-content-center text-center my-lg-0 fw-bold">
              <NavLink />
            </Nav>
            {/* nav link end */}

            {/* nav icon start */}
            <Nav className="align-items-center justify-content-center gap-2 ms-lg-auto">
              <Nav.Link
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <div className="position-relative d-inline-block hover">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      color: "black",
                      fontSize: "30px",
                    }}
                  />
                  <span
                    className="position-absolute bg-danger top-0 start-100 translate-middle badge rounded-pill"
                    style={{
                      fontSize: "0.65rem",
                    }}
                  >
                    0
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="d-flex align-items-center justify-content-center hover"
              >
                <Image
                  src={assets.new3}
                  roundedCircle
                  style={{ height: "45px", width: "45px", objectFit: "cover" }}
                />
              </Nav.Link>
              <Nav.Link
                href="#"
                className="d-flex align-items-center justify-content-center hover"
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  style={{ color: "rgb(10, 12, 15)", fontSize: "30px" }}
                />
              </Nav.Link>
            </Nav>
            {/* nav icon end */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FoodNavbar;
