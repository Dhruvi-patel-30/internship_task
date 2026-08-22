import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteText from "./SiteText";

const cardData = [
  {
    id: 1,
    icon: faEnvelope,
    text1: "Email Us",
    text2: "suppoer@foodieblog.com",
    text3: "We'll repl within 24 hours",
  },
  {
    id: 2,
    icon: faPhone,
    text1: "Call Us",
    text2: "+91 98765 43621",
    text3: "Mon-Fri, 9AM - 6AM",
  },
  {
    id: 3,
    icon: faLocationDot,
    text1: "OUr Location",
    text2: "Rajkot, Gujarat, India",
    text3: "Let's get connected!",
  },
];

const ContactCard = () => {
  return (
    <div className="px-3 px-md-5 my-4">
      <Container>
        <Row className="text-center text-md-start justify-content-center d-flex align-items-stretch">
          {cardData.map((card) => (
            <Col key={card.id} xs={12} md={4} lg={4} className="p-2 d-flex">
              <Card className="h-100 w-100 bg-light shadow-sm border-0">
                <Card.Body
                  style={{ backgroundColor: "rgba(242, 248, 233, 1.00)" }}
                  className="d-flex flex-column flex-md-column flex-lg-row   align-items-center p-4"
                >
                  <div
                    className="d-flex align-items-center mb-md-3 justify-content-center mb-3 mb-md-0 me-md-4 flex-shrink-0"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(229, 241, 201, 1.00)",
                    }}
                  >
                    <FontAwesomeIcon
                      size="2x"
                      icon={card.icon}
                      style={{ color: "rgba(64, 109, 11, 1.00)" }}
                      className="hover"
                    />
                  </div>

                  <div className="w-100 text-center text-md-start">
                    <SiteText className="mb-1 fw-bold fs-5" text={card.text1} />

                    <SiteText
                      className="mb-1 text-break fw-semibold"
                      text={card.text2}
                    />

                    <SiteText
                      className="text-muted small mb-0"
                      text={card.text3}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ContactCard;
