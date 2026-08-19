import React from "react";
import { assets } from "../assets/assets";
import { Row, Col, Image, Container } from "react-bootstrap";
import SiteText from "./SiteText";

const data = [
  {
    id: 1,
    number: "50K+",
    label: "Happy Food Lovers",
    icon: `${assets.people}`,
  },
  {
    id: 2,
    number: "200+",
    label: "Recipes Shared",
    icon: `${assets.book}`,
  },

  {
    id: 3,
    number: "10+",
    label: "Food Categories",
    icon: `${assets.leaf}`,
  },
  {
    id: 4,
    number: "15+",
    label: "Countries Reached",
    icon: `${assets.earth}`,
  },
];
const AboutCounter = () => {
  return (
    <div style={{ height: "auto", position: "relative" }} className=" m-3">
      <div
        className="position-absolute top-0 start-0 w-100 h-100 rounded"
        style={{
          backgroundImage: `url(${assets.about2})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          zIndex: 0,
        }}
      />
      <div
        className=""
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container className="my-4 p-3">
          <Row className=" justify-contain-between ">
            {data.map((item, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={3}
                className="text-center d-flex align-items-center justify-content-center mb-3 mb-lg-0 mb-md-0 "
              >
                <div>
                  <Image
                    src={item.icon}
                    roundedCircle
                    style={{ width: "70px" }}
                    className="object-fit-contain hover "
                  />
                </div>
                <div className="d-flex flex-column text-start me-4">
                  <SiteText text={item.number} className="fs-4 fw-bold mb-0" />
                  <SiteText text={item.label} className="fs-6" />
                </div>
                {index !== data.length - 1 && (
                  <div
                    className="d-none d-lg-block bg-secondary bg-opacity-50"
                    style={{
                      width: "2px",
                      height: "45px",
                      alignSelf: "center",
                      mixWidth: "1px",
                    }}
                  />
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutCounter;
