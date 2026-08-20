import React from "react";
import { Button } from "react-bootstrap";

const SiteButton = ({ text, style, className, variant, icon, icon2 }) => {
  return (
    <>
      <Button variant={variant} style={style} className={className}>
        {icon2}
        {text}
        {icon}
      </Button>
    </>
  );
};

export default SiteButton;
