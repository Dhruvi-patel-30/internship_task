import React from "react";
import { Form } from "react-bootstrap";

const UserInput = ({ type, placeholder, value, className, className2 }) => {
  return (
    <>
      <Form.Group className={className2}>
        <Form.Control
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          className={className}
        />
      </Form.Group>
    </>
  );
};

export default UserInput;
