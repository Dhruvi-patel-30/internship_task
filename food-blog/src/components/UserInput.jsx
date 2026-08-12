import React from "react";
import { Form } from "react-bootstrap";

const UserInput = ({ type, placeholder, value }) => {
  return (
    <>
      <Form.Group className="mb-4  px-lg-4">
        <Form.Control
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          className="form-control p-2"
        />
      </Form.Group>
    </>
  );
};

export default UserInput;
