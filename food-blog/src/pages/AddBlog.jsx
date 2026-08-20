import React from "react";
import { assets } from "../assets/assets";
import SiteText from "../components/SiteText";
import { Form, Image } from "react-bootstrap";
import SiteButton from "../components/SiteButton";
import UserInput from "../components/UserInput";

const AddBlog = () => {
  return (
    <div
      style={{ height: "auto", position: "relative" }}
      className="d-flex flex-column m-3 rounded align-items-center pb-5"
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 rounded"
        style={{
          backgroundImage: `url(${assets.addBlogBG})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          zIndex: 0,
        }}
      />
      <div
        className="text-center mt-4 d-flex flex-column align-items-center"
        style={{
          position: "relative",
          width: "70%",
          minWidth: "250px",
          zIndex: 1,
        }}
      >
        <SiteText
          text="Add New Blog"
          className="fw-semibold fs-2 text-center"
        />

        <Form className="d-flex flex-column mt-2 w-100 align-items-center">
          <Form.Group
            className="mb-3 w-100 text-start"
            controlId="blogImageUpload"
          >
            <Form.Label className="d-flex">
              <SiteText
                text="Upload Blog Image"
                className="fs-6 fw-semibold mb-0"
              />
            </Form.Label>
            <Image
              src={assets.food9}
              className="w-75 object-fit-cover p-1 rounded-5 img-fluid"
              style={{
                backgroundPosition: "top center",
                border: "2px dashed green",
                height: "250px",
                minHeight: "100px",
                maxWidth: "400px",
                minWidth: "240px",
              }}
            />
          </Form.Group>

          {/* <Form.Group
            className="mb-3 w-100 text-start"
            controlId="blogTitleInput"
          >
            <Form.Label>
              <SiteText text="Blog Title" className="fs-6 fw-semibold mb-0" />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog title"
              className="p-2"
            />
          </Form.Group> */}
          <UserInput type="email" placeholder="Enter Email" />

          <Form.Group
            className="mb-3 w-100 text-start"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="d-flex ">
              <SiteText text={"Category"} className="fs-6 fw-semibold mb-0" />
            </Form.Label>
            <Form.Select className="p-2">
              <option>Select Category</option>
              <option>Recipes</option>
              <option>Healthy Food</option>
              <option>Street Food</option>
              <option>Desserts</option>
              <option>Drinks</option>
              <option>Breakfast & Snacks</option>
              <option>Vegetarian</option>
              <option>Restaurant Reviews</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="mb-3 w-100 text-start"
            controlId="blogContentInput "
          >
            <Form.Label>
              <SiteText
                text="Blog Description"
                className="fs-6 fw-semibold mb-0"
              />
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your blog content here..."
              className="p-2"
            />
          </Form.Group>
          <div className="d-flex flex-column flex-md-row flex-lg-row gap-4">
            <SiteButton
              text="cancle"
              className="mt-4 bg-transparent text-success border-success p-2"
            />
            <SiteButton
              text="Publish Blog"
              className="mt-lg-4 mt-2 bg-success border-0 p-2"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
