import React from "react";
import { assets } from "../assets/assets";
import SiteText from "../components/SiteText";
import { Form, FormControl, Image } from "react-bootstrap";
import SiteButton from "../components/SiteButton";
import UserInput from "../components/UserInput";
import FormLabel from "../components/FormLabel";
import { useState } from "react";
import { useRef } from "react";
import CategoryList from "../components/CategoryList.jsx";

const AddBlog = () => {
  const [image, setImage] = useState(assets.food9);
  const hiddenFileInput = useRef(null);

  const handleImageClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

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
            <FormLabel
              text="Upload Blog Image"
              className="fs-6 fw-semibold mb-0"
              className2="d-flex"
            />
            <FormControl
              type="file"
              ref={hiddenFileInput}
              onChange={handleImageChange}
              className="d-none"
              accept="image/*"
            />
            <Image
              src={image}
              className="w-75 object-fit-cover p-1 rounded-5 img-fluid"
              onClick={handleImageClick}
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

          <UserInput
            label={
              <FormLabel text="Blog Title" className="fs-6 fw-semibold mb-0" />
            }
            type="text"
            placeholder="Enter Blog Title"
            className="p-2"
            className2="mb-3 w-100 text-start"
          />

          <Form.Group
            className="mb-3 w-100 text-start"
            controlId="exampleForm.ControlTextarea1"
          >
            <FormLabel
              text="Category"
              className="fs-6 fw-semibold mb-0"
              className2="d-flex"
            />
            <Form.Select className="p-2 focus-ring focus-ring-success border-success-subtle">
              <option className="bg-success-subtle">Select Category</option>
              <CategoryList />
            </Form.Select>
          </Form.Group>

          <UserInput
            label={
              <FormLabel
                text="Blog Description"
                className="fs-6 fw-semibold mb-0"
              />
            }
            as="textarea"
            rows={4}
            placeholder="Write your blog content here..."
            className="p-2"
            className2="mb-3 w-100 text-start"
          />
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
