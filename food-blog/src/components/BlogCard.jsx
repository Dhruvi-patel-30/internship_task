import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { assets } from "../assets/assets";
import {
  faLeaf,
  faTrash,
  faPen,
  faBookOpen,
  faUser,
  faTag,
  // faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
// import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogCard = ({ editIcon, deleteIcon, wishlistIcon }) => {
  // const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <>
      <Col xs={12} md={6} lg={4} className="mb-3">
        <Card className="hover">
          <div className="position-relative">
            <Card.Img
              variant="top"
              src={assets.food11}
              className="p-2 rounded-4 object-fit-cover"
              style={{ height: "200px" }}
            />

            {wishlistIcon}
            {/* <button
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
            </button> */}
          </div>

          <Card.Body>
            <Card.Title className="fw-bold fs-3">
              Title : <span className=" fw-semibold">hello</span>
            </Card.Title>
            <hr />
            <Card.Text className="fw-bold fs-5">
              <FontAwesomeIcon
                icon={faTag}
                flip="horizontal"
                style={{
                  color: "rgba(63, 115, 27, 1.00)",
                }}
              />{" "}
              Category: <span className="fw-semibold">hello</span>{" "}
            </Card.Text>
            <Card.Text className="fw-bold fs-5">
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  color: "rgba(63, 115, 27, 1.00)",
                }}
              />{" "}
              Author: <span className="fw-semibold">hello</span>{" "}
            </Card.Text>
            <Card.Text className="">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <div className="d-flex gap-3 justify-content-center align-items-centermx-auto">
              <Button
                className="border-0 p-2 px-3"
                style={{
                  backgroundColor: "rgba(73, 122, 35, 1.00)",
                  color: "white ",
                }}
              >
                Read More
              </Button>
              {editIcon}
              {deleteIcon}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default BlogCard;
