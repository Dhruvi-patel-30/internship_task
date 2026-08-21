import React from "react";
import { Form } from "react-bootstrap";

const UserInput = ({
  rows,
  as,
  label,
  type,
  placeholder,
  value,
  className,
  className2,
}) => {
  return (
    <>
      <Form.Group className={className2}>
        {label}
        <Form.Control
          rows={rows}
          as={as}
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          className={`${className} focus-ring focus-ring-success border-success-subtle`}
        />
      </Form.Group>
    </>
  );
};

export default UserInput;
