import React from "react";
import { assets } from "../assets/assets";
import SiteText from "./SiteText";
import { Row, Col, Image, Card } from "react-bootstrap";

const cardData = [
  {
    id: 1,
    img: assets.about5,
    main: "Variety of Recipes",
    sub: "From quick homemade meals to gourmet dishes, we have something for everyone.",
  },
  {
    id: 2,
    img: assets.about4,
    main: "Focus on Health",
    sub: "Nutritious and balanced food ideas for a healthier, happier you.",
  },
  {
    id: 3,
    img: assets.about3,
    main: "Food Stories & Tips",
    sub: "Explore food culture, restaurant reviews, and practical tips for everyday life.",
  },
];

const AboutCard = () => {
  return (
    <div className="px-5 bg-white">
      <Row className="text-center justify-content-center d-flex align-items-stretch">
        {cardData.map((card) => (
          <Col key={card.id} xs={12} sm={3} lg={3} className="p-1 d-flex ">
            <Card className="h-100 w-100 bg-light shadow-sm hover">
              <Card.Body>
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-3 custom-small-img img-fluid"
                  style={{
                    width: "150px",
                    height: "120px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(235, 244, 223, 1.00)",
                    padding: "20px",
                  }}
                >
                  <Image
                    src={card.img}
                    roundedCircle
                    className="object-fit-contain w-100 h-100 hover"
                  />
                </div>
                <p className="mt-4 mb-1 fw-bold fs-5">{card.main}</p>
                <p>{card.sub}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutCard;
