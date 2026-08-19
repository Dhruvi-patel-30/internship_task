import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  faLocationDot,
  faCity,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteText from "./SiteText";

const Map = () => {
  return (
    <div className=" m-3 rounded border">
      <Row className="justify-content-between text-center p-2 flex-row ">
        <Col xs={12} md={4} lg={4} className="">
          <div className="d-flex align-items-center justify-content-center">
            <section
              className="d-flex align-items-center justify-content-center m-3"
              style={{
                backgroundColor: "rgba(215, 231, 178, 1.00)",
                minWidth: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "rgba(47, 91, 8, 1.00)" }}
              />
            </section>
            <section>
              <SiteText
                text="Find Us on Map "
                className="fs-2 fw-semibold text-start mb-0"
              />
              <SiteText
                text=" Us on MapFind Us on Mapind Us on Map "
                className="fs-6 text-muted text-start"
              />
            </section>
          </div>
          <div className="mt-4 d-flex justify-content-center mb-3">
            <Card
              className="border-0 d-flex flex-row  text-center px-4   justify-content-center "
              style={{ backgroundColor: "rgba(242, 248, 232, 1.00)" }}
            >
              <FontAwesomeIcon
                icon={faCity}
                style={{ color: "rgba(31, 68, 4, 1.00)" }}
                className="p-4 "
              />

              <div className="fw-semibold pt-3 pb-3 ">
                <SiteText
                  text="FoodieBlog"
                  className="text-start fs-5 mb-0 fw-semibold"
                />
                <SiteText
                  text="Rajkot, Gujarat, India"
                  className="text-start fs-6 mb-0"
                />{" "}
                <SiteText
                  text="Open : Mon - Fri, 9AM - 6AM"
                  className="text-start fs-6 mb-0"
                />
                {/* <SiteText
                  text="Get Directions"
                   
                /> */}
                <p
                  className="text-start fs-6 mb-0"
                  style={{ color: "rgba(31, 68, 4, 1.00)" }}
                >
                  Get Directions.
                </p>
                
              </div>
            </Card>
          </div>
        </Col>
        <Col xs={12} md={8} lg={8} className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6485015185344!2d70.78054757506905!3d22.29130097969308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb73436dd063%3A0x686603e454f5cc3b!2sThe%20Fruit%20Cart%20'Pure%20'n%20Natural'!5e0!3m2!1sen!2sin!4v1787132690643!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Map;
