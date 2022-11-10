import React from 'react'
import {Carousel} from 'react-bootstrap'
const Carousal = () => {
  return (
    <>
    <div className='brand-section-slider'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="slide"
          src="./images/C1-removebg-preview.png"
          alt="trusted-brands"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
        
          className="slide"
          src="./images/C2-removebg-preview.png"
          alt="trusted-brands"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src="./images/C3-removebg-preview.png"
          alt="trusted-brands"
        />
      </Carousel.Item>
    </Carousel>
</div>
  </>
  )
}

export default Carousal


