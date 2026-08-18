import React from "react";
import NavbarLink from "./NavbarLink";

const link = [
  { href: "./", page: "Home" },
  { href: "./addblog", page: "Add Blog" },
  { href: "./about", page: "About" },
  { href: "./contact", page: "Contact" },
];

const NavLink = ({className}) => {
  return (
    <>
     
        {link.map((item, index) => (
          <NavbarLink
            className="mb-2 justify-content-center"
            key={index}
            href={item.href}
            pageName={item.page}
          />
        ))}
      
    </>
  );
};

export default NavLink;
