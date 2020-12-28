import React from "react";
import './style.css';
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    
    return(
        <Carousel controls={false} interval={3000} id={'carousel'}>
            <Carousel.Item>
                <img className={'d-block w-100'} src="img/slider/slide1.png" alt="slide1"/>
            </Carousel.Item>

            <Carousel.Item>
                <img className={'d-block w-100'} src="img/slider/slide1.png" alt="slide1"/>
            </Carousel.Item>

            <Carousel.Item>
                <img className={'d-block w-100'} src="img/slider/slide1.png" alt="slide1"/>
            </Carousel.Item>

        </Carousel>
    )
}

export default Slider;