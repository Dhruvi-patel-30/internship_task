import React from "react";
import SiteText from "./SiteText";
import { assets } from "../assets/assets";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Image,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
} from "react-bootstrap";
import BlogCard from "./BlogCard";
import SiteButton from "./SiteButton";

const MyBlog = () => {
  return (
    <div
      className="m-3 rounded "
      style={{ backgroundColor: "rgba(247, 253, 242, 1.00)" }}
    >
      <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center mx-5 mb-4 pt-2">
        <SiteText
          text="My Published Blogs"
          className="fw-semibold fs-1 d-flex align-items-center"
        />
        <Button
          href="/addblog"
          style={{ backgroundColor: "rgba(73, 122, 35, 1.00)" }}
          className="border-0 "
        >
          <FontAwesomeIcon icon={faPlus} /> Add Blog
        </Button>
      </div>

      <Row className="text-center mx-auto px-lg-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Row>
    </div>
  );
};

export default MyBlog;
