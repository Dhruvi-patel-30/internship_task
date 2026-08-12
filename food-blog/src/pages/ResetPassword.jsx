import React from "react";
import { assets, formBgImg, containerStyle } from "../assets/assets";
import { Container, Form, Card, Image, Col } from "react-bootstrap";
import UserInput from "../components/UserInput";
import Logo from "../components/Logo";
import FormHeading from "../components/FormHeading";
import Button from "../components/SiteButton";

const ResetPassword = () => {
  return (
    <div
      style={{ ...formBgImg, minHeight: "100vh", overflowY: "auto" }}
      className="no-scrollbar d-flex flex-column"
    >
      <div className="row justify-content-center m-0 w-100 min-vh-100 align-items-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Card
            style={{ ...containerStyle, position: "relative" }}
            className="shadow my-5 mx-4 mx-lg-5 p-3"
          >
            <Logo style={{ width: "150px" }} className={"ms-4 mt-2"} />
            <FormHeading
              heading="Reset Password"
              subHeading="Enter your details below to create a new password."
            />
            <Form className="px-2 mt-5">
              <UserInput type="email" placeholder="Enter Email" />
              <UserInput type="text" placeholder="Enter Valid OTP" />
              <UserInput type="Password" placeholder="Enter Password" />
              <UserInput type="Password" placeholder="Enter Confirm Password" />
              <div className="d-flex justify-content-center mb-3 mt-4">
                <Button
                  text="Send OTP"
                  variant={"success"}
                  className={"btn justify-content-center p-2"}
                  style={{ width: "70%" }}
                />
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
