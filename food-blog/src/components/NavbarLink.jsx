import React from "react";
import Nav from "react-bootstrap/Nav";

const NavbarLink = ({ href, className, pageName }) => {
  return (
    <>
      {/* <Nav.Link href="/home" className="custom-nav-link">
        Home
      </Nav.Link> */}
      <Nav.Link href={href} className={className}>
        {pageName}
      </Nav.Link>
      {/* <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link> */}
    </>
  );
};

export default NavbarLink;
