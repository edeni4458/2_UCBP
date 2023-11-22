import React from 'react'
import { Link } from 'react-router-dom';


import bigBoss from '../images/big-boss.jpg'
import venomSnake from '../images/venom-snake.jpg'
import supportMB from '../images/support-mother-base.jpg'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainTop = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
    };

    return (
        <div>
            <div className="first-bot-width">
                {/* <h2>React Carousel</h2> */}
                <Slider {...settings} className='slider-set-main'>
                    <div className='slider-set'>
                        <img className='mid-pic' src={bigBoss} alt="Image 1" />
                        <h4>Share what are your favorite Snake tales.</h4>
                    </div>
                    <div className='slider-set'>
                        <img className='mid-pic' src={venomSnake} alt="Image 2" />
                        <h4><Link to={"/news"} className='nav-link'>What's new in the Metal Gear universe...</Link></h4>
                    </div>
                    <div className='slider-set'>
                        <img className='mid-pic' src={supportMB} alt="Image 3" />
                        <h4><Link to={"/about"} className='nav-link'>Learn more about who we are.</ Link></h4>
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>
        </div>
    );

}

export default MainTop