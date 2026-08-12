import React from "react";
import { Card } from "react-bootstrap";

const FormHeading = ({ heading, subHeading }) => {
  // form  heading
  return (
    <div className="ms-4">
      <h3
        className="fw-bold mb-0"
        style={{ fontFamily: "Open Sans" }}
        className=" fw-semibold"
      >
        {heading}
      </h3>
      <h2 style={{ fontFamily: "Brush Script MT", color: "green" }}>
        {subHeading}
      </h2>
    </div>
  );

};

export default FormHeading;
