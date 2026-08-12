import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";

const FoodNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg "
        className="bg-body-tertiary shadow-lg rounded m-4"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo style={{ height: "200px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-3">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#pricing">Add Blog</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link  href="#memes">Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FoodNavbar;
