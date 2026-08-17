import React from "react";
import Nav from "react-bootstrap/Nav";

const NavbarLink = ({ href, className, pageName }) => {
  return (
    <>
      <Nav.Link href={href} className={className}>
        {pageName}
      </Nav.Link>
    </>
  );
};

export default NavbarLink;
