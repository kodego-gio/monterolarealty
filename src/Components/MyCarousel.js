import React from 'react'
import { Carousel } from 'react-bootstrap'


function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={require('../imgs/alveo.png')}
            alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/amenities.png')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/houseandlot.png')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel