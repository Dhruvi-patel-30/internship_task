import React from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { assets } from "../assets/assets";
import SiteText from "./SiteText";
import SiteButton from "./SiteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileDetail = () => {
  return (
    <div className="border m-3 mt-5 mb-5 rounded">
      <Row className=" text-center justify content-between">
        <Col
          xs={12}
          md={4}
          lg={3}
          className=" align-items-center d-flex justify-content-center"
        >
          <div className="p-3">
            {" "}
            <Image
              src={assets.food13}
              className="me-lg-4 mx-md-1 me-0 object-fit-cover"
              thumbnail
              roundedCircle
              style={{ borderRadius: "50%", height: "150px", width: "150px" }}
            />
          </div>

          <div
            className="d-none d-lg-block d-md-block bg-secondary bg-opacity-50"
            style={{
              width: "2px",
              height: "80%",
              alignSelf: "center",
              mixWidth: "1px",
            }}
          />
        </Col>
        <Col xs={12} md={8} lg={9} className="">
          <div className=" d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-between mt-3">
            <div className=" d-flex mb-3 ">
              <div
                style={{
                  backgroundColor: "rgba(236, 249, 223, 1.00)",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
                className="align-items-center d-flex justify-content-center "
              >
                <FontAwesomeIcon
                  size="2x"
                  icon={faUser}
                  style={{
                    color: "rgba(63, 115, 27, 1.00)",
                  }}
                />
              </div>
              <SiteText
                text="Profile Details"
                className="fs-2 fw-bold mb-0 ms-2"
              />
            </div>

            <div className="pe-lg-5 pe-md-3 pe-0 mb-3">
              <SiteButton
                text="Edit Profile"
                className=" fw-semibold border-0 w-100 p-2"
                style={{
                  backgroundColor: "rgba(236, 249, 223, 1.00)",
                  color: "rgba(30, 56, 16, 1.00)",
                }}
                icon2={
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faPen}
                    style={{
                      color: "rgba(63, 115, 27, 1.00)",
                    }}
                  />
                }
              />
            </div>
          </div>

          <div className=" me-0 me-md-3 me-lg-5 w-lg-50 w-md-50 p-3">
            <Form className="d-flex flex-column mt-2 col-12 col-md-12 col-lg-9">
              <Form.Group
                className="mb-3  text-start"
                controlId="blogTitleInput"
              >
                <Form.Label>
                  <SiteText
                    text="First Name"
                    className="fs-6 fw-semibold mb-0"
                  />
                </Form.Label>
                <Form.Control
                  type="text"
                  value="dhruvi"
                  placeholder="Enter blog title"
                  className="p-2"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="blogTitleInput"
              >
                <Form.Label>
                  <SiteText
                    text="Last Name"
                    className="fs-6 fw-semibold mb-0"
                  />
                </Form.Label>
                <Form.Control
                  type="text"
                  value="akabari"
                  placeholder="Enter blog title"
                  className="p-2 0"
                />
              </Form.Group>
              <Form.Group
                className="mb-3  text-start"
                controlId="blogTitleInput"
              >
                <Form.Label>
                  <SiteText text="Email" className="fs-6 fw-semibold mb-0" />
                </Form.Label>
                <Form.Control
                  type="text"
                  value="dhruvi@gmail.com"
                  placeholder="Enter blog title"
                  className="p-2 "
                />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileDetail;
