import React from "react";
import { Form } from "react-bootstrap";
import SiteText from "./SiteText";

const FormLabel = ({ text, className, className2 }) => {
  return (
    <>
      <Form.Label className={className2}>
        <SiteText text={text} className={className} />
      </Form.Label>
    </>
  );
};

export default FormLabel;
