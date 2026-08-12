import React, { useState } from "react";
import { assets, formBgImg, containerStyle } from "../assets/assets";
import { Container, Form, Card, Image, Col } from "react-bootstrap";
import UserInput from "../components/UserInput";
import Logo from "../components/Logo";
import FormHeading from "../components/FormHeading";
import Button from "../components/SiteButton";
import LinkForm from "../components/LinkForm";

const Register = () => {
  const [imgPreview, setImgPreview] = useState(assets.new3);

  const handlechange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setImgPreview(localUrl);
    }
  };

  return (
    <div
      style={{ ...formBgImg, minHeight: "100vh", overflowY: "auto" }}
      className=" d-flex flex-column"
    >
      <div className="row justify-content-center m-0 w-100 min-vh-100 align-items-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Card
            style={{ ...containerStyle, position: "relative" }}
            className="shadow my-5 mx-4 mx-lg-5 p-3"
          >
            <Logo style={{ width: "150px" }} className={"ms-4 mt-2"} />
            <FormHeading
              heading="Create Account"
              subHeading="join our community today!"
            />
            <Form className="px-2">
              <Form.Group className="d-flex justify-content-center mb-3">
                <label htmlFor="img">
                  <Image
                    src={imgPreview}
                    roundedCircle
                    style={{
                      height: "130px",
                      width: "130px",
                      objectFit: "cover",
                      border: "dashed",
                      borderColor: "lightgreen",
                      borderWidth: "1px",
                    }}
                  />
                  <Form.Control
                    type="file"
                    accept="Image/**"
                    onChange={handlechange}
                    hidden
                    id="img"
                  ></Form.Control>
                </label>
              </Form.Group>
              <UserInput
                type="text"
                placeholder="Enter First Name"
                display="none"
              />
              <UserInput type="text" placeholder="Enter Last Name" />
              <UserInput type="email" placeholder="Enter Email" />
              <UserInput type="Password" placeholder="Enter Password" />
              <UserInput type="Password" placeholder="Enter Confirm Password" />
              <UserInput type="text" placeholder="Enter Valid OTP" />
              <div className="d-flex justify-content-center mb-3 mt-4">
                <Button
                  text="Send OTP"
                  variant={"success"}
                  className={"btn justify-content-center p-2"}
                  style={{ width: "70%" }}
                />
              </div>
            </Form>
            <LinkForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
