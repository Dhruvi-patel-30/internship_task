import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkForm = ({ text, link, path, style }) => {
  return (
    <>
      <Form.Text
        style={{ display: "block", width: "100%", ...style }}
        className="fw-bold ps-3 "
      >
        {text}
        <Link
          style={style}
          className="text-success fw-bold text-decoration-none ps-2"
          to={path}
        >
          {link}
        </Link>
      </Form.Text>
    </>
  );
};

export default LinkForm;
