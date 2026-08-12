import React from "react";
import { assets } from "../assets/assets";
import { Image } from "react-bootstrap";

const Logo = ({ style, className }) => {
  return (
    <>
    {/* this is a logo componenet 123 */}
      <Image src={assets.logo} style={style} className={className} />
    </>
  );
};

export default Logo;
