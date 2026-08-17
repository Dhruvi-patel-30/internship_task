import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { assets } from "../assets/assets";

const InstaFeedImg = () => {
  const feedImages = [  
    assets.food7,
    assets.food9,
    assets.food10,
    assets.food11,
    assets.food12,
    assets.food13,
  ];

  return (
    <div>
      <Container className="">
        <Row className="justify-content-around g-3">
          {feedImages.map((imageSrc, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="text-center">
              <Image
                src={imageSrc}
                alt={`Instagram Feed ${index + 1}`}
                rounded
                className="w-100 h-100 img-fluid gap-0 object-fit-cover hover"
                style={{ maxWidth: "90px", height: "auto" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InstaFeedImg;
