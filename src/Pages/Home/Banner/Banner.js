import React, { useState } from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner-1.png';
import banner2 from '../../../Images/banner-2.jpg';
import banner3 from '../../../Images/banner-3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block banner-area"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner-area"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner-area"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    );
};

export default Banner;