import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { assets } from '../assets/assets';
const Slider = () => {
  return (
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={assets.slider1Bg} alt="First slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={assets.formBg} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={assets.formBg} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider