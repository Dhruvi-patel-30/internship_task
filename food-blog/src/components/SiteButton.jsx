import React from "react";
import { Button } from "react-bootstrap";

const SiteButton = ({ text, style, className, variant }) => {
  return (
    <>
      <Button variant={variant} style={style} className={className}>
        {text}
      </Button>
    </>
  );
};

export default SiteButton;
