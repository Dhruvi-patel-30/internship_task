import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import FontAwesomeIcon from "../components/FontAwesomeIcon";
import { faHeart as faHeartSolid,  } from "@fortawesome/free-solid-svg-icons";
import SiteText from "../components/SiteText";
import CategoryList from "../components/CategoryList";
import BlogCard from "../components/BlogCard";
import WishListHead from "../components/WishListHead";
import { useState } from "react";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";


const WishListPage = () => {
    const [isWishlisted, setIsWishlisted] = useState(false);
  
  return (
    <>
      <WishListHead />
      <Container>
        <Row>
          <div className="align-items-center d-flex flex-column flex-md-row  flex-lg-row justify-content-between mt-5 mt-md-2 mb-4">
            {" "}
            <section className="d-flex flex-row gap-2 ">
              <SiteText
                text="My Wishlist"
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
        </Row>
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

        {/* </Col> */}
      </Container>
    </>
  );
};

export default WishListPage;
