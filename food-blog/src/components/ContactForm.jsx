import React from "react";
import { Form, Image } from "react-bootstrap";
import SiteText from "./SiteText";
import { assets } from "../assets/assets";
import SiteButton from "./SiteButton";
import UserInput from "./UserInput";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from "./FontAwesomeIcon";

const ContactForm = () => {
  return (
    <div
      className="mx-3 border-0 rounded w-75 text-center align-items-center justify-content-center mx-auto p-5"
      style={{
        backgroundColor: "rgba(247, 251, 243, 1.00)",
        minWidth: "300px",
      }}
    >
      <SiteText text="Send Us a Message" className="fw-bold fs-2 mb-0" />
      <SiteText
        text="Fill out the form and we'get back to you soon."
        className=" text-muted"
      />

      <Form className="d-flex flex-column mt-2 w-100 align-items-center p-0 px-lg-5">
        <UserInput
          type="text"
          placeholder="Enter Your Name"
          className="p-2"
          className2="mb-3 w-100 text-start"
          controlId="blogNameInput"
        />

        <UserInput
          type="text"
          placeholder="Enter Your Email"
          className="p-2"
          className2="mb-3 w-100 text-start"
          controlId="blogNameInput"
        />

        <UserInput
          type="text"
          placeholder="Enter Your Subject"
          className="p-2"
          className2="mb-3 w-100 text-start"
          controlId="blogNameInput"
        />

        <UserInput
          as="textarea"
          rows={4}
          placeholder="Write your blog content here..."
          className="p-2"
          className2="mb-3 w-100 text-start"
          controlId="blogNameInput"
        />
        <div className="d-flex flex-column flex-md-row flex-lg-row gap-4">
          <SiteButton
            icon2={<FontAwesomeIcon icon={faPaperPlane} className="pe-2" />}
            text="Send Message"
            className="mt-lg-4 mt-2 bg-success border-0 p-2"
          />
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
