import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  Image,
  Form,
} from "react-bootstrap";
import SiteText from "./SiteText";
import {
  faFileLines,
  faUserGroup,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import SiteButton from "./SiteButton";
import BlogCard from "./BlogCard";
import CategoryList from "./CategoryList";
import { useState } from "react";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const BlogAndUser = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Container className="my-5">
      <Row>
        <Col md={3} className="">
          <Card className=" shadow-sm p-3 rounded ">
            <div className="align-items-center d-flex flex-row flex-md-column flex-lg-row justify-content-center gap-2">
              {" "}
              <FontAwesomeIcon
                size="2x"
                icon={faUserGroup}
                className="d-flex align-items-center justify-content-center"
                style={{ color: "rgba(63, 134, 68, 1.00)" }}
              />
              <SiteText
                text="All Users"
                className="text-success fs-4 text-center fw-semibold d-flex align-items-center justify-content-center mb-0"
                style={{ color: "rgba(39, 67, 47, 1.00)" }}
              />
            </div>

            <ListGroup variant="flush " className="mt-4 ">
              <ListGroup.Item className="d-flex mt-2 gap-3 gap-md-2 justify-content-lg-start justify-content-md-start justify-content-center align-items-center flex-md-column flex-lg-row">
                <div
                  className="border  justify-content-center align-items-center d-flex"
                  style={{
                    height: "50px",
                    minWidth: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={assets.book}
                    roundedCircle
                    className="w-100 h-100 object-fit-cover img-fluid roundedCircle"
                  />
                </div>
                <SiteText text="dhruvi akabari" className="fs-4 mb-0 " />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={9} className="">
          <div className="align-items-center d-flex flex-column flex-md-row  flex-lg-row justify-content-between mt-5 mt-md-2 mb-4">
            {" "}
            <section className="d-flex flex-row gap-2 ">
              <FontAwesomeIcon
                size="2x"
                icon={faFileLines}
                className="align-items-center justify-content-center "
                style={{ color: "rgba(63, 134, 68, 1.00)" }}
              />
              <SiteText
                text="Latest Food Blog"
                className="text-success fs-3 text-center fw-bold  align-items-center justify-content-center mb-0"
                style={{ color: "rgba(39, 67, 47, 1.00)" }}
              />
            </section>
            <section>
              <Form.Select
                className="p-2 mt-4 mt-md-0 text-success focus-ring focus-ring-success border-success-subtle px-5"
                color="rgba(77, 109, 71, 1.00)"
              >
                <option className="bg-success-subtle">Select Category</option>
                <CategoryList />
              </Form.Select>
            </section>
          </div>
          <Row>
            <BlogCard
              wishlistIcon={
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="position-absolute btn btn-link p-0 text-decoration-none"
                  style={{
                    top: "20px",
                    right: "20px",
                    zIndex: 10,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
                    border: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={isWishlisted ? faHeartSolid : faHeartRegular}
                    style={{
                      // color: isWishlisted ? "red" : "gray",
                      color: "red",
                      fontSize: "1.2rem",
                    }}
                  />
                </button>
              }
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogAndUser;
