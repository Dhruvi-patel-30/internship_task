import React from 'react'
import { Form } from 'react-bootstrap'
import {Link } from 'react-router-dom'

const LinkForm = () => {
  return (
    <>
    
      <Form.Text>
        Already have an account? <Link to="/login">Log in here</Link>
      </Form.Text>
    </>
  );
};

export default LinkForm;