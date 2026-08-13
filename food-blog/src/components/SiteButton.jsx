import React from "react";
import { Button } from "react-bootstrap";

const SiteButton = ({ text, style, className, variant, icon }) => {
  return (
    <>
      <Button variant={variant} style={style} className={className}>
        {text}
        {icon}
      </Button>
    </>
  );
};

export default SiteButton;
