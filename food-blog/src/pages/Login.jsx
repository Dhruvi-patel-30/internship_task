import React from "react";
import { assets, containerStyle } from "../assets/assets"; 
import { Container, Form, Card, Image, Col } from "react-bootstrap";
import UserInput from "../components/UserInput";
import Logo from "../components/Logo";
import FormHeading from "../components/FormHeading";
import Button from "../components/SiteButton";
import LinkForm from "../components/LinkForm";

const Login = () => {
  return (
    <div
      style={{ minHeight: "100vh", overflowY: "auto", position: "relative" }}
      className=" d-flex flex-column"
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${assets.formBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          zIndex: 0,
        }}
      />

      <div
        className="row justify-content-center m-0 w-100 min-vh-100 align-items-center"
        style={{ position: "relative", zIndex: 1 }}
        image
      >
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Card
            style={{ ...containerStyle, position: "relative" }}
            className="shadow my-5 mx-4 mx-lg-5 p-3 hover"
          >
            <Logo style={{ width: "150px" }} className={"ms-4 mt-2"} />
            <FormHeading
              heading="Welcome Back!"
              subHeading="Login to continue your foodie journey "
            />
            <Form className="px-2 mt-5">
              <UserInput type="email" placeholder="Enter Email" />
              <UserInput type="Password" placeholder="Enter Password" />

              <LinkForm
                style={{ textAlign: "right" }}
                link="Forget Password"
                path="/ResetPassword"
              />

              <div className="d-flex justify-content-center mb-3 mt-4">
                <Button
                  text="Login"
                  variant={"success"}
                  className={"btn justify-content-center p-2"}
                  style={{ width: "70%" }}
                />
              </div>
            </Form>
            <LinkForm
              text="Dont't have an account?"
              link="Register here"
              path="/register"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
