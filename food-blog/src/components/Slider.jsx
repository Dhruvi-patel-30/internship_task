import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { assets } from "../assets/assets";
import SiteButton from "../components/SiteButton";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const sliderData = [
  {
    id: 1,
    image: `${assets.sliderBg3}`,
    btn1Text: "GOOD FOOD GREAT MOOD",
    headTex: "EAT Healthy,",
    subTxt: "Live Happy",
    desc: "Discover nourishing recipes, wellness tips and mindful eating ideas for a better you, every day.",
  },
  {
    id: 2,
    image: `${assets.sweet}`,
    btn1Text: "EAT WELL, LIVE WELL",
    headTex: "Sweet Moments",
    subTxt: "Pure Happiness",
    desc: "Indulge in irresistible desserts made with love and the fitness ingredients. Treat yourself, you deserve it!",
  },

  {
    id: 3,
    image: `${assets.veg}`,
    btn1Text: "GOOD FOOD, FRESH TASTE",
    headTex: "Simply Delicious",
    subTxt: "Big Taste",
    desc: "From quick & easy meals to gourmet delights, find recipes that bring flavor, joy and togetherness to your table.",
  },
];

const Slider = () => {
  return (
    <Carousel
      data-bs-theme="dark"
      className="m-3 shadow-lg img-fluid rounded-3 overflow-hidden "
    >
      {sliderData.map((data) => (
        <Carousel.Item key={data.id}>
          <img
            className="d-block w-100 object-fit-cover"
            style={{ height: "550px" }}
            src={data.image}
            alt="First slide"
          />
          <Carousel.Caption
            className="text-start d-flex flex-column justify-content-center h-100 pb-5 "
            style={{ left: "10%", right: "auto", maxWidth: "500px" }}
          >
            <SiteButton
              text={data.btn1Text}
              className={
                " text-success rounded-5 bg-success bg-opacity-10 border-0 p-2 mb-3"
              }
              style={{ width: "50%", minWidth: "200px" }}
              icon={
                <FontAwesomeIcon
                  icon={faLeaf}
                  style={{ color: "rgb(45, 170, 105)", paddingLeft: "5px" }}
                />
              }
            />
            <h1 className="text-dark  fw-xl display-3 fw-semibold">
              {data.headTex}
            </h1>
            <h2
              className="display-1"
              style={{ fontFamily: "Brush Script MT", color: "green" }}
            >
              {data.subTxt}
            </h2>
            <p className="text-dark mb-4">{data.desc}</p>
            <div className="d-flex flex-column gap-3 flex-sm-row w-100">
              <SiteButton
                text={data.btn1Text}
                className={
                  " text-success p-2 rounded-5 bg-success  border-0  mb-3 text-white"
                }
                style={{ width: "35%", minWidth: "150px" }}
                icon={
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      paddingLeft: "5px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                }
                text="Explore recipes"
              />

              <SiteButton
                text="EAT WELL, LIVE WELL"
                className={
                  " text-success p-2 rounded-5 bg-success  border-0  mb-3 text-white"
                }
                style={{ width: "35%", minWidth: "150px" }}
                text="Browse Categories"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
